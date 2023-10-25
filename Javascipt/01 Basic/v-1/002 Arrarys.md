## Array 
----

- An array is a special variable, store multiple values in a single variable 

- it is data structure( collection of data)

- You can have variables of different types in the same Array(number,string,boolean,array,obj)

- Arrays are a special type of objects.(typeof returns object but array can check with Aarra.isArray(langs) or lnags instanceof Array)

-  You can access the values by referring to an index number.

- Many programming languages support arrays with named indexes.

- Arrays with named indexes are called associative arrays (or hashes).

- JavaScript does not support arrays with named indexes.

  





### creating array with array literal (good)

```js
    let langs = ["vue",'react','angular']
```




### creating array with array constructer (avoid)
- The new keyword only complicates the code 
- ```new Array(40, 100)```  What if I remove one of the elements?.it can be creates an array with 40 undefined elements
```js
    let langs = new Array("vue","react",'angular')
```



### Access the Elements

- You access an array element by referring to the index number.
- Array indexes start with 0.
```js
    console.log(langs[0])
    console.log(langs[langs.lenght-1])
```
-----

### Adding Array Elements
```js
    langs.push("another")
    langs[langs[langs.lenght]] = "another"
````

-----

### Change element 

```js
lang[0] = "js"
```

-----

### Delete array

```js
delete langs[0]//fast el
delete langs[lags.lenght] //last el
lang.pop() //last el
```

-----

### The Difference Between Arrays and Objects

-In JavaScript, arrays use numbered indexes.  
-In JavaScript, objects use named indexes.

-----

###  summery code 

```js
//Array can store multiple values in a single variable 
//In js array,you can assign variables of different types in the same array(number,string,boolean,array,obj)
// Js arrays always use numbered indexes to access arrays item.  


//creating array with array literal (recommended,because for simplicity, readability and execution speed)
let langs = ["vue",'react','angular'] 
let x =[];
x[0] = 1;
x[1] = 2;
x[2] = 4;

//creating array with array constructer (not recommended)
let langs1 = new Array("vue","react",'angular')

//Access Element
console.log(langs[0]) 
console.log(langs[langs.length-1])

//Adding 
langs.push('Javascript') //last 
langs.unshift("js") //first

//Delete array
langs.pop() //last
langs.shift() // first
delete langs[1] // delete 1 index of el

//update array element
langs[0] = "javascript"

```





