# Piping



- `Using stream pipes we can directly pipe readable streams to a writable stream without storing the buffer temporarily - so we can save memory space.`

- `The 'pipe' event is emitted when the readableStream.pipe() method is called on a readable stream`

- `With stream piping, the code size is reduced to only one line of code.`

- `fast than manually stream(readable stream to writeable stream)`

  
#### readable.pipe()

- `The readable.pipe() method in a Readable Stream is used to attach a Writable stream`

- `this method take two parameters`

  - `destination: destination of writing data.`
  - `options: pipe options`

  ```js
  var fs = require("fs"); 
  
  // Create a readable stream 
  var readable = fs.createReadStream('home.html'); 
  
  // Create a writable stream 
  var writable = fs.createWriteStream('output.html'); 
  
  // Calling pipe method 
  readable.pipe(writable); 
  
  
  ```

  

#### piping with http respone 

- `import fs and http module`

- `create server`

- `create readstream `

- ` use readableStream.pipe() to respone`

  ```js
  const http = require('http');
  const fs = require('fs');
  
  http.createServer((req,res)=>{
      const readStream = fs.createReadStrem('home.html','utf-8');
      readStream.pipe(res)
  
  }).listen(8080,function(){
      console.log('Server running on port 8080...')
  })
  ```
  
  
  
  
  
  ### For Paper Note
  
  ```js
  /* Piping
  	- Using stream pipes we can directly pipe *readable streams* to a *writable stream* without storing the 	  buffer temporarily - so we can save memory space.
  	- The pipe event is emitted when the readableStream.pipe() method is called on a readable stream
  	- With stream piping, the code size is reduced to only one line of code.
  	- fast than manually stream(readable stream to writeable stream)
  */	
  /* readable.pipe()
  	- The readable.pipe() method in a Readable Stream is used to attach a Writable stream
  	- this method take two parameters
    		- destination: destination of writing data
    		- options: pipe options
  */  
  var fs = require("fs"); 
  var readable = fs.createReadStream('home.html');  // Create a readable stream 
  var writable = fs.createWriteStream('output.html');  // Create a writable stream 
  readable.pipe(writable);  // Calling pipe method 
  
  
  //http respone with stream Piping
  const http = require('http');
  const fs = require('fs');
  
  http.createServer((req,res)=>{
      const readStream = fs.createReadStream('home.html','utf-8');
      readStream.pipe(res)
  
  }).listen(8080,function(){
      console.log('Server running on port 8080...')
  })
  ```
  
  
  
  