// require module
const mongoose = require('mongoose');
// Module that estimates the size of an object in memory
const sizeof = require('object-sizeof');


// db url
const mongoDB = 'mongodb://localhost/mongoose_db';

// Set up default mongoose connection with error handling
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
  then(()=> console.log('You are now connected to Mongo!')).
catch( err => console.error('MongoDB connection error:', err));

// define schema
const PostSchema = mongoose.Schema({
    title: String,
    body : String
})
// compile PostModel from PostSchema
const PostModel = mongoose.model('Post',PostSchema);



const normalDoc =  PostModel.findOne();
// To enable the `lean` option for a query, use the `lean()` function.
const leanDoc =  PostModel.findOne().lean();

sizeof(normalDoc); // >= 1000
sizeof(leanDoc); // 86, 10x smaller!

// In case you were wondering, the JSON form of a Mongoose doc is the same
// as the POJO. This additional memory only affects how much memory your
// Node.js process uses, not how much data is sent over the network.
JSON.stringify(normalDoc).length === JSON.stringify(leanDoc.length); // true