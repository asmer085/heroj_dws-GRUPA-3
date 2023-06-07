from django_filters import rest_framework as filters
import django_filters

from .models import Nesrece, PostupciPrvePomoci, Simptomi

class NesreceFilter(filters.FilterSet):

    class Meta:
        model = Nesrece
        fields = {
            'vrsta': ['icontains'], # icontains pretrazuje vrijednosti koje sadrze trazeni filter, tipa za cuts ce vratiti cuts and scrapes
        }

class SimptomiFilter(filters.FilterSet):

    naziv = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Simptomi
        fields = {
            'naziv': ['icontains'],
        }
        ## Clientreport.objects.filter(client_id_client_home__name='jo')

class PostupciPrvePomociFilter(filters.FilterSet):

    class Meta:
        model = PostupciPrvePomoci
        fields = ['nesreca'] # dodajemo nesreca polje za pretragu kako bi mogli filtrirati prvu pomoc po nesreci