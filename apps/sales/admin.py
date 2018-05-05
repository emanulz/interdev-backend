# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Sale, Cash_Advance


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):

    list_display = ('bill_number', 'created', 'updated')

    search_fields = ('bill_number', )


@admin.register(Cash_Advance)
class Cash_AdvanceAdmin(admin.ModelAdmin):

    list_display = ('advance_number', 'created', 'updated')

    search_fields = ('advance_number', )
