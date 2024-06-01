const mongoose = require('mongoose');

// db url
const dBURL = 'mongodb://localhost/mongoose_db';

// set up default connection
mongoose.connect(dBURL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('You are now connected to Mongo!'))
    .catch( err => console.error('MongoDB connection error:', err));

// get connecton event
const dbConnection = mongoose.connection;

// define schema
const UserSchema = new mongoose.Schema({
    name : String,
    age : Number
})

// compile model from schema
const UserModel = mongoose.model('Users',UserSchema);


// update docs
UserModel.updateMany({age:20},{age:22})
    .exec((err,res)=>{
       if(err) return console.log(err)
        console.log(res)
    })