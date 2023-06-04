from django.contrib import admin
from .models import Simptomi, Nesrece_Simptomi, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, PDFFajlovi, VideoPrimjeri

admin.site.register(Pitanja)
admin.site.register(Nesrece)
admin.site.register(Simptomi)
admin.site.register(Nesrece_Simptomi)
admin.site.register(PostupciPrvePomoci)
admin.site.register(RezultatiTestiranja)
admin.site.register(PDFFajlovi)
admin.site.register(VideoPrimjeri)
