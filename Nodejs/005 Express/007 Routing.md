# Routing

> **`Routing`** `refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on). `
>
> `Each` **`route`** `can have one or more handler functions, which are executed when the` **`route`** `is matched`
>
> `syntax : app.METHOD(PATH, HANDLER)`
>
> - **`app`** `is an instance of` **`express`.**
> - `METHOD` is an [HTTP request method](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods), in lowercase.
> - **`PATH`** `is a path on the server.`
> - **`HANDLER`** `is the function executed when the route is matched.`





#### Simple route(GET,POST,ALL)

```js
const express = require('express')
const app = express()

// app.get() method use to handle for get request`
app.get('/', function (req, res) {
  res.send('Get request') 
})

/// app.post() method use to handle for get request`
app.post('/post', function (req, res) {
  res.send('Post request') 
})

// app.all() method use to handle for all http request`
app.all('/all', function (req, res) {
  res.send('Handle for all http request') 
})

app.listen(8080,(err)=>{
   if(err)  return console.log(err.message);
   console.log('Server running on port 8080');  
})
```





#### Multiple callback functions 

> `You can provide multiple callback functions that behave like` [middleware](http://expressjs.com/en/guide/using-middleware.html) `to handle a request.`
>
> `The only exception is that these callbacks might invoke ` **`next('route')`** `to bypass the remaining route callbacks`

```js
const express = require('express')
const app = express()

app.get('/example/b', function (req, res, next) {
 console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

//An array of callback functions can handle a route. 
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
var cb2 = function (req, res) {
  res.send('Hello from C!')
}
app.get('/example/c', [cb0, cb1, cb2])

// A combination of independent functions and arrays of functions can handle a route.
var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}
var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}
app.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})

app.listen(8080,(err)=>{
   if(err)  return console.log(err.message);
   console.log('Server running on port 8080');  
})

```





#### app.route()

> **`app.route()`** `can be used to create a chain of route handlers for a specific route path`
>
> `Because the path is specified at a single location, creating modular routes is helpful, as is reducing redundancy and typos.`

```js
app.route('/posts')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })
```



#### express.Router

- 







#### Real world example

> `fetch specific posts provided by user`

```js
const express = require('express');
const mysql = require('mysql');
const server = express();
const port = process.env.PORT || 8080;
const host = 'localhost'
const user = 'root'
const password = ''
const database = 'nodedb'

server.get('/user/:userId/posts/:postId',(req,res)=>{
    const userId = req.params.userId;
    const postId = req.params.postId;
    const connection = mysql.createConnection({host,user,password,database,});
    const statement = `SELECT * FROM posts WHERE id=${mysql.escape(postId)}`;  
    connection.connect((err)=>{
        if(err) return console.log(err.message);
        connection.query(statement,(err,result)=>{
            console.log(result);
            console.log('ok');
            res.send(result);
            connection.end()
        })
    })
})
server.listen(port,(err)=>{
    if(err) return console.log(err.message);
    console.log(`Server running on port ${port}`);
})
```





#### Routing without Framework

```js
var http = require('http'); 

// Create a server object 
http.createServer(function (req, res) { 
	
	// http header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	
	var url = req.url; 
	
	if(url ==='/about') { 
		res.write(' Welcome to about us page'); 
		res.end(); 
	} 
	else if(url ==='/contact') { 
		res.write(' Welcome to contact us page'); 
		res.end(); 
	} 
	else { 
		res.write('Hello World!'); 
		res.end(); 
	} 
}).listen(3000, function() { 
	// The server object listens on port 3000 
	console.log("server start at port 3000"); 
}); 
```





