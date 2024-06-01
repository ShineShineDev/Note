/**
* require http module
*/
const http = require('http');
const filePath = require('path');


/**
* require route moudle
*/
const pipeline = require('./libs/pipeline');


/**
* Server listen port
*/
const PORT = process.env.PORT || 3000;

/**
* create web server
*/
http.createServer((req,res)=>{
  pipeline(req,res);
}).listen(PORT,(err)=>{ // port listen
  if(err) return console.log(err.message);
  console.log(`Server running on port ${PORT}`);
})
