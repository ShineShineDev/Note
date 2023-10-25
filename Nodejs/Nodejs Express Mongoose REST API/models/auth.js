const mongoose = require('mongoose');

const  AuthSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone : String,
    mail :  {
        type: String,
        required: true,
        trim : true
    },
    password :  {
        type: String,
        required: true,
        trim : true
    }
})



module.exports  = mongoose.model('users',AuthSchema)