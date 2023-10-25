##  Object Prototype 

> `The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.`



- `In JavaScript, whenever a function or objects is created, the prototype property is added to that function automatically.` 

- `The Object.prototype object has some useful properties and methods such as toString() and valueOf()`.

  ```js
  let spiderMan = { shooter : 'Web fluid'};
  spiderMan.toString() //method from prototype,because the person object doesn’t have the toString() method,it’ll search for the toString() method in the person’s prototype object.
  
  console.log(spiderMan)
  ▼{shooter: 'Web fluid'}ℹ️
     shooter: "Web fluid"
     ►[[Prototype]]:Object
     
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  const personOne = new Person("Julian",23);
  personOne
  ▼Person {name: 'Julian', age: 23}
  	age : 23
  	name : "Julian"
  	►[[Prototype]]: Object
  ```
  
  
  
  



#### Prototype Inheritance (Prototype chain )

- `The Object.prototype is on the top of the prototype inheritance chain:`

- `All JavaScript objects inherit properties and methods from a prototype`

- `The prototype chain allows one object to use the methods and properties of its prototype objects via the [[prototype]] linkages.`

- `Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.`

- `Date objects inherit from Date.prototype`

- `Array objects inherit from Array.prototype`

- `Date objects and Array objects inherit from Object.prototype`.

  



#### Adding Properties and Methods to Objects

- `Sometimes you want to add new properties or methods to an object constructor or  all existing objects.`

- `The JavaScript *prototype* property allows you to add new properties or methods to object constructors`

  ```js
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  Person.prototype.nationality = "English";
  //you can not add a new property to an existing object constructor like this:
  Person.nationality = "English"; 
  
  // add new Method
  Person.prototype.info = function() {
    return this.name + ": " + this.age;
  };
  ```

  



#### Using Object.create

- `The Object.create() method creates a new object and allows you to specify an object that will be used as the new object's prototype.`

  ```js
  const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!
  ```





#### Create prototype and using it

- In JavaScript, all functions have a property named `prototype`. When you call a function as a constructor, this property is set as the prototype of the newly constructed object (by convention, in the property named `__proto__`).

- So if we set the `prototype` of a constructor, we can ensure that all objects created with that constructor are given that prototype

  ```js
  const personPrototype = {
    greet() {
      console.log(`hello, my name is ${this.name}!`);
    },
  };
  
  function Person(name) {
    this.name = name;
  }
  
  Object.assign(Person.prototype, personPrototype);
  // or
  // Person.prototype.greet = personPrototype.greet;
  ```

  



## [Prototypes and inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#prototypes_and_inheritance)

Prototypes are a powerful and very flexible feature of JavaScript, making it possible to reuse code and combine objects.

In particular they support a version of **inheritance**. Inheritance is a feature of object-oriented programming languages that lets programmers express the idea that some objects in a system are more specialized versions of other objects.

For example, if we're modeling a school, we might have *professors* and *students*: they are both *people*, so have some features in common (for example, they both have names), but each might add extra features (for example, professors have a subject that they teach), or might implement the same feature in different ways. In an OOP system we might say that professors and students both **inherit from** people.

You can see how in JavaScript, if `Professor` and `Student` objects can have `Person` prototypes, then they can inherit the properties, while adding and redefining those properties which need to differ.





#### Object() function

- `The Object()function has a property called prototype that references a Object.prototype object.`

- `JavaScript has the built-in Object() function. The typeof operator returns function if you pass the Object function to it.`

- :warning: `That Object() is a function, not an object. It’s confusing if this is the first time you’ve learned about the JavaScript prototype.`

  ```js
  typeof(Object)
  //
  console.log(Object.prototype);
  ```
  
  





## Summary

- The `Object()` function has a property called `prototype` that references a `Object.prototype` object.
- The `Object.prototype` object has all properties and methods which are available in all objects such as `toString()` and `valueOf()`.
- The `Object.prototype` object has the `constructor` property that references the `Object` function.
- Every function has a `prototype` object. This prototype object references the `Object.prototype` object via `[[prototype]]` linkage or `__proto__` property.
- The prototype chain allows one object to use the methods and properties of its `prototype` objects via the `[[prototype]]` linkages.
- The `Object.getPrototypeOf()` method returns the prototype object of a given object. Do use the `Object.getPrototypeOf()` method instead of `__proto__`.



```js
console.log(Array.prototype)

/*
  concat: ƒn concat()
  constructor: ƒn Array()
  copyWithin: ƒn copyWithin()
  entries: ƒn entries()
  every: ƒn every()
  fill: ƒn fill()
  filter: ƒn filter()
  find: ƒn find()
  findIndex: ƒn findIndex()
  forEach: ƒn forEach()
  includes: ƒn includes()
  indexOf: ƒn indexOf()
  join: ƒn join()
  keys: ƒn keys()
  lastIndexOf: ƒn lastIndexOf()
  length: 0n
  map: ƒn map()
  pop: ƒn pop()
  push: ƒn push()
  reduce: ƒn reduce()
  reduceRight: ƒn reduceRight()
  reverse: ƒn reverse()
  shift: ƒn shift()
  slice: ƒn slice()
  some: ƒn some()
  sort: ƒn sort()
  splice: ƒn splice()
  toLocaleString: ƒn toLocaleString()
  toString: ƒn toString()
  unshift: ƒn unshift()
  values: ƒn values()
*/
```





```js
/* Object Prototype 
  - The prototype object is special type of enumerable object to which additional properties can be            attached to it which will be shared across all the instances of it's constructor function. 
  - In JavaScript, whenever a function or objects is created, the prototype property is added to that         function automatically.
  - The Object.prototype is on the top of the prototype inheritance chain
  - The Object.prototype object has some useful properties and methods such as toString() and valueOf()
  - All JavaScript objects inherit properties and methods from a prototype
*/  
let spiderMan = { shooter : 'Web fluid'};
spiderMan.toString() //method from prototype,because the person object doesn’t have the toString() 
console.log(spiderMan) ►[[Prototype]]:Object

function Person(name, age) {this.name = name;this.age = age;}
const personOne = new Person("Julian",23);
console.log(personOne) ►[[Prototype]]:Object

Person.prototype.nationality = "English"; // add new property
Person.nationality = "English"; //you can not add a new property to an existing object constructor

Person.prototype.info = function() { return this.name + ": " + this.age}; // add new Method

//Create prototype and using it       
const personPrototype = {greet() { console.log(`hello, my name is ${this.name}!`)}};
function Person(name) {this.name = name;}
Object.assign(Person.prototype, personPrototype); // or
// Person.prototype.greet = personPrototype.greet;    
```

