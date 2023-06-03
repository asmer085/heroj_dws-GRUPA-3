from django.contrib import admin
from django.urls import include, path  # new
from django.conf import settings # new
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    # dodao softa da sa utlom "http://127.0.0.1:8000/api" mozemo dalje pristupati heroiAPI url-ovima
    path('api/', include('herojAPI.urls')),
    # mada tek sad vidim da to ima i ovo api/vi/ ako je to iko igdje koristio obavezno u frontendu na komponentama login i reg promijeniti url
    # za login.js je na liniji 28, a za registracija.js je na liniji 74
    path('api/v1/', include('herojAPI.urls')),
    path('api-auth/', include('rest_framework.urls')),  # new
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')),  # new
    path('api/v1/dj-rest-auth/registration/',
         include('dj_rest_auth.registration.urls')),  # new
    #path('api/v1/upload/', upload_file, name='upload_file'),

 ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)