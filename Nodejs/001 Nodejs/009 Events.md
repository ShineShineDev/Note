#                            Events

> Every action() on a computer is an event. Like when a connection is made or a file is opened or keypress .etc..
>
> Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
>
> Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:



- `import events module`

- `create EventEmitter object`

- `Assign event handler with on()method` 

- `fire event with emit method`

  ```js
  const events = require('events'); // import events
  
  const eventsEmitter = new events.EventEmitter(); // create EventEmitte object
  
  eventsEmitter.on('myEvent',function(){ // assign event handler
      console.log('myEvetn working...')
  })
  eventsEmitter.emit('myEvent') // fire event
  ```

  





#### Custom Events





https://www.tutorialsteacher.com/nodejs/nodejs-eventemitter



#### Console events moduel

```j
const dv = require('events');
console.log(dv);

[Function: EventEmitter] {
  once: [Function: once],
  on: [Function: on],
  EventEmitter: [Circular],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  init: [Function],
  listenerCount: [Function]
}

console.log(new dv.EventEmitter())
```







### For PN

```js
/*Events
 - Every action() on a computer is an event. Like when a connection is made or a file is opened or keypress.etc..
 - Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
 - Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file
*/ 
  
 const events = require('events'); // import events
 
 const eventsEmitter = new events.EventEmitter(); // create EventEmitte object
 
  eventsEmitter.on('myEvent',function(){ // assign event handler
      console.log('myEvetn working...')
  })
  eventsEmitter.emit('myEvent') // fire event

//Console events moduel
const eve = require('events');
console.log(eve);
[Function: EventEmitter] {
  once: [Function: once],
  on: [Function: on],
  EventEmitter: [Circular],
  usingDomains: false,
  captureRejectionSymbol: Symbol(nodejs.rejection),
  captureRejections: [Getter/Setter],
  errorMonitor: Symbol(events.errorMonitor),
  defaultMaxListeners: [Getter/Setter],
  init: [Function],
  listenerCount: [Function]
}
console.log(new eve.EventEmitter())
```

