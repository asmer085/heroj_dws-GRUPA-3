from rest_framework import serializers
from .models import Probna


class ProbnaSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'author', 'title', 'body', 'created_at',)
        model = Probna
