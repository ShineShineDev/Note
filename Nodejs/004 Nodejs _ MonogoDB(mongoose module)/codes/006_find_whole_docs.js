const mongoose = require('mongoose');

// db url
const dBURL = 'mongodb://localhost/mongoose_db';

mongoose.connect(dBURL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log('You are now connected to Mongo!'))
    .catch( err => console.error('MongoDB connection error:', err));

const dbConnection = mongoose.connection;

const UserSchema = new mongoose.Schema({
    name : String,
    age : Number
})

const UserModel = mongoose.model('Users',UserSchema);

UserModel.find({}).exec((err,res)=>console.log(res))

// sorting
//UserModel.find({}).sort({age:-1}).exec((err,res)=>console.log(res))

// skip the number of documents
// UserModel.find({}).skip(3).exec((err,res)=>console.log(res));