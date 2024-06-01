## REST API with Nodejs

### Insert

```js

//MORE EXAMPLE 
const http = require('http');
const mysql = require('mysql');
const url = require('url');
// create server
http.createServer((req,res)=>{
    // parser request url
    const queryObject = url.parse(req.url,true).query;
   
    // check url 
    if(req.url.split("/")[1] == "insert"){
       // new post title
       const title = queryObject.title;
       // new post text
       const text = queryObject.text;
        
       // create mysql connection 
       const connection = mysql.createConnection({
                          host : 'localhost',
                          user : 'root',
                          password : '',
                          database : 'nodedb'
       }) ;
       // check db connection
       if(!connection._connectCalled ){
           // connect to db
           connection.connect((err)=>{
               
               if(err) return console.log(err.message);
               
               // sql statement
               const statement = `INSERT INTO posts(title, text) VALUES                                      				  ('${title}','${text}')`;  
               
               // sql query
               connection.query( statement,(err,result)=>{
                 if(err) return console.log(err.message);
                 connection.end();
                });
          });
       } 
       // wirte respone header
       res.writeHead(200,{'Content-Type' : 'text/json'});
       resMes = {
           message : 'Inserted'
       }
       res.write(JSON.stringify(resMes));
       res.end();
        
    }else{
       res.writeHead(404,{'Content-Type' : 'text/json'});
       res.write(JSON.stringify({message : 'Page not found'}));
       res.end();
    }
}).listen(8080,(err)=> {
     if(err) return console.log(err.message);
     console.log('Server running on port 8080');
     console.log('To insert data hit : http://localhost:8080/insert?                          title=title&text=text');
})
```





### Select All

```js
// require core module
const http = require('http');
const mysql = require('mysql');
const url = require('url');

// create server
http.createServer((req,res)=>{
    // parser request url
    const queryObject = url.parse(req.url,true).query;
    
    // check url 
    if(req.url.split("/")[1] == "fetch"){
       // create mysql connection 
       const connection = mysql.createConnection({
                          host : 'localhost',
                          user : 'root',
                          password : '',
                          database : 'nodedb'
       }) ;
       // check db connection
       if(!connection._connectCalled ){
           
           // connect to db
           connection.connect((err)=>{
               if(err) return console.log(err.message);
               // sql statement
               const statement = "SELECT * FROM posts";
               // executing  query
               connection.query(statement,(err,result,fields)=>{
                    if (err) return console.log(err.message);
                    res.writeHead(200,{'Content-Type' : 'text/json'});
                    // wirte respone header       
                    const resMes = {
                        message : 'ok',
                        result : result
                    }
                    res.write(JSON.stringify(resMes));
                    res.end();
               });
          });
       }   
    }else{
       res.writeHead(404,{'Content-Type' : 'text/json'});
       res.write(JSON.stringify({message : 'Page not found'}));
       res.end();
    }
}).listen(8080,(err)=> {
     if(err) return console.log(err.message);
     console.log('Server running on port 8080');
     console.log('To fetch data hit : http://localhost:8080/fetch');
})
```



# Select specifie row

- `In Mysql, to select specifie row you can filter the selection by using the ""SELECT * FROMposts **WHERE id= 1 ** statement`







### Escaping Query Values

- `When query values are variables provided by the user, you should escape the values.`

- `This is to prevent SQL injections, which is a common web hacking technique to destroy or misuse your database.`

- `mysql.escape() method can use escape query values`

  ```js
  // require core module
  const http = require('http');
  const mysql = require('mysql');
  const url = require('url');
  
  // create server
  http.createServer((req,res)=>{
      // parser request url
      const queryObject = url.parse(req.url,true).query;
  // check url 
  if(req.url.split("/")[1] == "posts"){
     // new post title
     const id = queryObject.id;
     // create mysql connection 
     const connection = mysql.createConnection({
         host : 'localhost',
         user : 'root',
         password : '',
         database : 'nodedb'
     }) ;
     // check db connection
     if(!connection._connectCalled ){
         // connect to db
         connection.connect((err)=>{
             if(err) return console.log(err.message);
             // sql statement
             const statement = `SELECT * FROM posts WHERE id=${mysql.escape(id)}`;  
             // sql query
             connection.query( statement,(err,result)=>{
               if(err) return console.log(err.message);
                 // wirte respone header       
                  res.writeHead(200,{'Content-Type' : 'text/json'});
                 // prepare for respone
                  const resMes = {
                      message : 'ok',
                      result : result
                  }
                  res.write(JSON.stringify(resMes));
                  res.end();
                 connection.end();
              });
        });
     } 
  }else{
     res.writeHead(404,{'Content-Type' : 'text/json'});
     res.write(JSON.stringify({message : 'Page not found'}));
     res.end();
  }
  }).listen(8080,(err)=> {
       if(err) return console.log(err.message);
       console.log('Server running on port 8080');
       console.log('hit : http://localhost:8080/post?id=anyId');
  })
  
  // result 
  {
      "message": "ok",
       "result": [
           {
               "id": 30,
               "title": "Post one",
               "text": "testing post"
           }
       ]
  }
  ```

  

