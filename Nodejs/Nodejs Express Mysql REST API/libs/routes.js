
/**
  require url moduel
*/
const url = require('url');


/**
  require parseUrl moduel
  parseUrl moduel return url path array
*/
const parseUrl = require('./parseUrl');


/**
  require define route
*/
const definedRoutes = require('./../app/routes/posts');


/**
  exports routes
*/
module.exports = (req,res) => {

  // parse url
  const urlPath = parseUrl(req);

  // first sector of path split by slash(/)
  const urlController = urlPath[0];

  // url path length
  const urlPathLength = urlPath.length;

  // url method
  const urlMethod = req.method;

  // url param
  const urlParam = urlPath[1];



  // loop defined routes
  for(const route of definedRoutes.routes){

    // split defined route path  by slash(/)
    const  definedRoutePath  = route.path.split('/');

    // defined method
    const definedRouteController = definedRoutePath[1];

    // defined method
    const definedRouteMethod = route.method;

    // defined path length
    const definedRoutePathLength = definedRoutePath.length - 1;

    // defined handler or controller
    const definedRouteHandler = route.handler;

    // check defined path with url first secotr path
    if (definedRouteController == urlController &&
       definedRouteMethod == urlMethod &&
       definedRoutePathLength == urlPathLength){
      res.end(definedRouteHandler);
      break;
    }
  }

  res.writeHead(404,{
    'Content-Type' : 'text/json'
  })
  res.end(JSON.stringify({
    'status' : 404,
    'message' : 'Route not found'
  }));
}



// server ->(req,res) pipeline ->(req,res) route <- sparseUrl(req) ->
