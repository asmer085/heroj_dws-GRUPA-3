from django.urls import path
from .views import SimptomiList, Nesrece_SimptomiList, SimptomiDetail, Nesrece_SimptomiDetail, KorisnikList, KorisnikDetail, VideoList, VideoDetail, DokumentacijaList, DokumentacijaDetail, PitanjaList, PitanjaDetail, NesreceList, NesreceDetail, PostupciPrvePomociList, PostupciPrvePomociDetail, RezultatiTestiranjaList, RezultatiTestiranjaDetail, HistorijaNesrecaList, HistorijaNesrecaDetail
urlpatterns = [
    path('korisnik/', KorisnikList.as_view()),#ASMERE, OVAJ MORA ICI PRVI DA RADI FINO RUTIRANJE.
    path('korisnik/<int:pk>/', KorisnikDetail.as_view()),
    path('video/<int:pk>/', VideoDetail.as_view()),
    path('video/', VideoList.as_view()),
    path('dokumentacija/<int:pk>/', DokumentacijaDetail.as_view()),
    path('dokumentacija/', DokumentacijaList.as_view()),
    path('pitanja/<int:pk>/', PitanjaDetail.as_view()),
    path('pitanja/', PitanjaList.as_view()),
    path('nesrece/<int:pk>/', NesreceDetail.as_view()),
    path('nesrece/', NesreceList.as_view()),
    path('simptomi/<int:pk>/', SimptomiDetail.as_view()),
    path('simptomi/', SimptomiList.as_view()),
    path('nesrece_simptomi/<int:pk>/', Nesrece_SimptomiDetail.as_view()),
    path('nesrece_simptomi/', Nesrece_SimptomiList.as_view()),
    path('postupciprvepomoci/<int:pk>/', PostupciPrvePomociDetail.as_view()),
    path('postupciprvepomoci/', PostupciPrvePomociList.as_view()),
    path('rezultatitestiranja/<int:pk>/', RezultatiTestiranjaDetail.as_view()),
    path('rezultatitestiranja/', RezultatiTestiranjaList.as_view()),
    path('historijanesreca/<int:pk>/', HistorijaNesrecaDetail.as_view()),
    path('historijanesreca/', HistorijaNesrecaList.as_view()),
]
