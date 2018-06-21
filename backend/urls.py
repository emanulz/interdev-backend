from django.conf.urls import url
from django.contrib.auth import views as auth_views
from django.conf import settings
from django.contrib import admin
# from django.urls import path
from django.conf.urls import include
from django.conf.urls.static import static
from apps.profiles.views import profile_get, getUserByCode
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
# from apps.reporting import urls

from apps.administration.views import adminPage, salesPage, presalesPage, inventoriesPage

urlpatterns = [
    # UTILS
    url(r'^jet/', include('jet.urls', 'jet')),  # Django JET URLS
    url(r'^globaladmin/', admin.site.urls),
    url(r'^profile/', profile_get),
    url(r'^getuserbycode/', getUserByCode),

    # APPS
    url(r'^admin/', adminPage, name='admin'),
    url(r'^$', login_required(TemplateView.as_view(template_name='home.html'))),
    url(r'^sales/', salesPage, name='sales'),
    url(r'^seller/', presalesPage, name='presales'),
    url(r'^reports/', login_required(TemplateView.as_view(template_name='reports.html'))),
    url(r'^returns/', login_required(TemplateView.as_view(template_name='returns.html'))),
    url(r'^credits/', login_required(TemplateView.as_view(template_name='credits.html'))),
    url(r'^inventories/', inventoriesPage, name='inventories'),
    url(r'^workshop/', login_required(TemplateView.as_view(template_name='workshop.html'))),
    url(r'^payables/', login_required(TemplateView.as_view(template_name="payables.html"))),
    url(r'^purchases/', login_required(TemplateView.as_view(template_name='purchases.html'))),
    url(r'^reportsExcel/', include('apps.reporting.urls')),

    # LOGIN
    url(r'^login/$', auth_views.LoginView.as_view()),
    url(r'^logout/$', auth_views.LogoutView.as_view()),

    # API
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^api/', include('api.urls')),

    ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
