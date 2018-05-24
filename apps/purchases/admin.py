from django.contrib import admin
from .models import Purchase

@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    search_fields = ('consecutive', 'payed', 'invoice_date', 'created', 'updated')
    list_display = ('consecutive', 'created', 'updated')


