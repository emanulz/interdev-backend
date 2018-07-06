from rest_framework import serializers
from ..models import Credit_Voucher, Money_Return


class Credit_VoucherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Voucher
        fields = '__all__'


class Money_ReturnSerializer(serializers.ModelSerializer):

    class Meta:
        model = Money_Return
        fields = '__all__'
