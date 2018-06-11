from django.contrib import admin
from .models import Credit_Voucher


@admin.register(Credit_Voucher)
class Credit_VoucherAdmin(admin.ModelAdmin):
    list_display = ('consecutive', 'description', 'amount')
    search_fields = ('consecutive',)

