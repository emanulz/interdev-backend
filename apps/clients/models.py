# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.core.validators import MaxValueValidator
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
import channels
from django.forms.models import model_to_dict
from asgiref.sync import async_to_sync
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import IntegrityError, transaction
from apps.utils.exceptions import TransactionError
from decimal import Decimal, getcontext
from apps.logs.models import Log
from apps.utils.utils import dump_object_json
from apps.money_returns.models import Credit_Voucher
from apps.money_returns.api.serializers import Credit_VoucherSerializer


class Client(models.Model):

    person = '01'
    juridic = '02'
    passport = '03'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Apellidos')

    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')

    province = models.CharField(max_length=255, default='', verbose_name='Provincia', blank=True, null=True)
    canton = models.CharField(max_length=255, default='', verbose_name='Cantón', blank=True, null=True)
    district = models.CharField(max_length=255, default='', verbose_name='Distrito', blank=True, null=True)
    town = models.CharField(max_length=255, default='', verbose_name='Barrio', blank=True, null=True)
    other_address = models.CharField(max_length=255, default='', verbose_name='Otras señas', blank=True, null=True)

    phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono')
    cellphone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Celular')
    email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email')
    category_code = models.CharField(max_length=255, null=True, blank=True, verbose_name='Categoría Cliente')
    pred_discount = models.FloatField(verbose_name='Descuento Predeterminado', default=0)
    max_discount = models.FloatField(verbose_name='Descuento Máximo', default=0)

    pays_taxes = models.BooleanField(default=True, verbose_name='Paga Impuestos?')

    balance = models.DecimalField(verbose_name='Balance de Crédito', max_digits=19, decimal_places=5, default=0)
    has_credit = models.BooleanField(default=False, verbose_name='Tiene Crédito?')
    credit_limit = models.DecimalField(verbose_name='Límite de Crédito', max_digits=19, decimal_places=5, default=0)
    credit_days = models.PositiveIntegerField(default=30, null=True, blank=True, verbose_name='Días de Crédito')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s %s' % (self.name, self.last_name)

    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['code']

    @classmethod
    def getClientAndRelated(self_cls, user_id, client_id):

        client = self_cls.objects.get(id=client_id)
        # client_dict = model_to_dict(client)

        try:
            category = ClientCategory.objects.get(code__exact=client.category_code)
            category = dump_object_json(category)
        except Exception as e:
            print(e)
            category = {}
        # check if the object has any active credit vouchers
        vouchers = Credit_Voucher.objects.filter(client_id__exact=client_id).filter(voucher_applied=False)
        vouchers_serialized = []
        for voucher in vouchers:
            vouchers_serialized.append(Credit_VoucherSerializer(voucher).data)
        return (client, vouchers_serialized, category)


    @classmethod
    def apply_credit_movement(self_cls, **kwargs):

        with transaction.atomic():
            client_code = None
            client_id = None
            client = None
            amount = None
            mov_type = None
            try:
                client_code = kwargs['client_code']
            except KeyError:
                pass

            try:
                client_id = kwargs['client_id']
            except KeyError:
                pass
            if client_code !=None:
                client = self_cls.objects.select_for_update().get(code=client_code)
            elif client_id != None:
                client = self_cls.objects.select_for_update().get(id=client_id)
            else:
                raise TransactionError({"client_code": ["No se suministro un código de cliente"],
                                        "client_id":["No se suministro un id de cliente"]})
            #generate the old client object
            client_old = dump_object_json(client)

            #check if the customer has credit
            if(not client.has_credit):
                raise TransactionError({"has_credit": ["El cliente no posee una línea de crédito"]})
            try:
                amount = Decimal(abs(kwargs['amount']))
            except (KeyError, ValueError):
                raise TransactionError({"amount":["No se suministro el monto del movimento de crédito o no es un número"]})
            try:
                mov_type = kwargs["mov_type"]
                if mov_type != "CRED" and mov_type != "DEBI":
                    raise TransactionError({"mov_type":["El tipo de movimiento debe ser CRED or DEBI"]})
            except KeyError:
                raise TransactionError({"mov_type":["No se envió el tipo de movimiento de crédito"]})
            
            if mov_type == "CRED":
                #check if the customer has enough credit to cover this payment
                if client.balance - amount < -1*client.credit_limit:
                    raise TransactionError({'credit_limit':["El crédito disponible no puede cubrir la transacción"]})
                #update the client credit balance
                client.balance = client.balance - amount
            else:
                client.balance = client.balance + amount 
            
            client.save()

            client_new = dump_object_json(client)
            Log.objects.create(**{
                'code': 'CLIENT_CREDIT_BALANCE_UPDATED',
                'model': 'CLIENT',
                'prev_object': client_old,
                'new_object': client_new,
                'description': 'Credit payment type {}'.format(mov_type),
                'user': kwargs['user']
            })

    @classmethod
    def update_credit_conditions(self_cls, **kwargs):
        print("Updated credit conditions")
        with transaction.atomic():
            pass

# @receiver(post_save, sender=Client)
# def send_message(sender, instance, **kwargs):
#    async_to_sync(channels.layers.get_channel_layer().group_send)(
#        'global_broadcaster',
#        {
#            'type': 'broadcast_message',
#            'message': 'CLIENT_UPDATED'
#        }
#    )


class ClientCategory(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')
    discount = models.FloatField(verbose_name='Descuento de la categoria', default=0)
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')

    def __str__(self):
        return '%s - %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Categoría de cliente'
        verbose_name_plural = 'Categorias de clientes'
        ordering = ['code']


try:
    content_type = ContentType.objects.get_for_model(Client)
    permission = Permission.objects.create(
        codename='list_client',
        name='Can list Client',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass
