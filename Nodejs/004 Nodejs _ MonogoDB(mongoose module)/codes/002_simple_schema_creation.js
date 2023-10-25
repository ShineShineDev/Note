// import module 
const mongoose = require('mongoose');


// create Schema with mongoose.Schema method
const PostSchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    author: {type : String, required : true},
    body:   String,
    date: { type: Date, default: Date.now },
});



// to add additional keys later, use Schema.add()method
PostSchema.add({
    viewer : Number
})


// We can add custom instance method for a schema with Schema.method method.
// ⚠️ Do not declare function with ES6 arrow functions (=>)
PostSchema.method("getInfo",function(){
    console.log('title : ' + this.title + ' , author ' + this.author); 
})



// compile model from schema
const PostModel = mongoose.model('Post', PostSchema);


// create model
const newPost = new PostModel({
	title : 'post one',
	author : 'Shine Shine',
	body : 'lorem isupm site',
	viewer : 30
})

console.log(newPost);
newPost.getInfo()