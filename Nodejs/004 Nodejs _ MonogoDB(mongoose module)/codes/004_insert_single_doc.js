// require module
const mongoose = require('mongoose');

// db url
const mongoDB = 'mongodb://localhost/mongoose_db';

// Set up default mongoose connection with error handling
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
  then(()=> console.log('You are now connected to Mongo!')).
catch( err => console.error('MongoDB connection error:', err));

// Get Connection instance
const dbConnection = mongoose.connection;


// define schema
const UserSchema = new  mongoose.Schema({
    name : String,
    age : Number
})

// compile Usermodel from UserSchema
const UserModel = mongoose.model('Users',UserSchema);

//  create new document
const newUser = new UserModel({ 
    name : 'Shine Shine',
    age : 23
 });

// callback function
const callback = err =>{
     if (err) return console.log(err);
     console.log('Saved !');
}

// create new collection and insert a doc at the same time with modelInstance.save() method
newUser.save(callback);
 