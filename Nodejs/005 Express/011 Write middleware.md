# Writing middleware 

> *Middleware* functions are functions that have access to the [request object](http://expressjs.com/en/4x/api.html#req) (`req`), the [response object](http://expressjs.com/en/4x/api.html#res) (`res`), and the `next` function in the application’s request-response cycle. 
>
> The `next` function is a function in the Express router which is used to execute the other middleware functions succeeding the current middleware. 
>
> If the current middleware function does not end the request-response cycle, it must call `next()` to pass control to the next middleware function. Otherwise,if you do not mention `next()` the request-response cycle will hang in middle of nowhere and you server might cause the client to time out.

<img src="D:\Desktop\note\Nodejs\assets\img\express-mw.png" width='100%'/>



### Why use middleware ? 

- The objective of these functions is to modify request and response objects for tasks like

- parsing request bodies,

- adding response headers, 

- make other changes to request-response cycle,

- end the request-response cycle and

- call the next middleware function

  



### A middleware function can perform

- It can execute any code.
- It can make changes to the request and the response objects.
- It can end the request-response cycle.
- It can call the next middleware function in the stack.





###  Used middleware in Express.

- Application-level middleware
- Router-level middleware
- Error-handling middleware
- Built-in middleware
- Third-party middleware





### Simple Example

> The order of middleware loading is important: middleware functions that are loaded first are also executed first.
>
> If `myLogger` is loaded after the route to the root path, the request never reaches it and the app doesn’t print “LOGGED”, because the route handler of the root path terminates the request-response cycle.

```js
const ex = require('express');// require express 
const app = ex(); // create ex object

// create middleware function
const logger = (req,res,next)=>{
    console.log('logged');
    next(); // call next middleware
}
// load the middleware function, call app.use(), specifying the middleware function
app.use(logger);

// 
app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8000,(err) => {
    if(err) return err.message;
    console.log('express app listen on port 8000');
})
```





### Example of requestTime Middleware function 

```js
const ex = require('express'); // require express 
const app = ex(); // create ex object

// create requestTime middleware function
var requestTime = function (req, res, next) {
  req.requestTime = Date.now()
  next()
}

// other way
app.use(function(req, res, next){
    req.requestTime = Date.now()
    next()
});

// load the middleware function, call app.use(), specifying the middleware function
app.use(requestTime)

app.get('/', function (req, res) {
  var responseText = 'Hello World!<br>'
  responseText += '<small>Requested at: ' + req.requestTime + '</small>'
  res.send(responseText)
})

app.listen(8000,(err) => {
    if(err) return err.message;
    console.log('express app listen on port 8000');
})
```





### Middleware function validateCookies

```js
var express = require('express')
var cookieParser = require('cookie-parser')
var app = express()

async function cookieValidator (cookies) {
  try {
    await externallyValidateCookie(cookies.testCookie)
  } catch {
    throw new Error('Invalid cookies')
  }
}

async function validateCookies (req, res, next) {
  await cookieValidator(req.cookies)
  next()
}

app.use(cookieParser())

app.use(validateCookies)

// error handler
app.use(function (err, req, res, next) {
  res.status(400).send(err.message)
})

app.listen(3000)
```





### Configurable middleware