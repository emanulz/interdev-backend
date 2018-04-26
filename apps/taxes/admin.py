# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Tax
# from general.models.companies import Company


@admin.register(Tax)
class TaxAdmin(admin.ModelAdmin):

    list_display = ('code', 'name', 'created', 'updated')

    search_fields = ('code', 'name', 'created', 'updated')
