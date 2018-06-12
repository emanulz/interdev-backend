from django.db import models
import uuid
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError, transaction
from django.contrib.auth.models import User
from apps.logs.models import Log
from apps.utils.utils import calculate_next_consecutive, dump_object_json
from apps.utils.exceptions import TransactionError
from apps.suppliers.models import Supplier
from decimal import Decimal, getcontext

class Credit_Movement(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    supplier_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Proveedor',
                                   default='')
    purchase_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Factura', default='')
    credit_note_id = models.CharField(max_length=80, blank=True, null=True,
                                      verbose_name='ID Objeto nota de crédito', default='')
    debit_note_id = models.CharField(max_length=80, blank=True, null=True,
                                     verbose_name='ID Objeto nota de débito', default='')
    payment_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Pago', default='')
    movement_type = models.CharField(max_length=4, choices=MOVEMENT_CHOICES, default=credit,
                                     verbose_name='Tipo de Movimiento')
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto', blank=True, null=True, default=0)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    @classmethod
    def create(self_cls, **kwargs):
        print('Create payables credit movement')
        with transaction.atomic():
            if kwargs['movement_type'] =='CRED':
                kwargs['amount'] = abs(kwargs['amount'])*-1
            user = kwargs['user']
            del kwargs['user']
            Credit_Movement(**kwargs).full_clean()
            #calculate next consecutive
            kwargs['consecutive'] = calculate_next_consecutive(self_cls)
            mov = self_cls.objects.create(**kwargs)
            mov.save()

            mov_new_string = dump_object_json(mov)
            Log.objects.create(**{
                'code': 'PAYABLE_CREDTI_MOVEMENT_CREATED',
                'model': 'PAYABLE_CREDIT_MOVEMENT',
                'prev_object': '',
                'new_object': mov_new_string,
                'description': 'Credit movement initial creation',
                'user': user
            })
            return mov

    def __str__(self):
        return self.consecutive

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['consecutive']

class Credit_Note(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    purchase_id = models.CharField(max_length=80, verbose_name='ID de la venta asociada', default='')
    submited_to_hacienda = models.BooleanField(verbose_name="Enviada al sistema de Hacienda?")
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    user_id =  models.CharField(max_length=80, verbose_name="ID Objeto Usuario")
    supplier = models.TextField(verbose_name='Objeto Proveedor', default='')
    supplier_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto',
                                 blank=True, default=0) 
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    @classmethod
    def create(self_cls, **kwargs):
        next_consecutive = calculate_next_consecutive(self_cls)
        kwargs['consecutive'] = next_consecutive
        kwargs['submited_to_hacienda'] = False
        with transaction.atomic():
            credit_note = self_cls.create(**kwargs)
            credit_note_string = dump_object_json(credit_note)
            description = None
            try:
                description = kwargs['description']
            except KeyError:
                description = 'Nota de Crédito'

            Log.objects.create(**{
                'code': 'PAYABLE_CREDIT_NOTE_CREATED',
                'model': 'PAYABLE_CREDIT_NOTE',
                'prev_object': '',
                'new_object': credit_note_string,
                'description': description,
                'user':kwargs['user']

            })

            #apply credit movement
            #kwargs_debit = {
            #    'supplier_id':kwargs['supplier_id'],
            #    'user': kwargs['user'],
            #    'purchase_id': kwargs['purchase_id'],
            #    'credit_note_id': credit_note.id,
            #    'debit_note_id': '',
            #    'payment_id': '',
            #    'mov_type': 'DEBI',
            #    'amount': kwargs['amount'],
            #    'description': 'Movimiento de Débito por Nota Crédito {}'.format(credit_note.consecutive)
            #}
            #Credit_Movement.create(**kwargs_debit)
            return credit_note



