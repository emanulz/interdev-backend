# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Consecutive
# from general.models.companies import Company


@admin.register(Consecutive)
class ConsecutiveAdmin(admin.ModelAdmin):

    list_display = ('id', 'model_name', 'consecutive')

    search_fields = ('id', 'model_name', 'consecutive')
