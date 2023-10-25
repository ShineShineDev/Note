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