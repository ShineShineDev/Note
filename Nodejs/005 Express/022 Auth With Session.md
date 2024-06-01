## Session base auth

> `The following code creates an account for us and stores it in memory. This is just for the purpose of demo; it is recommended that a persistent storage (database or files) is always used to store user information.`



### app.js 

```js
//app.js
const express = require('express'); 
const path = require('path'); 
const session = require('express-session'); 
const bodyParser = require('body-parser');

const app = express(); // create express object

// load body-parser middleware
app.use(bodyParser.urlencoded({extended: true})); 
// express static middleware
app.use('/static', express.static(path.join(__dirname, 'public')))  
// load session middleware
app.use(session({
    secret: '0SAfsdklas9ieWAE',
    resave: true,  
    saveUninitialized: true
}))
// set view engine
app.set('view engine','ejs');
// point view folder
app.set('views', './views');

// Authentication middleware
const makeAuth = (req,res,next)=>{
   if(req.session.user){
      next();     //If session exists, proceed to page
   } else {
       res.redirect('/login');
   }
}
// store user Accounts in memory.
var Accounts = [];

// show login form
app.get('/login',a(req,res)=>{
   res.render("login",{message: ""});
});

// show register form
app.get('/register',(req,res)=>{
   res.render("register",{message: ""});
});

// create new user 
app.post('/register',(req,res)=>{
    //  res.send(`username : ${req.body.username}, password ${req.body.password}`);
    // check user in accounts ary
    const isAccountsExist = Accounts.some((user) => user.username === req.body.username);
    if(isAccountsExist){
        return res.render('login', { message: "User Already Exists!" } );
    }
    const newUser = {
          username: req.body.username,
          password: req.body.password
    };
    // push new user to Accounts arrary
    Accounts.push(newUser);
    // set user to session
    req.session.user = newUser;
    return res.render('user', { user: newUser} );
});

// login user 
app.post('/login',(req,res)=>{
    const checkUsername = Accounts.some((user) => user.username === req.body.username);
    const checkPassword = Accounts.some((user) => user.password === req.body.password);
    if(!checkUsername || !checkPassword){
        return res.render('login', { message: "Invalid credentials!" } );
    }
    const user = {
          username: req.body.username,
          password: req.body.password
    };
    // set user in session
    req.session.user = user;
    return res.render('user', {user});
});

// user page
app.get('/user',makeAuth,(req,res)=>{
    // get user from session
    const user = req.session.user;
    res.render('user',{user});
});

// dashboard
app.get('/dashboard',makeAuth,(req,res)=>{
    // get user from session
    const user = req.session.user;
   res.render('user',{user});
});

// logout
app.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err) return console.log(err);
        console.log("Session Destroyed") ;
    })
    res.redirect("/login");
});

app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Server runnning on port 8080');
})
```



### header.ejs

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <link rel="stylesheet" href="http://localhost:8080/static/bootstrap.css">
        <title>Express Session Base Auth</title>       
        <style>
            *{font-family: serif}
        </style>
   </head>
   <body class='bg-dark' style="background-image:url(http://localhost:8080/static/bg.jpg);background-size:cover;">
```



### footer.ejs

```html
</body>
</html>
```



### login.ejs


```html
<%-include('header')%>
    <div class='container'>
        <h4 class='text-center text-white mb-3 mt-5 p-2'>Express Session Base Auth</h4>
        <div class='row no-gutter'>
           <div class='col-md-4 offset-md-4 mt-1'>
               <form class="mt-4 bg-light border p-4 rounded" method='post' (action = "/login" >
                  <% if(message) {%>
                    <%=message%>
                   <% }%>
                   <h5 class='text-center text-info mb-3 mt-1 p-2'>Login</h5>
                   <div class='form-group'>
                       <lable class='text-info'>User Name</label>
                       <input type="text" name='username' class="form-control" required/>
                   </div>
                   <div class='form-group'>
                       <lable class='text-info'>Password</label>
                       <input type="password" name='password' class="form-control" required/> <br>
                   </div>
                   <input type="submit" value='login' class='btn btn-info mt-0'/>
                   <a class='float-right' href='http://localhost:8080/register'>Register</a>
               </form>
            </div>
        </div>
    </div>
<%-include('footer')%>
```



### register.ejs

```html
<%-include('header')%>
    <div class='container'>
        <h4 class='text-center text-white mb-3 mt-5 p-2'>Express Session Base Auth</h4>
        <div class='row no-gutter'>
           <div class='col-md-4 offset-md-4 mt-1'>
               <form class="mt-4 bg-light border p-4 rounded" method='post' action = "/register" >
                  <% if(message) {%>
                    <%=message%>
                   <% }%>
                   <h5 class='text-center text-info mb-3 mt-1 p-2'>Register</h5>
                   <div class='form-group'>
                       <lable class='text-info'>User Name</label>
                       <input type="text" name='username' class="form-control" required/>
                   </div>
                   <div class='form-group'>
                       <lable class='text-info'>Password</label>
                       <input type="password" name='password' class="form-control" required/> <br>
                   </div>
                   <input type="submit" value='register' class='btn btn-info mt-0'/>
                   <a class='float-right' href='http://localhost:8080/login'>Login</a>
               </form>
            </div>
        </div>
    </div>
<%-include('footer')%>
```



### user.ejs

```html
<%-include('header')%>
<h3 class='text-center text-white mt-5' style='font-family: serif'>Express Session Base Auth</h3>
<h6 class='text-center text-white mt-3' style='font-family: serif'>Welcome Back <%=user.username%></h6>
<h6 class='text-center text-white mt-3' style='font-family: serif'>
    <a class='text-white' href='http://localhost:8080/logout'>Logout</a>
    </h6>
<%-include('footer')%>
```





