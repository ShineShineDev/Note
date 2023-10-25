const url = require('url');
// const routes = require('routes');

exports.init = function (req,res) {

   const urlparse = url.parse(req.url, true);

   const param= urlparse.pathname.trim().split("/");

   param[1] === 'post'
   res.end(param[1]);
};
