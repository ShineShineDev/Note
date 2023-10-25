##                                                                                                                                                                                                                    Delete

- [`Model.deleteMany()`](https://mongoosejs.com/docs/api.html#model_Model.deleteMany)
- [`Model.deleteOne()`](https://mongoosejs.com/docs/api.html#model_Model.deleteOne)
- [`Model.findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)
- [`Model.findByIdAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
- [`Model.findOneAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)
- [`Model.findOneAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)

  





### deleteOne

- `To delete a  document, we use the `**`deleteOne()` **`method.`

- `The first parameter is a query object defining which document to delete.`

- ` If you don't specify any parameter in first parameter this method will delete first document in collection.`

- `If the query finds more than one document, only the first occurrence is deleted.`

- `Syntax`  : **`Model.deleteOne(trageObj).exec(cb)`**

  ```js
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
  
  UserModel.deleteOne({name:'Shine Shine Updated!'}).exec((err,res)=>{
      console.log(res)
  })
  
  // result
  { n: 1, ok: 1, deletedCount: 1 }
  ```
  
  
  
  
  
  



### deleteMany

- `To delete more than one document, use the `**`deleteMany()`** `method.`

- `The first parameter is a query object defining which documents to delete.`

- ` If you don't specify any parameter this method will delete all documents in collection.`

- `Syntax` : **`Model.deleteMany(targetObj).exec(cb)`**

  ```js
UserModel.deleteMany({name:'Shine Shine'}).exec((err,res)=>{
      console.log(res)
  })
  // result
  { n: 3, ok: 1, deletedCount: 3 }
  ```
  
  
  
  



### findByIdAndDelete

- `Finds a matching document by id and delete it`
- `Syntax` : **`Model.findByIdAndUpdate(id, update, options, callback)`**

```js
UserModel.findByIdAndDelete('608a7ae5356362206ce553ba').exec((err,res)=>{
    console.log(res)
})
// result
{ _id: 608a7ae5356362206ce553ba, name: 'User Three', age: 20, __v: 0 }
```












