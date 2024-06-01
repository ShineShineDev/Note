# Environment variables



> To manage the configuration of our applications separately from our codebase.
>
> Separating configurations makes it easier for our application to be deployed in different environments.
>
> An environment variable is a dynamic-named value.
>
> Wherever your app needs configuration such as HTTP port, database connection string, you use environment variables
>
> `to reduces hard code`





### process.env

> That can be use read or set environment variables from Node.js



- `"process" does not require a “require”, it’s automatically available.`

  ```js
  const port  = process.env.PORT || 8080
  const hostname = process.env.HOST;
  const database = process.env.DATABASE;
  ```
  
  



### Dotenv

-  `"Dotenv" is a 3rd Party Modules that use to access environment variables in our node application`
-  `By convention, the variables are written in UPPERCASE letters.`
-  `The ".env" file should never be committed to the source code repository. We must place the file into the ".gitignore"  file. (When using git.)`



##### Install 

```js
npm install dotenv --save
```



##### Loading environment variables 

```js
require('dotenv').config();
```



##### .env file

```js
//.env
HOST = localhost
DATABASE = dbname
PORT = 8080
TOEKN = ajfLK8932lkad9wlks0k
```



##### Access environment variables 

```js
const http = require('http');
http.createServer((req,res)=>{
    res.end(process.env.TOKEN)
}).listen(8080,()=console.log('Server running on port' + process.env.PORT ))
```





### For Paper Note

```js
/* Environment variables
  - To manage the configuration of our applications separately from our codebase.
  - Separating configurations makes it easier for our application to be deployed in different environments.
  - An environment variable is a dynamic-named value.
  - Wherever your app needs configuration such as HTTP port, database connection string, you use environment           variables
  - to reduces hard code
*/  
/* process.env
 - That can be use read or set environment variables from Node.js
 - "process" does not require a “require”, it’s automatically available.
*/ 
const port  = process.env.PORT || 8080
const hostname = process.env.HOST;
const database = process.env.DATABASE;
  
/* Dotenv(.env)
  -  "Dotenv" is a 3rd Party Modules that use to access environment variables in our node application
  -  By convention, the variables are written in UPPERCASE letters.
  -  The ".env" file should never be committed to the source code repository. We must place the file into the         .gitignore"  file. (When using git.)*/   
npm install dotenv --save //Install
require('dotenv').config(); // Loading environment variables 
//Create .env file and then add environment variables
HOST = localhost
DATABASE = dbname
PORT = 8080
TOEKN = ajfLK8932lkad9wlks0k
// Access environment variables 
const http = require('http');
http.createServer((req,res)=>{res.end(process.env.TOKEN)})
    .listen(8080,()=console.log('Server running on port' + process.env.PORT ))
```

