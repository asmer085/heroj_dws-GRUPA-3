from django.contrib import admin
from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja

admin.site.register(Korisnik)
admin.site.register(PredavanjeVideo)
admin.site.register(PredavanjeDokumentacija)
admin.site.register(Pitanja)
