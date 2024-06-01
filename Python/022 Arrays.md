## Arrays

- `An array is a special variable, which can hold more than one value at a time.`
- `Python does not have built-in support for Arrays, but` [Python Lists](https://www.w3schools.com/python/python_lists.asp) `can be used instead.`
- `An array can hold many values under a single name, and you can access the values by referring to an index n`umber.





### Create Arrays With Lists

- `Python does not have built-in support for Arrays, but` [Python Lists](https://www.w3schools.com/python/python_lists.asp) `can be used instead.`

  ```python
  cars = ["Ford", "Volvo", "BMW"]
  ```

  





### Access the Elements of an Array

- `You refer to an array element by referring to the index number.`

  ```python
  x = cars[0]
  ```

  



### Adding Array Elements

- `You can use the `**`append()`**` method to add an element to an array.`

  ```python
  cars.append("Honda")
  ```

  





### Removing Array Elements

- `You can use the `**`pop()`** `method to remove an element from the array.`

- `You can also use the `**`remove()`** `method to remove an element from the array.`

  ```python
  cars.pop(1)
  cars.remove("Volvo")
  ```

  







### The Length of an Array

- `Use` the `len()` `method to return the length of an array (the number of elements in an array).`

  ```python
  x = len(cars)
  ```







### Array Methods

- `Python has a set of built-in methods that you can use on lists/arrays.`

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
  | [remove()](https://www.w3schools.com/python/ref_list_remove.asp) | Removes the first item with the specified value              |
  | [reverse()](https://www.w3schools.com/python/ref_list_reverse.asp) | Reverses the order of the list                               |
  | [sort()](https://www.w3schools.com/python/ref_list_sort.asp) | Sorts the list                                               |