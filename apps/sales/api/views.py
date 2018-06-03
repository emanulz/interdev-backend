# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination

from ..models import Sale, Cash_Advance
from .filters import SaleFilter, Cash_AdvanceFilter
from .serializers import SaleSerializer, Cash_AdvanceSerializer
from .permissions import HasProperPermission, HasProperPermissionCash_Advance

class SalePaginationClass(LimitOffsetPagination):
    default_limit = 50

class SaleViewSetReadOnly(viewsets.ReadOnlyModelViewSet):

    serializer_class = SaleSerializer
    queryset = Sale.objects.all()
    lookup_field = 'id'
    filter_class = SaleFilter
    pagination_class = SalePaginationClass

    def get_permissions(self):
        return [HasProperPermission(), ]

class SaleCreateViewSet(viewsets.ViewSet):

    queryset = Sale.objects.all()
    def list(self, request):
        serializer = SaleSerializer(self.queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk):
        sale = get_object_or_404(self.queryset, pk=pk)
        return Response(SaleSerializer(sale).data)

    def create(self, request):
        req_data =  request.data
        val_result = self.validate_sale_request(req_data)
        if(val_result['status']!= 'OK'):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        client_id = req_data['client_id']
        pay = req_data['pay']
        pay_type = req_data['pay_type']
        payed = req_data['payed']
        #get user id from request
        user_id = request.user.id
        warehouse_id =''
        try:
            warehouse_id = request.warehouse_id
        except:
            pass
        #check if I can reach the atomic create class method
        sale = Sale.create(req_data['cart'], client_id,
            pay, pay_type, payed, user_id, warehouse_id)

        #serializer = SaleSerializer(self.queryset)
        return Response(SaleSerializer(sale).data)
        

    def validate_sale_request(self, request_data):
        full_validation = False
        validation_failures = {}
        try:
            full_validation = request_data['full_validation']
        except:
            pass
        
        try:
            cart = request_data['cart']
        except (KeyError):
            if(full_validation):
                validation_failures['cart']='cart object not sent'
            else:
                validation_failures['status'] = 'FAIL'
                return validation_failures
        if len(validation_failures.items()) > 0:
            validation_failures['status'] = 'FAIL'
        else:
            validation_failures['status'] = 'OK'
        print(validation_failures)
        return validation_failures

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
