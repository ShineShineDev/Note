## Node.js MongoDB Find



> `In MongoDB we use the `**`find`** `and` **`findOne`** `methods to find data in a collection.`
>
> `Just like the `**`SELECT`** ``statement is used to find data in a table in a MySQL database.`





### Find One

- **`findOne()`** `method is use to select data from a collection in MongoDB `

- `Method returns the first occurrence in the selection.`

- `It can take two parameter.`

- `The first parameter is a query object.if query object is empty ,this will returns only the first document`

- `Second parameter is a callback function where you can work with any errors, or the result of the insertion`

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      if(err) return console.log(err.message); 
    const myDB = db.db("nodedb");
      
      const query = { name: "shine shine" };
      myDB.collection("users").findOne(query,(err,res)=>{
          if(err) return console.log(err.message); 
          console.log(res);
          db.close();
      })
  });
  ```
  
  





### Find All 

- `The `**`find()` **`method returns all occurrences in the selection.`

- `The first parameter is a query object.If you use an empty query object, which selects all documents in the collection`.

- `The second parameter is the `**`projection`** `object that describes which fields to include in the result.This parameter is optional, and if omitted, all fields will be included in the result.`

- `1 mean show , 0 mean hide`

- ` The result can be converted into an array containing each document as an object.`

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      if(err) return console.log(err.message); 
      const myDB = db.db("nodedb");
      
      myDB.collection("users").find( {} ).toArray( (err, result) => {
          if(err) return console.log(err.message); 
          console.log(result);
          db.close();
    });
  })
  
  // find with Projection
  const mongoClient = require("mongodb").MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      if(err) return console.log(err.message); 
      const myDB = db.db("nodedb");
      myDB.collection("users").find({}, { projection:{ _id: 0,name: 1}} ).toArray((err, result)=> {
          if(err) return console.log(err.message); 
          console.log(result);
          db.close();
    });
  })
  ```
  
  
  
  
  



### Sort the Result

- `Use the `**`sort()`** `method to sort the result in ascending or descending order.`

- **`sort()`**` method takes one parameter, an object defining the sorting order.`

- `value -1 : descending`.

- `value 1 : ascending`.

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      if(err) return console.log(err.message); 
      const myDB = db.db("nodedb");
      const sort = { name : 1 }
      myDB.collection("users").find( {} ).sort(sort).toArray( (err, result) => {
          if(err) return console.log(err.message); 
          console.log(result);
          db.close();
    });
  })
  ```

  

  



### Limit the Result

- `To limit the result in MongoDB, we use the `limit()` method.`

- **`limit()`** `method takes one parameter, a number defining how many documents to return.`

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      if(err) return console.log(err.message); 
      const myDB = db.db("nodedb");
      
      myDB.collection("users").find( {} ).limit(5).toArray( (err, result) => {
          if(err) return console.log(err.message); 
          console.log(result);
          db.close();
    });
  })
  ```

  





### Find With Regular Expressions

  - `You can write regular expressions to find exactly what you are searching for.`

  - `Regular expressions can only be used to query strings`.

  - `To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/`

    ```js
    const MongoClient = require('mongodb').MongoClient;
    const mongoUrl = "mongodb://localhost:27017/";
    
    MongoClient.connect(mongoUrl, function(err, db) {
        if(err) return console.log(err.message); 
        const myDB = db.db("mydb");
        
        const query = { name: /^S/ };
        
        myDB.collection("customers").find(query).toArray(function(err, result) {
            if(err) return console.log(err.message); 
            console.log(result);
            db.close();
        });
    });
    ```

    





**Note** : ` The result can be converted into an array containing each document as an object.`