# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import serpy
from rest_framework import serializers
from ..models import Product, ProductDepartment, ProductSubDepartment

import time


class SearchProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'barcode', 'internal_barcode', 'supplier_code',
                  'model', 'part_number', 'brand_code', 'tax_code' )


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = '__all__'


class ProductDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductDepartment
        fields = '__all__'


class ProductSubDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSubDepartment
        fields = '__all__'
