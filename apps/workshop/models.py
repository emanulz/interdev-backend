# -*- coding: utf-8 -*-
from django.db import models
import uuid

from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Work_Order(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, default=1, verbose_name="Número de orden", editable=False)
    is_closed = models.BooleanField(default=False, verbose_name="Orden Cerrada")
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
    observations = models.TextField(verbose_name="Observaciones", default='') #store several observations as a JSON

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



class Parts_Request(models.Model):

    inbound = "IN"
    outbound = "OUT"
    movement_choices=((inbound, 'ENTRADA'),(outbound,'SALIDA'))


    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    part = models.TextField(verbose_name="Objeto Parte", default='')
    quantity = models.IntegerField(default=1, verbose_name="Cantidad")
    movement_type = models.CharField(verbose_name="Tipo Movimiento", max_length=40, choices=movement_choices, default='')
    origin_warehouse = models.CharField(verbose_name="Bodega de Origen", max_length=40, default='')
    destination_warehouse = models.CharField(verbose_name="Bodega de Destino", max_length=40, default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')
    
    def __str__(self):
        return "Solicitud Repuesto -> Orden Trabajo %s, Cantidad %s, Parte %s" % (
            self.work_order_id, self.quantity, self.part)
    class Meta:
        verbose_name = "Solicitud de Parte"
        verbose_name_plural = "Solicitudes de Parte"
        ordering = ['work_order_id']
        permissions = (("list_part_request", "Can list Part_Request"),)

class Labor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    cost = models.FloatField(default=0, verbose_name="Costo Mano de Obra ₡")
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

    def __str__(self):
        return "Mano de Obra ->Orden Trabajo %s, Costo %s, Descripción %s" % (
            self.work_order_id, self.cost, self.description)