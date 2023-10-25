const fs = require('fs');

fs.writeFile("login.html","<h1 style='text-aling:center'>Login Page</h1>",function(err){
    if (err) throw err;
  console.log('Create login.html file and added content !');
})


