# -*- coding: utf-8 -*-
from __future__ import unicode_literals
# from rest_framework import filters
# from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Product, ProductDepartment, ProductSubDepartment
from .filters import ProductFilter, ProductDepartmentFilter, ProductSubDepartmentFilter, SearchProductFilter
from .serializers import ProductSerializer, ProductDepartmentSerializer, ProductSubDepartmentSerializer
from .serializers import SearchProductSerializer
from .permissions import HasProperPermission, HasProperDepartmentPermission, HasProperSubDepartmentPermission
from rest_framework.pagination import LimitOffsetPagination


class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 200


class SearchProductViewSet(viewsets.ModelViewSet):

    serializer_class = SearchProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
    filter_class = SearchProductFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class ProductViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
    filter_class = ProductFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class ProductDepartmentViewSet(viewsets.ModelViewSet):

    serializer_class = ProductDepartmentSerializer
    queryset = ProductDepartment.objects.all()
    lookup_field = 'id'
    filter_class = ProductDepartmentFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperDepartmentPermission(), ]


class ProductSubDepartmentViewSet(viewsets.ModelViewSet):

    serializer_class = ProductSubDepartmentSerializer
    queryset = ProductSubDepartment.objects.all()
    lookup_field = 'id'
    filter_class = ProductSubDepartmentFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperSubDepartmentPermission(), ]
