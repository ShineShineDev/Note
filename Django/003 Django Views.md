## Django Views

>  :wink: **`Django Views file သည် Laravle ၏ Controller File နဲ့တူပါတယ်`**

- **`Django views are Python functions that takes http requests and returns http response, like HTML documents.`**
- **`A web page that uses Django is full of views with different tasks and missions.`**
- **`Views are usually put in a file called `views.py` located on your app's folder.`**



### views.py 	

- `members သည် Function ဖြစ်ပြီး  Current request  ကို request variable တွင် လက်ခံသည်`

```py
# pwdproject_one/appone/views.py
from django.shortcuts import render
from django.http import HttpResponse

# send a response back to the browser.
def members(request):
    return HttpResponse("Hello world!")

# In Laravle
public function members(Request $request){
    return $request;
}
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

