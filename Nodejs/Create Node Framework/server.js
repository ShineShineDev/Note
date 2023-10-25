
const http = require('http');

const bootstrap = require('./lib/bootstrap');

http.createServer(function (req, res) {
    bootstrap.init(req,res);
}).listen(8080,function(){
 console.log('Server runging on port 8080')
});
