from rest_framework import serializers
from ..models import Credit_Voucher

class Credit_VoucherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Credit_Voucher
        fields = '__all__'