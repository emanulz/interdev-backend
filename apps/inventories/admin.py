# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Inventory_Movement, Warehouse
# from general.models.companies import Company


@admin.register(Inventory_Movement)
class Inventory_MovementAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'movement_type', 'amount', 'created')

    search_fields = ('consecutive', 'movement_type', 'amount', 'created')


@admin.register(Warehouse)
class Warehouse_Admin(admin.ModelAdmin):

    list_display = ('code', 'name', 'location', 'description')

    search_fields = ('code', 'name', 'location', 'description')
