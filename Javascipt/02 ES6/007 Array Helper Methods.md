## Array Helper Methods 

 -` forEach, for...of, map, filter, find, every, some, reduce`





### forEach

- To loop over array by executing a provided callback function for each element in an array.

- When we need to iterate over an array – we can use `forEach`, `for` or `for..of`.

  ```js
  let frontEnd = ['html','css','bootstrap'];
  frontEnd.forEach((item,index,arr) => alert(`${item} is index ${index} of ${arr}`))
  // html is index 0 of html,css,bootstrap
  // css index 1 of html,css,bootstrap
  // bootstrap is index 2 of html,css,bootstrap
  ```



### for...of  Loop(ES6 )

- The ``for...of`` statement creates a loop Iterating over iterable objects including ```Array, String, Map, Set, arguments``` and so on

- `for(variable of object ){}`

  ```js
  // array
  let langs = ['vue','react','angular'];
  for(lang of langs){
      document.write(lang + "<br/>");  
  }
  
  // string
  let name = "Julian";
  for(str of name){
      document.write(str + "<br>");
  }
  ```

  



### map

- The `map()` function loops over every element in the array,

- When we need to iterate and return the data for each element – we can use `map`.

  ```js
  let nums = [1,2,3,4,5];
  let map = nums.map(item => item * 2);
  console.log(map); // (5) [2, 4, 6, 8, 10]
  ```



### filter

- `filter` method  returns an array of all ``matching or condition true``  elements  by the `callback` function.

- The `filter()` method **creates a new array** 

  

  ```js
  let users = [
      {name:'Jlian',work : 'dev'},
      {name:'ko ko',work : 'ceo'},
      {name:'Tun Tun',work : 'account'},
      {name:'Tun Tun',work : 'dev'},
  ]
  let filter = users.filter(item => item.work == 'dev');
  console.log(filter); // [{name:'Jlian',work : 'dev'},{name:'Tun Tun',work : 'dev'},]
  ```



### find


- Find specific item them return  `element or value ` in the array, 

- `find((item,index,array) => //code)`

  ```js
  let frontEnd = ['html','css','js','vue','react','angular']
  console.log(frontEnd.find((item,index,array) => item == 'vue')) //vue
  ```



### every

- The method returns ```true if all the elements pass the test```, and *false* if otherwise

- The `every()` method checks if  ```all elements`` in an array ``pass a test`` (provided as a function).

  ```js
  let userInputs  = [
      { name : 'Jlian', isEmpty: true },
      { email : 'Jlian@gmail.com', isEmpty: true},
      { password : '123123', isEmpty: true},
  ];
  userInputs.every((userInput) => userInput.isEmpty === true) ? console.log('ok') :console.log('rquired fields') 
  ```



### some

- At least one element in the array that passes the condition, returning true or false as appropriate.

  ```js
  let userInputs  = [
      { name : 'Jlian', isEmpty: false },
      { email : 'Jlian@gmail.com', isEmpty: true},
      { password : '123123', isEmpty: true},
  ];
  userInputs.some((userInput) => userInput.isEmpty === false) ? console.log('ok') :console.log('rquired fields')  // rquired fields
  ```





### reduce ( ECMAScript 5 (ES5))

- The `reduce()` method reduces the array to a single value.

- The `reduce()` method executes a provided function for each value of the array (from left-to-right).

- The return value of the function is stored in an accumulator (result/total).

- ```reduce(function(total, currentValue, currentIndex, arr), initialValue)``

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


