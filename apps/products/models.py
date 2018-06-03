# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import uuid
from django.db import models
import os
import json
from uuid import uuid4
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
import channels
from django.forms.models import model_to_dict
from django.contrib.auth.models import User
from apps.utils.serializers import UserSerialiazer

from rest_framework.response import Response
from rest_framework import status

from apps.inventories.models import Inventory_Movement
from asgiref.sync import async_to_sync
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import IntegrityError
from django.db import transaction


def url(instance, filename):
    ext = filename.split('.')[-1]
    # get filename
    if instance.pk:
        filename = '{}.{}'.format(instance.pk, ext)
    else:
        # set filename as random string
        filename = '{}.{}'.format(uuid4().hex, ext)
    # return the whole path to the file
    return os.path.join('products', filename)


class Product(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=12, null=True, verbose_name='Código', unique=True)
    description = models.CharField(max_length=255, verbose_name='Descripción del producto', null=True)
    short_description = models.CharField(max_length=255, verbose_name='Descripción corta del producto', null=True)
    unit = models.CharField(max_length=255, blank=True, null=True, verbose_name='Unidad')
    fractioned = models.BooleanField(default=False, verbose_name='Se vende Fracionado?', blank=True)
    department = models.CharField(max_length=255, null=True, verbose_name='Familia', default='', blank=True)
    subdepartment = models.CharField(max_length=255, null=True, verbose_name='Sub-Familia', default='', blank=True)
    barcode = models.CharField(max_length=255, verbose_name='Código de Barras', blank=True, null=True)
    internal_barcode = models.CharField(max_length=255, verbose_name='Código de Barras Interno', blank=True, null=True)
    supplier_code = models.CharField(max_length=255, verbose_name='Código del proveedor', null=True, blank=True)
    model = models.CharField(max_length=255, verbose_name='Modelos', null=True, blank=True)
    part_number = models.CharField(max_length=255, verbose_name='Número de parte', blank=True, null=True)
    brand_code = models.CharField(max_length=255, verbose_name='Código de Marca', null=True, blank=True)

    inventory_enabled = models.BooleanField(default=False, verbose_name='Sistema de Inventarios?', blank=True)
    inventory_minimum = models.FloatField(default=0, blank=True, verbose_name='Mínimo en inventario', null=True)
    inventory_maximum = models.FloatField(default=0, blank=True, verbose_name='Máximo en inventario', null=True)
    inventory_negative = models.BooleanField(default=False, verbose_name='Puede sobrefacturarse?', blank=True)
    inventory_existent = models.TextField(default=r'{"total":"0"}', verbose_name='Inventory Data')
    cost = models.FloatField(default=0, verbose_name='Costo ₡', blank=True, null=True)
    cost_based = models.BooleanField(default=True, verbose_name='Precio basado en Costo?', blank=True)
    utility = models.FloatField(default=0, verbose_name='Utilidad %', blank=True, null=True)
    utility2 = models.FloatField(default=0, verbose_name='Utilidad %', blank=True, null=True)
    utility3 = models.FloatField(default=0, verbose_name='Utilidad %', blank=True, null=True)
    price = models.FloatField(default=0, verbose_name='Precio sin Impuestos ₡', blank=True, null=True)
    price2 = models.FloatField(default=0, verbose_name='Precio sin Impuestos ₡', blank=True, null=True)
    price3 = models.FloatField(default=0, verbose_name='Precio sin Impuestos ₡', blank=True, null=True)

    sell_price = models.FloatField(default=0, verbose_name='Precio IVI ₡', blank=True, null=True)
    sell_price2 = models.FloatField(default=0, verbose_name='Precio IVI ₡', blank=True, null=True)
    sell_price3 = models.FloatField(default=0, verbose_name='Precio IVI ₡', blank=True, null=True)
    ask_price = models.BooleanField(default=False, verbose_name='Pide Precio al facturar?', blank=True)

    use_taxes = models.BooleanField(default=False, verbose_name='Usa impuesto 1?', blank=True)
    taxes = models.FloatField(default=0, verbose_name='Impuesto1 %', blank=True, null=True)
    tax_code = models.CharField(max_length=2, default='00', verbose_name='Código impuesto 1', blank=True)
    use_taxes2 = models.BooleanField(default=False, verbose_name='Usa impuesto 2?', blank=True)
    taxes2 = models.FloatField(default=0, verbose_name='Impuesto2 %', blank=True, null=True)
    tax_code2 = models.CharField(max_length=2, default='00', verbose_name='Código impuesto 2', blank=True)
    use_taxes3 = models.BooleanField(default=False, verbose_name='Usa impuesto 3?', blank=True)
    taxes3 = models.FloatField(default=0, verbose_name='Impuesto3 %', blank=True, null=True)
    tax_code3 = models.CharField(max_length=2, default='00', verbose_name='Código impuesto 3', blank=True, null=True)
    pred_discount = models.FloatField(default=0, verbose_name='Descuento Predeterminado %', blank=True, null=True)
    max_sale_discount = models.FloatField(default=0, verbose_name='Descuento Máximo en liquidación %', blank=True,
                                          null=True)
    on_sale = models.BooleanField(default=False, verbose_name='En liquidación?', blank=True)
    is_active = models.BooleanField(default=True, verbose_name='Activo?', blank=True)
    consignment = models.BooleanField(default=False, verbose_name='Es en consignación?', blank=True)
    generic = models.BooleanField(default=False, verbose_name='Es Genérico?', blank=True)
    image = models.ImageField(upload_to=url, blank=True, null=True)
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s - %s ' % (self.code, self.description)

    class Meta:
        verbose_name = 'Producto'
        verbose_name_plural = 'Productos'
        ordering = ['code']

    @classmethod
    def inventory_movement(self_cls, product_id, warehouse, mov_type, amount, user,
        description, id_generator):

        with transaction.atomic():
            #get product by its id
            product = self_cls.objects.select_for_update().get(id=product_id)
            inv_change = product.validate_movement(product, amount)
            
            product.inventory_existent = product.update_inventory(amount, warehouse.id)
            product.save()
            
            #generate movement out of inventory
            Inventory_Movement.simple_movement(mov_type, user, product, warehouse, 
                                                description, id_generator, inv_change)
            
    @classmethod
    def warehouse_transfer(self_cls, request, pk):
        # user, description, generator
        
        
        print('Product Inventory Transfer method --> ' + str(pk))
        req_data = request.data
        #select the product and lock it
        with transaction.atomic():
            prod = self_cls.objects.select_for_update().get(id=pk)
            #validate the incoming data
            errs, data = prod.warehouse_transfer_data_validation(req_data)
            if(errs['status']=='BAD'):
                return Response(data=errs, status=status.HTTP_400_BAD_REQUEST)

            errs, transfer = prod.transfer_inv(errs, data, prod)
            if(errs['status']=='BAD'):
                return Response(data=errs, status=status.HTTP_400_BAD_REQUEST)
            
            print('Transfer')
            print(transfer)
            prod.inventory_existent =  transfer
            prod.save()

            #get the user
            user = User.objects.get(id=data['user_id'])
            user_string = UserSerialiazer(user).data
            #generate movement in and out of inventory
            origin_mov, destination_mov = Inventory_Movement.warehouse_transfer(user_string, prod, data['origin_warehouse_id'],
                        data['destination_warehouse_id'], data['description'], data['generator'], data['amount'])

            
            return (prod, origin_mov, destination_mov)
        return Response(data={'Error generating inventory transfer'},  status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    def warehouse_transfer_data_validation(self, data):
        errs = {'status':'OK'}
        #validates the parameters and returns them as tupple
        amount = 0
        try:
            amount = float(data['amount'])
        except (KeyError, ValueError) as e:
            print(e)
            errs['amount'] = 'Invalid or absent amount'
        origin_warehouse_id = None
        destination_warehouse_id = None
        user_id = None
        description = None
        generator = None
        try:
            destination_warehouse_id = data['destination_warehouse_id']
        except KeyError:
            errs['destination_warehouse_id']='Destination warehouse id not sent'

        try:
            origin_warehouse_id = data['origin_warehouse_id']
        except KeyError:
            errs['origin_warehouse_id']='Origin warehouse id not sent'

        try:
            user_id = data['user_id']
        except KeyError:
            errs['user_id'] = 'User id not sent'
        try:
            description = data['description']
        except KeyError:
            errs['description'] = 'Description data not sent'
        try:
            generator = data['generator']
        except KeyError:
            errs['generator'] = "Id of generator transaction not sent"

        if(len(errs.keys())>1): errs['status']='BAD'

        data = {'amount':amount, 'destination_warehouse_id':destination_warehouse_id,
            'origin_warehouse_id':origin_warehouse_id, 'user_id':user_id, 'description':description,
            'generator':generator}

        return(errs, data)

    def transfer_inv(self, errs, data, prod):
        #get the origin warehouse existence
        current_inv = json.loads(self.inventory_existent)
        total_origin = 0
        total_destination = 0
        try:
            total_origin = float(current_inv[data['origin_warehouse_id']])
        except KeyError:
            errs['origin_warehouse_id'] = 'Product does not have existences on origin warehouse'
        print('Total at origin warehouse --> ' + str(total_origin))
        if not self.inventory_negative:
            if(total_origin < data['amount']):
                errs['amount']='Transfer requested {} is larger than avaialble inventory at origin {}'.format(data['amount'], total_origin)
        #obtain the total at the destination warehouse
        try:
            total_destination = float(current_inv[data['destination_warehouse_id']])
        except KeyError:
            pass # the destination might not have inventory so far

        current_inv[data['origin_warehouse_id']] =  total_origin - float(data['amount'])
        current_inv[data['destination_warehouse_id']] = total_destination + float(data['amount'])
        #total remains untouched, it is only a transfer
        if(len(errs.keys())>1): errs['status']='BAD'
        return (errs, json.dumps(current_inv))


    def update_inventory(self, amount, warehouse_id):
        warehouse_id = str(warehouse_id)
        current_inv = json.loads(self.inventory_existent)
        new_total = float(current_inv['total']) + amount
        try:
            current_inv[warehouse_id] = float(current_inv[warehouse_id]) + amount
        except KeyError:
            current_inv[warehouse_id] = amount

        current_inv['total'] = new_total
        return json.dumps(current_inv)
        

    def validate_movement(self, product, amount):
        target_mov = 0
        print('Fractioned --> ' + str(product.fractioned))
        if(product.fractioned):
            try:
                target_mov = float(amount)
            except ValueError:
                pass #raise custom exception here
        else:
            try:
                target_mov = int(amount)
            except ValueError:
                pass #raise custom exception
        #check if the amount can be applied from the product inventory
        print('Negative inv --> ' + str(product.inventory_negative))
        if(product.inventory_negative):
            pass

        return target_mov
# @receiver(post_save, sender=Product)
# def send_message(sender, instance, **kwargs):
#     async_to_sync(channels.layers.get_channel_layer().group_send)(
#         'global_broadcaster',
#         {
#             'type': 'broadcast_message',
#             'message': 'PRODUCT_UPDATED'
#         }
#     )


# CUSTOM PERMISSION
try:
    content_type = ContentType.objects.get_for_model(Product)
    permission = Permission.objects.create(
        codename='list_product',
        name='Can list Producto',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


class ProductDepartment(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255, verbose_name='Nombre de la Familia')
    code = models.CharField(max_length=255, verbose_name='Identificador de Familia')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % self.name

    class Meta:
        verbose_name = 'Familia'
        verbose_name_plural = 'Productos - 1. Familias'
        ordering = ['code']


# CUSTOM PERMISSION
try:
    content_type = ContentType.objects.get_for_model(ProductDepartment)
    permission = Permission.objects.create(
        codename='list_productdepartment',
        name='Can list Familia',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


class ProductSubDepartment(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    department = models.ForeignKey('ProductDepartment', on_delete=models.SET_NULL, null=True, verbose_name='Familia')
    name = models.CharField(max_length=255, verbose_name='Nombre de la Sub-Familia')
    code = models.CharField(max_length=255, verbose_name='Identificador de Sub-Familia')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s - %s' % (self.department, self.name)

    class Meta:
        unique_together = ('department', 'code')
        verbose_name = 'Sub-Familia'
        verbose_name_plural = 'Productos - 2. Sub-Familias'
        ordering = ['code']


# CUSTOM PERMISSION
try:
    content_type = ContentType.objects.get_for_model(ProductSubDepartment)
    permission = Permission.objects.create(
        codename='list_productsubdepartment',
        name='Can list Sub-Familia',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
