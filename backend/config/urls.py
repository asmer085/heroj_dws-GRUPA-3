from django.contrib import admin
from django.urls import include, path  # new
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('herojAPI.urls')),#dodao softa da sa utlom "http://127.0.0.1:8000/api" mozemo dalje pristupati heroiAPI url-ovima
    #mada tek sad vidim da to ima i ovo api/vi/ ako je to iko igdje koristio obavezno u frontendu na komponentama login i reg promijeniti url
    # za login.js je na liniji 28, a za registracija.js je na liniji 74
    path('api/v1/', include('herojAPI.urls')),  # new
]
