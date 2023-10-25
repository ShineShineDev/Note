## Variables 

```js
// var keyword
// Function scope 
// var can reassign and  re-declare 

// function  scope
function myFun(){ 
    for(var i = 0; i < 10;i++){
    }
    console.log(i);
    //reassign 
    i = 'var is function scope'; 
    console.log(i);
}   
   
//If a variable is declared outside of a function it will become Global and will be accessible from anywhere,
var nameInGlobal = 'global scope' 

//re-declear
var nameInGlobal;

// redeclaring same variables again
var nameInGlobal = "shine shine"

-------------------------------------------------------------------------------------------
    
// let keyword
// block scope
// can change(reassing) the value
// cannot re-declare

function myFun(){ 
       // block scope
       for(let i = 0; i < 10;i++){
       }
    console.log(i); // can't call,because let is block scope
} 

let name = 'javascript'

// can reassign
name = 'JS'

// cannot re-declare 
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

