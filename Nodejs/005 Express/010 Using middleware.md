## Using middleware

> *Middleware* functions are functions that have access to the [request object](http://expressjs.com/en/4x/api.html#req) (`req`), the [response object](http://expressjs.com/en/4x/api.html#res) (`res`), and the `next` function in the application’s request-response cycle. 
>
> The `next` function is a function in the Express router which is used to execute the other middleware functions succeeding the current middleware. 
>
> If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise,if you do not mention `next()` the request-response cycle will hang in middle of nowhere and you server might cause the client to time out.





### Why use middleware ? 

- The objective of these functions is to modify request and response objects for tasks like
-  parsing request bodies,
-  adding response headers, 
- make other changes to request-response cycle,
-  end the request-response cycle and
-  call the next middleware function





###  Express can use the following types of middleware:

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware





### Application-level middleware

> Load application-level middle ware  by using the `router.use()` and `router.METHOD()` functions.

######      Application-level middleware with no mount path

-   The function is executed every time the app receives a request.


```js
var express = require('express')
var app = express()

app.use((req,res,next)=>{
   console.log('Application-level middleware running without specific path')
   next()
});
app.get('/', function (req, res) {
   res.send("Application-level middleware running without specific path");
})
```

######    Application-level middleware with  specific path

- The function is executed for any type of HTTP request on the `/user/:id` path.

```javascript
app.use('/user/:id', function (req, res, next) {
  console.log('Application-level middleware running with specific path : /user/:id')
   next()
})

// The function handles GET requests to the /user/:id path.
app.get('/user/:id', function (req, res, next) {
  res.send('USER')
})
```





### Router-level middleware

> Router-level middleware works in the same way as application-level middleware, except it is bound to an instance of `express.Router()`.
>
> Load router-level middleware by using the `router.use()` and `router.METHOD()` functions.

#####          Router-level middleware without mount path

```js
const ex = require('express');
const app = ex();
const router = ex.Router()

// mount the router on the app
app.use('/', router);

// a middleware function with no mount path.
router.use((req,res,next)=>{
  console.log('Router level middleware running without specific path');
  next();
})
router.get('/',(req,res)=>{
  res.send('Router level middleware running without specific path');
})

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
})


// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

app.listen(8000,(err) => {
    if(err) return err.message;
    console.log('express app listen on port 8000');
console.log('Router level middleware running without specific path')
})
```

   #####      Router-level middleware with  mount path

```js
const ex = require('express');
const app = ex();
const router = ex.Router()

// mount the router on the app
app.use('/', router);

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
})

router.get('/',(req,res)=>{
  res.send('Router level middleware running with specific path : user/:id');
})

app.listen(8000,(err) => {
    if(err) return err.message;
    console.log('express app listen on port 8000');
    console.log('Router level middleware running with specific path : user/:id')
})
```





### Error-handling middleware

> Error-handling middleware always takes *four* arguments. You must provide four arguments to identify it as an error-handling middleware function. Even if you don’t need to use the `next` object, you must specify it to maintain the signature. Otherwise, the `next` object will be interpreted as regular middleware and will fail to handle errors.
>
> [Detail](http://expressjs.com/en/guide/error-handling.html)

```js
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
```





### Built-in middleware

> Starting with version 4.x, Express no longer depends on [Connect](https://github.com/senchalabs/connect). The middleware functions that were previously included with Express are now in separate modules; see [the list of middleware functions](https://github.com/senchalabs/connect#middleware).
>
> Express has the following built-in middleware functions:
>
> - [express.static](http://expressjs.com/en/4x/api.html#express.static) serves static assets such as HTML files, images, and so on.
> - [express.json](http://expressjs.com/en/4x/api.html#express.json) parses incoming requests with JSON payloads. **NOTE: Available with Express 4.16.0+**
> - [express.urlencoded](http://expressjs.com/en/4x/api.html#express.urlencoded) parses incoming requests with URL-encoded payloads. **NOTE: Available with Express 4.16.0+**





### Third-party middleware

> A list of Third party middleware for Express is available [here](http://expressjs.com/en/resources/middleware.html).

- Install the Node.js module for the required functionality, 

- load it in your app at the application level or at the router level.

  

  ##### cookie-parser middleware
  
  >  It parses *Cookie* header and populate req.cookies with an object keyed by cookie names
  
  
  
  ```js
  $ npm install cookie-parser // Install 
    
    var express = require('express')
    var app = express()
    
    // load it in your app at the application level or at the router level.
    var cookieParser = require('cookie-parser')
    
    // load the cookie-parsing middleware
    app.use(cookieParser())
  ```
  
  

  ##### body-parser middleware
  
  > This is used to parse the body of requests which have payloads attached to them
  
  
  
  ```js
  
  const bodyParser = require('body-parser');
  
  
  app.use(bodyParser.urlencoded({extended:false}))
  
  app.use(bodyParser.json())
  
  app.post('/save',(req,res)=>{
    res.json({
      "status":true,
      "payload":req.body
    })
  }
  ```
  
  
  
  ##### session middleware
  
  > This middleware function creates a session middleware with given options. A session is often used in applications such as login/signup.
  
  
  
  ```js
  // install
  $ npm install --save session
  
  // load 
  app.use(
    session({
      secret: 'arbitary-string',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: true }
    })
  );
  ```
  
  
  
  ##### morgan  middleware

  > [`morgan`](https://www.npmjs.com/package/morgan) is an HTTP request logger middleware for Node.js that generates logs for each API request.
  
  
  
  ```js
  $ npm install morgan // install
  
  const express = require("express");
  const morgan = require("morgan")
  
  const app = express();
  
  // Middlewares
  app.use(morgan("common"))
  
  
  // Port
  const port = 3000;
  
  app.get("/", (req, res) => {
    res.json({
      message: "Hello Stranger! How are you?",
    });
  });
  
  // Listen
  app.listen(port, ()=>{
      console.log(`Listening on port: ${port}`)
  })
  ```
  
  

  ##### Helmet middleware
  
  > [Helmet](https://www.npmjs.com/package/helmet) is a security middleware that protects Express.js apps by setting various HTTP headers.



  #####                cors middleware

> [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) stands for cross-origin resource sharing. It is used to enable and configure CORS in Express.js apps.



 #####       Express Rate Limit middleware

 > [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit#usage) is a basic rate-limiting middleware for Express.js that, as the name suggests, limits the repeated API requests from the same IP address.