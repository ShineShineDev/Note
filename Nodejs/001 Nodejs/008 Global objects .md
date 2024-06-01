# Node.js Global Objects 

> Node.js global objects are built-in objects, that are part of the JavaScript ,they are  available in all modules and no need to include or import  in your application so you can use directly. 
>
> Some of these objects aren't actually in the global scope but in the module scope



- [global](https://www.w3resource.com/node.js/nodejs-global-object.php#global)
- [console](https://www.w3resource.com/node.js/nodejs-global-object.php#console)
- [process](https://www.w3resource.com/node.js/nodejs-global-object.php#process)
- [Class: Buffer](https://www.w3resource.com/node.js/nodejs-global-object.php#class-buffer)
- require()
  - [require.resolve()](https://www.w3resource.com/node.js/nodejs-global-object.php#require-resolve)
  - [require.cache](https://www.w3resource.com/node.js/nodejs-global-object.php#require-cache)
- [filename](https://www.w3resource.com/node.js/nodejs-global-object.php#filename)
- [dirname](https://www.w3resource.com/node.js/nodejs-global-object.php#dirname)
- [module](https://www.w3resource.com/node.js/nodejs-global-object.php#module)
- [exports](https://www.w3resource.com/node.js/nodejs-global-object.php#exports)
- [setTimeout(cb, ms)](https://www.w3resource.com/node.js/nodejs-global-object.php#settimeout)
- [clearTimeout(t)](https://www.w3resource.com/node.js/nodejs-global-object.php#cleartimeout)
- [setInterval(cb, ms)](https://www.w3resource.com/node.js/nodejs-global-object.php#setinterval)
- [clearInterval(t)](https://www.w3resource.com/node.js/nodejs-global-object.php#clearinterval)



##### global

>`The global namespace. Setting a property to this namespace makes it globally visible within the running process`
>
>`In the browser, the top-level property is the global scope. Therefore within the browser, the var var_name will define a global variable. In Node var var_name inside a module is the local to that module i.e. top-level scope is not the global scope.`



##### console

>is used to print stdout and stderr.



##### process

> provides interaction with the current Node process and can be accessed from anywhere.

```js
var fs = require('fs');
process.on('exit', function () {
var content = fs.readFileSync("readme.txt", "utf8"); 
 });
```



##### Class: Buffer

> ` It deals with binary data directly and can be constructed in a variety of ways. See details in ` [buffer](https://www.w3resource.com/node.js/nodejs-buffer.php) `section.`

```js
const bu = new Buffer([1,2,3,4,5,6])  // Buffer() is deprecated due to security and usability issues.
console.log(bu);
<Buffer 01 02 03 04 05 06>
```





##### require()

>` used to include other modules that exist in separate files, a string specifying the module to load. It accepts a single argument`

```js
const fs = require('fs');
const content = fs.readFileSync("readme.txt", "utf8");
console.log(content);
```





##### require.resolve()

>`used to search the location of a module and returns the resolved filename`

```js

```





##### require.cache

>`Modules are cached (contains all the current loaded modules) in this object. You can clear a module by deleting a key value from this object. You can load it again using require().`



##### filename

>`__filename contains the absolute path of the currently executing file. This is not present in the Node REPL`

```js
console.log(__filename);
```





##### dirname

>`__dirname contains the path to the root directory of the currently executing script. This is not present in the Node REPL`

```js
console.log(__dirname);
```





##### module

> `A reference to the current module. In a particular program, a module becomes available through require(). It is not global but rather local to each module.`



##### exports

>`A reference to the module.exports that is shorter to type. exports isn't actually a global but rather local to each module.`



##### setTimeout(cb, ms)

>`the setTimeout() calls a function (cb) after a specified number of milliseconds (ms). The timeout must be in the range of 1-2,147,483,647 inclusive. If the value is outside that range, it's changed to 1 millisecond`

```js
setTimeout(function(){
console.log('I have come after 500 miliseconds')},500);
```





##### clearTimeout(t)

>`The clearTimeout() is used to cancel a timeout that was set with setTimeout(). The callback will not execute.`



##### setInterval(cb, ms)

> `setinterval() calls a function (cb) repeatedly at specified intervals (in milliseconds (ms)). The interval must be in the range of 1-2,147,483,647 inclusive. If the value is outside that range, it's changed to 1 millisecond.`

```js
setInterval(function(){
console.log('Node.js')
}, 300);
```



##### clearInterval(t)

> `The clearInterval() is used to stop a timer that was set with setInterval(). The callback will not execute.`





## For PN

```js
/* Node.js Global Objects 
 -  Node.js global objects are built-in objects, that are part of the JavaScript ,they are  available in all           modules and no need to include or import  in your application so you can use directly. 
 -  Some of these objects aren't actually in the global scope but in the module scope */

/* global : The global namespace. Setting a property to this namespace makes it globally visible within the running 		 process.In the browser, the top-level property is the global scope. Therefore within the browser, the var         var_name will define a global variable. In Node var var_name inside a module is the local to that module           i.e. top-level scope is not the global scope */
        
/* console : is used to print stdout and stderr. */
/* process : provides interaction with the current Node process and can be accessed from anywhere.  */
/* Class:Buffer  : It deals with binary data directly and can be constructed in a variety of ways. */
/* require() : used to include other modules that exist in separate files,a string specifying the module to load.*/
/* require.resolve() : used to search the location of a module and returns the resolved filename */
/* require.cache :  Modules are cached (contains all the current loaded modules) in this object. You can clear a                      module by deleting a key value from this object. You can load it again using require() */
/* filename : __filename contains the absolute path of the currently executing file. */
/* dirname :  __dirname contains the path to the root directory of the currently executing script */
/* module : A reference to the current module. In a particular program, a module becomes available through      		   require().It is not global but rather local to each module. */

/* exports : A reference to the module.exports that is shorter to type. exports isn't actually a global but rather             local to each module*/

/* setTimeout(cb, ms) : the setTimeout() calls a function (cb) after a specified number of milliseconds (ms) */
/* clearTimeout(t) : The clearTimeout() is used to cancel a timeout that was set with setTimeout(). The callback    				   will not execute.*/
/* setInterval(cb, ms) : setinterval() calls a fun(cb) repeatedly at specified intervals (in milliseconds (ms)) */
/* clearInterval(t) : clearInterval() is used to stop a timer that was set with setInterval(). callback will not 					  execute.*/
```

