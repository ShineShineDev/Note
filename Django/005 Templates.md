## Django Templates

> **`  Django Template ဖိုင်သည် Laravle ၏ Blade file နဲ့တူပါသည်။ Laravle တွင် Templates Engine အတွက် Blade ကိုသုံးပြီး Djangon မှာတော့ DTE Engine ကိုသုံးပါသည်   `**

- `Django Templates is a html file ,in this file you can create html tag and bind variable`

  ```py
  # project_one/project_one/appone/templates/index.html
  
  <!DOCTYPE html>
  <html>
  <body>
  
  <h1>Hello World!</h1>
  <p>Welcome to my first Django project!</p>
  
  </body>
  </html>
  ```

  



### Render Created Template file in view.py file

- **Open the `views.py` file and replace the `members` view with this**

```py
# project_one/project_one/appone/views.py
from django.http import HttpResponse
from django.template import loader

def appone(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())
```





### Change Settings

- **view.py က return ပြန်လိုက်သော template  file ကို သိဖို့ project folder အောက်က settings.py file ထဲက INSTALLED_APPS array ထဲမှာ  တည်ဆောက်လိုက်သော app ကို ထည့်ပေးဖို့လိုပါတယ်**

  ```python
  # # project_one/project_one/settings
  
  
  INSTALLED_APPS = [
      'django.contrib.admin',
      'django.contrib.auth',
      'django.contrib.contenttypes',
      'django.contrib.sessions',
      'django.contrib.messages',
      'django.contrib.staticfiles',
      'appone'
  ]
  ```

  

