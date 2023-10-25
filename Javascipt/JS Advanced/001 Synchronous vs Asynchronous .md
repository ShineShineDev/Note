## Synchronous Vs Asynchronous

> `Javascript is the synchronous single-threaded language but with the help of event-loop and promises, JavaScript is used to do asynchronous programming`
>
> `Synchronous means the code runs in a particular sequence of instructions given in the program, whereas asynchronous code execution allows to execution of the upcoming instructions immediately.`





####  Synchronous 

- `As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions(Line by Line) given in the program. Each instruction waits for the previous instruction to complete its execution.`

  ```js
  console.log('First');
  console.log('Second');
  console.log('Third');
  ```






####  Asynchronous

- `In asynchronous code  every instruction waits for its previous instruction to get executed. Due to this nature of synchronous programming, Sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. `

- `Asynchronous code execution allows to execution next instructions immediately and doesn't block the flow because of previous instructions.`

- ` Asynchronous programming we can avoid the blocking of tasks due to the previous instructions.`

  ```js
  console.log('First');
  
  // Set timeout for 2 seconds
  setTimeout(() => console.log('Second'), 2000);
  
  console.log('Third');
  ```
  






#### Difference Between Synchronous vs Asynchronous JavaScript?

- `Async is multi-thread, which means operations or programs can run in parallel. Sync is single-thread, so only one operation or program will run at a time.`
- `Async is non-blocking, which means it will send multiple requests to a server. Sync is blocking — it will only send the server one request at a time and will wait for that request to be answered by the server.`
- `Async increases throughput because multiple operations can run at the same time. Sync is slower and more methodical.`





```js
/*Synchronous Vs Asynchronous
  - Javascript is the synchronous single-threaded language but with the help of event-loop and promises,       JavaScript is used to do asynchronous programming.
*/
/* Synchronous
  - Synchronous means the code runs in a particular sequence of instructions(Line by Line) given in the       program. Each instruction waits for the previous instruction to complete its execution.
*/
console.log('First');
console.log('Second');
console.log('Third');

/* Asynchronous
 - Due to every instruction waits for its previous instruction to get executed,sometimes important            instructions get blocked due to some previous instruction.
 - Asynchronous code execution allows to execution next instructions immediately and doesn't block the        flow because of previous instructions
*/ 
console.log('First');
// Set timeout for 2 seconds 
setTimeout(() => console.log('Second'), 2000);
console.log('Third');
```

