# Generated by Django 2.0.4 on 2018-04-21 20:27

import apps.products.models
from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('code', models.CharField(max_length=10, null=True, unique=True, verbose_name='Código')),
                ('description', models.CharField(max_length=255, null=True, verbose_name='Descripción del producto')),
                ('unit', models.CharField(blank=True, max_length=255, null=True, verbose_name='Unidad')),
                ('fractioned', models.BooleanField(default=False, verbose_name='Se vende Fracionado?')),
                ('base_code', models.CharField(blank=True, default='000000', max_length=6, null=True, verbose_name='Código Base')),
                ('barcode', models.CharField(blank=True, max_length=255, null=True, verbose_name='Código de Barras')),
                ('internal_barcode', models.CharField(blank=True, max_length=255, null=True, verbose_name='Código de Barras Interno')),
                ('supplier_code', models.CharField(blank=True, max_length=255, null=True, verbose_name='Código del proveedor')),
                ('model', models.CharField(blank=True, max_length=255, null=True, verbose_name='Modelos')),
                ('part_number', models.CharField(blank=True, max_length=255, null=True, verbose_name='Número de parte')),
                ('brand_code', models.CharField(blank=True, max_length=2, null=True, verbose_name='Código de Marca')),
                ('inventory_enabled', models.BooleanField(default=False, verbose_name='Sistema de Inventarios?')),
                ('inventory_minimum', models.FloatField(blank=True, default=0, null=True, verbose_name='Mínimo en inventario')),
                ('inventory_maximum', models.FloatField(blank=True, default=0, null=True, verbose_name='Máximo en inventario')),
                ('inventory_negative', models.BooleanField(default=False, verbose_name='Puede sobrefacturarse?')),
                ('cost', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Costo ₡')),
                ('cost_based', models.BooleanField(default=True, verbose_name='Precio basado en Costo?')),
                ('utility', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=5, null=True, verbose_name='Utilidad %')),
                ('utility2', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=5, null=True, verbose_name='Utilidad %')),
                ('utility3', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=5, null=True, verbose_name='Utilidad %')),
                ('price', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio sin Impuestos ₡')),
                ('price2', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio sin Impuestos ₡')),
                ('price3', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio sin Impuestos ₡')),
                ('sell_price', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio IVI ₡')),
                ('sell_price2', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio IVI ₡')),
                ('sell_price3', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True, verbose_name='Precio IVI ₡')),
                ('ask_price', models.BooleanField(default=False, verbose_name='Pide Precio al facturar?')),
                ('use_taxes', models.BooleanField(default=False, verbose_name='Usa impuesto?')),
                ('taxes', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=4, null=True, verbose_name='Impuesto %')),
                ('use_taxes2', models.BooleanField(default=False, verbose_name='Usa impuesto 2?')),
                ('taxes2', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=4, null=True, verbose_name='Impuesto2 %')),
                ('pred_discount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=4, null=True, verbose_name='Descuento Predeterminado %')),
                ('max_sale_discount', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=4, null=True, verbose_name='Descuento Máximo en liquidación %')),
                ('on_sale', models.BooleanField(default=False, verbose_name='En liquidación?')),
                ('is_active', models.BooleanField(default=True, verbose_name='Activo?')),
                ('consignment', models.BooleanField(default=False, verbose_name='Es en consignación?')),
                ('generic', models.BooleanField(default=False, verbose_name='Es Genérico?')),
                ('image', models.ImageField(blank=True, null=True, upload_to=apps.products.models.url)),
                ('observations', models.TextField(blank=True, null=True, verbose_name='Observaciones')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
            options={
                'verbose_name': 'Producto',
                'verbose_name_plural': 'Productos',
                'ordering': ['code'],
            },
        ),
        migrations.CreateModel(
            name='ProductDepartment',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, verbose_name='Nombre de la Familia')),
                ('code', models.CharField(max_length=2, verbose_name='Identificador de Familia')),
                ('observations', models.TextField(blank=True, null=True, verbose_name='Observaciones')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
            ],
            options={
                'verbose_name': 'Familia',
                'verbose_name_plural': 'Productos - 1. Familias',
                'ordering': ['code'],
            },
        ),
        migrations.CreateModel(
            name='ProductSubDepartment',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, verbose_name='Nombre de la Sub-Familia')),
                ('code', models.CharField(max_length=2, verbose_name='Identificador de Sub-Familia')),
                ('observations', models.TextField(blank=True, null=True, verbose_name='Observaciones')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
                ('updated', models.DateTimeField(auto_now=True, null=True, verbose_name='Fecha de modificación')),
                ('department', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.ProductDepartment', verbose_name='Familia')),
            ],
            options={
                'verbose_name': 'Sub-Familia',
                'verbose_name_plural': 'Productos - 2. Sub-Familias',
                'ordering': ['code'],
            },
        ),
        migrations.AddField(
            model_name='product',
            name='department',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.ProductDepartment', verbose_name='Familia'),
        ),
        migrations.AddField(
            model_name='product',
            name='subdepartment',
            field=models.ForeignKey(default='', null=True, on_delete=django.db.models.deletion.SET_NULL, to='products.ProductSubDepartment', verbose_name='Sub-Familia'),
        ),
        migrations.AlterUniqueTogether(
            name='productsubdepartment',
            unique_together={('department', 'code')},
        ),
    ]
