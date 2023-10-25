const http = require('http');
const fs = require('fs');


http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type' : 'text/html'});
    if(req.url === '/' || req.url === '/home' || req.url === '/home' || req.url === '/index'){
        const readStream = fs.createReadStream('home.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/about'){
        const readStream = fs.createReadStream('about.html','utf-8')
        readStream.pipe(res)
    }else if(req.url === '/contact'){
        const readStream = fs.createReadStream('contact.html','utf-8')
        readStream.pipe(res)
    }else{
        const readStream = fs.createReadStream('404.html','utf-8')
        readStream.pipe(res)
    }
}).listen(8080,()=>{
    console.log('Server running on port 8080');
})
