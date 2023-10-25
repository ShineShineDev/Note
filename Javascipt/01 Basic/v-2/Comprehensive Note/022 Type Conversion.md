## Type Conversion

- JavaScript variables can be converted to a new variable and another data type

   
  
  

#### Number Method 

- The global method `Number()` converts a **Variable (or a value) into Number** , **Dates to Numbers** or **Booleans to Numbers.**

- An empty string (like "") converts to 0.

- A non numeric string (like "John") converts to `NaN` (Not a Number).

  ```js
  // String to Number
  Number("3.14") // 3.14
  Number(Math.PI) // 3.141592653589793
  Number("") //0
  Number("99 88") // NaN
  Number("John") // NaN
  
  
  // Dates to Number
  d = new Date();
  Number(d) // 1404568027739
  d.getTime() // 1404568027739
  
  
  
  //Booleans to Numbers
  Number(false)     // returns 0
  Number(true)      // returns 1
  ```
  
  





##### ParseInt() Method ( Strings to Whole Number)

-  `parseInt()` parses a string and returns a whole number. Spaces are allowed. Only the first number is returned

  ```js
  parseInt("-10");      //-10
  parseInt("-10.33");   //-10
  parseInt("10");       //10
  parseInt("10.33");    //10
  parseInt("10 20 30"); //10
  parseInt("10 years"); //10
  parseInt("years 10"); //Nan
  ```






##### ParseFloat() Method ( Strings to  Number)

- `parseFloat()` parses a string and returns a number. Spaces are allowed. Only the first number is returned

  ```js
  parseFloat("10");       //10
  parseFloat("10.33");    //10.33
  parseFloat("10 20 30"); //10
  parseFloat("10 years"); //10
  parseFloat("years 10"); //Nan
  ```

  



##### Number Object Methods

- These **object methods** belong to the **Number** object

  | Method                 | Description                                    |
  | :--------------------- | :--------------------------------------------- |
  | Number.isInteger()     | Returns true if the argument is an integer     |
  | Number.isSafeInteger() | Returns true if the argument is a safe integer |
  | Number.parseFloat()    | Converts a string to a number                  |
  | Number.parseInt()      | Converts a string to a whole number            |







##### Unary + Operator (variable to number)

- The **unary + operator** can be used to convert a variable to a number

  ```js
  let y = "5";     // y is a string
  let x = + y;     // x is a number
  
  let a = "John";   // y is a string
  let b = + a;      // x is a number (NaN)
  ```





#### String Method 

- The global method `String()` can convert **Numbers to Strings , Dates to Strings or  Booleans to Strings**

- It can be used on any type of numbers, literals, variables, or expressions

- The Number method `toString()` does the same.

  ```js
  // Number to String
  String(23.2)      // "23.2" 
  String(123)       // "123"
  String(100 + 23)  // "123'"
  
  let num = 123;
  num.toString() // "123"
  
  
  
  // Date to String
  String(Date())  // Wed Nov 02 2022 15:18:01 GMT+0630 (Myanmar Time)
  Date().toString()  // Wed Nov 02 2022 15:18:01 GMT+0630 (Myanmar Time)
  
  
  
  //Booleans to Strings
  String(false)      // returns "false"
  String(true)       // returns "true"
  
  false.toString()   // returns "false"
  true.toString()    // returns "true"
  ```
  
  





#### Automatic Type Conversion

- When JavaScript tries to operate on a "wrong" data type, it will try to convert the value to a "right" type.The result is not always what you expect

  ```js
  5 + null    // returns 5         because null is converted to 0
  "5" + null  // returns "5null"   because null is converted to "null"
  "5" + 2     // returns "52"      because 2 is converted to "2"
  "5" - 2     // returns 3         because "5" is converted to 5
  "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2
  
  ```

  





#### Automatic String Conversion

- JavaScript automatically calls the variable's `toString()` function when you try to "output" an object or a variable

  ```js
  document.getElementById("demo").innerHTML = myVar;
  
  // if myVar = {name:"Fjohn"} // toString converts to "[object Object]"
  // if myVar = [1,2,3,4]    // toString converts to "1,2,3,4"
  // if myVar = new Date()   // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
  ```

  



#### JavaScript Type Conversion Table

- This table shows the result of converting different JavaScript values to Number, String, and Boolean

  | Original Value   | Converted to Number | Converted to String | Converted to Boolean |
  | :--------------- | :------------------ | :------------------ | :------------------- |
  | false            | 0                   | "false"             | false                |
  | true             | 1                   | "true"              | true                 |
  | 0                | 0                   | "0"                 | false                |
  | 1                | 1                   | "1"                 | true                 |
  | "0"              | 0                   | "0"                 | true                 |
  | "000"            | 0                   | "000"               | true                 |
  | "1"              | 1                   | "1"                 | true                 |
  | NaN              | NaN                 | "NaN"               | false                |
  | Infinity         | Infinity            | "Infinity"          | true                 |
  | -Infinity        | -Infinity           | "-Infinity"         | true                 |
  | ""               | 0                   | ""                  | false                |
  | "20"             | 20                  | "20"                | true                 |
  | "twenty"         | NaN                 | "twenty"            | true                 |
  | [ ]              | 0                   | ""                  | true                 |
  | [20]             | 20                  | "20"                | true                 |
  | [10,20]          | NaN                 | "10,20"             | true                 |
  | ["twenty"]       | NaN                 | "twenty"            | true                 |
  | ["ten","twenty"] | NaN                 | "ten,twenty"        | true                 |
  | function(){}     | NaN                 | "function(){}"      | true                 |
  | { }              | NaN                 | "[object Object]"   | true                 |
  | null             | 0                   | "null"              | false                |
  | undefined        | NaN                 | "undefined"         | false                |



```js
/* JavaScript variables can be converted to a new variable and another data type
*/

// CONVERT VARIABLES(OR A VALUE) TO NUMBERS
// String to Number
Number("3.14") // 3.14
Number(Math.PI) // 3.141592653589793
Number("") //0
Number("99 88") // NaN
Number("John") // NaN

// Dates to Number
d = new Date();
Number(d) // 1404568027739
d.getTime() // 1404568027739

//Booleans to Numbers
Number(false)     // returns 0
Number(true)      // returns 1

// unary + operator can be used to convert a variable to a number
let y = "5";     // y is a string
let x = + y;     // x is a number​let a = "John";   // y is a string
let b = + a;      // x is a number (NaN)





// CONVERT VARIABLES(OR A VALUE) TO STRING
// Number to String
String(23.2)      // "23.2" 
String(123)       // "123"
String(100 + 23)  // "123'"

let num = 123;
num.toString() // "123"

// Date to String
String(Date())  // Wed Nov 02 2022 15:18:01 GMT+0630 (Myanmar Time)
Date().toString()  // Wed Nov 02 2022 15:18:01 GMT+0630 (Myanmar Time)

//Booleans to Strings
String(false)      // returns "false"
String(true)       // returns "true"

false.toString()   // returns "false"
true.toString()    // returns "true"






//AUTOMATIC TYPE CONVERSION
/*
  When JavaScript tries to operate on a "wrong" data type, it will try to convert the value     to a "right" type.The result is not always what you expect
*/
5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2





//AUTOMATIC STRING CONVERSION
/* JavaScript automatically calls the variable's toString() function when you try to            output an object or a variable
*/
document.getElementById("demo").innerHTML = myVar;

// if myVar = {name:"Fjohn"} // toString converts to "[object Object]"
// if myVar = [1,2,3,4]    // toString converts to "1,2,3,4"
// if myVar = new Date()   // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"

```





