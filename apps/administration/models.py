# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType
from django.db import IntegrityError


class Administration(models.Model):
    pass


# ADD CAN ACCESS ADMIN
try:
    content_type = ContentType.objects.get_for_model(Administration)
    permission = Permission.objects.create(
        codename='access_administration',
        name='Can access Administration',
        content_type=content_type,
    )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass

# ADD CAN ACCESS SALES
try:
    content_type = ContentType.objects.get_for_model(Administration)
    permission2 = Permission.objects.create(
        codename='access_sales',
        name='Can access Sales',
        content_type=content_type,
    )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass

# ADD CAN ACCESS PRESALES
try:
    content_type = ContentType.objects.get_for_model(Administration)
    permission3 = Permission.objects.create(
        codename='access_presales',
        name='Can access Presales',
        content_type=content_type,
    )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass

# ADD CAN ACCESS INVENTORIES
try:
    permission4 = Permission.objects.create(
        codename='access_inventories',
        name='Can access Inventories',
        content_type=content_type,
    )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass

# ADD CAN ACCESS WORKSHOP
try:
    permission5 = Permission.objects.create(
        codename='access_workshop',
        name='Can access Workshop',
        content_type=content_type,
    )
except Exception as e:
    if type(e) != IntegrityError:
        print(type(e))
    pass
