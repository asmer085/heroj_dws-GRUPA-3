from django.db import models
from django.contrib.auth.models import User


class Pitanja(models.Model):
    id = models.AutoField(primary_key=True)
    postavka = models.TextField()
    tacan_odgovor = models.TextField()
    tezina = models.IntegerField()

    def __str__(self):
        return self.postavka


class Simptomi(models.Model):
    id = models.AutoField(primary_key=True)
    vrsta = models.CharField(max_length=50)
    naziv = models.CharField(max_length=50)

    def __str__(self):
        return self.naziv


class Nesrece(models.Model):
    id = models.AutoField(primary_key=True)
    vrsta = models.CharField(max_length=30)
    opis = models.TextField()

    def __str__(self):
        return self.vrsta


class PostupciPrvePomoci(models.Model):
    id = models.AutoField(primary_key=True)
    nesreca = models.ForeignKey(Nesrece, on_delete=models.CASCADE)
    opis = models.TextField()

    def __str__(self):
        return self.nesreca


class Nesrece_Simptomi(models.Model):
    id = models.AutoField(primary_key=True)
    nesreca = models.ForeignKey(Nesrece, on_delete=models.CASCADE)
    simptom = models.ForeignKey(Simptomi, on_delete=models.CASCADE)
    prva_pomoc = models.ForeignKey(
        PostupciPrvePomoci, on_delete=models.CASCADE, null=True, blank=True)


class RezultatiTestiranja(models.Model):
    id = models.AutoField(primary_key=True)
    korisnikid = models.ForeignKey(User, on_delete=models.CASCADE)
    rezultat = models.BooleanField()

    def __str__(self):
        return self.rezultat
