## Math

- `The Java Math class has many methods that allows you to perform mathematical tasks on numbers.`



### Math.max(*x,y*) method

- `The Math.max(x,y) method can be used to find the highest value of x and y`

  ```java
  class Cal{
     public static void main(String[] args){
         System.out.println(Math.max(5, 10));
     }
  }
  ```

  

### Math.min(*x,y*) method

- `The Math.min(x,y) method can be used to find the lowest value of x and y`

  ```java
  class Cal{
     public static void main(String[] args){
         System.out.println(Math.min(5, 10));
     }
  }
  ```



### Math.sqrt(*x*) method

- `The Math.sqrt(x) method returns the square root of x`

  ```java
  class Cal{
     public static void main(String[] args){
         System.out.println(Math.sqrt(64));
     }
  }
  ```



### Math.random() method

- `Math.random() returns a random number between 0.0 (inclusive), and 1.0 (exclusive)`

  ```java
  class Cal{
     public static void main(String[] args){
         int randomNum = (int)(Math.random() * 101);  // 0 to 100
         System.out.println(randomNum);
     }
  }
  ```




### Sytax

```java
System.out.println(Math.max(5, 10));

System.out.println(Math.min(5, 10));

System.out.println(Math.sqrt(64));

int randomNum = (int)(Math.random() * 101);  // 0 to 100

```



