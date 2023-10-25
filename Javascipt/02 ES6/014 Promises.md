## Promise

- `In JavaScript, a promise is a good way to handle *asynchronous* operations. It is used to find out if the asynchronous operation is successfully completed or not.`
- `Promises are similar to` [callback functions](https://www.programiz.com/javascript/callback) `in a sense that they both can be used to handle asynchronous tasks.`
- `JavaScript callback functions can also be used to perform synchronous tasks.`



#### Create a Promise

- `To create a promise object, we use the Promise() constructor.`

- `A JavaScript Promise object can be`

  - `Pending` : `While a Promise object is "pending" (working), the result is undefined.`
  - `Fulfilled` : ` When a Promise object is "fulfilled", the result is a value.`
  - `Rejected` :  `When a Promise object is "rejected", the result is an error object.`

- `A promise starts in a pending state. That means the process is not complete. `

- `If the operation is successful,the process ends in a fulfilled state. `

- `If an error occurs, the process ends in a rejected state.`

- `The Promise() constructor takes a function as an argument. The function also accepts two functions resolve() and reject()`.

- `You can perform an operation after a promise is resolved using methods then(), catch() and finally()`.

  ```js
  let propose  = new Promise(function(resolve,reject){ 
      // "Producing Code" (May take some time)
      const isSheLove = true; //May take some time ⌛* ⌛ 
      if(issheLove)
          resolve("My Baby Love Me...😍😍😍")
      else
          reject("She Doesn’t Love Me....😥")
  })
  ```





####  then method

- `The then() method is used with the callback when the promise is successfully fulfilled or resolved`

- `Always keep in mind that a then() method must take both the fulfillment hander and a rejection handler.So assuming that an error is encountered, there would be no rejection handler to handle the error.`

  ```js
  const propose  = new Promise(function(resolve,reject){ 
      // "Producing Code" (May take some time)
      const isSheLove = true; //May take some time ⌛* ⌛ 
      if(isSheLove)
          resolve("My Baby Love Me...😍😍😍")
      else
          reject("She Doesn’t Love Me....😥")
  })
  propose.then(result => console.log(result),error=> console.log(error)) // not recommended
  propose.then(result => console.log(result))
  /* Always keep in mind that a then() method must take both the fulfillment hander and a rejection handler.So assuming that an error is encountered, there would be no rejection handler to handle the error.*/
  ```
  
  



#### Catch method

- `If you are only going to define a single callback function (aka a fulfillment handler) in `then()`, then you will need to nest a catch() method at the bottom of the promise chain to catch any possible errors.`

  ```js
  const propose  = new Promise(function(resolve,reject){ 
      // "Producing Code" (May take some time)
      const isSheLove = false; //May take some time ⌛* ⌛ 
      if(isSheLove)
          resolve("My Baby Love Me...😍😍😍")
      else
          reject("She Doesn’t Love Me....😥")
  })
  propose.then(result => console.log(result)).catch(err => console.log(err))
  ```





#### finally() method

- `You can also use the finally() method with promises. The finally() method gets executed when the promise is either resolved successfully or rejected.`

  ```js
  const propose  = new Promise(function(resolve,reject){ 
      // "Producing Code" (May take some time)
      const isSheLove = false; //May take some time ⌛* ⌛ 
      if(isSheLove)
          resolve("My Baby Love Me...😍😍😍")
      else
          reject("She Doesn’t Love Me....😥")
  })
  propose
      .then(result => console.log(result))
      .catch(err => console.log(err))
      .finally(value => console.log(value))
  ```

  



#### Promise Chaining

- `Promise chaining is a syntax that allows you to chain together multiple asynchronous tasks in a specific order. `

- `This is great for complex code where one asynchronous task needs to be performed after the completion of a different asynchronous task.`

  ```js
  const add = (a, b) => {	
  	return new Promise((resolve, reject) => {		
  		setTimeout(() => {			
  			if (a < 0 || b < 0) {				
  				return reject('Numbers must be non-negative')
  			}
  			resolve(a + b)		
  		}, 2000)
  	})
  }
  
  add(1, 2).then((sum) => {	
  	console.log(sum) // Print 3
  	return add(sum, 4)
  }).then((sum2) => {	
  	console.log(sum2) // Print 7
  }).catch((e) => {
  	console.log(e)
  });
  ```

  



####  Promise vs Callback 

- The  promise syntax is user-friendly and easy to read.Error handling is easier to manage.

- The Callback syntax is difficult to understand.Error handling may be hard to manage.

  ```js
  //Promise
  api().then(function(result) {
      return api2() ;
  }).then(function(result2) {
      return api3();
  }).then(function(result3) {
      // do work
  }).catch(function(error) {
      //handle any error that may occur before this point 
  });
  
  //Callback
  api(function(result){
      api2(function(result2){
          api3(function(result3){
               // do work
              if(error) {
                  // do something
              }
              else {// do something}
          });
      });
  });
  ```
  
  



#### Producing code &  Consuming code

- `Sometime,you might hear Promise as Producing code and Consuming Code`

- `That's mean ,"Producing code" is code that can take some time and "Consuming code" is code that must wait for the result`

  ```js
  //"Producing Code" (May take some time)
  let myPromise = new Promise(function(myResolve, myReject) {
    myResolve(); // when successful
    myReject();  // when error
  });
  
  // "Consuming Code" (Must wait for a fulfilled Promise) //Consumers: then, catch
  myPromise
      .then(/*// executes when promise is resolved successfully*/)
      .catch(/*executes if there is an error*/);
  ```
  





#### Example

```js
function displayer(dataObj) {
    dataObj.forEach(dataObj=> document.write(`<li>${dataObj.name} : ${dataObj.email}</li>`))
}
//"Producing Code" (May take some time)
let fetchUser = new Promise((resolve, reject)=> {
    let req = new XMLHttpRequest();
    req.open('GET', "https://jsonplaceholder.typicode.com/users");
    req.onload = () => req.status == 200 ?resolve(req.response) : reject("Requset Fail...")
    req.send();
});
// "Consuming Code" (Must wait for a fulfilled Promise) //Consumers: then, catch
fetchUser
    .then(result=> JSON.parse(result)) //Promise Chaining 
    .then(data=> displayer(data))
    .catch(error => displayer(error))
    .finally(() => console.log("Done.."))
```



