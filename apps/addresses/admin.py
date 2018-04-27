# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Province, Canton, District, Town
# from general.models.companies import Company


@admin.register(Province)
class ProvinceAdmin(admin.ModelAdmin):

    list_display = ('code', 'name')

    list_display = ('code', 'name')


@admin.register(Canton)
class CantonAdmin(admin.ModelAdmin):

    list_display = ('code', 'name', 'province_code')

    list_display = ('code', 'name', 'province_code')


@admin.register(District)
class DistrictAdmin(admin.ModelAdmin):

    list_display = ('code', 'name', 'province_code', 'canton_code')

    list_display = ('code', 'name', 'province_code', 'canton_code')


@admin.register(Town)
class TownAdmin(admin.ModelAdmin):

    list_display = ('code', 'name', 'province_code', 'canton_code', 'district_code')

    list_display = ('code', 'name', 'province_code', 'canton_code', 'district_code')
