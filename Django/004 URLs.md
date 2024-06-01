## Django URLs

>  :wink: **`Django URLS file သည် Laravle ၏ route file(web.php,api.php)  နဲ့တူပါတယ်`**

- **`Create a file named urls.py in the same folder as the views.py file, and type this code in it`**

- **`The urls.py file you just created is specific for the apponeapplication. We have to do some routing in the root directory project_one as well.`**

  ```py
  # project_one/appone/urls.py
  from django.urls import path
  from . import views
  
  urlpatterns = [
      path('appone/', views.appone, name='appone'),
  ]
  ```

  

### Register urls.py  on Project root  urls.py file

```python
# project_one/project_one/urls.py

from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('', include('appone.urls')),
    path('admin/', admin.site.urls),
]
```





### Folder Structure

```python
envone) spideyshine:project_one$ tree
.
├── appone
│   ├── admin.py
│   ├── apps.py
│   ├── __init__.py
│   ├── migrations
│   │   └── __init__.py
│   ├── models.py
│   ├── __pycache__
│   │   ├── __init__.cpython-310.pyc
│   │   ├── urls.cpython-310.pyc
│   │   └── views.cpython-310.pyc
│   ├── tests.py
│   ├── urls.py
│   └── views.py
├── db.sqlite3
├── manage.py
└── project_one
    ├── asgi.py
    ├── __init__.py
    ├── __pycache__
    │   ├── __init__.cpython-310.pyc
    │   ├── settings.cpython-310.pyc
    │   ├── urls.cpython-310.pyc
    │   └── wsgi.cpython-310.pyc
    ├── settings.py
    ├── urls.py
    └── wsgi.py
5 directories, 22 files
(envone) spideyshine:project_one$ 
```



