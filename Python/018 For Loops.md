## Loops

> `used to repeatedly run a set of instruction while a given condition is true or false`
>
> `Python has two primitive loop commands`
>
> - `For loop`
> - `While loop` 









### For Loops

- `A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).`

- `Even strings are iterable objects, they contain a sequence of characters.`

- `To loop through a set of code a specified number of times, we can use the range() function that range(6) is not the values of 0 to 6, but the values 0 to 5.`

- `The` **`for`** `loop does not require an indexing variable to set beforehand.`

  ```python
  # loop list 
  lst = ["apple", "banana", "cherry"]
  for item in lst:
    print(item)
  # loop tuple  
  tup = ("apple", "banana", "cherry")
  for item in tup:
      print(item)
  # loop set
  st = {"apple", "banana", "cherry"}
  for item in st:
      print(item)
      
  # loop dictionary
  dicti = {'name' : 'Shine','age':23}    
  for item in dicti.values():
      print(item)
        
  # Looping Through a String    
  for x in "banana":
    print(x)
  
  # To loop through a set of code a specified number of times, 
  for x in range(6):
    print(x)
  
  ```





## 

### The break Statement

- `With the break statement we can stop the loop before it has looped through all the items:`

  ```python
  # loop list 
  lst = ["apple", "banana", "cherry"]
  for el in lst:
      print(el)
      if el == 'banana':
         print('stoped!')
         break        
  ```







### The continue Statement

- `With the continue statement we can stop the current iteration of the loop, and continue with the next`

  ```python
  fruits = ["apple", "banana", "cherry"]
  for x in fruits:
    if x == "banana": #stop curren match loop
      continue #continue next`
    print(x)
  ```

  







### Else in For Loop

-  **`else`** `keyword in a `**`for`** `loop specifies a block of code to be executed when the loop is finished`

  ```python
  # loop dictionary
  dicti = {'name' : 'Shine','age':23}    
  for item in dicti.values():
      print(item)
  else:
      print('finished!')
  ```

  







### The pass Statement

- `just like` **`if`** ``statements` **`for`** `loops cannot be empty, but if you for some reason have a for loop with no content, put in the `**`pass`**`statement to avoid getting an error.`

  ```python
  dicti = {'name' : 'Shine','age':23}    
  for item in dicti.values():
      pass
  ```

  







### Nested Loops

- `A nested loop is a loop inside a loop.`

- `The "inner loop" will be executed one time for each iteration of the "outer loop"`

  ```python
  num = [1, 2, 3]
  str = ["One", "Three", "Four"]
  
  for n in num:
    for s in str: # inner loop
      print(n,s)
  ```

  