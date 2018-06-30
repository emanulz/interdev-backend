from rest_framework import serializers
from ..models import Work_Order, Labor, UsedPart, PartRequest, PartRequestGroup, InformativeMovement

class InformativeMovementSerializer(serializers.ModelSerializer):

    class Meta:
        model = InformativeMovement
        fields = '__all__'

class PartRequestGroupSerializer(serializers.ModelSerializer):

    class Meta:
        model = PartRequestGroup
        fields = '__all__'

class Work_OrderSerializer(serializers.ModelSerializer):

    class Meta:
        model = Work_Order
        fields = '__all__'


class LaborSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Labor
        fields = '__all__'

class UsedPartSerializer(serializers.ModelSerializer):

    class Meta:
        model = UsedPart
        fields = '__all__'

class PartRequestSerializer(serializers.ModelSerializer):

    class Meta:
        model = PartRequest
        fields = '__all__'