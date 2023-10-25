const url = require('url');

module.exports = (req) => {
   const pathArray = url.parse(req.url,true).pathname.split('/');
   trimPath = [];
   for(path of pathArray){
     if(path != ''){
       trimPath.push(path);
     }
   }
   return trimPath;
}


/*
   url route = /users/3/posts/3

   user
   3
   posts
   3

   length = 4  ✔
   method = get; ✔
   param =

   defined route = /users/:id/posts/:id

   user
   :id
   posts
  :id

  length = 4;
  method = get;
  param =
*/

/**
┌─────────────────────────────────────────────────────────────────────────────┐
│                                    href                                     │
├──────────┬┬───────────┬─────────────────┬───────────────────────────┬───────┤
│ protocol ││   auth    │      host       │           path            │ hash  │
│          ││           ├──────────┬──────┼──────────┬────────────────┤       │
│          ││           │ hostname │ port │ pathname │     search     │       │
│          ││           │          │      │          ├─┬──────────────┤       │
│          ││           │          │      │          │ │    query     │       │
"  http:   // user:pass @ host.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          ││           │          │      │          │ │              │       │
└──────────┴┴───────────┴──────────┴──────┴──────────┴─┴──────────────┴───────┘
*/
