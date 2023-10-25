const fs = require('fs');

setTimeout(function(){
const readStream = fs.createReadStream('big.txt','utf-8');
const writeStream = fs.createWriteStream('home3.html','utf-8');

readStream.on('data',function(chunk){
   writeStream.write(chunk)
})

},9000)



console.log('end');