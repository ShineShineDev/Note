### Rest operators in function parameters

- ` The rest parameter syntax can get indefinite number of arguments as an array. `

-  `Rest parameter name must be prefix with three dots(...)`

- `All passed arguments will become an array in trest parameter `

- `function(...args){}`

  ```js
  function fun(a, b, ...args) {
      return args;
  }
  fun("HTML","CSS",'VUE','REACT','ANGULAR'); // ["VUE", "REACT", "ANGULAR"]
  fun("HTML","CSS",) //[]
  ```