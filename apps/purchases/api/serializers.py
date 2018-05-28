from rest_framework import serializers
from ..models import Purchase

class PurchaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Purchase
        fields = ('id', 'consecutive', 'user', 'supplier', 'cart', 'pay', 'pay_type',
                'payed', 'invoice_number', 'invoice_date', 'credit_days', 'created', 'updated')