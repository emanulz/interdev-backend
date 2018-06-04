# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import filters
from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Product, ProductDepartment, ProductSubDepartment
from .filters import ProductFilter, ProductDepartmentFilter, ProductSubDepartmentFilter
from .serializers import ProductSerializer, ProductDepartmentSerializer, ProductSubDepartmentSerializer
from .permissions import HasProperPermission, HasProperDepartmentPermission, HasProperSubDepartmentPermission
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import api_view
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status

class ProductInventoryViewSet(viewsets.ViewSet):

    queryset = Product.objects.all()

    def create(self, request):
        print('Product create route entry')
        req_data = request.data
        user_id = request.user.id
        new_prod, errors = Product.create(user_id, **req_data)
        if new_prod == None:
            return Response(data=errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data=ProductSerializer(new_prod).data, status=status.HTTP_201_CREATED)
    
    def partial_update(self, request, pk):
        print('Partial_update')
        req_data = request.data 
        user_id = request.user.id
        
        updated_prod, errors = Product.partial_update(user_id, pk,  **req_data)
        if updated_prod == None:
            return Response(data=errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(data=ProductSerializer(updated_prod).data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        print(pk)
        product = get_object_or_404(self.queryset, pk=pk)
        return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)

    @detail_route(methods=('post',))
    def inventory_transfer(self, request, pk):
        product, origin_mov, destination_mov = Product.warehouse_transfer(request, pk)

        return Response(data=ProductSerializer(product).data, status=status.HTTP_200_OK)


class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50


class ProductViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    lookup_field = 'id'
    filter_backends = (django_filters.DjangoFilterBackend, filters.OrderingFilter)
    ordering_fields = ('created', 'consecutive')
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
