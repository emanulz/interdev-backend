# Generated by Django 2.0.4 on 2018-05-03 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_auto_20180425_0938'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='base_code',
        ),
    ]
