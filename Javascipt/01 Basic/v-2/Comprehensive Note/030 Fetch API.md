### Fetch API

- The Fetch API interface allows web browser to make asynchronous HTTP requests to web servers.

- 😀 No need for XMLHttpRequest anymore.

  






#### Fetch method

- Fetch API provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network

- fetch(url, [options]) can take two parameters

  - first parameter is url
  - second optional parameters are  method, headers,body(post data) etc. 

- The `fetch()` method returns a `Promise` .So you can use the `then()` and `catch()` methods to handle it:

  ```js
  fetch(url)
      .then(response => {
          // handle the response
      })
      .catch(error => {
          // handle the error
      });
  ```







#### Response methods (to handle the respective type of data.)

- When the request completes, the resource is available. At this time, **the promise will resolve into a `Response` object.**

- The `Response` object has a number of useful methods  to handle the respective type of data.

  - **`response.text()`** – read the response and return as text,
  - **`response.json()`** – parse the response as JSON,
  - **`response.formData()`** – return the response as `FormData` object
  - **`response.blob()`** – return the response as [Blob](https://javascript.info/blob) (binary data with type),
  - **`response.arrayBuffer()`** – return the response as [ArrayBuffer](https://javascript.info/arraybuffer-binary-arrays) (low-level representation of binary data),
  - `response.body` is a [ReadableStream](https://streams.spec.whatwg.org/#rs-class) object, it allows you to read the body chunk-by-chunk, 

  ```js
  fetch(url)
      .then(response => response.text())
      ,then(data => console.log(data))
      .catch(error => console.log(error));
  ```

  





#### Handling the status codes of the Response

- The `Response` object provides the status code and status text via the `status` and `statusText` properties.

-  When a request is successful, the status code is `200` and status text is `OK`:

  ```js
  async function request() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts'); 
      if (response.status === 200) {
          let data = await response.text();
      }
  }
  request();
  ```
  





#### POST requests

```js
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```



#### Sending an image



#### Example

```js
/* - Fetch API
   - The Fetch API interface allows web browser to make asynchronous HTTP requests to web 		  servers.
   - 😀 No need for XMLHttpRequest anymore.
   - fetch(url, [options]) method can take two parameters
   		- first parameter is url
		- second optional parameters are method, headers,body(post data) etc. 
*/



//fetch with promise change
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))


//fetch with async and await
async function getPosts(url) {
    let response = await fetch(url);
    if (response.status === 200) {
        await response.json().then(json => console.log(json));
    }
}

getPosts('https://jsonplaceholder.typicode.com/posts');





// post request
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
```

