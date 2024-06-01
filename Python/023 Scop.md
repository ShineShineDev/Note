##  Scope

- `A variable is only available from inside the region it is created. This is called scope.`

  



### Local Scope

- `A variable created inside a function belongs to the *local scope* of that function, and can only be used inside that function.`

  ```python
  def cal_cir(r):
      pi = 3.14 # local scope or local variable
      return 3.12 * (r*r)
  print(cal_cir(4))
  
  
  # Function Inside Function
  def myfunc():
    x = 300
    def myinnerfunc():
      print(x) # x is not available outside the function, but it is available for any function inside the function:
    myinnerfunc()
  
  myfunc()
  ```

  







### Global Scope

- `A variable created in the main body of the Python code is a global variable and belongs to the global scope.`

- `Global variables are available from within any scope, global and local.`

  ```python
  x = 300
  
  def myfunc():
    print(x)
  
  myfunc()
  
  print(x)
  ```

  







### Naming Variables

- `If you operate with the same variable name inside and outside of a function, Python will treat them as two separate variables, one available in the global scope (outside the function) and one available in the local scope (inside the function)`

  ```python
  x = 300
  
  def myfunc():
    x = 200
    print(x)
  
  myfunc()
  
  print(x)
  ```

  







### Global Keyword

- `If you need to create a global variable, but are stuck in the local scope, you can use the `**`global` **`keyword.`

- `The` **`global`** `keyword makes the variable global.`

- `Also, use the `**`global`** `keyword if you want to make a change to a global variable inside a function.`

  ```python
  def cal_cir(r):
     global pi #akes the variable global
     pi = 3.14 
     return 3.12 * (r*r)
  
  print(cal_cir(4))
  print(pi)
  
  # make a change to a global variable inside a function
  x = 300
  def myfunc():
    global x
    x = 200
  myfunc()
  print(x)
  ```

  