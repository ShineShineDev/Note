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

