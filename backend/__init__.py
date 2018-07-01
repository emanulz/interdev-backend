#This will make sure the celery app is always imported
#on Django startup
from .celery import app as celery_app