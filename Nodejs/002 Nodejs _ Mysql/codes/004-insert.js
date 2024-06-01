
const http = require('http');
const mysql = require('mysql');
const url = require('url');

http.createServer((req,res)=>{
    const queryObject = url.parse(req.url,true).query;
    
    if(req.url.split("/")[1] == "insert"){
      
       const title = queryObject.title;
       const text = queryObject.text;
        
       const connection = mysql.createConnection({
                          host : 'localhost',
                          user : 'root',
                          password : '',
                          database : 'nodedb'
       }) ;
        
       if(!connection._connectCalled ){
           connection.connect((err)=>{
               if(err) return console.log(err.message);
               const statement = `INSERT INTO posts(title, text) VALUES                                                     ('${title}','${text}')`;  
               connection.query( statement,(err,result)=>{
                 if(err) return console.log(err.message);
                 connection.end();
                });
          });
       } 
        
       res.writeHead(404,{'Content-Type' : 'text/json'});
       resMes = {
           message : 'Inserted'
       }
       res.write(JSON.stringify(resMes));
       res.end();
        
    }else{
        
       res.writeHead(404,{'Content-Type' : 'text/json'});
       res.write("{'message' : 'Page not Found'}");
       res.end();
        
    }
}).listen(8080,(err)=> {
     if(err) return console.log(err.message);
     console.log('Server running on port 8080');
     console.log('To insert data hit : http://localhost:8080/insert?                          title=title&text=text');
})