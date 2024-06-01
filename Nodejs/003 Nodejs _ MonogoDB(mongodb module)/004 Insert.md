## Insert Document

> ` A `**document** `in MongoDB is the same as a` **record** `in MySQL`



### Insert a record

- **`insertOne()`**`method is use to insert a document into a collection, ` .

- `It take two parameter,the first one is an object containing the name(s) and value(s) of each field in the document you want to insert.Second parameter is a callback function where you can work with any errors, or the result of the insertion:`

- `If you do not specify an`**`_id` ** `field, then MongoDB will add one for you and assign a unique id for each document.`

  ```js
  const mongoClient = require("mongodb").MongoClient;
  const url = "mongodb://localhost:27017/";
  
  mongoClient.connect(url,(err,db)=>{
      if(err) rseturn console.log(err.message);
      const user  = {
          name : 'Shine Shine',
          age : 23
      };
      const myDB = db.db("mydb");
      myDB.collection('users').insertOne(user,(err,result)=>{
          if(err) return console.log(err.message);
          console.log(result);
          db.close();
      })
  })
  ```





## Insert multiple documents 

- **`insertMany()`**  `method is use to insert multiple documents into a collection in MongoDB ` .
- `It take two parameter.`
- `the first one is an array of objects, containing the data you want to insert.`
- `Second parameter is a callback function where you can work with any errors, or the result of the insertion`
- `If you do not specify an`**`_id` ** `field, then MongoDB will add one for you and assign a unique id for each document.`
- `When executing the` **`insertMany()`**` method, a result object is returned`

```js
const mongoClient = require("mongodb").MongoClient;
const mongoDBUrl = "mongodb://localhost:27017/";

mongoClient.connect(mongoDBUrl,(err,db)=>{
    if(err) return console.log(err.message);
    const userObjAry = [
        {
          name : 'Shine Shine',
          age : 23
        },
        {
          name : 'Developer',
          age : 22
        },
        {
          name : 'Devops',
          age : 24
        }
    ];
    const myDB = db.db('nodedb');
    myDB.collection("users").insertMany(userObjAry,(err,res)=>{
        if(err) return console.log(err.message);
         console.log(res);
    });
})
```







### Example practice

```js
const http = require('http'); // http moduel
const mongoClient = require("mongodb").MongoClient; // mongoclient
const urlModule = require('url'); // url moduel
const mongoDBUrl = "mongodb://localhost:27017/"; // mongodb url 

http.createServer((req,res)=>{  // create server
    
    let userRequest = urlModule.parse(req.url,true); // parser user request
    
    const name = userRequest.query.name //name 
    const name = userRequest.query.age; // age
    
    mongoClient.connect(mongoDBUrl ,(err,db) => { // connect to mongodb
        if(err) return console.log(err.message); 
        const user  = {
            name : name
            age : age
        };
        const myDB = db.db("nodedb");        
        myDB.collection('users').insertOne(user,(err,result)=>{
            if(err) return console.log(err.message);
            console.log(result);
            db.close();
        })
    })
}).listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Server Running on port 8080...'); 
    console.log('To insert a document hit : http://localhost:8080/?name=yourname&age=yourname');
});
const PORT =  process.env.PORT || 8080;
```



