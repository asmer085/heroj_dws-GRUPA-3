from rest_framework import generics
from .models import Probna
from .serializers import ProbnaSerializer


class ProbnaList(generics.ListCreateAPIView):
    queryset = Probna.objects.all()
    serializer_class = ProbnaSerializer


class ProbnaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Probna.objects.all()
    serializer_class = ProbnaSerializer
