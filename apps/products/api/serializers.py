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
                  'model', 'part_number', 'brand_code')


class ProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'unit', 'fractioned', 'department', 'subdepartment',
                  'barcode', 'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code',
                  'inventory_enabled', 'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost',
                  'utility', 'price', 'ask_price', 'use_taxes', 'taxes',
                  'use_taxes2', 'taxes2', 'pred_discount', 'is_active', 'consignment', 'generic', 'image',
                  'observations', 'created', 'updated', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'inventory_existent')


class ProductDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductDepartment
        fields = ('id', 'name', 'code', 'observations', 'created', 'updated')


class ProductSubDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSubDepartment
        fields = ('id', 'department', 'name', 'code', 'observations', 'created', 'updated')
