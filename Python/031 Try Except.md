## Try Except

- `When an error occurs, or exception as we call it, Python will normally stop and generate an error message.These exceptions can be handled using the` **`try`** `statement`
- `Without the try block, the program will crash and raise an error`







### Exception Handling

- `The`**`try`**`block lets you test a block of code for errors.`
- `The`**`except`** `block lets you handle the error.`
- `You can use the` **`else`** `keyword to define a block of code to be executed if no errors were raised.`
- `The` **`finally`** `block, if specified, will be executed regardless if the try block raises an error or not.`
  
  ```python
  try:
      print(x)
  except: #Since the try block raises an error, the except block will be executed.
      print("X is not defined")
  else:  
      print("Nothing went wrong")
finally:
      print("The 'try except' is finished")
  ```
  
  







### Many Exceptions

- `You can define as many exception blocks as you want, e.g. if you want to execute a special block of code for a special kind of error`

  ```python
  try:
      print(x)
  except NameError:
      print("Variable x is not defined")
  except:
      print("Something else went wrong")
  finally:
      print("The 'try except' is finished")
  ```

  







### Raise an exception

- `As a Python developer you can choose to throw an exception if a condition occurs.`

- `To throw (or raise) an exception, use the `**`raise`** `keyword.`

  ```python
  x = -1
  if x < 0:
    raise Exception("Sorry, no numbers below zero")
  
  
  x = "hello"
  if not type(x) is int: 
      # Raise a TypeError if x is not an integer:
      raise TypeError("Only integers are allowed")
  ```

  