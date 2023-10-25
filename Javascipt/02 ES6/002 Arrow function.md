  ### Arrow functions

- `Short syntax for writing function expressions.`

- `Don't need the Function Keyword. Arrows  Function use  arrow => syntax`

- `Arrow functions doesn't not well suited for defining object methods,because they do not have their own this. Arrow function expressions are best suited for non-method functions.`

- `Can only omit the return keyword and the curly brackets if the function is a single statement.`

- `Can only omit () if the function is a single argument.`

  ```js
  const area = (w, h) => w * h;
  //or 
  const getArea = (w, h) => { return w * h }; 
  
  // single argument
  const log = msg => console.log(msg);
  const area = w => { return w  }; 
  const log = (msg) => console.log(msg)
  const log = (msg) => { return msg }
  
  
  const obj = { // does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c() {
      console.log(this.i);
      console.log(this);
    },
  }
  
  obj.b(); // prints undefined, Window { /* … */ } (or the global object)
  obj.c(); // prints 10, Object { /* … */ }
  
  /* Arrow functions doesn't not well suited for defining object methods,because they do not have their own this.
  */
  ```

