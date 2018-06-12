from django.db.models import Max
import json
from decimal import Decimal
from django.db import models
import uuid
from itertools import chain
from datetime import date, datetime


def calculate_next_consecutive(self_cls):
    next_consecutive = self_cls.objects.all().aggregate(Max('consecutive'))['consecutive__max']
    if next_consecutive != None:
        next_consecutive = int(next_consecutive)+1
    else:
        next_consecutive = 1
    return next_consecutive


def dump_object_json(target_object):

    object_dict = model_to_dict_all(target_object)
    keys_to_delete = []
    for key in object_dict.keys():
        val = object_dict[key]
        if isinstance(val, Decimal):
            object_dict[key] = str(object_dict[key])
        elif isinstance(val, uuid.UUID):
            object_dict[key] = str(object_dict[key])
        elif isinstance(val, models.fields.files.ImageFieldFile):
            keys_to_delete.append(key)
        elif isinstance(val, date):
            object_dict[key] = str(object_dict[key])
    for key in keys_to_delete:
        del object_dict[key]

    string = json.dumps(object_dict)
    return string


def model_to_dict_all(instance, fields=None, exclude=None):
    """
    Return a dict containing the data in ``instance`` suitable for passing as
    a Form's ``initial`` keyword argument.

    ``fields`` is an optional list of field names. If provided, return only the
    named.

    ``exclude`` is an optional list of field names. If provided, exclude the
    named from the returned dict, even if they are listed in the ``fields``
    argument.
    """
    opts = instance._meta
    data = {}
    for f in chain(opts.concrete_fields, opts.private_fields, opts.many_to_many):
        if fields and f.name not in fields:
            continue
        if exclude and f.name in exclude:
            continue
        data[f.name] = f.value_from_object(instance)
    return data
