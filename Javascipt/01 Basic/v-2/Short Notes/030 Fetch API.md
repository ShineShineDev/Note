## Fetch API

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

