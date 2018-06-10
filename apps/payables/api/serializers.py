from rest_framework import serializers
from ..models import Credit_Movement, Credit_Payment

class Credit_MovementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Movement
        fields = ('id', 'consecutive', 'supplier_id', 'purchase_id', 'credit_note_id',
                    'debit_note_id', 'payment_id', 'movement_type', 'amount', 'description',
                     'created', 'updated')

class Credit_PaymentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Payment
        fields = ('id', 'consecutive', 'purchases', 'user', 'supplier', 'supplier_id',
                    'amount', 'description', 'created', 'updated')     