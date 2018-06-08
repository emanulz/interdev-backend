# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.decorators import detail_route
from ..models import Sale, Cash_Advance
from .filters import SaleFilter, Cash_AdvanceFilter
from .serializers import SaleSerializer, Cash_AdvanceSerializer
from .permissions import HasProperPermission, HasProperPermissionCash_Advance
from apps.utils.exceptions import TransactionError

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
        return Response(SaleSerializer(sale).data, status=status.HTTP_200_OK)

    def create(self, request):
       
        req_data =  request.data
        val_result = self.validate_sale_request(req_data)
        if(val_result['status']!= 'OK'):
            return Response(status=status.HTTP_400_BAD_REQUEST)

        client_id = req_data['client_id']
        pay = req_data['pay']
        # pay_type = req_data['pay_type']
        #get user id from request
        user_id = request.user.id
        warehouse_id = req_data['warehouse_id']
        try:
            warehouse_id = request.warehouse_id
        except:
            pass
        #check if I can reach the atomic create class method
        
        try:
            sale = Sale.create(req_data['cart'], client_id,
                pay, user_id, warehouse_id)
            return Response(SaleSerializer(sale).data)
        except TransactionError as e:
            if type(e)==TransactionError:
                return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=('post',))
    def sale_credit_note(self, request, pk):
        '''Used to apply a credit note to the bill as a whole'''
        user_id = request.user.id
        req_data = request.data
        try:
            prod_return = Sale.apply_credit_note(pk, user_id, **req_data)
            return Response(data=prod_return, status=status.HTTP_201_CREATED)
        except Exception as e:
            if type(e)=="TransactionError":
                return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

    @detail_route(methods=('post',))
    def product_return(self, request, pk):
        user_id = request.user.id
        req_data = request.data
        try:
            prod_return = Sale.return_products(pk, user_id, **req_data)
            return Response(data=prod_return, status=status.HTTP_201_CREATED)
        except Exception as e:
            if type(e)=="TransactionError":
                return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(data=str(e), status=status.HTTP_400_BAD_REQUEST)

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
