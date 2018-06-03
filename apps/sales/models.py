# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import json
import uuid

from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.forms.models import model_to_dict
from django.db import IntegrityError
from django.db import transaction
from django.db.models import Max, Sum
from rest_framework.response import Response

from apps.clients.models import Client
from apps.products.models import Product
from apps.inventories.models import Warehouse
from django.contrib.auth.models import User

from apps.utils.serializers import UserSerialiazer

class Sale(models.Model):

    cash = 'CASH'
    card = 'CARD'
    credit = 'CRED'
    transfer = 'TRAN'
    other = 'OTHE'

    PAY_CHOICES = ((cash, 'Efectivo'),
                   (card, 'Tarjeta'),
                   (credit, 'Crédito'),
                   (transfer, 'Transferencia'),
                   (other, 'Otro')
                   )
    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(verbose_name='Número de factura', primary_key=True, editable=False)
    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    pay = models.TextField(verbose_name='Objeto Pago', default='')
    pay_type = models.CharField(max_length=4, choices=PAY_CHOICES, default=cash, verbose_name='Tipo de Pago')
    payed = models.BooleanField(default=True, verbose_name='Pagada')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.consecutive)

    class Meta:
        verbose_name = 'Venta'
        verbose_name_plural = 'Ventas'
        ordering = ['consecutive']


    @classmethod
    def create(self_cls, cart, client_id, pay, pay_type, payed, user_id, warehouse_id):
        
        client_id = uuid.UUID('4ff0aa2f3ad44d439ed2e610cd77e42a')
        warehouse_id = uuid.UUID('4a25f16d0f1a4e9e95b0a464c085a20c')
        user_id = 1
        with transaction.atomic():
            #fetch the client by id
            client = Client.objects.get(id=client_id)
            client_string =  json.dumps(model_to_dict(client))
            #fetch user object
            user = User.objects.get(id=user_id)
            user_string = UserSerialiazer(user).data
            #fetch Warehouse data
            warehouse = Warehouse.objects.get(id = warehouse_id)

            #get next consecutive
            next_consecutive = Sale.objects.all().aggregate(Max('consecutive'))['consecutive__max']
            next_consecutive = int(next_consecutive)+1
            if(next_consecutive == None): next_consecutive = 1

            sale = self_cls.objects.create(
                consecutive = next_consecutive,
                cart = cart, 
                client = client_string, 
                client_id = client_id,
                pay = pay, 
                pay_type = pay_type,
                payed = payed, 
                user = user_string
            )

            #extract the items form the cart
            cartItems = json.loads(cart)['cartItems']
            id_generator = 'sa_' + str(sale.id)
            individual_mov_desc = "Movimiento por factura # {}".format(str(sale.consecutive))
            for item in cartItems:
                #create an inventory movement
                prod = item['product']
                amount = item['qty']
                Product.inventory_movement(prod['id'], warehouse, 'OUTPUT', amount,
                    user_string, individual_mov_desc, id_generator)

            return sale



class Cash_Advance(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de factura', editable=False, unique=True)
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    amount = models.FloatField(default=0, verbose_name='Monto del avance')
    description = models.CharField(max_length=255, default='', verbose_name='Descripción')
    work_order_id = models.UUIDField(null=True, blank=True)
    sale_id = models.CharField(max_length=255, verbose_name='ID de la venta', blank=True, null=True)
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.advance_number)

    class Meta:
        verbose_name = 'Adelanto de efectivo'
        verbose_name_plural = 'Adelantos de efectivo'
        ordering = ['consecutive']


try:
    content_type = ContentType.objects.get_for_model(Sale)
    permission = Permission.objects.create(
        codename='list_sale',
        name='Can list Sale',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass


try:
    content_type = ContentType.objects.get_for_model(Cash_Advance)
    permission = Permission.objects.create(
        codename='list_cash_advance',
        name='Can list Adelanto de efectivo',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass
