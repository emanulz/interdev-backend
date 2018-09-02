
class ProdSettings():

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

        self._EMAIL_HOST = None
        self._EMAIL_PORT = None
        self._EMAIL_HOST_USER = None
        self._EMAIL_HOST_PASSWORD = None
        self._EMAIL_USE_TLS = None

        self._SERVER_NAME = None
        self._DEBUG = True

        for line in self._settings:
            if line.startswith("#"):
                continue
            setting_name, setting_value = line.split('=')
            setting_name = setting_name.strip()
            setting_value = setting_value.strip()

            if setting_name == "ALLOWED_HOSTS":
                hosts = setting_value.split(' ')
                for host in hosts:
                    self._ALLOWED_HOSTS.append(
                        host.strip()
                    )
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
        
