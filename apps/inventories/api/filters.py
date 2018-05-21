# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Inventory_Movement, Warehouse


class Inventory_MovementFilter(django_filters.FilterSet):

    class Meta:
        model = Inventory_Movement
        fields = ('id', 'consecutive', 'movement_type', 'product_id', 'amount', 'description', 'created', 'updated',
                  'warehouse', 'warehouse_id', 'id_generator')


class WarehouseFilter(django_filters.FilterSet):

    class Meta:
        model = Warehouse
        fields = ('id', 'code', 'name', 'location', 'description', 'created', 'updated')

