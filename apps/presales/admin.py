# -*- coding: utf-8 -*-

from __future__ import unicode_literals

from django.contrib import admin
from .models import Presale


@admin.register(Presale)
class PresaleAdmin(admin.ModelAdmin):

    list_display = ('consecutive', 'created', 'updated')

    search_fields = ('consecutive', )
