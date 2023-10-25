## setTimeout & setInterval

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
```

