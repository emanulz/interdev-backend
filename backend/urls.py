from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.contrib import admin
# from django.urls import path
from django.conf.urls import include
from django.conf.urls.static import static
from profiles.views import profile_get, getUserByCode, isPasswordValid
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
# from apps.reporting import urls

from administration.views import adminPage, salesPage, presalesPage, inventoriesPage, workshopPage, restaurantPage, creditsPage, purchasesPage, payablesPage, returnsPage, reportsPage

urlpatterns = [
    # UTILS
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^globaladmin/', admin.site.urls),
    url(r'^profile/', profile_get),
    url(r'^getuserbycode/', getUserByCode),
    url(r'^checkpassword/', isPasswordValid),

    # APPS
    url(r'^admin/', adminPage, name='admin'),
    url(r'^$', login_required(TemplateView.as_view(template_name='home.html'))),
    url(r'^sales/', salesPage, name='sales'),
    url(r'^seller/', presalesPage, name='presales'),
    url(r'^restaurant/', restaurantPage, name='restaurant'),
    url(r'^reports/', reportsPage, name='reports'),
    url(r'^returns/', returnsPage, name='returns'),
    url(r'^credits/', creditsPage, name='credits'),
    url(r'^inventories/', inventoriesPage, name='inventories'),
    url(r'^workshop/', workshopPage, name='workshop'),
    url(r'^payables/', payablesPage, name='payables'),
    url(r'^purchases/', purchasesPage, name='purchases'),
    url(r'^reportsExcel/', include('reporting.urls')),

    # LOGIN
    url(r'^login/$', auth_views.LoginView.as_view()),
    url(r'^logout/$', auth_views.LogoutView.as_view()),

    # API
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/', include('api.urls')),

    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
