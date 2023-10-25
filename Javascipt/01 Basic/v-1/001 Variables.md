###  Variables


- `As a program runs, it needs to hold information in its memory. `
- `Variables allow us to store, change and access`
- `In javascript,if the variable has no value defalut value is undefined`
- `In a variables have ,keyword,name(identifiers),scope,size and ,lifetime,`





### 4 Ways to Declare a JavaScript Variable:

- Using `var`
- Using `let`
- Using `const`
- Using nothing





### var keyword

- Function(local) scope 
- var can reassign and  re-declare 
- If a variable is declared outside of a function it will become **Global** and will be accessible from anywhere,
- The `var` keyword is used in all JavaScript code from 1995 to 2015.

```
// ver keyword
// Function(local) scope 
// var can reassign and  re-declare 

// function  or local scope
function myFun(){ 
       var nameInLocal = "shine" 
   }   
   
//global scope
var nameInGlobal = 'shine' 

//can reassign
nameInGlobal = 'developer'

// redeclaring same variables again
var nameInGlobal = "shine shine"
```





### let (es6)

- block scope  
- cannot re-declare
- can change(reassing) the value

```js
// let keyword
// block scope
// can change(reassing) the value
// cannot re-declare

let name = "shine"   
if(true){
       name = 'developer' //reassing
   }

// You cannot re-declare a variable declared with let or const.
let carName = "Volvo";
let carName;
```





### const  (es6)

- block  scope 

- can’t reassign

- can’t re-declare 

```js
// const keyword
// block  scope 
// can’t reassign
// can’t re-declare 
const PI = 3.14
if(true){        
    PI = 1.3 //can’t reassigned
}
```





### Naming Conventions

  widely accepted as a standard in the JS community

 - Case sensitive for variable

 - Self-descriptive or meaningful  variable

 - camelCase for Var keyword , Functions and Methods  (getName)

 - Prefix with is,are,has to distinguish a boolean (isAuth)

 - PascalCase for Class and component Name (SoftwareDeveloper )

 - Underscore for private variable/function (not  really enforced by JavaScript, should be avoided to be used on the instance of the class)

 - Capital letters (UPPERCASE,or PIE_VALEU) for constant

 - Global variable is declared at the top of a project/file 

   it is  is written in camelCase if it is mutable and in UPPERCASE if it is immutable

- files - PascalCase  in frontend let name = "shine"   app ,kebab-case in backend app 





### Types


-  Dynamic types
-  JavaScript variables can hold many **data types**: numbers, strings, objects and more
-  Without data types, a computer cannot safely solve this,so need 
-  8 basic data types in JavaScript.







#### Primitives or Value Type

A primitive (primitive value, primitive data type) is data that is not an **object** and has no methods

 primitive type has a fixed size

- null
- number
- string
- undefined
- boolean
- symbol
- bigInt



#### Reference or **non**-**primitive**  or composite , Objects Type 

- object

- array

- function







## summery code

```js
// ver keyword
// Function(local) scope 
// var can reassign and  re-declare 

// function  or local scope
function myFun(){ 
       var nameInLocal = "shine" 
   }   
   
//global scope
var nameInGlobal = 'shine' 

//can reassign
nameInGlobal = 'developer'

// can re-declear
var nameInGlobal;

// redeclaring same variables again
var nameInGlobal = "shine shine"

-------------------------------------------------------------------------------------------
    
    
// let keyword
// block scope
// can change(reassing) the value
// cannot re-declare

let name = "shine"   
if(true){
       // can reassign
       name = 'developer' 
   }

// can reassign
name = 'Porgrammer'

// cannot re-declare 
let name;
let name = "spidey"


--------------------------------------------------------------------------------


// const keyword
// block  scope 
// can’t reassign
// can’t re-declare 
const PI = 3.14
if(true){        
    PI = 1.3 //can’t reassigned
}
---------------------------------------------------------------------------------------




//Declaring 
var carName;
let carName;

// assign 
carName = "Volvo";


// One Statement, Many Variables
let person = "John Doe", carName = "Volvo", price = 200;

// A declaration can span multiple lines:
let person = "John Doe",
carName = "Volvo",
price = 200;


// You cannot re-declare a variable declared with let or const.
// It's a good programming practice to declare all variables at the beginning of a script.
```



:warning:`Variables can represent numeric values, characters, character strings, or memory addresses. Variables play an important role in computer programming because **they enable programmers to write flexible programs**. Rather than entering data directly into a program, a programmer can use variables to represent the data.`