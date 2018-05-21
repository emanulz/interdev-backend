# -*- coding: utf-8 -*-
from django.db import models
import uuid

from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Work_Order(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name="Número de orden", editable=False)
    is_closed = models.BooleanField(default=False, verbose_name="Orden Cerrada?")
    paid = models.BooleanField(default=False, verbose_name="Orden Pagada?")
    receiving_employee = models.TextField(verbose_name="Objeto Empleado", default='')
    technician = models.TextField(verbose_name="Tecnico a Cargo", default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(verbose_name="ID Cliente", default='', max_length=40)
    #article properties
    article_type = models.CharField(verbose_name="Tipo Electrodoméstico", default='', max_length=50)
    article_brand = models.CharField(verbose_name="Marca", default='', max_length=100, blank=True, null=True)
    article_model = models.CharField(verbose_name="Modelo", default='', max_length=100, blank=True, null=True)
    article_serial = models.CharField(verbose_name="Número de Serie", max_length=100, blank=True, null=True)
    article_color = models.CharField(verbose_name="Color", default='', max_length=50, blank=True, null=True)
    article_data = models.CharField(max_length=255, blank=True, null=True, verbose_name="Datos del artículo", default='')

    malfunction_details = models.CharField(max_length=255, verbose_name="Detalles falla", default='')
    observations_list = models.TextField(verbose_name="Observaciones", default='') #store several observations as a JSON

    #warranty related properties
    is_warranty = models.BooleanField(default=False, verbose_name="Es una orden de Garantía?")
    warranty_number_bd = models.CharField(verbose_name="Número de garantía Black&Decker", max_length=60, blank=True, null=True)
    warranty_invoice_date = models.DateField(verbose_name="Fecha venta en factura del producto", blank=True, null=True)
    warranty_supplier_name = models.CharField(verbose_name="Nombre de Comercio en factura", max_length=60, blank=True, null=True)
    warranty_invoice_number = models.CharField(verbose_name="Número de Factura de venta", max_length=60, blank=True, null=True)
    warranty_repaired_by = models.DateField(verbose_name="Fecha estimada para entrega", blank=True, null=True)

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Orden de Trabajo"
        verbose_name_plural = "Órdenes de Trabajo"
        ordering = ['consecutive']
        permissions = (("list_work_order", "Can list Work_Order"),)

class Labor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.FloatField(default=0, verbose_name="Costo Mano de Obra ₡")
    description = models.CharField(max_length=255, verbose_name= "Descripción Reparación", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Mano de Obra"
        verbose_name_plural = "Mano de Obra"
        ordering = ['work_order_id']
        permissions = (("list_labor", "Can list Labor"),)


class UsedPart(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.FloatField(default=0, verbose_name="Costo Respuesto ₡")
    description = models.CharField(max_length=255, verbose_name= "Descripción parte", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Repuesto Usado"
        verbose_name_plural = "Repuestos Usados"
        ordering = ['work_order_id']
        permissions = (("list_used_part", "Can list Used Parts"),)

class PartRequest(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.FloatField(default=0, verbose_name="Cantidad")
    product = models.TextField(verbose_name= "Producto", default='')

    id_movement_workshop = models.UUIDField(verbose_name="ID movimiento Bodega de Taller")
    id_movement_origin = models.UUIDField(verbose_name="ID movimeinto Bodega Origen")

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Traslado de Repuesto"
        verbose_name_plural = "Traslados de Repuesto"
        ordering = ['work_order_id']
        permissions = (("list_part_request", "Can list Parts request"),)
