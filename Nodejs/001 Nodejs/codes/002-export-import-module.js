var http = require('http');
var myMoudle = require('./myMoudle');
console.log("calculate area : " + myMoudle.calSquare(2,3));
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("calculate area : " + myMoudle.calSquare(2,3));
  res.end();
}).listen(8080);