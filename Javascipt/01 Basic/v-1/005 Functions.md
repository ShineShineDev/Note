### Functions
---
- Function is a block of code designed to perform a particular task.
- Reuse (define the code once, and use it many times)
- Readable(copying and pasting the needed code into multiple places is a bad idea)
- Modularity (divide a large program into multiple small modules modularity
- Hide the complexities(you don't want to worry about the internal working of a function)
- All functions  in JavaScript are [objects](https://www.javascripttutorial.net/javascript-objects/). 



#### Type of User-defined Function

- Function with no arguments and no return value

- Function with no arguments and a return value

- Function with arguments and no return value

- Function with arguments and a return value






#### Create Function with Function Declaration (function statement)

- the *function declaration* in a statement always **starts** with the keyword `function`

```js
function showMessage() { //Function Declaration
   alert('Hello everyone!');
}
showMessage()

let x = showMessage()
x()
```





#### Create Function with Function Expression ( anonymous )

- function expressions the JavaScript statement **does not start** with `function` keyword
- Functions are first-class objects and they can be assigned to a variable and also be passed as a parameter
- Anonymous functions are functions without names.
- Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.
-  *Closures may leak memory if not correctly used.*

```js
// Function expression
const showMessage = function() { 
  alert('Hello everyone!');
}
// Named Function Expression
let checkNumber = function check (num){ 
    return (num %2==0)?"even" : "odd"
    // 1 % 2 ? "e" : "o";
 }
console.log(checkNumber(50))

// IIFE (Immediately Invoked Function Expression)
(function(){
   alert("Immediately invoked fun expression") 
})()

```





#### Create Function with Generator Function

```js
function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // =>

// Function expression form function* ():
 const indexGenerator = function* () {
  let index = 0;
  while(true) {
    yield index++;
  }
};

const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1

//Shorthand method definition form *<name>(
const obj = {
  *indexGenerator() {
    var index = 0;
    while(true) {
      yield index++;
    }
  }
}

const g = obj.indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // => 1
```





#### Create Function with Function  constructor

- A constructor function in JavaScript starts with an Uppercase letter by convention

  ```js
  function User (name, email) {
    this.name = name;   // instance variables
    this.email = email;
  
    // You can define methods here, but is not recommended from performance perspective.
    this.save = function () {
      this.id = +new Date(); 
      return this.id;
    }
  }
  // PROTOTYPE: Recommended way to create instance methods
  User.prototype.saveDB = function () {
    this.id = +new Date();
    return this.id;
  }
  const user = new User("shine shine","example@gamil.com")
  ```





#### Parameters

- Function **parameters** are listed inside the parentheses () in the function definition.
- Function **arguments** are the **values** received by the function when it is invoked.

```js
function showMessage1(msg) { //Function Declaration
   alert(msg);
}
const showMessage2 = function(msg,name) { // Function expression
  alert(msg+name);
}
showMessage1("Hello")
showMessage2("Hello","shine")
```



#### Recursive function

- A function that calls itself is called a *recursive function*
```js
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  loop(x + 1); // the recursive call
}
loop(0);
```



#### Nested functions
```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // returns 13
b = addSquares(3, 4); // returns 25
c = addSquares(4, 5); // returns 41

function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
fn_inside = outside(3); //Think of it like: give me a function that adds 3 to whatever you give it
result = fn_inside(5); // returns 8
result1 = outside(3)(5); // returns 8
```



#### Function parameters

- Starting with ECMAScript 2015, there are two new kinds of parameters: default parameters and rest parameters

- In JavaScript, parameters of functions default to `undefined`.

  

#### Without default parameters (pre-ECMAScript 2015)

- In JavaScript, parameters of functions default to `undefined`.


```js
function multiply(a, b) {
  b = typeof b !== 'undefined' ?  b : 1;

  return a * b;
}

multiply(5); // 5
```



#### With default parameters (post-ECMAScript 2015)

- You can simply put `1` as the default value for `b` in the function head:

```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```



#### Rest Parameter

```js
function log(name,...lang){
    for(let i = 0; i < lang.length; i++ ){
        console.log(lang[i])
    }
}
log("front-framework",'vue','react','angular')
```





#### Arrow functions(Shorter functions)

- An [arrow function expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (previously, and now incorrectly known as **fat arrow function**) has a shorter
- Compared to function expressions and does not have its own `this`, [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), or [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target).
-  Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".
- Two factors influenced the introduction of arrow functions: *shorter functions* and *non-binding* of `this`.

````js
let log = (msg) => console.log(msg) //or msg =>  console.log('msg')
log('hello word')

var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
var aLength = a.map(s => s.length);
console.log(aLength); // logs [8, 6, 7, 9]
````



#### Predefined functions

JavaScript has several top-level, built-in functions:

- [`eval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

  The `**eval()**` method evaluates JavaScript code represented as a string.

- [`uneval()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/uneval)

  The `**uneval()**` method creates a string representation of the source code of an [`Object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). 

- [`isFinite()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)

  The global `**isFinite()**` function determines whether the passed value is a finite number. If needed, the parameter is first converted to a number.

- [`isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)

  The `**isNaN()**` function determines whether a value is [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) or not. Note: coercion inside the `isNaN` function has [interesting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Description) rules; you may alternatively want to use [`Number.isNaN()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN), as defined in ECMAScript 2015, or you can use `typeof` to determine if the value is Not-A-Number.

- [`parseFloat()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

  The `**parseFloat()**` function parses a string argument and returns a floating point number.

- [`parseInt()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)

  The `**parseInt()**` function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

- [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI)

  The `**decodeURI()**` function decodes a Uniform Resource Identifier (URI) previously created by [`encodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) or by a similar routine.

- [`decodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)

  The `**decodeURIComponent()**` method decodes a Uniform Resource Identifier (URI) component previously created by [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) or by a similar routine.

- [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)

  The `**encodeURI()**` method encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

- [`encodeURIComponent()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

  The `**encodeURIComponent()**` method encodes a Uniform Resource Identifier (URI) component by replacing each instance of certain characters by one, two, three, or four escape sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two "surrogate" characters).

- [`escape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape)

  The deprecated `**escape()**` method computes a new string in which certain characters have been replaced by a hexadecimal escape sequence. Use [`encodeURI`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) or [`encodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) instead.

- [`unescape()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/unescape)

  The deprecated `**unescape()**` method computes a new string in which hexadecimal escape sequences are replaced with the character that it represents. The escape sequences might be introduced by a function like [`escape`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape). Because `unescape()` is deprecated, use [`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) or [`decodeURIComponent`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) instead.


-----



## **summery code**

```js
// Function is a block of code designed to perform a particular task.
// Advantages of functions are reuse,readable,modularity and etc.
// All functions  in JavaScript are objects

// Create Function with Function Declaration
function showMessage1(msg) {
    console.log(msg)
}
showMessage1("Hello")

// create with Anonymous function or function expression 
const showMessage2 = function(msg,name) { 
  console.log(msg+name);
}
showMessage2("Hello"," shine")


// Arrow function(es6)
let log1 = (msg) => console.log(msg) 
//or
let log1 = msg => console.log('msg')
log1('hello word')

// Function with default parameters(es6)
let log2 = (msg = 'default') => console.log(msg)

// rest parameter
let log3 = (msg = 'default para',...paras) => console.log(msg + paras)
log3('1',2,3,4);
function log(name,...lang){
    for(let i = 0; i < lang.length; i++ ){
        console.log(lang[i])
    }
}
log("front-framework",'vue','react','angular')


// IIFE (Immediately Invoked Function Expression)
(function(){
   console.log("Immediately invoked fun expression") 
})()


// Generator Function
function* indexGenerator(){
  var index = 0;
  while(true) {
    yield index++;
  }
}
const g = indexGenerator();
console.log(g.next().value); // => 0
console.log(g.next().value); // =>

// Recursive function
function loop(x) {
  if (x >= 10) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
    return;
  // do stuff
  console.log(x);
  loop(x + 1); // the recursive call
}
loop(0);
```




 #[reference guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

#[reference guide](https://www.javascripttutorial.net/javascript-function-type/)

#[guide](https://codeburst.io/all-about-javascript-functions-in-1-article-49bfd94b31ab)

#[guide](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)

#[guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

#[guide](https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/#12-difference-from-function-expression)

