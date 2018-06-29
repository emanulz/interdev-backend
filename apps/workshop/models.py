# -*- coding: utf-8 -*-
from django.db import models
import uuid
from decimal import Decimal, getcontext
import json

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
from apps.logs.models import Log
from apps.utils.utils import calculate_next_consecutive
from apps.utils.utils import dump_object_json
from apps.utils.exceptions import TransactionError
from django.db import transaction
from django.contrib.auth.models import User
from apps.clients.models import Client
from apps.sales.models import Cash_Advance
from apps.products.models import Product
from django.core.exceptions import ObjectDoesNotExist
from apps.inventories.models import Inventory_Movement


class Work_Order(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name="Número de orden", editable=False)
    is_closed = models.BooleanField(default=False, verbose_name="Orden Cerrada?")
    paid = models.BooleanField(default=False, verbose_name="Orden Pagada?")
    is_null = models.BooleanField(default=False, verbose_name="Orden Anulada?")
    receiving_employee = models.TextField(verbose_name="Objeto Empleado", default='')
    technician = models.TextField(verbose_name="Tecnico a Cargo", default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(verbose_name="ID Cliente", default='', max_length=40)
    related_work_order = models.CharField(verbose_name="ID Orden de Trabajo Asociada", default='', max_length=40, blank=True)

    # article properties
    article_type = models.CharField(verbose_name="Tipo Electrodoméstico", default='', max_length=50)
    article_brand = models.CharField(verbose_name="Marca", default='', max_length=100, blank=True, null=True)
    article_model = models.CharField(verbose_name="Modelo", default='', max_length=100, blank=True, null=True)
    article_serial = models.CharField(verbose_name="Número de Serie", max_length=100, blank=True, null=True)
    article_color = models.CharField(verbose_name="Color", default='', max_length=50, blank=True, null=True)
    article_data = models.CharField(max_length=255, blank=True, null=True, verbose_name="Datos del artículo", default='')

    malfunction_details = models.CharField(max_length=255, verbose_name="Detalles falla", default='')
    observations_list = models.TextField(verbose_name="Observaciones", default='') # store several observations as a JSON

    # warranty related properties
    closed_no_repair = models.BooleanField(default=False, verbose_name="Cerrada sin Reparación?")
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
        print("GRRRR")
        print(kwargs)
        mandatory_props = ['client', 'article_type', 'article_brand', 'article_color',
            'malfunction_details', 'observations_list', 'is_warranty', 'warranty_number_bd']

        optional_props = ['article_model', 'article_serial', 'article_data', 'related_work_order', 'warranty_reference']

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
                    if prop =='warranty_invoice_date' or prop == 'warranty_repaired_by':
                        if kwargs[prop] == '':
                            new_kwargs[prop] = None
                except KeyError:
                    if is_mandatory:
                        errors[prop] = 'La propiedad no se encuentra en los parámetros de creación de la orden de trabajo'
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

            #create the cash advances as needed
            advance_amount = round(abs(Decimal(kwargs['cash_advance'])),5)
            return_advances = []
            if advance_amount > 0:
                return_advances.append(
                    Cash_Advance.create(
                        user.id,
                        **{
                            'client': client_string,
                            'client_id': client.id,
                            'amount': advance_amount,
                            'description': 'Adelanto contra recepción orden de trabajo {}'.format(order_number),
                            'work_order_id': wo.id,
                            'sale_id': ''
                        }
                    )
                )

            return wo, return_advances
    
    @classmethod
    def getWorkOrderAndRelated(self_cls, user_id, wo_id):

        work_order = self_cls.objects.get(id=wo_id)
        #return the work order cash advances
        cash_advances = Cash_Advance.objects.filter(work_order_id__exact=work_order.id)
        labor_objects = Labor.objects.filter(work_order_id__exact=work_order.id)
        used_objects = UsedPart.objects.filter(work_order_id__exact=work_order.id)
        part_requests = PartRequest.objects.filter(work_order_id__exact=work_order.id).filter(amount__gt=Decimal('0'))
        request_groups = PartRequestGroup.objects.filter(work_order_id__exact=work_order.id)
        inf_movs = InformativeMovement.objects.filter(work_order_id__exact=work_order.id)
        return (work_order, cash_advances, labor_objects, used_objects, part_requests, request_groups, inf_movs)

    @classmethod
    def patch_work_order(self_cls, pk, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        wo = self_cls.objects.get(id=pk)
        wo_original_string = dump_object_json(wo)
        patch_kwargs = self_cls.check_create_kwargs(kwargs)

        client_id = kwargs['client_id']
        client = Client.objects.get(id=client_id)
        client_string = dump_object_json(client)
        patch_kwargs['client'] =  client_string

        for key in patch_kwargs.keys():
            setattr(wo, key, patch_kwargs[key])
        wo.save()
        wo_updated_string = dump_object_json(wo)
        
        Log.objects.create(**{
            'code': 'WORK_ORDER_UPDATE',
            'model': 'WORK_ORDER',
            'prev_object': wo_original_string,
            'new_object': dump_object_json(wo),
            'user': dump_object_json(user)
        })

        return wo

    @classmethod 
    def patch_workview(self_cls, pk, user_id, **kwargs):
        with transaction.atomic():
            work_order = self_cls.objects.get(id=pk)
            if work_order.is_closed:
                raise TransactionError({'Orden de Trabajo': ['La orden ya se encuentra cerrada, no se puede modificar.']})

            return_cash_advances = []
            return_labor_objects = []
            return_used_objects = []
            return_part_requests = []
            return_informative_movements = []

            client = Client.objects.get(id=kwargs['client_id'])
            client_string = dump_object_json(client)
            user = User.objects.get(id=user_id)
            user_string = dump_object_json(user)

            #check if the request contains any informative movements
            informative_data = json.loads(kwargs['informative_list'])
            informative_movs = []
            try:
                for inf in informative_data:
                    informative_movs.append(inf['element'])
            except:
                pass
            if informative_movs != None:
                for inf in informative_movs:
                    #if the objects contains an id, it has to patch an existent entity
                    inf_id = inf.get('id', None)
                    if inf_id == None:
                        #create a new instance
                        return_informative_movements.append(
                            InformativeMovement.create(
                                user.id,
                                **{
                                    'work_order_id': pk,
                                    'employee': dump_object_json(user),
                                    'description': inf['description']
                                }
                            )
                        )
                    else:
                        #patch existent
                        return_informative_movements.append(
                            InformativeMovement.patch(
                                user.id,
                                **{
                                    'id': inf['id'],
                                    'description': inf['description']
                                }
                            )
                        )

            #check if the request contains any cash advances
            cash_data = json.loads(kwargs['cash_advance_list'])
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
                        advance_amount = round(Decimal(cash['amount']), 5)
                        if advance_amount > 0 :
                            return_cash_advances.append(
                                Cash_Advance.create(
                                    user.id,
                                    **{
                                    'client': client_string,
                                    'client_id': client.id,
                                    'amount': advance_amount,
                                    'description': cash['description'],
                                    'work_order_id': pk,
                                    'sale_id': ''
                                })
                        )
                        
                    else:
                        #patch existent key
                        return_cash_advances.append(
                            Cash_Advance.patch(user_id, **{
                                'id': cash['id'],
                                'amount': cash['amount'],
                                'description': cash['description']
                            })
                        )
            
            #check if the request contains any labor objectes
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
            #check if the request contains any used parts
            used_data = json.loads(kwargs['used_list'])
            used_objects = []
            try:
                for used in used_data:
                    used_objects.append(used['element'])
            except:
                pass
            
            if used_objects != None:
                for used in used_objects:
                    used_id = used.get('id', None)
                    if used_id == None:
                        return_used_objects.append(
                            UsedPart.create(
                                user.id,
                                **{
                                    'work_order_id': pk,
                                    'employee': user_string,
                                    'amount': round(Decimal(used['amount']), 5),
                                    'description': used['description']
                                }
                            )
                        )
                    else:
                        return_used_objects.append(
                            UsedPart.patch(
                                user.id,
                                **{
                                    'id': used['id'],
                                    'amount': used['amount'],
                                    'description': used['description']
                                }
                            )
                        )
    
            #check if the request contains any parts request
            parts_request_data = json.loads(kwargs['parts_request_list'])

            main_warhouse_id = kwargs['main_warehouse_id']
            workshop_warehouse_id = kwargs['workshop_warehouse_id']
            black_decker_warehouse = kwargs['black_decker_warehouse']

            if parts_request_data != None:
                pr_group = None
                for req in parts_request_data:
                    req_id = req.get('uuid', None)
                    is_old_req = None
                    try:
                        is_old_req = PartRequest.objects.get(id=req_id)
                        return_part_requests.append(is_old_req)
                        continue
                    except ObjectDoesNotExist:
                        pass
                    destination_warehouse = workshop_warehouse_id
                    if work_order.warranty_number_bd != None and work_order.warranty_number_bd != '':
                        destination_warehouse = black_decker_warehouse

                    if pr_group == None:
                        pr_group = PartRequestGroup.create(user.id, work_order.id)

                    if is_old_req == None:
                        return_part_requests.append(
                            PartRequest.create(
                                user_id,
                                **{
                                    'work_order_id': pk,
                                    'employee': user_string,
                                    'product_id': req['element']['id'],
                                    'amount': req['qty'],
                                    'destination_warehouse_id': destination_warehouse,
                                    'origin_warehouse_id': main_warhouse_id,
                                    'part_request_group': pr_group.consecutive
                                }
                            )
                        )

                    #the part requests are not editable, they involve undoing inventory movements
                    #so it is a big chance to break stuff


            #check for things to delete
            wo_ids_to_delete = json.loads(kwargs['cash_advances_to_delete'])
            for wo_id in wo_ids_to_delete:
                Cash_Advance.deleteInstance(user_id, wo_id)

            labor_ids_to_delete = json.loads(kwargs['labor_list_to_delete'])
            for labor_id in labor_ids_to_delete:
                Labor.deleteInstance(user_id, labor_id)
            
            used_ids_to_delete = json.loads(kwargs['used_list_to_delete'])
            for used_id in used_ids_to_delete:
                UsedPart.deleteInstance(user_id, used_id)

            informative_movements_to_delete = json.loads(kwargs['informative_list_to_delete'])
            for inf_id in informative_movements_to_delete:
                InformativeMovement.deleteInstance(user_id, inf_id)

            parts_request_to_delete = json.loads(kwargs['parts_request_to_delete'])
            origin_warehouse = workshop_warehouse_id
            if work_order.warranty_number_bd != None and work_order.warranty_number_bd != '':
                origin_warehouse = black_decker_warehouse
            for part_req_id in parts_request_to_delete:
                PartRequest.nullInstance(
                    user_id,
                    part_req_id,
                    **{
                        'destination_warehouse_id': main_warhouse_id,
                        'origin_warehouse_id': origin_warehouse,
                        'work_order_id': pk
                    }
                )

            #check if the work order must be closed and do so 
            should_close = kwargs['close_order']
            is_no_reapair = kwargs['no_repair']
            if should_close:
                old_wo_string = dump_object_json(work_order)
                work_order.is_closed = True
                if is_no_reapair:
                    work_order.closed_no_repair = True
                work_order.save()
                Log.objects.create(**{
                    'code': 'WORK_ORDER_CLOSED',
                    'model': 'WORK_ORDER',
                    'prev_object': old_wo_string,
                    'new_object': dump_object_json(work_order),
                    'user': user_string
                })

            request_groups = PartRequestGroup.objects.filter(work_order_id__exact=work_order.id)
            return (work_order, return_cash_advances, return_labor_objects, return_used_objects, 
                return_part_requests, request_groups, return_informative_movements)

    @classmethod
    def setPaidAndDischargeInventory(self_cls, pk, user_id):
        with transaction.atomic():
            user = User.objects.get(id=user_id)
            user_string = dump_object_json(user)

            wo = self_cls.objects.get(id=pk)
            if wo.paid:
                raise TransactionError({'Pagar Orden': ["Se intento pagar una orden de trabajo ya cancelada."]})
            old_wo_string = dump_object_json(wo)

            #do the inventory transfer for all Part requests with amount larger than zero
            part_requests = PartRequest.objects.filter(work_order_id__exact=wo.id).filter(amount__gt=Decimal('0'))

            for request in part_requests:
                product_request = json.loads(request.product)
                #grrr load the movement just to get the warehouse id
                warehouse_mov = Inventory_Movement.objects.get(id=request.id_movement_workshop)
                kwargs_warehouse_mov = {
                    'warehouse_id': warehouse_mov.warehouse_id,
                    'mov_type': 'OUTPUT',
                    'amount': request.amount,
                    'description': 'Movimiento por Orden de trabajo #{}'.format(wo.consecutive),
                    'id_generator': 'wo_{}'.format(request.work_order_id)
                }

                Product.warehouse_movement(
                    product_request['id'],
                    user_id,
                    **kwargs_warehouse_mov
                )


            wo.is_closed = True
            wo.paid = True
            wo.save()
            Log.objects.create(**{
                'code': 'WORK_ORDER_PAYED',
                'model': 'WORk_ORDER',
                'prev_object': old_wo_string,
                'new_object': dump_object_json(wo),
                'user': user_string
            })

            return wo

    @classmethod
    def reopen(self_cls, wo_id, user_id):
        with transaction.atomic():
            wo = self_cls.objects.get(id=wo_id)
            if wo.paid:
                raise TransactionError({'Pagar Orden': ["Se intento reabrir una orden de trabajo ya pagada."]})
            if not wo.is_closed:
                raise TransactionError({'Pagar Orden': ["Se intento reabrir una orden de trabajo abierta."]})
            old_wo_string = dump_object_json(wo)
            wo.is_closed = False
            wo.save()
            user = User.objects.get(id=user_id)
            user_string = dump_object_json(user)
            Log.objects.create(**{
                'code': 'WORK_ORDER_REOPENED',
                'model': 'WORk_ORDER',
                'prev_object': old_wo_string,
                'new_object': dump_object_json(wo),
                'user': user_string,
                'description': 'Work Order#{} re-opened from sales app'.format(wo_id)
            })
            return wo

class PartRequestGroup(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name="Número de orden", editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=80, default='')
    user = models.TextField(verbose_name="Objeto usuario", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')
    class Meta:
        verbose_name = "Grupo de Requisición"
        verbose_name_plural = "Grupos de Requisción"
        ordering = ["consecutive"]
    
    @classmethod
    def create(self_cls, user_id, work_order_id):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            next_consecutive = calculate_next_consecutive(self_cls)
            pr_group = self_cls.objects.create(**{'consecutive':next_consecutive, 
                                                  'work_order_id': work_order_id,
                                                  'user': user_string  })
            Log.objects.create(**{
                'code': 'PART_REQUEST_GROUP_CREATED',
                'model': 'PART_REQUEST_GROUP',
                'prev_object': '',
                'new_object': dump_object_json(pr_group),
                'user': user_string
            })
            return pr_group

class InformativeMovement(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=80, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    description = models.CharField(max_length=255, verbose_name= "Descripción Reparación", default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Movimiento Informativo"
        verbose_name_plural = "Movimientos Informativos"
        ordering = ['work_order_id']
        default_permissions = ()

    @classmethod
    def create(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            inf_mov = self_cls.objects.create(**kwargs)
            Log.objects.create(**{
                'code': 'INFORMATIVE_MOVEMENT_CREATED',
                'model': 'INFORMATIVE_MOVEMENT',
                'prev_object': '',
                'new_object': dump_object_json(inf_mov),
                'user': user_string
            })   
            return inf_mov
    @classmethod
    def patch(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            inf_mov = self_cls.objects.get(id=kwargs['id'])

            should_update = False
            if kwargs['description'] != inf_mov.description:
                should_update = True
            
            if not should_update:
                return inf_mov

            old_inf_mov = dump_object_json(inf_mov)

            inf_mov.description = kwargs['description']

            inf_mov.save()

            Log.objects.create(**{
                'code': 'INFORMATIVE_MOVEMENT_UPDATED',
                'model': 'INFORMATIVE_MOVEMENT',
                'prev_object': old_inf_mov,
                'new_object': dump_object_json(inf_mov),
                'user': user_string
            })
            return inf_mov

    @classmethod
    def deleteInstance(self_cls, user_id, id):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user) 
        with transaction.atomic():
            inf_mov = self_cls.objects.get(id=id)
            Log.objects.create(**{
                'code': 'INFORMATIVE_MOVEMENT_DELETED',
                'model': 'INFORMATIVE_MOVEMENT',
                'prev_object': dump_object_json(inf_mov),
                'new_object': '',
                'user': user_string
            })
            inf_mov.delete() 

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
        default_permissions = ()
    
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
            
            if not should_update:
                return labor

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
        default_permissions = ()

    @classmethod
    def create(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            used_part = self_cls.objects.create(**kwargs)
            Log.objects.create(**{
                'code': 'USED_PART_REQUEST_CREATED',
                'model': 'USED_PART',
                'prev_object': '',
                'new_object': dump_object_json(used_part),
                'user': user_string
            })
            return used_part
    
    @classmethod
    def patch(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)

        with transaction.atomic():
            used_part = self_cls.objects.get(id=kwargs['id'])
            
            should_update = False
            if kwargs['description'] != used_part.description:
                should_update = True
            new_amount = round(Decimal(kwargs['amount']), 5)
            if new_amount != used_part.amount:
                print('SAME AMOUNT USED PART')
                should_update = True
            if not should_update:
                return used_part

            old_used_part = dump_object_json(used_part)

            used_part.amount = new_amount
            used_part.description = kwargs['description']

            used_part.save()

            Log.objects.create(**{
                'code': 'USED_PART_REQUEST_UPDATED',
                'model': 'USED_PART',
                'prev_object': old_used_part,
                'new_object': dump_object_json(used_part),
                'user': user_string
            })
            return used_part


    @classmethod
    def deleteInstance(self_cls, user_id, id):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user) 
        with transaction.atomic():
            used_part = self_cls.objects.get(id=id)
            Log.objects.create(**{
                'code': 'USED_PART_REQUEST_DELETED',
                'model': 'USED_PART',
                'prev_object': dump_object_json(used_part),
                'new_object':'',
                'user': user_string
            })
            used_part.delete()


class PartRequest(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    work_order_id = models.CharField(verbose_name="ID Orden de Trabajo", max_length=40, default='')
    employee = models.TextField(verbose_name="Empleado", default='')
    amount = models.DecimalField(max_digits=19, decimal_places=5, default=0, verbose_name="Cantidad")
    product = models.TextField(verbose_name= "Producto", default='')
    
    id_movement_workshop = models.UUIDField(verbose_name="ID movimiento Bodega de Taller")
    id_movement_origin = models.UUIDField(verbose_name="ID movimeinto Bodega Origen")

    part_request_group = models.CharField(verbose_name="Consecutivo Grupo Reqisición", max_length=40, default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    class Meta:
        verbose_name = "Traslado de Repuesto"
        verbose_name_plural = "Traslados de Repuesto"
        ordering = ['work_order_id']
        default_permissions = ()

    @classmethod
    def create(self_cls, user_id, **kwargs):
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user)
        with transaction.atomic():
            wo = Work_Order.objects.get(id=kwargs["work_order_id"])
            # create the inventory transfer from the main warehouse to the workshop warehouse
            prod = Product.objects.get(id=kwargs['product_id'])
            prod_string = dump_object_json(prod)
            # do the warehouse transfer
            transfer_kwargs = {
                'amount': kwargs['amount'],
                'destination_warehouse_id': kwargs['destination_warehouse_id'],
                'origin_warehouse_id': kwargs['origin_warehouse_id'],
                'description': 'Transferencia a Bodega de taller por orden #{}'.format(wo.consecutive),
                'generator': 'wo_{}'.format(kwargs["work_order_id"])
            }
            prod, origin, destination = Product.warehouse_transfer(prod.id, user_id, **transfer_kwargs)

            parts_request_kwargs = {
                'work_order_id': kwargs['work_order_id'],
                'employee': kwargs['employee'],
                'amount': kwargs['amount'],
                'product': prod_string,
                'id_movement_origin': origin.id,
                'id_movement_workshop': destination.id,
                'part_request_group': kwargs['part_request_group']
            }

            part_request = self_cls.objects.create(**parts_request_kwargs)

            Log.objects.create(**{
                'code': 'PART_REQUEST_CREATED',
                'model': 'LABOR',
                'prev_object': '',
                'new_object': dump_object_json(part_request),
                'user': user_string
            })
            return part_request

    @classmethod
    def nullInstance(self_cls, user_id, id, **kwargs):
        '''
        The Part request is linked to inventory transactions so it should not be deleted,
        when retrieving part requests, the filter looks for amounts larger than 0, to null
        a part request, set its amount to zero and do a reverse warehouse transfer.
        '''
        user = User.objects.get(id=user_id)
        user_string = dump_object_json(user) 
        with transaction.atomic():
            try:
                part_request = self_cls.objects.get(id=id)
            except ObjectDoesNotExist:
                return
            original_request_string = dump_object_json(part_request)
            request_product = json.loads(part_request.product)
            # do the reverse inventory transaction
            transfer_kwargs = {
                'amount': part_request.amount,
                'destination_warehouse_id': kwargs['destination_warehouse_id'],
                'origin_warehouse_id': kwargs['origin_warehouse_id'],
                'description': 'Requisición de parte anulada para orden de trabajo {}'.format(kwargs['work_order_id']),
                'generator': 'wo_{}'.format(part_request.work_order_id)
            }

            Product.warehouse_transfer(request_product['id'], user_id, **transfer_kwargs)

            part_request.amount = Decimal("0")
            part_request.save()
            updated_request_string = dump_object_json(part_request)

            Log.objects.create(**{
                'code': 'PART_REQUEST_VOIDED',
                'model': 'PART_REQUEST',
                'prev_object': original_request_string,
                'new_object': dump_object_json(part_request),
                'user': user_string
            })


try:
    content_type = ContentType.objects.get_for_model(Work_Order)
    permission = Permission.objects.create(
        codename='list_work_order',
        name='Can list Orden de Trabajo',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass
