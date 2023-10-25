const fs = require('fs'); // import module

const data = fs.createReadStream('home.html');

data.on('data',function(chunk){
 console.log(chunk);

})
