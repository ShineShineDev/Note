# Node.js Modules



>Modular programming is a software design technique.
>
>A set of functions or methods  you want to include in your application.
>
>That emphasizes separating the functionality of a program into independent, interchangeable modules, such that each contains everything necessary to execute only one aspect of the desired functionality ([Wikipedia](https://en.wikipedia.org/wiki/Modular_programming))





##### Node.js Module Types

- Core  or Built-in Modules  (http,fs,os)
- Local Modules  (created locally in your Node.js application)
- 3rd Party Modules (express, gulp, lodash, async, socket.io, mongoose, underscore, pm2, bower, q, debug, react, mocha etc)



##### Built-in Modules

- `Node.js has a set of built-in modules which you can use without any further installation.`

- | Module                                                       | Description                                                |
  | :----------------------------------------------------------- | :--------------------------------------------------------- |
  | [assert](https://www.w3schools.com/nodejs/ref_assert.asp)    | Provides a set of assertion tests                          |
  | [buffer](https://www.w3schools.com/nodejs/ref_buffer.asp)    | To handle binary data                                      |
  | child_process                                                | To run a child process                                     |
  | [cluster](https://www.w3schools.com/nodejs/ref_cluster.asp)  | To split a single Node process into multiple processes     |
  | [crypto](https://www.w3schools.com/nodejs/ref_crypto.asp)    | To handle OpenSSL cryptographic functions                  |
  | [dgram](https://www.w3schools.com/nodejs/ref_dgram.asp)      | Provides implementation of UDP datagram sockets            |
  | [dns](https://www.w3schools.com/nodejs/ref_dns.asp)          | To do DNS lookups and name resolution functions            |
  | domain                                                       | Deprecated. To handle unhandled errors                     |
  | [events](https://www.w3schools.com/nodejs/ref_events.asp)    | To handle events                                           |
  | [fs](https://www.w3schools.com/nodejs/ref_fs.asp)            | To handle the file system                                  |
  | [http](https://www.w3schools.com/nodejs/ref_http.asp)        | To make Node.js act as an HTTP server                      |
  | [https](https://www.w3schools.com/nodejs/ref_https.asp)      | To make Node.js act as an HTTPS server.                    |
  | [net](https://www.w3schools.com/nodejs/ref_net.asp)          | To create servers and clients                              |
  | [os](https://www.w3schools.com/nodejs/ref_os.asp)            | Provides information about the operation system            |
  | [path](https://www.w3schools.com/nodejs/ref_path.asp)        | To handle file paths                                       |
  | punycode                                                     | Deprecated. A character encoding scheme                    |
  | [querystring](https://www.w3schools.com/nodejs/ref_querystring.asp) | To handle URL query strings                                |
  | [readline](https://www.w3schools.com/nodejs/ref_readline.asp) | To handle readable streams one line at the time            |
  | [stream](https://www.w3schools.com/nodejs/ref_stream.asp)    | To handle streaming data                                   |
  | [string_decoder](https://www.w3schools.com/nodejs/ref_string_decoder.asp) | To decode buffer objects into strings                      |
  | [timers](https://www.w3schools.com/nodejs/ref_timers.asp)    | To execute a function after a given number of milliseconds |
  | [tls](https://www.w3schools.com/nodejs/ref_tls.asp)          | To implement TLS and SSL protocols                         |
  | tty                                                          | Provides classes used by a text terminal                   |
  | [url](https://www.w3schools.com/nodejs/ref_url.asp)          | To parse URL strings                                       |
  | [util](https://www.w3schools.com/nodejs/ref_util.asp)        | To access utility functions                                |
  | v8                                                           | To access information about V8 (the JavaScript engine)     |
  | [vm](https://www.w3schools.com/nodejs/ref_vm.asp)            | To compile JavaScript code in a virtual machine            |
  | [zlib](https://www.w3schools.com/nodejs/ref_zlib.asp)        | To compress or decompress files                            |





##### Using Core  or Built-in Modules  (http,fs,os)

- To use a module, use the `require()` function with the name of the module:

  ````js
  var http = require('http') 
  
  // access to the HTTP module, and is able to create a server
  http.createServer(function(res,req){
     res.writeHead(200, {'Content-Type': 'text/html'});
      res.end('<h1>Hello World!</h1>');
  }).listen(8080,function(){
      console.log('servering running on port 8080...')
  })
  
  ````





##### Create Local Modules  (created locally in your Node.js application)

> You can create your own modules, and easily include them in your applications.

- `create a file `

- `exports keyword to make properties and methods available outside the module file.`

  ```js
  touch myMoudle.js // create flie
  
  exports.calSquare = function (w,h) {
     return w*h;
  };
  //exports keyword to make properties and methods available outside the module file.`
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

  



##### 3rd Party Modules(express, gulp, laodash)

> Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application



- Install Package Locally

  - `All the modules installed using NPM are installed under node_modules.`

  - `C:\>npm install <package name> or C:\>npm install express --save `

  - `--save at the end of the install command to add dependency entry into package.json`

    
  
- Install Package Globally

  - `-g in the install command to install package globally`

  - `installed global packages into /<User>/local/lib/node_modules folder.`

  - ```
    C:\>npm install -g express
    ```




- Update Package

  - `to update package you can use npm updage package-name `

    ```js
    C:/>npm update express
    ```

    

- Uninstall Packages

  - `npm uninstall can use uninstall pacekage`

  - ```js
    npm uninstall express
    ```






### For PN



```js
/* Built-in Modules(Core Moudel)
 - To use a module, use the require() function with the name of the modul
 - Node.js has a set of built-in modules which you can use without any further installation.
   assert : Provides a set of assertion tests                          
   buffer : To handle binary data                                      
   child_process :  To run a child process                                     
   cluster : To split a single Node process into multiple processes     
   crypto : To handle OpenSSL cryptographic functions                  
   dgram :  Provides implementation of UDP datagram sockets            
   dns :  To do DNS lookups and name resolution functions            
   domain :  Deprecated. To handle unhandled errors                     
   events : To handle events                                           
   fs : To handle the file system                                  
   http : To make Node.js act as an HTTP server                      
   https : To make Node.js act as an HTTPS server
   net : To create servers and clients                              
   os : Provides information about the operation system            
   path: To handle file paths
   punycode : Deprecated. A character encoding scheme                    
   querystring : To handle URL query strings                                
   readline : To handle readable streams one line at the time            
   stream : To handle streaming data                                   
   string_decoder : To decode buffer objects into strings                      
   timers :  To execute a function after a given number of milliseconds 
   tls : To implement TLS and SSL protocols                         
   tty : Provides classes used by a text terminal                   
   url :  To parse URL strings                                       
   util :  To access utility functions                                
   v8 :  To access information about V8 (the JavaScript engine)     
   vm : To compile JavaScript code in a virtual machine            
   zlib : To compress or decompress files                            
*/	

/* Local Modules  (created locally in your Node.js application)  
   - create flie
   - export that
   - require exported moudel
   - use that
*/
touch myMoudle.js // create flie
exports.calSquare = function (w,h) { exports	return w*h;}; //export that
var http = require('http'); //require file
var myMoudle = require('./myMoudle'); //require expro file
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("calculate area : " + myMoudle.calSquare(2,3));
  res.end();
}).listen(8080);

 
/*3rd Party Modules
  - 3rd Party Modules (express, gulp, lodash, async, socket.io, mongoose, underscore, pm2, bower, q, debug, react,    mocha etc)
  - Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in         your application
*/   
>npm install  express //install package local
>npm install -g express //install package globally`
>npm update express  //Update Package
>npm uninstall express //uninstall pacekage
```

