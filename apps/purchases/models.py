from django.db import models
import uuid
import json
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import transaction
from apps.utils.utils import calculate_next_consecutive, dump_object_json
from apps.utils.serializers import UserSerialiazer
from apps.utils.exceptions import TransactionError
from django.contrib.auth.models import User
from apps.inventories.models import Warehouse
from apps.suppliers.models import Supplier
from apps.logs.models import Log
from apps.products.models import Product
from decimal import Decimal, getcontext

class Purchase(models.Model):

    cash = 'CASH'
    card = 'CARD'
    credit = 'CRED'
    transfer = 'TRAN'
    other = 'OTHER'

    PAY_CHOICES = ((cash, 'Efectivo'),
                   (card, 'Tarjeta'),
                   (credit, 'Crédito'),
                   (transfer, 'Transferencia'),
                   (other, 'Otro')
                   )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name="Número de compra", editable=False)
    user = models.TextField(verbose_name='Objeto Usuario', default='')

    supplier = models.TextField(verbose_name="Proveedor", default="")
    supplier_id = models.CharField(max_length = 40, verbose_name='ID del Proveedor', default ='')
    warehouse = models.TextField(verbose_name="Bodega de Destino", default="")
    warehouse_id = models.CharField(max_length=40, verbose_name="ID de la Bodega", default="")

    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    
    #indicates wether or not this invoice data load is closed
    is_closed = models.BooleanField(verbose_name="Factura Cerrada", default=False)

    pay = models.TextField(verbose_name='Objeto Pago', default='')

    purchase_total = models.DecimalField(verbose_name="Monto total facturado", max_digits=19, decimal_places=5)
    balance = models.DecimalField(verbose_name="Saldo de factura", max_digits=19, decimal_places=5)
    purchase_type = models.CharField(max_length=4, verbose_name="Tipo  de factura, Crédito o Débito", default='')
    pay_types = models.CharField(max_length=255, default='', verbose_name='Tipos de Pago')

    invoice_number = models.CharField(max_length=255, verbose_name='Número de Factura')
    invoice_date = models.DateField(blank=True, null=True)
    credit_days =  models.IntegerField(default=0, verbose_name='Plazo Crédito')

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    @classmethod
    def apply_payment(self_cls, **kwargs):
        amount = None
        try:
            amount = Decimal(abs(round(kwargs['amount'], 5)))
        except  (KeyError, ValueError):
            raise TransactionError({'amount_purchase_payment': ['The "amount" of the payment was not sent or is not a number']})

        with transaction.atomic():
            purchase = self_cls.objects.select_for_update().get(id=kwargs['purchase_id'])
            


    @classmethod 
    def partial_update(self_cls, user_id, purchase_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = UserSerialiazer(user).data
        apply = None
        try:
            apply = bool(kwargs['apply'])
        except (KeyError, ValueError):
            raise TransactionError({'apply':['The purchase patch parameters did not include the  "apply" keyword']})
        patch_allowed_fields = ('user', 'supplier_id', 'warehouse_id', 'cart', 'pay', 
            'invoice_number', 'invoice_date', 'credit_days')

        patch_kwargs = {}
        errors = {}

        for field in patch_allowed_fields:
            get_create_key(kwargs, patch_kwargs, field, errors, True)
        
        if len(errors.keys())>0:
            raise TransactionError(errors)
        
        with transaction.atomic():
            purchase = self_cls.objects.select_for_update().get(id=purchase_id)
            original_purchase_string = dump_object_json(purchase)
            
            #sanity check on a patch attempt on a closed purchase
            if purchase.is_closed:
                raise TransactionError({'patch_denied':['Cannot patch an already closed purchase']})

            for key in patch_kwargs.keys():
                setattr(purchase, key, patch_kwargs[key])
                if key == 'supplier_id':
                    supplier = Supplier.objects.get(id=patch_kwargs[key])
                    supplier_string = dump_object_json(supplier)
                    setattr(purchase, 'supplier', supplier_string)
                elif key == 'warehouse_id':
                    warehouse = Warehouse.objects.get(id=patch_kwargs[key])
                    warehouse_string = dump_object_json(warehouse)
                    setattr(purchase, 'warehouse', warehouse_string)
                
            purchase.is_closed = apply
            if(apply):
                purchase.validate_purchase_close()

            purchase.save()

            updated_purchase_string = dump_object_json(purchase)

            Log.objects.create(**{
                'code': 'PURCHASE_PATCHED_CLOSED' if apply else 'PURCHASE_PATCHED',
                'model': 'PURCHASE',
                'prev_object': original_purchase_string,
                'new_object': updated_purchase_string,
                'description': 'Purchase patched',
                'user': user_string
            })


            #if the purchase is to be applied, generate the invrntory movements
            if apply:
                cart_object = json.loads(purchase.cart)
                #print(cart_object)
                destination_warehouse = Warehouse.objects.get(id=purchase.warehouse_id)
                for cart_line in cart_object['cartItems']:
                    print("Product\n")
                    print(cart_line)
                    print('\n')
                    #load inventory
                    Product.inventory_movement(
                        cart_line['product']['id'],
                        destination_warehouse,
                        'INPUT',
                        cart_line['qty'],
                        user_string,
                        'Ingreso a inventario por compra con consecutivo {}'.format(purchase.consecutive),
                        purchase.id
                    )
                    #update price
                    price_update_kwargs = {
                        'target_utility': cart_line['target_utility'],
                        'subtotal': cart_line['subtotal'],
                        'quantity': cart_line['qty']
                    }
                    Product.update_product_price(
                        cart_line['product']['id'],
                        user.id,
                        **price_update_kwargs
                    )

            return purchase


    def validate_purchase_close (self):
        '''Checks wether or not the entered information is enough to allow the 
        the purchase to be closed.
        '''
        print("Validate close")
        errors = {}
        try:
            #check tha the supplier_id corresponds to a valid supplier in the db
            supplier = Supplier.objects.get(id=self.supplier_id)
            #check that the warehouse_id corresponds to a warehouse in the db
            warehouse = Warehouse.objects.get(id=self.warehouse_id)
            #check that the cart has at least one item
            cart = json.loads(self.cart)
            print(cart)

            if self.pay == '':
                errors['pay'] = ['The "pay" property is empty']
            if self.invoice_number == '':
                errors['invoice_number'] = ['The "invoice_number" property is empty']
            if self.invoice_date == '1969-01-01':
                errors['invoice_date'] = ['The "invoice_date property has not been set']
            if len(errors.keys())>0:
                raise TransactionError(errors)
        except Exception as e:
            print(e)
            raise TransactionError({'invalid_purchase':['The purchase does not have all the required information to be closed']})



    @classmethod
    def create(self_cls, user_id,  **kwargs):
        user = User.objects.get(id=user_id)
        user_string = UserSerialiazer(user).data
        validatePurchaseCreateKwargs(**kwargs)
        apply = bool(kwargs['apply'])

        warehouse = ''
        warehouse_string = ''
        supplier = ''
        supplier_string = ''
        try:
            #obtain the warehouse
            warehouse = Warehouse.objects.get(id=kwargs['warehouse_id'])
            warehouse_string = dump_object_json(warehouse)
        except Exception as e:
            print(type(e))
            print(e)
            if(apply):
                raise TransactionError(e)

        try:
            #obtain the supplier
            supplier = Supplier.objects.get(id=kwargs['supplier_id'])
            supplier_string = dump_object_json(supplier)
        except Exception as e:
            print(type(e))
            print(e)
            if(apply):
                raise TransactionError(e)

        if(kwargs['invoice_date']=='' and not apply):
            kwargs['invoice_date']='1969-01-01'

        pays = json.loads(kwargs['pay'])
        total_payment = Decimal(0)
        pay_types = ''
        for key in pays.keys():
            for item in pays[key]:
                if item['type'] != 'CRED':
                    total_payment += abs(Decimal(item['amount']))

                if Decimal(item['amount']) > 0 or item['type'] == 'CRED':
                    pay_types += '{}-'.format(item['type'])
        pay_types = pay_types[:-1]

        #load the cart 

        with transaction.atomic():
            print('Atomic!!')
            next_consecutive = calculate_next_consecutive(self_cls)
            purchase = self_cls.objects.create(
                consecutive = next_consecutive,
                user = user_string,
                supplier = supplier_string,
                supplier_id = supplier.id if supplier_string != '' else '',
                warehouse = warehouse_string,
                warehouse_id = warehouse.id if warehouse_string != '' else '',
                cart = kwargs['cart'],
                is_closed = apply,
                pay =  kwargs['pay'],
                invoice_number = kwargs['invoice_number'],
                invoice_date = kwargs['invoice_date'],
                credit_days = kwargs['credit_days']
            )

            #if the purchase was flagged to be closed, check it all the necessary data has been sent
            if apply:
                purchase.validate_purchase_close()

            Log.objects.create(**{
                'code': 'PURCHASE_CREATED_CLOSED' if apply else 'PURCHASE_CREATED',
                'model': 'PURCHASE',
                'prev_object': '',
                'new_object': dump_object_json(purchase),
                'description': 'Purchase created and applied' if apply else 'Purchase saved but not applied',
                'user': user_string
            })
            

            if apply:
                print("Do price updates and inventory movements")
            
            return purchase
            



def validatePurchaseCreateKwargs(**kwargs):
    validate_args = ['warehouse_id', 'supplier_id', 'cart', 'invoice_number',
                    'invoice_date', 'credit_days']
    errors={}
    try:
        apply = bool(kwargs['apply'])
    except KeyError:
        raise TransactionError({'apply':['The required argument "apply" was not sent on the purchase create call']})
    except ValueError:
        errors['apply'] = ['The value of the parameter "apply" could not be converted to a boolean']
    
    for arg in validate_args:
        try:
            kwargs[arg]
        except KeyError:
            errors[arg] = 'The parameter "{}" was not sent in **kwargs'.format(arg)
    if len(errors.keys())>0:
        raise TransactionError(errors)

def get_create_key(target_dict, create_data, key, errors, optional= False):
    try:
        create_data[key] = target_dict[key]
    except KeyError:
        if not optional:
            errors[key] = ['Missing required argument {}'.format(key)]
            



