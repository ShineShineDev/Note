## Conditional Statements 

- `Conditional statements are used to perform different actions based on different conditions.`
- `Java has the following conditional statements:`
  - `Use` **`if`** `to specify a block of code to be executed, if a specified condition is true`
  - `Use` **`else`** `to specify a block of code to be executed, if the same condition is false`
  - `Use` **`else if`** ` to specify a new condition to test, if the first condition is false`
  - `Use` **`switch`** `to specify many alternative blocks of code to be executed`



### The if Statement

- `Use the ` **`if`** `statement to specify a block of Java code to be executed if a condition is` **`true`.**

  ```java
  if (20 > 18) {
    System.out.println("20 is greater than 18");
  }
  
  int x = 20;
  int y = 18;
  if (x > y) {
    System.out.println("x is greater than y");
  }
  ```



### The else Statement

- `Use the `**`else`** `statement to specify a block of code to be executed if the condition is` **`false`.**

  ```java
  int time = 20;
  if (time < 18) {
    System.out.println("Good day.");
  } else {
    System.out.println("Good evening.");
  }
  ```

  

### The else if Statement

- `Use the` **`else if`** `statement to specify a new condition if the first condition is` **`false`.**

  ```java
  int time = 22;
  if (time < 10) {
    System.out.println("Good morning.");
  } else if (time < 18) {
    System.out.println("Good day.");
  } else {
    System.out.println("Good evening.");
  }
  // Outputs "Good evening."
  ```



### Ternary Operator (if else short hand)

- There is also a short-hand [if else](https://www.w3schools.com/java/java_conditions.asp), which is known as the **ternary operator** because it consists of three operands.

  ```java
  int time = 20;
  String result = (time < 18) ? "Good day." : "Good evening.";
  System.out.println(result);
  ```





### Switch Statements

- **`java  5 မတိုင်ခင်က switch Statements များတွင် byte,short,int,chart type တွေပဲစစ်လို့ရခဲ့ပါတယ်(int အဖြစ်ပြောင်းလို့ရတဲ့ type တွေပဲ သုံးလို့ရ)`**

- **`java 5 မှာတော့ String ,Enum တွေပါသုံးလို့ရလာတယ်`**

- **`case level မှာတော့ final variable တွေပါသုံးလို့ရ.(constant variable တွေပဲသုံးလို့ရ)`**

- `Instead of writing` **many**  **`if..else`** `statements, you can use the `**`switch`**` `statement`

- `The` **`switch`** `expression is evaluated once.`

- `The value of the expression is compared with the values of each` **`case`.**`If there is a match, the associated block of code is executed.`

- **`Break Keyword`**

  - `When Java reaches a` **`break`**` keyword, it breaks out of the switch block. This will stop the execution of more code and case testing inside the block.`

- `The `**`default`** `keyword specifies some code to run if there is no case match`

  ```java
  int day = 4;
  switch (day) {
    case 6:
      System.out.println("Today is Saturday");
      break;
    case 7:
      System.out.println("Today is Sunday");
      break;
    default:
      System.out.println("Looking forward to the Weekend");
  }
  // Outputs "Looking forward to the Weekend"
  
  
  //long type,double type,boolean type များမရပါ
  int long = 4;
  switch (day) {
    case 6:
      System.out.println("Today is Saturday");
          
          
  
  //long type,double type,boolean type များမရပါ
  int int = 4;
  final int int = 4;
  switch (day) {
    case num: //`case level မှာတော့ final variable တွေပါသုံးလို့ရ`
      break;
    default:
  
  ```
  
  
  
  
  
  

### Syntax

```java
int time = 22;
if (time < 10) {
    System.out.println("Good morning.");
} else if (time < 18) {
    System.out.println("Good day.");
} else {
    System.out.println("Good evening.");
}
//Short Ternay Operator
int time = 20;
String result = (time < 18) ? "Good day." : "Good evening.";

//Swith Statements
int day = 4;
switch (day) {
  case 6:
    System.out.println("Today is Saturday");
    break;
  case 7:
    System.out.println("Today is Sunday");
    break;
  default:
    System.out.println("Looking forward to the Weekend");
}
```



