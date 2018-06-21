from django.contrib.auth.decorators import login_required
from django.contrib.auth.decorators import permission_required
from django.shortcuts import render


@login_required
@permission_required('administration.access_administration', login_url='/login')
def adminPage(request):
    return render(request, "admin.html")


@login_required
@permission_required('administration.access_sales', login_url='/login')
def salesPage(request):
    return render(request, "sales.html")


@login_required
@permission_required('administration.access_presales', login_url='/login')
def presalesPage(request):
    return render(request, "seller.html")


@login_required
@permission_required('administration.access_inventories', login_url='/login')
def inventoriesPage(request):
    return render(request, "inventories.html")


@login_required
@permission_required('administration.access_workshop', login_url='/login')
def workshopPage(request):
    return render(request, "workshop.html")
