##                                                 Compression module(gzip)



- **`Gzip`** `compressing can greatly decrease the size of the response body and hence increase the speed of a web app.`

- `Use the` [compression](https://www.npmjs.com/package/compression) `middleware for` **`Gzip`** `compression in your Express app`

  

  ```javascript
  const compression = require('compression')
  const express = require('express')
  const app = express()
  app.use(compression())
  ```



