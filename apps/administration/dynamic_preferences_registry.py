# blog/dynamic_preferences_registry.py

from dynamic_preferences.types import StringPreference, BooleanPreference
from dynamic_preferences.preferences import Section
from dynamic_preferences.registries import global_preferences_registry

# we create some section objects to link related preferences together

company = Section('company')

installed_apps = Section('installed_apps')

inventory = Section('inventory')

connectivity = Section('connectivity')

@global_preferences_registry.register
class WorkshopAppInstalled(BooleanPreference):
    section = installed_apps
    name = 'WorkshopAppInstalled'
    default = False

@global_preferences_registry.register
class PurchaseAppInstalled(BooleanPreference):
    section = installed_apps
    name = 'PurchaseAppInstalled'
    default = False

@global_preferences_registry.register
class AccountsToPayAppInstalled(BooleanPreference):
    section = installed_apps
    name = 'AccountsToPayAppInstalled'
    default = False


@global_preferences_registry.register
class CompanyName(StringPreference):
    section = company
    name = 'legal_name'
    default = 'Emanuel Zúñiga Infante'


@global_preferences_registry.register
class CompanyComercialName(StringPreference):
    section = company
    name = 'comercial_name'
    default = 'InterDev'


@global_preferences_registry.register
class CompanyIdType(StringPreference):
    section = company
    name = 'id_type'
    default = 'PERSON'


@global_preferences_registry.register
class CompanyId(StringPreference):
    section = company
    name = 'id'
    default = ''


@global_preferences_registry.register
class CompanyLogo(StringPreference):
    section = company
    name = 'logo'
    default = 'logoInterdev.png'


@global_preferences_registry.register
class CompanyLogoWidth(StringPreference):
    section = company
    name = 'logo_width'
    default = '110px'


@global_preferences_registry.register
class CompanyAddress1(StringPreference):
    section = company
    name = 'address1'
    default = '150m Norte de la guardia Rural'


@global_preferences_registry.register
class CompanyAddress2(StringPreference):
    section = company
    name = 'address2'
    default = 'Palmares, Daniel Flores, Pérez Zeledón'


@global_preferences_registry.register
class CompanyCountry(StringPreference):
    section = company
    name = 'country'
    default = 'Costa Rica'


@global_preferences_registry.register
class CompanyProvince(StringPreference):
    section = company
    name = 'province'
    default = 'San José'


@global_preferences_registry.register
class CompanyTelephones(StringPreference):
    section = company
    name = 'telephones'
    default = '8302-1964 / 2772-2914'


@global_preferences_registry.register
class CompanyEmail(StringPreference):
    section = company
    name = 'email'
    default = 'emanuelziga@gmail.com'


@global_preferences_registry.register
class SalesWarehouse(StringPreference):
    section = inventory
    name = 'sales_warehouse'
    default = ''

@global_preferences_registry.register
class WorkshopWarehouse(StringPreference):
    section = inventory
    name = 'workshop_warehouse'
    default = ''
@global_preferences_registry.register
class BlackDeckerWarehouse(StringPreference):
    section = inventory
    name = 'blackdecker_warehouse'
    default = ''


@global_preferences_registry.register
class InternetTestGatewayA(StringPreference):
    section = connectivity
    name = 'internet_test_target'
    #default to the all mighty always there entity
    default = '216.58.192.142'

@global_preferences_registry.register
class HaciendaTestAddress(StringPreference):
    section = connectivity
    name = 'hacienda_test_target'
    #default to the all mighty always there entity
    default = 'api.comprobanteselectronicos.go.cr/recepcion/v1/'

@global_preferences_registry.register
class MothershipBeaconAdress(StringPreference):
    section = connectivity
    name = 'mothership_gateway'
    #address of the Ones-Above-All
    default = 'interdev.cr.com'