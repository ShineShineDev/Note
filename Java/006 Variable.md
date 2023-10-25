## Variable


- `As a program runs, it needs to hold information in its memory. `

- `Variables allow us to store, change and access`

- `In Java, there are different **types** of variables, for example:`

  - `String` -` stores text, such as "Hello". String values are surrounded by double quotes`
  - `int` - `stores integers (whole numbers), without decimals, such as 123 or -123`
  - `float` - `stores floating point numbers, with decimals, such as 19.99 or -19.99`
  - `char` -` stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes`
  - `boolean` - `stores values with two states: true or false`

  

### Creating Variables

- `To create a variable, you must specify the type and assign it a value:`

  ```java
  int myNum = 5;
  float myFloatNum = 5.99f;
  char myLetter = 'D';
  boolean myBool = true;
  String myText = "Hello";
  
  ```

> `myNum also can call` **`identified`**



### Declare a variable 

- `You can also declare a variable without assigning the value, and assign the value later`

- `To declare more than one variable of the same type, you can use a comma-separated list`

  ```java
  int myNum;
  myNum = 15;
  System.out.println(myNum)
      
  //if you assign a new value to an existing variable, it will overwrite the previous value:    
  int myNum = 15;
  myNum = 20;  // myNum is now 20
  System.out.println(myNum);    
  
  //To declare more than one variable of the same type, you can use a comma-separated list:
  int x = 5, y = 6, z = 50
  ```
  
  



### Final Variables

- `If you don't want others (or yourself) to overwrite existing values, use the final keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only)`

  ```java
  final int myNum = 15;
  myNum = 20;  // will generate an error: cannot assign a value to a final variable
  ```

  



### Concat(combine) Variables 

-  `To combine both text and a variable, use the + character`

- `You can also use the + character to add a variable to another variable`

- `The + character works as a mathematical operator (notice that we use int (integer) variables here)`

  ```java
  String name = "John";
  System.out.println("Hello " + name);
  
  String firstName = "John ";
  String lastName = "Doe";
  String fullName = firstName + lastName;
  System.out.println(fullName);
  
  int x = 5;
  int y = 6;
  System.out.println(x + y); // Print the value of x + y
  ```

  

### One Value to Multiple Variables

- `You can also assign the **same value** to multiple variables in one line:`

  ```java
  int x, y, z;
  x = y = z = 50;
  System.out.println(x + y + z);
  ```

  





### Name Convenstion

> `The general rules for naming variables are:`

- `Names can contain letters, digits, underscores, and dollar signs`

- `Names must begin with a letter`

- `Names should start with a lowercase letter and it cannot contain whitespace`

- `Names can also begin with $ and _ (but we will not use it in this tutorial)`

- `Names are case sensitive ("myVar" and "myvar" are different variables)`

- `Reserved words (like Java keywords, such as int or boolean) cannot be used as names`

  
