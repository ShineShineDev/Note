## Programmatic Navigation

- `<router-link> use to create anchor tags for declarative navigation, `

- `We can do this programmatically using the router's instance methods.`

- `To navigate to a different URL, use router.push`

- `Declarative : <router-link :to="...">` vs `Programmatic : router.push(...)`

  ```js
  // literal string path
  <button @click="$router.push('/posts/001')">Go to /post/001</button>
  
  // object with path
  <button @click="$router.push({ path: '/posts/001' })">Go to /posts/001</button>
  
  // named route with params to let the router build the url
  <button @click="$router.push({ name: 'posts', params: { id: '001' } })">Go to /posts with id params</button>
  
  // with query, resulting in login?username=Julian&password=123
  <button @click="$router.push({ path: '/login', query: { username: 'Julian',password : '123' } })">Go to /login with username and password query</button>
  
  // with hash, resulting in /about#team
  <button @click="$router.push({ path: '/about', hash: '#team' })">Go to /about with #team</button>
  
  $router.push({ path: '/home', replace: true })
  // equivalent to
  $router.replace({ path: '/home' })
  ```
  

  


#### Traverse history

```js
// go forward by one record, the same as router.forward()
router.go(1)

// go back by one record, the same as router.back()
router.go(-1)

// go forward by 3 records
router.go(3)

// fails silently if there aren't that many records
router.go(-100)
router.go(100)
```



```js
/* Programmatic Navigation
 - <router-link> use to create anchor tags for declarative navigation
 - We can do this programmatically using the router's instance methods
 - To navigate to a different URL, use router.push
 - Declarative : <router-link :to="...">` vs `Programmatic : router.push(...)
*/
// literal string path
<button @click="$router.push('/posts/001')">Go to /post/001</button>
// object with path
<button @click="$router.push({ path: '/posts/001' })">Go to /posts/001</button>
// named route with params to let the router build the url
<button @click="$router.push({ name: 'posts', params: { id: '001' } })">Go to /posts with id params</button>
// with query, resulting in login?username=Julian&password=123
<button @click="$router.push({ path: '/login', query: { username: 'Julian',password : '123' } })">Go to /login with username and password query</button>
// with hash, resulting in /about#team
<button @click="$router.push({ path: '/about', hash: '#team' })">Go to /about with #team</button>

$router.push({ path: '/home', replace: true })
// equivalent to
$router.replace({ path: '/home' })

/* Traverse history */
// go forward by one record, the same as router.forward()
router.go(1)
// go back by one record, the same as router.back()
router.go(-1)
// go forward by 3 records
router.go(3)
// fails silently if there aren't that many records
router.go(-100)
router.go(100)
```

