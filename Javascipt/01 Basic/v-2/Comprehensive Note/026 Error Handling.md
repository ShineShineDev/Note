## Error Handling

- Error handling is **the process of handling the possibility of failure**. For example, failing to read a file and then continuing to use that bad input would clearly be problematic.
- JavaScript provides error-handling mechanism to catch runtime errors using try-catch-finally block





#### try and catch

- The `try` statement allows you to define a block of code to be tested for errors while it is being executed.

-  While executing the `try` block, if any error occurs, it goes to the `catch` block

  ```js
  try{
      let user_message = 123;
       console.log(user_message.toUpperCase());
  }catch(err){
      console.log("An error caught");
     console.log("Error : "  + err);
  }
  ```





#### try...catch...finally

- The `finally` block executes both when the code runs successfully or if an error occurs.

  ```js
  try{
      let user_message = 123;
       console.log(user_message.toUpperCase());
  }catch(err){
      console.log("An error caught");
     	console.log("Error : "  + err);
  }finally{
       console.log("Finally will execute every time");
  }
  ```

  



#### throw exception

- When an error occurs,JavaScript will **throw an exception (throw an error)** and stop and generate an error message.

- The `throw` statement allows you to create a custom error

- The exception can be a JavaScript `String`, a `Number`, a `Boolean` or an `Object`:

  ```js
  try{
      
      let num = "123";
      if(Number.isSafeInteger(num))
          console.log(num * num) 
      else
          throw "num is not safe integer"
          //or
          //throw new Error("num is not safe integer")
      
  }catch(err){
      console.log("An error caught");
      console.log("Error : "  + err);
  }
  ```

  





#### The Error Object

- JavaScript has a built in error object that provides error information when an error occurs.

- The error object provides two useful properties: name(returns an error name) and message(returns an error message (a string)).

- Six different values can be returned by the error name property

  | Error Name     | Description                                  |
  | :------------- | :------------------------------------------- |
  | EvalError      | An error has occurred in the eval() function |
  | RangeError     | A number "out of range" has occurred         |
  | ReferenceError | An illegal reference has occurred            |
  | SyntaxError    | A syntax error has occurred                  |
  | TypeError      | A type error has occurred                    |
  | URIError       | An error in encodeURI() has occurred         |





```js
/* Error Handling
	- Error handling is the process of handling the possibility of failure. For example,		  failing to read a file and then continuing to use that bad input would clearly be      	   problematic.
	- JavaScript provides error-handling mechanism to catch runtime errors using try-catch- 	  finally block
*/	



/* try...catch
	- The try statement allows you to define a block of code to be tested for errors while it		is being executed.
	- While executing the `try` block, if any error occurs, it goes to the catch block
*/
try{
    let user_message = 123;
     console.log(user_message.toUpperCase());
}catch(err){
    console.log("An error caught");
    console.log("Error : "  + err);
}



/* try...catch...finally
	- The finally block executes both when the code runs successfully or if an error occurs.
*/
try{
    let user_message = 123;
     console.log(user_message.toUpperCase());
}catch(err){
    console.log("An error caught");
   	console.log("Error : "  + err);
}finally{
     console.log("Finally will execute every time");
}



/* throw
	- When an error occurs,JavaScript will throw an exception (throw an error) and stop and 	  generate an error message.
	- The throw statement allows you to create a custom error
*/
try{
    
    let num = "123";
    if(Number.isSafeInteger(num))
        console.log(num * num) 
    else
        throw "num is not safe integer"
        //or
        //throw new Error("num is not safe integer")
    
}catch(err){
    console.log("An error caught");
    console.log("Error : "  + err);
}
```








