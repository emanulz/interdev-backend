# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.core.validators import MaxValueValidator
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
import channels
from asgiref.sync import async_to_sync
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import IntegrityError


class Client(models.Model):

    person = '01'
    juridic = '02'
    passport = '03'

    general = 'GENERAL'
    distrib = 'DISTRIB'
    mayoris = 'WHOLESA'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    CLIENT_TYPE_CHOICES = ((general, 'Cliente General'),
                           (distrib, 'Distribuidor'),
                           (mayoris, 'Mayorista')
                           )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Apellidos')

    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')

    province = models.CharField(max_length=255, default='', verbose_name='Provincia', blank=True, null=True)
    canton = models.CharField(max_length=255, default='', verbose_name='Cantón', blank=True, null=True)
    district = models.CharField(max_length=255, default='', verbose_name='Distrito', blank=True, null=True)
    town = models.CharField(max_length=255, default='', verbose_name='Barrio', blank=True, null=True)
    other_address = models.CharField(max_length=255, default='', verbose_name='Otras señas', blank=True, null=True)

    phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono')
    cellphone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Celular')
    email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email')

    client_type = models.CharField(max_length=7, choices=CLIENT_TYPE_CHOICES, default=general,
                                   verbose_name='Tipo de Cliente')

    pred_discount = models.DecimalField(max_digits=5, decimal_places=2, blank=True,
                                        verbose_name='Descuento Predeterminado', validators=[MaxValueValidator(100)],
                                        default=0)
    max_discount = models.DecimalField(max_digits=5, decimal_places=2, blank=True,
                                       verbose_name='Descuento Máximo', validators=[MaxValueValidator(100)], default=0)
    max_line_discount = models.DecimalField(max_digits=5, decimal_places=2, blank=True,
                                            verbose_name='Descuento Máximo por línea',
                                            validators=[MaxValueValidator(100)], default=0)

    pays_taxes = models.BooleanField(default=True, verbose_name='Paga Impuestos?')

    has_credit = models.BooleanField(default=False, verbose_name='Tiene Crédito?')
    credit_limit = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Límite de Crédito',
                                       blank=True, default=0)
    credit_days = models.PositiveIntegerField(default=30, null=True, blank=True, verbose_name='Días de Crédito')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s %s' % (self.name, self.last_name)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['code']


@receiver(post_save, sender=Client)
def send_message(sender, instance, **kwargs):
    async_to_sync(channels.layers.get_channel_layer().group_send)(
        'global_broadcaster',
        {
            'type': 'broadcast_message',
            'message': 'CLIENT_UPDATED'
        }
    )


try:
    content_type = ContentType.objects.get_for_model(Client)
    permission = Permission.objects.create(
        codename='list_client',
        name='Can list Client',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
