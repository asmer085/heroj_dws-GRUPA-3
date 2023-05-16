from django.urls import path
from .views import KorisnikList, KorisnikDetail, VideoList, VideoDetail, DokumentacijaList, DokumentacijaDetail, PitanjaList, PitanjaDetail
urlpatterns = [
    path('korisnik/<int:pk>/', KorisnikDetail.as_view()),
    path('korisnik/', KorisnikList.as_view()),
    path('video/<int:pk>/', VideoDetail.as_view()),
    path('video/', VideoList.as_view()),
    path('dokumentacija/<int:pk>/', DokumentacijaDetail.as_view()),
    path('dokumentacija/', DokumentacijaList.as_view()),
    path('pitanja/<int:pk>/', PitanjaDetail.as_view()),
    path('pitanja/', PitanjaList.as_view()),
]
