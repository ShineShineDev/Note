## Django Getting Started



### Requirement

- **Python **
- **PIP(package manager )**



### Check Requirements

- **Download Python =>  https://www.python.org/**
- **Download  pip  =>  https://pypi.org/project/pip/**

```java
$ python --version
//or
$ python3 --version
  Python 3.10.12    
    
$ pip --version
  pip 22.0.2 from /usr/lib/python3/dist-packages/pip (python 3.10)	

//Install if exist pip
> sudo apt install python3-pip    
   
```



### Create Virtual Environment

- **It is suggested to have a dedicated virtual environment for each Django project, and one way to manage a virtual environment is [venv](https://docs.python.org/3/tutorial/venv.html), which is included in Python.**

  ```php
  //Remember to navigate to where you want to create your project:
  //Project Create လုပ်မဲ့နေ folder path နေရာမှာရိုက်ပါ
  $ python3 -m venv envone
  
  //This will set up a virtual environment, and create a folder named "envone" with subfolders and files, like this:  
  // Virtual Environment တည်ဆောက်ပြီ  တည်ဆောက်လိုက်တဲ့ Environment နာမည်တူတဲ့ Folder တစ်ခုရပါလိမ့်မည် သူ့ထဲက sub folder တွေကတော့
  envone
    - Include
    - Lib
    - Scripts
    - pyvenv.cfg    
  
  //Activate the environment   
  $ source envone/bin/activate      
  
  //Environment ကို activated ပြီးရင် အောက်ပါတိုင်း  command prompမှာ မြင်ရပါလိမ့်မည်
  (envone) spideyshine:py$ 
  ```



### Install Django

- **Environment ကို တည်ဆောက်ပြီ  activated လုပ်ပြီးရင်တော့ Django ကို Install လုပ်ဖို့ ready ဖြစ်ပါပြီ**

- **Django ကို Install လုပ်ဖို့ အောက်က Command ကို ရိုက်လိုက်ပါ**

  ```bash
  (envone) spideyshine:py$ python3 -m pip install Django
  Collecting Django
    Downloading Django-4.2.4-py3-none-any.whl (8.0 MB)
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 8.0/8.0 MB 117.6 kB/s eta 0:00:00
  Collecting asgiref<4,>=3.6.0
    Downloading asgiref-3.7.2-py3-none-any.whl (24 kB)
  Collecting sqlparse>=0.3.1
    Downloading sqlparse-0.4.4-py3-none-any.whl (41 kB)
       ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ 41.2/41.2 KB 75.0 kB/s eta 0:00:00
  Collecting typing-extensions>=4
    Downloading typing_extensions-4.7.1-py3-none-any.whl (33 kB)
  Installing collected packages: typing-extensions, sqlparse, asgiref, Django
  Successfully installed Django-4.2.4 asgiref-3.7.2 sqlparse-0.4.4 typing-extensions-4.7.1
  (envone) spideyshine:py$ 
  ```

  

### Check Django Version

- **You can check if Django is installed by asking for its version number like this**

  ```bash
  (envone) spideyshine:py$ django-admin --version
  4.2.4
  ```

  

### Django Create Project

- **Project နာမည်ကို snake_case ပေးသင့်ပါတယ်**

  ```bas
  (envone) spideyshine:py$ django-admin startproject project_one
  (envone) spideyshine:py$ ls
  envone  project_one
  ```

  

### Created Project Folder Structure

```bash
(envone) spideyshine:project_one$ tree
├── manage.py
└── project_one
    ├── asgi.py
    ├── __init__.py
    ├── settings.py
    ├── urls.py
    └── wsgi.py
1 directory, 6 files
(envone) spideyshine:project_one$ 
```



### Run the Django Project

- **`Project Root Folder သို့သွားပြီး Project ကို run ဖို့ အောက်ပါ Command ကို ရိုက်နိုင်ပါတယ်`**

  ```bas
  (envone) spideyshine:py$ cd project_one
  py manage.py runserver //window 
  python3 manage.py runserver //Unix 
  //127.0.0.1:8000 
  ```
  



###  Create App

-  **What is an App?**

  - **An app is a web application that has a specific meaning in your project, like a home page, a contact form, or a members database.**

  ```js
  //If the server is running,stop it.
  (envone) spideyshine:project_one$ ls
  appone  db.sqlite3  manage.py  project_one
  > python3 anage.py startapp appone
  (envone) spideyshine:project_one$ tree
  ├── appone
  │   ├── admin.py
  │   ├── apps.py
  │   ├── __init__.py
  │   ├── migrations
  │   │   └── __init__.py
  │   ├── models.py
  │   ├── tests.py
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
  4 directories, 18 files
  (envone) spideyshine:project_one$ 
  ```

  

  

