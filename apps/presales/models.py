# -*- coding: utf-8 -*-
from __future__ import unicode_literals
import uuid
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError
import channels
from asgiref.sync import async_to_sync
from django.db.models.signals import post_save
from django.dispatch import receiver
from apps.utils.utils import dump_object_json
from django.db import transaction
from apps.logs.models import Log
from apps.utils.exceptions import TransactionError


class Presale(models.Model):

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name='Número de preventa', editable=False, unique=True)
    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=255, verbose_name='Id de Cliente', default='1')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    closed = models.BooleanField(default=False, blank=True, verbose_name='Cerrada')
    billed = models.BooleanField(default=False, blank=True, verbose_name='Facturada')
    is_null = models.BooleanField(default=False, blank=True, verbose_name='Anulada')
    sale_id = models.CharField(max_length=255, verbose_name='Id de Venta', default='')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    def __str__(self):
        return '%s' % (self.bill_number)

    class Meta:
        verbose_name = 'Preventa'
        verbose_name_plural = 'Preventas'
        ordering = ['consecutive']

    @classmethod
    def mark_as_complete(self_cls, **kwargs):
        with transaction.atomic():
            try:
                sale_id = kwargs['sale_id']
                presale_id = kwargs['presale_id']
            except KeyError:
                raise TransactionError({'sale_id-presale_id':['IDs not sent fro presale or sale']})
            sale_id = kwargs['sale_id']
            presale = self_cls.objects.select_for_update().get(id=presale_id)
            presale.sale_id = sale_id
            presale.billed = True
            # create a json of the old presale
            presale_old = dump_object_json(presale)
            presale.save()
            # create a json of the new presale
            presale_new = dump_object_json(presale)
            # create the log of the change
            Log.objects.create(**{
                'code': 'SALE_CREDIT_BALANCE_UDPATE',
                'model': 'SALE',
                'prev_object': presale_old,
                'new_object': presale_new,
                'description': 'Sale created, presale patched',
                'user': kwargs['user']
            })

            return True


@receiver(post_save, sender=Presale)
def send_message(sender, instance, **kwargs):
    if instance.closed and not instance.billed and not instance.is_null:
        async_to_sync(channels.layers.get_channel_layer().group_send)(
            'global_broadcaster',
            {
                'type': 'broadcast_message',
                'message': 'PRESALE_UPDATED',
                'item': instance.consecutive
            }
        )


try:
    content_type = ContentType.objects.get_for_model(Presale)
    permission = Permission.objects.create(
        codename='list_presale',
        name='Can list Presale',
        content_type=content_type,
        )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass
