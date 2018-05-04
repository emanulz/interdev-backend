# Generated by Django 2.0.4 on 2018-05-04 00:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_auto_20180503_0941'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='cost',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Costo ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='max_sale_discount',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Descuento Máximo en liquidación %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='pred_discount',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Descuento Predeterminado %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio sin Impuestos ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price2',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio sin Impuestos ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price3',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio sin Impuestos ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='sell_price',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio IVI ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='sell_price2',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio IVI ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='sell_price3',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Precio IVI ₡'),
        ),
        migrations.AlterField(
            model_name='product',
            name='taxes',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Impuesto1 %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='taxes2',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Impuesto2 %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='taxes3',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Impuesto3 %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='utility',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Utilidad %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='utility2',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Utilidad %'),
        ),
        migrations.AlterField(
            model_name='product',
            name='utility3',
            field=models.FloatField(blank=True, default=0, null=True, verbose_name='Utilidad %'),
        ),
    ]
