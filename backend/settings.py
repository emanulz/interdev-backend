"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 2.0.4.

For more information on this file, see
https://docs.djangoproject.com/en/2.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/2.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/2.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'pq0v9v3y@4dnny%jgrod5*_%snma=t(q6-h&@sf)+uptk54z82'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

try:
    if os.environ["SERVER_NAME"] == "APP_SERVER":
        DEBUG = False
except Exception as e:
    pass

ALLOWED_HOSTS = ['localhost', '192.168.9.254', '192.168.1.254', '192.168.9.56', '192.168.9.107', '192.168.1.144',
                 'DANTE']


# Application definition

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
    'apps.preferences',
    'apps.broadcaster.apps.BroadcasterConfig',
    'apps.administration.apps.AdministrationConfig',
    'apps.logs.apps.LogsConfig',
    'apps.profiles.apps.ProfilesConfig',
    'apps.clients.apps.ClientsConfig',
    'apps.products.apps.ProductsConfig',
    'apps.suppliers.apps.SuppliersConfig',
    'apps.sales.apps.SalesConfig',
    'apps.credits.apps.CreditsConfig',
    'apps.taxes.apps.TaxesConfig',
    'apps.senders.apps.SendersConfig',
    'apps.addresses.apps.AddressesConfig',
    'apps.inventories.apps.InventoriesConfig',
    'apps.workshop.apps.WorkshopConfig',
    'apps.reporting.apps.ReportingConfig',
    'apps.purchases.apps.PurchasesConfig',
    'apps.payables.apps.PayablesConfig',
    'apps.presales.apps.PresalesConfig',
    'apps.money_returns.apps.MoneyReturnsConfig',
    'apps.payables_money_returns.apps.PayablesMoneyReturnsConfig',
    'apps.consecutives.apps.ConsecutivesConfig',
    'apps.codes.apps.CodesConfig',
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

# Server DB
if not DEBUG:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.mysql',
            'OPTIONS': {
                'read_default_file': '/etc/mysql/my.cnf',
            },
        }
    }


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


#CELERY CONFIGURATION
BROKER_URL = 'redis://localhost:6379'
CELERY_RESULT_BACKEND = 'redis://localhost:6379'
CELERY_ACCEPT_CONTENT = ['application/json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'America/Costa_Rica'