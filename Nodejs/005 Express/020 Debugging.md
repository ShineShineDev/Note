##                                                                                                                                                                                                                                                         Debugging 

> `Express use the` [debug](https://www.npmjs.com/package/debug)`module internally to log information about route matches, middleware functions that are in use, application mode, and the flow of the request-response cycle.`





### Debugging Express 

- `To see all the internal logs used in Express, set the ` **`DEBUG`** `environment variable to `**`express:*`** `when launching your app.`

- ` To see logs only from the application implementation set the value of` **`DEBUG`** to **`express:application`**, `and so on.`

  ```sh
  // all logs
  $ DEBUG=express:* node index.js 
  
  // t0 see logs only from the application implementation 
  $ DEBUG=express:application node index.js 
  
  // To see logs only from the router implementation 
  $ DEBUG=express:router node index.js 
  ```





### Debugging  generated the app

- `If you generated the app with` **`$ express myapp`**, `you can enable the debug statements with` **`DEBUG=myapp:*`**

- `You can specify more than one debug namespace by assigning a comma-separated list of names`

  ```sh 
  $ DEBUG=myapp:* node index.js
  $ DEBUG=http,mail,express:* node index.js // specify more than one debug 
  ```







### debug module

- ` For more information about debug see the` [debug](https://www.npmjs.com/package/debug).

  

#### Installation debug 

  ```shell
  $ npm install debug
  ```