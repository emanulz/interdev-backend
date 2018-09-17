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
from .settings_reader import ProdSettings



# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
# delete? BASE_DIR_TEST = os.path.dirname(os.path.dirname(__file__))

PROJECT_ROOT = os.path.dirname(__file__)
if os.sys.platform == 'win32':
# print("THIS --> ", os.path.join(PROJECT_ROOT, '..\\apps'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\core_apps'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\secondary_apps'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\custom_apps'))
    # load the library to build the factura xmls
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\parser_factura_digital'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\printers_integration'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '..\\..\\pdf_maker'))
else:
    # UNIX INSERT TO PATH
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../core_apps'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../secondary_apps'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../custom_apps'))
    # load the library to build the factura xmls
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../parser_factura_digital'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../printers_integration'))
    sys.path.insert(0, os.path.join(PROJECT_ROOT, '../../pdf_maker'))

#load settings to run the system
file_loc = os.path.join(PROJECT_ROOT, 'project_settings.prod')
interdev_sett = ProdSettings(file_loc)
print(interdev_sett)

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'pq0v9v3y@4dnny%jgrod5*_%snma=t(q6-h&@sf)+uptk54z82'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = interdev_sett._DEBUG

#print("DB settings --> ", interdev_sett._DB_CREDENTIALS)
#print("DB hosts --> ", interdev_sett._ALLOWED_HOSTS)

TAX_PAYER_SECRET = None
try:
    TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
except Exception as e:
    TAX_PAYER_SECRET = '$k0!83_2g^#lw*$r5m86jpb035b-m^imh1u6v1vyf+2p$0n6eg'

# CHECK IF SERVER IS PROD, AND IF SERVER_SECRET EXISTS ASSIGNS IT TO SECRET_KEY
try:
    if os.environ["SERVER_NAME"] == "PROD_SERVER":
        DEBUG = False
        TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
except Exception as e:
    pass

# CHECK IF SERVER IS PROD, AND IF SERVER_SECRET EXISTS ASSIGNS IT TO SECRET_KEY
try:
    if os.environ["SERVER_NAME"] == "PROD_SERVER":
        if os.environ["SERVER_SECRET"]:
            SECRET_KEY = os.environ["SERVER_SECRET"]
except Exception as e:
    pass


# TEST SERVER DEBUG FALSE
try:
    if os.environ["SERVER_NAME"] == "TEST_SERVER":
        DEBUG = False
        TAX_PAYER_SECRET = os.environ('TAX_PAYER_SECRET')
except Exception as e:
    pass
ALLOWED_HOSTS = []
if DEBUG:
    ALLOWED_HOSTS = ['localhost', '192.168.9.254', '192.168.1.254', '192.168.9.56', '192.168.9.107', '192.168.1.144',
                 'DANTE', '192.168.9.53', 'app.fudesemillas.net', '162.243.165.124', '192.168.2.254']
else:
    ALLOWED_HOSTS = interdev_sett._ALLOWED_HOSTS    
        

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
    'restaurant.apps.RestaurantConfig',
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
        #"ROUTING": "factura_digital.routing.channel_routing",
    },
}


# Database
# https://docs.djangoproject.com/en/2.0/ref/settings/#databases
# Default Emanuel Dev
# DATABASES = {
#     'default': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
#     },
#     'logs_db': {
#         'ENGINE': 'django.db.backends.sqlite3',
#         'NAME': os.path.join(BASE_DIR, 'logs_db.sqlite3'),
#     }
# }
# Default Emanuel Dev
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'USER': 'root',
        'PASSWORD': '',
        'NAME': 'interdev',
        'HOST': '127.0.0.1',
        'PORT': '3306',
    },
    'logs_db': {
        'ENGINE': 'django.db.backends.mysql',
        'USER': 'root',
        'PASSWORD': '',
        'NAME': 'interdev_logs',
        'HOST': '127.0.0.1',
        'PORT': '3306',
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
            },
            'logs_db': {
                'ENGINE': 'django.db.backends.mysql',
                'USER': 'root',
                'PASSWORD': '0688moraB',
                'NAME': 'django_rj_logs',
                'HOST': 'localhost',
                'PORT': '3306',
            }
        }
except KeyError:
    pass
#point to a db based on host name

try:
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
            },
            'logs_db': {
                'ENGINE': 'django.db.backends.mysql',
                'USER': 'root',
                'PASSWORD': '0688moraB',
                'NAME': db_name,
                'HOST': target_db_server + '_logs',
                'PORT': '3306',
            }
        }
except KeyError:
    pass

# IF ITS PROD SERVER USE MYSQL
if not DEBUG:
    DATABASES = interdev_sett._DB_CREDENTIALS
    # DATABASES = {
    #     'default': {
    #         'ENGINE': 'django.db.backends.mysql',
    #         'USER': 'interdevdbuser',
    #         'PASSWORD': 'Nodelez0105$$',
    #         'NAME': 'interdev',
    #         'HOST': 'localhost',
    #         'PORT': '3306',
    #     },
    #     'logs_db':{
    #         'ENGINE': 'django.db.backends.mysql',
    #         'USER': 'interdevdbuser',
    #         'PASSWORD': 'Nodelez0105$$',
    #         'NAME': 'interdev_logs',
    #         'HOST': 'localhost',
    #         'PORT': '3306',
    #     }
    #}

# IF ITS TEST SERVER USE SQL LITE
try:
    if os.environ["SERVER_NAME"] == "TEST_SERVER":
        DATABASES = {
            'default': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
            },
            'logs_db': {
                'ENGINE': 'django.db.backends.sqlite3',
                'NAME': os.path.join(BASE_DIR, 'db.sqlite3')
            }
        }
except KeyError:
    pass

# Password validation
# https://docs.djangoproject.com/en/2.0/ref/settings/#auth-password-validators

DATABASE_ROUTERS = ['backend.db_router.SplitData_LogsRouter']

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

DEFAULT_RENDERER_CLASSES = (
    'rest_framework.renderers.JSONRenderer',
)

if DEBUG:
    DEFAULT_RENDERER_CLASSES = DEFAULT_RENDERER_CLASSES + (
        'rest_framework.renderers.BrowsableAPIRenderer',
    )

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.DjangoModelPermissions',
        ),
    'DEFAULT_FILTER_BACKENDS': ('django_filters.rest_framework.DjangoFilterBackend',),
    'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.LimitOffsetPagination',
    'PAGE_SIZE': 50,
    'DEFAULT_RENDERER_CLASSES': (DEFAULT_RENDERER_CLASSES)
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

beat_overseer_cycle = 1
beat_reaper_cycle = 1
CELERY_BEAT_SCHEDULE = {

    'the-overseer': {
        'task': 'factura_digital.the_overseer_tasks.TheOneAboveAll',
        'schedule': crontab(minute='*/{}'.format(beat_overseer_cycle)),
        'options': {
            'expires': int(beat_overseer_cycle*65)
        }
    },
    'the-reaper': {
        'task': 'factura_digital.the_overseer_tasks.ReaperOfDocs',
        'schedule': crontab(minute='*/{}'.format(beat_reaper_cycle)),
        'options': {
            'expires': int(beat_reaper_cycle*65)
        }
    }
}

#MAILING CONFIGURATION

EMAIL_HOST = interdev_sett._EMAIL_HOST
EMAIL_PORT = interdev_sett._EMAIL_PORT
EMAIL_HOST_USER = interdev_sett._EMAIL_HOST_USER
EMAIL_HOST_PASSWORD = interdev_sett._EMAIL_HOST_PASSWORD
EMAIL_USE_TLS = interdev_sett._EMAIL_USE_TLS

if DEBUG:
    EMAIL_HOST = 'smtp.gmail.com'
    EMAIL_PORT = 587
    EMAIL_HOST_USER = 'devtestsvm@gmail.com'
    EMAIL_HOST_PASSWORD = 'InterdevTestEmail'
    EMAIL_USE_TLS = True
