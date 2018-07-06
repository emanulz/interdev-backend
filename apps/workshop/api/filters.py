import django_filters

from ..models import Work_Order, Labor, UsedPart, PartRequest, InformativeMovement

class Work_OrderFilter(django_filters.FilterSet):
    class Meta:
        model = Work_Order
        fields = ('id', 'consecutive', 'is_closed','paid', 'receiving_employee',
            'technician', 'client', 'client_id', 'article_type',
            'article_brand', 'article_model', 'article_serial',
            'article_color', 'article_data', 'malfunction_details', 
            'observations_list', 'is_warranty', 'warranty_number_bd',
            'warranty_invoice_date', 'warranty_supplier_name',
            'warranty_invoice_number', 'warranty_repaired_by',
            'created', 'updated', 'closed_no_repair') 

class InformativeMovementFilter(django_filters.FilterSet):
    class Meta:
        model = InformativeMovement
        fields = ('id', 'work_order_id', 'employee',
            'description', 'created', 'updated')

class LaborFilter(django_filters.FilterSet):
    class Meta:
        model = Labor
        fields = ('id', 'work_order_id', 'employee', 'amount',
            'description', 'created', 'updated')

class UsedPartFilter(django_filters.FilterSet):
    class Meta:
        model = UsedPart
        fields = ('id', 'work_order_id', 'employee', 'amount',
            'description', 'created', 'updated')
class PartRequestFilter(django_filters.FilterSet):
    class Meta:
        model = PartRequest
        fields = ('id', 'work_order_id', 'employee', 'amount',
                'product', 'id_movement_workshop', 'id_movement_origin',
                'created', 'updated')