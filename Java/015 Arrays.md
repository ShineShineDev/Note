## Arrays

- `Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.`



### Create Array

- `To declare an array, define the variable type with` **`square brackets`**

  ```java
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  ```



### Access the Elements of an Array

- `You can access an array element by referring to the index number.`

  ```java
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  System.out.println(cars[0]);
  ```

  

### Change an Array Element

- `To change the value of a specific element, refer to the index number`

  ```java
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  cars[0] = "Opel";
  ```

  

### Array Length

- `To find out how many elements an array has, use the `**`length`** `property`

  ```java
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  System.out.println(cars.length);
  // Outputs 4
  ```



###  Arrays Loop

- `use the `length` property to specify how many times the loop should run.`

  ```java
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  for (int i = 0; i < cars.length; i++) {
    System.out.println(cars[i]);
  }
  
  String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
  for (String i : cars) {
    System.out.println(i);
  }
  ```

  

### Multi-Dimensional Arrays

- `A multidimensional array is an array of arrays.`

- `Multidimensional arrays are useful when you want to store data as a tabular form, like a table with rows and columns.`

- `To create a two-dimensional array, add each array within its own set of` **`curly braces`**

  ```java
  int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
  System.out.println(myNumbers[1][2]); // Outputs 7
  
  myNumbers[1][2] = 9;
  System.out.println(myNumbers[1][2]); // Outputs 9 instead of 7
  
  //Loop Through a Multi-Dimensional Array
  int[][] myNumbers = { {1, 2, 3, 4}, {5, 6, 7} };
  for (int i = 0; i < myNumbers.length; ++i) {
      for(int j = 0; j < myNumbers[i].length; ++j) {
          System.out.println(myNumbers[i][j]);
      }
  }
  ```
  



