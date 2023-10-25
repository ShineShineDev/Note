## Array methods and properties



```js
//Creating Array
let frontEnd = ['HTML5','CSS3','JAVASCRIPT',100,true,{}] // Creating array with array literal

let backEnd = new Array('PHP','LARAVLE','NODEJS','MYSQL'); // Creating array with array constructure (not recommended way)




// get array length
let frontEnd  = ['vue','react','angular'];
frontEnd.length // 3




// get element 
let frontEnd = ['HTML5','CSS3','JAVASCRIPT'] // Creating array with array literal
frontEnd[2]; //JAVASCRIPT
frontEnd[frontEnd.length - 1] //JAVASCRIPT




// remove element
let frontEnd = ['HTML5','CSS3','JAVASCRIPT','JQUERY'] // Creating array with array literal
frontEnd.pop(); // remove last element
frontEnd.shift(); // remove first element




// add new element
let frontEnd = ['Vue'];
frontEnd.push('React'); //end of the array.
frontEnd.unshit("Angular") //at the beginning of the array.




// update value
let front = ['vue','react','angular'];
front[2] = 'backbonejs';




// Copy and Clone (slice and spread operator)
let frontEnd = ['HTML5','CSS3','JAVASCRIPT'] 

// copy with slice method
let frontEndCopy = frontEnd.slice();  // ['HTML5','CSS3','JAVASCRIPT']
let frontEndCopy1 = frontEnd.slice(1,2); // ['css']
let frontEndCopy2 = frontEnd.slice(2); // ['JAVASCRIPT']

// copy with spread operator
let forntEndClone = [...frontEnd];






// concating
const front = ['vue','react','angular'];
const back = ['php','laravel','nodejs'];

// concatenating with contact method 
const  web = front.concat(back);

// concatenating spread operator
let webdev = [...front,...back];






// Splice (delete and add elements)
const web = ['Vue','React','Angular'];

//add new item
web.splice(2,0,'PHP','Laravel','Nodejs');

//print
console.log(web) // out : 'Vue', 'React', 'PHP', 'Laravel', 'Nodejs', 'Angular' ]

//delete item
web.splice(2,3) //[ 'PHP', 'laravel', 'nodejs' ]





// slice ( copy )
const web = ['Vue','React','Angular','PHP','Laravel','MYSQL'];

const angular = front.slice(2,3) // angular

const angular = front.slice(2) // [ 'Angular', 'PHP', 'Laravel', 'MYSQL' ]





// find index
const front = ['Vue','React','JS','React'];

// first index  with indexOf
front.indexOf('React'); //1

// last index with lastIndexOf
front.lastIndexOf('React'); //3

// first index with findIndex
front.findIndex((item) => item == 'React'); //3






// Find  Match Value
const front = ['Vue','React','JS','React'];

front.find( (value,index,array) => value == 'React') // React
// If some element in the array satisfies the testing function, or `undefined` if not found.






// sort (alphabetically)
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// ascending
fruits.sort(); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]

//decending
fruits.reverse() // [ 'Mango', 'Apple', 'Orange', 'Banana' ]






// Numeric Sort
const points = [40, 100, 1, 5, 25, 10];

points.sort(function(a, b){return a - b}); // ascending

points.sort(function(a, b){return a - b}); // decending

// sorting on  object in array 
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
//ascending
cars.sort((a,b)=> { 
    return a.year - b.year
})
//decending
cars.sort((a,b)=> { 
    return b.year - a.year
})
//https://www.w3schools.com/js/js_array_sort.asp






// Converting Arrays to Strings
const front = ['Vue','React','JS','React'];

front.toString() //'Vue,React,JS,React'

front.join("/") //'Vue/React/JS/React'






// filter 
// filter method  returns an array of all matching or condition true  elements  by the callback function.
const cars = [
  {id : 001,type:"Volvo", year:2016},
  {id : 002,type:"Saab", year:2001},
  {id : 003,type:"BMW", year:2010}
];

cars.filter(item => item.id == 001) // [ { id: 1, type: 'Volvo', year: 2016 } ]






// forEach (looping)
let front = ['Vue','React','Angular'];

front.forEach((value,index) => console.log(`index ${index}, value ${value}`))

function myfun(value,index){
    console.log(`index ${index}, value ${value}`)
}
front.forEach(myfun)







// map (loop and return new array)
let num = [1,2,3,4,5];
num.map(val => val*2); // [ 2, 4, 6, 8, 10 ]






// reduce (reduces the array to a single value.)
let num = [10,20,30,40,50];
num.reduce((accumulator, item) => {
  console.log(accumulator, item);
  return accumulator + item;
}); //150 
console.log(num.reduce((accumulator,item) => accumulator + item,50)) //200






// every (checks if all array values pass a test.)
let userInputs  = [
    { name : 'Julian', isEmpty: true },
    { email : 'Julian@gmail.com', isEmpty: true},
    { password : '123123', isEmpty: true},
];

let trueOrFalse = userInputs.every((userInput) => userInput.isEmpty === true);

trueOrFalse ? console.log('ok') :console.log('rquired fields');






// some (At least one element in the array that passes the condition,)
let userInputs  = [
    { name : 'Julian', isEmpty: false },
    { email : 'Julian@gmail.com', isEmpty: true},    
    { password : '123123', isEmpty: true},];

let trueOrFalse = userInputs.some((userInput) => userInput.isEmpty === true);

trueOrFalse ? console.log('ok') :console.log('rquired fields')





// includes (returns true if an array contains a specified value)
let frontEnd = ['html','css','js','vue','react','angular']
frontEnd.includes('vue') // true
frontEnd.includes('jquery') // false





//Array Destructuring
let [id,title,desc] = [1,'this is title','description']
console.log(id); // 1
console.log(title); // this is title
console.log(desc); // description
```

