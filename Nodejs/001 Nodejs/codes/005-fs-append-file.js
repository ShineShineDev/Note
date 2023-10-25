const fs = require('fs');

fs.appendFile('about.html',"<h1 style='text-aling:center'>About Page</h1>",function(err){
     if (err) throw err;
  console.log('Created File and added content!');
});