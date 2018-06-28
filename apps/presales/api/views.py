# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import filters
from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Presale
from .filters import PresaleFilter
from .serializers import PresaleSerializer
from .permissions import HasProperPermission
from rest_framework.decorators import detail_route
from rest_framework.response import Response
from apps.utils.exceptions import TransactionError
from rest_framework import status


class PresaleViewSet(viewsets.ModelViewSet):

    serializer_class = PresaleSerializer
    queryset = Presale.objects.all()
    lookup_field = 'id'
    filter_backends = (django_filters.DjangoFilterBackend, filters.OrderingFilter)
    ordering_fields = ('created', 'consecutive')
    filter_class = PresaleFilter

    def get_permissions(self):
        return [HasProperPermission(), ]


class PresalePatchViewSet(viewsets.ViewSet):
    queryset = Presale.objects.all()

    @detail_route(methods=('post',))
    def set_null(self, request, pk):
        user_id = request.user.id
        try:
            ps = Presale.set_null(pk, user_id)
            return_data = {}
            return_data['presale'] = PresaleSerializer(ps).data
            return Response(data=return_data, status=status.HTTP_201_CREATED)
        except TransactionError as e:
            return Response(data=e.get_errors(), status=status.HTTP_400_BAD_REQUEST)
