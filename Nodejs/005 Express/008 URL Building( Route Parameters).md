#### Route Parameters ( URL Building)

> `Query string is the part of a` [URL](https://en.wikipedia.org/wiki/URL) (Uniform Resource Locater) `after the question mark (?).It is meant to send small amounts of information to the server via the url.This information is usually used as parameters to query a database, or maybe to filter results`The query *parameters* are the actual key-value pairs `
>
> `That are used to capture the values specified at their position in the URL.`
>
> `The captured values are populated in the `**`req.params` **`object, with the name of the route parameter specified in the path as their respective keys.`



- `Route path: /users/:userId/books/:bookId`
- `Request URL: http://localhost:3000/users/34/books/8989`
- `req.params: { "userId": "34", "postId": "8080" }`

```js
// display params
app.get('/user/:userId/post/:postId', function (req, res) {
  res.send(req.params) 
})
```





### Pattern Matched Routes

> `You can also use `**regex** `to restrict URL parameter matching. Let us assume you need the` **id** `to be a 5-digit long number`.

```js
var express = require('express');
var app = express();

app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

app.listen(3000);
```



