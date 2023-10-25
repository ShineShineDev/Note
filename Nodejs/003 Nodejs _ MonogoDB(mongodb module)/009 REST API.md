```js
// import http moduel to create web server
const http = require('http'); 

// import mongoclient module for db operation
const mongoClient = require("mongodb").MongoClient; 

// import url moduel for URL parser
const urlModule = require('url'); 

// mongodb url 
const mongoUrl = "mongodb://localhost:27017/"; 

// server listen port 
const PORT =  process.env.PORT || 8080;

/*
 * create web server
*/
http.createServer( (req,res) => { 

    // parser user request
    let userRequest = urlModule.parse(req.url,true); 

    // pathname from user request
    const pathname =  userRequest.pathname;

    //  split pathname by '/'
    const pathnameSplit = pathname.split('/');
    
    const pathnameArray = [];

    // remove empty pathname
    pathnameSplit.forEach((pathname)=>{
        if(pathname != "") pathnameArray.push(pathname);
    })

    console.log(pathnameArray);


    const requestMethod =  req.method;

    // get all
    if(pathname === '/users' && requestMethod === 'GET') {
        
        return mongoClient.connect(mongoUrl,(err,db)=>{
            if(err) return console.log(err.message); 
            const myDB = db.db("nodedb");
            
            myDB.collection("users").find( {} ).toArray( (err, result) => {
                if(err) return console.log(err.message); 
                res.end(JSON.stringify(result))
                console.log(result);
                db.close();
          });
        })         
    }

    // insert 
    if(pathname === '/users' && requestMethod === 'POST') {

        const name = userRequest.query.name;
        const age = userRequest.query.age;
        return res.end('insert');
        /*
        return mongoClient.connect(mongoUrl,(err,db)=>{
            if(err) return console.log(err.message); 
            const myDB = db.db("nodedb");
          
            myDB.collection("users").insertOne( {}, (err, result) => {
                if(err) return console.log(err.message); 
            
                console.log(result);
                db.close();
          });
        })
        */
     }

     
    // get specife users
    if(pathnameArray[0] === 'users' && requestMethod === 'GET' && pathnameArray.length == 2) {

        return mongoClient.connect(mongoUrl,(err,db)=>{
            if(err) return console.log(err.message); 
            const myDB = db.db("nodedb");
            const val = pathnameArray[1];
            const query = { name : val} ;
            myDB.collection("users").findOne(query, (err, result) => {
                if(err) return console.log(err.message); 
                db.close();
                res.end(JSON.stringify(result));
          });
        })  
     }

    // delt specife users
    if(pathnameArray[0] === 'users' && requestMethod === 'DELETE' && pathnameArray.length == 2) {
         res.end("Delete " + pathnameArray[1] + ' User');      
     }

     // update specife users
    if(pathnameArray[0] === 'users' && requestMethod === 'PATCH' && pathnameArray.length == 2) {
        res.end("Update " + pathnameArray[1] + ' User');      
     }
     res.writeHead(404, {'Content-Type': 'text/json'}); // wirte respone header
     res.write(JSON.stringify({
        status : 0,
        message : "Page Not Found"
    }));
     res.end();

}).listen(PORT,(err)=>{
    if(err) return console.log(err.message);
    console.log('Server Running on port ' + PORT + ' ....'); 
});

```

