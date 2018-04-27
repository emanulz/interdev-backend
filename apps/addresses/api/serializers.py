# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from rest_framework import serializers
from ..models import Province, Canton, District, Town


class ProvinceSerializer(serializers.ModelSerializer):

    class Meta:
        model = Province
        fields = ('id', 'code', 'name')


class CantonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Canton
        fields = ('id', 'code', 'name', 'province_code')


class DistrictSerializer(serializers.ModelSerializer):

    class Meta:
        model = District
        fields = ('id', 'code', 'name', 'province_code', 'canton_code')


class TownSerializer(serializers.ModelSerializer):

    class Meta:
        model = Town
        fields = ('id', 'code', 'name', 'province_code', 'canton_code', 'district_code')
