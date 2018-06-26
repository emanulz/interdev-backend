from django.contrib import admin

from django.contrib import admin
from .models import Code

@admin.register(Code)
class CodeAdmin(admin.ModelAdmin):

    list_display = ('id', 'model_name', 'consecutive')

    search_fields = ('id', 'model_name', 'consecutive')