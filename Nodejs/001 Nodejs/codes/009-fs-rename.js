const fs = require('fs');
if(fs.existsSync('text.txt')){
    fs.rename('text.txt','text2.txt',function(err){
     if(err) throw err;
     console.log('renamed file/> ');
})
}else{
    console.log('text.txt file not found ,Place create text.txt /> ')
}
