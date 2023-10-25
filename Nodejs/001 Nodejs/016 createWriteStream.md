# Writeable Stream



- `The `

-  `() method allows to quickly make a writable stream for the purpose of writing data to a file. `

- `This method may be a smarter option compared to methods like fs.writeFile when it comes to very large amounts of data`

- `fs.createWriteStream() method take two parmeter`

  - `path: This parameter holds the path of the file where to read the file. It can be String, Buffer or URL.`
  - `options: It is an optional parameter that holds string or object`

-   `To write data to a writable stream you need to call "write()" on the stream `

- `Return Value: This method returns the fs.ReadStream object.`

  
  
  ```js
  const fs = require('fs');
  const file = fs.createWriteStream('file.txt');
  
  for (let i = 0; i < 10000; i++) {
      file.write('Hello world ' + i);
  }
  file.end();
  ```
  
  #### createWriteStream with createReadStream
  
  ```js
  var fs = require('fs');  // import moudle
  
  var readableStream = fs.createReadStream('home.html'); // read file data 
  
  var writableStream = fs.createWriteStream('writed_data.html'); // create write stream
  
  readableStream.on('data', function(chunk) {
      //To write data to a writable stream you need to call write() 
      //write() returns a boolean value indicating if the operation was successful
      writableStream.write(chunk); 
      writableStream.end() // write stream end
  });
  ```



https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/





### For Paper Note

```js
/* Writeable Stream
  - createWriteStream() method allows to quickly make a writable stream for the purpose of writing data to a file.
  - This method may be a smarter option compared to methods like fs.writeFile when it comes to very large amounts 	  of data
  - fs.createWriteStream() method take two parmeter
  - path: This parameter holds the path of the file where to read the file. It can be String, Buffer or URL.
  - options: It is an optional parameter that holds string or object
  - To write data to a writable stream you need to call write() on the stream 
  -`Return Value: This method returns the fs.ReadStream object.
*/  
const fs = require('fs');
const file = fs.createWriteStream('file.txt');
for (let i = 0; i < 10000; i++) {
    file.write('Hello world ' + i);
}
file.end();


//createWriteStream with createReadStream
var fs = require('fs');  // import moudle
var readableStream = fs.createReadStream('home.html'); // read file data 
var writableStream = fs.createWriteStream('writed_data.html'); // create write stream

readableStream.on('data', function(chunk) {
    //To write data to a writable stream you need to call write() 
    //write() returns a boolean value indicating if the operation was successful
    writableStream.write(chunk); 
    writableStream.end() // write stream end
});

```

