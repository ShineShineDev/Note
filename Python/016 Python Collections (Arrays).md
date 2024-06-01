## Python Collections (Arrays)

- `There are four collection data types in the Python programming language`
- `When choosing a collection type, it is useful to understand the properties of that type. Choosing the right type for a particular data set could mean retention of meaning, and, it could mean an increase in efficiency or security.`

- **[List](https://www.w3schools.com/python/python_lists.asp)** `is a collection which is ordered and changeable. Allows duplicate members.`
- **[Tuple](https://www.w3schools.com/python/python_tuples.asp)**` is a collection which is ordered and unchangeable. Allows duplicate members.`
- **[Set](https://www.w3schools.com/python/python_sets.asp)** `is a collection which is unordered and unindexed. No duplicate members.`
- **Dictionary** `is a collection which is unordered and changeable. No duplicate members.`







### Create

- **`Lists`** `are created using` **`square brackets`**.`List items are` **`any data type,ordered, changeable, and allow duplicate values.`**

- **`Tuples`** `are written with` **`round brackets`**.`Tuple are` **`different data types, ordered , unchangeable, and allow duplicate values.`**

- **`Sets`** `are written with` **`curly brackets.`**`Set`** `items are` **`unordered, unchangeable, and do not allow duplicate values.`**

- **`Dictionaries`** `are written with curly brackets key:value pairs. Dictionary items are` **`any data type,ordered, changeable, and does not allow duplicates.`**

  ```python
  #list
  lst = ['one',2,'three',True]
  print(type(lst))
  
  # tuple
  tup = ('one',2,'three',True)
  print(type(tup))
  
  # set
  st = {'one',2,'three'}
  print(type(st))
  
  #dictionary
  dic = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  print(type(dic))
  ```

  

### 

### Access

- **`List`** `items are indexed and you can access them by referring to the` **`index number inside square brackets`**

- **`Tuple`**`are indexed and You can access tuple items by referring to` **`the index number, inside round brackets`**

- **`Set cannot access items`** in a set **`by referring to an index.`**`But you can` **`loop `** `hrough the set items using a`**`for loop`.**

- **`Dictionay`**` can` **`access`** `the items of a dictionary by referring to` **`its key name, inside square brackets`**

  ```python
  lst = ['one',2,True,'Four']
  print(lst[0])
  
  tup = ('one',2,True,'Four')
  print(tup[1])
  
  st = {'one',2,True,'four'}
  for el in st:
     print(el)
      
      
  dic = {'name' : 'shine','age':23,'work' : 'developer'}    
  print(dic['name'])
  ```

  



### Add

- `To add an item to the end of the` **`list`**, `use the` **`append() method`**.`To insert a list item at a specified index, use the ` **`insert() method.`**

- `Once a` **`tuple`** `is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called.But You can convert the tuple into a list, change the list, and convert the list back into a tuple.`

- `Once a` **`set`**` is created, you cannot change its items, but you can add new items with `**`add()`** `method.`

  ```python
  #list
  lst = ['one',2]
  lst.append(True)
  lst.insert(2,'Three')
  print(lst) # ['one', 2, 'Three', True]
  
  #tuple
  tup = ('one',1,'three')
  #create list value from tuple
  lst = list(tup)
  #update list value 
  lst[0] = 'Two'
  # reassing tuple value
  tup = (lst)
  print(tup)
  
  #set
  st = {1,'two','Three'}
  st.add('Four')
  print(st) # {1, 'Three', 'two', 'Four'}
  
  #dictionary
  
  ```

  



### Remove



### Update



### Loop

