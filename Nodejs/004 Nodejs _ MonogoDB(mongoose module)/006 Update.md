##                                                                                                                                                                                                    Update

>  ❝  `To update document mongoose provide several methods`❞  

- [`Model.updateOne()`](https://mongoosejs.com/docs/api.html#model_Model.updateOne)

- [`Model.updateMany()`](https://mongoosejs.com/docs/api.html#model_Model.updateMany)

- [`Model.findByIdAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)

- [`Model.findOneAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)

- [`Model.findOneAndReplace()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndReplace)

- [`Model.replaceOne()`](https://mongoosejs.com/docs/api.html#model_Model.replaceOne)

- `update()`

  



>  ⚠️ ` findOneAndUpdate() and findOneAndDelete() are deprecated` 





### updateOne()

- `Update specific a doc `

- `Syntax :` **`Model.updateOne(targetObj,updateObj).exec(cb)`**

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
  
  // update a doc 
  UserModel.updateOne({name:'Shine Shine'},{name:'Shine Shine Updated!'})
      .exec((err,res)=>{
         if(err) return console.log(err)
          console.log(res)
      })
  
  // { n: 1, nModified: 1, ok: 1 }
  ```

  



### updateMany

- **`updateMany`** `functions for updating all documents matching the given filter.`

- `Syntax` : **`Model.updateMany(filter,updateObj).exec(cb)`**

  ```js
  UserModel.updateMany({age:20},{age:22})
      .exec((err,res)=>{
         if(err) return console.log(err)
          console.log(res)
      })
  
  // result
  { n: 2, nModified: 2, ok: 1 }
  ```

  





### findByIdAndUpdate

- `Finds a matching document by id and update it`

- `Syntax` : **`Model.findByIdAndUpdate(id, update, options, callback)`**

  ```js
  UserModel.findByIdAndUpdate("6088299c91e0541064115131",{age:25})
      .exec((err,res)=>{
         if(err) return console.log(err)
          console.log(res)
      })
  
  // result
{ _id: 6088299c91e0541064115131, name: 'User Three', age: 22, __v: 0 }
  ```

  
  
  

