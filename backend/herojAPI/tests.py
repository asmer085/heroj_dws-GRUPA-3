from django.test import TestCase
from .models import PredavanjeVideo, PredavanjeDokumentacija, Pitanja


class PredavanjeVideoTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_post = PredavanjeVideo.objects.create(
            naslov='ime', opis='prezime', link_videa='https://www.geeksforgeeks.org/')
        test_post.save()

    def test_content(self):
        post = PredavanjeVideo.objects.get(id=1)
        naslov = f'{post.naslov}'
        opis = f'{post.opis}'
        link_videa = f'{post.link_videa}'
        self.assertEqual(naslov, 'ime')
        self.assertEqual(opis, 'prezime')
        self.assertEqual(link_videa, 'https://www.geeksforgeeks.org/')


class PredavanjeDokumentacijaTests(TestCase):
    @classmethod
    def setUpTestData(cls):
        test_post = PredavanjeDokumentacija.objects.create(
            naziv='prezime', opis='mail', dokumentacija='dokumentacija')
        test_post.save()

    def test_content(self):
        post = PredavanjeDokumentacija.objects.get(id=1)
        naziv = f'{post.naziv}'
        opis = f'{post.opis}'
        dokumentacija = f'{post.dokumentacija}'
        self.assertEqual(naziv, 'prezime')
        self.assertEqual(opis, 'mail')
        self.assertEqual(dokumentacija, 'dokumentacija')


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
