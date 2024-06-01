## Find or Retrieve Document 

- [`Model.find()`](https://mongoosejs.com/docs/api.html#model_Model.find)
- [`Model.findById()`](https://mongoosejs.com/docs/api.html#model_Model.findById)
- [`Model.findByIdAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndDelete)
- [`Model.findByIdAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndRemove)
- [`Model.findByIdAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate)
- [`Model.findOne()`](https://mongoosejs.com/docs/api.html#model_Model.findOne)
- [`Model.findOneAndDelete()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndDelete)
- [`Model.findOneAndRemove()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndRemove)
- [`Model.findOneAndReplace()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndReplace)
- [`Model.findOneAndUpdate()`](https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate)
- [See more]((https://mongoosejs.com/docs/api/query.html#query_Query))







###  find()

- `To find the documents of a collection/model we can use  `**`Model.find()`**  `method `

- `If you don't specific any object({}) of the first parameter of find method mongoose will find whole docs in collection`

- `Syntax`:`Model.find({target}, projection, options, callback)`

  ```js
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
  
  // find all
  UserModel.find({},(err,result)=>{
      console.log(result);
  })
  // find specific doc
  UserModel.find({nane:'Shine Shine'},(err,result)=>{
      console.log(result);
  })
  // find all docs with projection
  UserModel.find({},{name:1,_id:0},(err,result)=>{
      console.log(result);
  })
  ```

  

  



###  findOne()

- `Finds a single document by specific field.` 

- `Syntax` :   **`Model.findOne(conditions, projection, options, callback)`**

  ```js
  // find singe doc
  UserModel.findOne({name:'Shine Shine'},(err,result)=>{
      console.log(result);
  })
  ```
  
  





###  findById()

- `Finds a single document by` **`  _id field`**

- `Syntax` :   **`findById(id, projection, options, callback)`** 

  ```js
  // find singe doc
  UserModel.findById("6088299c91e054106411512f"},(err,result)=>{
      console.log(result);
  })
  ```

  





###  count()

- `Counts number of matching documents in a database collection.`

- `Syntax` : **`Model.count(targeObj, [callback])`**

  ```js
  UserModel.count({},function(err,count){
    console.log("No Of Records : "+count);
  });
  
  // Find Number of Documents in users Schema having age < 20
  userModel.count({age:{$lte:20}},function(err,count){
    console.log("age < 20 :"+count);
  });
  ```

  





### where()

- `Creates a Query, applies the passed conditions, and returns the Query.`

- `Syntax` : **`userModel.where(targetkey).condition('targetval').exec(callback);`**

  
  
  ```js
  // Find the users having age 20
  UserModel.where('age').eq(20).exec((err,result)=>{
      console.log(result);
  })
  
  // Find the users having age < 20 of Country 'USA'
userModel.where('age').lt(20).where('country').eq('USA').exec(callback);
  ```
  
  





### Limit

- `To retrieve documents with limit we can use` **`limit()`** `method`

- `If you don't specify the number argument in` **`limit()`** `method then it will display all documents from the collection`.

- `This method accepts number type argument`

- `Syntax` : **`Model.find({}).limit(2).exec()`**

  ```js
  UserModel.find({}).limit(2).exec((err,res)=>{
      console.log(res)
  });
  ```

  





### Sort

- **`sort()`** `method method is use to sort documents .`
- `1 is used for ascending and -1 is used for descending order.`
- ` If you don't specify the sorting preference method will display ascending order by default.`
- **`Syntax`** :**`model.find({}).sort({age:1}).exec(cb)`**

```js
UserModel.find({}).sort({age:1}).exec((err,res)=>console.log(res));
```







###  Skip() 

- `This method used to skip the number of documents.`

- **`skip()`** `method also accepts number type argument. `

- `Syntax` : **`Model.find({}).skip(2).exec(cb);`**

  ```js
  UserModel.find({}).skip(2).exec((err,res)=>console.log(res));
  ```

  



