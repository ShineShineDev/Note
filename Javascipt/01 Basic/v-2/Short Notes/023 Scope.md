## Scope

```js
/* Scope
  - Scope determines the accessibility (visibility) of variables.
  - JavaScript has 3 types of scope:
  - Block scope
  - Function scope
  - Global scope
*/



/* Block Scope
  - Before ES6 (2015), JavaScript had only Global Scope and Function Scope. 
  - ES6 introduced two important new JavaScript keywords: `let` and `const`.
  - These two keywords provide Block Scope in JavaScript.
  - Variables declared inside a { } block(Block Scope) cannot be accessed from outside the      block
*/
if(true){
    let moti = 'Bite The Bulltes'
}
moti //ReferenceError: moti is not defined
for(let x = 0; x < 10; x++){
    console.log(x)
}
x //ReferenceError: x is not defined








/* Local Scope
   - Variables declared within a JavaScript function, become LOCAL to the function.
   - Local variables have Function Scope:
   - They can only be accessed from within the function
   - Local variables are created when a function starts, and deleted when the function is completed.
*/
function myFunction() {
     let moti = 'Bite The Bulltes'
    // code here CAN use moti
    console.log(moti)
   
}
// code here can NOT use carName
console.log(moti) //ReferenceError: moti is not defined




/* Local Scope and Block Scope 
  - The main difference between the local scope and block scope is that the block statements     (e.g. if conditions or for loops)
*/  
  



/* Function Scope
  - Variables defined inside a function are not accessible (visible) from outside the             function.
  - Variables declared with var, let and const are quite similar when declared inside a           function.They all have Function Scope
 */
function myFunction() {
    let moti = 'Bite The Bulltes'   // Function Scope
}
// not accessible (visible) from outside the function.
moti //ReferenceError: moti is not defined






/* Global Scope
	- Variables declared Globally (outside any function) have Global Scope.
	- Global variables can be accessed from anywhere in a JavaScript program.
	- Variables declared with var, let and const are quite similar when declared outside a        block.They all have Global Scope
*/
 let moti = 'Bite The Bulltes' // Global scope
 console.log(moti)

 function myFunction() {
    // code here can also use moti
    console.log(moti)
 }




/* Automatically Global
	- If you assign a value to a variable that has not been declared, it will automatically         become a GLOBAL variable.
*/
function myFunction() {
   moti = 'Bite The Bulltes' 
}
//This code example will declare a global variable moti, even if the value is assigned inside a function
console.log(moti) 






/* Global Variables in HTML
	- Global variables defined with the var keyword belong to the window object
    - That is available in Browser ,but not in NodeJS
	- Global variables defined with the let keyword do not belong to the window object
*/
var moti = 'Bite The Bulltes' 
// code here can use window.moti
window.moti //'Bite The Bulltes'

let moti = 'Bite The Bulltes' 
// code here can not use window.moti
window.moti //'Bite The Bulltes'






/* Variables Lifetime 
	- The lifetime of a JavaScript variable starts when it is declared.
	- Function (local) variables are deleted when the function is completed.
	- In a web browser, global variables are deleted when you close the browser window (or        tab).
*/	
```

