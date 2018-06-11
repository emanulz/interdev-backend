from django.contrib import admin
from .models import Money_Return, Credit_Voucher


@admin.register(Money_Return)
class Credit_VoucherAdmin(admin.ModelAdmin):
    list_display = ('consecutive', 'description', 'amount')
    search_fields = ('consecutive',)

@admin.register(Credit_Voucher)
class Money_ReturnAdmin(admin.ModelAdmin):
    list_display = ('consecutive', 'description', 'amount')
    search_fields = ('consecutive',)