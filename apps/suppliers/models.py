# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from apps.utils.exceptions import TransactionError
from apps.utils.utils import dump_object_json, calculate_next_consecutive, calculate_next_code
from decimal import Decimal, getcontext
from logs.models import Log
from decimal import Decimal
from django.contrib.auth.models import User

from django.db import IntegrityError, transaction


class Supplier(models.Model):

    person = 'PER'
    juridic = 'JUR'
    passport = 'PAS'

    ID_TYPE_CHOICES = ((person, 'Cédula Física'),
                       (juridic, 'Cédula Jurídica'),
                       (passport, 'Pasaporte'),
                       )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=10, null=True, verbose_name='Código', unique=True)
    name = models.CharField(max_length=255, verbose_name='Nombre')

    id_type = models.CharField(max_length=3, choices=ID_TYPE_CHOICES, default=person,
                               verbose_name='Tipo de Identificación')
    id_num = models.CharField(max_length=255, null=True, blank=True, verbose_name='Num Identificación')

    address = models.CharField(max_length=255, null=True, blank=True, verbose_name='Dirección')
    phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono')
    cellphone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Celular')
    email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email')

    agent_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Nombre del Agente')
    agent_last_name = models.CharField(max_length=255, null=True, blank=True, verbose_name='Apellidos del Agente')
    agent_phone_number = models.CharField(max_length=255, null=True, blank=True, verbose_name='Teléfono del agente')
    agent_email = models.EmailField(max_length=255, null=True, blank=True, verbose_name='Email del Agente')

    balance = models.DecimalField(verbose_name='Balance de Crédito', max_digits=19, decimal_places=5, default=0)
    credit_days = models.PositiveIntegerField(default=30, null=True, blank=True, verbose_name='Días de Crédito')

    bank_accounts = models.TextField(null=True, blank=True, verbose_name='Cuentas Bancarias')
    sinpe_accounts = models.TextField(null=True, blank=True, verbose_name='Cuentas SINPE')
    observations = models.TextField(null=True, blank=True, verbose_name='Observaciones')

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')


    def __str__(self):
        return '%s %s' % (self.code, self.name)

    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
        ordering = ['code']

    @classmethod
    def create(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        #try getting the kwargs from the request, if not sent, generate an automatic one
        print(kwargs)
        code = None
        try:
            code = kwargs['code']
        except KeyError:
            pass

        if code == None or code == '':
            #generate an automatic code
            next_code = calculate_next_code(self_cls)
            kwargs['code'] = next_code
        
        with transaction.atomic():
            supplier = self_cls.objects.create(**kwargs)
            Log.objects.create(**{
                'code': 'SUPPLIER_CREATED',
                'model': 'SUPPLIER',
                'prev_object': '',
                'new_object': dump_object_json(supplier),
                'description': 'Nuevo proveedor creado',
                'user': dump_object_json(user)
            })
            return supplier

    @classmethod
    def apply_credit_movement(self_cls, **kwargs):
        supplier_code = None
        supplier_id = None
        supplier = None
        mov_type = None
        amount = None
        with transaction.atomic():
            try:
                supplier_code = kwargs['supplier_code']
            except KeyError:
                pass
            try:
                supplier_id = kwargs['supplier_id']
            except KeyError:
                pass

            if supplier_code != None:
                supplier = self_cls.objects.select_for_update().get(code=suppllier_code)
            elif supplier_id != None:
                supplier = self_cls.objects.select_for_update().get(id=supplier_id)
            else:
                raise TransactionError({"supplier_code": ["No se suministro un código de proveedor"],
                                        "supplier_id":["No se suministro un id de proveedor"]})

            #generate the original string rpresentation of the supplier
            original_supplier_string = dump_object_json(supplier)

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

            if mov_type == 'CRED':
                supplier.balance -= amount
            else:
                supplier.balance += amount
            
            supplier.save()

            updated_supplier_string = dump_object_json(supplier)

            Log.objects.create(**{
                'code': 'SUPPLIER_CREDIT_BALANCE_UPDATED',
                'model': 'SUPPLIER',
                'prev_object': original_supplier_string,
                'new_object': updated_supplier_string,
                'description': 'Pago a crédito tipo {}'.format(mov_type),
                'user': kwargs['user']
            })

    @classmethod
    def get_suppliers_with_balance(self_cls, balance_sign = 'negative'):
        
        suppliers = None
        if balance_sign == 'negative':
            suppliers = self_cls.objects.filter(balance__lt=Decimal(0))
        else:
            suppliers = self_cls.objects.filter(balance__gt=Decimal(0))
        return suppliers

    @classmethod
    def get_supplier_with_purchases(self_cls, pk):
        from apps.purchases.models import Purchase
        from apps.purchases.api.serializers import PurchaseSerializer

        supplier = None
        #check if the incoming parameter is an uuid or an code
        try:
            supplier = self_cls.objects.get(id=pk)
        except Exception:
            pass
        
        if supplier == None:
            try:
                supplier = self_cls.objects.get(code=pk)
            except Exception:
                raise TransactionError({'lookup':['pk is not a valid id or code for a purchase']})

        #get purchases with an active balance
        purchases = Purchase.objects.filter(supplier_id__exact=supplier.id).filter(balance__gt=Decimal("0"))
        purchases_serialized = []
        for purchase in purchases:
            purchases_serialized.append(PurchaseSerializer(purchase).data)
        return (supplier, purchases_serialized)

# CUSTOM PERMISSION
try:
    content_type = ContentType.objects.get_for_model(Supplier)
    permission = Permission.objects.create(
        codename='list_supplier',
        name='Can list Supplier',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print (type(e))
    pass



