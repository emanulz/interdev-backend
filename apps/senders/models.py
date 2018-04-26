# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
import os
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from uuid import uuid4


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

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    id_number = models.CharField(max_length=255, default='', verbose_name='Número de Identificación')
    name = models.CharField(max_length=255, default='', verbose_name='Razón Social')
    commercial_name = models.CharField(max_length=255, default='', verbose_name='Nombre comercial')
    phone_number = models.CharField(max_length=255, default='', verbose_name='Teléfono')
    fax_number = models.CharField(max_length=255, default='', verbose_name='Fax')
    province = models.CharField(max_length=255, default='', verbose_name='Provincia')
    canton = models.CharField(max_length=255, default='', verbose_name='Cantón')
    district = models.CharField(max_length=255, default='', verbose_name='Distrito')
    town = models.CharField(max_length=255, default='', verbose_name='Barrio')
    other_adress = models.CharField(max_length=255, default='', verbose_name='Otras señas')
    email = models.CharField(max_length=255, default='', verbose_name='Email')
    key = models.ImageField(upload_to=url, blank=True)
    pin = models.CharField(default='0000', max_length=4, verbose_name='PIN')
    user = models.CharField(default='0000', max_length=255, verbose_name='Usuario del Token')
    password = models.CharField(default='0000', max_length=255, verbose_name='Contraseña del Token')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s - %s' % (self.id, self.code)

    class Meta:
        verbose_name = 'Emisor'
        verbose_name_plural = 'Emisores'
        ordering = ['id_number']


content_type = ContentType.objects.get_for_model(Sender)
try:
    permission = Permission.objects.create(
        codename='list_sender',
        name='Can list Emisor',
        content_type=content_type,
        )
except IntegrityError:
    pass
