//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/my_database';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
then(()=> console.log('You are now connected to Mongo!')).
catch( err => console.error('MongoDB connection error:', err));

// You can also connect to multiple mongos instances for high availability in a sharded cluster
// mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);

// Get Connection instance
const db = mongoose.connection;

// Disconnects all connections.
// mongoose.disconnect()