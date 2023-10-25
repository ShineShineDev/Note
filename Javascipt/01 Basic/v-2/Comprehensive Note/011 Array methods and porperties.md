## Array Methods and Property

- Array methods are functions built-in to JavaScript that we can apply to our arrays

- Each method has a unique function that performs a change or calculation to our array 

- Saves us from writing common functions from scratch.

- JavaScript arrays are index based 





#### Creating Array

```js
let frontEnd = ['HTML5','CSS3','JAVASCRIPT',100,true,{}] // Creating array with array literal

let backEnd = new Array('PHP','LARAVLE','NODEJS','MYSQL'); // Creating array with array constructure (not recommended way)
```





#### length

- Length property gives the count of the items in the array

```js
let frontEnd  = ['vue','react','angular'];
console.log(frontEnd.length) // 3
```





####  Get Elements 

- You can access and retrieve elements from an array using its index. You need to use the `square bracket` syntax to access array elements.

  ```JS
  let frontEnd = ['HTML5','CSS3','JAVASCRIPT'] // Creating array with array literal
  
  frontEnd[2]; //JAVASCRIPT
  
  //use the length of an array to traverse backward and access elements.
  frontEnd[frontEnd.length - 1] //JAVASCRIPT
  ```

  



####  Remove Elements 

- `pop()` method removes an element from the end of the array.

- `shift()` method remove an element from the beginning of an array.

  ```js
  let frontEnd = ['HTML5','CSS3','JAVASCRIPT','JQUERY'] // Creating array with array literal
  
  frontEnd.pop(); //JAVASCRIPT
  
  frontEnd.shift(); //HTML5
  ```






#### Add New element

- push() method is used to add a new array element at the end of the array.

- The unshift() method is used to add a new item at the beginning of the array.

  ```js
  let frontEnd = ['Vue'];
  
  frontEnd.push('React'); //2
  
  frontEnd.unshit("Angular") //3
  
  ```





#### Update Value

```js
let front = ['vue','react','angular'];

front[2] = 'backbonejs';
```





#### Copy and Clone (slice and spread operator)

- `slice(start,end) method` used to copy and clone an array to a new array.

- If The end argument is omitte,the `slice()` method slices out the rest of the array.

- :warning: You can also use `spread` operator  to  copy and clone an array to a new array.

  ```js
  let frontEnd = ['HTML5','CSS3','JAVASCRIPT'] // Creating array with array literal
  
  //array copy with slice method
  let frontEndCopy = frontEnd.slice();  // ['HTML5','CSS3','JAVASCRIPT']
  
  let frontEndCopy1 = frontEnd.slice(1,2); // ['css']
  let frontEndCopy2 = frontEnd.slice(2); // ['JAVASCRIPT']
  
  //array copy with spread operator
  let forntEndClone = [...frontEnd];
                                                         
  ```





#### Merge(Concatenating) Arrays

- The `concat()` method creates a new array by merging (concatenating) existing arrays

  ```js
  const front = ['vue','react','angular'];
  const back = ['php','laravel','nodejs'];
  
  // concatenating with contact method 
  const  web = front.concat(back);
  
  // concatenating spread operator
  let webdev = [...front,...back];
  ```

  





#### Splice (delete and add elements)

- `splice()` method use to add new item or delete items.

- `splice (startIndex, deleteCount, item 1, item 2….) `

- The first parameter (2) defines the position **where** new elements should be **added** (spliced in).

- The second parameter (0) defines **how many** elements should be **removed**.

  ```js
  
  const web = ['Vue','React','Angular'];
  
  //add new item
  web.splice(2,0,'PHP','Laravel','Nodejs');
  
  //print
  console.log(web) // out : 'Vue', 'React', 'PHP', 'Laravel', 'Nodejs', 'Angular' ]
  
  //delete item
  web.splice(2,3) //[ 'PHP', 'laravel', 'nodejs' ]
  ```
  
  
  
  

#### slice ( copy )

- The `slice(startIndex,endIndex)` method slices out a piece of an array into a new array.

- If the end argument is omitted,the `slice()` method slices out the rest of the array

  ```js
  const web = ['Vue','React','Angular','PHP','Laravel','MYSQL'];
  
  const angular = front.slice(2,3) // angular
  
  const angular = front.slice(2) // [ 'Angular', 'PHP', 'Laravel', 'MYSQL' ]
  
  ```

  

  

#### Finding Index ( indexOf  & lastIndexOf)

- `indexOf()` method returns the index of the **first** occurrence of an element in the array. If an element is not found, the `indexOf()` method returns -1.

- `lastIndexOf()` method returns the index of the the **last** occurrence of an element in the array. 

- `findIndex()` method returns the index of the **first** element in an array that pass a test (provided as a function).

  ```js
  const front = ['Vue','React','JS','React'];
  
  // first index
  front.indexOf('React'); //1
  
  // last index
  front.lastIndexOf('React'); //3
  
  // first index
  front.findIndex((item) => item == 'React'); //3
  
  ```

  



#### Find  Match Value

 - `find ` method **returns the value** of the **first element** that passes a test

 -  If some element in the array satisfies the testing function, or `undefined` if not found.

   ```js
   const front = ['Vue','React','JS','React'];
   
   front.find( (value,index,array) => value == 'React') // React
   ```

   



#### Sort

-  `sort()` method sorts an array alphabetically

  ```js
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  
  // ascending
  fruits.sort(); // [ 'Apple', 'Banana', 'Mango', 'Orange' ]
  
  //decending
  fruits.reverse() // [ 'Mango', 'Apple', 'Orange', 'Banana' ]
  
  ```
  





#### Numeric Sort

- By default, `sort()` function sorts values as **strings**.

- This works well for strings ("Apple" comes before "Banana").

- However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".Because of this, the `sort()` method will produce incorrect result when sorting numbers.

- You can fix this by providing a **compare function**:

  ```js
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
  
  ```

  

  

#### Converting Arrays to Strings

- `toString()` method converts an array to a string of (comma separated) array values.

-  `join()` method also joins all array elements into a string.

  ```js
  const front = ['Vue','React','JS','React'];
  
  front.toString() //'Vue,React,JS,React'
  
  front.join("/") //'Vue/React/JS/React'
  ```





:warning: **All JavaScript objects have a toString() method.**





#### filter 

- `filter` method  returns an array of all ``matching or condition true``  elements  by the `callback` function.

  ```js
  const cars = [
    {id : 001,type:"Volvo", year:2016},
    {id : 002,type:"Saab", year:2001},
    {id : 003,type:"BMW", year:2010}
  ];
  
  cars.filter(item => item.id == 001) // [ { id: 1, type: 'Volvo', year: 2016 } ]
  
  
  ```

  



#### forEach (looping)

-  `forEach` method is one of the several ways to loop through arrays

- `forEach` executes the callback function once for each array element; unlike map() or reduce() 

- Callback function  takes 3 arguments : value, index, itself

- When we need to iterate over an array – we can use `forEach`, `for` or `for..of`.

  ```js
  let front = ['Vue','React','Angular'];
  
  front.forEach((value,index) => console.log(`index ${index}, value ${value}`))
  
  function myfun(value,index){
      console.log(`index ${index}, value ${value}`)
  }
  front.forEach(myfun)
  
  
  ```





#### map (loop and return new array)

- When we need to iterate and return the data for each element – we can use `map`.

  ```js
  let front = ['Vue','React','Angular'];
  
  front.map(val => `value : ${val}`)//[ 'value : Vue', 'value : React', 'value : Angular' ]
  
  let num = [1,2,3,4,5];
  
  num.map(val => val*2); // [ 2, 4, 6, 8, 10 ]
  
  ```





#### reduce ( ECMAScript 5 (ES5))

-  `reduce()` method reduces the array to a single value.

-  `reduce()` method executes a provided function for each value of the array (from left-to-right).

- The return value of the function is stored in an accumulator (result/total).

- `reduce(function(total, currentValue, currentIndex, arr), initialValue)`

- It takes four arguments  :

  - accumulator(total or result,previous) is required
  - currentValue is required
  - index is optional
  - array is optional

- initialValue (optional) If no `initialValue` is supplied, the first element **in the array** will be used as the initial `accumulator` value and skipped as `currentValue`.

- `reduce()`  uses like sum all the values of an array or in an object array, counting for particular items in the array, grouping objects,max,min,average,filter,reverse,unique values,piping, currying and function composition. removing duplicates, etc

- [guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

- [guide](http://zetcode.com/javascript/reduce/)

  ```js
  let num = [10,20,30,40,50];
  num.reduce((accumulator, item) => {
    console.log(accumulator, item);
    return accumulator + item;
  }); //150 
  console.log(num.reduce((accumulator,item) => accumulator + item,50)) //200
  ```





#### every 

- The `every()` method checks if all array values pass a test.

  ```js
  let userInputs  = [
      { name : 'Julian', isEmpty: true },
      { email : 'Julian@gmail.com', isEmpty: true},
      { password : '123123', isEmpty: true},
  ];
  let trueOrFalse = userInputs.every((userInput) => userInput.isEmpty === true);
  
  trueOrFalse ? console.log('ok') :console.log('rquired fields');
  ```
  





#### some

- At least one element in the array that passes the condition, returning true or false as appropriate.

  ```js
  let userInputs  = [
      { name : 'Julian', isEmpty: false },
      { email : 'Julian@gmail.com', isEmpty: true},    
      { password : '123123', isEmpty: true},];
  
  let trueOrFalse = userInputs.some((userInput) => userInput.isEmpty === true);
  
  trueOrFalse ? console.log('ok') :console.log('rquired fields')
  ```

  



#### includes

- The includes() method returns true if an array *contains* a specified value

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  frontEnd.includes('vue') // true
  frontEnd.includes('jquery') // false
  ```





#### join

- The *join*() *method* returns the array as a string. The elements will be separated by a specified separator.

  ```js
  let nums = [1,2,3,4,5];
  console.log(nums.join('|')); // 1|2|3|4|5
  ```

  



#### Array Destructuring

```js
let [id,title,desc] = [1,'this is title','description']
console.log(id); // 1
console.log(title); // this is title
console.log(desc); // description
```



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

