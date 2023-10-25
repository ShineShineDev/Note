### Database Integration With mongose



> `Mongoose is one of the Node.js libraries that provides MongoDB object mapping, in a simple manner Mongoose is a library of Node.js, `
>
> `it provides interaction with MongoDB using Object-Relation- Mapping.`
>
> `Mongoose provides a straight-forward, schema-based solution to model our application data. It includes built-in type casting, validation, query building, business logic hooks and more.`
>
> `mongoose is one of the component of MEAN stack for developing MongoDB.`
>
> `If we are going to implement or learn MEAN stack then mongoose is essential and this tutorial will be very helpful.`







### Install 

- `To use mongoose , we need to install mongoose package `

- `To install it, use the following command inside your project folder`

  ```js
  npm install mongoose
  ```





### Import Module 

- `Import the mongoose module`

  ```js
  const mongoose = require('mongoose');
  ```





### Connect To A Locally Hosted Database

- `You can get the default `**`Connection`** `object with `**`mongoose.connection`**`Once connected, the open event is fired on the` **`Connection instance.`**

- ⚠️ `If you need to create additional connections you can use `**`mongoose.createConnection()`.** `This takes the same form of database URI (with host, database, port, options etc.) as `**`connect() and returns a Connection object.` **

  #### Default mongoose connection

  ```js
//Import the mongoose module
  const mongoose = require('mongoose');
  
  //Set up default mongoose connection
  const mongoDB = 'mongodb://127.0.0.1/my_database';
  
  mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).
  then(()=> console.log('You are now connected to Mongo!')).
  catch( err => console.error('MongoDB connection error:', err));
  
  // You can also connect to multiple mongos instances for high availability in a sharded cluster
  // mongoose.connect('mongodb://mongosA:27501,mongosB:27501', cb);
  
  // Get Connection instance
  const db = mongoose.connection;
  
  // Disconnects all connections.
  // mongoose.disconnect()
  ```







### Schema

- `The Schema represents a documents of database. Simply Schema creation is similar to table creation of SQL.`

- `The` **`Schema`**` allows you to` **`define`** `the` **`fields stored in each document(shape of the documents)`** `along with their` **`validation requirements and default values.`**

- `A schema can have an arbitrary number of fields — each one represents a field in the documents stored in MongoDB. `

- **`Schemas`** `are then` **`compiled into models`** `using the` **`mongoose.model()`** `method`. `Once you have a model you can use it to find, create, update, and delete objects of the given type.`

- `You can define` **`static and instance helper methods`** `to make it easier to work with your data types, and also virtual properties that you can use like any other field, but which aren't actually stored in the database`

- `Use the Schema constructor to create a` **`new schema instance`**

- `If we want to add new filed to a defined schema we can do this using` **`Schema.add()`** `method.`

- `If we want to get value of an option which is defined for a schema we can use` **`Schmea.get('name')`**

- `For more information about options see `[SchemaTypes](http://mongoosejs.com/docs/schematypes.html) 

  ```js
  //Require Mongoose
  var mongoose = require('mongoose');
  
  // Use the Schema constructor to create a new schema instance
  // simple Schema Type
  var SomeModelSchema = new mongoose.Schema({
    a_string: String,
    a_date: Date
  });
  
  // Common use  Schema Type
  var SomeModelSchema = new mongoose.Schema({
      // String fields should automatically be set to lowercase, uppercase, ortrimmed (e.g. { type: String, lowercase: true, trim: true })
      name: String,
      binary: Buffer,
      living: Boolean,
      updated: { type: Date, default: Date.now()},
      // type min, max validation 
      age: { type: Number, min: 18, max: 65, required: true }, 
      mixed: Schema.Types.Mixed,
      _someId: Schema.Types.ObjectId,
      //  An array of items. You can perform JavaScript array operations on these models (push, pop, unshift, etc.). 
      // You can also have an array of each of the other types too.
      array: [], 
      ofString: [String], 
      nested: { stuff: { type: String, lowercase: true, trim: true } }
  })
  ```
  








### Model

- **`Model represents a collection `**`of documents in the database `

- `Models are created` **`from schemas`** `using the `**`mongoose.model()`** `method`

- `Once you've defined model classes you can use them to` **`create, update, or delete records, and run queries to get all records or particular subsets of records`**

- `The first argument of `**`mongoose.model`** `is the` **`singular name of the collection`**

- `The second argument is` **`the schema`** `you want to use in creating the model.`

- `Each model maps to a` **`collection`** `of `**`documents`** `in the MongoDB database. The documents will contain the fields/schema types defined in the model `**`Schema`.**

- ` Models are always scoped to a single connection.`

  ```js
  const mongoose = require('mongoose');
  
  const UserSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const UserModel = mongoose.model('User', UserSchema );
  
  const newUser = new UserModel({ name: 'Shine Shine' });  console.log(newUser.name); 
  
  
  ```







### Validation

- `Mongoose provides built-in and custom validators, and synchronous and asynchronous validators.`

-  `It allows you to specify both the acceptable range of values and the error message for validation failure in all cases.`

- `The built-in validators include:`

  - `All` [SchemaTypes](http://mongoosejs.com/docs/schematypes.html) `have the built-in` [required](http://mongoosejs.com/docs/api.html#schematype_SchemaType-required) `validator.`` This is used to specify whether the field must be supplied in order to save a document.`
  - [Numbers](http://mongoosejs.com/docs/api.html#schema-number-js) `have` [min](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-min) `and` [max](http://mongoosejs.com/docs/api.html#schema_number_SchemaNumber-max) `validators.`
  - [Strings](http://mongoosejs.com/docs/api.html#schema-string-js) `have:`
    - [enum](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-enum): `specifies the set of allowed values for the field.`
    - [match](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-match): `specifies a regular expression that the string must match.`
    - [maxLength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-maxlength) `and` [minLength](http://mongoosejs.com/docs/api.html#schema_string_SchemaString-minlength) `for the string.`

- `For complete information on field validation see` [Validation](http://mongoosejs.com/docs/validation.html).

  

  ```js
  var breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'], // you can specify some of the validator types and error messages:
      max: 12,
      required: [true, 'Why no eggs?'] 
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea', 'Water',]
    }
  });
  ```

  







### Methods and query helpers

- `A schema can also have` [instance methods](http://mongoosejs.com/docs/guide.html#methods), [static methods](http://mongoosejs.com/docs/guide.html#statics), and [query helpers](http://mongoosejs.com/docs/guide.html#query-helpers). 
- `The instance and static methods are similar, but with the obvious difference that an instance method is associated with a particular record and has access to the current object. `
- `Query helpers allow you to extend mongoose's` [chainable query builder API](http://mongoosejs.com/docs/queries.html) (`for example,it allowing you to add new a query "byName" in addition to the `**`find(),findOne() and findById()`** methods`)







### Save (Create)

- **`model.save`** `use to saves the document.`

- **`Syntax`** :**` model.save(err,cb)`**

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  
  
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)
          console.log(err);
      else
          console.log("connection opened");
  };);
  
  //Define a schema
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
      name: { type : String, required : true, trim : true },
       age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const userModel = mongoose.model('users',UserSchema);
  
  // create new user collection from model
  const newUser = new userModel({
      name : 'Shine Shine',
      age : 23
  });
  
  // save new resource
  newUser.save((err,newUser)=>{
      if(err){
          debugger.log('warning','fail document save');
          throw new Error("fail document Save")
      }    
  })
  ```

  





### Find (Read)

- **`model.find() `**  `method use to find  or read  documents of a collection/model.`

- **`Syntax` :**  `find(conditions, projection, options, callback)`

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)console.log(err);
      else console.log("connection opened");
  };);
  
  //Define a schema
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
      name: { type : String, required : true, trim : true },
      age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const userModel = mongoose.model('users',UserSchema);
  
  var echoRecords =function(err,log){
      console.log("Total Records Found:"+log.length);
      for(var i=0;i<log.length;i++){ 
          console.log((i+1)+"\t"+log[i]._id+"\t"+log[i].userid+"\t"+log[i].chips);
      }
  };
   
  // all collection
  userModel.find(echoRecords);
  // specific colleciont 
  userModel.find({name:"Shine Shine"},echoRecords);
  
  // specific colleciont with projection
  userModel.find({name:"Programer"},{_id:0},echoRecords);
  
  ```







### Update

- `To update collection we can use` **`model.update`**

- **`Syntax`** :  **`model.update(targetCollectionObj, updateCollectionObj, options, callback)`**

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)console.log(err);
      else console.log("connection opened");
  };);
  
  //Define a schema
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
      name: { type : String, required : true, trim : true },
      age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const userModel = mongoose.model('users',UserSchema);
  
   
  userModel.update({name:"Shine Shine"},{name:"Shine Shine Updated !"},function(err,log){
      console.log("Number of Records Effected"+log);
  });
  // {multi:true} means all update 
  userModel.update({name:"Programer",{name:"Programer Updated !"},{multi:true},function(err,log){
      console.log("Number of Records Effected"+log);
  });
  ```







### Remove(delete)

- **`model.remove`** `method use to removes document/s from the collection.`

- ` If condition not passed or empty then all the records will be removed.`

- **`Syntax`**   **`remove(conditions, callback)`**

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)console.log(err);
      else console.log("connection opened");
  };);
  
  //Define a schema
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
      name: { type : String, required : true, trim : true },
      age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const userModel = mongoose.model('users',UserSchema);
  
  // remove all 
  userModel.remove((err)=>{
      if(err)  console.log(err);
  });
  // specific remove 
  userModel.remove({name : "Shine Shine Updated!"},(err)=>{
      if(err)  console.log(err);
  });
  ```

  





###  findOne()

- `To finds a single document we can use model.findOne method`

- `syntax : `   **`findOne(conditions, projection, options, callback)`**

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)console.log(err);
      else console.log("connection opened");
  };);
  
  // define Shcema
  const UserSchema = mongoose.Schema({
      name: { type : String, required : true, trim : true },
      age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const UserModel = mongoose.model('users',UserSchema);
  
  const cb = (err,result)=>{
      console.log(resule);
  }
  UserModel.findOne( { name : 'Shine Shine' },cb)
  
  ```

  





### Count

- `Counts number of matching documents in a database collection.`

- ` If condition not passed or empty then all the records will be counted.`

- **`Syntax`** :   `model.count(conditions, callback)`

  ```js
  // Import the mongoose module
  var mongoose = require('mongoose');
  
  // database url
  var DBUrl= 'mongodb://127.0.0.1';
  
  // Set up mongoose connection
  mongoose.createConnection(DBUrl, "my_db", 27017,(err){
      if(!err)console.log(err);
      else console.log("connection opened");
  };);
  
  // define Shcema
  const UserSchema = mongoose.Schema({
      name: { type : String, required : true, trim : true },
      age: { type: Number, min: 18, max: 65, required: true }, 
  });
  
  // Compile model from schema
  const UserModel = mongoose.model('users',UserSchema);
  
  const cb = (err,count)=>{
      console.log(count);
  }
  // count all
  userModel.count({},function(err,count){
    console.log("No Of Records in users Schema:"+count);
  });
  // specific count
  userModel.count( { name : 'Shine Shine'  },cb);
  
  ```

  



## [See More](D:\Desktop\Note\Nodejs\003-B Nodejs & MonogoDB(mongoose module))





### Different Between SQL and NOSQL

| SQL     | NoSQL        |
| ------- | ------------ |
| `Table` | `Collection` |
| `Row`   | `Document`   |

  