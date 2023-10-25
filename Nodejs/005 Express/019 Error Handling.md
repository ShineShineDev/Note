##                                                          Error Handling 

> **`Error Handling`** `refers to how Express catches and processes errors that occur both synchronously and asynchronously.Express comes with a default error handler so you don’t need to write your own to get started.`
>
> `Not handling exceptions and taking appropriate actions will make your Express app crash and go offline.`
>
> `To ensure you handle all exceptions,you can use` [Use try-catch](https://expressjs.com/en/advanced/best-practice-performance.html#use-try-catch) and [Use promises](https://expressjs.com/en/advanced/best-practice-performance.html#use-promises) `(Promises will handle any exceptions (both explicit and implicit).For more information about error-handling by using promises, see `[Promises in Node.js with Q – An Alternative to Callbacks](https://strongloop.com/strongblog/promises-in-node-js-with-q-an-alternative-to-callbacks/).
>
> **`try...catch`** `block to catch errors in the asynchronous code and pass them to Express`
>
> `Since` **`promises`** `automatically catch both synchronous errors and rejected promises`
>
> `Node.js errors are divided into two distinct categories:` **`operational errors and programmer errors`**





### Handling synchronous errors

- `Errors that occur in synchronous code inside` **`route handlers(request handler or controller) and middleware`**. `If synchronous code throws an error, then Express will catch and process it.`

- ` Express catches all errors that occur while running route handlers and middleware.`

- `If you want to handle a synchronous error, you can `**`throw`** `the error in an Express request handler.`

  
  
  ```js
  app.get('/', function (req, res) {
    throw new Error('BROKEN') // Express will catch this on its own.
  })
  ```





### Handling asynchronous errors

- `If you want to handle an asynchronous error, you need to send the error into an express error handler through the `**`next`** `argument.`

- `For errors returned from asynchronous functions invoked by route handlers and middleware, you must pass them to the `**`next()`** `function, where Express will catch and process them. For example:`

  ```js
  app.post('/testing', async (req, res, next) => {
    return next(new Error('Something broke again! 😱'))
  })
  
  app.get('/', function (req, res, next) {
    fs.readFile('/file-does-not-exist', function (err, data) {
      if (err) {
        next(err) // Pass errors to Express.
      } else {
        res.send(data)
      }
    })
  })
  ```

  





**`Note`** : `Express’s default error handler will:`

   - `Set the HTTP Status to 500`
   - `Sends a text response to the requester`
   - `Logs the text response in the console`





### Writing a custom error handler

- `Define error-handling middleware functions in the same way as other middleware functions. `

- `Express error handlers take in four arguments` : **`error, req, res, next`**

- `They must be placed after all your` **`middlewares and routes.`**

- `Express will stop using its default error handler once you create a custom error handler. `

- `To handle an error, you need to `**`Send over a valid HTTP status code and  Send over a valid respons`**

  

  ```js
  app.use(function (err, req, res, next) {
    res.status(500).send('Something broke!')
  })
  ```

  



### Common HTTP status code 

-  **`400 : Bad Request Error`**
   - `Used when user fails to include a field (like no credit card information in a payment form)`
   - `Also used when user enters incorrect information (Example: Entering different passwords in a password field and password confirmation field).`
-  **`401 : Unauthorized Error`:** `Used when user enters incorrect login information (like username, email or password).`

-  **`403 : Forbidden Error`:** `Used when user is not allowed access the endpoint.`

-  **`404 : Not Found Error` :** `Used when the endpoint cannot be found.`

-  **`500 : Internal Server Error :`** `Used the request sent by the frontend is correct, but there was an error from the backend.`





### Simple Example Error handler

```js
const express = require('express');  // require module

const server =  express(); // express object


server.get('/error',(req,res)=>{
    // throw  error to express default error
    throw new Error()
})
server.get('/ok',(req,res)=>{
	res.send("ok");
});

/* simple custom error handler
 * Express will stop using its default error handler once you create a custom error handler.
*/
server.use((err,req,res,next)=>{
    res.status(500).send('Something is not right');
})

server.listen(8080,(err) => {
	if(err) throw new Error('Server not started ! ');
    console.log('Server running on port 8080');
});

```







### Centralized Node.js Error-handling

- `It is usually a good idea to build a centralized error-handling component in order to avoid possible code duplications when handling errors. `

- `The error-handling component is in charge of making the caught errors understandable by, for example, sending notifications to system admins (if necessary), transferring events to a monitoring service like Sentry.io, and logging them.`

  ```js
  //helpers/error-handling.js
  class ErrorHandler extends Error {
    constructor(statusCode, message) {
      super();
      this.statusCode = statusCode;
      this.message = message;
    }
  }
  const errorHandlerMiddleware = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
      status: "error",
      statusCode,
      message
    });
  };
  module.exports = {
    ErrorHandler,
    errorHandlerMiddleware
  }
  ```
  
  
  
  ```js
  //server.js
  const express = require('express')
  const { errorHandlerMiddleware, ErrorHandler } = require('./helpers/error-handling');
  const app = express()
  
  app.use(express.json())
  const PORT = process.env.PORT || 3000
  
  app.get('/ok', (req, res) => {
    res.send("ok");
  })
  app.get('/error',(req,res)=>{
      throw new ErrorHandler(500, 'Internal server error');
  })
  
  app.use((err, req, res, next) => {
    errorHandlerMiddleware(err, res);
   // console.error(error); // log an error
    // res.render(‘errorPage’) // Renders an error page to user!
  });
  app.listen(PORT, () => console.log(`server listening at port ${PORT}`))
  ```
  
  







### [express-async-handler](https://zellwk.com/blog/express-errors/)

⚠️  **`Note`** : `Event emitters (like streams) can still cause uncaught exceptions. So make sure you are handling the error event properly.`

