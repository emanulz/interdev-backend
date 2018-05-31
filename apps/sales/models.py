# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
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
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de factura', editable=False, unique=True)
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
        ordering = ['consecutive']


class Cash_Advance(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de factura', editable=False, unique=True)
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    amount = models.FloatField(default=0, verbose_name='Monto del avance')
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
