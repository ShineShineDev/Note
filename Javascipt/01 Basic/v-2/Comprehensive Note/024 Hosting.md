## Hoisting

- In JavaScript, a variable can be declared after it has been used.

- In other words; a variable can be used before it has been declared.

  

> :warning: If a developer doesn't understand hoisting, programs may contain bugs (errors).
>
> :warning: To avoid bugs, always declare all variables at the beginning of every scope.



  ```js
  x = 5; // Assign 5 to x
  console.log(x) //
  var x; // Declare x
  ```

  



##  let and const Keywords

- Variables defined with `let` and `const` are hoisted to the top of the block, but not *initialized*.

- The block of code is aware of the variable, but it cannot be used until it has been declared.

- With **let** and **const**, you cannot use a variable before it is declared.

- Using a `let ` variable before it is declared will result in a `ReferenceError`.

- Using a `const` variable before it is declared, is a syntax errror, so the code will simply not run.

  ```js
  //let
  try {
    let_keyword = "hoisted";
    let let_keyword;
  }catch(err) {
    console.log(err); //ReferenceError
  }
  
  //const
  pi = 3.14
  const pi; //syntax errror,
  
  ```

  






#### JavaScript Initializations are Not Hoisted

- JavaScript only hoists declarations, not initializations.

  ```js
  var x = 5; // Initialize x
  
  console.log(y) //ReferenceError: y is not defined
  
  var y = 7; // Initialize y
  
  /* y is undefined. This is because only the declaration, not the initialization (=7) is 	hoisted to the top.Because of hoisting, y has been declared before it is used, but 		because initializations are not hoisted
  */
  ```

  





#### Declare Your Variables At the Top !

- Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.
- If a developer doesn't understand hoisting, programs may contain bugs (errors).
- To avoid bugs, always declare all variables at the beginning of every scope.
- Since this is how JavaScript interprets the code, it is always a good rule.





```js
/* Hoisting
	- In JavaScript, a variable can be declared after it has been used.
	- In other words; a variable can be used before it has been declared.
*/
x = 5; // Assign 5 to x
console.log(x) //
var x; // Declare x




/* let and const Keywords
	-  let and const` are hoisted to the top of the block, but not initialized.
	- The block of code is aware of the variable, but it cannot be used until it has been  		  declared.
	- With let and const, you cannot use a variable before it is declared.
	- Using a let variable before it is declared will result in a `ReferenceError`.
	- Using a `const` variable before it is declared, is a syntax errror, so the code will		  simply not run.
*/
//let
try {
  let_keyword = "hoisted";
  let let_keyword;
}catch(err) {
  console.log(err); //ReferenceError
}
//const
pi = 3.14
const pi; //syntax errror,




/* JavaScript Initializations are Not Hoisted 
   JavaScript only hoists declarations, not initializations.
*/
var x = 5; // Initialize x

console.log(y) //ReferenceError: y is not defined

var y = 7; // Initialize y

/* y is undefined. This is because only the declaration, not the initialization (=7) is 	hoisted to the top.Because of hoisting, y has been declared before it is used, but 		because initializations are not hoisted
*/

```

