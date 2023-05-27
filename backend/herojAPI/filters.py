from django_filters import rest_framework as filters

from .models import Nesrece, PostupciPrvePomoci

class NesreceFilter(filters.FilterSet):

    class Meta:
        model = Nesrece
        fields = {
            'vrsta': ['icontains'], # icontains pretrazuje vrijednosti koje sadrze trazeni filter, tipa za cuts ce vratiti cuts and scrapes
        }

class PostupciPrvePomociFilter(filters.FilterSet):

    class Meta:
        model = PostupciPrvePomoci
        fields = ['nesreca'] # dodajemo nesreca polje za pretragu kako bi mogli filtrirati prvu pomoc po nesreci
