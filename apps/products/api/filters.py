# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import django_filters
from ..models import Product, ProductDepartment, ProductSubDepartment


class SearchProductFilter(django_filters.FilterSet):

    description = django_filters.CharFilter(lookup_expr='icontains')
    short_description = django_filters.CharFilter(lookup_expr='icontains')
    supplier_code = django_filters.CharFilter(lookup_expr='icontains')
    model = django_filters.CharFilter(lookup_expr='icontains')
    part_number = django_filters.CharFilter(lookup_expr='icontains')
    brand_code = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'barcode', 'internal_barcode', 'supplier_code',
                  'model', 'part_number', 'brand_code')


class ProductFilter(django_filters.FilterSet):

    description = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'unit', 'department', 'subdepartment', 'barcode',
                  'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code', 'inventory_enabled',
                  'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost', 'utility', 'utility2',
                  'utility3', 'price', 'price2', 'price3', 'ask_price', 'use_taxes', 'taxes', 'use_taxes2', 'taxes2',
                  'pred_discount', 'is_active', 'consignment', 'generic', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'sell_price2', 'sell_price3')


class ProductDepartmentFilter(django_filters.FilterSet):

    class Meta:
        model = ProductDepartment
        fields = ('id', 'name', 'code', 'created', 'updated')


class ProductSubDepartmentFilter(django_filters.FilterSet):

    class Meta:
        model = ProductSubDepartment
        fields = ('id', 'name', 'code', 'department', 'created', 'updated')
