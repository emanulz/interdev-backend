# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from rest_framework import filters
from django_filters import rest_framework as django_filters

from rest_framework import viewsets
from ..models import Presale
from .filters import PresaleFilter
from .serializers import PresaleSerializer
from .permissions import HasProperPermission


class PresaleViewSet(viewsets.ModelViewSet):

    serializer_class = PresaleSerializer
    queryset = Presale.objects.all()
    lookup_field = 'id'
    filter_backends = (django_filters.DjangoFilterBackend, filters.OrderingFilter)
    ordering_fields = ('created', 'consecutive')
    filter_class = PresaleFilter

    def get_permissions(self):
        return [HasProperPermission(), ]
