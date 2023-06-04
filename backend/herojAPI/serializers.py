from rest_framework import serializers
from .models import Simptomi, Nesrece_Simptomi, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, PDFFajlovi, VideoPrimjeri
from django.contrib.auth import get_user_model  


class UserSerializer(serializers.ModelSerializer):  
    class Meta:
        model = get_user_model()
        fields = ('id', 'username',)


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
        fields = ('id', 'nesreca', 'simptom', 'prva_pomoc')
        model = Nesrece_Simptomi


class PostupciPrvePomociSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'nesreca', 'opis',)
        model = PostupciPrvePomoci


class RezulttiTestiranjaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'korisnikid', 'rezultat',)
        model = RezultatiTestiranja

class PDFFajloviSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'naziv', 'fajl', 'odobreno')
        model = PDFFajlovi

class VideoPrimjeriSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'naslov', 'link_videa')
        model = VideoPrimjeri