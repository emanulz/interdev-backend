# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Inventory_Movement, Warehouse


class Inventory_MovementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Inventory_Movement
        fields = ('id', 'movement_number', 'movement_type', 'user', 'amount', 'product', 'product_id', 'description',
                  'created', 'updated')


class WarehouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Warehouse
        fields = ('id', 'code', 'name', 'location', 'description', 'created', 'updated')
