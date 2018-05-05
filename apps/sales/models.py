# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


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
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bill_number = models.IntegerField(default=1, verbose_name='Número de factura', editable=False, unique=True)
    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    pay = models.TextField(verbose_name='Objeto Pago', default='')
    pay_type = models.CharField(max_length=4, choices=PAY_CHOICES, default=cash, verbose_name='Tipo de Pago')
    payed = models.BooleanField(default=True, verbose_name='Pagada')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.bill_number)

    class Meta:
        verbose_name = 'Venta'
        verbose_name_plural = 'Ventas'
        ordering = ['bill_number']


@receiver(pre_save, sender=Sale)
def next_bill_number(sender, instance, *args, **kwargs):
    top = Sale.objects.select_for_update(nowait=True).order_by('-bill_number').first()
    if top:
        instance.bill_number = top.bill_number + 1


class Cash_Advance(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    advance_number = models.IntegerField(default=1, verbose_name='Número de factura', editable=False, unique=True)
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    amount = models.FloatField(default=0, verbose_name='Monto del avance')
    description = models.CharField(max_length=255, default='', verbose_name='Descripción')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.advance_number)

    class Meta:
        verbose_name = 'Adelanto de efectivo'
        verbose_name_plural = 'Adelantos de efectivo'
        ordering = ['advance_number']


@receiver(pre_save, sender=Cash_Advance)
def next_advance_number(sender, instance, *args, **kwargs):
    top = Cash_Advance.objects.select_for_update(nowait=True).order_by('-advance_number').first()
    if top:
        instance.advance_number = top.advance_number + 1


content_type = ContentType.objects.get_for_model(Sale)
try:
    permission = Permission.objects.create(
        codename='list_sale',
        name='Can list Sale',
        content_type=content_type,
        )
except IntegrityError:
    pass


content_type = ContentType.objects.get_for_model(Cash_Advance)
try:
    permission = Permission.objects.create(
        codename='list_cash_advance',
        name='Can list Adelanto de efectivo',
        content_type=content_type,
        )
except IntegrityError:
    pass
