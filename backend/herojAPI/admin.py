from django.contrib import admin
from .models import Simptomi, Nesrece_Simptomi, Korisnik1, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca

admin.site.register(Korisnik1)
admin.site.register(PredavanjeVideo)
admin.site.register(PredavanjeDokumentacija)
admin.site.register(Pitanja)
admin.site.register(Nesrece)
admin.site.register(Simptomi)
admin.site.register(Nesrece_Simptomi)
admin.site.register(PostupciPrvePomoci)
admin.site.register(RezultatiTestiranja)
admin.site.register(HistorijaNesreca)
