const fs = require('fs');
if(fs.existsSync('test.html')){ // check file with sync
    fs.unlink('test.html',function(err){
        if (err) throw err;
        console.log('test.html File deleted /> ');
    });
}else{
    console.log('test.html file not found ,Place create test.html /> ')
}