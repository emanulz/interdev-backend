from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings

#set the default Django settings module for the celery program
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
app = Celery('backend')

#using a string here means the worker will not have to pickle the object in windows
#app.config_from_object('django.conf:settings')
app.config_from_object('django.conf:settings', namespace='CELERY')
#app.autodiscover_tasks(lambda: settings.INSTALLED_APPS, related_name='tasks_mailing')
#app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
app.autodiscover_tasks()
app.autodiscover_tasks(related_name='tasks_pdf_making')
app.autodiscover_tasks(related_name='tasks_mailing') #discover tasks from files with a non standard name
app.autodiscover_tasks(related_name='the_overseer_tasks')
@app.task(bind=True)
def debug_task(self):
    print("Binding?")
    print('Request: {0!r}'.format(self.request))

