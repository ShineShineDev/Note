const fs = require('fs');
fs.open('contact.html','w',function(err,file){
  if (err) throw err;
  console.log('opend file and writed content');
})