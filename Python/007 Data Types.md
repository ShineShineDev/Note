##                                                    Data Types

> ⚠️ `Without data types, a computer cannot safely solve like this ( var x = 16 + "number")`
>
> ⚠️`So in programming, data type is an important concept.`
>
> ⚠️`To be able to operate on variables, it is important to know something about the type.`
>
> ⚠️ `Variables can store data of different types, and different types can do different things.`





### Built-in Data Types

- `Python has the following data types built-in by default, in these categories:`

  | `Text Type:`     | `str`                              |
  | ---------------- | ---------------------------------- |
  | `Numeric Types`  | `int`, `float`, `complex`          |
  | `Sequence Types` | `list`, `tuple`, `range`           |
  | `Mapping Type`   | `dict`                             |
  | `Set Types`      | `set`, `frozenset`                 |
  | `Boolean Type`   | `bool`                             |
  | `Binary Types`   | `bytes`, `bytearray`, `memoryview` |







### Numbers

- `There are` **`three numeric`** `types in Python : ` **`int, float and complex`**

  - **`int`** : `Int, or integer, is a whole number, positive or negative, without decimals, of unlimited length.`
  - **`Float`**:  `Float or "floating point number" is a number, positive or negative, containing one or more decimals.`
  - **`Complex`** : `Complex numbers are written with a "j" as the imaginary part`

  ```python
  # int or interger
  x = 1 # poisitve  
  z = -3255522  # negative
  y = 35656222554887711 # unlimited length
  
  # float or floating point number
  y = 1.0 # one decimal
  x = 1.10 # two decimal
  z = -35.59 # negative
  
  # Complex 
  # written with a "j" as the imaginary part:
  x = 3+5j
  y = 5j
  z = -5j
  ```







### Strings

- `Strings in python are surrounded by either single quotation marks, or double quotation marks.`

- `You can assign a multiline string to a variable by using three quotes`

- `Like many other popular programming languages,`  **`strings`** `in Python` **`are arrays of bytes representing unicode characters`**.

- `However, Python does not have a character data type, a single character is simply a string with a length of 1.Square brackets can be used to access elements of the string.`

- `Since strings are arrays, we can loop through the characters in a string, with a `for` loop.`

  ```python
  a = "Hello"
  b = 'Hello'
  print(a)
  
  # mutiline string  with double quotes:
  a = """Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua."""
  
  # mutiline string  with single quotes:
  b = '''Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.'''
  print(a)
  print(b)
  
  # Square brackets can be used to access elements of the string.`
  a = "Hello, World!"
  print(a[1])
  
  # Since strings are arrays, we can loop through the characters in a string, with a for loop.
  for x in "banana":
    print(x)
  ```

  









### Getting the Data Type

- `You can get the data type of any object by using the `**`type()`** `function`

  ```python
  x = 5
  print(type(x))
  ```

  



### Type Conversion

- `You can convert from one type to another with the `**`int(), float(), and complex()`**` `methods`

  ```python
  x = 1    # int
  y = 2.8  # float
  z = 1j   # complex
  
  # convert from int to float:
  a = float(x)
  
  # convert from float to int:
  b = int(y)
  
  # convert from int to complex:
  c = complex(x)
  
  print(a)
  print(b)
  print(c)
  
  print(type(a))
  print(type(b))
  print(type(c))
  ```

  





### Random Number

- **`Python does not have`** a `random()` `function to make a random number, but Python has a built-in module called `random` that can be used to make random numbers`

- `Import the random module, and display a random number between 1 and 9`

  

  ```js
  import random
  
  print(random.randrange(1, 10))
  ```

  



