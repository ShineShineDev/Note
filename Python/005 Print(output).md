##                                                                                                             Output

> ⚠️ `If you try to combine a string and a number, Python will give you an error:`





### Print

- **`print`** `statement is often used to output variables.`

  ```js
  name = "Shine Shine"
  print(name)
  ```

  





### Combine both text and a variable

- `To combine both text and a variable, Python uses the` **`+`** `character`

  ```python
  name = "Shine Shine"
  print("name : " + name)
  
  # You can also use the + character to add a variable to another variable`
  x = "Python is "
  y = "awesome"
  z =  x + y
  print(z)
  ```

  ​        ⚠️ ` The `+` character works as a mathematical operator:`







### Combine String and Number

- ⚠️ `If you try to combine a string and a number, Python will give you an error:`

- `We cannot combine strings and numbers `

- `But we can combine strings and numbers by using the `**`format()`** `method`

- `The` **`format()`** `method takes the passed arguments, formats them, and places them in the string where the placeholders`**`{}`** `are`

- **`The format()`** `method takes unlimited number of arguments, and are placed into the respective placeholders`

- `You can use index numbers` **`{0}` **`to be sure the arguments are placed in the correct placeholders`

  ```python
  age = 36
  txt = "My name is John, and I am {}"
  print(txt.format(age))
  
  # takes unlimited number of arguments
  quantity = 3
  itemno = 567
  price = 49.95
  myorder = "I want {} pieces of item {} for {} dollars."
  print(myorder.format(quantity, itemno, price))
  
  # index numbers {0}
  quantity = 3
  itemno = 567
  price = 49.95
  myorder = "I want to pay {2} dollars for {0} pieces of item {1}."
  print(myorder.format(quantity, itemno, price))
  ```

   ⚠️ `Learn more about String Formatting in our` [String Formatting](https://www.w3schools.com/python/python_string_formatting.asp) `chapter.`

  