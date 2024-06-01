## File Upload

> `To handle multipart/form data we can use  like`**`express-fileupload`**, **`multer`**, **`connect`**, `middleware etc.`



## express-fileupload middleware

> **`express-fileupload`** `is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files.`



#### Install

```cmd
$ npm i express-fileupload
```



#### Usage

> When you upload a file, the file will be accessible from `req.files`.
>
> `   Use the mv() method to place the file somewhere on your server`

```js
// load middleware
app.use(fileUpload()) 

app.post('/upload', function(req, res) {
    console.log(req.files.foo); // the uploaded file object
    const file = req.files.foo;
    uploadPath = __dirname + '/upload/' + file.name;
    // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath, function(err) {
        res.send('File uploaded!');
    });
});
```



#### limits file size

```js
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
```



####  req.files.filename  object 

- `req.files.foo.name`: "car.jpg"
- `req.files.foo.mv`: A function to move the file elsewhere on your server. Can take a callback or return a promise.
- `req.files.foo.mimetype`: The mimetype of your file
- `req.files.foo.data`: A buffer representation of your file, returns empty buffer in case useTempFiles option was set to true.
- `req.files.foo.tempFilePath`: A path to the temporary file in case useTempFiles option was set to true.
- `req.files.foo.truncated`: A boolean that represents if the file is over the size limit
- `req.files.foo.size`: Uploaded size in bytes
- `req.files.foo.md5`: MD5 checksum of the uploaded file



#### Upload Single File Example

> Don’t forget the `enctype="multipart/form-data"` in your form.

```js
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload()); // load middleware


app.get('/',(req,res)=>{
     res.sendFile(path.join(__dirname, '../codes/views', 'fileupload.html'));
})

app.post('/fileupload',(req,res)=>{
    console.log(req.files.foo); // the uploaded file object
    let file;
    let uploadPath;
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

  // The name of the input field (i.e. "foo") is used to retrieve the uploaded file
    file = req.files.foo;
    uploadPath = __dirname + '/upload/' + file.name;
    // Use the mv() method to place the file somewhere on your server
    file.mv(uploadPath, function(err) {
        if (err) return res.status(500).send(err);
        res.send('File uploaded!');
    });
});

app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Express server is running on port 8080');
})
```



#### Upload Multiple Files Example

```js
const express = require('express');
const path = require('path');
const fileUpload = require('express-fileupload');

const app = express();
app.use(fileUpload()); // load middleware

app.get('/',(req,res) => res.sendFile(path.join(__dirname, '../codes/views', 'multifileupload.html')));

app.post('/multi-fileupload', (req, res) => {
   if(!req.files) return res.send( 'No file uploaded');
    let uploadedPhotos = [];
    const uploadedfile = req.files;
    console.log(uploadedfile.foos);
});

app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Express server is running on port 8080');
})
```







## multer middleware

> Multer is a node.js middleware for handling `multipart/form-data`, which is primarily used for uploading files. It is written on top of [busboy](https://github.com/mscdex/busboy) for maximum efficiency.



#### Install modules 

```cmd
$ npm install multer
```



#### Require middleware

```js
const multer = require('multer');
```



#### Usage

> `In multer to upload single file we can use single function`
>
> `upload.single('name of html name attribute')`
>
> `When you upload a file, the file will be accessible from req.file`

```js
const fileUpload = multer({ dest: 'uploads/' }) this saves your file into a directory called "uploads"
// upload single file
app.post('/', upload.single('name of html name attribute'), (req, res) => {
  res.redirect('/');
});
```



#### multer single fileupload example

```js
const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();

 //this saves your file into a directory called upload
const fileUpload = multer({ dest: 'upload/' });

app.get('/',(req,res) => res.sendFile(path.join(__dirname, '../codes/views', 'fileupload.html')));

app.post('/fileupload', fileUpload.single('foo'), function (req, res, next) {      
    console.log(req.file); // the uploaded file object
    res.send(req.file.originalname + 'uploaded !');
})
app.listen(8080,(err)=>{
    if(err) return console.log(err.message);
    console.log('Express server is running on port 8080');
})
```





## Upload File without module

https://www.w3schools.com/nodejs/nodejs_uploadfiles.asp