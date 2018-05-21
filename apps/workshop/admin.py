from django.contrib import admin
from .models import Work_Order, Labor, UsedPart, PartRequest

@admin.register(Work_Order)
class Work_OrderAdmin(admin.ModelAdmin):
    search_fields = ('consecutive', 'is_closed', 'client_id', 'created', 'updated')
    list_display = ('consecutive', 'created', 'updated')
@admin.register(Labor)
class LaborAdmin(admin.ModelAdmin):
    search_fields = ('work_order_id', 'created', 'updated')
    list_display = ('work_order_id', 'created', 'updated')
@admin.register(UsedPart)
class UsedPartAdmin(admin.ModelAdmin):
    search_fields = ('work_order_id', 'created', 'updated')
    list_display = ('work_order_id', 'created', 'updated') 
@admin.register(PartRequest)
class PartRequestAdmin(admin.ModelAdmin):
    search_fields = ('work_order_id', 'created', 'updated')
    list_display = ('work_order_id', 'created', 'updated')

 