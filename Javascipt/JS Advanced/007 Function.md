## Function





#### Function Declarations

- `JavaScript functions are defined with the function keyword.`

  ```js
  function functionName(parameters) {
    // code to be executed
  }
  ```

  

#### Function Expressions(Anonymous function)

- `A JavaScript function can also be defined using an expression.`

- `A function expression can be stored in a variable`

  ```js
  const x = function (a, b) {return a * b};
  ```

  



#### Function() Constructor

- `Functions can also be defined with a built-in JavaScript function constructor called Function()`

  ```js
  const myFunction = new Function("a", "b", "return a * b");
  
  let x = myFunction(4, 3);
  ```

  



#### Function Hoisting

- `Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.`

- `Hoisting applies to variable declarations and to function declarations.`

- `Function expression  are not hoisted`

  ```js
  myFunction(5);
  
  function myFunction(y) {
    return y * y;
  }
  ```





#### Self-Invoking Functions

- `Function expressions can be made "self-invoking".`

- `A self-invoking expression is invoked (started) automatically, without being called.`

  ```js
  (function () {
    let x = "Hello!!";  // I will invoke myself
  })();
  ```

  



#### Functions are Objects

- `The typeof operator in JavaScript returns "function" for functions.`

- `JavaScript functions can best be described as objects.`

- `JavaScript functions have both properties and methods.`

- `The toString() method returns the function as a string`

  ```js
  function myFunction(a, b) {
    return arguments.length;
  }
  typeof myFunction;
  let text = myFunction.toString();
  ```

  



#### Arrow Functions

- `Arrow functions allows a short syntax for writing function expressions.`

- `Arrow functions do not have their own this. They are not well suited for defining object methods.`

- `Arrow functions are not hoisted. They must be defined before they are used.`

- `Using const is safer than using var, because a function expression is always constant value.`

- `You can only omit the return keyword and the curly brackets if the function is a single statement.`

  ```js
  // ES5
  var x = function(x, y) {
    return x * y;
  }
  
  // ES6
  const x = (x, y) => x * y;
  ```

  



```js
 //Function Declarations
function functionName(parameters) {/*code to be executed*/}

//Function expression can be stored in a variable Function Expressions(Anonymous function).
const x = function (a, b) {return a * b};

//Functions can also be defined with a built-in JavaScript function constructor called Function()
const myFunction = new Function("a", "b", "return a * b");
let x = myFunction(4, 3);

//Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.`
//Hoisting applies to variable declarations and to function declarations.`
//function declarations are hoisted,Function expression isn't
myFunction(5);
function myFunction(y) { return y * y;}

//Function expressions can be made self-invoking,it invoked(started) automatically,without being called
(function () {  let x = "Hello!!"})();

//JavaScript functions can best be described as objects,functions have both properties and methods
function myFunction(a, b) { return arguments.length }
myFunction.toString();

//Arrow functions allows a short syntax for writing function expressions.`
//Arrow functions do not have their own this. They are not well suited for defining object methods.`
//Arrow functions are not hoisted. They must be defined before they are used.`
//Using const is safer than using var, because a function expression is always constant value.`
//You can only omit the return keyword and the curly brackets if the function is a single statement.`
const x = (x, y) => x * y;  
```

