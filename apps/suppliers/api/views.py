# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Supplier
from .filters import SupplierFilter
from .serializers import SupplierSerializer
from .permissions import HasProperPermission
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import detail_route, list_route
from rest_framework.response import Response
from rest_framework import status
from apps.utils.exceptions import TransactionError
from decimal import Decimal

class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class SupplierSearchViewSet(viewsets.ViewSet):
    queryset = Supplier.objects.all()

    @detail_route(methods=('get',))
    def search_supplier(self, request, pk):
        print('Custom route at supplier get search')
        return Response(data='yay', status=status.HTTP_200_OK)

    @list_route(methods=('get',))
    def search(self, request, *args, **kwargs):

        return Response(data='YAY SEARCH', status=status.HTTP_200_OK)

class SupplierViewSet(viewsets.ModelViewSet):

    serializer_class = SupplierSerializer
    queryset = Supplier.objects.all()
    lookup_field = 'id'
    filter_class = SupplierFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]

class SupplierCustomViewSet(viewsets.ReadOnlyModelViewSet):

    queryset = Supplier.objects.filter(balance__lt=Decimal(0))
    serializer_class = SupplierSerializer
    lookup_field = 'id'
    filter_class = SupplierFilter

    def retrieve(self, request, *args, **kwargs):

        try:
             supplier, purchases = Supplier.get_supplier_with_purchases(kwargs['id'])
             return Response(data={'supplier': SupplierSerializer(supplier).data, 'purchases': purchases},
                         status=status.HTTP_200_OK)
        except TransactionError as e:
             return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)


