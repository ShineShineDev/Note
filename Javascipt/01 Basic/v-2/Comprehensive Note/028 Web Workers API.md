Web Workers API

- JavaScript is a single-thread language because of only one call stack. meaning it can run only one script at the same time. If you do heavy calculations and DOM manipulation at the same time, the browser will likely throw you a message about the unresponsive page

- Web Worker API  is a JavaScript program running on a different thread, in parallel with main thread,independently from the main thread and website UI.

- Web Workers provide a multi-threading solution for asynchronous processing in the browser. Different parts of code can run simultaneously without blocking each other and communicate **using message passing techniques.**

- They are a useful tool to avoid the single-threading blocking and inefficiencies that come as part of JavaScript by design. 

  



:warning: Web Workers allow you to perform multi-threading in your Web applications.

:warning: Normally web workers are not used for such simple scripts, but for more CPU intensive tasks.







#### Uses of web worker

> web workers are amazingly helpful when one has to optimize their web application and improve the data load time.you can use workers to prefetch and store the data in advance and use it when needed during web app life cycle, without impacting web UI.

Other use cases where web workers must be used are :

1. network requests and returned data processing.
2. processing large arrays/JSON
3. large data manipulations.
4. complex calculations and so on ..







#### Types of web Worker

There are two types of web worker

- [Dedicated web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers#dedicated_workers)
- [Shared web worker](https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker)





#### Check Web Worker Support

```js
if (typeof(Worker) !== "undefined") {
   console.log("Yes! Web worker support!");
} else {
    console.log(" Sorry! No Web Worker support..");
}
```





#### Create a Web Worker Object

```js
//main.js
let web_worker;

if (typeof(web_worker) == "undefined") {
    web_worker = new Worker("demo_workers.js");
}
```





#### Create a Web Worker File

```js
//worker.js
onmessage = function(e){
    console.dir(e);
    postMessage(e.data);
}
```







#### Communication  

- Communication between **the main page and worker** is happening through method `postMessage` and event handler `onmessage`.

  ```js
  //main.js
  if (window.Worker) {
      
      let myWorker = new Worker("worker.js");
      
      let message = 'A message for you';
      
      //send
      myWorker.postMessage(message);
      
      //receive
      myWorker.onmessage = function (e) {
          console.dir("Message received from Worker script: " + e.data);
          console.dir(e.data);
      }
  }
  
  
  //worker.js
  //receive
  onmessage = function(e){
      console.dir("Message received from main script: " + e.data);
      //send
      postMessage(e.data);
  }
  ```
  
  



### Example

:warning: You should run this script on recat React or Vuejs

#### Index.html

```html
<p>If you do heavy calculations in main script.The page becomes unresponsive.</p>

<button onclick="alert('alert...')">Show Alert</button>
<button onclick="heavyTask()">Calculation Heavy Task</button>
<button onclick="heavyTaskWithWorker()">Calculation Heavy Task with Web Worker API</button>
   

<script>
    //heavy task in main script
    function heavyTask(){ 
        for(let i = 0; i < 1000000;i++){
            console.log(i);
        } 
    }

    function heavyTaskWithWorker(){
        if (window.Worker) {
            var myWorker = new Worker("worker.js");
            var message = 'A message for you';
            myWorker.postMessage(message);
            myWorker.onmessage = function (e) {
                console.dir(e.data);
            }
        }
    }
</script>
```

#### worker.js

```js
onmessage = function(e){
    console.dir("Message received from main script...");
    for(let i = 0; i < 100000;i++){
        console.log(i);
    } 
    console.dir(e);
    postMessage(e.data);
}
```





```js
/* Web Workers API ()
	- JavaScript is a single-thread language because of only one call stack. meaning it can		  run only one script at the same time. If you do heavy calculations and DOM manipulation	   at the same time, the browser will likely throw you a message about the unresponsive         page
	- Web Worker API  is a JavaScript program running on a different thread, in parallel with       main thread,independently from the main thread and website UI
	- Web Workers allow you to perform multi-threading in your Web applications.
	- Communication between *the main page and worker* is happening through method             	   `postMessage` and event handler `onmessage`.
*/


/* Warning
  - Normally web workers are not used for such simple scripts, but for more CPU intensive 		tasks.
*/




// index.html
<p>If you do heavy calculations in main script.The page becomes unresponsive.</p>
<button onclick="alert('alert...')">Show Alert</button>
<button onclick="heavyTask()">Calculation Heavy Task</button>
<button onclick="heavyTaskWithWorker()">Calculation Heavy Task with Web Worker API</button>
<script>
    //heavy task in main script
    function heavyTask(){ 
        for(let i = 0; i < 1000000;i++){
            console.log(i);
        } 
    }

    function heavyTaskWithWorker(){
        if (window.Worker) {
            var myWorker = new Worker("worker.js");
            var message = 'A message for you';
            myWorker.postMessage(message);
            myWorker.onmessage = function (e) {
                console.dir(e.data);
            }
        }
    }
</script>


//worker.js
onmessage = function(e){
    console.dir("Message received from main script...");
    for(let i = 0; i < 100000;i++){
        console.log(i);
    } 
    console.dir(e);
    postMessage(e.data);
}







// Web Workers allow you to perform multi-threading in your Web applications.in parallel with main thread,independently from the main thread and website UI.Normally web workers are not used for such simple scripts, but for more CPU intensive tasks.


web workers are amazingly helpful when one has to optimize their web application and improve the data load time
Other use cases where web workers must be used are :

1. network requests and returned data processing.
2. processing large arrays/JSON
3. large data manipulations.
4. complex calculations and so on ..

//main.js
if (window.Worker) {
    
    let myWorker = new Worker("worker.js");
    
    let message = 'A message for you';
    
    //send
    myWorker.postMessage(message);
    
    //receive
    myWorker.onmessage = function (e) {
        console.dir("Message received from Worker script: " + e.data);
        console.dir(e.data);
    }
}


//worker.js
//receive
onmessage = function(e){
    console.dir("Message received from main script: " + e.data);
    //send
    postMessage(e.data);
}
```

