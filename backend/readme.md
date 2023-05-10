IN TERMINAL
> pipenv shell
> py manage.py runserver
"CTRL C for abort"

IN BROWSER 
http://127.0.0.1:8000/api/v1/
http://127.0.0.1:8000/admin

Django REST Framework
As we have seen before, Django REST Framework takes care of the heavy lifting of transforming
our database models into a RESTful API. There are three main steps to this process:
• urls.py file for the URL routes
• serializers.py file to transform the data into JSON
• views.py file to apply logic to each API endpoint
On the command line use pipenv to install Django REST Framework.
