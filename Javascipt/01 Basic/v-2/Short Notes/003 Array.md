## Array

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


//loop array
let langs = ["vue",'react','angular'];
for(let i = 0;i< langs.length;i++){
    console.log(langs[i]);
}
langs.forEach((item)=> console.log(item));


langs.length   // Returns the number of elements
langs.sort()   // Sorts the array

//is an Arry?
const fruits = ["Banana", "Orange", "Apple"];
Array.isArray(fruits);
//or
fruits instanceof Array;


const points = [40];
//is not the same as:
const points = new Array(40); // it will create an array with 40 undefined elements

```

