## Session

> ` Cookies are stored in browser as a text file format whereas Sessions are stored in server side.`
>
> `Session management can be done in node.js by using the express-session module.`

### Install

> **Warning** The default server-side session storage, `MemoryStore`, is *purposely* not designed for a production environment. It will leak memory under most conditions, does not scale past a single process, and is meant for debugging and developing.
>
> For a list of stores, see [compatible session stores](http://expressjs.com/en/resources/middleware/session.html#compatible-session-stores).

```js
$ npm install --save express-session
$ npm version express-session // check your express-session version
```

### Import 

```js
const session = require('express-session')
```



### Load middleware

> `secret` is the only required parameter, but there are many more you can use. It should be a randomly unique string for your application

```js
// Session Setup 
app.use(session({ 
    // It holds the secret key for session 
    secret: 'Your_Secret_Key', 
 
    // Forces the session to be saved 
    // back to the session store 
    resave: true, 
  
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
})) 
```



### Set Session

> `The session is attached to the request, so you can access it using req.session`

```js
app.get("/set-session", function(req, res){ 
    // req.session.key = value 
    req.session.name = 'shine shine'
    return res.send("Session Set") 
}) 
  
```

### Get Session

> `The session is attached to the request, so you can access it using req.session`

```js
app.get("/get-session", function(req, res){ 
    // req.session.key = value 
    const name  =  req.session.name
    return res.send(name) 
}) 
  
```



### Destroy Session

> `The session is attached to the request, so you can access it using req.session`

```js
app.get("/destroy-session", function(req, res){ 
 req.session.destroy(function(error){ 
     if(error) return console.log(error);
     console.log("Session Destroyed") ;
    }) 
})   
```



### req.session.id

> Each session has a unique ID associated with it. This property is an alias of [`req.sessionID`](http://expressjs.com/en/resources/middleware/session.html#reqsessionid-1) and cannot be modified. It has been added to make the session ID accessible from the `session` objec



### Example

```js
const express = require('express');
const session = require('express-session');
const app = express();

// Session Setup 
app.use(session({ 
    secret: '343ji43j4n3jn4jk3n',
    resave: true, 
    // Forces a session that is "uninitialized" 
    // to be saved to the store 
    saveUninitialized: true
}));
app.get('/set-session',(req,res)=>{
    req.session.name = 'shine shine';
    res.send('Set Session');
})
app.get('/get-session',(req,res)=>{
     const name = req.session.name;
     onsole.log(req.session.id)
     res.send(name);
})
app.get('/clear-session',(req,res)=>{
    req.session.destroy((error)=>{
        if(error) return console.log(error);
        res.send("Session Destroyed") ;
    });
})

app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Express server is running on port 8080');
    console.log('Set Session : http://localhost:8080/set-session');
    console.log('get Session : http://localhost:8080/get-session');
    console.log('Clear Session : http://localhost:8080/clear-session');
})
```

# connect-mongodb-session

[MongoDB](http://mongodb.com/)-backed session storage for [connect](https://www.npmjs.org/package/connect) and [Express](http://www.expressjs.com/). Meant to be a well-maintained and fully-featured replacement for modules like [connect-mongo](https://www.npmjs.org/package/connect-mongo)



http://expressjs.com/en/resources/middleware/session.htm

https://www.npmjs.com/package/express-session