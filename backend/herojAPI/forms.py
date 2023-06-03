from django import forms
from .models import PDFFajlovi

class PDFFajloviForm(forms.ModelForm):
    class Meta:
        model = PDFFajlovi
        fields = ['naziv', 'fajl']