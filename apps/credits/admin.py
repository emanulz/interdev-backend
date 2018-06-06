# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Credit_Movement
from .credit_payment_model import Credit_Payment
# from general.models.companies import Company


@admin.register(Credit_Movement)
class Credit_MovementAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'movement_type', 'amount', 'created')

    search_fields = ('consecutive', 'movement_type', 'amount', 'created')


@admin.register(Credit_Payment)
class Credit_PaymentAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'description', 'amount', 'created')

    search_fields = ('consecutive', 'amount', 'created')
