# Generated by Django 2.0.4 on 2018-05-23 03:10

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Purchase',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('consecutive', models.AutoField(editable=False, primary_key=True, serialize=False, verbose_name='Número de compra')),
                ('user', models.TextField(default='', verbose_name='Objeto Usuario')),
                ('supplier', models.TextField(verbose_name='Proveedor')),
                ('cart', models.TextField(default='', verbose_name='Objeto Carrito')),
                ('pay', models.TextField(default='', verbose_name='Objeto Pago')),
                ('pay_type', models.CharField(choices=[('CASH', 'Efectivo'), ('CARD', 'Tarjeta'), ('CRED', 'Crédito'), ('TRAN', 'Transferencia'), ('OTHE', 'Otro')], default='CASH', max_length=4, verbose_name='Tipo de Pago')),
                ('payed', models.BooleanField(default=True, verbose_name='Pagada')),
                ('invoice_number', models.CharField(max_length=255, verbose_name='Número de Factura')),
                ('invoice_date', models.DateTimeField(blank=True, null=True)),
                ('credit_days', models.IntegerField(default=0, verbose_name='Plazo Crédito')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
        ),
    ]
