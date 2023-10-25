# Create web server & running

-  `require express module`
-  `create express object`
-  `make server listen port`
-  `run`

```js
                                                                                            server.js
const express  = require('express');  // require express module
const server = express(); // create express object
server.listen(8080, (err)=> {   
    if(err) return  console.log(err.message);
  console.log('Sever running on port:%s',8080);  
});  

// other way
var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
```



```js
$node server.js //run
// http://localhost:8080/ app listening at

// result
// Cannot GET /
```

