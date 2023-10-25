## Create Collection

- `A` **collection** `in MongoDB is the same as a` **table** `in MySQL`

- `To create a collection in MongoDB, use the ` **`createCollection()`** `method:`

- **Important:** `In MongoDB, a collection is not created until it gets content!`

- `MongoDB waits until you have inserted a document before it actually creates the collection.`

- `If collection exist in mongoDB return ` **`undefined`**

  

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017/";
  
  
  mongoClient.connect(url,(err,db)=>{
      if (err) return console.log(err.messag);
      const myDB = db.db('users')
      myDB.createCollection("users", (err, res)=> {
         if (err) return console.log(err.messag);
         console.log("users Collection created!");
         db.close();
      });
   
  })
  ```

  





### Drop Collection with drop()  method

- `To delete a collection we can use`**`drop()`**` method.`

- `This method takes a callback function containing the error object and the result parameter which returns true if the collection was dropped successfully, otherwise it returns false.`

  ```js
  const mongoClient = require('mongodb').MongoClient;
  var mongoUrl = "mongodb://localhost:27017/";
  
  mongoClient.connect(mongoUrl, function(err, db) {
      if (err) throw err;
      const myDB = db.db("nodedb");
      myDB.collection("test").drop(function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
      });
  });
  ```

  





### Drop Collection with dropCollection()  method

- `You can also use the` **`dropCollection()`** `method to delete a collection.`

- `The `**`dropCollection()`** `method takes two parameters: the name of the collection and a callback function.`

  ```js
  const mongoClient = require('mongodb').MongoClient;
  var mogoUrl = "mongodb://localhost:27017/";
  
  MongoClient.connect(mogoUrl, function(err, db) {
      if (err) throw err;
      const myDB = db.db("nodedb");
      myDB.dropCollection("test", function(err, delOK) {
          if (err) throw err;
          if (delOK) console.log("Collection deleted");
          db.close();
      });
  });
  ```

  