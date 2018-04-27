# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Sender
# from general.models.companies import Company


@admin.register(Sender)
class SenderAdmin(admin.ModelAdmin):

    list_display = ('id_number', 'name', 'commercial_name', 'phone_number')

    search_fields = ('id_number', 'name', 'commercial_name', 'phone_number')
