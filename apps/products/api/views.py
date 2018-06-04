# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import filters
from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Product, ProductDepartment, ProductSubDepartment
from .filters import ProductFilter, ProductDepartmentFilter, ProductSubDepartmentFilter
from .serializers import ProductSerializer, ProductDepartmentSerializer, ProductSubDepartmentSerializer
from .permissions import HasProperPermission, HasProperDepartmentPermission, HasProperSubDepartmentPermission
from apps.utils.exceptions import TransactionError

from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import api_view
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from rest_framework import status

class ProductInventoryViewSet(viewsets.ViewSet):

    queryset = Product.objects.all()

    def create(self, request):
        req_data = request.data
        user_id = request.user.id
        
        try: 
            new_prod, errors = Product.create(user_id, **req_data)
            return Response(data=ProductSerializer(new_prod).data, status=status.HTTP_201_CREATED)
        except Exception as e:
            if type(e)=='TransactionError':
                return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            else:
                print('Exit http')
                print(e.args)
                print(dir(e))
                return Response(data=str(e))
        
    
    def partial_update(self, request, pk):
        req_data = request.data 
        user_id = request.user.id
        
        try:
            updated_prod, errors = Product.partial_update(user_id, pk,  **req_data)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

        return Response(data=ProductSerializer(updated_prod).data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk):
        product = get_object_or_404(self.queryset, pk=pk)
        return Response(ProductSerializer(product).data, status=status.HTTP_200_OK)

    @detail_route(methods=('post',))
    def physical_take(self, request, pk):
        user_id = request.user.id
        req_data = request.data
        try:
            product, inv_mov, errors = Product.set_absolute_existence(pk, user_id, **req_data)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)

        return Response(data=ProductSerializer(product).data, status= status.HTTP_200_OK)

    @detail_route(methods=('post',))
    def inventory_transfer(self, request, pk):
        try:
            product, origin_mov, destination_mov = Product.warehouse_transfer(request, pk)
            return Response(data=ProductSerializer(product).data, status=status.HTTP_200_OK)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            

        


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
