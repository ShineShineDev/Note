### const and let

- `let` and `const` are block-scoped variable 

- `let ` can change the value,`const` can’t change value 

  ```js
  let lang = "javascript";
  lang = "javascript"; //can change the value
  
  const PI = 3.14
  PI = 4.14 // can’t change value 
  
  if(true){
      let lang = "javascript"; //block-scoped variable 
      const PI = 3.14 //block-scoped variable 
      var varKeywork = "function scoped" // functionscoped variable 
  }
  console.log(lang) // lang is not defined
  console.log(PI) // PI is not defined
  console.log(varKeywork) // function scoped
  
  ```

