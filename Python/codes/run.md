## Python









### Print to screen

```python
str = 'String'
num = 2
print(str)
print(str,num)

print(10 > 9) # True
```







### Comment

- `Python use # smybol for comment`

  ```python
  #this is a comment
  """
  this multi line comments
  """
  ```







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

  ```python
  x = 5
  # check type
  print(type(x)) 
  
  #Type Conversion 
  flt = float(x) # int to float
  ```

  :warning: `You can get the data type of any object by using the `**`type()`** `function`

  :warning: `You can convert from one type to another with the `**`int(), float(), and complex()`**` `methods`







###  Variables

```python
str1 = 'shine shine' #string
#mutiline string
str2 = """
mutiline string
"""
num = 1 #int
flt = 2.2 #float
bol = True #boolean
#Complex 
x = 3+5j  #Complex numbers are written with a "j" as the imaginary part

#Many Values to Multiple Variables
x, y, z = "Orange", "Banana", "Cherry"

#One Value to Multiple Variables
x = y = z = "Orange"

#lenght of variables
print(len(str1))
```







### List 

- `Python Lists are similar Js Array `

- `List items are ordered, changeable, any data type,and allow duplicate values.`

  ```python
  list = [1,'two',3,False,2.3,3] 
  
  x, y, z = list
  
  #Access List Items
  print(list[0]);
  
  #update value
  list[0] = "one"
  
  #Add List Item (append('val'),insert(index,'val'),lst.extend(list))
  list.append("orange") 
  
  #Remove List Items (remove(),pop(),del,clear())
  list.remove('two')
  list.pop() #lasted index
  list.pop(1) #specified index
  
  
  #loop
  for el in list :
     print(el)
  
  ```







### Tuple

- `Tuple items are  different data types, ordered (the items have a defined order, and that order will not change.), unchangeable, and allow duplicate values.`

  ```python
  tup1 = ('one',2,'three','one')
  tup2 = ("apple",)
  nottup = ("apple") # not tupel
  
  #Access Tuple Items
  #can access tuple items by referring to the index number, inside square brackets
  print(tup1[0])
  
  #update list value 
  #Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called
  #But You can convert the tuple into a list, change the list, and convert the list back into a tuple
  #create tuple
  tup = ('one',1,'three')
  #create list value from tuple
  list = list(tup)
  #update list value 
  list[0] = 'Two'
  #reassing tuple value
  tup = (lst)
  
  
  #length of tuple
  print(len(tup1))
  ```

  





### Set

- `Set items are any data typ,unordered, unchangeable, and do not allow duplicate values.`

  ```python
  st = {'dev',1,'programger',true}
  
  #Access List Items
  
  
  #update value
  
  
  #Add List Items
  
  ```

  

  

  

  

  

Looping Through a String

```python
a = "Hello, World!" 
print(a[1]) # access elements of the string with square bracket

for x in "banana": 
  print(x)
```



if "apple" in x:
    print("Yes, 'apple' is in the fruits list")



### Built-in Method

```python
#String Method
#https://www.w3schools.com/python/ref_string_capitalize.asp
str = 'String Variable'
str.upppercase()

# List Method
#https://www.w3schools.com/python/ref_list_append.asp
list = ["orange", "mango", "kiwi"]
list.sort()
```







