## Async and Await

- `async and await make promises easier to write`






#### Promise

- `In JavaScript, a promise is a good way to handle *asynchronous* operations. It is used to find out if the asynchronous operation is successfully completed or not.`

- `Promises are similar to` [callback functions](https://www.programiz.com/javascript/callback) `in a sense that they both can be used to handle asynchronous tasks.`

  



#### Synchronous programming

```js
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);
//Computing Line By Line
```





#### Async

- `*async* makes a function return a Promise`

- `The keyword *async* before a function makes the function return a promise`

  ```js
  async function myFunction() {
    return "Hello";
  }
  // Is the same as
  function myFunction() {
    return Promise.resolve("Hello");
  }
  ```

  



#### Await

- `*await* makes a function wait for a Promise`

- `The await keyword can only be used inside an async function.`

- `The await keyword makes the function pause the execution and wait for a resolved promise before it continues`

  ```js
  let value = await promise;
  
  //example
  async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
    });
    document.writer(await myPromise)
  }
  myDisplay();
  ```
  






#### How to use the Promise:

```js
function myDisplayer(value){
    document.write(value)
}

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   // waits until the request completes...
    if (response.status === 200) 
        return await response.text()
    
}
fetchUsers()
    .then(value => myDisplayer(value))
	.catch(error=> myDisplayer(error))
```





```js
/* Async and Await
  - async and await make promises easier to write
  - Promise
  	- In JavaScript,a promise is a good way to handle *asynchronous* operations. It is used to find out if       the asynchronous operation is successfully completed or not.
  	- Promises are similar to` callback functions in a sense that they both can be used to handle               *asynchronous tasks*.
*/
/* Async
   - async makes a function return a Promise
   - The keyword async before a function makes the function return a promise`
*/ 
/* Await
   - await makes a function wait for a Promise
   - The await keyword can only be used inside an async function
   - The await keyword makes the function pause the execution and wait for a resolved promise before it c      ontinues
*/  
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
   // waits until the request completes...
    if (response.status === 200) 
        return await response.text()
}
fetchUsers()
    .then(value => console.log(value))
	.catch(error=> console.log(error))
```

