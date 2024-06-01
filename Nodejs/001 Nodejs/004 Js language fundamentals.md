# Js language fundamentals



- Variables 
-  Array 
-  Operators 
-  Function 
-  Conditional statements
-  Looping and iteration
- Data Types
- Object 
- methods
- Properties





#### Variables 

> In software programming, variables are names used to hold one or more values. Instead of repeating these values in multiple places in your code, the variable holds the results of a calculation, database call, results of a database query, or other value. Instead of multiple calculations or the load of multiple database calls to retrieve the same data, the variable is stored in computer memory once and used wherever it is needed in your code.

```js
var num = 2;
let name = 'shine shine';
const pi = 3.14
```





#### Array 

```js
let emptyArr = new Array()
let user = [
    { id: 1,name:'Shine Shine' },
    { id: 2,name:'m2w3' }
]
```





#### Operators 

> **Operators** are symbols that tell the compiler to perform specific mathematical or logical manipulationss

- Assignment Operators (=, +=, -=, *=, /=, %=, **=)
- Arithmetic Operators(+, -, *, **,  /,  %, ++, -- )
- Comparison Operators (==, ===,  !=, !==,  >, <, <=, >=, ? )

- Logical Operators(&&, ||, !)

- Conditional Operators (?)





#### Function 

> A function is a block of code that performs a task. It can be called and [reused multiple times](https://www.makeuseof.com/recursion-explained/). You can pass information to a function and it can send information back.

```js
// smiple function
function calSquare(w,h){
    console.log(w*h);
}
// function at variables 
function calSquare2 = function(w,h){console.log(w*h);}

// arrow function
function calSquare2 = (w,h) => console.log(w*h);

```





#### Conditional statements

> *Conditional Statements* in programming are used to make decisions based on the condition

```js
if(1 == 1){
   console.log('equal');
}

if(1 == 2){
   console.log('equal');
}else{
    console.log('not equal');
}

if(1 == 2){
   console.log('equal');
}else if(1 == 1){
    console.log('equal');
}else{
    console.log('not equal');
}
```





#### Looping and iteration

> In computer science, a **loop** is a **programming** structure that repeats a sequence of instructions until a specific condition is met.

- Different Kinds of Loops
  - `for` - loops through a block of code a number of times
  - `for/in` - loops through the properties of an object
  - `for/of` - loops through the values of an iterable object
  - `while` - loops through a block of code while a specified condition is true
  - `do/while` - also loops through a block of code while a specified condition is true

```js
// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}
// for in loop (for object)
let post = {
        id: 23023,
        post_creator : 'Shine Shine',
        title : 'Post two'
        }
for(key in post){ 
   console.log(post[key]);
}

// for of loop (for an array)
let posts = [{
        id:23902,
        title: 'Post One'
    },
    {
        id: 23023,
        title : 'Post two'
    }]

for(post of posts ){
    console.log(' ')    
    for(key in post){ // for in at for of
        console.log(post[key])    
    }
}

// while loop
let i =  0;
while (i < 10) {
 console.log(i)
  i++; // increament 
}

// do while loop
let i = 0;
do{
    console.log(i)
     i++;
}while(i < 10)
```





#### Data Types

> In programming, data types is an important concept.
>
> To be able to operate on variables, it is important to know something about the type.
>
> Without data types, a computer cannot safely solve like this ( var x = 16 + "number")



<img src='D:\Desktop\note\Nodejs\imgs\data-types.png'>

- JavaScript  are divided into two broad categories, primitive and non-primitive.

-  Primitive

  - Number(2,2.3,-23, -1.2)
  - Bigint
  - String ('A String')
  - Boolean(Trune or False)
  - undefined
  - null
  - Symbol

- Non-primitive (object data type)

  - Array

  - Object

  - Function

    

>`typeof` operator allows us to see which type is stored in a variable.
>
> `typeof name` or `typeof(name)`.





#### Object 

>An *object* is a software bundle of related state and behavior. Software *objects* are often used to model the real-world *objects* that you find in everyday life
>
>In JavaScript, objects are king. If you understand objects, you understand JavaScript.
>
>In JavaScript, almost "everything" is an object.

| Object                                                      | Properties                                                   | Methods                                           |
| :---------------------------------------------------------- | :----------------------------------------------------------- | :------------------------------------------------ |
| <img src='D:\Desktop\note\Nodejs\imgs\objectExplained.gif'> | car.name = Fiat  car.model = 500  car.weight = 850kg  car.color = white | car.start()  car.drive()  car.brake()  car.stop() |



- Booleans can be objects (if defined with the `new` keyword)

- Numbers can be objects (if defined with the `new` keyword)

- Strings can be objects (if defined with the `new` keyword)

- Dates are always objects

- Maths are always objects

- Regular expressions are always objects

- Arrays are always objects

- Functions are always objects

- Objects are always objects

  

>  All JavaScript values, except primitives, are objects.

```js
var car = {
  model : "lamborghini",
  color : 'black',
  start : function() {
    return 'started'
  },
  stop : function() {
    return 'stoped'
  }
};

```







#### Methods

>ethods are actions ro behavior that can be performed on objects.

```js
var car = {
  model : "lamborghini",
  color : 'black',
  start : function() {
    return 'started'
  },
  stop : function() {
    return 'stoped'
  }
};

//call method
car.start() // "started"
car.stop() // "stoped"

```





#### Properties

> Properties are the values associated with a JavaScript object.
>
> A JavaScript object is a collection of unordered properties.
>
> Properties can usually be changed, added, and deleted, but some are read only

```js
var car = {
  model : "lamborghini",
  color : 'black',
  start : function() {
    return 'started'
  },
  stop : function() {
    return 'stoped'
  }
};
car.model // lamborghini
car.color // black
 
```





## For Paper Note

```js
/* Variables
   - In software programming, variables are names used to hold one or more values\
   - var keyword (Function scope ,can reassign and re-declare )
   - let keyword(block scope,can change(reassing) the value, cannot re-declare)
   - const keyword(block scope,can’t reassign,can’t re-declare )
*/  
var num = 2; 
let name = 'shine shine';
const pi = 3.14
// function  scope
function myFun(){ 
    for(var i = 0; i < 10;i++){}
    console.log(i);
    i = 'var is function scope';  //reassign 
    console.log(i);
}   
//If a variable is declared outside of a function it will become Global and will be accessible from anywhere,
var nameInGlobal = 'global scope' 
var nameInGlobal; //re-declear
var nameInGlobal = "shine shine" // redeclaring same variables again
```







```js
/* Array 
  - Array can store multiple values in a single variable 
  - In js array,you can assign variables of different types in the same array(number,string,boolean,array,obj)
  - Js arrays always use numbered indexes to access arrays item.  
*/  
//creating array with array literal (recommended,because for simplicity, readability and execution speed)
let langs = ["vue",'react','angular'] 
let x =[];
x[0] = 1;
x[1] = 2;
x[2] = 4;
//creating array with array constructer (not recommended)
let langs1 = new Array("vue","react",'angular')
```



```js
/* Operators 
  - Operators are symbols that tell the compiler to perform specific mathematical or logical manipulationss
  - Assignment Operators (=, +=, -=, *=, /=, %=, **=)
  - Arithmetic Operators(+, -, *, **,  /,  %, ++, -- )
  - Comparison Operators (==, ===,  !=, !==,  >, <, <=, >=, ? )
  - Logical Operators(&&, ||, !)
  - Conditional Operators (?)
*/  
```





```js
/* Function 
  - A function is a block of code that performs a task. It can be called and reused multiple times.
    You can pass  information to a function and it can send information back.
*/  
// Create Function with Function Declaration
function showMessage1(msg) {  console.log(msg)}
showMessage1("Hello")

// create with Anonymous function or function expression 
const showMessage2 = function(msg,name) { console.log(msg+name);}
showMessage2("Hello"," shine")

let log1 = (msg) => console.log(msg)  // Arrow function(es6)
//or
let log1 = msg => console.log('msg')
log1('hello word')
```





```js
/* Conditional statements
  -  Conditional Statements in programming are used to make decisions based on the condition
*/  
if(1 == 1){
   console.log('equal');
}
if(1 == 2){
   console.log('equal');
}else{
    console.log('not equal');
}
```







```js
/*  Looping and iteration
  - In computer science, a **loop** is a **programming** structure that repeats a sequence of instructions until a     specific condition is met.
  - Different Kinds of Loops in js
  	- `for` - loops through a block of code a number of times
  	- `for/in` - loops through the properties of an object
  	- `for/of` - loops through the values of an iterable object
  	- `while` - loops through a block of code while a specified condition is true
  	- `do/while` - also loops through a block of code while a specified condition is true
*/  	
// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}
// for in loop (for object)
let post = { id: 23023, post_creator : 'Shine Shine', title : 'Post two'}
for(key in post){ 
   console.log(post[key]);
}

// for of loop (for an array)
let posts = [{id:23902,title: 'Post One'},{id: 23023,title : 'Post two'}]
for(post of posts ){
    console.log(' ')    
    for(key in post){ // for in at for of
        console.log(post[key])    
    }
}

// while loop
let i =  0;
while (i < 10) {
 console.log(i)
  i++; // increament 
}

// do while loop
let i = 0;
do{
    console.log(i)
    i++;
}while(i < 10)
```





```js
/* Object
  - An object is a software bundle of related state and behavior. Software objects are often used to model the         real-world objects*that you find in everyday life
  - All JavaScript values, except primitives, are objects.In JavaScript, almost "everything" is an object.
  - In JavaScript, objects are king. If you understand objects, you understand JavaScript.
*/  
var car = {
  model : "lamborghini",
  color : 'black',
  start : function() {
    return 'started'
  },
  stop : function() {
    return 'stoped'
  }
};

```





```js
/* Methods
   - methods are actions ro behavior that can be performed on objects.
*/
var car = {
  model : "lamborghini",
  color : 'black',
  start : function() {
    return 'started'
  },
  stop : function() {
    return 'stoped'
  }
};

//call method
car.start() // "started"
car.stop() // "stoped"

```





