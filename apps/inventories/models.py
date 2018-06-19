# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
import uuid
from django.forms.models import model_to_dict
import json

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from apps.utils.utils import calculate_next_consecutive
from apps.utils.exceptions import TransactionError
from apps.utils.utils import dump_object_json
from django.db import transaction


class Inventory_Movement(models.Model):

    input = 'INPUT'
    output = 'OUTPUT'
    adjust = 'ADJUST'

    MOVEMENT_CHOICES = ((input, 'Ingreso'),
                        (output, 'Salida'),
                        (adjust, 'Ajuste')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Consecutivo', editable=False)
    movement_type = models.CharField(max_length=10, choices=MOVEMENT_CHOICES, default=input,
                                     verbose_name='Tipo de Movimiento')
    user = models.TextField(verbose_name='Objeto Usuario', default='', blank=True, null=True)
    amount = models.DecimalField(max_digits=11, decimal_places=2, verbose_name='Monto',
                                 blank=True, default=0)
    product_id = models.CharField(max_length=255, verbose_name='ID del Producto')
    product = models.TextField(verbose_name='Objeto Producto', default='', blank=True, null=True)
    warehouse_id = models.CharField(max_length=255, verbose_name='ID de la Bodega', blank=True, null=True)
    warehouse = models.TextField(verbose_name='Objeto Bodega', default='', blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    id_generator = models.CharField(max_length=255, blank=True, null=True, verbose_name='ID del Generador')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return str(self.consecutive)

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['consecutive']

    @classmethod
    def warehouse_transfer(self_cls, user_string, product, origin_warehouse_id, destination_warehouse_id, 
                            description, id_generator, inv_change):
        origin = Warehouse.objects.get(id=origin_warehouse_id)
        origin_string = json.dumps(model_to_dict(origin))
        destination = Warehouse.objects.get(id=destination_warehouse_id)
        destination_string = json.dumps(model_to_dict(destination))

        prod_string = dump_object_json(product)

        counter = 0
        success = False
        origin_mov = None
        destination_mov = None
          

        #create movement on origin warehouse, as an exit
        next_consec = calculate_next_consecutive(self_cls)
        origin_mov = self_cls.objects.create(
            consecutive = next_consec,
            movement_type = 'OUTPUT',
            user = user_string,
            product_id = product.id,
            product = prod_string,
            warehouse_id = origin.id,
            warehouse = origin_string,
            description = description,
            id_generator = id_generator,
            amount = inv_change * -1
        )



        next_consec = calculate_next_consecutive(self_cls)
        counter += 1
        #create movement on destination warehouse, as an exit
        destination_mov = self_cls.objects.create(
            consecutive = next_consec,
            movement_type = 'INPUT',
            user = user_string,
            product_id = product.id,
            product = prod_string,
            warehouse_id = destination.id,
            warehouse = destination_string,
            description = description,
            id_generator = id_generator,
            amount = inv_change 
        )
                
        return (origin_mov, destination_mov)

    @classmethod
    def simple_movement(self_cls, mov_type, user_string, product, warehouse,
                        description, id_generator, inv_change):
        prod_string = dump_object_json(product)

        warehouse_string = json.dumps(model_to_dict(warehouse))
        amount = inv_change
        with transaction.atomic():
            next_consec = calculate_next_consecutive(self_cls)
            if(mov_type=='OUTPUT'): amount = amount*-1
            mov = self_cls.objects.create(
                consecutive = next_consec,
                movement_type = mov_type,
                user = user_string,
                product_id = product.id,
                product = prod_string,
                warehouse_id = warehouse.id,
                warehouse = warehouse_string,
                description = description,
                id_generator = id_generator,
                amount = amount
            )
            print("HERE MOV")
            print(mov)
            return mov






try:
    content_type = ContentType.objects.get_for_model(Inventory_Movement)
    permission = Permission.objects.create(
        codename='list_inventory_movement',
        name='Can list Inventory Movement',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


class Warehouse(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    location = models.CharField(max_length=255, verbose_name='Ubicación', blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return self.code

    class Meta:
        verbose_name = 'Movimiento de Crédito'
        verbose_name_plural = 'Movimientos de Crédito'
        ordering = ['code']


try:
    content_type = ContentType.objects.get_for_model(Warehouse)
    permission = Permission.objects.create(
        codename='list_warehouse',
        name='Can list Warehouse',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
