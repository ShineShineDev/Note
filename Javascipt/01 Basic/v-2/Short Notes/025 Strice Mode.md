## Strice Mode

```js
/*Strice Mode
 	- Strice Mode helps you to write cleaner code and secure code, like preventing you 	      from using undeclared variables.
	- The "use strict" directive is only recognized at the beginning of a script or a 		  function.
*/

"use strict";

// Using a variable, without declaring it, is not allowed
x = 3.14;  // This will cause an error


// Deleting a variable is not allowed.
let x = 3.14;
delete x; // This will cause an error    

// Deleting object is not allowed.
function x(p1, p2) {};
delete x;  // This will cause an error


// Duplicating a parameter name is not allowed
function x(p1, p1) {};   // This will cause an error


//Octal numeric literals are not allowed:
let x = 010; // This will cause an error


//Octal escape characters are not allowed:
let x = "\010";            // This will cause an error


//Writing to a read-only property is not allowed:
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});
obj.x = 3.14;            // This will cause an error


//Writing to a get-only property is not allowed:
const obj = {get x() {return 0} };
obj.x = 3.14;            // This will cause an error


// Deleting an undeletable property is not allowed
delete Object.prototype; // This will cause an error


//The word eval cannot be used as a variable
let eval = 3.14;         // This will cause an error


//The word arguments cannot be used as a variable
let arguments = 3.14;    // This will cause an error


//The with statement is not allowed:
with (Math){x = cos(2)}; // This will cause an error

// In strict mode, a variable can not be used before it is declared:
eval ("x = 2");

// In strict mode, eval() can not declare a variable using the var keyword:
eval ("var x = 2");


// The this keyword refers to the object that called the function.
// If the object is not specified, functions in strict mode will return undefined and	    functions in normal mode will return the global object (window)
function myFunction() {
  console.log(this); // will console "undefined"
}
myFunction();



/* Future Proof!
	- Keywords reserved for future JavaScript versions can NOT be used as variable names 	   in strict mode.
    - These are:
		- implements
		- interface
		- let
		- package
		- private
		- protected
	    - public
		- static
		- yield      
*/        
```

