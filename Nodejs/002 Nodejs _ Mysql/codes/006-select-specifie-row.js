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
               const statement = `SELECT * FROM posts WHERE id=${id}`;  
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
     console.log('To insert data hit : http://localhost:8080/post?id=anyId');
})