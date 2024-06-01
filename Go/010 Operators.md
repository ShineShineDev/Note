## Operators

- `Operators are symbols `
- `That tell the compiler to perform specific mathematical or logical manipulations`



###  **Arithmetic** Operators

 - `Arithmetic operators are used to perform arithmetic on numbers`

   | Operator | Name           | Description                            | Example | Try it                                                       |
   | :------- | :------------- | :------------------------------------- | :------ | :----------------------------------------------------------- |
   | +        | Addition       | Adds together two values               | x + y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_add) |
   | -        | Subtraction    | Subtracts one value from another       | x - y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_sub) |
   | *        | Multiplication | Multiplies two values                  | x * y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_mult) |
   | /        | Division       | Divides one value by another           | x / y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_div) |
   | %        | Modulus        | Returns the division remainder         | x % y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_mod) |
   | ++       | Increment      | Increases the value of a variable by 1 | x++     | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_inc) |
   | --       | Decrement      | Decreases the value of a variable by 1 | x--     | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_dec) |



### Assignment Operators

- `Assignment operators are used to assign values to variables.`

| Operator | Example | Same As    | Try it                                                       |
| :------- | :------ | :--------- | :----------------------------------------------------------- |
| =        | x = 5   | x = 5      | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass1) |
| +=       | x += 3  | x = x + 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass2) |
| -=       | x -= 3  | x = x - 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass3) |
| *=       | x *= 3  | x = x * 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass4) |
| /=       | x /= 3  | x = x / 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass5) |
| %=       | x %= 3  | x = x % 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass6) |
| &=       | x &= 3  | x = x & 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass7) |
| \|=      | x \|= 3 | x = x \| 3 | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass8) |
| ^=       | x ^= 3  | x = x ^ 3  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass9) |
| >>=      | x >>= 3 | x = x >> 3 | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass10) |
| <<=      | x <<= 3 | x = x << 3 | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_ass11) |



### Comparison Operators

- `Comparison operators are used to compare two values.`
- `The return value of a comparison is either true (1) or false (0).`

| Operator | Name                     | Example | Try it                                                       |
| :------- | :----------------------- | :------ | :----------------------------------------------------------- |
| ==       | Equal to                 | x == y  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare1) |
| !=       | Not equal                | x != y  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare2) |
| >        | Greater than             | x > y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare3) |
| <        | Less than                | x < y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare4) |
| >=       | Greater than or equal to | x >= y  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare5) |
| <=       | Less than or equal to    | x <= y  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_compare6) |



### Logical Operators

- `Logical operators are used to determine the logic between variables or values`

| Operator | Name        | Description                                             | Example            | Try it                                                       |
| :------- | :---------- | :------------------------------------------------------ | :----------------- | :----------------------------------------------------------- |
| &&       | Logical and | Returns true if both statements are true                | x < 5 && x < 10    | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_logical1) |
| \|\|     | Logical or  | Returns true if one of the statements is true           | x < 5 \|\| x < 4   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_logical2) |
| !        | Logical not | Reverse the result, returns false if the result is true | !(x < 5 && x < 10) |                                                              |



### Bitwise Operators

- `Bitwise operators are used on (binary) numbers`

  | perator | Name                 | Description                                                  | Example | Try it                                                       |
  | :------ | :------------------- | :----------------------------------------------------------- | :------ | :----------------------------------------------------------- |
  | &       | AND                  | Sets each bit to 1 if both bits are 1                        | x & y   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_bitwise1) |
  | \|      | OR                   | Sets each bit to 1 if one of two bits is 1                   | x \| y  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_bitwise2) |
  | ^       | XOR                  | Sets each bit to 1 if only one of two bits is 1              | x ^ b   | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_bitwise3) |
  | <<      | Zero fill left shift | Shift left by pushing zeros in from the right                | x << 2  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_bitwise4) |
  | >>      | Signed right shift   | Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off | x >> 2  | [Try it »](https://www.w3schools.com/go/trygo.php?filename=demo_oper_bitwise5) |