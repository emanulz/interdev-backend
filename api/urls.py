# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from apps.profiles.views import checkUserPassword

# Permsions
from apps.profiles.views import checkUserPermission, checkUserPermissions, checkSingleUserPermissions
from apps.profiles.views import assingUserPermission

from apps.credits.views import getClientDebt

# API
from rest_framework import routers
from apps.clients.api.views import ClientViewSet
from apps.products.api.views import ProductViewSet, ProductDepartmentViewSet, ProductSubDepartmentViewSet
from apps.suppliers.api.views import SupplierViewSet
from apps.profiles.api.views import ProfileViewSet
from apps.profiles.api.views import UserViewSet, PermissionsViewSet
from apps.sales.api.views import SaleViewSet
from apps.logs.api.views import LogViewSet
from apps.credits.api.views import Credit_MovementViewSet, Credit_PaymentViewSet
from apps.taxes.api.views import TaxViewSet
from apps.senders.api.views import SenderViewSet
from apps.addresses.api.views import ProvinceViewSet, CantonViewSet, DistrictViewSet, TownViewSet
from apps.inventories.api.views import Inventory_MovementViewSet, WarehouseViewSet
from apps.workshop.api.views import Work_OrderViewSet, LaborViewSet, Parts_RequestViewSet

from dynamic_preferences.users.viewsets import UserPreferencesViewSet

# API COPIED FROM  dynamic_preferences into apps.preferences.api package and modified permissions class
from apps.preferences.api.viewsets import GlobalPreferencesViewSet


router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'logs', LogViewSet)
router.register(r'products', ProductViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'productdepartments', ProductDepartmentViewSet)
router.register(r'productsubdepartments', ProductSubDepartmentViewSet)
router.register(r'suppliers', SupplierViewSet)
router.register(r'userprofiles', ProfileViewSet)
router.register(r'users', UserViewSet)
router.register(r'permissions', PermissionsViewSet)
router.register(r'userprefs', UserPreferencesViewSet, base_name='userprefs')
router.register(r'globalprefs', GlobalPreferencesViewSet, base_name='globalprefs')
router.register(r'creditmovements', Credit_MovementViewSet)
router.register(r'creditpayments', Credit_PaymentViewSet)
router.register(r'taxes', TaxViewSet)
router.register(r'senders', SenderViewSet)
router.register(r'provinces', ProvinceViewSet)
router.register(r'cantons', CantonViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'towns', TownViewSet)
router.register(r'inventorymovements', Inventory_MovementViewSet)
router.register(r'warehouses', WarehouseViewSet)
router.register(r'workorders', Work_OrderViewSet)
router.register(r'labor', LaborViewSet)
router.register(r'partsrequest', Parts_RequestViewSet)



urlpatterns = [

    url(r'^', include(router.urls)),
    url(r'^checkpassword/', checkUserPassword),
    url(r'^checkpermission/', checkUserPermission),
    url(r'^checkpermissions/', checkUserPermissions),
    url(r'^assinguserpermission/', assingUserPermission),
    url(r'^checksingleuserpermissions/', checkSingleUserPermissions),
    url(r'^getclientdebt/', getClientDebt),
    ]
