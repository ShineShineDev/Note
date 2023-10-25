/**
  * require url module
*/
const fs = require('url');


const getParam = function(req) {
  const urlparse = url.parse(req.url, true);
  return urlparse.pathname;
}

const getMethod = function(req) {
  const urlparse = url.parse(req.url, true);
  return urlparse.method;
}

//export modules
module.exports = {
    getParam,
    getMethod
}
