# Serving Json

```js
const http = require('http'); // import fs module
const fs = require('fs'); // import fs module

http.createServer((req,res)=>{  // create server
   const jsonData = fs.createReadStream('api.json','utf-8'); // create read stream
    res.writeHead(200, {'Content-Type': 'text/json'}); // wirte respone header
    jsonData.pipe(res); // respone with  readable stream pipe
}).listen(8080,()=> console.log('Server running on port 8080')) // listen port
```



