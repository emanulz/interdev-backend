from rest_framework import serializers
from ..models import Work_Order, Labor, Parts_Request


class Work_OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work_Order
        fields = ('id', 'consecutive', 'is_closed', 'receiving_employee',
                    'technician', 'client', 'client_id', 'article_type',
                    'article_brand', 'article_model', 'article_serial',
                    'article_color', 'article_data', 'malfunction_details', 
                    'observations_list', 'is_warranty', 'warranty_number_bd',
                    'warranty_invoice_date', 'warranty_supplier_name',
                    'warranty_invoice_number', 'warranty_repaired_by',
                    'created', 'updated')


class LaborSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Labor
        fields = ('id', 'work_order_id', 'employee', 'cost',
        'description', 'created', 'updated')

class Parts_RequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = Parts_Request
        fields = ('id', 'work_order_id', 'employee', 'part',
                    'quantity', 'movement_type', 'origin_warehouse', 
                    'destination_warehouse', 'created', 'updated')