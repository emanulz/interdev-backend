# -*- coding: utf-8 -*-
from django.db import models
import uuid

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType

class Work_Order(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    order_number = models.PositiveIntegerField(default=1, verbose_name="Número de orden", editable=False)
    client_id = models.TextField(verbose_name='Objeto Cliente', default='')
    article_type = models.CharField(verbose_name="Tipo Electrodoméstico", default='', max_length=50)
    article_brand = models.CharField(verbose_name="Marca", default='', max_length=100)
    article_model = models.CharField(verbose_name="Modelo", default='', max_length=100)
    article_color = models.CharField(verbose_name="Color", default='', max_length=50)
    article_data = models.CharField(max_length=255, blank=True, null=True, verbose_name="Datos del artículo", default='')
    malfunction_details = models.CharField(max_length=255, verbose_name="Detalles falla", default='')
    observations = models.CharField(max_length=255, verbose_name="Observaciones", default='')


    class Meta:
        verbose_name = "Orden de Trabajo"
        verbose_name_plural = "Órdenes de Trabajo"

