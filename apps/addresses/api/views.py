# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import viewsets
from ..models import Province, Canton, District, Town
from .filters import ProvinceFilter, CantonFilter, DistrictFilter, TownFilter
from .serializers import ProvinceSerializer, CantonSerializer, DistrictSerializer, TownSerializer

from .permissions import HasProperPermission


class ProvinceViewSet(viewsets.ModelViewSet):

    serializer_class = ProvinceSerializer
    queryset = Province.objects.all()
    lookup_field = 'id'
    filter_class = ProvinceFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class CantonViewSet(viewsets.ModelViewSet):

    serializer_class = CantonSerializer
    queryset = Canton.objects.all()
    lookup_field = 'id'
    filter_class = CantonFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class DistrictViewSet(viewsets.ModelViewSet):

    serializer_class = DistrictSerializer
    queryset = District.objects.all()
    lookup_field = 'id'
    filter_class = DistrictFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]


class TownViewSet(viewsets.ModelViewSet):

    serializer_class = TownSerializer
    queryset = Town.objects.all()
    lookup_field = 'id'
    filter_class = TownFilter

    def get_permissions(self):
        # allow non-authenticated user to create via POST
        return [HasProperPermission(), ]
