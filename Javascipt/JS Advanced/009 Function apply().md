## Function apply()

- `apply() method can write a method that can be used on different objects.`

- `The apply() method is similar to the call() method `

- `The Difference Between call() and apply()`

  - `The call() method takes arguments separately`
  - `The apply() method takes arguments as an array`
  - `The apply() method is very handy if you want to use an array instead of an argument list`
  
  ```js
  const person = {
    name: function() {
      return this.name   + " : " + this.age;
    },
    getInfo : function(profession,city){
        return `name : ${this.name}, age : ${this.age}, profession : ${profession}, city : ${city}`;
    }
  }
  const person1 = { name:"Wailain",age: 23}
  
  const person2 = { name:"Julian",age: 24}
  
  
  person.name.apply(person1); //'Wailain : 23'
  person.name.apply(person2); //'Julian : 24'
  
  //The apply() method can takes arguments separately.
  person.getInfo.apply(person1, ["Dev", "Mdy"]);
  
  //Arrays do not have a max() method, you can apply the Math.max().apply() method instead.
  Math.max(1,2,3);  // Will return 3
  Math.max.apply(null, [1,2,3]); // Will also return 3
  Math.max.apply(Math, [1,2,3]); // Will also return 3
  Math.max.apply(" ", [1,2,3]); // Will also return 3
  Math.max.apply(0, [1,2,3]); // Will also return 3
  ```
  
  



```js
/* Function apply()
  - apply() method can write a method that can be used on different objects.
  - The apply() method is similar to the call() method 
  - The Difference Between call() and apply()
    - The call() method takes arguments separately
    - The apply() method takes arguments as an array
   - The apply() method is very handy if you want to use an array instead of an argument list
*/   
const person = {
  name: function() {  return this.name   + " : " + this.age;},
  getInfo : function(profession,city){
      return `name : ${this.name}, age : ${this.age}, profession : ${profession}, city : ${city}`;
  }
}
const person1 = { name:"Wailain",age: 23}
const person2 = { name:"Julian",age: 24}

person.name.apply(person1); //'Wailain : 23'
person.name.apply(person2); //'Julian : 24'

//The apply() method can takes arguments separately.
person.getInfo.apply(person1, ["Dev", "Mdy"]);

//Arrays do not have a max() method, you can apply the Math.max().apply() method instead.
Math.max(1,2,3);  // Will return 3
Math.max.apply(null, [1,2,3]); // Will also return 3
Math.max.apply(Math, [1,2,3]); // Will also return 3
Math.max.apply(" ", [1,2,3]); // Will also return 3
Math.max.apply(0, [1,2,3]); // Will also return 3
```

