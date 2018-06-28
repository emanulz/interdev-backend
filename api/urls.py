# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from apps.profiles.views import checkUserPassword

# Permsions
from apps.profiles.views import checkUserPermission, checkUserPermissions, checkSingleUserPermissions
from apps.profiles.views import assingUserPermission

from apps.credits.views import getClientDebt

# API
from rest_framework import routers
from apps.clients.api.views import ClientViewSet, ClientCategoryViewSet
from apps.products.api.views import ProductViewSet, ProductDepartmentViewSet, ProductSubDepartmentViewSet, ProductInventoryViewSet
from apps.suppliers.api.views import SupplierViewSet, SupplierCustomViewSet, SupplierSearchViewSet
from apps.profiles.api.views import ProfileViewSet
from apps.profiles.api.views import UserViewSet, PermissionsViewSet
from apps.sales.api.views import SaleViewSet, Cash_AdvanceViewSet
from apps.logs.api.views import LogViewSet
from apps.credits.api.views import Credit_MovementViewSet, Credit_PaymentViewSet, CreditPaymentCreateViewSet
from apps.taxes.api.views import TaxViewSet
from apps.senders.api.views import SenderViewSet
from apps.addresses.api.views import ProvinceViewSet, CantonViewSet, DistrictViewSet, TownViewSet
from apps.inventories.api.views import Inventory_MovementViewSet, WarehouseViewSet
from apps.workshop.api.views import Work_OrderViewSet, Work_OrderCreateViewSet, Work_OrderWarantyViewset, Work_OrderWarantyBDViewset, Work_OrderNoRepairViewset
from apps.purchases.api.views import PurchaseViewSet, PurchaseCreateViewSet
from dynamic_preferences.users.viewsets import UserPreferencesViewSet
from apps.payables.api.views import Credit_MovementPayableViewSet, Credit_PaymentPayableViewSet, CreditPaymentCreateViewSetPayables
from apps.presales.api.views import PresaleViewSet, PresalePatchViewSet
from apps.sales.api.views import SaleCreateViewSet, SaleViewSetReadOnly
from apps.money_returns.api.views import Money_ReturnViewSet, Credit_VoucherViewSet
from apps.payables_money_returns.api.views import Credit_VoucherViewSetPayable
from apps.utils.searchView import SearchViewSet

# API COPIED FROM  dynamic_preferences into apps.preferences.api package and modified permissions class
from apps.preferences.api.viewsets import GlobalPreferencesViewSet

from apps.clients.views import createClientQuick


router = routers.DefaultRouter()
router.register(r'products', ProductInventoryViewSet, base_name='products')
router.register(r'productslist', ProductViewSet)
router.register(r'sales', SaleCreateViewSet, base_name='sales')
router.register(r'saleslist', SaleViewSetReadOnly)
router.register(r'clients', ClientViewSet)
router.register(r'clientcategories', ClientCategoryViewSet)
router.register(r'logs', LogViewSet)
router.register(r'cashadvances', Cash_AdvanceViewSet)
router.register(r'productdepartments', ProductDepartmentViewSet)
router.register(r'productsubdepartments', ProductSubDepartmentViewSet)
router.register(r'suppliers', SupplierViewSet)
router.register(r'supplierscustom', SupplierCustomViewSet, base_name='supplierscustom')
router.register(r'search', SearchViewSet, base_name='search')
router.register(r'userprofiles', ProfileViewSet)
router.register(r'users', UserViewSet)
router.register(r'permissions', PermissionsViewSet)
router.register(r'userprefs', UserPreferencesViewSet, base_name='userprefs')
router.register(r'globalprefs', GlobalPreferencesViewSet, base_name='globalprefs')
router.register(r'creditpaymentscreate', CreditPaymentCreateViewSet, base_name='credits')
router.register(r'creditmovementslist', Credit_MovementViewSet, base_name='creditmovementslist')
router.register(r'creditpaymentslist', Credit_PaymentViewSet, base_name='creditpaymentslist')
router.register(r'taxes', TaxViewSet)
router.register(r'senders', SenderViewSet)
router.register(r'provinces', ProvinceViewSet)
router.register(r'cantons', CantonViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'towns', TownViewSet)
router.register(r'inventorymovementslist', Inventory_MovementViewSet)
router.register(r'warehouses', WarehouseViewSet)
router.register(r'listworkorders', Work_OrderViewSet)
router.register(r'listwarrantyworkorders', Work_OrderWarantyViewset)
router.register(r'listwarrantybdworkorders', Work_OrderWarantyBDViewset)
router.register(r'listnrworkorders', Work_OrderNoRepairViewset)
router.register(r'workorders', Work_OrderCreateViewSet, base_name="workorders")
router.register(r'purchase', PurchaseCreateViewSet, base_name="purchases")
router.register(r'purchaselist', PurchaseViewSet)
router.register(r'payablescreditpaymentcreate', CreditPaymentCreateViewSetPayables, base_name="payales")
router.register(r'payablescreditmovementlist', Credit_MovementPayableViewSet)
router.register(r'payablescreditpaymentlist', Credit_PaymentPayableViewSet)
router.register(r'presales', PresaleViewSet)
router.register(r'presalespatch', PresalePatchViewSet, base_name='presalespatch')
router.register(r'creditvoucherslist', Credit_VoucherViewSet)
router.register(r'moneyreturnlist', Money_ReturnViewSet)
router.register(r'payablescreditvoucherslist', Credit_VoucherViewSetPayable)


urlpatterns = [

    url(r'^', include(router.urls)),
    url(r'^checkpassword/', checkUserPassword),
    url(r'^checkpermission/', checkUserPermission),
    url(r'^checkpermissions/', checkUserPermissions),
    url(r'^assinguserpermission/', assingUserPermission),
    url(r'^checksingleuserpermissions/', checkSingleUserPermissions),
    url(r'^clientquickcreate/', createClientQuick),
    ]
