from __future__ import absolute_import
import sys
"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 2.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os
from celery.schedules import crontab
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# delete? BASE_DIR_TEST = os.path.dirname(os.path.dirname(__file__))

PROJECT_ROOT = os.path.dirname(__file__)
# print("THIS --> ", os.path.join(PROJECT_ROOT, '..\\apps'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\core_apps'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\secondary_apps'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\custom_apps'))
# load the library to build the factura xmls
sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\parser_factura_digital'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\printers_integration'))

# UNIX INSERT TO PATH
sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../core_apps'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../secondary_apps'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../custom_apps'))
# load the library to build the factura xmls
sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../parser_factura_digital'))
sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../printers_integration'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'pq0v9v3y@4dnny%jgrod5*_%snma=t(q6-h&@sf)+uptk54z82'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True
TAX_PAYER_SECRET = None
try:
    TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
    print("TAX_PAYER_SECRET_LOADED")
except Exception as e:
    TAX_PAYER_SECRET = '$k0!83_2g^#lw*$r5m86jpb035b-m^imh1u6v1vyf+2p$0n6eg'


try:
    if os.environ["SERVER_NAME"] == "PROD_SERVER":
        DEBUG = False
        TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
except Exception as e:
    pass

# TEST SERVER DEBUG FALSE
try:
    if os.environ["SERVER_NAME"] == "TEST_SERVER":
        DEBUG = False
        TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
except Exception as e:
    pass

ALLOWED_HOSTS = ['localhost', '192.168.9.254', '192.168.1.254', '192.168.9.56', '192.168.9.107', '192.168.1.144',
                 'DANTE', '192.168.9.53']

# Application definition
USE_X_FORWARDED_HOST = True

INSTALLED_APPS = [
    'widget_tweaks',
    'jet',
    'django.contrib.admin',
    'django.contrib.auth',
    'dynamic_preferences',
    'dynamic_preferences.users.apps.UserPreferencesConfig',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'django_filters',
    'webpack_loader',
    'django_cleanup',
    'channels',
    'api',
    'preferences',
    'broadcaster.apps.BroadcasterConfig',
    'administration.apps.AdministrationConfig',
    'logs.apps.LogsConfig',
    'profiles.apps.ProfilesConfig',
    'clients.apps.ClientsConfig',
    'products.apps.ProductsConfig',
    'suppliers.apps.SuppliersConfig',
    'sales.apps.SalesConfig',
    'credits.apps.CreditsConfig',
    'taxes.apps.TaxesConfig',
    'senders.apps.SendersConfig',
    'addresses.apps.AddressesConfig',
    'inventories.apps.InventoriesConfig',
    'utils.apps.UtilsConfig',
    'workshop.apps.WorkshopConfig',

    'reporting.apps.ReportingConfig',
    'purchases.apps.PurchasesConfig',
    'payables.apps.PayablesConfig',
    'presales.apps.PresalesConfig',
    'money_returns.apps.MoneyReturnsConfig',
    'payables_money_returns.apps.PayablesMoneyReturnsConfig',
    'consecutives.apps.ConsecutivesConfig',
    'codes.apps.CodesConfig',
    'factura_digital.apps.FacturaDigitalConfig',
    'taxpayer.apps.TaxpayerConfig',
    'importer.apps.ImporterConfig',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'templates')
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'backend.wsgi.application'
ASGI_APPLICATION = 'backend.routing.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            "hosts": [('127.0.0.1', 6379)],
        },
    },
}

# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases
# Default Emanuel Dev
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
# Try Victor Dev
try:
    if os.environ['DJANGO_BACKEND'] == 'MYSQL':
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.mysql',
                'USER': 'root',
                'PASSWORD': '0688moraB',
                'NAME': 'django_rj',
                'HOST': 'localhost',
                'PORT': '3306',
            }
        }
except KeyError:
    pass
#point to a db based on host name

try:
    print("UBUNTU_TEST_BOX variable --> ", os.environ["UBUNTU_TEST_BOX"])
    print("TARGET_DB --> ", os.environ["TARGET_DB"])
    if os.environ['UBUNTU_TEST_BOX']:
        db_name = os.environ["TARGET_DB"]
        target_db_server =  os.environ["DB_SERVER"]
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.mysql',
                'USER': 'root',
                'PASSWORD': '0688moraB',
                'NAME': db_name,
                'HOST': target_db_server,
                'PORT': '3306',
            }
        }
except KeyError:
    print("NOT FOUND TEST VARIABLES")
    pass

# IF ITS PROD SERVER USE MYSQL
if not DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'OPTIONS': {
                'read_default_file': '/etc/mysql/my.cnf',
            },
        }
    }

# IF ITS TEST SERVER USE SQL LITE
try:
    if os.environ["SERVER_NAME"] == "TEST_SERVER":
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            }
        }
except KeyError:
    pass

print("Final DB connection --> ", DATABASES)
# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/2.0/topics/i18n/

LANGUAGE_CODE = 'es-CR'

TIME_ZONE = 'America/Costa_Rica'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOGIN_URL = '/login/'
LOGOUT_REDIRECT_URL = '/login/'
LOGIN_REDIRECT_URL = '/'

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.DjangoModelPermissions',
        ),
    'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 50
    }


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/2.0/howto/static-files/

STATIC_URL = '/static/'

if DEBUG:
    STATICFILES_DIRS = [
        os.path.join(BASE_DIR, 'static'),
        ]

if not DEBUG:
    STATIC_ROOT = os.path.join(BASE_DIR, 'static')

MEDIA_URL = '/media/'
MEDIA_ROOT = (os.path.join(BASE_DIR, 'media'))

# WEBPACK LOADER
WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': 'bundles/production/',  # end with slash
        'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-production.json'),
        }
    }

if DEBUG:
    WEBPACK_LOADER = {
        'DEFAULT': {
            'BUNDLE_DIR_NAME': 'bundles/local/',  # end with slash
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-local.json'),
            }
        }

# CELERY CONFIGURATION
CELERY_BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'America/Costa_Rica'
CELERY_TASK_SOFT_TIME_LIMIT = 180  # avoids a task hanging indefinitively blocking the worker
CELERY_BEAT_SCHEDULE = {
    'create_invvalue_report_task': {
        'task': 'apps.reporting.tasks.create_invvalue_report_task',
        'schedule': crontab(hour=7, minute=0),
        'args': ('s', False,),
    },

    'task-number-two': {
        'task': 'apps.sales.tasks.task_number_one',
        'schedule': crontab(minute='*/120'),
    },
}

#MAILING CONFIGURATION
if DEBUG:
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_PORT = 587
    EMAIL_HOST_USER = 'devtestsvm@gmail.com'
    EMAIL_HOST_PASSWORD = 'InterdevTestEmail'
    EMAIL_USE_TLS = True
