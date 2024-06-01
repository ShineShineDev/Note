# Express application generator

> express-generator too  to quickly create an application skeleton.

### Install 

```js
 $ npm install -g express-generator // install
 $ express -h // Display the command options
```



### Creates a new Express project 

```js
$ express  myapp
// Creates new Express app with view engine
$ express --view=pug myapp

```



 ### Install dependencies

```js
 $ cd myapp
 $ npm install
```



### Run and Access the app

```js
npm start 
http://localhost:3000/ 
```



### The generated app has the following directory structure:

```js
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.pug
    ├── index.pug
    └── layout.pug

7 directories, 9 files
```

