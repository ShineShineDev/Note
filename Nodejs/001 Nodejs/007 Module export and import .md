##### Create Local Modules  (created locally in your Node.js application)

> You can create your own modules, and easily include them in your applications.

- `create a file `

- `exports keyword to make properties and methods available outside the module file.`

  ```js
  touch myMoudle.js // create flie
  
  exports.calSquare = function (w,h) {
     return w*h;
  };
  ```

  



##### Include Your Own Module

> you can include and use the module in any of your Node.js files.

- `To use a module, use the require() function with the name of the module:`

- `./  to locate the module, that means that the module is located in the same folder as the Node.js file.`

  

  ```js
  var http = require('http');
  var myMoudle = require('./myMoudle');
  
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("calculate area : " + myMoudle.calSquare(2,3));
    res.end();
  }).listen(8080);
  
  ```
  
  