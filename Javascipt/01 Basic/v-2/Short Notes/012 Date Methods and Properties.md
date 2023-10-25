## Date Methods and Properties

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

