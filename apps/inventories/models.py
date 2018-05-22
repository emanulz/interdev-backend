# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Inventory_Movement(models.Model):

    input = 'INPUT'
    output = 'OUTPUT'
    adjust = 'ADJUST'

    MOVEMENT_CHOICES = ((input, 'Ingreso'),
                        (output, 'Salida'),
                        (adjust, 'Ajuste')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Consecutivo', editable=False)
    movement_type = models.CharField(max_length=4, choices=MOVEMENT_CHOICES, default=input,
                                     verbose_name='Tipo de Movimiento')
    user = models.TextField(verbose_name='Objeto Usuario', default='', blank=True, null=True)
    amount = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Monto',
                                 blank=True, default=0)
    product_id = models.CharField(max_length=255, verbose_name='ID del Producto')
    product = models.TextField(verbose_name='Objeto Producto', default='', blank=True, null=True)
    warehouse_id = models.CharField(max_length=255, verbose_name='ID de la Bodega', blank=True, null=True)
    warehouse = models.TextField(verbose_name='Objeto Bodega', default='', blank=True, null=True)
    is_null = models.BooleanField(default=False, blank=True, verbose_name='Anulado?')
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    id_generator = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID del Generador')
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


try:
    content_type = ContentType.objects.get_for_model(Inventory_Movement)
    permission = Permission.objects.create(
        codename='list_inventory_movement',
        name='Can list Inventory Movement',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass


class Warehouse(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    location = models.CharField(max_length=255, verbose_name='Ubicación', blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return self.code

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['code']


try:
    content_type = ContentType.objects.get_for_model(Warehouse)
    permission = Permission.objects.create(
        codename='list_warehouse',
        name='Can list Warehouse',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass
