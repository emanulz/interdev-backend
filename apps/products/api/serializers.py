# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json

from rest_framework import serializers
from apps.inventories.models import Inventory_Movement, Warehouse
from ..models import Product, ProductDepartment, ProductSubDepartment


class SearchProductSerializer(serializers.ModelSerializer):

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'barcode', 'internal_barcode', 'supplier_code',
                  'model', 'part_number', 'brand_code')


class ProductSerializer(serializers.ModelSerializer):

    # inventory = serializers.SerializerMethodField()
    # inventory_by_warehouse = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'unit', 'fractioned', 'department', 'subdepartment',
                  'barcode', 'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code',
                  'inventory_enabled', 'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost',
                  'utility', 'utility2', 'utility3', 'price', 'price2', 'price3', 'ask_price', 'use_taxes', 'taxes',
                  'use_taxes2', 'taxes2', 'pred_discount', 'is_active', 'consignment', 'generic', 'image',
                  'observations', 'created', 'updated', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'sell_price2', 'sell_price3')

    def get_inventory(self, obj):
        return getProductInventory(obj.id)

    def get_inventory_by_warehouse(self, obj):
        return inventoryAllWarehouses(obj.id)


def getProductInventory(product_id):

    warehouses = Warehouse.objects.all()
    amount = 0
    for warehouse in warehouses:
        inventory = inventoryByWarehouse(product_id, warehouse.id)
        amount = amount + inventory

    return amount


def inventoryAllWarehouses(product_id):

    warehouses = Warehouse.objects.all()
    inventoriesDict = {}
    for warehouse in warehouses:
        inventory = inventoryByWarehouse(product_id, warehouse.id)
        inventoriesDict[str(warehouse.id)] = float(inventory)

    return json.dumps(inventoriesDict)


def inventoryByWarehouse(product_id, warehouse_id):
    movements = Inventory_Movement.objects.filter(product_id=product_id, warehouse_id=warehouse_id).order_by('-created')
    amount = 0
    for movement in movements:
        if movement.movement_type == 'INPUT' and not movement.is_null:
            amount += movement.amount
        if movement.movement_type == 'OUTPUT' and not movement.is_null:
            amount -= movement.amount
        if movement.movement_type == 'ADJUST' and not movement.is_null:
            amount += movement.amount
            break
    return amount


class ProductDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductDepartment
        fields = ('id', 'name', 'code', 'observations', 'created', 'updated')


class ProductSubDepartmentSerializer(serializers.ModelSerializer):

    class Meta:
        model = ProductSubDepartment
        fields = ('id', 'department', 'name', 'code', 'observations', 'created', 'updated')
