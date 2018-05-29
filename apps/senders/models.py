# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
import os
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from uuid import uuid4
from django.db import IntegrityError


def logoUrl(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('logos', filename)


def url(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('keys', filename)


class Sender(models.Model):

    person = '01'
    juridic = '02'
    passport = '03'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_number = models.CharField(max_length=255, default='', verbose_name='Número de Identificación')
    name = models.CharField(max_length=80, default='', verbose_name='Razón Social')
    commercial_name = models.CharField(max_length=80, default='', verbose_name='Nombre comercial')
    phone_country_code = models.CharField(max_length=3, default=506, verbose_name='Código de país télefono')
    phone_number = models.CharField(max_length=20, default='', verbose_name='Teléfono')
    fax_country_code = models.CharField(max_length=3, default=506, verbose_name='Código de país fax')
    fax_number = models.CharField(max_length=20, default='', verbose_name='Fax')
    province = models.CharField(max_length=255, default='', verbose_name='Provincia')
    canton = models.CharField(max_length=255, default='', verbose_name='Cantón')
    district = models.CharField(max_length=255, default='', verbose_name='Distrito')
    town = models.CharField(max_length=255, default='', verbose_name='Barrio')
    other_address = models.CharField(max_length=255, default='', verbose_name='Otras señas')
    email = models.CharField(max_length=255, default='', verbose_name='Email')
    key = models.FileField(upload_to=url, blank=True)
    pin = models.CharField(default='0000', max_length=4, verbose_name='PIN')
    user = models.CharField(default='0000', max_length=255, verbose_name='Usuario del Token')
    password = models.CharField(default='0000', max_length=255, verbose_name='Contraseña del Token')
    logo = models.ImageField(upload_to=logoUrl, blank=True, verbose_name='Logo para Factura')
    logo_width = models.CharField(max_length=6, verbose_name='Ancho del Logo', blank=True, null=True)
    default = models.BooleanField(default=False, verbose_name='Emisor Por Defecto')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def save(self, *args, **kwargs):
        if self.default:
            try:
                temp = Sender.objects.get(default=True)
                if self != temp:
                    temp.default = False
                    temp.save()
            except Sender.DoesNotExist:
                pass
        super(Sender, self).save(*args, **kwargs)

    def __str__(self):
        return '%s - %s' % (self.id_number, self.name)

    class Meta:
        verbose_name = 'Emisor'
        verbose_name_plural = 'Emisores'
        ordering = ['id_number']


try:
    content_type = ContentType.objects.get_for_model(Sender)
    permission = Permission.objects.create(
        codename='list_sender',
        name='Can list Emisor',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
