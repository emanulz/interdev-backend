# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import serpy
from django.db.models import Sum
from rest_framework import serializers
from apps.inventories.models import Inventory_Movement, Warehouse
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

    #inventory = serializers.SerializerMethodField()
    inventory_by_warehouse = serializers.SerializerMethodField()
    counter = 0
    total_inv = 0
    inv_by_warehouse = {}

    class Meta:
        model = Product
        fields = ('id', 'code', 'description', 'short_description', 'unit', 'fractioned', 'department', 'subdepartment',
                  'barcode', 'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code',
                  'inventory_enabled', 'inventory_minimum', 'inventory_maximum', 'inventory_negative', 'cost',
                  'utility', 'utility2', 'utility3', 'price', 'price2', 'price3', 'ask_price', 'use_taxes', 'taxes',
                  'use_taxes2', 'taxes2', 'pred_discount', 'is_active', 'consignment', 'generic', 'image',
                  'observations', 'created', 'updated', 'max_sale_discount', 'on_sale', 'cost_based',
                  'sell_price', 'sell_price2', 'sell_price3', 'inventory_by_warehouse')

    def get_inventory(self, obj):
        t1 = time.time()
        a =  getProductInventory(obj.id)
        #print('How many trips? ' + str(ProductSerializer.counter))
        t2 = time.time()
        print("Run time: " + str((t2 - t1)) + "\n")
        return a

    def get_inventory_by_warehouse(self, obj):
        #t1 = time.time()
        #a = inventoryAllWarehouses(obj.id)
        #t2 = time.time()
        #print("Run time: " + str((t2 - t1)) + "\n")
        #return a
        return getProductInventory2(obj.id)

def getProductInventory3(product_id):
    t1 = time.time()
    warehouses = Warehouse.objects.all()
    inv_dict = {}

    total_inv = 0
    by_prod = Inventory_Movement.objects.filter(product_id=product_id)
    for warehouse in warehouses:
        search2 = str(warehouse.id).replace('-', '')
        tot = by_prod.filter(warehouse_id = search2).aggregate(Sum('amount'))['amount__sum']
        if tot!=None:
            inv_dict[str(warehouse.id)] = float(tot)
            total_inv+= tot
        else:
            inv_dict[str(warehouse.id)] = 0
            total_inv += 0

    t2 = time.time()
    print("Run time: " + str((t2 - t1)) + "\n")
    return json.dumps(inv_dict)


def getProductInventory2(product_id):
    t1 = time.time()
    warehouses = Warehouse.objects.all()
    inv_dict = {}
    total_inv = 0
    for warehouse in warehouses:
        search2 = str(warehouse.id).replace('-', '')
        a = Inventory_Movement.objects.all()
        a.count()

    t2 = time.time()

    print("Run time: " + str((t2 - t1)) + "\n")
    return ''






def getProductInventory(product_id):
    ProductSerializer.counter += 1
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
