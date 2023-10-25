## Java Data Types

- `Data types are divided into two groups:`
	- `Primitive data types - includes byte`, `short`, `int`, `long`, `float`, `double`, `boolean` and `char`
	- `Non-primitive data types` - `such as String, Arrays and Classes`



### Primitive Data Types

> `Primitive Data Types အသီးသီိးတွင် သူတို့ကိုပိုင် သီးခြား   Literal (ဉပမာ size )များရှိကြသည် `

- `A primitive data type specifies the size and type of variable values, and it has no additional methods.`

- `There are eight primitive data types in Java:`

  | Data Type | Size    | Description                                                  |
  | :-------- | :------ | :----------------------------------------------------------- |
  | `byte`    | 1 byte  | Stores whole numbers from -128 to 127                        |
  | `short`   | 2 bytes | Stores whole numbers from -32,768 to 32,767                  |
  | `int`     | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647    |
  | `long`    | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 |
  | `float`   | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits |
  | `double`  | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits |
  | `boolean` | 1 bit   | Stores true or false values                                  |
  | `char`    | 2 bytes | Stores a single character/letter or ASCII values             |



### Numbers

- `Primitive number types are divided into two groups:`

  - **Integer types** `stores whole numbers, positive or negative (such as 123 or -456), without decimals. Valid types are `byte`, `short`, `int` and `long`. Which type you should use, depends on the numeric value.`
  - **`Floating point types`** `represents numbers with a fractional part, containing one or more decimals. There are two types: float` and `double`.

  

  #### Byte

  - `The byte data type can store whole numbers from -128 to 127. This can be used instead of int or other integer types to save memory when you are certain that the value will be within -128 and 127:`

  ```java
  byte myNum = 100;
  System.out.println(myNum);
  ```

  ### Short

  - `The short data type can store whole numbers from -32768 to 32767:`

    ```java
    short myNum = 5000;
    System.out.println(myNum);
    ```

  ### Int

  - `The int data type can store whole numbers from -2147483648 to 2147483647. In general, and in our tutorial, the `int` data type is the preferred data type when we create variables with a numeric value.`

    ```java
    int myNum = 100000;
    System.out.println(myNum);
    ```

  ### Long

  - `The `long` data type can store whole numbers from -9223372036854775808 to 9223372036854775807. This is used when int is not large enough to store the value. Note that you should end the value with an "L":`

    ```java
    long myNum = 15000000000L;
    System.out.println(myNum);
    ```

  ### float

  - `To store decimal value we can use float data type`

  - `float data types can store fractional numbers.`

  - `The precision of float is only six or seven decimal digits`

  - ` You should end the value with an "f" for floats`

    ```java
    float myNum = 5.75f;
    System.out.println(myNum);	
    ```

  ### Double

  - `To store decimal value we can  also use double data type for more safer calculations `

  - `double data types can store fractional numbers.` 

  - `double variables have a precision of about 15 digits. Therefore it is safer to use `double` for most calculations.`

  - ` You should end the value with an "d" for double`

    ```java
    double myNum = 19.99d;
    System.out.println(myNum);
    ```



### Boolean

- `Java has a `boolean` data type, which can only take the values `true` or `false`

- `Boolean values are mostly used for conditional testing.`

  ```java
  boolean isJavaFun = true;
  boolean isFishTasty = false;
  System.out.println(isJavaFun);     // Outputs true
  System.out.println(isFishTasty);   // Outputs false
  ```

  

### Characters

- `The `char` data type is used to store a **single** character. The character must be surrounded by single quotes, like 'A' or 'c':`

  ```java
  char myGrade = 'B';
  System.out.println(myGrade);
  
  // with ASCII values, 
  char myVar1 = 65, myVar2 = 66, myVar3 = 67;
  System.out.println(myVar1);
  System.out.println(myVar2);
  System.out.println(myVar3);
  ```

  

### Strings

- `The `String` data type is used to store a sequence of characters (text). String values must be surrounded by double quotes:`

  ```java
  String greeting = "Hello World";
  System.out.println(greeting);
  ```

  > `A String in Java is actually a **non-primitive** data type, because it refers to an object. The String object has methods that are used to perform certain operations on strings.`





### Non- Primitive Data Types

> `Primitive Data Types အသီးသီိးတွင် သူတို့ကိုပိုင် သီးခြား   Literal (ဉပမာ size,value )များရှိကြပေမဲ့  Non-Primitive Types(Reference types) မှာတော့ null  Literal တစ်ခုပဲရှိကြတယ် `

- `Non-primitive data types are called` **`reference types`** `because they refer to objects.`





### Primitive Data Types Vs Non-Primitive Data Types(Reference types)

- `The main difference between` **`primitive`** and **`non-primitive`** `data types are:`
  - `Primitive types are predefined (already defined) in Java. Non-primitive types are created by the programmer and is not defined by Java (except for `String`).
  
  - `Non-primitive types can be used to call methods to perform certain operations, while primitive types cannot.`
  
  - `A primitive type has always a value, while non-primitive types can be `null`.`
  
  - `A primitive type starts with a lowercase letter, while non-primitive types starts with an uppercase letter.`
  - `Examples of non-primitive types are` [Strings](https://www.w3schools.com/java/java_strings.asp), [Arrays](https://www.w3schools.com/java/java_arrays.asp), [Classes, ](https://www.w3schools.com/java/java_classes.asp)[Interface](https://www.w3schools.com/java/java_interface.asp), etc

