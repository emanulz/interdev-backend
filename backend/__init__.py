# #This will make sure the celery app is always imported
# #on Django startup
# from __future__ import absolute_import, unicode_literals

# from .celery import app as celery_app

# __all__ = ('celery_app',)

from __future__ import absolute_import, unicode_literals

# This will make sure the app is always imported when
# Django starts so that shared_task will use this app.
from .celery import app as celery_app  # noqa

__all__ = ['celery_app']