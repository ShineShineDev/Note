#  # URL MOUDLE                                                                                                             

> Nodejs  built-in URL Module is provided to wrok operations with address URLs like split a web address
>
> URL string may carry information such as https, the hostname, query string values, and more.



crd : https://mirrors.huaweicloud.com/nodejs/v6.8.0/docs/api/url.html

```txt
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
(all spaces in the "" line should be ignored -- they are purely for formatting)
```



 #### url.parse()

> Parse an address with the `url.parse()` method, and it will return a URL object with each part of the address as properties:

- `import url moudle `

- `split address with url.parser( ) method`

  ```js
  const url = require('url');
  let url_adr = 'http://localhost:8080/';
  let query = url.parse(url_adr,true);
  
  console.log(query); 
  // Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'localhost:8080',
    port: '8080',
    hostname: 'localhost',
    hash: null,
    search: '?user=10&info=shie',
    query: [Object: null prototype] { user: '10', info: 'shie' },
    pathname: '/index.html',
    path: '/index.html?user=10&info=shie',
    href: 'http://localhost:8080/index.html?user=10&info=shie'
  }
  
  console.log(query.host); // localhost:8080
  console.log(query.search); // ?user=10&info=shie
  console.log(query.query) //  [Object: null prototype] { user: '10', info: 'shie' }
  
  
  ```



- `urlObject.href : the full URL string that was parsed with both the protocol and host components converted to lower-case.`

-  `urlObject.protocol : identifies the URL's lower-cased protocol scheme.`

- `urlObject.slashes :  is a 1boolean1 with a value of 1true if two ASCII forward-slash characters (/) are required following the colon in the protocol. `

- `urlObject.host : is the full lower-cased host portion of the URL, including the `port` if specified`

-  `urlObject.hostname :  property is the lower-cased host name portion of the host component without the port included.`

-  `urlObject.port`

-  `urlObject.pathname`

-  `urlObject.search`

-  `urlObject.path`

-  `urlObject.query`

-  `urlObject.hash`



#### url*.*format() 

>  The *url*.*format*() method returns a formatted URL string derived from urlObjec

```js
const url = require('url');
let url_adr = 'http://localhost:8080/index.html?user=10&info=shie';
let query = url.parse(url_adr,true)

console.log(url.format(url_adr))
// http://localhost:8080/index.html?user=10&info=shie

```







#### Console url module

```js
const url = require('url');
console.log(url)
{
  Url: [Function: Url],
  parse: [Function: urlParse],
  resolve: [Function: urlResolve],
  resolveObject: [Function: urlResolveObject],
  format: [Function: urlFormat],
  URL: [Function: URL],
  URLSearchParams: [Function: URLSearchParams],
  domainToASCII: [Function: domainToASCII],
  domainToUnicode: [Function: domainToUnicode],
  pathToFileURL: [Function: pathToFileURL],
  fileURLToPath: [Function: fileURLToPath]
}


let url_adr = 'http://localhost:8080/';
let query = url.parse(url_adr,true);
console.log(query)
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: null,
  query: [Object: null prototype] {},
  pathname: '/',
  path: '/',
  href: 'http://localhost:8080/'
}


```





### For Paper Note

```js
/* URL MOUDLE
 -  Nodejs  built-in URL Module is provided to wrok operations with address URLs like split a web address
 -  URL string may carry information such as https, the hostname, query string values, and more.
*/ 
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

//Console url module
const url = require('url');
console.log(url)



/* url.parse()
 - Parse an address with the `url.parse()` method, and it will return a URL object with each part of the address      as properties
*/ 
const url = require('url'); //import url moudle
let url_adr = 'http://localhost:8080/';
let query = url.parse(url_adr,true); //split address with url.parser( ) method
console.log(query); 
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8080',
  port: '8080',
  hostname: 'localhost',
  hash: null,
  search: '?user=10&info=shie',
  query: [Object: null prototype] { user: '10', info: 'shie' },
  pathname: '/index.html',
  path: '/index.html?user=10&info=shie',
  href: 'http://localhost:8080/index.html?user=10&info=shie'
}
/*url.format() 
  - The url.format() method returns a formatted URL string derived from urlObject
*/
const url = require('url');
let url_adr = 'http://localhost:8080/index.html?user=10&info=shie';
let query = url.parse(url_adr,true)
console.log(url.format(url_adr))
http://localhost:8080/index.html?user=10&info=shie

```

