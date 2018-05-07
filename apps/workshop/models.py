# -*- coding: utf-8 -*-
from django.db import models
import uuid

from django.db.models.signals import pre_save
from django.dispatch import receiver
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Work_Order(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_number = models.PositiveIntegerField(default=1, verbose_name="Número de orden", editable=False)
    is_closed = models.BooleanField(default=False, verbose_name="Orden Cerrada")
    receiving_employee = models.TextField(verbose_name="Objeto Empleado", default='')
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
    
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Orden de Trabajo"
        verbose_name_plural = "Órdenes de Trabajo"
        ordering = ['order_number']
        permissions = (("list_work_order", "Can list Work_Order"),)

@receiver(pre_save, sender=Work_Order)
def my_callback(sender, instance, *args, **kwargs):
    top  = Work_Order.objects.select_for_update(nowait=True).order_by('-order_number').first()
    if top:
        instance.bill_number = top._bill_number + 1
    def __str__(self):
        return 'Orden de Trabajo Talle: %s' % self.order_number


