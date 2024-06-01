const events = require('events'); // import events

const eventsEmitter = new events.EventEmitter(); // create EventEmitte object

eventsEmitter.on('myEvent',function(){ // assign event handler
    console.log('myEvetn working...')
})
eventsEmitter.emit('myEvent') // fire event