# Template Engines

- `also known as a template processor or template parser`
- `At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client`



### JavaScript Template engines

- Ejs
- PUG
- Underscore 
- Embedded 
- Mustache
- Handlebars
- Jade 
- JSRENDER
- DOT
-   Nunjucks



### Ejs

> EJS is a simple templating language that lets you generate HTML markup with plain JavaScript.

###### install

```js
npm install --save ejs
```



###### Usage

```js
ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});
```



###### using ejs in express 

- we need to do is to set EJS as our templating engine with Express

```js
// app.js
var express = require('express'); 
var app = express(); 
  
// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{ 
  res.render('home'); 
}); 

```



###### view folder

> EJS looks into the ‘views’ folder for the templates to render by default . 

- make a ‘views’ folder in our main node project folder

-  make a file named “filname.ejs”

  ```js
  // views/home.ejs
    <!DOCTYPE html> <html> 
  <head> 
      <title>Home Page</title> 
  </head> 
  <body> 
      <h1>Home page</h1> 
  </body> 
  </html>   
  ```

  

###### dynamic data 

-  `To add dynamic content this render method takes a second parameter which is an object. `

  ```JS
  // app.js
  app.get('/user', (req, res)=>{ 
    res.render('user',{name:'shine shine'}); 
  }); 
  
  // views/user.ejs
    <!DOCTYPE html> <html> 
  <head> 
      <title>Home Page</title> 
  </head> 
  <body> 
      <h1>Hellow <%=user%></h1> 
  </body> 
  </html>   
  ```

  

###### looping

- To add dynamic content this render method takes a second parameter which is an object 

```js
// app.js
app.get('/all-users', (req, res)=>{ 
  const all_users = ['shine shine','Tun Tun','Aung Aung'];
  res.render('user',{users:all_users}); 
}); 

// view/user.ejs
  <!DOCTYPE html> <html> 
<head> 
    <title>Home Page</title> 
</head> 
<body> 
        
  <% users.forEach((item)=>{ %> 
    <li><%=item%></li>  
   <% }); %> 
      
</body> 
</html>   
```



###### condtiional runding

```js
// app.js
app.get('/all-users', (req, res)=>{ 
  const all_users = {
      isShow : true,
      users : ['shine shine','Tun Tun','Aung Aung']
  }
  res.render('user',{users:all_users}); 
}); 

// view/user.ejs
  <!DOCTYPE html> <html> 
<head> 
    <title>Home Page</title> 
</head> 
<body> 
 
  <% if(all_users.isShow){ %> 
     <% all_users.users.forEach((item)=>{ %> 
        <li><%=item%></li>  
     <% }); %> 
  <% }); %> 
    
</body> 
</html>   
```



###### Includes

```js
<%- include('user/show', {user: user}); %>
```



###### Tags

- `<%` 'Scriptlet' tag, for control-flow, no output
- `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal '<%'
- `%>` Plain ending tag
- `-%>` Trim-mode ('newline slurp') tag, trims following newline
- `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it



###### Layouts

```js
<%- include('header'); -%>
<h1>
  Title
</h1>
<p>
  My page
</p>
<%- include('footer'); -%>
```







### For Paper Note

```js
/*Template Engines
  - also known as a template processor or template parser
  - At runtime, the template engine replaces variables in a template file with actual values, and transforms the       template into an HTML file sent to the client
*/  
/* JavaScript Template engines
    - Ejs
	- PUG
	- Underscore 
	- Embedded 
	- Mustache
	- Handlebars
	- Jade 
	- JSRENDER
	- DOT
	- Nunjucks
*/

/* Ejs
  - EJS is a simple templating language that lets you generate HTML markup with plain JavaScript. */

//Install
npm install --save ejs

//Usage
ejs.renderFile(filename, data, options, function(err, str){
    // str => Rendered HTML string
});


/* Using ejs in express 
   - we need to do is to set EJS as our templating engine with Express 
*/
// app.js
var express = require('express'); 
var app = express();
app.set('view engine', 'ejs');  // Set EJS as templating engine 
app.get('/', (req, res)=>{ 
  res.render('home'); 
}); 

/*View folder
  - EJS looks into the ‘views’ folder for the templates to render by default 
  - make a ‘views’ folder in our main node project folder
  - make a file named “filname.ejs” 
*/
// views/home.ejs 
<body> <h1>Home page</h1></body> 

    
/* Dynamic data 
   - To add dynamic content this render method takes a second parameter which is an object 
*/
//app.js
app.get('/user', (req, res)=>{ 
  res.render('user',{name:'shine shine'}); 
}); 
// views/user.ejs 
<body> <h1>Hellow <%=user%></h1></body> 

    
/* Looping
  - To add dynamic content this render method takes a second parameter which is an object 
*/
// app.js
app.get('/all-users', (req, res)=>{ 
  const all_users = ['shine shine','Tun Tun','Aung Aung'];
  res.render('user',{users:all_users}); 
}); 
// view/user.ejs 
<body> 
  <% users.forEach((item)=>{ %> 
    <li><%=item%></li>  
   <% }); %>       
</body> 
                            
//condtiional runding    
app.get('/all-users', (req, res)=>{  // app.js
  const all_users = {
      isShow : true,
      users : ['shine shine','Tun Tun','Aung Aung']
  }
  res.render('user',{users:all_users}); 
}); 
//view/user.ejs
<body> 
  <% if(all_users.isShow){ %> 
     <% all_users.users.forEach((item)=>{ %> 
        <li><%=item%></li>  
     <% }); %> 
  <% }); %> 
</body>     
                                                  
//Layouts
<%- include('header'); -%>
<h1>Title</h1>
<p>My page</p>
<%- include('footer'); -%>                                         
    
// Includes
<%- include('user/show', {user: user}); %>

/* Tags
	- `<%` 'Scriptlet' tag, for control-flow, no output
	- `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
	- `<%=` Outputs the value into the template (HTML escaped)
	- `<%-` Outputs the unescaped value into the template
	- `<%#` Comment tag, no execution, no output
	- `<%%` Outputs a literal '<%'
	- `%>` Plain ending tag
	- `-%>` Trim-mode ('newline slurp') tag, trims following newline
	- `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after it
*/
```


