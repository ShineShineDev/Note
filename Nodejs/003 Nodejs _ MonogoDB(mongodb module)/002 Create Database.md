## Create Database 



- `To create a database in MongoDB, start by creating a MongoClient object, then specify a connection URL with the correct ip address and the name of the database you want to create.`

- `MongoDB will create the database if it does not exist, and make a connection to it.`

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017/users"
  
  mongoClient.connect(url,(err,db)=>{
      if (err) return console.log(err.messag);
      console.log("users Database created!");
      db.close();
  })
  ```

  