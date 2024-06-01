# Serving Static Files with Http ,URL and File Module 

```js
//home.html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
    
<h1 style="text-align: center;padding-top:50px;">
    Home page
</h1>

</body>
</html>


```



```js
//about.html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
    
<h1 style="text-align: center;padding-top:50px;">
   About page
</h1>

</body>
</html>

```





```js
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function(req,res){
    
    const url_adr = url.parse(req.url,true)
    const filename = "." + url_adr.pathname;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile(filename, function(err, data) {    
    if (err) {
      return res.end("<h1 style='text-aling:center'>Page Not Found</h1>");
    } 
    res.write(data);
    return res.end();
  });
}).listen(8080,function(){
    console.log('server running on port 8080');
})

```





### For Paper Note

```js
//Serving Static Files with Http ,URL and File Module 

//home.html
<body>
    <h1 style="text-align: center;padding-top:50px;"> Home page</h1>
</body>
//about.html
<body>
<h1 style="text-align: center;padding-top:50px;">About page</h1>
</body>

//App.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer(function(req,res){
    const url_adr = url.parse(req.url,true)
    const filename = "." + url_adr.pathname;
    
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile(filename, function(err, data) {    
    if (err) {
      return res.end("<h1 style='text-aling:center'>Page Not Found</h1>");
    } 
    res.write(data);
    return res.end();
  });
}).listen(8080,()=> console.log('server running on port 8080'))
```

