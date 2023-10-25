## What is a Collection in Laravel?

`In Laravel, a Collection is an object-oriented and fluent interface for working with arrays of data. It provides a convenient way to filter, sort, map, and reduce data without the need for cumbersome loops or conditionals. Collections in Laravel are a wrapper around PHP arrays, providing a higher level of abstraction and a more expressive syntax for working with data. They can be used to manipulate database results, API responses, and any other type of structured data, making them a powerful tool for developers working on web applications with Laravel.`



### List of Laravel Collection Functions

Here's a list of some of the most commonly used [collection functions](https://laravel.com/docs/10.x/collections#available-methods?ref=techvblogs.com) in Laravel:

- all()
- avg()
- chunk()
- collapse()
- combine()
- concat()
- contains()
- count()
- countBy()
- crossJoin()
- diff()
- diffAssoc()
- each()
- every()
- except()
- filter()
- first()
- flatten()
- flip()
- forget()
- forPage()
- get()
- groupBy()
- has()
- implode()
- intersect()
- intersectByKeys()
- isEmpty()
- isNotEmpty()
- keyBy()
- keys()
- last()
- map()
- max()
- median()
- merge()
- min()
- mode()
- nth()
- only()
- partition()
- pipe()
- pluck()
- pop()
- prepend()
- pull()
- push()
- put()
- random()
- reduce()
- reject()
- reverse()
- search()
- shift()
- shuffle()
- slice()
- some()
- sort()
- sortBy()
- sortByDesc()
- splice()
- split()
- sum()
- take()
- tap()
- toArray()
- toJson()
- transform()
- union()
- unique()
- values()
- when()
- where()
- whereBetween()
- whereIn()
- whereInstanceOf()
- whereNotBetween()
- whereNotIn()
- whereNotNull()
- wrap()



### Creating Laravel collections

- `We can create a Laravel collection using two major ways: Using the `collect()` method:`

  ```php
  <?php
  
  // using the collect() helper
  
  public function test_helper_collection(){
      $array = ['Laravel', 'PHP'];
  
      return collect($array);
  }
  ```



###  all()

- `In Laravel Collection, the `all()` method is used to retrieve all the items of the collection as an array. This method can be useful when you want to convert a collection back into a plain PHP array.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([
      ['id' => 1, 'name' => 'John'],
      ['id' => 2, 'name' => 'Jane'],
      ['id' => 3, 'name' => 'Bob']
  ]);
  
  // Retrieve all items as an array
  $array = $collection->all();
  
  // Output the array
  print_r($array);
  ```

  

### avg()

- `Avg method provided by Laravel Collection returns the average value. By default, it will provide an average of all the values in a collection.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([
      ['name' => 'John', 'score' => 80],
      ['name' => 'Jane', 'score' => 90],
      ['name' => 'Bob', 'score' => 70]
  ]);
  
  // Calculate the average score
  $averageScore = $collection->avg('score');
  
  // Output the average score
  echo 'The average score is: ' . $averageScore;
  
  //The average score is: 80
  ```

  

### . each()

- `In Laravel Collection, the `each()` method is used to iterate over the items in the collection and perform a callback function on each item. The purpose of this method is to execute some logic for each item in the collection without modifying the original collection.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([
      ['name' => 'John', 'score' => 80],
      ['name' => 'Jane', 'score' => 90],
      ['name' => 'Bob', 'score' => 70]
  ]);
  
  // Iterate over each item in the collection and output the name
  $collection->each(function ($item, $key) {
      echo $item['name'] . '<br>';
  });
  //output
  John
  Jane
  Bob
  ```

  

### chunk()

- `chunk() method is used to split the Laravel Collection into multiple chunks of a given size.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection with 10 items
  $collection = new Collection([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  
  // Split the collection into chunks of 3 items each
  $chunks = $collection->chunk(3);
  
  // Output each chunk
  $chunks->each(function ($chunk, $key) {
      echo "Chunk $key: " . implode(', ', $chunk->toArray()) . "<br>";
  });
  
  /*
  Chunk 0: 1, 2, 3
  Chunk 1: 4, 5, 6
  Chunk 2: 7, 8, 9
  Chunk 3: 10
  */
  ```

  



### contains()

- `In Laravel Collection, the `contains()` method is used to determine if the collection contains a given item or key-value pair. The method returns `true or false``

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([
      ['name' => 'John', 'score' => 80],
      ['name' => 'Jane', 'score' => 90],
      ['name' => 'Bob', 'score' => 70]
  ]);
  
  // Check if the collection contains an item with score 80
  $containsItem = $collection->contains(function ($item, $key) {
      return $item['score'] === 80;
  });
  
  // Check if the collection contains an item with name 'Alice'
  $containsKeyValue = $collection->contains('name', 'Alice');
  
  // Output the results
  echo 'Contains item with score 80: ' . ($containsItem ? 'Yes' : 'No') . '<br>';
  echo 'Contains key-value pair with name "Alice": ' . ($containsKeyValue ? 'Yes' : 'No');
  
  Contains item with score 80: Yes
  Contains key-value pair with name "Alice": No
  ```

  



### count()

- `The `Count()` method gives the total number of items in the given Laravel Collection.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([1, 2, 3, 4, 5]);
  
  // Get the number of items in the collection
  $count = $collection->count();
  
  // Output the result
  echo "The collection has $count items.";
  ```

  

### countBy()

- `The `countBy()` method gives the count of an item's occurrences in a given Laravel Collection in an array.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection(['apple', 'banana', 'cherry', 'date', 'apple']);
  
  // Get the count of each item in the collection
  $countBy = $collection->countBy();
  
  // Output the result
  foreach ($countBy as $item => $count) {
      echo "$item: $count<br>";
  }
  
  apple: 2
  banana: 1
  cherry: 1
  date: 1
  
  ```



### filter()

- `The `filter()` method is one of the most popular and useful Laravel Collection methods. It allows you to filter your collection using the passed callback function. It returns the new collection with filtered items and does not change the original collection.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([1, 2, 3, 4, 5]);
  
  // Filter the collection to only include even numbers
  $filtered = $collection->filter(function ($item) {
      return $item % 2 == 0;
  });
  
  // Output the result
  foreach ($filtered as $item) {
      echo "$item<br>";
  }
  2
  4
  ```

  

###  get()

- `The `get()` method in Laravel Collection is used to retrieve an item from the collection by its key or index. It returns the value of the item if it exists, or a default value if it does not.`

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([
      'name' => 'John Doe',
      'email' => 'johndoe@example.com',
      'phone' => '555-1234'
  ]);
  
  // Get the value of the 'email' key
  $email = $collection->get('email');
  
  // Get the value of the 'age' key, or a default value if it does not exist
  $age = $collection->get('age', 30);
  
  // Output the results
  echo "Email: $email<br>";
  echo "Age: $age<br>";
  
  Email: johndoe@example.com
  Age: 30
  ```



###  search()

- `The `search()` method in Laravel Collection is used to search the collection for the first occurrence of a given value and return its key. If the value is not found, the method returns `false`.

  ```php
  use Illuminate\Support\Collection;
  
  // Create a new collection
  $collection = new Collection([2, 4, 6, 8, 10]);
  
  // Search for the first occurrence of the value 6
  $key = $collection->search(6);
  
  // Output the result
  echo "Key of 6: $key<br>";
  Key of 6: 2
  ```

  







