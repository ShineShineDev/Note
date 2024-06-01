##                                              Node.js MongoDB Update





### Update One

- `You can update a document as by using the `**`updateOne()`**` method.`

- `The first parameter s a query object defining which document to update.`

- `The second parameter is an object defining the new values of the document.`

- `If the query finds more than one record, only the first occurrence is updated.`

- `When using the `**`$set`**` operator, only the specified fields are updated.`

  

  ```js
  const mongoClient = require('mongodb').MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      const dbObj = db.db("nodedb");
      const targetObj = { name : "Shine Shine Updated !"};
      const updateObj =  { $set: { name : "Shine Shine"} };
      dbObj.collection("users").updateOne(targetObj,updateObj,(err,res)=>{
          if (err) throw err;
          console.log("modifiedCount : " + res.modifiedCount);
          db.close();
      });
  })
  ```

  

  



### Update Many Documents

- `To update `**`all** `documents that meets the criteria of the query, use the`**` `updateMany()`**` method.`

  

  ```js
  const mongoClient = require('mongodb').MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl,(err,db)=>{
      const dbObj = db.db("nodedb");
      // Update all documents where the name starts with the letter "S"
      // const myquery = { nane : /^S/ };
      const targetObj = { name : "foo"};
      const updateObj =  { $set: { name : "Shine Shine"} };
      
      dbObj.collection("users").updateMany(targetObj,updateObj,(err,res)=>{
          if (err) throw err;
          console.log("modifiedCount : " + res.modifiedCount);
          db.close();
      });
  })
  ```

  



**Note : ** `The `**`updateOne()`** `and the `**`updateMany()`**` methods return an object which contains information about how the execution affected the database.`

