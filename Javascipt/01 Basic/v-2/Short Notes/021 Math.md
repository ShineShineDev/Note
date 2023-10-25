## Math

```js
/* Math
  - The JavaScript Math object allows you to perform mathematical tasks on numbers.
  - Unlike other objects, the Math object has no constructor.
  - The Math object is static. All methods and properties can be used without creating a Math     object first.
*/


// Properties
Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E




// Methods

/* Math.round()
   Math.round(x) returns the nearest integer
 */ 
  Math.round(4.6); //5
  Math.round(4.5); //5
  Math.round(4.4); //4
 


/* Math.ceil(x)
   Math.ceil(x) returns the value of x rounded **up** to its nearest integer
*/
  Math.ceil(4.9); //5
  Math.ceil(4.7); //5
  Math.ceil(4.4); //5
  Math.ceil(4.2); //5
  Math.ceil(-4.2); //5
  




/* Math.floor()
  Math.floor(x) returns the value of x rounded **down** to its nearest integer
*/
Math.floor(4.9); //4
Math.floor(4.7); //4
Math.floor(4.4); //4
Math.floor(4.2); //4
Math.floor(-4.2); //4





/* Math.trunc()
   Math.trunc(x) returns the integer part of x
   ES6 Feature
*/
  Math.trunc(4.9); //4
  Math.trunc(4.7); //4
  Math.trunc(4.4); //4
  Math.trunc(4.2); //4
  Math.trunc(-4.2); //4
 

 


/* Math.sign()  
   Math.sign(x) returns if x is negative, null or positive
   ES6 Feature
*/
Math.sign(-4); // -1
Math.sign(4); // 1
Math.sign(3); // 1
Math.sign(0); //0
Math.sign() //Nan
Math.sign(1); //1
```

