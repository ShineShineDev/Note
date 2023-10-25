## AJAX

- **A**synchronous **J**avaScript **A**nd **X**ML.
- AJAX allows you to send and receive data asynchronously without reloading the web paged
- A synchronous request blocks the client until operation completes i.e. browser is unresponsive. In such case, javascript engine of the browser is blocked.
- An asynchronous request doesn’t block the client i.e. browser is responsive. At that time, user can perform another operations also. In such case, javascript engine of the browser is not blocked.







:warning: **Natively Node.js does not provide the browser XHR API. There is, however, a node module [xmlhttprequest](https://www.npmjs.com/package/xmlhttprequest) that does.**







### XMLHttpRequest Object

- The keystone of AJAX is the XMLHttpRequest object.

- [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) supports both synchronous and asynchronous communications.

- If you use an asynchronous [`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest), you receive a callback when the data has been received. This lets the browser continue to work as normal while your request is being handled.

- Synchronous request blocks the user until a response is retrieved whereas asynchronous doesn't block the user

- Old versions of Internet Explorer (5/6) use an ActiveX object instead of the `XMLHttpRequest` object:

    ```js
    let serverRequest  = window.XMLHttpRequest ? new XMLHttpRequest() :  new ActiveXObject();
    ```







   #### XMLHttpRequest Object Methods

| Method                                | Description                                                  |
| :------------------------------------ | :----------------------------------------------------------- |
| new XMLHttpRequest()                  | Creates a new XMLHttpRequest object                          |
| abort()                               | Cancels the current request                                  |
| getAllResponseHeaders()               | Returns header information                                   |
| getResponseHeader()                   | Returns specific header information                          |
| open(*method, url, async, user, psw*) | Specifies the request  *method*: the request type GET or POST *url*: the file location *async*: true (asynchronous) or false (synchronous) *user*: optional user name *psw*: optional password |
| send()                                | Sends the request to the server Used for GET requests        |
| send(*string*)                        | Sends the request to the server. Used for POST requests      |
| setRequestHeader()                    | Adds a label/value pair to the header to be sent             |







#### XMLHttpRequest Object Properties

| Property           | Description                                                  |
| :----------------- | :----------------------------------------------------------- |
| onreadystatechange | Defines a function to be called when the readyState property changes |
| readyState         | Holds the status of the XMLHttpRequest. 0: request not initialized 1: server connection established 2: request received 3: processing request 4: request finished and response is ready |
| responseText       | Returns the response data as a string                        |
| responseXML        | Returns the response data as XML data                        |
| status             | Returns the status-number of a request 200: "OK" 403: "Forbidden" 404: "Not Found" For a complete list go to the [Http Messages Reference](https://www.w3schools.com/tags/ref_httpmessages.asp) |
| statusText         | Returns the status-text (e.g. "OK" or "Not Found")           |







### Request To a Server

- To send a request to a server, we use the open() and send() methods of the `XMLHttpRequest` object:

- `XMLHttpRequest`s are asynchronous by default; they are only placed in synchronous mode by passing `false` as the value of the optional `async` parameter when calling [`open()`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/open).

  ```js
  // creat XMLHttpRequest object
  let serverRequest  = window.XMLHttpRequest ? new XMLHttpRequest() :  new ActiveXObject();
  
  // open request with serverRequest.open(method , url , sync or async) method
  serverRequest.open("GET",'https://jsonplaceholder.typicode.com/posts',true);
  
  // send to server a request
  serverRequest.send()
  ```
  







### onreadystatechange Property

  - `After` making a request, you will `receive a response back.`
  
  - The **onreadystatechange** property  function well be execute ``every time`` the status of the XMLHttpRequest object changes
  
  - **readyState** property is 4 and the **status** property is 200, the response is ready:
  
     | readyState | Description                     |
     | :--------- | :------------------------------ |
     | 0          | The request is not initialized. |
     | 1          | The request has been set up.    |
     | 2          | The request has been sent.      |
     | 3          | The request is in process.      |
     | 4          | The request is completed.       |
  
     | status | Description                    |
     | :----- | :----------------------------- |
     | 200    | OK                             |
     | 403    | Forbidden                      |
     | 404    | Page not found                 |
     | 204    | No Response                    |
     | 401    | Unauthorized                   |
     | 500    | Internal Error                 |
     | 502    | Service temporarily overloaded |
     
     ```js
     let JsonData;
     
     // creat XMLHttpRequest object
     let severRequest =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();
     
     // open request with serverRequest.open(method , url , sync or async) method
     severRequest.open('GET','https://jsonplaceholder.typicode.com/posts',true)
     
     // send to server a request
     severRequest.send()
     
     severRequest.onreadystatechange = function(){
         //console.log(this.readyState);
         //console.log(this.status); 
         //console.log(this.getAllResponseHeaders());
         //console.log(this.responseURL);
         if(this.readyState === 4 && this.status === 200){
             JsonData = this.responseText;
             document.write(this.responseText)
             
         }
     }
     
     
     let jsObj = JSON.parse(JsonData)
     ```
     
     





### POST(FormData)

```js
<form name="message"> //html form data
  <input name="name" value="John">
  <input name="msg" value="Hello word">
</form>

let formData = new FormData(document.forms.message);  // select form 
let name = formData.get("name") // name
let msg = formData.get("msg") // msg

//msg object
let msgObj = {
    name : msg,
    msg : msg
}

// create xmlhttprequest
let serverRequest = new XMLHttpRequest();

// open request
severRequest.open('POST','https://jsonplaceholder.typicode.com/posts',true)

// set header
serverRequest.setRequestHeader('Content-type', 'multipart/form-data');

//send request with form data
serverRequest.send(msgObj);
```







### HTTP-headers

- `XMLHttpRequest` allows both to send custom headers and read headers from the response

- setRequestHeader(name, value)  
  
  - Adds a label/value pair to the header to be sent
  
    ```js
    serverRequest.setRequestHeader('Content-Type', 'application/json');
    ```
  
- getResponseHeader(name)
  
  - Gets the response header with the given `name` (except `Set-Cookie` and `Set-Cookie2`).

      ```js
      serverRequest.getResponseHeader('Content-Type')
      ```
  
- getAllResponseHeaders
  
  - Returns all response headers,
  
    ```js
     serverRequest.getAllResponseHeaders()
    ```
    
  





### Cross-origin requests

- `XMLHttpRequest` can make cross-origin requests, using the same CORS policy as fetch

- just like `fetch`, it doesn’t send cookies and HTTP-authorization to another origin by default. To enable them, set `xhr.withCredentials` to `true`

  ```js
  let serverRequest = new XMLHttpRequest();
  serverRequest.withCredentials = true;
  serverRequest.open('POST', 'http://otherapi',true);
  ```







### Summery Code

```js
/* Old versions of Internet Explorer (5/6) use an ActiveX object instead of the    			    XMLHttpRequest object.So You need check XMLHttpRequest or  ActiveXObjec
*/
let severRequest =  window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject();



// GET method
//open request
severRequest.open('GET','https://jsonplaceholder.typicode.com/posts',true)

// send request
severRequest.send()

let jsonData;

// After making a request, you will receive a response back. onreadystatechange property handle this request
severRequest.onreadystatechange = function(){
    //console.log(this.readyState);
    //console.log(this.status); 
    //console.log(this.getAllResponseHeaders());
    //console.log(this.responseURL);
    if(this.readyState === 4 && this.status === 200){
        jsonData = this.responseText;
        document.write(this.responseText)
        
    }
}

// paser json data to js obj
let jsDataObj = JSON.parse(jsonData)






// POST method
//data object
let msgObj = {
    langs : 'Javascript',
    msg : 'A message'
}

// open request with post method
severRequest.open('POST','https://jsonplaceholder.typicode.com/posts',true)

// set header
serverRequest.setRequestHeader('Content-type', 'multipart/form-data');

//send request with form data
serverRequest.send(msgObj);

```

