### Fs.createReadStream()

  - ` To create a stream of data for reading (reading a large file wiht chunks)`

  - `fs.createReadStream() method take two parmeter`

    - `path: This parameter holds the path of the file where to read the file. It can be string, buffer or UR`
    - `options:It is an optional parameter that holds string or object.`

 - `This method returns the ReadStream object.`

     

    ```js
    // require fs module
    const fs = require('fs');
    
    // to read file user crateReadStream method
    let data = fs.createReadStream('home.html') 
    
    
    // disply the file data on console 
    // All streams are instances of  EventEmitter so we can use on method
    // data.on take two parameter ,fist one is 'data' and cb()
    data.on('data',function(chunk){
      console.log(chunk); 
      console.log(chunk.toString()); 
    });
    
    <Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 3e 0d
    0a 3c 68 65 61 64 3e 0d 0a 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 76 69 65 77 70 ..
    . 379 more bytes>
    
    <!DOCTYPE html>
    <html>...
    </html>
    ```

    

    ##### More example

    ```js
    const fs = require('fs');
    const readed_data =  fs.createReadStream('homt.html',{
            flag: 'a+', 
            encoding: 'UTF-8', 
            start: 5, 
            end: 64, 
            highWaterMark: 16 
        })
        readed_data.on('data',function(chunk){
            console.log(chunk);
        })
        // TYPE html>
        <htm
        l>
    
        <head>
        <met
        a name="viewport
        " content="w
    
    ​    
    // if not added encoding 
    const readed_data =  fs.createReadStream('homt.html',{
        flag: 'a+', 
        start: 5, 
        end: 64, 
        highWaterMark: 16 
    })
    readed_data.on('data',function(chunk){
        console.log(chunk);
    })
    
    // <Buffer 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d>
    // <Buffer 6c 3e 0d 0a 3c 68 65 61 64 3e 0d 0a 3c 6d 65 74>
    // <Buffer 61 20 6e 61 6d 65 3d 22 76 69 65 77 70 6f 72 74>
    // <Buffer 22 20 63 6f 6e 74 65 6e 74 3d 22 77>
    ```






​    



https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/





### For paper note

```js
/* Buffer  
  - A buffer is a temporary  raw binary data.
  - The Buffer class in Node. js is designed to handle raw binary data
  - More efficient for lager amout of data
  - No need to wait for the entire resource to load
*/  
/* Fs.createReadStream()
  - To create a stream of data for reading (reading a large file wiht chunks)
  - fs.createReadStream() method take two parmeter
    - path: This parameter holds the path of the file where to read the file. It can be string, buffer or UR
    - options:It is an optional parameter that holds string or object.
  - This method returns the ReadStream object.
*/ 
const fs = require('fs'); // require fs module
let data = fs.createReadStream('home.html')  // to read file user crateReadStream method

// All streams are instances of  EventEmitter so we can use on() method
// data.on() take two parameter ,fist one is 'data' and cb()
data.on('data',function(chunk){
  console.log(chunk);  
  console.log(chunk.toString()); // disply the file data on console 
});

//output
<Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0d 0a 3c 68 74 6d 6c 3e 0d
0a 3c 68 65 61 64 3e 0d 0a 3c 6d 65 74 61 20 6e 61 6d 65 3d 22 76 69 65 77 70 ..
. 379 more bytes>
<!DOCTYPE html>
<html>...
</html>


const fs = require('fs');
const readed_data =  fs.createReadStream('homt.html',{
	flag: 'a+', 
	encoding: 'UTF-8', 
	start: 5, 
	end: 64, 
	highWaterMark: 16 
})
readed_data.on('data',function(chunk){
    console.log(chunk);
})
//Output
TYPE html>
<html
>
<head>
<title>
Page Title</titl
e>
</head>
<
    
    
// if not added encoding 
const readed_data =  fs.createReadStream('homt.html',{
    flag: 'a+', 
    start: 5, 
    end: 64, 
    highWaterMark: 16 
})
readed_data.on('data',function(chunk){
    console.log(chunk);
})
//output
<Buffer 54 59 50 45 20 68 74 6d 6c 3e 0a 3c 68 74 6d 6c>
<Buffer 3e 0a 3c 68 65 61 64 3e 0a 3c 74 69 74 6c 65 3e>
<Buffer 50 61 67 65 20 54 69 74 6c 65 3c 2f 74 69 74 6c>
<Buffer 65 3e 0a 3c 2f 68 65 61 64 3e 0a 3c>
```

