# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Sale, Cash_Advance
from .filters import SaleFilter, Cash_AdvanceFilter
from .serializers import SaleSerializer, Cash_AdvanceSerializer
from .permissions import HasProperPermission, HasProperPermissionCash_Advance


class SaleViewSet(viewsets.ModelViewSet):

    serializer_class = SaleSerializer
    queryset = Sale.objects.all()
    lookup_field = 'id'
    filter_class = SaleFilter

    def get_permissions(self):
        return [HasProperPermission(), ]


class Cash_AdvanceViewSet(viewsets.ModelViewSet):

    serializer_class = Cash_AdvanceSerializer
    queryset = Cash_Advance.objects.all()
    lookup_field = 'id'
    filter_class = Cash_AdvanceFilter

    def get_permissions(self):
        return [HasProperPermissionCash_Advance(), ]
