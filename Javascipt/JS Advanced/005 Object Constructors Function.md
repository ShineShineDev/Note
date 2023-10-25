### Object Constructor Function

- `If you need a blueprint for creating many objects of the "same type".you can use  object constructor function`

- `On the other hand,ES6 available Class for Blueprint `

- `Name of constructor function should be upper-case first letter.`

- `Objects of the same type are created by calling the constructor function with the new keyword`

- `In JavaScript, the this keyword refers to an cureent  object`

  ```js
  //Single objects
  const person = 
    name: "Julian",
    age: 23,
    sayHi : function() { return "Hi"}
  };
  //object constructor function for many objects of same type
  function Person(name,age) {
    this.name = name;
    this.age = age;
  }
  const person_one = new Person("Julian",23)
  const person_two = new Person("Walian",24)
  ```





#### Adding Property Method to a Constructor

- `You can add new property and method  to an object constructor`

  ```js
  //object constructor function for many objects of same type
  function Person(name,age) {
    this.name = name;
    this.age = age;
    this.info = function() {
      return this.name + this.age;
    };
  }
  //add new property to an object constructor ( not recommended way)
  Person.nationality = "English"; //All instance object can get this property
  
  //add new property to an object constructor (recommended way)
  Person.prototype.nationality = "English"; //All instance object can get this property
  
  //add new method to an object constructor 
  Person.prototype.getInfo = function() {
      return this.name + this.age;
    };
  
  const person_one = new Person("Julian",23)
  const person_two = new Person("Walian",24)
  
  person_two.profession = 'Dev'; // this will be added to person_one.Not to person_two.(Not to any other person objects).
  console.log(person_one.nationality)
  console.log(person_two.nationality)
  ```
  
  



#### Built-in JavaScript Constructors

- `new String()  // A new String object`
- `new Number()  // A new Number object`
- `new Boolean()  // A new Boolean object`
- `new Object()  // A new Object object`
- `new Array()   // A new Array object`
- `new RegExp()  // A new RegExp object`
- `new Function() // A new Function object`
- `new Date()   // A new Date object`





```js
/* Object Constructor Function
 - If you need a blueprint for creating many objects of the "same type".you can use object constructor        function.
 - On the other hand,ES6 also available Class for blueprint 
 - Name of object constructor function should be upper-case first letter.
 - Objects of the same type are created by calling the constructor function with the new keyword`
 - this keyword refers to an cureent instance object
*/
const person = { name: "Julian",age: 23,sayHi : function() { return "Hi"}}; //Single objects
//object constructor function for many objects of same type
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.info = function() {return this.name + this.age}
}
//add new property to an object constructor ( not recommended way)
Person.nationality = "English"; //All instance object can get this property
//add new property to an object constructor (recommended way)
Person.prototype.nationality = "English"; //All instance object can get this property
//add new method to an object constructor 
Person.prototype.getInfo = function() {return this.name + this.age;} 
const person_one = new Person("Julian",23)
const person_two = new Person("Walian",24)
person_two.profession = 'Dev'; // this will be added to person_one.Not to person_two.(Not to any other person objects).

/* JavaScript have a lot of Objct  Constructors(Built-in JavaScript Constructors) like String(), Number(),
   Boolean(), Object(), Array(), RegExp(), Function(), Date()
*/   
```

