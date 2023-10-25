```js
/* Node.js Upload Files
   - In Nodejs, to upload files we can use Formidable Module(w3schools recommended)
   - Formidable module is used for parsing form data, especially file uploads
   - The Formidable module can be downloaded and installed using NPM
   - Include the Formidable module to be able to parse the uploaded file once it reaches the server.
   - When the file is uploaded and parsed, it gets placed on a temporary folder on your computer
*/
/* Node.js Upload Files
   - In Nodejs, to upload files we can use Formidable Module(w3schools recommended)
   - The Formidable module can be downloaded and installed using NPM
*/
const http = require('http');
const fs = require('fs')
const path = require('path')
const formidable = require('formidable'); //include module

http.createServer(function (req, res) { //create server 
    if (req.url == '/fileupload') {
        
        const form = new formidable.IncomingForm(); //create formidable instance
        
        form.parse(req, function (err, fields, files) {

            const oldpath = files.filetoupload.filepath;
            console.log(oldpath)

            const newpath = path.join(__dirname, 'uploads')
                + '/' + files.filetoupload.originalFilename;
            console.log(newpath)
            
           //To move the file to the folder of your choice, use the File System module, and rename the file:
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File uploaded and moved!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Nodejs File Upload with formidable</h1>');
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetoupload"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080, err => err ? console.log(err) : console.log('Server running on port 8080'))
```

