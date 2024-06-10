const http = require('http');

// create server with createServer methods
http.createServer(function(req,res){
   res.writeHead(200,{
       'Content-Type' : 'text/html'
    });
   console.log('Response Success');
   res.write('<h1>server running on port 9000</h1>');
   res.end();
})
.listen(9000,function(){
	let time = new Date().getHours();
if (time < 11 && time > 5) {
    console.log('Good Morning');
} else if (time > 11 && time < 18) {
    console.log('Good afternoon');
} else {
    console.log('Good Night');
}
  console.log('server running on port 9000...');
})

