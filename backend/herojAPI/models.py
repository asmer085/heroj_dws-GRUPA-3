from django.db import models
from django.contrib.auth.models import User
# napravio sam probnu tabelu cisto da bi sve radilo kako treba, kasnije ubacujemo nasu bazu u ovom fajlu


class Probna(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Korisnik(models.Model):
    ime = models.CharField(max_length=50)
    prezime = models.CharField(max_length=50)
    mail = models.CharField(max_length=50)

    def __str__(self):
        return self.mail


class PredavanjeVideo(models.Model):
    naslov = models.CharField(max_length=100)
    opis = models.TextField()
    link_videa = models.URLField()

    def __str__(self):
        return self.naslov


class PredavanjeDokumentacija(models.Model):
    id = models.AutoField(primary_key=True)
    naziv = models.CharField(max_length=255)
    opis = models.TextField()
    # treba skontati kako dokumentaciju, nije jednostavno... Softa
    dokumentacija = models.TextField()

    def __str__(self):
        return self.naziv


class Pitanja(models.Model):
    id = models.AutoField(primary_key=True)
    postavka = models.TextField()
    tacan_odgovor = models.TextField()
    tezina = models.IntegerField()

    def __str__(self):
        return self.postavka


class Simptom(models.Model):
    bolesti = models.ForeignKey('Bolest', on_delete=models.CASCADE)
    simptom = models.CharField(max_length=100)

    def __str__(self):
        return self.simptom


class Bolest(models.Model):
    ime_bolesti = models.CharField(max_length=100)
    opis_nacina_reagovanja = models.TextField()
    simptomi = models.ManyToManyField(Simptom)

    def __str__(self):
        return self.ime_bolesti
