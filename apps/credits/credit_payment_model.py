from django.db import models
import uuid
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError, transaction
from apps.utils.exceptions import TransactionError
from apps.utils.utils import calculate_next_consecutive
from django.contrib.auth.models import User
from apps.utils.serializers import UserSerialiazer
from apps.clients.models import Client
from decimal import Decimal, getcontext
from apps.credits.models import Credit_Movement
from apps.utils.utils import dump_object_json
from apps.logs.models import Log
import json

class Credit_Payment(models.Model):

    credit = 'CRED'
    debit = 'DEBI'

    MOVEMENT_CHOICES = ((credit, 'Crédito'),
                        (debit, 'Débito')
                        )

    id = models.UUIDField(default=uuid.uuid4, editable=False)
    consecutive = models.IntegerField(primary_key=True, verbose_name='Número de movimiento', editable=False)
    sales = models.TextField(verbose_name='Objeto Array de Facturas', default='')
    user = models.TextField(verbose_name='Objeto Usuario', default='')
    client = models.TextField(verbose_name='Objeto Cliente', default='')
    client_id = models.CharField(max_length=80, blank=True, null=True, verbose_name='ID Objeto Cliente', default='')
    amount = models.DecimalField(max_digits=19, decimal_places=5, verbose_name='Monto',
                                 blank=True, default=0)
    is_null = models.BooleanField(default=False, verbose_name='Anulado?')
    description = models.CharField(max_length=255, blank=True, verbose_name='Descripción del movimiento')
    created = models.DateTimeField(auto_now=False, auto_now_add=True, blank=True, null=True,
                                   verbose_name='Fecha de creación')
    updated = models.DateTimeField(auto_now=True, auto_now_add=False, blank=True, null=True,
                                   verbose_name='Fecha de modificación')


    @classmethod
    def create(self_cls, user_id, **kwargs):
        from apps.sales.models import Sale
        with transaction.atomic():
            errors = {}
            #check incoming data
            sales = None
            client_id = None
            client_string = None
            amount = None
            description = None
            user = None
            user_string = None

            try:
                sales = kwargs['sales']
            except KeyError:
                errors['sales'] = ['sales not sent']
            try:
                client_id = kwargs['client_id']
                client = Client.objects.get(id=client_id)
                client_string = dump_object_json(client)
            except KeyError:
                errors['client_id'] = ['client_id not sent or does not correspond to a client']

            try:
                amount = Decimal(round(kwargs["amount"], 5))
            except (KeyError, ValueError):
                errors["amount"] = ['amount of payment not sent']
            
            try:
                description = kwargs['description']
            except KeyError:
                # errors["description"] = ["Description not sent"]
                description = 'Pago a facturas desde el app de crédito'

            try:
                user = User.objects.get(id=user_id)
                user_string = UserSerialiazer(user).data
            except KeyError:
                errors['user_id'] = ["user_id not sent or does not correspond to a user"]

            if(len(errors.keys())>0):
                raise TransactionError(errors)
            next_consecutive = calculate_next_consecutive(self_cls)
            payment = self_cls.objects.create(
                consecutive=next_consecutive,
                sales = sales,
                user = user_string,
                client = client_string,
                client_id = client_id,
                amount = amount,
                description = description
            )

            #log the creation of the payment
            Log.objects.create(**{
                'code': 'PAYMENT_CREATED',
                'model': 'CREDIT_PAYMENT',
                'prev_object': '',
                'new_object':  dump_object_json(payment),
                'description': 'Payment made by client {} {}'.format(client.name, client.last_name),
                'user': user_string
            })

            #create a credit movement to each invoice for the subamount
            pay_kwargs = []
            client_update_kwargs = []
            sale_update_kwargs = []
            sales = json.loads(sales)
            print(sales)
            for pay_data in sales:
                #prepare kwargs
                pay_kwargs.append({
                    'user': user_string,
                    'client_id': client_id,
                    'bill_id': pay_data["bill_id"],
                    'payment_id': payment.id,
                    'movement_type': "DEBI",
                    'amount': Decimal(round(pay_data["amount"], 5)),
                    'description': 'Movimiento débito por pago {}'.format(payment.consecutive)
                })

                client_update_kwargs.append({
                    'client_id': client_id,
                    'mov_type': 'DEBI',
                    'amount': pay_data['amount'],
                    'user': user_string
                })

                sale_update_kwargs.append({
                    'sale_id': pay_data['bill_id'],
                    'user': user_string,
                    'amount': pay_data['amount']
                })


            #apply all payments to the client object and create the credit movs
            for mov_kwargs, client_kwargs, sale_kwargs in zip(pay_kwargs, client_update_kwargs, sale_update_kwargs):
                Credit_Movement.create(**mov_kwargs)
                Client.apply_credit_movement(**client_kwargs)
                Sale.apply_payment(**sale_kwargs)

            return payment

    def __str__(self):
        return self.consecutive

    class Meta:
        verbose_name = 'Pago de Crédito'
        verbose_name_plural = 'Pagos de Crédito'
        ordering = ['consecutive']