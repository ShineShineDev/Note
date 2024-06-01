# Basic Routing



```js
const http = require('http');
const fs = require('fs');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    if(req.url === '/' || req.url === '/home' || req.url === '/home' || req.url === '/index'){
        const readStream = fs.createReadStream('home.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/about'){
        const readStream = fs.createReadStream('about.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/contact'){
        const readStream = fs.createReadStream('contact.html','utf-8')
        readStream.pipe(res)
    }else{
        const readStream = fs.createReadStream('404.html','utf-8')
        readStream.pipe(res)
    }
}).listen(8080,()=>{
    console.log('Server running on port 8080');
})

```





# Advance Route

```js
// app.js
const app = require('./router');

export.app = function(res,req){
    
}
```







```js
// route.js
app.get('/', function(req, res){
      return  view(home.html,res)
      // res.send("Home Page");
});

app.get('/', 'HomeController@index');

export.router
```

```js
//view fu
view(home.html,res)
```

```js

// app/controller/HomeController 
function index(){
  return  runder()
}
    
```





### For Paper Note

```js
/* Basic Routing &  */
const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    if(req.url === '/' || req.url === '/home' || req.url === '/home' || req.url === '/index'){
        const readStream = fs.createReadStream('home.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/about'){
        const readStream = fs.createReadStream('about.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/contact'){
        const readStream = fs.createReadStream('contact.html','utf-8')
        readStream.pipe(res)
    }else{
        const readStream = fs.createReadStream('404.html','utf-8')
        readStream.pipe(res)
    }
}).listen(8080,()=>{ console.log('Server running on port 8080');})

//Serving Json
const http = require('http'); // import fs module
const fs = require('fs'); // import fs module
http.createServer((req,res)=>{  // create server
   const jsonData = fs.createReadStream('api.json','utf-8'); // create read stream
    res.writeHead(200, {'Content-Type': 'text/json'}); // wirte respone header
    jsonData.pipe(res); // respone with  readable stream pipe
}).listen(8080,()=> console.log('Server running on port 8080')) // listen port
```

