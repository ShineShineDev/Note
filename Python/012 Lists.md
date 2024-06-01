##                                                        Lists 

> `Python Lists are similar Js Array `
>
> `Lists are used to store multiple items in a single variable.`
>
> `Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are `[Tuple](https://www.w3schools.com/python/python_tuples.asp), [Set](https://www.w3schools.com/python/python_sets.asp), `and` [Dictionary](https://www.w3schools.com/python/python_dictionaries.asp), `all with different qualities and usage.`





### Create Lists

- `Lists are created using square brackets`

- `List items are ordered, changeable, and allow duplicate values.`

- `List items can be of any data type`

  ```python
  # duplicate 
  list1 =  ["apple", "banana", "cherry", "apple", "cherry"]
  print(list1)
  
  # any data type
  list2 = ["abc", 34, True, 40, "male"]
  
  # It is also possible to use the list() constructor when creating a new list.
  list3 = list(("apple", "banana", "cherry")) # note the double round-brackets
  ```

  




###  Access List Items

- `List items are indexed and you can access them by referring to the index number inside square brackets`

- `List items are indexed, the first item has index` `[0]`, `the second item has index` `[1]`  `etc.`

  ```python
  thislist = ["apple", "banana", "cherry"]
  print(thislist[1])
  
  # Negative indexing 
  # -1 refers to the last item, -2 refers to the second last item etc.
  thislist = ["apple", "banana", "cherry"]
  print(thislist[-1])
  
  # Range of Indexes
  # You can specify a range of indexes by specifying where to start and where to end the range.
  thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
  print(thislist[2:5])
  
  
  # Check if Item Exists
    x = ["apple", "banana", "cherry"]
    if "apple" in x:
      print("Yes, 'apple' is in the fruits list")
  
  ```







###  Change List Items

- `To change the value of a specific item, refer to the index number`

  ```python
    
    num = [1, 2, 3, 4]
    num[0] = 0
    # [0, 2, 3, 4]
    
    # Change a Range of Item Values
    # To change the value of items within a specific range, define a list with the new values, and refer to the range of index numbers where you want to insert the new values:
    thislist = ["apple", "banana", "cherry", "orange", "kiwi", "mango"]
    thislist[1:3] = ["blackcurrant", "watermelon"]
    print(thislist)
    
    # https://www.w3schools.com/python/trypython.asp?filename=demo_list_change2
    
    # Insert Items
    # To insert a new list item, without replacing any of the existing values, we can use the insert() method.
    # The insert() method inserts an item at the specified index:
    thislist = ["apple", "banana", "cherry"]
    thislist.insert(2, "watermelon")
    print(thislist)
  ```

  





###  Add List Items

- `To add an item to the end of the list, use the` **`append() method`**

- `To insert a list item at a specified index, use the ` **`insert() method.`**

- `To append elements from another list to the current list, use the` **`extend()`** `method.`

-  **`extend() `**`method does not have to append lists, you can add any iterable object (tuples, sets, dictionaries etc.).`

  ```python
  # append
  x = ["apple", "banana", "cherry"]
  x.append("orange")
  print(x)
  
  # insert
  x.insert(0, "watermelon")
  print(x)
  
  # Extend List (similar js concat())
  x = ["apple", "banana", "cherry"]
  y = ["mango", "pineapple", "papaya"]
  x.extend(y)
  print(x)
  
  # extend or concat list with tuple
  list = ["apple", "banana", "cherry"]
  tuple = ("kiwi", "orange")
  list.extend(tuple)
  print(list)
  ```

  





###  Remove List Items

- **`remove()`** `method removes the specified item.`

- **`pop()`** `method removes the specified index.If you do not specify the index, the `**`pop()`** `method removes the last item.`

- **`del`** `keyword also removes the specified index.The` **`del`** `keyword can also delete the list completely.`

- **`clear()`** `method empties the list.The list still remains, but it has no content.`

  ```python
  # remove
  thislist = ["apple", "banana", "cherry"]
  thislist.remove("banana")
  
  #pop
  thislist = ["apple", "banana", "cherry"]
  thislist.pop(1)
  
  # del keyword
  thislist = ["apple", "banana", "cherry"]
  del thislist[0]
  
  # clear
  thislist = ["apple", "banana", "cherry"]
  thislist.clear()
  ```

  





###  Loop Lists

- `You can loop through the list items by using a `**`for`** `loop:`

- `You can also loop through the list items by using a `**`while`** `loop.`

- `List Comprehension offers the shortest syntax for looping through lists`

  - `For loop`

    ```python
    # for loop
    lst = ['one','tow','three'];
    for el in lst :
       print(el)
    
    # for i in range(len(lst)):
    #  print(lst[i])
    
    ```

  - `While loop`

    ```python
    lst = ["four", "five", "six"]
    
    i = 0
    
    while i < len(lst):
      print(lst[i])
    i = i + 1
    ```

  - `Looping Using List Comprehension`

    - `List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.`
  
      ```js
      lst = ['One',2,'Three'];
      [print(el) for el in lst]
      
      
      fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
      newlist = [x for x in fruits]
    print(newlist)
      ```
  
      



### Sort Lists

- `List objects have a `**`sort()`** `method that will sort the list alphanumerically, ascending, by default:`

- `To sort descending, use the keyword argument reverse = True`:`

- `The reverse() method reverses the current sorting order of the elements.`

  ```python
  # Sort the list alphabetically ascending, by default:
  thislist = ["orange", "mango", "kiwi", "pineapple", "banana"]
  thislist.sort()
  print(thislist)
  
  # descending
  thislist.sort(reverse = True)
  print(thislist)
  # reverse
  thislist.reverse()
  print(thislist)
  ```

  





### Copy a List

- `You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to `list1`, and changes made in `list1` will automatically also be made in `list2`.

- `There are ways to make a copy, one way is to use the built-in List method `copy().`

  ```python
  # copy with copy() method
  thislist = ["apple", "banana", "cherry"]
  mylist = thislist.copy()
  print(mylist)
  
  #  copy with list() method
  mylist = list(thislist)
  print(mylist)
  ```

  





### Join Lists

- `+ operator can use join, or concatenate, two or more lists in Python.`

- `You can use the extend() method, which purpose is to add elements from one list to another list:`

- `You can also use the append() method to join list`

  ```python
  # join with + operator
  list1 = ["a", "b", "c"]
  list2 = [1, 2, 3]
  list3 = list1 + list2
  print(list3)
  
  # join with extend() method
  list1 = ["a", "b" , "c"]
  list2 = [1, 2, 3]
  list1.extend(list2)
  print(list1)
  
  #  one by one join with append
  list1 = ["a", "b" , "c"]
  list2 = [1, 2, 3]
  for x in list2:
    list1.append(x)
  print(list1)
  ```

  





### List Methods

- `Python has a set of built-in methods that you can use on lists.`

  | Method                                                       | Description                                                  |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [append()](https://www.w3schools.com/python/ref_list_append.asp) | Adds an element at the end of the list                       |
  | [clear()](https://www.w3schools.com/python/ref_list_clear.asp) | Removes all the elements from the list                       |
  | [copy()](https://www.w3schools.com/python/ref_list_copy.asp) | Returns a copy of the list                                   |
  | [count()](https://www.w3schools.com/python/ref_list_count.asp) | Returns the number of elements with the specified value      |
  | [extend()](https://www.w3schools.com/python/ref_list_extend.asp) | Add the elements of a list (or any iterable), to the end of the current list |
  | [index()](https://www.w3schools.com/python/ref_list_index.asp) | Returns the index of the first element with the specified value |
  | [insert()](https://www.w3schools.com/python/ref_list_insert.asp) | Adds an element at the specified position                    |
  | [pop()](https://www.w3schools.com/python/ref_list_pop.asp)   | Removes the element at the specified position                |
  | [remove()](https://www.w3schools.com/python/ref_list_remove.asp) | Removes the item with the specified value                    |
  | [reverse()](https://www.w3schools.com/python/ref_list_reverse.asp) | Reverses the order of the list                               |
  | [sort()](https://www.w3schools.com/python/ref_list_sort.asp) | Sorts the list                                               |











## Python Collections (Arrays)

> `There are four collection data types in the Python programming language:`

- **List** `is a collection which is ordered and changeable. Allows duplicate members.`
- **[Tuple](https://www.w3schools.com/python/python_tuples.asp)**` is a collection which is ordered and unchangeable. Allows duplicate members.`
- **[Set](https://www.w3schools.com/python/python_sets.asp)** `is a collection which is unordered and unindexed. No duplicate members.`
- **[Dictionary](https://www.w3schools.com/python/python_dictionaries.asp)** `is a collection which is ordered* and changeable. No duplicate members.`



`⚠️ As of Python version 3.7, dictionaries are "ordered". In Python 3.6 and earlier, dictionaries are "unordered".`