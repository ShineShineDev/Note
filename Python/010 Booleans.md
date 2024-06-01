##                                                                Booleans

> `Booleans represent one of two values: `**`True` or `False`.**
>
> `In programming you often need to know if an expression is `**`True` or `False`.**





### Set Boolean Values

- `You can set boolean values in variable`

  ```python
  isTure = True
  ```

  





### Get  Boolean Values

- `You can evaluate any expression in Python, them get one of two answers`, `True` or `False`.

- `When you compare two values, the expression is evaluated and Python returns the Boolean answer`

  ```python
  print(10 > 9) # True
  print(10 == 9) # False
  print(10 < 9) # False
  ```







### Functions can Return a Boolean

- `You can create functions that returns a Boolean Value`

  ```python
  def myFunction() :
    return True
  
  print(myFunction())
  ```

  





### Most Values are True

- `Almost any value is evaluated to `**True`** `if it has some sort of content.`

- `Any string is` **`True except empty strings.`**

- `Any number is `**`True, except `0`**

- `Any list, tuple, set, and dictionary are True, except empty ones.`

  ```js
  bool("abc")
  bool(123)
  bool(["apple", "cherry", "banana"])
  ```

  





### Some Values are False

- `In fact, there are not many values that evaluate to False, except empty values, such as ()`, `[]`, `{}`, `""`, `the number `0`, and the value `None`. And of course the value `False` evaluates to `False`.`

  ```python
  bool(False)
  bool(None)
  bool(0)
  bool("")
  bool(())
  bool([])
  bool({})
  ```

  





### Evaluate Values and Variables

- `The `**`bool()`** `function allows you to evaluate any value, and give you `**`True` or `False`** `in return`

  ```python
  print(bool("Hello")) #True
  print(bool(15)) #True
  
  x = "Hello"
  y = 15
  print(bool(x))  #True
  print(bool(y))  #True
  ```

  



