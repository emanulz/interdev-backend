# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Sale, Cash_Advance
from apps.credits.models import Credit_Movement


class Cash_AdvanceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Cash_Advance
        fields = ('id', 'consecutive', 'client', 'client_id', 'user', 'created', 'amount', 'description',
                  'work_order_id', 'sale_id', 'updated')


class SaleSerializer(serializers.ModelSerializer):


    class Meta:
        model = Sale
        fields = '__all__'

