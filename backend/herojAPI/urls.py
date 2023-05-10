from django.urls import path
from .views import ProbnaList, ProbnaDetail
urlpatterns = [
    path('<int:pk>/', ProbnaDetail.as_view()),
    path('', ProbnaList.as_view()),
]
