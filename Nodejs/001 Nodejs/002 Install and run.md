### Install 

https://nodejs.org/en/download/ 



### Check Node version

`node -v`



### Check NPM version 

- `npm is a package manager(like Nuget package manager in . NET -Microsoft ) for the JavaScript programming language`

- `npm -v`

     ###### Main Functions of NPM 





### Node Version Manager (NVM)

- `**Node Version Manager (NVM)** is a tool used to manage multiple active Node.js versions.`

- `Using **NVM**, you can easily switch between multiple versions of Node.js right from the command line and set up aliases to switch between different downloaded versions with ease.`

  ```js
  //Setting Up NVM
  > curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
  > source ~/.bashrc
  
  > nvm --version
  > nvm install node //latest
  > nvm install v14 //SPECIFIC_NODE_VERSION
  > nvm use <SPECIFIC_NODE_VERSION> // To use any specific version of Node.js for your code\
  > nvm ls //To list installed Node.js versions locally on your machin
  > nvm ls-remote //List all available LTS versions of Node.js.
  > nvm current //To check the current version
  >nvm alias default <SPECIFIC_NODE_VERSION> // To set a specific node version as default
  > nvm uninstall <SPECIFIC_NODE_VERSION> //To uninstall specific node version
  ```

  



### Create Package.json

- `A package json is a JSON file that exists at the root of a Javascript/Node project. It holds metadata relevant to the project and it is used for managing the project's dependencies, scripts, version and a whole lot more`

- `npm init`
  - `{
      "name": "test",
      "version": "1.0.0",
      "description": "test npm init commonad",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "test"
      ],
      "author": "shine shine",
      "license": "ISC"
    }`



### Install dependencies

- ` Dependencies Packages that are needed for your application to work in production.`

- `npm install express`

  - ```{
      "name": "test",
      "version": "1.0.0",
      "description": "test npm init commonad",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": ["test"],
      "author": "shine shine",
      "license": "ISC",
      "dependencies":{
        "express" : "^3.3.2"
      }
    }
    ```



### Install dev dependencies

- `Development dependencies  are intended as development-only packages, that are unneeded in production `

- `npm install --D nodemon`

- `npm install --save-dev nodemon`

  ```
   "name": "test",
    "version": "1.0.0",
    "description": "test npm init commonad",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": ["test"],
    "author": "shine shine",
    "license": "ISC",
    "dependencies":{
      "uuid" : "^3.3.2"
    },
    "devDependencies":{
      "nodemon" : "^1.18.9"
    }
  }
  ```

  

### Run Nodejs with  console(REPL)

> node shell (REPL) can execute any Node.js/JavaScript code in command.(similar Google Chrome browser console)
>
> REPL stands for Read-Eval-Print-Loop



```js
C:\>node
> 2 + 3
>5
> "Hellow " + "World"
> Hellow World
```



 ###### [accept arguments from the command line](https://flaviocopes.com/node-cli-args/)

```js

```





### Run Nodejs  with File

```
> touch helloworld.js
> notepad helloworld.js

let num1 = 3;
let num2 = 2323;
function cal(){
     console.log(num1* num2);
}
cal();

> node helloworld.js
> 6969




I’m a Full Stack Web Developer currently  living in Myanmar. 
I spend my days with my hands in many different areas of web development from back end programming (PHP, Django/Python, Ruby on Rails) to front end engineering (HTML, CS

```





### for Paper Note

```js
//Download node
https://nodejs.org/en/download/ 

//Check Node version
>node -v 

// npm is a package manager(like Nuget package manager in . NET -Microsoft ) for the JavaScript language
npm -v //Check NPM version 

/* Package.json
  - A package json is a JSON file that exists at the root of a Javascript/Node project. It holds metadata relevant     to the project and it is used for managing the project's dependencies, scripts, version and a whole lot more`
*/
> npm init
{
    "name": "test",
    "version": "1.0.0",
    "description": "test npm init commonad",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "test"
    ],
    "author": "shine shine",
    "license": "ISC"
}

/*Install dependencies
	- Dependencies Packages that are needed for your application to work in production.
*/	
> npm install express
{
    "name": "test",
    "version": "1.0.0",
    "description": "test npm init commonad",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "dependencies":{
      "express" : "^3.3.2"
    }
}

/*  Install dev dependencies
  - `Development dependencies  are intended as development-only packages, that are unneeded in production `
*/  
 > npm install --D nodemon
 > npm install --save-dev nodemon
 {
     "name": "test",
	 "version": "1.0.0",
	 "description": "test npm init commonad",
	 "main": "index.js",
 	 "scripts": {
    	"test": "echo \"Error: no test specified\" && exit 1"
	  },
     "dependencies":{
	    "uuid" : "^3.3.2"
	  },
	"devDependencies":{
    	"nodemon" : "^1.18.9"
	  }
 }

/* Run Nodejs with  console(REPL)
  -  node shell (REPL) can execute any Node.js/JavaScript code in command.(similar Google Chrome browser console)
  - REPL stands for Read-Eval-Print-Loop
*/
C:\>node
> 2 + 3
>5
> "Hellow " + "World"
> Hellow World

// Run Nodejs  with File
> touch helloworld.js
//helloworld.js
let num1 = 3;
let num2 = 2323;
function cal(){
     console.log(num1* num2);
}
cal();

> node helloworld.js
> 6969
```

