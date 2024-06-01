# Installing

> Use the `npm init` command to create a `package.json` file for your application

```js
$ npm init 
$ npm init -y // no question
```



> Use the `npm install express --save` command to install express 

```js
$ npm install express 

// add it to the dependencies list
$ npm install express --save

// To install Express temporarily and not add it to the dependencies list:
$ npm install express --no-save

$ npm view express //to view a package's published version
```



> By default with version npm 5.0+ npm install adds the module to the `dependencies` list in the `package.json` file; with earlier versions of npm, you must specify the `--save` option explicitly. Then, afterwards, running `npm install` in the app directory will automatically install modules in the dependencies list.



### Express application generators

```js
// install
$ npm install -g express-generator 

// Display the command options
$ express -h 

// Creates new Express app
$ express  myapp
// Creates new Express app with view engine
$ express --view=pug myapp

// chnage directory
$ cd myapp
 
//Install dependencies
$ npm install

// Run 
npm start 

// Access the app
http://localhost:3000/ 
```

