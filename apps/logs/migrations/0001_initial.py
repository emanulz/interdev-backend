# Generated by Django 2.0.4 on 2018-04-21 20:27

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Log',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('code', models.CharField(blank=True, max_length=255, null=True, verbose_name='Código')),
                ('model', models.CharField(blank=True, max_length=255, null=True, verbose_name='Modelo Afectado')),
                ('prev_object', models.TextField(blank=True, null=True, verbose_name='Objeto Anterior')),
                ('new_object', models.TextField(blank=True, null=True, verbose_name='Objeto Nuevo')),
                ('description', models.CharField(blank=True, max_length=255, null=True, verbose_name='Descripción')),
                ('user', models.TextField(blank=True, null=True, verbose_name='Usuario')),
                ('created', models.DateTimeField(auto_now_add=True, null=True, verbose_name='Fecha de creación')),
            ],
            options={
                'verbose_name': 'Log',
                'verbose_name_plural': 'Logs',
                'ordering': ['id'],
            },
        ),
    ]
