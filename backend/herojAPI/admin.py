from django.contrib import admin
from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca

admin.site.register(Korisnik)
admin.site.register(PredavanjeVideo)
admin.site.register(PredavanjeDokumentacija)
admin.site.register(Pitanja)
admin.site.register(Nesrece)
admin.site.register(PostupciPrvePomoci)
admin.site.register(RezultatiTestiranja)
admin.site.register(HistorijaNesreca)
