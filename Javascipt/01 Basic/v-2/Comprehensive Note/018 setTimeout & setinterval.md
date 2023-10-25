## Timing Events

- JavaScript can be executed in time-intervals.

- These time intervals are called timing events.

- The two key methods to use with JavaScript are:

  - `setTimeout(function, milliseconds`)
  - `setInterval(function, milliseconds)`

  



####  setTimeout()

-  Executes a function, after waiting a specified number of milliseconds.

- The `window.setTimeout()` method can be written without the window prefix.

- The first parameter is a function to be executed.

- The second parameter indicates the number of milliseconds before execution.

- To track the timeout,`setTimeout()` *also returns a numeric timeout ID*

- `clearTimeout()` method stops the execution of the function specified in setTimeout().

- The `clearTimeout()` method uses the variable returned from `setTimeout()`:

  ```js
  setTimeout(function(){
      console.log("setTimeOut method is working");
  },3000)
  
  //clearTimeout
  let alert = setTimeout(function(){
      console.log("setTimeOut method is working");
  },3000)
  clearTimeout(alert);
  ```





####  setInterval()

- `setInterval()` Same as `setTimeout()`, but `repeats` the execution of the function continuously.

- The `window.setInterval()` method can be written without the window prefix.

- The first parameter is the function to be executed.

- The second parameter indicates the length of the time-interval between each execution.

- To track the timeout, `setTimeout()` *also returns a numeric timeout ID*

-  `clearInterval()` method stops the executions of the function specified in the setInterval() method.

- The `window.clearInterval()` method can be written without the window prefix.

- The `clearInterval()` method uses the variable returned from `setInterval()`:

  ```js
  setInterval(() => console.log("setInterval method is working"),3000)
  //clearInterval
  <button onclick="clearInterval(showAlert) ">stop it</button>
  let showAlert = setInterval(() => alert(new Date().getMilliseconds()),3000)
  
  ```

  





```js
/* SetTimeout
   Executes a function, after waiting a specified number of milliseconds.
*/
setTimeout(function(){
    console.log("setTimeOut was worked !");
},3000)

//clearTimeout
let alert = setTimeout(function(){
    console.log("setTimeOut method is working");
},3000)
clearTimeout(alert);




/* setInterval
   - setInterval() Same as setTimeout(), but repeats the execution of the function                continuously.
*/
setInterval(() => console.log("setInterval method is working"),3000)
//clearInterval
<button onclick="clearInterval(showAlert) ">stop it</button>
let showAlert = setInterval(() => alert(new Date().getMilliseconds()),3000)




// example one
var muc = [
    " It is been a long day ",
    " without you my friend",
    " And I will tell you about it",
    " when I see you again",
    " We have come a long way",
    " from where we began",
    " Oh, I will tell you about it",
    " When I see you again",
    " When I see you again",
    " Oh - Oh",
    " Oh - Oh",
    " Oo - Oo",
    " Oo - Oo"
];
let ind = 0;
setInterval(() => {
   // console.clear();
    console.log(muc[ind]);
    ind++;
},3000)



// example two
let count = 0;
let repeating = setInterval(() => {
   // console.clear();
    console.log(count);
    count++;
    if(count == 10){
        clearInterval(repeating);
        console.log("Done...");
    }
},3000)



   

    
    
 
        
var msg = [
    "I am Optimus Prime ",
    "and I send this message",
    "to any surviving Autobots",
    "taking refuge among the stars",
  	"We are here",
    "...........",
    "We are waiting",
];
let ind = 0;
setInterval(() => {
    console.log(msg[ind]);
    ind++;
},2000)
console.clear();

```

