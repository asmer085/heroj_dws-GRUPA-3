from django.test import TestCase
from django.contrib.auth.models import User
from .models import Probna
# testovi za probnu bazu


class ProbnaTests(TestCase):
    @classmethod
    def setUpTestData(cls):

        testuser1 = User.objects.create_user(
            username='testuser1', password='abc123')
        testuser1.save()

        test_post = Probna.objects.create(
            author=testuser1, title='Blog title', body='Body content...')
        test_post.save()

    def test_blog_content(self):
        post = Probna.objects.get(id=1)
        author = f'{post.author}'
        title = f'{post.title}'
        body = f'{post.body}'
        self.assertEqual(author, 'testuser1')
        self.assertEqual(title, 'Blog title')
        self.assertEqual(body, 'Body content...')
