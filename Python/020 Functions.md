## Functions

- `Function is a block of code designed to perform a particular task.`

- `You can pass data, known as parameters, into a function.`

- `A function can return data as a result.`

- `Reuse (define the code once, and use it many times)`

- `Readable(copying and pasting the needed code into multiple places is a bad idea)`

- `Modularity (divide a large program into multiple small modules modularity`

- `Hide the complexities(you don't want to worry about the internal working of a function)`

  





### Type of User-defined Function

- `Function with no arguments and no return value`
- `Function with no arguments and a return value`
- `Function with arguments and no return value`
- `Function with arguments and a return value`







### Creating a Function

- `In Python a function is defined using the` **`def keyword`**

  ```python
  def myfun():
      print('worked!') 
  ```

  





### Calling a Function

- `To call a function, use the function name followed by parenthesis`

  ```python
  # create function
  def myfun():
      print('myfun is worked!')
      
  # call it
  myfun()
  ```

  







### Return Values

- `To let a function return a value, use the `**`return`** `statement`

  ```python
  def add(num1,num2):
      return num1+nmu2
  
  print(add(2,4))
  ```

  







### Arguments

- `Information can be passed into functions as arguments.`

- `Arguments are specified after the function name, inside the parentheses. You can add as many arguments as you want, just separate them with a comma.`

  ```python
  # A parameter is the variable listed inside the parentheses in the function definition.
  def add(num1,num2):
      return num1+nmu2
  
  #An argument is the value that is sent to the function when it is called.
  add(2,4)
  ```

  







###  *args

- `By default, a function must be called with the correct number of arguments. `

- `If you try to call the function with unexpects  number of arguments. you will get an error.`

- `If you do not know how many arguments that will be passed into your function, add a` **`*`**  `before the parameter name in the function definition.`

- `This way the function will receive a` **`tuple`*** `of arguments, and can access the items accordingly`

- `⚠️ Arbitrary Arguments are often shortened to *args in Python documentations.`

  ```python
  def add(num1,num2):
      return num1+nmu2
  
  add(2) # this will raise error
  
  def my_fun(*num):
      print(num)
  
    my_fun(1,2,3,4,5)
  ```







### Keyword Arguments

- `You can also send arguments with the `**`key = value`*** syntax.`

  ```python
  def add(num3,num2,num1):
     return num1+num2+num3
  
  print(add(num1 = 1,num2 = 2,num3 = 3))
  ```







### Arbitrary Keyword Arguments, **kwargs

- `If you do not know how many keyword arguments that will be passed into your function, add two asterisk: `**` before the parameter name in the function definition.`

- `This way the function will receive a *dictionary* of arguments, and can access the items accordingly`

- `⚠️ Arbitrary Kword Arguments* are often shortened to *kwargs* in Python documentations`

  ```python
  def add(num3,**args):
      print(args)
      return(num3+args['num2']+args['num1'])
  print(add(num3 = 2, num2 =2, num1 =1 ))
  ```

  







### Default Parameter Value

- `If we call the function without argument, it uses the default value`

  ```python
  def add(num3 = 3,num2 = 2,num1 = 0):
     return(num3 + num2 + num1)
  
  print(add(num1 = 1))
  ```

  







### The pass Statement

- **`function`** `definitions cannot be empty, but if you for some reason have a` **`function`** `definition with no content, put in the `**`pass`** `statement to avoid getting an error.`

  ```python
  def myfunction():
    pass
  ```

  









### Passing a List as an Argument

- `You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.`

  ```python
  def add(lst):
      for num in lst:
          i = num
          print(num)  
  add([1,2,3,4,5])        
  ```

  





### Recursion

- `Python also accepts function recursion, which means a defined function can call itself.`

- `This has the benefit of meaning that you can loop through data to reach a result.`

  ```python
  def tri_recursion(k):
    if(k > 0):
      result = k + tri_recursion(k - 1)
      print(result)
    else:
      result = 0
    return result
  
  tri_recursion(6)
  ```

  