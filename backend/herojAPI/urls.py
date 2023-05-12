from django.urls import path
from .views import ProbnaList, ProbnaDetail, KorisnikList, KorisnikDetail, VideoList, VideoDetail, DokumentacijaList, DokumentacijaDetail, PitanjaList, PitanjaDetail, SimptomList, SimptomDetail, BolestList, BolestDetail
urlpatterns = [
    path('probna/<int:pk>/', ProbnaDetail.as_view()),
    path('probna/', ProbnaList.as_view()),
    path('korisnik/<int:pk>/', KorisnikDetail.as_view()),
    path('korisnik/', KorisnikList.as_view()),
    path('video/<int:pk>/', VideoDetail.as_view()),
    path('video/', VideoList.as_view()),
    path('dokumentacija/<int:pk>/', DokumentacijaDetail.as_view()),
    path('dokumentacija/', DokumentacijaList.as_view()),
    path('pitanja/<int:pk>/', PitanjaDetail.as_view()),
    path('pitanja/', PitanjaList.as_view()),
    path('simptom/<int:pk>/', SimptomDetail.as_view()),
    path('simptom/', SimptomList.as_view()),
    path('bolest/<int:pk>/', BolestDetail.as_view()),
    path('bolest/', BolestList.as_view()),
]
