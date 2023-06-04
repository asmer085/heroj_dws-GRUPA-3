from django.urls import path
from .views import SimptomiList, Nesrece_SimptomiList, SimptomiDetail, Nesrece_SimptomiDetail, PitanjaList, PitanjaDetail, NesreceList, NesreceDetail, PostupciPrvePomociList, PostupciPrvePomociDetail, RezultatiTestiranjaList, RezultatiTestiranjaDetail, UserList, UserDetail, PDFFajloviView, PDFFajloviDetail, PDFFajloviList
from .views import get_file
from . import views
urlpatterns = [
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
    path('users/', UserList.as_view()),  
    path('users/<int:pk>/', UserDetail.as_view()),  
   # path('pdffajlovi/', views.PDFFajloviView.as_view(), name= 'pdffajlovi_list'),
   # path('fajlovii/<int:file_id>/', get_file, name='get_file'),
   # path('upload/', upload_file, name='upload'),
   # path('success/', upload_success, name='success'),
    path('pdffajlovi/<int:pk>/', PDFFajloviDetail.as_view()),
    path('pdffajlovi/', PDFFajloviList.as_view()),
    
]
