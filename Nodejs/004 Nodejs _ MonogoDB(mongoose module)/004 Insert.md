##                                                                                     Insert Document

> ` A `**`document`** `in MongoDB is the same as a` **record** `in MySQL`





###  Insert  Single Record

- **`modelInstance.save()`** `and` **`model.create()`** `method can insert a document to your collection` 

```js
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
 
// or
// create new collection and insert a doc at the same time with model.create() method
UserModel.create(
    { 
        name : 'Developer',
        age : 23
    },
    callback
);
```





###  Insert  Multiple Record

- `To insert multiple record we can use` **`model.insertMany`** `method`

  ```js
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
  
  
  // create new collection and insert multi doc at the same time with model.insertMany() method
  UserModel.insertMany(
      [
          { 
              name : 'User One',
              age : 20
          },
          { 
              name : 'User Two',
              age : 21
          },
          { 
              name : 'User Three',
              age : 20
          }
      ], (err,log) => {
       if (err) return console.log(err);
       console.log('Saved !' + log.length + 'Records');
      }
  );
  ```

  





### Different Between SQL and NOSQL

| SQL     | NoSQL        |
| ------- | ------------ |
| `Table` | `Collection` |
| `Row`   | `Document`   |

