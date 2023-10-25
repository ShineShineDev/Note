## Modules

- `Consider a module to be the same as a code library.`

- `A file containing a set of functions you want to include in your application.`







### Create a Module

- `To create a module just save the code you want in a file with the file extension `**`.py`**

- `The module can contain functions and variables of all types (arrays, dictionaries, objects etc)`

  ```python
  def cal_cir(r):
      pi = 3.14
      return pi * (r*r)
   
  person = {
    "name": "John",
    "age": 36,
    "country": "Norway"
  }
  ```

  

  





### Use a Module

- `Now we can use the module we just created, by using the `**`import`** `statement`

  ```python
  import calcri #import the module calcri
  print(calcri.cal_cir(3)) # call the greeting function and print result
  
  print(calcri.person)
  ```

  







### Alias File Name

- `You can create an alias when you import a module, by using the `**`as`** `keyword`

  ```python
  import calcri as math  #import the module calcri
  print(math.cal_cir(3)) # call the greeting function and print result
  
  print(math.person)
  ```

  

  

  





### from keyword

- `You can choose to import only parts from a module, by using the `**`from`**`keyword.`

- `⚠️ : When importing using the `**`from`** `keyword, do not use the module name when referring to elements in the module. Example: `**`person1["age"]`**, `not` **`mymodule.person1["age"]`**

  ```python
  from calcri import person  # import only the person dictionary from calcri module
  print(person)
  print(calcri.person) # this will raise error
```
  
  

