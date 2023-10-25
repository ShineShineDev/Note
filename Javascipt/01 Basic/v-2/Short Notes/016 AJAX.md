## AJAX



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

