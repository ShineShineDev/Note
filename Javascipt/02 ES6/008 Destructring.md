## Destructuring Assignment

- Destructuring is **the act of unpacking elements in an array or object**.

  ```js
  const post = [1, 'Title', 'Description'];
  let id = post[0]; //Normal array Destructuring
  let [id, title,desc] = post //Array Destructuring
  let [x,...Z] =post //Rest operator
  let [id = 12, title = "Oliver",desc] = post // Default values
  
  let post = { id : 1, title: "Destructuring", body: 'Object Destructuring'}
  let id = post.id; //Normal Object Destructuring 
  let {id, title, body} = post //Object Destructuring 
  let{id, ...obj} = post //Rest operator
  let {comments = 100, id, title, body} = post;  // Default values
  
  let [x, y] = "String Destructuring".split('') //String Destructuring
  
  let [id, , desc] = [1, 'Title', 'Description'] // second element is not needed
  
  //summery
  let {prop : varName = default, ...rest} = object
  let [item1 = default, item2, ...rest] = array
  ```



