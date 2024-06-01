## Template engine



>  `A template engine enables you to use static template files in your application. At runtime, the template engine replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. This approach makes it easier to design an HTML page.`



##### Popular template engines 

- `Pug (default in Express application generator)`
- `EJS`
- `Mustache`
- `Jade (Jade has been renamed to Pug) `
- `Underscore `
- `Embedded `
- `Mustache`
- `Handlebars`
- `JSRENDER`
- `DOT`
- `Nunjucks`



## Pug 

```js
$ npm install --save pug
```



#####  set view engine 

```js
app.set('view engine', 'pug');
app.set('views', './views');
```



##### Create a Pug template file 

```js
// views/index.pug
html
  head
    title= title
  body
    h1= message
```



##### Create a route to render

```js
app.get('/',(req,res)=>{
    res.render('index', { title: 'home', message: 'Home page' }) // Pass Data to view
})
```



 ##### String inerpolation

##### Loop

##### Condition

##### Includes

##### Pass Data to a Partial in EJS





## EJS

> **EJS** stands for *Embedded JavaScript* is a **Templating Language**. **EJS** is very simple, light and fast. It allow us to create HTML Markup with Plain JavaScript.
>
> **EJS** was founded in Feb 2011 and is licensed under Apache License

 ####  install ejs

```js
$ npm i ejs --save
```



#### set view engine 

```js
app.set('view engine','jes');
app.set('views', './views');
```



#### Create a route to render

```js
app.get('/',(req,res)=>{
  res.render('home', { message: 'Home page' })  // Pass Data to view
});
```



#### string interpolation 

>  To echo a single variable, we just use `<%= tagline %>`.

```js
// Create a ejs template file
// views/home.ejs 
<p><%=message%></p>
```



#### loop 

> To loop over our data, we will use `.forEach`

```js
// route
app.get('/',(req,res)=>{
  const posts = [
     {
         id : 1,
         title : 'post one'
     },
      {
         id : 2,
         title : 'post tow'
      },
      {
         id : 3,
         title : 'post three'
      }
  ]
  res.render('home', { posts }) //Pass Data to view
});

// views/post.ejs
<ul>
 <% posts.forEach((item)=>{ %> 
    <li>
    id : <%=item.id%> <br>
    title :  <%=item.title%> 
     </li>  
 <% }); %> 
 </ul>
```



#### Condition

```js
// route
app.get('/',(req,res)=>{
  res.render('home', { isAut: true,message : 'Authenticated' })  // Pass Data to view
});

// Create a ejs template file
// views/conditions.ejs 
<% if (isAuth) { %>
    <%= message %>
 <% }else{ %>  
    fail Authentication
 <% } %>
    
```





#### Includes

> Use `<%- include('RELATIVE/PATH/TO/FILE') %>` to embed an EJS partial in another file.

```js
// views/header.ejs
<!DOCTYPE html>
<html>
    <head>
      <title>ejs include</title>
      <title>EJS Is Fun</title>
   </head>
<body>
```

```js
// views/footer.ejs          
</body>
</html>
```

```js
// views/partial.ejs
<%- include('header'); %>
<main>
    <p>Use include('RELATIVE/PATH/TO/FILE') to embed an EJS partial in another file.<p>
    <p>The hyphen &lt;%- instead of just &gt;% to tell EJS to render raw HTML.</p>
</main>
<%- include('footer') %>
```

```js
// route
app.get('/',(req,res)=>{
  res.render('home', { isAut: true,message : 'Authenticated' })  // Pass Data to view
});

```



#### Pass Data to a Partial in EJS

> The EJS partial has access to all the same data as the parent view.

```js
<header>
    <%- include('../partials/header', {variant:'compact'}); %>
</header>
```



#### Tags

- `<%` 'Scriptlet' tag, for control-flow, no output
- `<%_` ‘Whitespace Slurping’ Scriptlet tag, strips all whitespace before it
- `<%=` Outputs the value into the template (HTML escaped)
- `<%-` Outputs the unescaped value into the template
- `<%#` Comment tag, no execution, no output
- `<%%` Outputs a literal '<%'
- `%>` Plain ending tag
- `-%>` Trim-mode ('newline slurp') tag, trims following newline
- `_%>` ‘Whitespace Slurping’ ending tag, removes all whitespace after 