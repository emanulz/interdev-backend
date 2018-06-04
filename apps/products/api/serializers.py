# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import serpy
from rest_framework import serializers
from ..models import Product, ProductDepartment, ProductSubDepartment

import time


class ProductFasterSerializer(serpy.Serializer):

    id = serpy.Field()
    code = serpy.Field()
    description = serpy.Field()
    short_description = serpy.Field()
    unit = serpy.Field()
    fractioned = serpy.Field()
    department = serpy.Field()
    subdepartment = serpy.Field()
    barcode = serpy.Field()
    internal_barcode = serpy.Field()
    supplier_code = serpy.Field()
    model = serpy.Field()
    part_number = serpy.Field()
    brand_code = serpy.Field()
    inventory_enabled = serpy.Field()
    inventory_minimum = serpy.Field()
    inventory_maximum = serpy.Field()
    inventory_negative = serpy.Field()
    cost = serpy.Field()
    cost_based = serpy.Field()
    utility = serpy.Field()
    utility2 = serpy.Field()
    utility3 = serpy.Field()
    price = serpy.Field()
    price2 = serpy.Field()
    price3 = serpy.Field()
    sell_price = serpy.Field()
    sell_price2 = serpy.Field()
    sell_price3 = serpy.Field()
    ask_price = serpy.Field()
    use_taxes = serpy.Field()
    taxes = serpy.Field()
    tax_code = serpy.Field()
    use_taxes2 = serpy.Field()
    taxes2 = serpy.Field()
    tax_code2 = serpy.Field()
    use_taxes3 = serpy.Field()
    taxes3 = serpy.Field()
    tax_code3 = serpy.Field()
    pred_discount = serpy.Field()
    max_sale_discount = serpy.Field()
    on_sale = serpy.Field()
    is_active = serpy.Field()
    consignment = serpy.Field()
    generic = serpy.Field()
    # image = serpy.Field()
    observations = serpy.Field()
    created = serpy.Field()
    updated = serpy.Field()
    # inventory = serpy.MethodField()
    # inventory_by_warehouse = serpy.MethodField()

    def get_inventory(self, obj):
        return getProductInventory(obj.id)

    def get_inventory_by_warehouse(self, obj):
        return inventoryAllWarehouses(obj.id)


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
