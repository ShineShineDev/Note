# Array Methods and Properties
- JavaScript Array object is a global object.

- Array is a data structure that contains list of elements which store multiple values in a single variable.

- Array methods are functions built-in to JavaScript that we can apply to our arrays

- Each method has a unique function that performs a change or calculation to our array 

- Saves us from writing common functions from scratch.

-  In javaScript particularly, arrays are hashtable based and they not necessarily are placed in contiguous memory locations.

- JavaScript arrays are index based 

  
  
  
  
  

### Create Array 

```js
let frontEnd = ['vue','react','angular']; // array literal
let frontEnd = new Array("vue",'react','angular') // array constructor (not recommended way)
```



---
### Array Properties

| roperty     | Description                                                  |
| :---------- | :----------------------------------------------------------- |
| `length`    | Sets or returns the number of elements in an array.          |
| `prototype` | Allows you to add new properties and methods to an Array object. |
---

### Array Methods

| Method          | Description                                                  |
| :-------------- | :----------------------------------------------------------- |
| `concat()`      | Merge two or more arrays, and returns a new array.           |
| `copyWithin()`  | Copies part of an array to another location in the same array and returns it. |
| `entries()`     | Returns a key/value pair Array Iteration Object.             |
| `every()`       | Checks if every element in an array pass a test in a testing function. |
| `fill()`        | Fill the elements in an array with a static value.           |
| `filter()`      | Creates a new array with all elements that pass the test in a testing function. |
| `find()`        | Returns the value of the first element in an array that pass the test in a testing function. |
| `findIndex()`   | Returns the index of the first element in an array that pass the test in a testing function. |
| `forEach()`     | Calls a function once for each array element.                |
| `from()`        | Creates an array from an object.                             |
| `includes()`    | Determines whether an array includes a certain element.      |
| `indexOf()`     | Search the array for an element and returns its first index. |
| `isArray()`     | Determines whether the passed value is an array.             |
| `join()`        | Joins all elements of an array into a string.                |
| `keys()`        | Returns a Array Iteration Object, containing the keys of the original array. |
| `lastIndexOf()` | Search the array for an element, starting at the end, and returns its last index. |
| `map()`         | Creates a new array with the results of calling a function for each array element. |
| `pop()`         | Removes the last element from an array, and returns that element. |
| `push()`        | Adds one or more elements to the end of an array, and returns the array's new length. |
| `reduce()`      | Reduce the values of an array to a single value (from left-to-right). |
| `reduceRight()` | Reduce the values of an array to a single value (from right-to-left). |
| `reverse()`     | Reverses the order of the elements in an array.              |
| `shift()`       | Removes the first element from an array, and returns that element. |
| `slice()`       | Selects a part of an array, and returns the new array.       |
| `some()`        | Checks if any of the elements in an array passes the test in a testing function. |
| `sort()`        | Sorts the elements of an array.                              |
| `splice()`      | Adds/Removes elements from an array.                         |
| `toString()`    | Converts an array to a string, and returns the result.       |
| `unshift()`     | Adds new elements to the beginning of an array, and returns the array's new length. |
| `values()`      | Returns a Array Iteration Object, containing the values of the original array. |
| toString()      | Convert an array to a string                                 |

---
#  Important Array Methods and Propertie

- length,pus(),po(),shift(),unshift(),splice(),slice(),contact(),indexOf(),findIndex(),find(),sort(),reverse(),filter(),forEach(),

- map(),reduce(),indules(),every(),some(),join()

  

### length

- length property gives the count of the items in the array

```js
let frontEnd  = ['vue','react','angular'];
console.log(frontEnd.length) // 3
```
---
## [Add/remove items](https://javascript.info/array-methods#add-remove-items)

- `arr.push(...items)` – adds items to the end,
- `arr.pop()` – extracts an item from the end,
- `arr.shift()` – extracts an item from the beginning,
- `arr.unshift(...items)` – adds items to the beginning
- ```splice``` method also can delete array element

### push

- push() method is used to add a new array element at the end of the array.

```js
let frontEnd  = ['vue','react'];
console.log(frontEnd.push('angular')) // 3 
```
---

### pop

-  pop method is used to remove the last item from an array
  
  ```js
  let frontEnd  = ['vue','react','angular'];
  console.log(frontEnd.pop()) // angular
  ```
  ---
  

### shift

- The shift () method is used to remove an element from the beginning of an array

  ```js
  let frontEnd  = ['vue','react','angular'];
  console.log(frontEnd.shift()) // vue
  ```
---

### unshift

- The unshift method is used to add a new item at the beginning of the array.

  ```js
  let frontEnd  = ['react','angular'];
  console.log(frontEnd.unshift("vue")) // 3
  ```



---
### splice (delete and add elements)

-  `splice()` method can be used to add new items to an array:
-   splice() *method* also can be use To *delete* elements in an array,
- splice (startIndex, deleteCount, item 1, ixxtem 2….) 
  
```js
  let langs = ['Html','css','php','mysql'];

  langs.splice(2,0,'bootstrap','js','jquery') // [] | "Html", "css", "bootstrap", "js", "jquery", "php", "mysql"]
```

---

### Slice (Extracting)

- Select part of an array and return its content

-  the end argument is omitte,the `slice()` method slices out the rest of the array.

- slice([start], [end])

  ```js
  let langs = ['html','css','bootstrap','javascript','jquery'];
  let selectLangs = langs.slice(3,4);
  consol.log(selectLangs); // ["javascript"]
  let selectLangs = langs.slice(3); // ["javascript",jquery"]
  ```
---

### concat (merg)

- `concat()` method creates a new array by merging (concatenating) existing arrays

- The `concat()` method can take any number of array arguments:

- The `concat()` method can also take strings as arguments:

  ```js
  let ar9 = ['html','css','bootstrap'];
  let ar10 = ['php','node','danjago'];
  let ar11 = ['mysql','mongodb'];
  console.log(ar9.concat(ar10,ar11)) // ["html", "css", "bootstrap", "php", "node", "danjago", "mysql", "mongodb"]
  console.log(ar9.concat('javascript'));//  ["html", "css", "bootstrap", "javascript"]
  ```
  
---

### indexOf

- The indexOf() method searches the array for the specified item, and returns its position of index

- The indexOf() method can take two arguments ,first arg is specified item ,and second arg is start

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  
  frontEnd.indexOf("vue") // 3
  
  frontEnd.indexOf("js",3) // 4
  ```
  
  ---

### findIndex

- The `findIndex()` method returns ```the index of the first element```   in an array that ```pass a test``` (provided as a function).

  ```js
  let frontEnd = ['html','css','js','vue','react','vue','angular']
  
  frontEnd.findIndex(item => item == 'vue') //3
  ```

---

### find


- Returns  `element or value ` in the array, if some element in the array satisfies the testing function, or `undefined` if not found.

- find((item,index,array) => //code)

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  console.log(frontEnd.find((item,index,array) => item == 'vue')) //vue
  ```


----

### Sort

- Sorts the elements of an array in place and returns the array.

- The default sort order is ascending.

  ```js
  let nums = [4, 1, 3, 2]
  // smallest to largest or ascending
  nums.sort() // [1, 2, 3, 4] 
  nums.sort((a, b) => a - b) // [1, 2, 3, 4] 
  
  // largest to smallest or decending
  nums.sort((a, b) => b - a) // [4, 3, 2, 1]
  ```


-----

### Reverse

- Reverses the order of the elements of an array *in place*. (First becomes the last, last becomes first.)

  ```js
  let nums = [1,2,3,4,5];
  console.log(nums.reverse()); // [5, 4, 3, 2, 1]
  ```


---

### filter

- The `filter()` method **creates a new array** 

- `filter` method  returns an array of all ``matching or condition true``  elements  by the `callback` function.

  ```js
  let users = [
      {name:'shine shine',work : 'dev'},
      {name:'ko ko',work : 'ceo'},
      {name:'Tun Tun',work : 'account'},
      {name:'Tun Tun',work : 'dev'},
  ]
  let filter = users.filter(item => item.work == 'dev');
  console.log(filter); // [{name:'shine shine',work : 'dev'},{name:'Tun Tun',work : 'dev'},]
  ```

---

### forEach

- This method helps to loop over array by executing a provided callback function for each element in an array.

- When we need to iterate over an array – we can use `forEach`, `for` or `for..of`.

  ```js
  let frontEnd = ['html','css','bootstrap'];
  frontEnd.forEach((item,index,arr) => console.log(`${item} is index ${index} of ${arr} array`))
  // html is index 0 of html,css,bootstrap
  // css index 1 of html,css,bootstrap
  // bootstrap is index 2 of html,css,bootstrap
  ```
----

### map

- The `map()` function loops over every element in the array,

- When we need to iterate and return the data for each element – we can use `map`.

  ```js
  let nums = [1,2,3,4,5];
  let map = nums.map(item => item * 2);
  console.log(map); // (5) [2, 4, 6, 8, 10]
  ```

-----

### reduce ( ECMAScript 5 (ES5))

- The `reduce()` method reduces the array to a single value.

- The `reduce()` method executes a provided function for each value of the array (from left-to-right).

- The return value of the function is stored in an accumulator (result/total).

- ```reduce(function(total, currentValue, currentIndex, arr), initialValue)``

- It takes four arguments  :

  - accumulator(total or result,previous) is required
  -  currentValue is required
  -  index is optional
  -  array is optional

- initialValue (optional) If no `initialValue` is supplied, the first element **in the array** will be used as the initial `accumulator` value and skipped as `currentValue`.

-  `reduce()`  uses like sum all the values of an array or in an object array, counting for particular items in the array, grouping objects,max,min,average,filter,reverse,unique values,piping, currying and function composition. removing duplicates, etc

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
---


### every

- The `every()` method checks if  ```all elements`` in an array ``pass a test`` (provided as a function).

- The method returns ```true if all the elements pass the test```, and *false* if otherwise

  ```js
  let userInputs  = [
      { name : 'Shine Shine', isEmpty: true },
      { email : 'shineshine@gmail.com', isEmpty: true},
      { password : '123123', isEmpty: true},
  ];
  userInputs.every((userInput) => userInput.isEmpty === true) ? console.log('ok') :console.log('rquired fields') 
  ```
----

### some

- At least one element in the array that passes the condition, returning true or false as appropriate.

  ```js
  let userInputs  = [
      { name : 'Shine Shine', isEmpty: false },
      { email : 'shineshine@gmail.com', isEmpty: true},
      { password : '123123', isEmpty: true},
  ];
  userInputs.some((userInput) => userInput.isEmpty === false) ? console.log('ok') :console.log('rquired fields')  // rquired fields
  ```

---

### includes

- Determines whether the array contains a value, returning `true` or `false` as appropriate.

- `includes()` is case-sensitive

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  console.log(frontEnd.includes('vue')) // true
  console.log(frontEnd.includes('jquery')) // false
  ```

---

### join

-  The *join*() *method* returns the array as a string. The elements will be separated by a specified separator.

```js
let nums = [1,2,3,4,5];
console.log(nums.join('|')); // 1|2|3|4|5
```

---


### toString

- Convert  an array to string

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  let str = frontEnd.toString()
  console.log(str) //html,css,js,vue,react,angular
  ```








### Summery 

```dart
//length,pus(),po(),shift(),unshift(),splice(),slice(),contact(),indexOf(),findIndex(),find(),sort(),reverse(),filter(),forEach(),
// map(),reduce(),indules(),every(),some(),join()



// Create array with array literal
let ar1 = ['vue','react','angular']; 



// Create array with array constructor (not recommended way)
let ar2 = new Array("vue",'react','angular') 




// length property
console.log(ar1.length) // 3




//push method
//add a new array element at the end of the array.
let ar3 = ['vue','react'];
console.log(ar3.push('angular')) // 3





//unshift method
//add a new item at the beginning of the array.
let ar4 = ['vue','react'];
console.log(ar4.unshift("angular")) // 3





//pop method
//remove the last item from an array
let ar5 = ['vue','react','angular'];
console.log(ar5.pop())//angular




//shift method
//remove an element from the beginning of an array
let ar6 = ['vue','react'];
console.log(ar6.shift()) // vue




//splice method ***
//splice method can be used to add new items to an array or delete elements in an array
//splice(startIndex, deleteCount, item 1, item 2….) 
let ar7 = ['Html','css','php','mysql'];
ar7.splice(2,0,'bootstrap','js','jquery');
console.log(ar7); // [ 'Html', 'css', 'bootstrap', 'js', 'jquery', 'php', 'mysql' ]





//slice method
//Select part of an array and return its content
//if omitte end argument,that method slices out the rest of the array.
//slice([start], [end])
let ar8 = ['html','css','bootstrap','javascript','jquery'];
let selectLangs = ar8.slice(3,4);
console.log(selectLangs); // ["javascript"]
console.log(ar8.slice(3)); // ["javascript",jquery"]





//concat (merg)
//creates a new array by merging (concatenating) existing arrays
//The concat() method can take any number of array arguments
//The concat()method can also take strings as arguments

let ar9 = ['html','css','bootstrap'];
let ar10 = ['php','node','danjago'];
let ar11 = ['mysql','mongodb'];
console.log(ar9.concat(ar10,ar11)) // ["html", "css", "bootstrap", "php", "node", "danjago", "mysql", "mongodb"]
console.log(ar9.concat('javascript'));//  ["html", "css", "bootstrap", "javascript"]





//indexOf ***
//searche the array for the specified item, and returns its position of index
//method can take two arguments ,first arg is specified item ,and second arg is start
let ar12 = ['html','css','js','vue','react','angular']
console.log(ar12.indexOf("vue")) // 3
let ar13 = ['html','css','js','vue','js','angular']
console.log(ar13.indexOf("js",3)) // 4




//findIndex ***
//Returns element or value in the array
let ar14 = ['html','css','js','vue','react','angular']
console.log(ar14.find((item,index,array) => index == 1))// css
console.log(ar14.find((item,index,array) => item == 'vue'))// css




//Sort ***
//Sorts the elements of an array in place and returns the array.
//The default sort order is ascending.
let nums = [4, 1, 3, 2]
// smallest to largest or ascending
console.log(nums.sort()) // [1, 2, 3, 4] 
// smallest  to smallest or decending
console.log(nums.sort((a, b) => b - a)) // [4, 3, 2, 1]




//filter ***
//filter method  returns an array of all matching or condition true  elements  by the callback function.
let users = [
    {name:'shine shine',work : 'dev'},
    {name:'ko ko',work : 'ceo'},
    {name:'Tun Tun',work : 'account'},
    {name:'Tun Tun',work : 'dev'},
]
let filter = users.filter(item => item.work == 'dev');
console.log(filter); // [{name:'shine shine',work : 'dev'},{name:'Tun Tun',work : 'dev'},]





//forEach ***
let ar15 = ['html','css','bootstrap'];
ar15.forEach((item,index,arr) => console.log(`${item} is index ${index} of ${arr} array`))
// html is index 0 of html,css,bootstrap
// css index 1 of html,css,bootstrap
// bootstrap is index 2 of html,css,bootstrap




//map
//When we need to iterate and return the data for each element – we can use map
let ar16 = [1,2,3,4,5];
console.log(ar16.map(val => val *2)) //[ 2, 4, 6, 8, 10 ]





//every
//The method returns true if all the elements pass the test, and false if otherwise
let userInputs  = [
    { name : 'Shine Shine', isEmpty: true },
    { email : 'shineshine@gmail.com', isEmpty: true},
    { password : '123123', isEmpty: true},
];
console.log(userInputs.every(val => val.isEmpty === true)) // true
   




//some
// At least one element in the array that passes the condition, returning true or false as appropriate.
let userInputs1  = [
    { name : 'Shine Shine', isEmpty: false },
    { email : 'shineshine@gmail.com', isEmpty: true},
    { password : '123123', isEmpty: true},
];
console.log(userInputs1.every(val => val.isEmpty === false)) // false





//includes
//Determines whether the array contains a value, returning `true` or `false` as appropriate.
let ar17 = ['html','css','js','vue','react','angular']
console.log(ar17.includes('vue')) // true




//join
// returns the array as a string. The elements will be separated by a specified separator.
let ar18 = [1,2,3,4,5];
console.log(ar18.join('|')); // 1|2|3|4|5



//toString
//Convert  an array to string
let ar19 = ['html','css','js','vue','react','angular']
let convert = ar19.toString()
console.log(convert) //html,css,js,vue,react,angular
```







https://www.freecodecamp.org/news/the-javascript-array-handbook/

[
Why do you need to know about Array-like Objects?](https://blog.greenroots.info/why-do-you-need-to-know-about-array-like-objects-ckgsynazh07er06s18ppn32n0)

[5 useful tips about the JavaScript array sort method](https://blog.greenroots.info/5-useful-tips-about-the-javascript-array-sort-method-ckfs2cifq00eju9s17dfy3jq8)

[Ways to Empty an Array in JavaScript and the Consequences](https://blog.greenroots.info/ways-to-empty-an-array-in-javascript-and-the-consequences-cjwt45q9d002h2fs1kz5a77a2)

[Build your JavaScript Muscles with map, reduce, filter and other array iterators](https://blog.greenroots.info/build-your-javascript-muscles-with-map-reduce-filter-and-other-array-iterators-cjyo22miw000xzss1ydfqveib)

[Why do you need to know about the JavaScript Array at() method?](https://blog.greenroots.info/why-do-you-need-to-know-about-the-javascript-array-at-method-ckoskkkee0ftmbws1ag0b4udt)
