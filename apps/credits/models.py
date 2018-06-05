# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError, transaction
from apps.utils.exceptions import TransactionError
from apps.utils.utils import calculate_next_consecutive



class Credit_Movement(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    client_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    bill_id = models.CharField(max_length=255, verbose_name='ID Objeto Factura')
    credit_note_id = models.CharField(max_length=255, blank=True, null=True,
                                      verbose_name='ID Objeto nota de crédito')
    debit_note_id = models.CharField(max_length=255, blank=True, null=True,
                                     verbose_name='ID Objeto nota de débito')
    payment_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Pago', default='')
    movement_type = models.CharField(max_length=4, choices=MOVEMENT_CHOICES, default=credit,
                                     verbose_name='Tipo de Movimiento')

    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto movimiento')

    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')


    @classmethod
    def create(self_cls, **kwargs):
        print('create credit movement')
        with transaction.atomic():
            #check incoming data
            if kwargs['movement_type']=='CRED':
                kwargs['amount'] = kwargs['amount']*-1
            mov_for_validation =  Credit_Movement(**kwargs).full_clean()
            #obtain the next consecutive
            next_consecutive = calculate_next_consecutive(self_cls)
            #inject the consecutive in the incoming kwargs
            kwargs['consecutive'] = next_consecutive
            #create the Creditmovement object
            mov = self_cls.objects.create(**kwargs)
            mov.save()
            print('Done')
            return mov


    def __str__(self):
        return self.consecutive

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['consecutive']


class Credit_Payment(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    sales = models.TextField(verbose_name='Objeto Array de Facturas', default='')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    amount = models.DecimalField(max_digits=11, decimal_places=5, verbose_name='Monto',
                                 blank=True, default=0)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return self.consecutive

    class Meta:
        verbose_name = 'Pago de Crédito'
        verbose_name_plural = 'Pagos de Crédito'
        ordering = ['consecutive']

class Credit_Note(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    sale_id = models.CharField(max_length=80, verbose_name='ID de la venta asociada', default='')
    submited_to_hacienda = models.BooleanField(verbose_name="Enviada al sistema de Hacienda?")
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    user_id =  models.CharField(max_length=80, verbose_name="ID Objeto Usuario")
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    amount = models.DecimalField(max_digits=11, decimal_places=5, verbose_name='Monto',
                                 blank=True, default=0) 
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return self.consecutive

    class Meta:
        verbose_name = 'Notao de Crédito'
        verbose_name_plural = 'Notas de Crédito'
        ordering = ['consecutive']

try:
    content_type = ContentType.objects.get_for_model(Credit_Movement)
    permission = Permission.objects.create(
        codename='list_credit_movement',
        name='Can list Credit Movement',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


try:
    content_type = ContentType.objects.get_for_model(Credit_Payment)
    permission = Permission.objects.create(
        codename='list_credit_payment',
        name='Can list Credit Payment',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
