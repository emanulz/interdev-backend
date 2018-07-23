from __future__ import absolute_import, unicode_literals
import os
from celery import Celery

#set the default Django settings module for the celery program
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
app = Celery('backend')

#using a string here means the worker will not have to pickle the object in windows
#app.config_from_object('django.conf:settings')
app.config_from_object('django.conf:settings', namespace='CELERY')
#app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
#[print(n) for n in apps.get_app_configs()]
#app.autodiscover_tasks(lambda: [n.name for n in apps.get_app_configs()])
app.autodiscover_tasks()
@app.task(bind=True)
def debug_task(self):
    print("Binding?")
    print('Request: {0!r}'.format(self.request))

