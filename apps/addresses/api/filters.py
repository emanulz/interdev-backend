# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Province, Canton, District, Town


class ProvinceFilter(django_filters.FilterSet):

    class Meta:
        model = Province
        fields = ('id', 'code', 'name')


class CantonFilter(django_filters.FilterSet):

    class Meta:
        model = Canton
        fields = ('id', 'code', 'name', 'province_code')


class DistrictFilter(django_filters.FilterSet):

    class Meta:
        model = District
        fields = ('id', 'code', 'name', 'province_code', 'canton_code')


class TownFilter(django_filters.FilterSet):

    class Meta:
        model = Town
        fields = ('id', 'code', 'name', 'province_code', 'canton_code', 'district_code')
