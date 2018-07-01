from __future__ import absolute_import, unicode_literals
print("Loading sub task file")
import os
from datetime import datetime
from django.conf import settings
from uuid import uuid4

from celery import task

from celery.utils.log import get_task_logger


from .reports.helpers import createInventoryValueReport

logger = get_task_logger(__name__)


@task
def create_invvalue_report_task(*args):
    print("Periodic report generator start")
    '''Creates an Excel file with the inventory value'''
    logger.info("Create inventory value report")
    work_book = createInventoryValueReport('', False)
    today = datetime.today().strftime('%Y-%m-%d')
    media_path = settings.MEDIA_URL
    final_path =  settings.BASE_DIR.replace('\\', '/') + media_path +'reports/inventoryValue/'+'Valoración Inventario_{}_{}'.format(str(uuid4()), today)+ '.xlsx'
    with open(final_path, 'wb+') as destination:
        work_book.save(destination)
