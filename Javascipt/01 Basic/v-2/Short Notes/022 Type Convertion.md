## Type Conversion



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

