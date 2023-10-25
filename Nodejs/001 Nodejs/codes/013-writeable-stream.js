var fs = require('fs');  // import moudle

var readableStream = fs.createReadStream('home.html'); // read file data 

var writableStream = fs.createWriteStream('writed_data.html'); // create write stream

readableStream.setEncoding('utf8');

readableStream.on('data', function(chunk) {
    //To write data to a writable stream you need to call write() on the stream instance
    writableStream.write(chunk); 
    //write(). This function returns a boolean value indicating if the operation was successful
    writableStream.end()
});