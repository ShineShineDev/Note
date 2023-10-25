## Java Operators

- `Operators are symbols `
- `that tell the compiler to perform specific mathematical or logical manipulations`
- `Operators are used to perform operations on variables and values.`





### Type of operators

- `Java divides the operators into the following groups:`
  - `Arithmetic operators`
  - `Assignment operators`
  - `Comparison operators`
  - `Logical operators`
  - `Bitwise operators`



### Arithmetic Operators

- `Arithmetic operators are used to perform common mathematical operations.`

| Operator | Name             | Description                              | Example | Try it                                                       |
| :------- | :--------------- | :--------------------------------------- | :------ | :----------------------------------------------------------- |
| +        | `Addition`       | `Adds together two values`               | x + y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_add) |
| -        | `Subtraction`    | `Subtracts one value from another`       | x - y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_sub) |
| *        | `Multiplication` | `Multiplies two values`                  | x * y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_mult) |
| /        | `Division`       | `Divides one value by another`           | x / y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_div) |
| %        | `Modulus`        | `Returns the division remainder`         | x % y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_mod) |
| ++       | `Increment`      | `Increases the value of a variable by 1` | ++x     | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_inc) |
| --       | `Decrement`      | `Decreases the value of a variable by 1` | --x     | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_dec) |





### Java Assignment Operators

- `Assignment operators are used to assign values to variables.`

  | Operator | Example | Same As    | Try it                                                       |
  | :------- | :------ | :--------- | :----------------------------------------------------------- |
  | =        | x = 5   | x = 5      | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass1) |
  | +=       | x += 3  | x = x + 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass2) |
  | -=       | x -= 3  | x = x - 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass3) |
  | *=       | x *= 3  | x = x * 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass4) |
  | /=       | x /= 3  | x = x / 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass5) |
  | %=       | x %= 3  | x = x % 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass6) |
  | &=       | x &= 3  | x = x & 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass7) |
  | \|=      | x \|= 3 | x = x \| 3 | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass8) |
  | ^=       | x ^= 3  | x = x ^ 3  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass9) |
  | >>=      | x >>= 3 | x = x >> 3 | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_ass10) |
  | <<=      | x <<= 3 | x = x << 3 |                                                              |





### Comparison Operators

- `Comparison operators are used to compare two values (or variables).`

- `The return value of a comparison is either `true` or `false`. These values are known as *Boolean values*`

  ```java
  int x = 5;
  int y = 3;
  System.out.println(x > y); // returns true, because 5 is higher than 3
  ```

​	   

| Operator | Name                     | Example | Try it                                                       |
| :------- | :----------------------- | :------ | :----------------------------------------------------------- |
| ==       | Equal to                 | x == y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare1) |
| !=       | Not equal                | x != y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare2) |
| >        | Greater than             | x > y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare3) |
| <        | Less than                | x < y   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare4) |
| >=       | Greater than or equal to | x >= y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare5) |
| <=       | Less than or equal to    | x <= y  | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_compare6) |





###  Logical Operators

- `You can also test for `true` or `false` values with logical operators.`

- `Logical operators are used to determine the logic between variables or values:`

- `&&` ``||` `short circut` များသည် condition များ ကြိုက်လောက်စစ် စရာ ရှိလည်း ပထမဆုံး တစ်ခု မှန်ပါက ကျန်ရှိတဲ့ condition ထပ်မစစ်တော့ပါ ထို့ကြောင့် performace ကောင်းစေသည်

  | Operator           | Name              | Description                                             | Example            | Try it                                                       |
  | :----------------- | :---------------- | :------------------------------------------------------ | :----------------- | :----------------------------------------------------------- |
  | && (short Circut)  | and               | Returns true if both statements are true                | x < 5 && x < 10    | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical1) |
  | \|\|(Short Circut) | or                | Returns true if one of the statements is true           | x < 5 \|\| x < 4   | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical2) |
  | !                  | not               | Reverse the result, returns false if the result is true | !(x < 5 && x < 10) | [Try it »](https://www.w3schools.com/java/tryjava.asp?filename=demo_oper_logical3) |
  | &                  | and               |                                                         |                    |                                                              |
  | \|                 | or                |                                                         |                    |                                                              |
  | ^                  | XOR(Exclusive OR) |                                                         |                    |                                                              |



```jav
// ^  XOR(Exclusive OR)
true ^ true => false
false ^ false => false
true ^ false => true
false ^ true => true
```



### Instanceof Opreator

