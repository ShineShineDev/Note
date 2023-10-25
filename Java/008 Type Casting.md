## Type Casting(conversion)

> `Type casting is *when you assign a value of` **`one data type to another type*.`**
>
> `In computer science, type conversion, type casting, type coercion, and type juggling are different ways of changing an expression from` **`one data type to another`**. `An example would be the conversion of an integer value into a floating point value or its textual representation as a string, and vice versa.`



### Type Casting In Java

- `In Java there are two types of casting`
  - **`Widening Casting or Implicit Casting (automatically)`**  -  `converting a` **`smaller type to a larger type size`**
    byte ->short  -> char -> int -> long -> float -> double`
    - **Narrowing Casting or Explicit Casting (manually) ** - `converting a` **`larger type to a smaller size type`**
      `double -> float -> long -> int -> char -> short -> byte`

​	

### Widening Casting (Implicit Casting)

- `Widening casting is done automatically when passing a`**`smaller size type to a larger size type`**

  ```java
  public class Main {
    public static void main(String[] args) {
      int myInt = 9;
      double myDouble = myInt; // Automatic casting: int to double
  
      System.out.println(myInt);      // Outputs 9
      System.out.println(myDouble);   // Outputs 9.0
    }
  }
  ```

  
### Narrowing Casting(Explicit Casting)

- `Narrowing casting must be done manually by placing the type in parentheses in front of the value`

  ```java
  public class Main{
      public static void main(String[] args){
          double myDouble = 9.78d;
          int myInt = (int) myDouble; // Manual casting: double to int
          System.out.println(myDouble);   // Outputs 9.78
          System.out.println(myInt);      // Outputs 9
      }
  }
  ```

  

### Instanceof Operator

