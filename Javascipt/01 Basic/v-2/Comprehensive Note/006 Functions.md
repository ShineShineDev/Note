## Functions

- Function is a block of code designed to perform a particular task.
- Reuse (define the code once, and use it many times)
- Readable(copying and pasting the needed code into multiple places is a bad idea)
- Modularity (divide a large program into multiple small modules modularity
- Hide the complexities(you don't want to worry about the internal working of a function)
- All functions  in JavaScript are [objects](https://www.javascripttutorial.net/javascript-objects/). 





#### Function Declaration (function statement)

- The function declaration in a statement always starts with the keyword `function`

```js
//Function Declaration
function showMessage() { 
   alert('Hello everyone!');
}
showMessage()

let x = showMessage()
x()
```





#### Function Expression ( anonymous )

- Function expressions the JavaScript statement **does not start** with `function` keyword
- Functions are first-class objects and they can be assigned to a variable and also be passed as a parameter
- Anonymous functions are functions without names.
- Anonymous functions can be used as an argument to other functions or as an immediately invoked function execution.
- *Closures may leak memory if not correctly used.*

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
```





#### Immediately Invoked Function 

```js
// IIFE (Immediately Invoked Function Expression)
(function(){
   alert("Immediately invoked fun expression") 
})()
```





#### Generator Function

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

// Generator Function expression
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





#### Function parameters 

```js
//Function Declaration
function showMessage1(msg) { 
   alert(msg);
}
// Function expression
const showMessage2 = function(msg,name) { 
  alert(msg+name);
}
showMessage1("Hello")
showMessage2("Hello","shine")
```





#### Default parameters (pre-ECMAScript 2015)

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

- Compared to function expressions and does not have its own `this`, [arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments), [super](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/super), or [new.target](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new.target).
- Arrow functions are always anonymous. See also this hacks.mozilla.org blog post: "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)".
- Two factors influenced  arrow functions: *shorter functions* and *non-binding* of `this`.

````js
let log = (msg) => console.log(msg) 
//or
let log = msg =>  console.log('msg')

log('hello word')

var a = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];
var itemLength = a.map(s => s.length);
console.log(itemLength); // logs [8, 6, 7, 9]
````





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

