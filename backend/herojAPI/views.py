from django.http import HttpResponse
from rest_framework import generics
from rest_framework.decorators import api_view, permission_classes

from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated


from .models import Korisnik, PredavanjeVideo, PredavanjeDokumentacija, Pitanja, Nesrece, PostupciPrvePomoci, RezultatiTestiranja, HistorijaNesreca
from .serializers import KorisnikSerializer, PredavanjeVideoSerializer, PredavanjeDokumentacijaSerializer, PitanjaSerializer, NesreceSerializer, PostupciPrvePomociSerializer, RezulttiTestiranjaSerializer, HistorijaNesrecaSerializer, UserSerializer

# 6. Da bi sada mogli primati post, get put ili delete metode moramo u view-u
# dodati anotacije za funkcije koje rade post, get, put ili delete.
# Zbog toga je potrebno instalirati:
# pip install djangorestframework
# 7. I onda u view dodati sljedeće:

# ovo je za react komponentu


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_info(request):
    user = request.user  # Get the authenticated user
    korisnik = User.objects.get(id=user.id)  # Retrieve the user from the korisnik table (assuming korisnik is the model for the table)
    data = {
        'name': korisnik.first_name,
        'surname': korisnik.last_name,
    }
    return Response(data)


@api_view(['POST'])
# ovo sam dodao da mozemo pamtiti korisnike kada se registruju i loguju(user authentication#)
def login(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(request, username=username, password=password)

    if user is not None:
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key})
    return Response({'message': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


def register(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        user = User.objects.create_user(
            username=serializer.validated_data['username'],
            password=serializer.validated_data['password']
        )
        return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def test(request):
    return HttpResponse("Test")


class KorisnikList(generics.ListCreateAPIView):
    queryset = Korisnik.objects.all()
    serializer_class = KorisnikSerializer


class KorisnikDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Korisnik.objects.all()
    serializer_class = KorisnikSerializer


class VideoList(generics.ListCreateAPIView):
    queryset = PredavanjeVideo.objects.all()
    serializer_class = PredavanjeVideoSerializer


class VideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PredavanjeVideo.objects.all()
    serializer_class = PredavanjeVideoSerializer


class DokumentacijaList(generics.ListCreateAPIView):
    queryset = PredavanjeDokumentacija.objects.all()
    serializer_class = PredavanjeDokumentacijaSerializer


class DokumentacijaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PredavanjeDokumentacija.objects.all()
    serializer_class = PredavanjeDokumentacijaSerializer


class PitanjaList(generics.ListCreateAPIView):
    queryset = Pitanja.objects.all()
    serializer_class = PitanjaSerializer


class PitanjaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Pitanja.objects.all()
    serializer_class = PitanjaSerializer


class NesreceList(generics.ListCreateAPIView):
    queryset = Nesrece.objects.all()
    serializer_class = NesreceSerializer


class NesreceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Nesrece.objects.all()
    serializer_class = NesreceSerializer


class PostupciPrvePomociList(generics.ListCreateAPIView):
    queryset = PostupciPrvePomoci.objects.all()
    serializer_class = PostupciPrvePomociSerializer


class PostupciPrvePomociDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PostupciPrvePomoci.objects.all()
    serializer_class = PostupciPrvePomociSerializer


class RezultatiTestiranjaList(generics.ListCreateAPIView):
    queryset = RezultatiTestiranja.objects.all()
    serializer_class = RezulttiTestiranjaSerializer


class RezultatiTestiranjaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = RezultatiTestiranja.objects.all()
    serializer_class = RezulttiTestiranjaSerializer


class HistorijaNesrecaList(generics.ListCreateAPIView):
    queryset = HistorijaNesreca.objects.all()
    serializer_class = HistorijaNesrecaSerializer


class HistorijaNesrecaDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = HistorijaNesreca.objects.all()
    serializer_class = HistorijaNesrecaSerializer
