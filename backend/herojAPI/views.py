from rest_framework import generics
from .models import Probna, Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Simptom, Bolest
from .serializers import ProbnaSerializer, KorisnikSerializer, PredavanjeVideoSerializer, PredavanjeDokumentacijaSerializer, PitanjaSerializer, SimptomSerializer, BolestSerializer


class ProbnaList(generics.ListCreateAPIView):
    queryset = Probna.objects.all()
    serializer_class = ProbnaSerializer


class ProbnaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Probna.objects.all()
    serializer_class = ProbnaSerializer


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


class SimptomList(generics.ListCreateAPIView):
    queryset = Simptom.objects.all()
    serializer_class = SimptomSerializer


class SimptomDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Simptom.objects.all()
    serializer_class = SimptomSerializer


class BolestList(generics.ListCreateAPIView):
    queryset = Bolest.objects.all()
    serializer_class = BolestSerializer


class BolestDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bolest.objects.all()
    serializer_class = BolestSerializer
