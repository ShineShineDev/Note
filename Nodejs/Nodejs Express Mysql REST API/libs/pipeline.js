const url = require('url');
const routes = require('./routes');

module.exports = (req,res) => {
  routes(req,res);
}
