
class ProdSettings():

    def __str__(self):
        
        rep = "self._DEBUG --> {}\n".format(self._DEBUG )
        rep += "self._ENGINE --> {0}\n".format(self._ENGINE)
        rep += "self._ALLOWED_HOSTS --> {0}\n".format(self._ALLOWED_HOSTS)
        rep += "self._DB_CREDENTIALS --> {0}\n".format(self._DB_CREDENTIALS)
        rep += "self._MAIL_SETTINGS --> {0}\n".format(self._MAIL_SETTINGS)
        rep += "self._SECRET_KEY --> {0}\n".format(self._SECRET_KEY)
        rep += "self._TAX_PAYER_SECRET --> {0}\n".format(self._TAX_PAYER_SECRET)
        rep += "self._EMAIL_HOST --> {0}\n".format(self._EMAIL_HOST)
        rep += "self._EMAIL_PORT --> {0}\n".format(self._EMAIL_PORT)
        rep += "self._EMAIL_HOST_USER --> {0}\n".format(self._EMAIL_HOST_USER)
        rep += "self._EMAIL_HOST_PASSWORD --> {0}\n".format(self._EMAIL_HOST_PASSWORD)
        rep += "self._EMAIL_USE_TLS --> {0}\n".format(self._EMAIL_USE_TLS)
        rep += "self._SERVER_NAME --> {0}\n".format(self._SERVER_NAME)
        rep += "self._CELERY_BROKER_URL --> {0}\n".format(self._CELERY_BROKER_URL)
        rep += "self._CELERY_RESULT_BACKEND --> {0}\n".format(self._CELERY_RESULT_BACKEND)
        return rep

    def __init__(self, settings_file):
        """
        Reads the configuration settings
        """
        self._settings = None
        with open(settings_file, 'r') as f:
            self._settings = f.readlines()
            f.close()

        #get hosts
        self._ENGINE = 'django.db.backends.mysql'
        self._ALLOWED_HOSTS = ['localhost']
        self._DB_CREDENTIALS = {}
        self._raw_db_credentials = []
        self._MAIL_SETTINGS = None

        self._SECRET_KEY = None
        self._TAX_PAYER_SECRET = None

        self._EMAIL_HOST = None
        self._EMAIL_PORT = None
        self._EMAIL_HOST_USER = None
        self._EMAIL_HOST_PASSWORD = None
        self._EMAIL_USE_TLS = None

        self._SERVER_NAME = None
        self._DEBUG = True

        #celery settings
        self._CELERY_BROKER_URL = None
        self._CELERY_RESULT_BACKEND = None

        self._BEAT_OVERSEER_CYCLE = 2
        self._BEAT_REAPER_CYCLE = 2

        #grave digger frecuency in minutes
        self._GRAVE_DIGGER_DELAY = 60
        self._GRAVE_DIGGER_GRAVES = 25

        #action required disposer frequency in minutes
        self._ACTION_DISPOSER_DELAY = 180

        #define the worker email for GDrive
        self._GSERVICE_EMAIL = None
        #define the secret for the GDRIVE Service
        self._GDRIVE_SECRET = None
        #define the account that the service account should impersonate
        self._GIMPERSONATED = "vmora@bruncastorage.space"
        #define the size of the batch to attempt upload
        self._GUPLOAD_BATCH_SIZE = 20
        #define the frequency at wich the uploader will run
        self._GUPLOAD_FREQUENCY = 15

        #control debug messages print
        self._FORCE_PRINT = False

        #CHANNELS SOCKET
        self._CHANNELS_SOCKET = 6379

        #WHO_AM_
        self._WHO_AM_I = "NOT SET"

        #money vouchers auto expiry period
        self._VOUCHERS_VALID_DAYS = -1

        #SIC API settings
        self._SIC_LOCATION = None
        self._SIC_KEY = None

        #CABYS API settings
        self._CABYS_LOCATION = None
        self._CABYS_TOKEN = None


        for line in self._settings:
            if line.startswith("#"):
                continue
            #find first equal on line to do the split
            index_equal = line.find("=")

            setting_name = line[0:index_equal]
            setting_value=line[index_equal+1::]
            
            setting_name = setting_name.strip()
            setting_value = setting_value.strip()

            if setting_name == "ALLOWED_HOSTS":
                hosts = setting_value.split(' ')
                for host in hosts:
                    self._ALLOWED_HOSTS.append(
                        host.strip()
                    )
            elif setting_name == 'WHO_AM_I':
                self._WHO_AM_I = setting_value.strip()
            elif setting_name == 'VOUCHERS_VALID_DAYS':
                self._VOUCHERS_VALID_DAYS = int(setting_value.strip())
            elif setting_name == "BEAT_OVERSEER_CYCLE":
                self._BEAT_OVERSEER_CYCLE = int(setting_value.strip())
            elif setting_name == "BEAT_REAPER_CYCLE":
                self._BEAT_REAPER_CYCLE = int(setting_value.strip())
            elif setting_name == "GUPLOAD_BATCH_SIZE":
                self._GUPLOAD_BATCH_SIZE = int(setting_value.strip())
            elif setting_name == "GUPLOAD_FREQUENCY":
                self._GUPLOAD_FREQUENCY = int(setting_value.strip())
            elif setting_name == "GIMPERSONATED":
                self._GIMPERSONATED = setting_value.strip()
            elif setting_name == "CHANNELS_SOCKET":
                self._CHANNELS_SOCKET = int(setting_value.strip())
            elif setting_name == "FORCE_PRINT":
                self._FORCE_PRINT = 1 == int(setting_value.strip())
            elif setting_name == "GSERVICE_EMAIL":
                self._GSERVICE_EMAIL = setting_value.strip()
            elif setting_name == "GDRIVE_SECRET":
                self._GDRIVE_SECRET = setting_value.strip()
            elif setting_name == "ACTION_DISPOSER_DELAY":
                self._ACTION_DISPOSER_DELAY = int(setting_value.strip())
            elif setting_name == "GRAVE_DIGGER_DELAY":
                self._GRAVE_DIGGER_DELAY = int(setting_value.strip())
            elif setting_name =="GRAVE_DIGGER_GRAVES":
                self._GRAVE_DIGGER_GRAVES = int(setting_value.strip())
            
            elif setting_name == "DB_CRED":
                creds = setting_value.split(' ')
                if len(creds) < 6:
                    raise ValueError("Missing fields in db settings")
                clean_creds = []
                for bit in creds:
                    clean_creds.append(bit.strip())
                self._raw_db_credentials.append(clean_creds)

            elif setting_name == "MAILING":
                vals = setting_value.split(' ')
                if len(vals)<5:
                    raise ValueError("Missing fields in mailing settings")
                
                self._EMAIL_HOST = vals[0].strip()
                self._EMAIL_PORT = int(vals[1].strip())
                self._EMAIL_HOST_USER = vals[2].strip()
                self._EMAIL_HOST_PASSWORD = vals[3].strip()
                self._EMAIL_USE_TLS = bool(vals[4].strip())

            elif setting_name == 'ENGINE':
                self._ENGINE = setting_value.strip()

            elif setting_name == 'SERVER_NAME':
                self._SERVER_NAME = setting_value.strip()
                if self._SERVER_NAME == "PROD_SERVER":
                    self._DEBUG = False

            elif setting_name == 'CELERY_BROKER_URL':
                self._CELERY_BROKER_URL = setting_value.strip()

            elif setting_name == 'CELERY_RESULT_BACKEND':
                self._CELERY_RESULT_BACKEND = setting_value
            elif setting_name == 'SECRET_KEY':
                self._SECRET_KEY = setting_value
            elif setting_name == 'TAX_PAYER_SECRET':
                self._TAX_PAYER_SECRET = setting_value
            elif setting_name == 'SIC_LOCATION':
                self._SIC_LOCATION = setting_value
            elif setting_name == 'SIC_KEY':
                self._SIC_KEY = setting_value
            elif setting_name == 'CABYS_LOCATION':
                self._CABYS_LOCATION = setting_value
            elif setting_name == 'CABYS_TOKEN':
                self._CABYS_TOKEN = setting_value
            else:
                print("Unknown setting, pass")
                pass

                
        #prepare the db credentials
        for db in self._raw_db_credentials:
            db_settings = {
                    'ENGINE': self._ENGINE,
                    'NAME': db[1],
                    'PASSWORD': db[3],
                    'USER': db[2],
                    'HOST': db[4],
                    'PORT': db[5]
                    }

            self._DB_CREDENTIALS[db[0].strip()] = db_settings
        


