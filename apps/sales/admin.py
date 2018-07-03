# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Sale, Cash_Advance, Return


@admin.register(Sale)
class SaleAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'created', 'updated')

    search_fields = ('consecutive', )


@admin.register(Cash_Advance)
class Cash_AdvanceAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'created', 'updated')

    search_fields = ('consecutive', )


@admin.register(Return)
class ReturnAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'created', 'updated')

    search_fields = ('consecutive', )
    