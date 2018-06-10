import django_filters
from ..models import Credit_Movement, Credit_Payment

class Credit_MovementFilter(django_filters.FilterSet):
    
    class Meta:
        model = Credit_Movement
        fields = ('id', 'consecutive', 'supplier_id', 'purchase_id', 'credit_note_id',
                    'debit_note_id', 'payment_id', 'movement_type', 'amount', 'description',
                     'created', 'updated')

class Credit_PaymentFilter(django_filters.FilterSet):
    
    class Meta:
        model = Credit_Payment
        fields = ('id', 'consecutive', 'purchases', 'user', 'supplier', 'supplier_id',
                'amount', 'description', 'created', 'updated') 