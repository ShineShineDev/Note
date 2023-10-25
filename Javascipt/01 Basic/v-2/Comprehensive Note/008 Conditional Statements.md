##  Conditional 

Conditional statements are used to perform different actions based on different conditions.



#### if  Statement

- `if` statement to specify a block of JavaScript code to be executed if a condition is true.

  ```js
  let hour = new Date().getHours()
  if(hour > 19 ){ // 7 O'clock
      console.log("good night")
  }
  ```

  

#### The else Statement

- `else` statement to specify a block of code to be executed `if `the condition is false.

  ```js
  let hour = new Date().getHours();
  if(hour < 19 && hour > 5){
      console.log("Day")
  }else{
      console.log("Night")
  }
  ```





#### else if Statement

- Use the `else if` statement to specify a new condition if the first condition is false.

  ```js=
  let hour = new Date().getHour();
  if (hour < 11 && hour > 5) {
      console.log('Good Morning');
  } else if (hour > 11 && hour < 18) {
      console.log('Good afternoon');
  } else {
      console.log('Good Night');
  }
  ```

  



#### Switch Statement

-  switch statement to select one of many code blocks to be executed.
-  switch(*expression*) { case *x*:  *// code block \*  break;  case *y*: *// code block \*  break;default: // *code block*}
-  Value of the expression is compared with the values of each case.there is a match, the associated block of code is executed
-  `break` keyword, it breaks out of the switch block.If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
-  `default` keyword specifies the code to run if there is no case match: If there is no match, the default code block is executed

```js
let day = new Date().getDay()
switch(day){
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 :
        cosole.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    default: 
        console.log("Saturday");
}

```





```js
let hour = new Date().getHours();

if (hour < 11 && hour > 5) {
    console.log('Good Morning');
} else if (hour > 11 && hour < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good Night');
}

//switch  Statement
let day = new Date().getDay()
switch(day){
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 : 
        console.log("Tuesday");
        break;
    case 3 :
        cosole.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 : 
        console.log("Friday");
        break;
    default: 
        console.log("Saturday");
}
```

