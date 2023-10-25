## Node.js With MongoDB

> `Node.js can be used in database applications.`
>
> `MongoDB is one of the most popular NoSQL database.To be able to experiment with the code examples, you will need access to a MongoDB database.You can download a free MongoDB database at` [https://www.mongodb.com](https://www.mongodb.com/)`or get started right away with a MongoDB cloud service at` https://www.mongodb.com/cloud/atlas.





### Install MongoDB Driver

- **`mongodb`** `is an  official MongoDB driver for Nodejs. Alternative mongojs,mongoose`

- `You can download with npm packeage manger`

  ```cmd
  $ npm install mongodb
  ```



### Require  Module

- `After downloaded mongodb database driver, you must be require module in your node app.`

  ```js
  const MongoClient = require('mongodb');
  ```

  



### Create Connection 

- `To connect database connection we must be create Connection `

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017"
  
  mongoClient.connect(url,(err) => {
     if (err) return console.log(err.messag);
     console.log("Database Connection created!");
  });
  ```

  