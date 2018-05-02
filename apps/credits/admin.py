# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Credit_Movement, Credit_Payment
# from general.models.companies import Company


@admin.register(Credit_Movement)
class Credit_MovementAdmin(admin.ModelAdmin):

    list_display = ('movement_number', 'movement_type', 'amount', 'created')

    search_fields = ('movement_number', 'movement_type', 'amount', 'created')


@admin.register(Credit_Payment)
class Credit_PaymentAdmin(admin.ModelAdmin):

    list_display = ('payment_number', 'description', 'amount', 'created')

    search_fields = ('payment_number', 'amount', 'created')
