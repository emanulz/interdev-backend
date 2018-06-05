from rest_framework import serializers
from ..models import Purchase
from apps.payables.models import Credit_Movement

class PurchaseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Purchase
        fields = '__all__'



