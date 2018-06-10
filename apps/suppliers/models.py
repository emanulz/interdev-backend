# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from apps.utils.exceptions import TransactionError
from apps.utils.utils import dump_object_json, calculate_next_consecutive
from decimal import Decimal, getcontext
from apps.logs.models import Log
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
        return '%s %s' % (self.name, self.last_name)

    class Meta:
        verbose_name = 'Proveedor'
        verbose_name_plural = 'Proveedores'
        ordering = ['code']


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

            if suppllier_code != None:
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
