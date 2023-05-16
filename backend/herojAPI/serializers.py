from rest_framework import serializers
from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja


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
