## JavaScript Closures

- `Global variables can be made local (private) with closures.`

- `A closure is a function having access to the parent scope, even after the parent function has closed.`

- `Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.`

  ```js
  //Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
  function myFunction() {
    a = 4;//Global 
  }
  
  
  let counter = 0; // Global 
  function add() {
    counter += 1;  //access Global 
  }
  add();//1
  add();//2
  add();//3
  
  
  let counter = 0;
  function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  add();
  add();
  add(); //The counter should now be 3. But it is 1.
  //It did not work because we reset the local counter every time we call the function.
  
  
  //Global variables can be made local (private) with closures
  //self-invoking functions
  let counter = 0;
  const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  ```

  



```js
/* Global variables can be made local (private) with closures.
 - A closure is a function having access to the parent scope, even after the parent function has closed.
 - Variables created without a declaration keyword (var, let, or const) are always global, even if they       are created inside a function.
*/ 
let counter = 0; // Global 
function add() { counter += 1;/*access Global*/ }
add();add();add();//3

let counter = 0;
function add() {
  let counter = 0;
  counter += 1;
  return counter;
}
add();//1
add();//1
add();//1(It did not work because we reset the local counter every time we call the function.)

//Make Global variables to local(private) with closure(with self-invoking functions)
let counter = 0;
const add = (function () {
  let counter = 0;
  return function () {counter += 1; return counter} //closure functions
})();
add();//1
add();//3
add();//3
```

