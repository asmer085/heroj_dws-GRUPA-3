from rest_framework import serializers
from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca
from django.contrib.auth.models import User

# i ovo je za user_auth


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password']


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
        fields = ('id', 'korisnikid', 'vrsta', 'opis',)
        model = Nesrece


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
