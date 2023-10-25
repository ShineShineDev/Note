# Serving Static Files with Express 

> `To serve static files such as images, CSS files, and JavaScript files, use the ` **`express.static`** `built-in middleware function`
>
> `We have created a directory with the name of public and express will automatically server all the files in the folder`



- `express.static(root, [options])`
- `The `**`root`** `argument specifies the root directory from which to serve static assets`
- `Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware.`

```js
const express = require('express');
const app = exexpress();

app.use(express.static('public'))

app.listen(8080,(err)=>{
    if(err) return console.log('Server runnning on port 8080');
})

// load the files that are in the public directory:
http://localhost:3000/node.png
http://localhost:3000/ex.png
```

> `To use multiple static assets directories, call the `**`express.static`** `middleware function multiple times`





#### Create a virtual path 

> `To create a virtual path prefix (where the path does not actually exist in the file system) for files that are served by the `express.static` function, [specify a mount path](http://expressjs.com/en/4x/api.html#app.use) for the static directory

```js
app.use('/static', express.static('public'))

// load the files that are in the public directory:
http://localhost:3000/static/node.png
http://localhost:3000/static/ex.png
```





#### Best practice for serving static  file

>  `the path that you provide to the` **`express.static`** `function is relative to the directory from where you launch your node process. If you run the express app from another directory, it’s safer to use the absolute path of the directory that you want to serve`

```js
 app.use('/static', express.static(path.join(__dirname, 'public'))) // best practice
```

