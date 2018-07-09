from django.db import models
import uuid
from django.db import IntegrityError, transaction
from decimal import Decimal, getcontext
from apps.utils.utils import calculate_next_consecutive
from logs.models import Log
from apps.utils.utils import dump_object_json
from apps.utils.exceptions import TransactionError

class Credit_Voucher(models.Model):
    
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)    
    supplier_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    supplier = models.TextField(verbose_name='Objeto Cliente', default='')
    user_id = models.CharField(max_length=80, verbose_name="ID objeto usuario")
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    credit_note_id = models.CharField(max_length=80, blank=True, null=True,
                                  verbose_name='ID Objeto nota de crédito')
    voucher_applied = models.BooleanField(verbose_name="Fue redimido el Vale?", default=False)
    #the total original value of the voucher
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto movimiento', editable=False)
    #the value of the voucher spent when it was consumed
    amount_applied = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name='Monto del Vale gastado')
    purchase_id = models.CharField(max_length=80, verbose_name='ID Objeto Factura')
    #the money voucher id will be normally left untouched, it will be there in case a voucher is only partially
    #used, then a new voucher for the remaining amount will be created, this will keep a link to the original voucher
    credit_voucher_id = models.CharField(max_length=80, verbose_name="ID del creador", null=True, blank=True)
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
            'code': 'PAYABLE_CREDIT_VOUCHER_APPLIED',
            'model': 'PAYABLE_CREDIT_VOUCHER',
            'prev_object': original_voucher_string,
            'new_object': updated_voucher_string,
            'description':'Aplicado por completo' if voucher.amount_applied >= voucher.amount else 'Consumido parcialmente',
            'user': user_string
        })
        if(voucher.amount_applied < voucher.amount):
            #create a new voucher for the leftover balance
            child_voucher = self_cls.create(**{
                'supplier': voucher.client,
                'supplier_id': voucher.client_id,
                'user': voucher.user,
                'user_id': voucher.user_id,
                'credit_note_id': voucher.credit_note_id,
                'purchase_id': voucher.sale_id,
                'amount': Decimal(round(voucher.amount-voucher.amount_applied, 5)),
                'money_voucher_id': voucher.id,
                'description': 'Creado por gasto parcial de voucher padre'
            })
            return child_voucher

        return None    

    @classmethod
    def create(self_cls, **kwargs):
        kwargs['consecutive'] = calculate_next_consecutive(self_cls)
        with transaction.atomic():
            voucher = self_cls.objects.create(**kwargs)
            voucher_string = dump_object_json(voucher)
            Log.objects.create(**{
                'code': 'PAYABLE_CREDIT_VOUCHER_CREATED',
                'model': 'PAYABLE_CREDIT_VOUCHER',
                'prev_object': '',
                'new_object': voucher_string,
                'description': 'Voucher creado por nota de Crédito {}'.format(kwargs['credit_note_id']),
                'user': kwargs['user']
            })

            return voucher



    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Vale Crédito'
        verbose_name_plural = 'Vales Crédito'
        ordering = ['consecutive']
