# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from profiles.views import checkUserPassword

# Permsions
from profiles.views import checkUserPermission, checkUserPermissions, checkSingleUserPermissions
from profiles.views import assingUserPermission

from credits.views import getClientDebt

# API
from rest_framework import routers
from clients.api.views import ClientViewSet, ClientCategoryViewSet
from products.api.views import (ProductViewSet, ProductDepartmentViewSet, ProductSubDepartmentViewSet, 
    ProductInventoryViewSet, UnitViewSet, RestaurantProdsViewset)
from suppliers.api.views import SupplierViewSet, SupplierCustomViewSet, SupplierSearchViewSet
from profiles.api.views import UserViewSet, PermissionsViewSet, ProfileViewSet
from sales.api.views import SaleViewSet, Cash_AdvanceViewSet
from logs.api.views import LogViewSet
from credits.api.views import Credit_MovementViewSet, Credit_PaymentViewSet, CreditPaymentCreateViewSet
from taxes.api.views import TaxViewSet
#from senders.api.views import SenderViewSet
from addresses.api.views import ProvinceViewSet, CantonViewSet, DistrictViewSet, TownViewSet
from inventories.api.views import Inventory_MovementViewSet, WarehouseViewSet, PhysicalTakeViewSet
from workshop.api.views import Work_OrderViewSet, Work_OrderCreateViewSet, Work_OrderWarantyViewset, Work_OrderWarantyBDViewset, Work_OrderNoRepairViewset
from purchases.api.views import PurchaseViewSet, PurchaseCreateViewSet, PurchaseIncompleteViewSet, PurchaseCompleteViewSet
from dynamic_preferences.users.viewsets import UserPreferencesViewSet
from payables.api.views import Credit_MovementPayableViewSet, Credit_PaymentPayableViewSet, CreditPaymentCreateViewSetPayables
from presales.api.views import PresaleViewSet, PresalePatchViewSet
from sales.api.views import SaleCreateViewSet, SaleViewSetReadOnly, ReturnViewSet
from money_returns.api.views import Money_ReturnViewSet, Credit_VoucherViewSet
from payables_money_returns.api.views import Credit_VoucherViewSetPayable
from utils.searchView import SearchViewSet
from taxpayer.api.views import TaxPayerCreateViewSet,TaxPayerReadOnly, TaxPayerLocalViewset
from importer.api.views import ImporterViewset
from reporting.api.views import ReportDefinition
from restaurant.api.views import TableViewSet, ServiceOrderViewSet

# API COPIED FROM  dynamic_preferences into apps.preferences.api package and modified permissions class
from preferences.api.viewsets import GlobalPreferencesViewSet

from clients.views import createClientQuick

from factura_digital.api.views import (Electronic_TicketViewset, Electronic_TicketCreateViewset, 
    ElectronicDocsReception, Electronic_TicketViewset, Electronic_InvoiceViewset, Electronic_CreditNoteViewset,
    Electronic_DebitNoteViewset, ActionRequieredViewset, ReceivedElectronicDocViewset)

router = routers.DefaultRouter()
router.register(r'products', ProductInventoryViewSet, base_name='products')
router.register(r'productslist', ProductViewSet)
router.register(r'productsrestaurant', RestaurantProdsViewset)
router.register(r'sales', SaleCreateViewSet, base_name='sales')
router.register(r'saleslist', SaleViewSetReadOnly)
router.register(r'clients', ClientViewSet)
router.register(r'clientcategories', ClientCategoryViewSet)
router.register(r'logs', LogViewSet)
router.register(r'cashadvances', Cash_AdvanceViewSet)
router.register(r'productdepartments', ProductDepartmentViewSet)
router.register(r'productsubdepartments', ProductSubDepartmentViewSet)
router.register(r'units', UnitViewSet)
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
router.register(r'provinces', ProvinceViewSet)
router.register(r'cantons', CantonViewSet)
router.register(r'districts', DistrictViewSet)
router.register(r'towns', TownViewSet)
router.register(r'inventorymovementslist', Inventory_MovementViewSet)
router.register(r'warehouses', WarehouseViewSet)
router.register(r'physicaltakes', PhysicalTakeViewSet, base_name='physicaltakes')
router.register(r'listworkorders', Work_OrderViewSet)
router.register(r'listwarrantyworkorders', Work_OrderWarantyViewset)
router.register(r'listwarrantybdworkorders', Work_OrderWarantyBDViewset)
router.register(r'listnrworkorders', Work_OrderNoRepairViewset)
router.register(r'workorders', Work_OrderCreateViewSet, base_name="workorders")
router.register(r'purchase', PurchaseCreateViewSet, base_name="purchases")
router.register(r'purchaselist', PurchaseViewSet)
router.register(r'purchaseincompletelist', PurchaseIncompleteViewSet)
router.register(r'purchasecompletelist', PurchaseCompleteViewSet)
router.register(r'payablescreditpaymentcreate', CreditPaymentCreateViewSetPayables, base_name="payales")
router.register(r'payablescreditmovementlist', Credit_MovementPayableViewSet)
router.register(r'payablescreditpaymentlist', Credit_PaymentPayableViewSet)
router.register(r'presales', PresaleViewSet)
router.register(r'presalespatch', PresalePatchViewSet, base_name='presalespatch')
router.register(r'returns', ReturnViewSet)
router.register(r'creditvoucherslist', Credit_VoucherViewSet)
router.register(r'moneyreturnlist', Money_ReturnViewSet)
router.register(r'payablescreditvoucherslist', Credit_VoucherViewSetPayable)
#register urls related to digital invoicing
router.register(r'facturareception', ElectronicDocsReception, base_name="electronicreception")
router.register(r'electronicticket', Electronic_TicketViewset)
router.register(r'electronicinvoice', Electronic_InvoiceViewset)
router.register(r'electroniccreditnote', Electronic_CreditNoteViewset)
router.register(r'electronicdebitnote', Electronic_DebitNoteViewset)
router.register(r'receivedelectronicdoc', ReceivedElectronicDocViewset)
router.register(r'electronicticketcreate', Electronic_TicketCreateViewset, base_name='electronicticketcreate')
router.register(r'docactionrequired', ActionRequieredViewset)
router.register(r'taxpayercreate', TaxPayerCreateViewSet, base_name='taxpayercreate')
router.register(r'taxpayerreadonly', TaxPayerReadOnly)
router.register(r'taxpayerlocals', TaxPayerLocalViewset)
router.register(r'importer', ImporterViewset, base_name='importer')
#register reporting related routes
router.register(r'reporting', ReportDefinition, base_name='repoting')
#register restaurant related views
router.register(r'restauranttables', TableViewSet)
router.register(r'restaurantserviceorders', ServiceOrderViewSet)


urlpatterns = [

    url(r'^', include(router.urls)),
    url(r'^checkpassword/', checkUserPassword),
    url(r'^checkpermission/', checkUserPermission),
    url(r'^checkpermissions/', checkUserPermissions),
    url(r'^assinguserpermission/', assingUserPermission),
    url(r'^checksingleuserpermissions/', checkSingleUserPermissions),
    url(r'^clientquickcreate/', createClientQuick),
    ]
