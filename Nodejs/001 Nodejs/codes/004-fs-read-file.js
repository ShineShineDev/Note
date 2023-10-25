const http = require('http'); // to create server import http module
const fs = require('fs'); // import fs module

http.createServer(function(req,res){ // create server, req : request , res ; respone
    fs.readFile('home.html',function(err,data){
        console.log('file readed  data : ' + data);
        res.writeHead(200,{  // set http header
            'Content-type' : 'text/html'
        })
        res.write(data) // write data to respone
        return res.end() // colse respone
    })
}).listen(8080,function(){ // 8080 : port, cb
    console.log('Server running on port 8080');
})