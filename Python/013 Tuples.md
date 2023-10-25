## Tuples                                                              

- `Tuples are used to store multiple items in a single variable.`
- `A tuple is a collection which is` **`ordered and unchangeable`**.
- `Tuple items are  different data types, ordered (the items have a defined order, and that order will not change.), unchangeable, and allow duplicate values.`





### Create Tuple

- `Tuples are written with round brackets (When we create a tuple, we normally assign values to it. This is called "packing" a tuple:).`

- `You can also use the tuple() method to make a tuple`

- `⚠️ To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.`

  ```python
  tup = ('one',2,'three','one')
  print(tup)
  
  tup = ("apple",)
  print(type(tup))
  
  #NOT a tuple
  tup = ("apple")
  print(type(tup))
  
  # create tuple with  tuple() method 
  thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
  print(thistuple)
  ```







### Tuple Length

- `To determine how many items a tuple has, use the len() function:`

  ```python
  tup = ("apple", "banana", "cherry")
  print(len(tup))
  ```

  





###  Access Tuple Items

- `You can access tuple items by referring to the index number, inside square brackets:`

- `Negative indexing means start from the end`

- `You can specify a range of indexes by specifying where to start and where to end the range.When specifying a range, the return value will be a new tuple with the specified items.`

  ```python
  thistuple = ("apple", "banana", "cherry")
  print(thistuple[1])
  
  # access Negative indexing 
  # Negative indexing means start from the end.
  thistuple = ("apple", "banana", "cherry")
  print(thistuple[-1])
  
  # access with range of indexes
  thistuple = ("apple", "banana", "cherry", "orange", "kiwi", "melon", "mango")
  print(thistuple[2:5])
  ```

  





### Update Tuples

- `Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called.`

- `But You can convert the tuple into a list, change the list, and convert the list back into a tuple.`

  ```python
  #create tuple
  tup = ('one',1,'three')
  
  #create list value from tuple
  lst = list(tup)
  
  print(lst)
  
  #update list value 
  lst[0] = 'Two'
  
  # reassing tuple value
  tup = (lst)
  print(tup)
  
  ```

  

  





### Unpacking a Tuple

- `When we create a tuple, we normally assign values to it. This is called "packing" a tuple:`

- `But, in Python, we are also allowed to extract the values back into variables. This is called "unpacking"(similar js es6 destructuring assignment)`

- `⚠️The number of variables must match the number of values in the tuple`

- `If the number of variables is less than the number of values, you can add an  to the variable name and the values will be assigned to the variable as a list`

  ```python
  tup = (1,2,3);
  one,two,three = tup
  
  print(one + two + three)
  
  #Using Asterisk*
  fruits = ("apple", "banana", "cherry", "strawberry", "raspberry")
  
  (green, yellow, *red) = fruits
  
  print(green)
  print(yellow)
  print(red)
  ```

  





### Loop Tuples

- `You can loop through the tuple items by using a for loop.`

- `You can loop through the list items by using a while loop.`

  ```python
  tup = ('one','two','three')
  for el in tup :
      print(el)
  
      
  i = 0
  while i < len(tup):
    print(tup[i])
    i = i + 1    
      
      
  # Loop Through the Index Numbers
  for i in range(len(tup)):
    print(tup[i])
  ```

  

  

  



### Join Tuples

- `To join two or more tuples you can use the + operator`

- `If you want to multiply the content of a tuple a given number of times, you can use the * operator`

  

  ```python
  tuple1 = ("a", "b" , "c")
  tuple2 = (1, 2, 3)
  tuple3 = ('shine', 'dev', 'programger')
  
  tuple4 = tuple1 + tuple2 + tuple3
  print(tuple4)
  
  
  tuple5 = tuple1 * 2
  print(tuple5)
  ```

  





### Check if Item Exists

- `To determine if a specified item is present in a tuple use the in keyword:`

  ```python
  thistuple = ("apple", "banana", "cherry")
  if "apple" in thistuple:
   print("Yes, 'apple' is in the fruits tuple")
  ```

  





### Tuple Methods

- `Python has two built-in methods that you can use on tuples.`

  | Method                                                       | Description                                                  |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [count()](https://www.w3schools.com/python/ref_tuple_count.asp) | Returns the number of times a specified value occurs in a tuple |
  | [index()](https://www.w3schools.com/python/ref_tuple_index.asp) | Searches the tuple for a specified value and returns the position of where it was found |





