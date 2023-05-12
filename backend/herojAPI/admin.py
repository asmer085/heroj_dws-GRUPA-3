from django.contrib import admin
from .models import Probna, Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Simptom, Bolest

admin.site.register(Probna)
admin.site.register(Korisnik)
admin.site.register(PredavanjeVideo)
admin.site.register(PredavanjeDokumentacija)
admin.site.register(Pitanja)
admin.site.register(Simptom)
admin.site.register(Bolest)
