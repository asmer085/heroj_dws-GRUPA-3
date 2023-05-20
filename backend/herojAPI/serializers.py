from rest_framework import serializers
from .models import Simptomi, Nesrece_Simptomi, Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca


class KorisnikSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'ime', 'prezime', 'mail',)
        model = Korisnik


class PredavanjeVideoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'naslov', 'opis', 'link_videa',)
        model = PredavanjeVideo


class PredavanjeDokumentacijaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'naziv', 'opis', 'dokumentacija',)
        model = PredavanjeDokumentacija


class PitanjaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'postavka', 'tacan_odgovor', 'tezina',)
        model = Pitanja


class NesreceSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'vrsta', 'opis',)
        model = Nesrece

class SimptomiSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'vrsta', 'naziv',)
        model = Simptomi

class Nesrece_SimptomiSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'nesreca', 'simptom',)
        model = Nesrece_Simptomi


class PostupciPrvePomociSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'nesreca', 'opis',)
        model = PostupciPrvePomoci


class RezulttiTestiranjaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'korisnikid', 'rezultat',)
        model = RezultatiTestiranja


class HistorijaNesrecaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'korisnikid', 'nesreca',)
        model = HistorijaNesreca
