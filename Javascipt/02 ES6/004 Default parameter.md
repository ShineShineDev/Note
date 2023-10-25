### Default arguments

- `ES6 you can specify default values to the function parameters`

- `When you forget to provide the parameter into function,default parameters values will be used.`

  ```js
  function user(name,age = 23){
     console.log(`name is : ${name},age is : ${age}`);
  }
  user("Julian"); // name is : Julian,age is : 23
  user("Julian",20); // name is : Julian,age is : 20
  ```







