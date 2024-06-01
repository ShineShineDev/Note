const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: String,
        age : Number
    }
);

const UserModel = mongoose.model('Users', UserSchema);
console.log(UserModel);