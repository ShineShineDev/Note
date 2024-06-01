## Cookie-parser 

> An HTTP cookie is a small piece of data stored on the user's computer by the web browser while browsing a website. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity
>
> **Cookies let websites remember you**



### Install

```js
$ npm i cookie-parser
$ npm view cookie-parser  // to view a package's published version
```



### Import module

```js
const cookieParser = require('cookie-parser');
```



### Load middleware

```js
app.use(cookieParser());
```



### Set  Cookie

- `The res.cookie() function is used for setting Cookie`
- `res.cookie(name, value, options); `

```js
app.get('/add-cookie',(req,res)=>{
  res.cookie("auth","loginAuth"); // simple 
  res.cookie('cart', { items: [1,2,3] }); // object  value
  res.cookie("name", 'shineshine', {expire: 360000 + Date.now()});  // expiration
  res.cookie(name, 'value', {maxAge: 360000,httpOnly: true}); // set expiration with 'maxAge' property and httpOnly property
})
```



### Get cookies

> **req.cookies** property is used to get cookie data in JSON. If there is no cookie, it will return {}. But if there is cookie, we will get the Cookie Data in JSON using **req.cookies**

```js
app.get('/get-cookies',(req,res)=>{
   console.log(req.cookiess)
   res.send(req.cookies);
})

app.get('/get-auth-cookies',(req,res)=>{
 const name =req.cookies.auth;
   if(name){
       return res.send(name)
   }
   return res.send("no cookies found");
})

```



### Deleting Existing Cookies

> `To delete a cookie, use the clearCookie function`

```js
app.get('/clear_cookie_foo', function(req, res){
   res.clearCookie('foo');
   res.send('cookie foo cleared');
});

```





### Signed Cookie

> **req.signedCookies** property is used to get **Signed Cookie** data in JSON.

```js
app.get("/signed-cookies",(req,res)=>{
   console.log(req.signedCookies)
   res.send(req.signedCookies); 
})
```





###  Properties in the options object.

- decode
- encode
- domain
- expires
- maxAge
- httpOnly
- path
- sameSite
- secure



### Example

```js
const express  = require('express'); 
const cookieParser  = require('cookie-parser'); // import
const app = express();
app.use(cookieParser()) // load cookie-parser middleware

app.get('/set-cookies',(req,res)=>{
    res.cookie("auth","loginAuth"); // simple 
    res.cookie('objVal', { items: [1,2,3] }); // object  value
    res.cookie("cwe", 'cookie wiht expire property', {expire: 360000 + Date.now()});  // expiration
    res.cookie("cwe2", 'cookie wiht maxAge property', {maxAge: 360000,httpOnly: true}); // set expiration with 'maxAge' 
    res.send('Added Cookie');
})

app.get('/get-cookies',(req,res)=>{
    res.send(req.cookies);
})

app.get('/clear-cookies',(req,res)=>{
    res.clearCookie('auth');
    res.send('Detlete Auth Cookie')
})

app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Express app is running on port 8080');
    console.log('set cookie : http://localhost:8080/set-cookies');
    console.log('get cookie : http://localhost:8080/set-cookies');
    console.log('clear cookie : http://localhost:8080/clear-cookies');
})       
                       
```



