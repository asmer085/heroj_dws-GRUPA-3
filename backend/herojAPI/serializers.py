from rest_framework import serializers
from .models import Simptomi, Nesrece_Simptomi, Korisnik1, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca
from django.contrib.auth import get_user_model  # new


# IZBRISAO SAM SLUCAJNO VAS SERIALIZER, ILI ASMEROV NMP
class KorisnikSerializer(serializers.ModelSerializer):
    # IMAJU OVIH 5 POLJA UMJESTO PROSLIH 3 ILI 4. TO CES LAHKO PRMIJENITI TEBI NEMA OVIH COMITOVA NA MASERU.
    class Meta:
        model = Korisnik1
        fields = ['id', 'ime', 'prezime', 'email', 'passW']


class UserSerializer(serializers.ModelSerializer):  # new
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)


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
        fields = ('id', 'nesreca', 'simptomi', 'opis',)
        model = PostupciPrvePomoci


class RezulttiTestiranjaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'korisnikid', 'rezultat',)
        model = RezultatiTestiranja


class HistorijaNesrecaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'korisnikid', 'nesreca',)
        model = HistorijaNesreca
