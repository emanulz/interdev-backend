# Generated by Django 2.0.4 on 2018-05-11 21:14

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Credit_Movement',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('consecutive', models.AutoField(editable=False, primary_key=True, serialize=False, verbose_name='Número de movimiento')),
                ('client_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto Cliente')),
                ('bill_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto Factura')),
                ('credit_note_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto nota de crédito')),
                ('debit_note_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto nota de débito')),
                ('payment_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto Pago')),
                ('movement_type', models.CharField(choices=[('CRED', 'Crédito'), ('DEBI', 'Débito')], default='CRED', max_length=4, verbose_name='Tipo de Movimiento')),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=11, verbose_name='Monto')),
                ('description', models.CharField(blank=True, max_length=255, verbose_name='Descripción del movimiento')),
                ('is_null', models.BooleanField(default=False, verbose_name='Anulado?')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
            options={
                'verbose_name': 'Movimiento de Crédito',
                'verbose_name_plural': 'Movimientos de Crédito',
                'ordering': ['consecutive'],
            },
        ),
        migrations.CreateModel(
            name='Credit_Payment',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False)),
                ('consecutive', models.AutoField(editable=False, primary_key=True, serialize=False, verbose_name='Número de movimiento')),
                ('sales', models.TextField(default='', verbose_name='Objeto Array de Facturas')),
                ('user', models.TextField(default='', verbose_name='Objeto Usuario')),
                ('client', models.TextField(default='', verbose_name='Objeto Cliente')),
                ('client_id', models.CharField(blank=True, default='', max_length=255, null=True, verbose_name='ID Objeto Cliente')),
                ('amount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=11, verbose_name='Monto')),
                ('description', models.CharField(blank=True, max_length=255, verbose_name='Descripción del movimiento')),
                ('is_null', models.BooleanField(default=False, verbose_name='Anulado?')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
            options={
                'verbose_name': 'Pago de Crédito',
                'verbose_name_plural': 'Pagos de Crédito',
                'ordering': ['consecutive'],
            },
        ),
    ]
