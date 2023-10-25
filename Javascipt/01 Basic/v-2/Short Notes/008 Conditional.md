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

