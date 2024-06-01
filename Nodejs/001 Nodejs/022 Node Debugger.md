# Node Debugger



> Debugging is the process of testing, finding, and reducing bugs (errors) in computer programs.
>
> Programming code might contain syntax errors, or logical errors so we need debugging.



#### Console.log()

>  you can use `console.log()` to display JavaScript values in the debugger window

```js
function calSquare(w,h){
    const val =  w*h;
    console.log(val);
    return val;
}
calSquare(23,18);
```





#### inspect flag

> `debugger` keyword we can use  stops the execution or set breakpoints

- `hit command  with inspect flag`
- `open  chrome : chrome://inspect#devices `

```js
function calSquare(w,h){
    const val =  w*h;
    debugger
    return val;
}
calSquare(23,18);

>node --inspect app.js
  
```



<img src="D:\Desktop\note\Nodejs\codes\nodejs smiple website\assets\img\debugger.png"/>



## **VS Code To Debug in Node.js**