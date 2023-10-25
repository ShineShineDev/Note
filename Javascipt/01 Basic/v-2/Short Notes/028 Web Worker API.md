##  Web Worker API

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




```

