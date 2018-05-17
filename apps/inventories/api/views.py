# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import filters
from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Inventory_Movement, Warehouse
from .filters import Inventory_MovementFilter, WarehouseFilter
from .serializers import Inventory_MovementSerializer, WarehouseSerializer
from .permissions import HasProperPermission, HasProperPermissionWarehouse


class Inventory_MovementViewSet(viewsets.ModelViewSet):

    serializer_class = Inventory_MovementSerializer
    queryset = Inventory_Movement.objects.all()
    lookup_field = 'id'
    filter_backends = (django_filters.DjangoFilterBackend, filters.OrderingFilter)
    ordering_fields = ('created', 'consecutive')
    filter_class = Inventory_MovementFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class WarehouseViewSet(viewsets.ModelViewSet):

    serializer_class = WarehouseSerializer
    queryset = Warehouse.objects.all()
    lookup_field = 'id'
    filter_class = WarehouseFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermissionWarehouse(), ]
