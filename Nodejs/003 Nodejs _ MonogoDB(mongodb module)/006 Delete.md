##                                                                                                     Node.js MongoDB Delete





### Delete One

- `To delete a  document in MongoDB, we use the `**`deleteOne()` **`method.`

- `The first parameter is a query object defining which document to delete.`

- `If the query finds more than one document, only the first occurrence is deleted.`

  

  ```js
  const mongoClient = require('mongodb').MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl, (err, db) => {
      if (err) throw err;
      const myDB = db.db('nodedb');
      const query = { name: 'fooage=22'};
      myDB.collection('users').deleteOne(query,(err,obj)=>{
          if (err) throw err;
          console.log("Delete Count : " + obj.deletedCount);
          db.close();
      });
  });
  ```

  

  



### Delete Many

- `To delete more than one document, use the `**`deleteMany()`** `method.`

- `The first parameter  is a query object defining which documents to delete.`

  

  ```js
  const mongoClient = require('mongodb').MongoClient;
  const mongoUrl = "mongodb://localhost:27017";
  
  mongoClient.connect(mongoUrl, (err, db) => {
      if (err) throw err;
      const myDB = db.db('nodedb');
      
      const query = { name :  "foo"};
  
      // Delete all documents were the address starts with the letter "S"
      // const query = { name :  /^S/ };
     
      myDB.collection('users').deleteMany(query,(err,obj)=>{
          if (err) throw err;
           console.log("Delete Count : " + obj.deletedCount);
          db.close();
      });
  });
  ```
  
  





### Delete All 

```js
const mongoClient = require('mongodb').MongoClient;
const mongoUrl = "mongodb://localhost:27017";

mongoClient.connect(mongoUrl, (err, db) => {
    if (err) throw err;
    const myDB = db.db('nodedb');
   
    myDB.collection('users').deleteMany({},(err,obj)=>{
        if (err) throw err;
         console.log("Delete Count : " + obj.deletedCount);
        db.close();
    });
});
```





>  **`Note : ` ** `The `**`deleteMany()`** `method returns an object which contains information about how the execution affected the database.`

