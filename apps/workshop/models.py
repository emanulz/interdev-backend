# -*- coding: utf-8 -*-
from django.db import models
import uuid
from decimal import Decimal, getcontext
import json

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from apps.logs.models import Log
from apps.utils.utils import calculate_next_consecutive
from apps.utils.utils import dump_object_json
from apps.utils.exceptions import TransactionError
from django.db import transaction
from django.contrib.auth.models import User
from apps.clients.models import Client
from apps.sales.models import Cash_Advance


class Work_Order(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name="Número de orden", editable=False)
    is_closed = models.BooleanField(default=False, verbose_name="Orden Cerrada?")
    paid = models.BooleanField(default=False, verbose_name="Orden Pagada?")
    receiving_employee = models.TextField(verbose_name="Objeto Empleado", default='')
    technician = models.TextField(verbose_name="Tecnico a Cargo", default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(verbose_name="ID Cliente", default='', max_length=40)
    related_work_order = models.CharField(verbose_name="ID Orden de Trabajo Asociada", default='', max_length=40, blank=True)
    
    #article properties
    article_type = models.CharField(verbose_name="Tipo Electrodoméstico", default='', max_length=50)
    article_brand = models.CharField(verbose_name="Marca", default='', max_length=100, blank=True, null=True)
    article_model = models.CharField(verbose_name="Modelo", default='', max_length=100, blank=True, null=True)
    article_serial = models.CharField(verbose_name="Número de Serie", max_length=100, blank=True, null=True)
    article_color = models.CharField(verbose_name="Color", default='', max_length=50, blank=True, null=True)
    article_data = models.CharField(max_length=255, blank=True, null=True, verbose_name="Datos del artículo", default='')

    malfunction_details = models.CharField(max_length=255, verbose_name="Detalles falla", default='')
    observations_list = models.TextField(verbose_name="Observaciones", default='') #store several observations as a JSON

    #warranty related properties
    is_warranty = models.BooleanField(default=False, verbose_name="Es una orden de Garantía?")
    warranty_number_bd = models.CharField(verbose_name="Número de garantía Black&Decker", max_length=60, blank=True, null=True)
    warranty_invoice_date = models.DateField(verbose_name="Fecha venta en factura del producto", blank=True, null=True)
    warranty_supplier_name = models.CharField(verbose_name="Nombre de Comercio en factura", max_length=60, blank=True, null=True)
    warranty_invoice_number = models.CharField(verbose_name="Número de Factura de venta", max_length=60, blank=True, null=True)
    warranty_repaired_by = models.DateField(verbose_name="Fecha estimada para entrega", blank=True, null=True)
    warranty_reference = models.CharField(verbose_name="Número de Referencia", max_length=60, default='', blank=True)
    warranty_reported_to_bd = models.BooleanField(verbose_name="Garantía Reportada a B&D", default=False)
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Orden de Trabajo"
        verbose_name_plural = "Órdenes de Trabajo"
        ordering = ['consecutive']
        permissions = (("list_work_order", "Can list Work_Order"),)

    def check_create_kwargs(kwargs):

        mandatory_props = ['client', 'article_type', 'article_brand', 'article_color',
            'malfunction_details', 'observations_list', 'is_warranty', 'warranty_number_bd']

        optional_props = ['article_model', 'article_serial', 'article_data', 'related_work_order', 'warranty_reference', 'warranty_repaired_by']

        conditional_mandatory = ['warranty_invoice_date', 'warranty_supplier_name',
            'warranty_invoice_number']
        
        if kwargs['warranty_number_bd'] != '':
            mandatory_props += conditional_mandatory
        else:
            optional_props += conditional_mandatory

        new_kwargs ={}

        errors = {}

        def checkProp(props, is_mandatory):
            for prop in props:
                try:
                    new_kwargs[prop] = kwargs[prop]
                except KeyError:
                    if is_mandatory:
                        errors[prop] = 'La propiedad no se encuentra en los parámetrosde creación de la orden de trabajo'
                    else:
                        if prop == 'warranty_invoice_date' or prop == 'warranty_repaired_by':
                            new_kwargs[prop] = None
                        else:
                            new_kwargs[prop] = ''

        checkProp(optional_props, False)
        checkProp(mandatory_props, True)
        if len(errors.keys())>0:
            raise TransactionError(errors)
        return new_kwargs
    

    @classmethod
    def create(self_cls, user_id, **kwargs):
        '''Creates a new work order'''
        user = User.objects.get(id=user_id)
        new_kwargs = self_cls.check_create_kwargs(kwargs)

        user_string = dump_object_json(user)

        new_kwargs['receiving_employee'] = user_string
        new_kwargs['technician'] = 'Técnico por Defecto'
 
        client_id = kwargs['client_id']
        client = Client.objects.get(id=client_id)
        client_string = dump_object_json(client)

        new_kwargs['client_id'] = client_id
        new_kwargs['client'] =  client_string


        with transaction.atomic():
            order_number = calculate_next_consecutive(self_cls)
            new_kwargs['consecutive'] = order_number
            #do a model level validation
            val_wo = Work_Order(**new_kwargs).full_clean()
            wo = self_cls.objects.create(**new_kwargs)
            #log the creation of the work order
            Log.objects.create(**{
                'code': 'WORK_ORDER_CREATED',
                'model': 'WORK_ORDER',
                'prev_object':'',
                'new_object': dump_object_json(wo),
                'user':user_string
            })

            return wo
    
    @classmethod
    def getWorkOrderAndRelated(self_cls, user_id, wo_id):

        work_order = self_cls.objects.get(id=wo_id)
        #return the work order cash advances
        cash_advances = Cash_Advance.objects.filter(work_order_id__exact=work_order.id)
        labor_objects = Labor.objects.filter(work_order_id__exact=work_order.id)
        return (work_order, cash_advances, labor_objects)

    @classmethod 
    def patch_workview(self_cls, pk, user_id, **kwargs):
        print('Patch workview route entry')

        work_order = self_cls.objects.get(id=pk)
        return_cash_advances = []
        return_labor_objects = []

        client = Client.objects.get(id=kwargs['client_id'])
        client_string = dump_object_json(client)
        user = User.objects.get(id=user_id)

        cash_data = json.loads(kwargs['cash_advance_list'])
        #check if the request contains any cash advances
        cash_advances =  []
        try:
            for advance in cash_data:
                cash_advances.append(advance['element'])
        except:
            pass

        if cash_advances != None:
            for cash in cash_advances:
                #if the objects contains an id, it has to patch an existent advance
                cash_id = cash.get('id', None)
                if cash_id == None:
                    #create a new instance
                    return_cash_advances.append(
                        Cash_Advance.create(
                            user.id,
                            **{
                            'client': client_string,
                            'client_id': client.id,
                            'amount': round(Decimal(cash['amount']), 5),
                            'description': cash['description'],
                            'work_order_id': pk,
                            'sale_id': ''
                        })
                    )
                    
                else:
                    #patch existent key
                    print("Patch existent cash advance")
                    return_cash_advances.append(
                        Cash_Advance.patch(user_id, **{
                            'id': cash['id'],
                            'amount': cash['amount'],
                            'description': cash['description']
                        })
                    )
        print('KWARGS')
        print(kwargs)
        labor_data = json.loads(kwargs['labor_list'])
        labor_objects = []
        try:
            for labor in labor_data:
                labor_objects.append(labor['element'])
        except:
            pass
        if labor_objects != None:
            for labor in labor_objects:
                labor_id = labor.get('id', None)
                if labor_id == None:
                    return_labor_objects.append(
                        Labor.create(
                            user.id,
                            **{
                                'work_order_id': pk,
                                'employee': dump_object_json(user),
                                'amount': round(Decimal(labor['amount']), 5),
                                'description': labor['description']
                            }
                        )
                    )
                else:
                    #patch existent
                    print('Patch existent labor')
                    return_labor_objects.append(
                        Labor.patch(
                            user.id,
                            **{
                                'id': labor['id'],
                                'amount': labor['amount'],
                                'description': labor['description']
                            }
                        )
                    )



        wo_ids_to_delete = json.loads(kwargs['cash_advances_to_delete'])
        for wo_id in wo_ids_to_delete:
            Cash_Advance.deleteInstance(user_id, wo_id)

        labor_ids_to_delete = json.loads(kwargs['labor_list_to_delete'])
        for labor_id in labor_ids_to_delete:
            Labor.deleteInstance(user_id, labor_id)
        




        return (work_order, return_cash_advances, return_labor_objects)

class Labor(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=80, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name="Costo Mano de Obra ₡")
    description = models.CharField(max_length=255, verbose_name= "Descripción Reparación", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Mano de Obra"
        verbose_name_plural = "Mano de Obra"
        ordering = ['work_order_id']
        permissions = (("list_labor", "Can list Labor"),)
    
    @classmethod
    def create(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            labor = self_cls.objects.create(**kwargs)
            Log.objects.create(**{
                'code': 'LABOR_CREATED',
                'model': 'LABOR',
                'prev_object': '',
                'new_object': dump_object_json(labor),
                'user': user_string
            })   
            return labor
    
    @classmethod
    def patch(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            labor = self_cls.objects.get(id=kwargs['id'])

            should_update = False
            if kwargs['description'] != labor.description:
                should_update = True
            new_amount = round(Decimal(kwargs['amount']), 5)
            if new_amount != labor.amount:
                should_update = True
            
            old_labor = dump_object_json(labor)

            labor.amount = new_amount
            labor.description = kwargs['description']

            labor.save()

            Log.objects.create(**{
                'code': 'LABOR_UPDATED',
                'model': 'LABOR',
                'prev_object': old_labor,
                'new_object': dump_object_json(labor),
                'user': user_string
            })
            return labor

    @classmethod
    def deleteInstance(self_cls, user_id, id):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user) 
        with transaction.atomic():
            labor = self_cls.objects.get(id=id)
            Log.objects.create(**{
                'code': 'LABOR_DELETED',
                'model': 'LABOR',
                'prev_object': dump_object_json(labor),
                'new_object': '',
                'user': user_string
            })
            labor.delete() 


class UsedPart(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=80, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name="Costo Respuesto ₡")
    description = models.CharField(max_length=255, verbose_name= "Descripción parte", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Repuesto Usado"
        verbose_name_plural = "Repuestos Usados"
        ordering = ['work_order_id']
        permissions = (("list_used_part", "Can list Used Parts"),)

class PartRequest(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name="Cantidad")
    product = models.TextField(verbose_name= "Producto", default='')

    id_movement_workshop = models.UUIDField(verbose_name="ID movimiento Bodega de Taller")
    id_movement_origin = models.UUIDField(verbose_name="ID movimeinto Bodega Origen")

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Traslado de Repuesto"
        verbose_name_plural = "Traslados de Repuesto"
        ordering = ['work_order_id']
        permissions = (("list_part_request", "Can list Parts request"),)
