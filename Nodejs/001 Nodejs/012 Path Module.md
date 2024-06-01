

#                      Path Moudule

> Provides a way of working with directories and file paths.



#### Path Properties and Methods

| Method                                                       | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [basename()](https://www.w3schools.com/nodejs/met_path_basename.asp) | Returns the last part of a path                              |
| [delimiter](https://www.w3schools.com/nodejs/met_path_delimeter.asp) | Returns the delimiter specified for the platform             |
| [dirname()](https://www.w3schools.com/nodejs/met_path_dirname.asp) | Returns the directories of a path                            |
| [extname()](https://www.w3schools.com/nodejs/met_path_extname.asp) | Returns the file extension of a path                         |
| [format()](https://www.w3schools.com/nodejs/met_path_format.asp) | Formats a path object into a path string                     |
| [isAbsolute()](https://www.w3schools.com/nodejs/met_path_isabsolute.asp) | Returns true if a path is an absolute path, otherwise false  |
| [join()](https://www.w3schools.com/nodejs/met_path_join.asp) | Joins the specified paths into one                           |
| [normalize()](https://www.w3schools.com/nodejs/met_path_normalize.asp) | Normalizes the specified path                                |
| parse()                                                      | Formats a path string into a path object                     |
| posix                                                        | Returns an object containing POSIX specific properties and methods |
| relative()                                                   | Returns the relative path from one specified path to another specified path |
| resolve()                                                    | Resolves the specified paths into an absolute path           |
| sep                                                          | Returns the segment separator specified for the platform     |
| win32                                                        | Returns an object containing Windows specific properties and methods |



#### basename()

- ` returns the filename part of a file path.`

- `path.basename(path, extension:optional);`

  ```js
  const path = require('path');
  
  const filename = path.basename('D:/Desktop/note/Nodejs/codes/011-path.js');
  console.log(filename); // 011-path.js
  ```




#### delimiter

-  `return the delimiter used on the server`

- `; (semicolon) for Windows`

- `: (colon) for POSIX`

  ```js
  const path = require('path');
  
  const filename = path.delimiter;
  console.log(filename);
  // ;
  ```




#### path.dirname() 

> returns the directories of a file path.



```js
const path = require('path');

const filename = path.dirname('D:/Desktop/note/Nodejs/codes/011-path.js');
console.log(filename); // D:/Desktop/note/Nodejs/codes
```



#### path.extname()

> returns the extension of a file path.

```js
const path = require('path');

const filename = path.extname('D:/Desktop/note/Nodejs/codes/011-path.js');
console.log(filename);  // .js
```



#### path.format()

>  formats a path object into a path string.

```js
const path = require('path');
const file_obj = { dir: 'D:\\Desktop\\note\\odejs\\codes', base: '011-path.js' }

const fp = path.format(file_obj);
console.log(fp); // D:\Desktop\note\odejs\codes\011-path.js
```



#### path.isAbsolute()

>  returns *true* if the specified path is an absolute path, otherwise *false*.

```js
const path = require('path');
console.log(path.isAbsolute('D:/Desktop/note/Nodejs/codes/011-path.js')); // true
console.log(path.isAbsolute('codes/011-path.js')); // false
```





#### Console path moduel 

```js
const path = require('path');
console.log(path)

{
  resolve: [Function: resolve],
  normalize: [Function: normalize],
  isAbsolute: [Function: isAbsolute],
  join: [Function: join],
  relative: [Function: relative],
  toNamespacedPath: [Function: toNamespacedPath],
  dirname: [Function: dirname],
  basename: [Function: basename],
  extname: [Function: extname],
  format: [Function: bound _format],
  parse: [Function: parse],
  sep: '\\',
  delimiter: ';',
  win32: [Circular],
  posix: {
    resolve: [Function: resolve],
    normalize: [Function: normalize],
    isAbsolute: [Function: isAbsolute],
    join: [Function: join],
    relative: [Function: relative],
    toNamespacedPath: [Function: toNamespacedPath],
    dirname: [Function: dirname],
    basename: [Function: basename],
    extname: [Function: extname],
    format: [Function: bound _format],
    parse: [Function: parse],
    sep: '/',
    delimiter: ':',
    win32: [Circular],
    posix: [Circular],
    _makeLong: [Function: toNamespacedPath]
  },
  _makeLong: [Function: toNamespacedPath]
}

```





### For Paper Note

```js
/* Path Moudule
  - Provides a way of working with directories and file paths.
*/  
basename(): Returns the last part of a path                              
delimiter:  Returns the delimiter specified for the platform             
dirname() : Returns the directories of a path                            
extname() : Returns the file extension of a path                         |
format()  : Formats a path object into a path string                     |
isAbsolute(): Returns true if a path is an absolute path, otherwise false  
join() : Joins the specified paths into one                           
normalize() :  Normalizes the specified path                                
parse()  :  Formats a path string into a path object                    
posix : Returns an object containing POSIX specific properties and methods 
relative():  Returns the relative path from one specified path to another specified path 
resolve() :  Resolves the specified paths into an absolute path      
sep : Returns the segment separator specified for the platform     
win32:  Returns an object containing Windows specific properties and methods 

//Console path moduel 
const path = require('path'); 
console.log(path)

/* basename(path, extension:optional)
   returns the filename part of a file path.*/
const path = require('path');  
const filename = path.basename('D:/Desktop/note/Nodejs/codes/011-path.js');
console.log(filename); // 011-path.js


/*delimiter
  - return the delimiter used on the server( ;(semicolon) for Windows), : (colon) for POSIX) */  
const path = require('path');  
const filename = path.delimiter;
console.log(filename);

/* path.dirname() 
  - returns the directories of a file path. */
const path = require('path');
const filename = path.dirname('D:/Desktop/note/Nodejs/codes/011-path.js');
console.log(filename); // D:/Desktop/note/Nodejs/codes

/* path.extname()
   - returns the extension of a file path. */
const path = require('path');
const filename = path.extname('D:/Desktop/note/Nodejs/codes/011-path.js');
console.log(filename);  // .js

/* path.format()
   - formats a path object into a path string. */
const path = require('path');
const file_obj = { dir: 'D:\\Desktop\\note\\odejs\\codes', base: '011-path.js' }
const fp = path.format(file_obj);
console.log(fp); // D:\Desktop\note\odejs\codes\011-path.js

/* path.isAbsolute()
  - returns true if the specified path is an absolute path, otherwise false */  
const path = require('path');
console.log(path.isAbsolute('D:/Desktop/note/Nodejs/codes/011-path.js')); // true
console.log(path.isAbsolute('codes/011-path.js')); // false
```

