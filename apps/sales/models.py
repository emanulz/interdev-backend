# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import uuid

from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.forms.models import model_to_dict
from django.db import IntegrityError
from django.db import transaction
from django.db.models import Max, Sum
from rest_framework.response import Response

from apps.clients.models import Client
from apps.products.models import Product
from apps.inventories.models import Warehouse
from apps.credits.models import Credit_Movement, Credit_Note
from django.contrib.auth.models import User
from apps.logs.models import Log
from apps.utils.exceptions import TransactionError
from apps.utils.utils import calculate_next_consecutive, dump_object_json

from apps.utils.serializers import UserSerialiazer
from decimal import Decimal, getcontext

class Sale(models.Model):

    cash = 'CASH'
    card = 'CARD'
    credit = 'CRED'
    transfer = 'TRAN'
    other = 'OTHE'


    PAY_CHOICES = ((cash, 'Efectivo'),
                   (card, 'Tarjeta'),
                   (credit, 'Crédito'),
                   (transfer, 'Transferencia'),
                   (other, 'Otro')
                   )
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(verbose_name='Número de factura', primary_key=True, editable=False)
    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    pay = models.TextField(verbose_name='Objeto Pago', default='')
    pay_types = models.CharField(max_length=255, default='', verbose_name='Tipos de Pago')
    sale_type = models.CharField(max_length=4, verbose_name="Tipo  de factura, Crédito o Débito", default='')
    sale_total = models.DecimalField(verbose_name="Monto total facturado", max_digits=19, decimal_places=5)
    balance = models.DecimalField(verbose_name="Saldo de factura", max_digits=19, decimal_places=5)
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Venta'
        verbose_name_plural = 'Ventas'
        ordering = ['consecutive']


    @classmethod
    def create(self_cls, cart, client_id, pay, payed, user_id, warehouse_id):
        #set the context precision to 5 decimal places
        getcontext().prec = 20
        client_id = uuid.UUID('4ff0aa2f3ad44d439ed2e610cd77e42a')
        warehouse_id = uuid.UUID('4a25f16d0f1a4e9e95b0a464c085a20c')
        user_id = 1
        
        with transaction.atomic():
            #fetch the client by id
            client = Client.objects.get(id=client_id)
            client_string =  dump_object_json(client)
            #fetch user object
            user = User.objects.get(id=user_id)
            user_string = UserSerialiazer(user).data
            #fetch Warehouse data
            warehouse = Warehouse.objects.get(id = warehouse_id)

            #get next consecutive
            next_consecutive = calculate_next_consecutive(self_cls)

            #check the payment data and apply credit as needed
            pay = [
                {'type':'CASH', 'amount': 2500.0},
                {'type':'CARD', 'amount': 10000.0, 'digits': '4875', 'authorization': 'authorization_code'},
                {'type':'CASH', 'amount': 1800.0}
            ]
            total_payment = Decimal(0)
            pay_types = ''
            for item in pay:
                total_payment += Decimal(item['amount'])
                pay_types = '{}-'.format(item['type'])

            pay_types = pay_types[:-1]

            cart = json.loads(cart)
            cart_total = Decimal(cart['cartTotal'])
            cart_total_rounded = Decimal(round(cart_total, 5))
            credit_balance = cart_total_rounded - total_payment

            sale_type = "CASH"
            if(cart_total>total_payment): sale_type="CRED"

            sale_kwargs = {
                'consecutive': next_consecutive,
                'cart': cart, 
                'client': client_string, 
                'client_id': client_id,
                'sale_total': round(cart_total,5),
                'balance': round((cart_total - total_payment), 5),
                'pay': pay, 
                'sale_type': sale_type,
                'pay_types': pay_types,
                'user': user_string
            }

            validation_sale = Sale(**sale_kwargs).full_clean()

            sale = self_cls.objects.create(**sale_kwargs)
            sale_string = dump_object_json(sale)
            #log the sale creation
            Log.objects.create(**{
                'code':'SALE_CREATED',
                'model':'SALE',
                'prev_object':'',
                'new_object': sale_string,
                'description': 'Sale creation',
                'user':user_string
            })
            if sale_type == "CRED":
                #apply credit movement on client
                client_credit_kwargs = {
                    'client_id': client_id,
                    'amount': credit_balance,
                    'mov_type': 'CRED',
                    'user': user_string
                }
                #the method apply_credit_movement will log an event of its change
                Client.apply_credit_movement(**client_credit_kwargs)
                #create a credit movement for 100% of the trasaction
                kwargs_full_credit = {
                    'user': user_string,
                    'client_id': client_id,
                    'bill_id': sale.id,
                    'movement_type': 'CRED',
                    'amount': round(cart_total,5),
                    'description': 'Movimiento de crédito inicial por factura {}'.format(sale.consecutive)
                }
                #the credit movement will log an event of its own creation
                Credit_Movement.create(**kwargs_full_credit)
                #apply a credit movement of type debit for the total of the payments
                if total_payment > 0:
                    #create a credit movement of type debit for the payment amount
                    kwargs_debit = {
                        'user': user_string,
                        'client_id': client_id,
                        'bill_id': sale.id,
                        'movement_type': 'DEBI',
                        'amount': round(total_payment,5),
                        'description': 'Adelanto a crédito en compra para factura {}'.format(sale.consecutive)   
                    }
                    #the credit movement will log an event of its own creation
                    Credit_Movement.create(**kwargs_debit)
            
            #extract the items from the cart
            cartItems = cart['cartItems']
            id_generator = 'sa_' + str(sale.id)
            individual_mov_desc = "Movimiento por factura # {}".format(str(sale.consecutive))
            for item in cartItems:
                #create an inventory movement
                prod = item['product']
                amount = item['qty']
                mov = Product.inventory_movement(prod['id'], warehouse, 'OUTPUT', amount,
                    user_string, individual_mov_desc, id_generator)
            return sale

    @classmethod
    def apply_payment(self_cls, **kwargs):
        try:
            amount = Decimal(abs(round(kwargs['amount'], 5)))
        except KeyError:
            raise TransactionError({'amount_sale_payment':['The amount of the payment was not sent']})
        
        with transaction.atomic():
            sale = self_cls.objects.select_for_update().get(id=kwargs['sale_id'])
            if amount > sale.balance:
                raise TransactionError({'amount_sale_payment': ['The payment amount is larger than the existent balance. It can be equal at most']})
            #create a json of the current state of the object before the change
            sale_dict = model_to_dict(sale)
            sale_dict['sale_total'] = str(sale_dict['sale_total'])
            sale_dict['balance'] = str(sale_dict['balance'])
            sale_old = json.dumps(sale_dict)

            new_balance = sale.balance - amount
            if(new_balance<0.1): new_balance=Decimal(0)
            sale.balanance = new_balance
            sale.save()
            #create a json of the new sale, re using the model_dict
            sale_dict['balance'] = new_balance
            sale_new = json.dumps(sale_dict)
            #create the log of the change
            log = Log.objects.create(**{
                'code': 'SALE_CREDIT_BALANCE_UDPATE',
                'model': 'SALE',
                'prev_object': sale_old,
                'new_object': sale_new,
                'description': 'Credit payment applied',
                'user': kwargs['user'],  
            })

            
    @classmethod
    def return_products(self_cls, **kwargs):
        print('Return products')



class Return(models.Model):
    
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(verbose_name='Número de factura', primary_key=True, editable=False)
    #subset of the sale cart, with the items being returned and the quantities being returned
    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    sale_id = models.CharField(max_length=80, verbose_name='ID objecto Venta')
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto Retorno')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Devolución'
        verbose_name_plural = 'Devoluciones'
        ordering = ['consecutive']

class Cash_Advance(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de factura', editable=False, unique=True)
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    amount = models.DecimalField(default=0, max_digits=19, decimal_places=5, verbose_name='Monto del avance')
    description = models.CharField(max_length=255, default='', verbose_name='Descripción')
    work_order_id = models.UUIDField(null=True, blank=True)
    sale_id = models.CharField(max_length=255, verbose_name='ID de la venta', blank=True, null=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.advance_number)

    class Meta:
        verbose_name = 'Adelanto de efectivo'
        verbose_name_plural = 'Adelantos de efectivo'
        ordering = ['consecutive']


try:
    content_type = ContentType.objects.get_for_model(Sale)
    permission = Permission.objects.create(
        codename='list_sale',
        name='Can list Sale',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


try:
    content_type = ContentType.objects.get_for_model(Cash_Advance)
    permission = Permission.objects.create(
        codename='list_cash_advance',
        name='Can list Adelanto de efectivo',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
