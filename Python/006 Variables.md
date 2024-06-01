## Variables

> **`❝ Variables are containers for storing data values ❞ .`**
>
> ❝ **`A Variable include type, identifier(name), assignment operator, value, scope and lifetime `**❞
>
> - `In software programming, variables are names used to hold one or more values.`
> - `The variable holds the results of a calculation, database call, results of a database query, or other value`
> - ` The variable is stored in computer memory once and used wherever it is needed in your code.`







### Creating Variables

- `Python has` **`no command for declaring a variable`** `like js const or let.`

- `Variables do not need to be declared with any particular type like java int, and can even change type after they have been set.`

- `Variable names are case-sensitive.`

- `A variable is created the moment you first assign a value to it.`

- `String variables can be declared either by using single or double quotes`

  
  
  ```python
  #int
  x = 5 
  
  #str
  # String variables can be declared either by using single or double quotes:
  y = "John" 
  print(x)
  print(y)
  ```







### Assign Multiple Values

- `Python allows you to assign values to multiple variables in one line`

- ` Make sure the number of variables matches the number of values, or else you will get an error.`

  

  ```python
  # Many Values to Multiple Variables
  x, y, z = "Orange", "Banana", "Cherry"
  print(x)
  print(y)
  print(z)
  
  # One Value to Multiple Variables
  x = y = z = "Orange"
  print(x)
  print(y)
  print(z)
  
  # If you have a collection of values in a list, tuple etc. Python allows you extract the values into variables. This is called unpacking.
  fruits = ["apple", "banana", "cherry"]
  x, y, z = fruits
  print(x)
  print(y)
  print(z)
  ```







### Rules for Python variables

- `A variable should be  self-descriptive name (age, carname, total_volume)`

- `A variable name must start with a letter or the underscore character`

- `A variable name cannot start with a number`

- `A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )`

- `Variable names are case-sensitive (age, Age and AGE are three different variables)`

  ```python
    myvar = "John"
    my_var = "John" #Snake Case
    _my_var = "John" #Snake Case
    myVar = "John" #Camel Case
    MYVAR = "John" #Uppper Case
    myvar2 = "John" 
  ```

  





### Escape Characters

- `To insert characters that are illegal in a string, use an escape character.`

- `An escape character is a backslash  followed by the character you want to insert.`

- `An example of an illegal character is a double quote inside a string that is surrounded by double quotes:`

  ```python
  txt = "We are the so-called \"Vikings\" from the north."
  ```

  

  | Code | Result          | Try it                                                       |
  | :--- | :-------------- | :----------------------------------------------------------- |
  | `\'` | Single Quote    | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_escape2) |
  | \\   | Backslash       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_backslash) |
  | \n   | New Line        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_newline) |
  | \r   | Carriage Return | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_r) |
  | \t   | Tab             | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_t) |
  | \b   | Backspace       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_b) |
  | \f   | Form Feed       |                                                              |
  | \ooo | Octal value     | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_octal) |
  | \xhh | Hex value       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_string_hex) |



