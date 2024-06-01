const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) { 
	// write header 
	res.writeHead(200, {'Content-Type': 'text/html'}); 
	const url = req.url; 
	if(url ==='/' || url === '/home') { 
        const readStream = fs.createReadStream('home.html','utf-8');
        readStream.pipe(res)
	} 
	else if(url ==='/about') { 
        const readStream = fs.createReadStream('about.html','utf-8');
        readStream.pipe(res)
	}else { 
         res.writeHead(404, {'Content-Type': 'text/html'}); 
		res.write("<h1 style='text-aling:center'>Page not found</h1>"); 
		res.end(); 
	} 
}).listen(8080, function() { 
    console.log("Server running on port 8080"); 
}); 