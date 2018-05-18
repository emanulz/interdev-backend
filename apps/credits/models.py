# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


class Credit_Movement(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    client_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    bill_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Factura', default='')
    credit_note_id = models.CharField(max_length=255, blank=True, null=True,
                                      verbose_name='ID Objeto nota de crédito', default='')
    debit_note_id = models.CharField(max_length=255, blank=True, null=True,
                                     verbose_name='ID Objeto nota de débito', default='')
    payment_id = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID Objeto Pago', default='')
    movement_type = models.CharField(max_length=4, choices=MOVEMENT_CHOICES, default=credit,
                                     verbose_name='Tipo de Movimiento')
    amount = models.FloatField(verbose_name='Monto', blank=True, null=True, default=0)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    is_null = models.BooleanField(default=False, blank=True, verbose_name='Anulado?')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

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
    amount = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Monto',
                                 blank=True, default=0)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    is_null = models.BooleanField(default=False, blank=True, verbose_name='Anulado?')
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


content_type = ContentType.objects.get_for_model(Credit_Movement)
try:
    permission = Permission.objects.create(
        codename='list_credit_movement',
        name='Can list Credit Movement',
        content_type=content_type,
        )
except IntegrityError:
    pass


content_type = ContentType.objects.get_for_model(Credit_Payment)
try:
    permission = Permission.objects.create(
        codename='list_credit_payment',
        name='Can list Credit Payment',
        content_type=content_type,
        )
except IntegrityError:
    pass
