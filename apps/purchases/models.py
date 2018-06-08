from django.db import models
import uuid

from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import transaction
from apps.utils.utils import calculate_next_consecutive, dump_object_json
from apps.utils.serializers import UserSerialiazer
from django.contrib.auth.models import User


class Purchase(models.Model):

    cash = 'CASH'
    card = 'CARD'
    credit = 'CRED'
    transfer = 'TRAN'
    other = 'OTHER'

    PAY_CHOICES = ((cash, 'Efectivo'),
                   (card, 'Tarjeta'),
                   (credit, 'Crédito'),
                   (transfer, 'Transferencia'),
                   (other, 'Otro')
                   )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.AutoField(primary_key=True, verbose_name="Número de compra", editable=False)
    user = models.TextField(verbose_name='Objeto Usuario', default='')

    supplier = models.TextField(verbose_name="Proveedor", default="")
    supplier_id = models.CharField(max_length = 40, verbose_name='ID del Proveedor', default ='')
    warehouse = models.TextField(verbose_name="Bodega de Destino", default="")
    warehouse_id = models.CharField(max_length=40, verbose_name="ID de la Bodega", default="")

    cart = models.TextField(verbose_name='Objeto Carrito', default='')
    
    #indicates wether or not this invoice data load is closed
    is_closed = models.BooleanField(verbose_name="Factura Cerrada", default=False)

    pay = models.TextField(verbose_name='Objeto Pago', default='')
    
    invoice_number = models.CharField(max_length=255, verbose_name='Número de Factura')
    invoice_date = models.DateField(blank=True, null=True)
    credit_days =  models.IntegerField(default=0, verbose_name='Plazo Crédito')

    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')

    @classmethod
    def create(self_cls, user_id,  **kwargs):
        user = User.objects.get(id=user_id)
        user_string = UserSerialiazer(user).data
        with transaction.atomic():
            print("Purchase creation start")



