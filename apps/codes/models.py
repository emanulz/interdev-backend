from django.db import models
from apps.utils.exceptions import TransactionError
from django.db import IntegrityError
from django.db import transaction

class Code(models.Model):
    id = models.AutoField(primary_key = True)
    model_name = models.CharField(max_length=255, verbose_name="Nombre Modelo")
    consecutive = models.PositiveIntegerField(default=0, verbose_name="Último código consumido")


    def __str__(self):
        return '%s - %s ' % (self.model_name, self.consecutive)

    class Meta:
        verbose_name = 'Código'
        verbose_name_plural = 'Códigos'
        ordering = ['consecutive']
