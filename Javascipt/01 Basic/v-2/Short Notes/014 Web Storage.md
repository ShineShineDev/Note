

## Web Storage

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

