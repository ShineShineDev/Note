file:///C:/Users/shine%20shine/Downloads/How%20to%20handle%20the%20POST%20request%20body%20in%20Node.js%20without%20using%20a%20framework%20_%20by%20Jermaine%20Oppong%20_%20ITNEXT.mhtml

## Body Parser  

> `body-parser` is a middleware used for parsing the `body` from the `request` object during `POST` calls made to the server. There are several modules under this package and we will mainly cover
>
> 1. URL-encoded form body parser
> 2. JSON body parser
> 3. Text body parser



### Install body-parser

```js
$ npm i body-parser
$  npm view body-parser // to view a package's published version
```



### import body-parser 

```js
const bodyParser = require('body-parser');
```



### Load middleware

```js
app.use(bodyParser.urlencoded({extended: true}));
```



### Access  HTTP Post Body Data

```js
app.post('/login',(req,res)=>{
  console.log(req.body);
    res.end(`user name : ${req.body.username} , password : ${req.body.password}`)
})
```



### Example


```js
const ex = require('express');
const bodyParser = require('body-parser'); //import body-parser 
const app = ex();

// load Body-parser middleware 
app.use(bodyParser.urlencoded({extended: true}));

// app.use(ex.urlencoded())


app.post('/login',(req,res)=>{
  console.log(req.body);
    res.end(`user name : ${req.body.username} , password : ${req.body.password}`)
})
app.listen(3000,(err)=>{
    if (err) return console.log(err.message);
    console.log('server running on port 3000');
    console.log('hit request " http://localhost:3000/login " and provide username and password ');
})
```



### Sending POST Data in HTTP

- `application/x-www-form-urlencoded`: Data in this encoding is formatted like a query string you'd see in a URL, with key-value paris being separated by `&` characters. For example: `foo=bar&abc=123&stack=abuse`. This is the default encoding.
- `multipart/form-data`: This encoding is typically used for sending files. In short, each key-value is sent in the same request, but different "parts", which are separated by "boundaries" and include more meta-data.
- `text/plain`: This data is just sent as unstructured plain text, and typically is not used.

- `application/json`
- `application/xml`