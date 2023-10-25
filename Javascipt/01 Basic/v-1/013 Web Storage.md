# Web Storage

- Web Storage is the storage mechanism that allows Web applications to store data in Web Browsers.

  ```
  Local Storage Session Storage Cookies IndexedDB Web SQL
  ```





### localStorage 

-  Key/value pairs (Browser only)

- 10MB

- No expiration 

- Accessible  from any window

- Same origin.

- Do not send to server, for client-side usage only

  ```js
  // check browser support for localStorage and sessionStorage:
  if(typeof(Storage) !== "undefined"){}else{}
  
  localStorage.setItem(“name”, “shine shine”) //set
  localStorage.name = "shine shine" // set with obj
  
  localStorage.getItem(“name”) //get
  localStorage.name // get with obj
  
  localStorage.removeItem(“name”) // delete 
  delete localStorage.name // del with obj
  
  localStorage.clear();  // delete all items.
  localStorage.key(index) //get the key on a given position.
  localStorage.length // get number of stored items.
  ```







### Session Storage

-  Key/value pairs (Browser only)

- 5MB

- On tab close

- Accessible from same tab

- same-origin 

- Do not send to server, for client-side usage only

  ```js
  // check browser support for localStorage and sessionStorage:
  if(typeof(Storage) !== "undefined"){}else{}
  
  sessionStorage.setItem(“name”, “shine shine”) //set
  sessionStorage.name = "shine shine" // set with obj
  
  sessionStorage.getItem(“name”) // get
  sessionStorage.name // get with obj
  
  sessionStorage.removeItem(“name”) // delet
  delete sessionStorage.name /// del with obj
  
  sessionStorage.clear() // delete all
  sessionStorage.key(index) //get the key on a given position.
  sessionStorage.length // get number of stored items.
  ```







### Cookies 

-  Key/value pairs in small text file  (Browser and serve)

- 4KB 

- Manually set (If no expiration time,the cookie is deleted when the browser is closed)

- Accessible from Any window

- Same-origin 

- Send the to server

- Cookies are primarily used to track website activity of a user and server-side reading.

- wo types of cookies: persistent cookies and session cookies.

  ```js
  //set cookie name,value,expire,path(By default, the cookie belongs to the current page.)
  document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
  
  
  //Read
  // document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value;
  let cookies =  document.cookie;
  
  
  // update
  // The old cookie is overwritten.
  document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
  
  
  // Delete
  // You don't have to specify a cookie value when you delete a cookie.Just set the expires parameter to a passed date:
  document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  
  ```









### IndexedDB

- **IndexedDB lets you create web applications with rich query abilities regardless of network availability**, your applications can work both online and offline

- Key-value store and the value can be an object, string, array...

-  250 MB

- Asynchronous, unlike local storage or session storage.

- Event-driven by various events like **onsuccess,onerror,oncomplete,** etc.

- Same-origin policy 

- Supports [transactions](http://www.w3.org/TR/IndexedDB/#transaction-concept).

- Do not have expiration time

- Basic pattern (Open a database,Create an object store in the database,operation)

  ```js
  //eheck 
  if (!window.indexedDB) {
        console.log("Your browser doesn't support a stable version of IndexedDB. Such and         such feature will not be available.");
  }
  
  //indexedDB.open("dbname",version); 
  let dbRequest = indexedDB.open("MyTestDatabase",1); 
  
  //error events
  dbRequest.onerror = function(event) {
    console.log("Fail"); 
  };
  
  //success event
  dbRequest.onsuccess = (event) => console.log(`DB name : ${event.target.result.name} DB 
  version : ${event.target.result.version}`)
                                             
  ```

  






### WebSQL

- client-side/in-browser database 

- Only 5 MB in Chrome and Safari above which needs user permission

- should **not** be used,

- Can be accessed using SQL statements.

- Available in Chrome and WebKit-based browsers (Safari, etc.) but not Firefox or IE.

- WebSQL is deprecated in 2010 and is no longer a W3 specification

- Same-origin policy

- Not have a specific expiration time

- WebSql has three core methods- openDatabase(to create database if not exists), transaction (commit or rollback transaction),executeSql(Execute a query)










### Cache Memory ( CPU memory)

- *Cache Memory is not in the list of web storage* 

- Provides high-speed data access to a processor and stores frequently used computer programs.

  
  
  

  
  
  



## Summery code

```js
/*localStorage
  - Key/value pairs (Browser only) 
  - 10MB 
  - No expiration 
  - Accessible  from any window 
  - Same origin 
  - Do not send to server, for client-side usage only
*/
localStorage.setItem(“name”, “shine shine”) //set
localStorage.getItem(“name”) //get
localStorage.removeItem(“name”) // delete 
localStorage.clear();  // delete all items.




/* sessionStorage
   - Key/value pairs (Browser only) 
   - 5MB 
   - On tab close 
   - Accessible from same tab 
   - same-origin 
   - Do not send to server, for client-side usage only
*/
sessionStorage.setItem(“name”, “shine shine”) //set
sessionStorage.getItem(“name”) // get
sessionStorage.removeItem(“name”) // delet
sessionStorage.clear() // delete all




/* cookie
Key/value pairs in small text file  (Browser and serve)
4KB 
Manually set (If no expiration time,the cookie is deleted when the browser is closed)
Accessible from Any window
Same-origin 
Send the to server Cookies are primarily used to track website activity of a user and server-side reading.
*/
document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; //set
let cookies =  document.cookie;//Read
// update(overwritten)
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/"; 
// Delete
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";






/* IndexedDB
  - IndexedDB lets you create web applications with rich query abilities regardless of           network availability, your applications can work both online and offline
  - Key-value store and the value can be an object, string, array...
  - 250 MB
  - Asynchronous, unlike local storage or session storage.
    Event-driven by various events like onsuccess,onerror,oncomplete, etc.
  - Same-origin policy 
  - Supports transactions => http://www.w3.org/TR/IndexedDB/#transaction-concept
  - Do not have expiration time
  - Basic pattern : Open a database | Create an object store in the database | operation)
*/

//eheck 
if (!window.indexedDB) {
      console.log("Your browser doesn't support a stable version of IndexedDB. Such and         such feature will not be available.");
}

//indexedDB.open("dbname",version); 
let dbRequest = indexedDB.open("MyTestDatabase",1); 

//error events
dbRequest.onerror = function(event) {
  console.log("Fail"); 
};

//success event
dbRequest.onsuccess = (event) => console.log(`DB name : ${event.target.result.name} DB 
version : ${event.target.result.version}`)
                                           

```

