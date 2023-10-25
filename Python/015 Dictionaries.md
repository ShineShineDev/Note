## Python Dictionaries

- `Dictionaries are used to store data values in key:value pairs.`
- `Dictionary items are any data type,ordered, changeable, and does not allow duplicates.`
- `As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.`
- `Dictionary items are presented in key:value pairs, and can be referred to by using the key name.`
- **⚠️** **`Python Dictioaries are smilar JSON Object`**





### Create Dictionaries

- `Dictionaries are written with curly brackets key:value pairs `

  ```python
user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  print(user)
  ```
  







### Dictionary Length

- `To determine how many items a dictionary has, use the len() function`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  print(len(user))
  ```







### Access Dictionary Items

- `You can access the items of a dictionary by referring to its key name, inside square brackets:`

- `There is also a method called get() that will give you the same result`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  
  print(user['name'])
  #Shine Shine
  
  print(user.get('age'))
  #23
  
  ```

  





### Get Keys

- `The keys() method will return a list of all the keys in the dictionary.`

- `The list of the keys is a` **`view of the dictionary`**, `meaning that any changes done to the dictionary will be reflected in the keys list.`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  
  key = user.keys()
  print(key) #before the change
  # dict_keys(['name', 'age', 'work'])
  
  user['isSingle'] = True
  
  print(key) #after the change
  #dict_keys(['name', 'age', 'work', 'isSingle'])
  ```

  







### Get Values

- `The values() method will return a list of all the values in the dictionary.`

- `The list of the values is a` **`view of the dictionary`**,` meaning that any changes done to the dictionary will be reflected in the values list.`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  val = user.values()
  print(val) #before the change
  # dict_values(['Shine Shine','23', 'Developer'])
  
  user['isSingle'] = True
  print(val) #after the change
  #dict_values(['Shine Shine', 23, 'Developer', True])
  ```

  







### Get Items

- `The items() method will return each item in a dictionary, as tuples in a list.`

- `The returned list is a` **`view of the items of the dictionary`**, `meaning that any changes done to the dictionary will be reflected in the items list.`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  item = user.items()
  print(item) #before the change 
  
  user['age'] = 20
  user['isSingle'] = True
  print(item) #after the change
  
  #dict_items([('name', 'Shine Shine'), ('age', 23), ('work', 'Developer')])
  #dict_items([('name', 'Shine Shine'), ('age', 20), ('work', 'Developer'), ('isSingle', True)])
  ```

  







### Change Dictionary Items

- `You can change the value of a specific item by referring to its key name`

- `The update() method will update the dictionary with the items from the given argument.The argument must be a dictionary, or an iterable object with key:value pairs.`

  ```python
  thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
  }
  thisdict["year"] = 2018
  thisdict.update({"brand": 'Toyota'})
  print(thisdict)
  ```

  







###  Remove Dictionary Items

- `There are several methods to remove items from a dictionary`

- **` pop()`** `method removes the item with the specified key name`

- **`popitem()`** method removes the last inserted item (in versions before 3.7, a random item is removed instead)`

-  **`del`** `keyword removes the item with the specified key name`

- **`clear()`** `method will remove all the dictionary item`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  user.pop('name')
  user.popitem()
  print(user)
  
  user.clear()
  
  del user  # this will cause an error because "thisdict" no longer exists.
  print(user)
  ```

  







### Loop Dictionaries

- `You can loop through a dictionary by using a` **`for loop`**.`When looping through a dictionary, the return value are the` **`keys`** `of the dictionary, but there are methods to return the` **values`** `as well.`

- `If You want to keys you can use` **`keys()`** `method `

- `If You want to get vlaues you can use` **`values()`** `method `

- `If You want to get vlaues and key you can use` **`items()`** `method `

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  # Print all key 
  for key in user:
     print(val)
  
  # Print all  vlaue
  for key in user:
     print(user[key])
  
  # use the keys() to return keys
  for key in user.keys():
      print(key)
      
  # use the values() to return values
  for val in user.values():
      print(val)
  
  for key,val in user.items():
     print(key)
     print(val)
  ```

  









### Copy Dictionaries

- You cannot copy a dictionary simply by typing `dict2 = dict1`, because: `dict2` will only be a *reference* to `dict1`, and changes made in `dict1` will automatically also be made in `dict2`.

- `To make a copy, ww can use the built-in Dictionary method copy() and dict()`

  ```python
  user = {
      'name' : 'Shine Shine',
      'age' : 23,
      'work' : 'Developer',
  }
  user1 = user.copy()
  print(user1)
  
  user2 = dict(user1)
  print(user2)
  ```









###  Nested Dictionaries

- `A dictionary can contain dictionaries, this is called nested dictionaries.`

  ```python
  post = {
   "post1" : {
    "title" : "one",
    "posted" : 2004,
    "comments" : {
        'comment1' : 'Nice',
        'comment2' : 'good post'
    }
     
   },
   "post2" : {
    "title" : "two",
    "posted" : 2007
   },
   "post3" : {
    "title" : "three",
    "posted" : 2011
   }
  }
  print(post)
  ```













### Check if Key Exists

- `To determine if a specified key is present in a dictionary use the `**`in`** `keyword``

  ```python
  thisdict = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
  }
  if "model" in thisdict:
    print("Yes, 'model' is one of the keys in the thisdict dictionary")
  ```

  







### Dictionary Methods

- `Python has a set of built-in methods that you can use on dictionaries.`

  | Method                                                       | Description                                                  |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [clear()](https://www.w3schools.com/python/ref_dictionary_clear.asp) | Removes all the elements from the dictionary                 |
  | [copy()](https://www.w3schools.com/python/ref_dictionary_copy.asp) | Returns a copy of the dictionary                             |
  | [fromkeys()](https://www.w3schools.com/python/ref_dictionary_fromkeys.asp) | Returns a dictionary with the specified keys and value       |
  | [get()](https://www.w3schools.com/python/ref_dictionary_get.asp) | Returns the value of the specified key                       |
  | [items()](https://www.w3schools.com/python/ref_dictionary_items.asp) | Returns a list containing a tuple for each key value pair    |
  | [keys()](https://www.w3schools.com/python/ref_dictionary_keys.asp) | Returns a list containing the dictionary's keys              |
  | [pop()](https://www.w3schools.com/python/ref_dictionary_pop.asp) | Removes the element with the specified key                   |
  | [popitem()](https://www.w3schools.com/python/ref_dictionary_popitem.asp) | Removes the last inserted key-value pair                     |
  | [setdefault()](https://www.w3schools.com/python/ref_dictionary_setdefault.asp) | Returns the value of the specified key. If the key does not exist: insert the key, with the specified value |
  | [update()](https://www.w3schools.com/python/ref_dictionary_update.asp) | Updates the dictionary with the specified key-value pairs    |
  | [values()](https://www.w3schools.com/python/ref_dictionary_values.asp) | Returns a list of all the values in the dictionary           |