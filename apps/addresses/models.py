# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType


class Province(models.Model):

    code = models.CharField(max_length=1, default='1', verbose_name='Código de provincia')
    name = models.CharField(max_length=80, default='San José', verbose_name='Provincia')

    def __str__(self):
        return '%s - %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Provincia'
        verbose_name_plural = 'Provincias'
        ordering = ['id']


try:
    content_type = ContentType.objects.get_for_model(Province)
    permission = Permission.objects.create(
        codename='list_province',
        name='Can list Provincia',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass


class Canton(models.Model):

    code = models.CharField(max_length=255, default='1', verbose_name='Código de cantón')
    name = models.CharField(max_length=80, default='San José', verbose_name='Cantón')
    province_code = models.CharField(max_length=255, default='1', verbose_name='Código de provincia')

    def __str__(self):
        return '%s - %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Canton'
        verbose_name_plural = 'Cantones'
        ordering = ['id']


try:
    content_type = ContentType.objects.get_for_model(Canton)
    permission = Permission.objects.create(
        codename='list_canton',
        name='Can list Canton',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass


class District(models.Model):

    code = models.CharField(max_length=255, default='1', verbose_name='Código de cantón')
    name = models.CharField(max_length=80, default='CARMEN', verbose_name='Distrito')
    province_code = models.CharField(max_length=255, default='1', verbose_name='Código de Provincia')
    canton_code = models.CharField(max_length=255, default='1', verbose_name='Código de cantón')

    def __str__(self):
        return '%s - %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Distrito'
        verbose_name_plural = 'Distritos'
        ordering = ['id']


try:
    content_type = ContentType.objects.get_for_model(District)
    permission = Permission.objects.create(
        codename='list_district',
        name='Can list District',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass


class Town(models.Model):

    code = models.CharField(max_length=255, default='1', verbose_name='Código de cantón')
    name = models.CharField(max_length=80, default='Amón', verbose_name='Barrio')
    province_code = models.CharField(max_length=255, default='1', verbose_name='Código de Provincia')
    canton_code = models.CharField(max_length=255, default='1', verbose_name='Código de cantón')
    district_code = models.CharField(max_length=255, default='1', verbose_name='Código de Distrito')

    def __str__(self):
        return '%s - %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Barrio'
        verbose_name_plural = 'Barrios'
        ordering = ['id']


try:
    content_type = ContentType.objects.get_for_model(Town)
    permission = Permission.objects.create(
        codename='list_town',
        name='Can list Barrio',
        content_type=content_type,
        )
except Exception as e:
    print (type(e))
    pass
