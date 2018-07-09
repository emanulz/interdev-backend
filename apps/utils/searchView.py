from rest_framework import viewsets
from apps.suppliers.models import Supplier
from apps.suppliers.api.serializers import SupplierSerializer
from apps.purchases.models import Purchase
from apps.purchases.api.serializers import PurchaseSerializer
from apps.products.models import Product
from apps.products.api.serializers import ProductSerializer
from apps.clients.models import Client
from apps.clients.api.serializers import ClientSerializer
from workshop.models import Work_Order
from workshop.api.serializers import Work_OrderSerializer
from apps.sales.models import Sale, Return
from apps.sales.api.serializers import SaleSerializer, ReturnSerializer

from rest_framework.decorators import list_route
from rest_framework.response import Response
from rest_framework import status
from decimal import Decimal
from itertools import chain
from django.db import connection

SUPPORTED_MODELS = ('Supplier', 'Purchase', 'Product', 'Client', 'WorkOrder', 'Sale', 'Return')
MAX_SEARCH_CLUSTERS = 6
# define the special characters in the query language
WILDCARD_CHARS = ['=', '&', '|']
CUSTOM_FILTER_CHARS = ['$', '!']
searchable_fields = {
    'supplier': ['id', 'code', 'name', 'id_num', 'id_type', 'address', 'phone_number', 'cellphone_number', 'agent_name', 
                'agent_last_name', 'email', 'agent_phone_number', 'agent_email', 'observations', 'user'],

    'product': ['description', 'code', 'short_description', 'department', 'subdepartment',
                'barcode', 'internal_barcode', 'supplier_code', 'model', 'part_number', 'brand_code',
                'inventory_enabled', 'on_sale', 'generic', 'observations', 'user'],
    'purchase': ['user', 'consecutive', 'supplier', 'supplier_id', 'warehouse_id', 'warehouse', 'purchase_type',
                'pay_types', 'invoice_number', 'credit_days'],
    'client': ['user', 'id', 'code', 'name', 'last_name', 'id_num', 'email', 'phone_number', 'cellphone_number',
                'email', 'client_type', 'observations'],

    'workorder': ['id', 'consecutive', 'is_closed', 'paid', 'receiving_employee', 'client', 'client_id', 'article_type',
                  'article_brand', 'article_model', 'article_serial', 'article_color', 'article_data', 'malfunction_details',
                  'observations_list', 'is_warranty', 'warranty_number_bd', 'warranty_supplier_name', 'warranty_invoice_number',
                  'warranty_reference', 'warranty_reported_to_bd'],
    'sale': ['id', 'consecutive', 'client', 'client_id', 'pay_types', 'pay', 'created'],
    'return': ['id', 'consecutive', 'client', 'client_id', 'created']
}

default_search_field = {
    'supplier': 'name',
    'product': 'description',
    'purchase': 'supplier',
    'client': 'name',
    'workorder': 'client',
    'sale': 'client',
    'return': 'client'
}

code_search_fields = {
    'supplier': ['id', 'code'],
    'product': ['code', 'internal_barcode', 'barcode'],
    'purchase': ['id', 'consecutive'],
    'sale': ['id', 'consecutive'],
    'return': ['id', 'consecutive'],
    'client': ['id', 'code'],
    'workorder': ['consecutive', 'article_model', 'warranty_number_bd', 'warranty_invoice_number']
}

smart_search_fields = {
    'supplier': ['name', 'code', 'agent_name', 'agent_last_name'],
    'product': ['supplier_code', 'part_number', 'brand_code'],
    'purchase': ['consecutive', 'supplier', 'invoice_number'],
    'sale': ['pay', 'pay_types'],
    'client': ['name', 'last_name', 'id_num', 'phone_number', 'cellphone_number'],
    'workorder': ['client', 'article_type', 'article_brand']
}


class SearchViewSet(viewsets.ViewSet):
    queryset = Product.objects.all()

    @list_route(methods=('post',))
    def search(self, request, *args, **kwargs):
        #print('Global Model Search Entry')
        data = request.data
        #print(data)
        #set the correct view set based on the request model
        #try:
        if(data['model'] not in SUPPORTED_MODELS):
            target_model = data['model']
        else:
            return Response(data="The parameter model was not sent.", status=status.HTTP_400_BAD_REQUEST)

        max_results = 5
        try:
            max_results = int(data['max_results'])
            if max_results > 50:
                max_results = 50
        except (KeyError, ValueError):
            pass # use default limit
        
        except ValueError:
            return Response(data="Max results parameter must be an integer and was: {}.".format(data['max_results']), 
                status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(data="Exception processing search: {}".format(str(e)), status=status.HTTP_400_BAD_REQUEST)

        if target_model == "product":
            queryset = Product.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data= ProductSerializer(search_result, many=True).data, status=status.HTTP_200_OK )
        elif target_model =="supplier":
            queryset = Supplier.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data= SupplierSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        elif target_model == 'purchase':
            queryset = Purchase.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data= PurchaseSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        elif target_model == 'client':
            queryset = Client.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data= ClientSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        elif target_model == 'workorder':
            queryset = Work_Order.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data=Work_OrderSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        elif target_model == 'sale':
            queryset = Sale.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data=SaleSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        elif target_model == 'return':
            queryset = Return.objects.all()
            search_result = general_search(queryset, max_results, data)
            return Response(data=ReturnSerializer(search_result, many=True).data, status=status.HTTP_200_OK)
        else:
            return Response(data="Search not supported on model : {}.".format(target_model),
                            status=status.HTTP_400_BAD_REQUEST)
        return Response(data="YAY, model not supported :s!", status=status.HTTP_200_OK)
        #except ValueError as e: 
            #print(e)
            #return Response(data='Dang!!', status=status.HTTP_400_BAD_REQUEST)


def process_OR_cluster(current_matches, cluster, needed_matches, query_set, model):

    if needed_matches == 0:
        return current_matches

    #check if this cluster has any internal or clusters
    if '|' in cluster:
        print('has subclusters')
        target_field, filter_instruction = cluster.split('=')
        built_sub_clusters = []
        filter_ors = filter_instruction.split('|')
        for part in filter_ors:
            built_sub_clusters.append('{}={}'.format(target_field, part))
        for sub in built_sub_clusters:
            results = process_OR_cluster(current_matches, sub, needed_matches, query_set, model)
            if results == None:
                continue
            needed_matches -= len(results)
            if current_matches == None:
                current_matches = results
            else:
                current_matches = current_matches | results
            if needed_matches <= 0:
                return results

    #check if an equal was sent
    if '=' in cluster: #the target field to look agains was sent
        target_field, filter_instruction = cluster.split('=')
        #check if the field is in the valid search targets
        if not target_field in searchable_fields[model]:
            raise ValueError('{} no es un campo de búsqueda válido.'.format(target_field))
        #convert the filter instruction into a combination of filter and Q's
        and_conditions = filter_instruction.split('&')
        result = query_set
        filter_kwarg = {}
        for cond in and_conditions:
            result = result.filter()
            #target_search_field = target_field + '__icontains="{}"'.format(cond)
            #print('Filtering by this ' + target_search_field)
            filter_kwarg['{}__icontains'.format(target_field)] = cond
            result = result.filter(**filter_kwarg)
        result.only('description', 'id')
        result = result[:needed_matches]
        if current_matches == None:
            return result
        else:
            return current_matches | result
            

def general_search(queryset, max_results, kwargs):
       
    search_string = kwargs['search_key']
    if len(search_string) == 0:
        raise ValueError('No search key was provided')
    #check if it is a custom search by looking for the custom chars
    #when custom, it has to have only the custom char
    contains_smart_char = '$' in search_string
    contains_code_char = '!' in search_string
    contains_target_props = '=' in search_string
    contains_instructions = False
    for wild in WILDCARD_CHARS:
        if wild in search_string:
            contains_instructions = True
            break 
    if (contains_smart_char or contains_code_char) and contains_instructions:
        raise ValueError('No se pueden combinar búsquedas personalizadas con condicionales de búsqueda')

    if contains_smart_char and contains_code_char:
        raise ValueError('Solo se puede emmplear un carácter de búsqueda personalizada simultaneamente')

    #perform a custom search if that is the case
    if contains_code_char:
        print('performing code search')
        #delete the code char to leave the target search string
        clean_search_string = search_string.replace('!', '')
        #check if exact matches can be found
        # for code_type in code_search_fields[kwargs['model']]:
        #     query = 'SELECT * FROM {} WHERE {} LIKE {}'.format(find_table_name(kwargs['model']), code_type, clean_search_string)
        #     print(query)
        #     result = queryset.raw(query)
        #     for res in result:
        #         return result
        # print('No exact match found')
        #prepare the like general search on all fields
        like_code_string= build_code_like_search(clean_search_string, kwargs['model'])
        like_code_query =  build_search_query(queryset, kwargs['model'], like_code_string, max_results, use_like_regex=False)
        results = queryset.raw(like_code_query)
        return results
    
    if contains_smart_char:
        print('performing smart search')
        clean_search_string = search_string.replace('$', '')
        smart_like_string = build_smart_like_search(clean_search_string, kwargs['model'])
        smart_like_query = build_search_query(queryset, kwargs['model'], smart_like_string, max_results)
        results = queryset.raw(smart_like_query)
        return results
    
    if not contains_target_props:
        print('Do default search')
        #search_request = build_custom_search_request(search_string, 'default', kwargs['model'])
        search_request = '{}={}'.format(default_search_field[kwargs['model']], search_string)
        search_query_set = build_search_query(queryset, kwargs['model'], search_request, max_results)
        results = queryset.raw(search_query_set)
        return results

    #process a custom search query with AND OR and CLUSTERS
    target_query = build_search_query(queryset, kwargs['model'], search_string, max_results)
    #do the raw search
    results = queryset.raw(target_query)
    return results

def build_smart_like_search(value, model):
    result = ''
    for field in smart_search_fields[model]:
        result += '{}={} '.format(field, value)
    return result.strip()

def build_code_like_search(value, model):
    result = ''
    for field in code_search_fields[model]:
        result += '{}={} '.format(field, value)
    print('Code like search query')
    print(result)
    return result.strip()

def build_custom_search_request(raw_string, custom_type, model):
    print('Raw search string')
    print(raw_string)
    if custom_type == '$':
        print('Building smart request')
    elif custom_type == '!':
        print('Building code request')
    elif custom_type == 'default':
        print('Building default request')
        return '{}={}'.format(default_search_field[model], raw_string)
    else:
        raise ValueError('Unsuported custom search char')



def search_products(queryset, max_results, kwargs):
    #print('Product search')
       
    search_string = kwargs['search_key']
    if len(search_string) == 0:
        raise ValueError('No search key was provided')
    #if the search does not contain & or | then match exact codes, if not exact match happens
    clusters = search_string.split(' ')
    #check if the
    contains_instructions = False
    for wild in WILDCARD_CHARS:
        if wild in clusters[0]:
            contains_instructions = True
            break 



    target_query = build_search_query(queryset, kwargs['model'], search_string, 10)
    #do the raw search
    products = queryset.raw(target_query)
    return products

def build_search_query(queryset, model, search_string, max_hits, fetch_fields='*', use_like_regex = True):
    #clusters work like an OR within each other
    clusters = search_string.split(' ')
    target_table = find_table_name(model)
    target_fields = fetch_fields
    if fetch_fields != '*':
        target_fields = build_fetch_fields(fetch_fields)
    #build WHERE CLAUSE
    where_clause = build_where_clause(model, clusters, use_like_regex)
    query_string = 'SELECT {} FROM {} WHERE {} LIMIT {}'.format(fetch_fields, target_table, where_clause, max_hits)
    print(query_string)
    return query_string

def build_where_clause(model, clusters, use_like_regex):
    where_clause = ''
    if len(clusters) > 1:
        where_clause += '('
    total_clusters = 0
    for cluster in clusters:
        cluster_res = build_cluster_filter(cluster, model, use_like_regex)
        if cluster_res == 'Invalid':
            continue # ignore the cluster
        where_clause += '{} OR '.format(cluster_res)
        #make sure not too many search  clusters are procesed as they will make the search to broad
        #or cause performance issues
        total_clusters += 1
        if total_clusters >= MAX_SEARCH_CLUSTERS:
            break
    where_clause = where_clause[:-3]

    if len(clusters) > 1:
        where_clause += ')'

    if where_clause == '' or where_clause == '()':
        raise ValueError('All search clusters where invalid')
    return where_clause

def build_cluster_filter(cluster, model, use_like_regex):
    inner_stem = '{} LIKE "%%{}%%" AND '
    if not use_like_regex:
        inner_stem = '{} LIKE "{}" AND '
    #check if a field was sent in the cluster
    target_field = None
    query = None

    # if '>' in cluster:
    #     target_field, query = cluster.split('>')
    #     if target_field not in searchable_fields[model]:
    #         return 'Invalid'
    if '=' in cluster:
        target_field, query = cluster.split('=')
        if target_field not in searchable_fields[model]:
            return 'Invalid'
        
    else:
        target_field = default_search_field[model]
        query = cluster
    ORS = query.split('|')
    parts = []
    for _or in ORS:
        ANDS = _or.split('&')
        inner_part = ''
        for _and in ANDS:
            inner_part += (inner_stem.format(target_field, _and))
        inner_part = inner_part[:-5]
        parts.append('({})'.format(inner_part))
    final_cluster_filter = '('
    stem = '{}'
    stem_changed = False
    for part in parts:
        final_cluster_filter += stem.format(part)
        if not stem_changed:
            stem_changed = True
            stem = ' OR {}'
    final_cluster_filter += ')'
    return final_cluster_filter


def build_fetch_fields(fetch_fields):
    
    fields_string = ''
    if len(fetch_fields) == 1:
        return fetch_fields[0]

    for field in fetch_fields:
        fields_string += ('{}, '.format(field))
    return fields_string.strip()[:-1]

def smart_supplier_search(queryset, max_results, kwargs):
    print('Smart search')
    search_string = kwargs['search_key']
    if len(search_string) == 0:
        raise ValueError('No search key was provided')
    #if the search does not contain & or | then match exact codes, if not exact match happens
    clusters = search_string.split(' ')
    contains_instructions =  '&' in clusters[0] or '|' in clusters[0] or '=' in clusters[0]
   
    if len(clusters) == 1 and not contains_instructions:
        #try a simple search without user &  |
        #first try matching exact code
        needed_hits = max_results
        all_results = None
        suppliers = queryset.filter(code__iexact=clusters[0])
        if len(suppliers) == 1:
            return suppliers

        suppliers_code_contain = queryset.filter(code__icontains=split_OR[0])[:needed_hits]
        all_results = suppliers_code_contain
        needed_hits -= len(suppliers_code_contain)
        if len(suppliers_code_contain) == 1:
            return suppliers_code_contain
        elif needed_hits == 0:
            return all_results

        #try a like in the name of the supplier
        suppliers_name_like = queryset.filter(name__icontains=split_OR[0])[:needed_hits]
        all_results = chain(all_results, suppliers_name_like)
        needed_hits -= len(suppliers_name_like)
        if len(suppliers_name_like) == 1:
            return suppliers_name_like
        elif needed_hits == 0:
            return all_results
        
        return suppliers_name_like
    else:
        #handle multiple or conditions
        #limit the amount of conditions to search for
        current_matches = None
        search_depth = 0
        needed_hits = max_results
        for cluster in clusters:
            results =  process_OR_cluster(current_matches, cluster, needed_hits, queryset, 'supplier')
            needed_hits -= len(results)
            if current_matches == None:
                current_matches = results
            else:
                current_matches = current_matches | results
            if needed_hits <= 0:
                return current_matches
        return results
      

# try an exact match on code
def find_table_name(model):
    db_name =  connection.settings_dict['NAME']

    if model == 'product':
        if connection.vendor == 'sqlite':
            return '{}'.format(Product._meta.db_table)
        return '{}.{}'.format(db_name, Product._meta.db_table)
    if model == 'client':
        if connection.vendor == 'sqlite':
            return '{}'.format(Client._meta.db_table) 
        return '{}.{}'.format(db_name, Client._meta.db_table)
    if model == 'supplier':
        if connection.vendor == 'sqlite':
            return '{}'.format(Supplier._meta.db_table) 
        return '{}.{}'.format(db_name, Supplier._meta.db_table)
    if model == 'purchase':
        if connection.vendor == 'sqlite':
            return '{}'.format(Purchase._meta.db_table) 
        return '{}.{}'.format(db_name, Purchase._meta.db_table)
    if model == 'client':
        if connection.vendor == 'sqlite':
            return '{}'.format(Purchase._meta.db_table) 
        return '{}.{}'.format(db_name, Client._meta.db_table)
    if model == 'workorder':
        if connection.vendor == 'sqlite':
            return '{}'.format(Purchase._meta.db_table) 
        return '{}.{}'.format(db_name, Work_Order._meta.db_table)
    if model == 'sale':
        if connection.vendor == 'sqlite':
            return '{}'.format(Sale._meta.db_table) 
        return '{}.{}'.format(db_name, Sale._meta.db_table)
    if model == 'return':
        if connection.vendor == 'sqlite':
            return '{}'.format(Return._meta.db_table) 
        return '{}.{}'.format(db_name, Return._meta.db_table)