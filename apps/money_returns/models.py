from django.db import models
import uuid
from django.db import IntegrityError, transaction
from decimal import Decimal, getcontext
from apps.utils.utils import calculate_next_consecutive
from apps.logs.models import Log
from apps.utils.utils import dump_object_json
from apps.utils.exceptions import TransactionError


class Money_Return(models.Model):
    
    
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)    
    client_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    user_id = models.CharField(max_length=80, verbose_name="ID objeto usuario")
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    credit_note_id = models.CharField(max_length=80, blank=True, null=True,
                                      verbose_name='ID Objeto nota de crédito')
    sale_id = models.CharField(max_length=255, verbose_name='ID Objeto Factura')
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto movimiento')

    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')


    @classmethod
    def create(self_cls, **kwargs):
        '''creates a Money Return transaction and logs its creation'''
        next_consecutive = calculate_next_consecutive(self_cls)
        kwargs['consecutive'] = next_consecutive
        money_return = self_cls.objects.create(**kwargs)
        money_return_string = dump_object_json(money_return)
        #log the object creation
        Log.objects.create(**{
            'code': 'MONEY_RETURN_CREATED',
            'model': 'MONEY_RETURN',
            'prev_object': '',
            'new_object': money_return_string
        })

        return money_return


    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Retorno de Efectivo'
        verbose_name_plural = 'Retornos de Efectivo'
        ordering = ['consecutive']



class Credit_Voucher(models.Model):
    
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)    
    client_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    user_id = models.CharField(max_length=80, verbose_name="ID objeto usuario")
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    credit_note_id = models.CharField(max_length=80, blank=True, null=True,
                                  verbose_name='ID Objeto nota de crédito')
    voucher_applied = models.BooleanField(verbose_name="Fue redimido el Vale?", default=False)
    #the total original value of the voucher
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto movimiento', editable=False)
    #the value of the voucher spent when it was consumed
    amount_applied = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name='Monto del Vale gastado')
    sale_id = models.CharField(max_length=80, verbose_name='ID Objeto Factura')
    return_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Retorno', default='')
    #the money voucher id will be normally left untouched, it will be there in case a voucher is only partially
    #used, then a new voucher for the remaining amount will be created, this will keep a link to the original voucher
    money_voucher_id = models.CharField(max_length=80, verbose_name="ID del creador", null=True, blank=True)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')


    @classmethod
    def spend_voucher(self_cls, **kwargs):
        '''spend the voucher paying the balances in the pay details'''
        amount =  abs(Decimal(kwargs['amount']))
        user_string = kwargs['user_string']

        voucher = self_cls.objects.select_for_update().get(id=kwargs['credit_voucher_id'])
        original_voucher_string = dump_object_json(voucher)

        if(amount > voucher.amount):
            raise TransactionError({'payment_amount':['The amount to be paid with the voucher is larger than its value']})
        
        #decrease the voucher by the payment amount
        voucher.amount_applied = amount
        voucher_applied = True
        voucher.save()
        updated_voucher_string = dump_object_json(voucher)
        Log.objects.create(**{
            'code': 'CREDIT_VOUCHER_APPLIED',
            'model': 'CREDIT_VOUCHER',
            'prev_object': original_voucher_string,
            'new_object': updated_voucher_string,
            'description':'Aplicado por completo' if voucher.amount_applied >= voucher.amount else 'Consumido parcialmente',
            'user': user_string
        })
        if(voucher.amount_applied < voucher.amount):
            #create a new voucher for the leftover balance
            child_voucher = self_cls.create(**{
                'client': voucher.client,
                'client_id': voucher.client_id,
                'user': voucher.user,
                'user_id': voucher.user_id,
                'credit_note_id': voucher.credit_note_id,
                'sale_id': voucher.sale_id,
                'amount': Decimal(round(voucher.amount-voucher.amount_applied, 5)),
                'money_voucher_id': voucher.id,
                'description': 'Creado por gasto parcial de voucher padre'
            })
            return child_voucher

        return None

    @classmethod
    def convert_to_cash(self_cls, **kwargs):

        user_string = kwargs['user_string']
        voucher = self_cls.objects.get(id=kwargs['credit_voucher_id'])
        original_voucher_string = dump_object_json(voucher)

        #do not allow partial conversions to cash
        voucher.amount_applied = voucher.amount
        voucher.applied = True
        voucher.save()
        updated_voucher_string = dump_object_json(voucher)
        Log.objects.create(**{
            'code':'CREDIT_VOUCHER_CONVERTED_TO_CASH',
            'model': 'MONEY_VOUCHER',
            'prev_object': original_voucher_string,
            'new_object': updated_voucher_string,
            'description': 'Voucher de Crédito devuelto como dinero',
            'user': user_string
        })

        #create a Money return object


    @classmethod
    def create(self_cls, **kwargs):
        next_consecutive = calculate_next_consecutive(self_cls)
        kwargs['consecutive']= next_consecutive
        with transaction.atomic():
            voucher = self_cls.objects.create(**kwargs)
            #log the creation of the voucher itself
            voucher_string = dump_object_json(voucher)
            Log.objects.create(**{
                'code': 'CREDIT_VOUCHER_CREATED',
                'model': 'CREDIT_VOUCHER',
                'prev_object': '',
                'new_object': voucher_string,
                'description': '',
                'user':kwargs['user']
            })
            return voucher

    

    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Vale Crédito'
        verbose_name_plural = 'Vales Crédito'
        ordering = ['consecutive']