from django.contrib import admin
from .models import Work_Order, Labor, Parts_Request

#admin.site.register(Work_Order)
#admin.site.register(Labor)
#admin.site.register(Parts_Request)

@admin.register(Work_Order)
class Work_OrderAdmin(admin.ModelAdmin):
    search_fields = ('order_number', 'is_closed', 'client_id', 'created', 'updated')
    list_display = ('order_number', 'created', 'updated')
@admin.register(Labor)
class LaborAdmin(admin.ModelAdmin):
    search_fields = ('work_order_id', 'created', 'updated')
    list_display = ('work_order_id', 'created', 'updated')
@admin.register(Parts_Request)
class Parts_RequestAdmin(admin.ModelAdmin):
    search_fields = ('work_order_id', 'created', 'updated')
    list_display = ('work_order_id', 'created', 'updated')
 