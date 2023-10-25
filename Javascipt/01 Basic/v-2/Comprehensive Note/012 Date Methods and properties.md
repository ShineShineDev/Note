# Date Methods and Properties

- By default, JavaScript will use the browser's time zone and display a date as a full text string:
- JavaScript counts months from 0 to 11. January is 0. December is 11.

----
## Date Met Properties
| Properties  | Description                                                  |
| ----------- | :----------------------------------------------------------- |
| constructor | The constructor property returns a date's constructor function.In JavaScript, the constructor property returns the constructor function for an object. |
| prototype   | Allows you to add new properties and methods                 |

 

## Most Common Use Date Methods

| Method               | Description                                                  |
| -------------------- | :----------------------------------------------------------- |
| toLocaleString()     | Returns a date string using a current locale format.("9/17/2020, 8:22:20 PM"") |
| toLocaleTimeString() | Returns the time segment of the specified Date as a string.("8:22:20 PM") |
| toLocaleDateString() | Returns the date segment of the specified date using the current locale.(""9/17/2020"") |
| getHours()           | Get the **hour** (0-23)                                      |
| getMinutes()         | Get the **minute** (0-59)                                    |
| getSeconds()         | Get the **second** (0-59)                                    |
| getMilliseconds()    | Get the **millisecond** (0-999)                              |
| getTime()            | Get the time (milliseconds since January 1, 1970)            |
| getDay()             | Get the weekday as a number (0-6)                            |
| Date.now()           | Get the time. ECMAScript 5.                                  |
| getFullYear()        | Get the **year** as a four digit number ('2020')             |
| getMonth()           | Get the **month** as a number (0-11)                         |
| getDate()            | Get the **day** as a number (1-31)                           |





### Summery

```js
const date1 = new Date();
console.log(date1); // 2021-12-09T18:28:00.076Z

const date2 = Date();
console.log(date2); // Fri Dec 10 2021 00:58:00 GMT+0630 (Myanmar Time)


// best way to get time
console.log(date1.toLocaleString()) // 12/10/2021, 1:18:50 AM
console.log(date1.toLocaleTimeString()) // 1:19:46 AM



// get Day
console.log('day ' + date1.getDay());

// get hour
console.log('hours ' + date1.getHours());

// get minutes
console.log('minutes ' + date1.getMinutes());

// get second
console.log('seconds ' + date1.getSeconds());

// get milliseconds
console.log('milliseconds ' + date1.getMilliseconds());

// get fullyear
console.log('year ' + date1.getFullYear())

// get month
console.log('month ' + date1.getMonth())

// get Date
console.log('date ' + date1.getDate())



console.log('milliseconds since January 1, 1970 => ' + date1.getTime()); //1639074809328
console.log('milliseconds since January 1, 1970 => ' + Date.now()); //1639074823377
```



Speed Test

```js
var startTime = new Date().getTime();
let s;
for(let i= 0; i < 1000000000;i++){
    s=+i;
}
var endTime = new Date().getTime();
console.log('time' + ": " + (endTime - startTime) + "ms");
```

