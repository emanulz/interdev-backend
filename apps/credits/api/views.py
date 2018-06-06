# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Credit_Movement
from ..credit_payment_model import Credit_Payment
from .filters import Credit_MovementFilter, Credit_PaymentFilter
from .serializers import Credit_MovementSerializer, Credit_PaymentSerializer
from .permissions import HasProperPermission, HasProperPermissionCreditPayment
from rest_framework import status
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination

class LimitPaginationClass(LimitOffsetPagination):
    default_limit = 50

class CreditPaymentCreateViewSet(viewsets.ViewSet):

    queryset = Credit_Payment.objects.all()

    def create(self, request):
        req_data = request.data
        user_id = request.user.id

        try:
            new_payment, errors = Credit_Payment.create(user_id, **req_data)
            return Response(data=Credit_MovementSerializer(new_payment).data, status=status.HTTP_201_CREATED)
        except Exception as e:
            if type(e)=='TransactionError':
                return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response(data=str(e))

class Credit_MovementViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = Credit_MovementSerializer
    queryset = Credit_Movement.objects.all()
    lookup_field = 'id'
    filter_class = Credit_MovementFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class Credit_PaymentViewSet(viewsets.ReadOnlyModelViewSet):

    serializer_class = Credit_PaymentSerializer
    queryset = Credit_Payment.objects.all()
    lookup_field = 'id'
    filter_class = Credit_PaymentFilter
    pagination_class = LimitPaginationClass

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermissionCreditPayment(), ]
