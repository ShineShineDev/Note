const url = require('url');
let url_adr = 'http://localhost:8080/index.html?user=10&info=shie';
let query = url.parse(url_adr,true)

console.log(url.format(url_adr))
