from rest_framework import generics
from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca
from .serializers import KorisnikSerializer, PredavanjeVideoSerializer, PredavanjeDokumentacijaSerializer, PitanjaSerializer, NesreceSerializer, PostupciPrvePomociSerializer, RezulttiTestiranjaSerializer, HistorijaNesrecaSerializer


class KorisnikList(generics.ListCreateAPIView):
    queryset = Korisnik.objects.all()
    serializer_class = KorisnikSerializer


class KorisnikDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Korisnik.objects.all()
    serializer_class = KorisnikSerializer


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
