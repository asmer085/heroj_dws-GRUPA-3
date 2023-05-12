from rest_framework import serializers
from .models import Probna, Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Simptom, Bolest


class ProbnaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'author', 'title', 'body', 'created_at',)
        model = Probna


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


class SimptomSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'bolesti', 'simptom',)
        model = Simptom


class BolestSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'ime_bolesti', 'opis_nacina_reagovanja', 'simptomi',)
        model = Bolest
