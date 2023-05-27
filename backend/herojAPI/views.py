from django.http import HttpResponse
from rest_framework import generics
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model  # new

from .models import Simptomi, Nesrece_Simptomi, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca
from .serializers import SimptomiSerializer, Nesrece_SimptomiSerializer, PredavanjeVideoSerializer, PredavanjeDokumentacijaSerializer, PitanjaSerializer, NesreceSerializer, PostupciPrvePomociSerializer, RezulttiTestiranjaSerializer, HistorijaNesrecaSerializer, UserSerializer

# 6. Da bi sada mogli primati post, get put ili delete metode moramo u view-u
# dodati anotacije za funkcije koje rade post, get, put ili delete.
# Zbog toga je potrebno instalirati:
# pip install djangorestframework
# 7. I onda u view dodati sljedeće:


@api_view(['POST'])
def test(request):
    return HttpResponse("Test")


class UserList(generics.ListCreateAPIView):  # new
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):  # new
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


class VideoList(generics.ListCreateAPIView):
    queryset = PredavanjeVideo.objects.all()
    serializer_class = PredavanjeVideoSerializer


class VideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PredavanjeVideo.objects.all()
    serializer_class = PredavanjeVideoSerializer


class DokumentacijaList(generics.ListCreateAPIView):
    queryset = PredavanjeDokumentacija.objects.all()
    serializer_class = PredavanjeDokumentacijaSerializer


class DokumentacijaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PredavanjeDokumentacija.objects.all()
    serializer_class = PredavanjeDokumentacijaSerializer


class PitanjaList(generics.ListCreateAPIView):
    queryset = Pitanja.objects.all()
    serializer_class = PitanjaSerializer


class PitanjaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pitanja.objects.all()
    serializer_class = PitanjaSerializer


class NesreceList(generics.ListCreateAPIView):
    queryset = Nesrece.objects.all()
    serializer_class = NesreceSerializer


class NesreceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nesrece.objects.all()
    serializer_class = NesreceSerializer


class SimptomiList(generics.ListCreateAPIView):
    queryset = Simptomi.objects.all()
    serializer_class = SimptomiSerializer


class SimptomiDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Simptomi.objects.all()
    serializer_class = SimptomiSerializer


class Nesrece_SimptomiList(generics.ListCreateAPIView):
    queryset = Nesrece_Simptomi.objects.all()
    serializer_class = Nesrece_SimptomiSerializer


class Nesrece_SimptomiDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nesrece_Simptomi.objects.all()
    serializer_class = Nesrece_SimptomiSerializer


class PostupciPrvePomociList(generics.ListCreateAPIView):
    queryset = PostupciPrvePomoci.objects.all()
    serializer_class = PostupciPrvePomociSerializer


class PostupciPrvePomociDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PostupciPrvePomoci.objects.all()
    serializer_class = PostupciPrvePomociSerializer


class RezultatiTestiranjaList(generics.ListCreateAPIView):
    queryset = RezultatiTestiranja.objects.all()
    serializer_class = RezulttiTestiranjaSerializer


class RezultatiTestiranjaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RezultatiTestiranja.objects.all()
    serializer_class = RezulttiTestiranjaSerializer


class HistorijaNesrecaList(generics.ListCreateAPIView):
    queryset = HistorijaNesreca.objects.all()
    serializer_class = HistorijaNesrecaSerializer


class HistorijaNesrecaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = HistorijaNesreca.objects.all()
    serializer_class = HistorijaNesrecaSerializer
