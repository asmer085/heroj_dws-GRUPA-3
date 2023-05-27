from django.test import TestCase
from .models import Pitanja



class PitanjaTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_post = Pitanja.objects.create(
            postavka='ime', tacan_odgovor='prezime', tezina=5)
        test_post.save()

    def test_content(self):
        post = Pitanja.objects.get(id=1)
        postavka = f'{post.postavka}'
        tacan_odgovor = f'{post.tacan_odgovor}'
        tezina = post.tezina
        self.assertEqual(postavka, 'ime')
        self.assertEqual(tacan_odgovor, 'prezime')
        self.assertEqual(tezina, 5)
