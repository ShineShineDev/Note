

## Object

- `Objects are one of JavaScript's data types.`
- `Objects are used to store key/value (name/value) collections.`
- `In JavaScript, almost "everything" is an object.`
- `In JavaScript, objects are king. If you understand objects, you understand JavaScript.`
- `Objects written as name value pairs are similar to`

  - `Associative arrays in PHP`
  - `Dictionaries in Python`
  - `Hash tables in C`
  - `Hash maps in Java`
  - `Hashes in Ruby and Perl`






#### Create Object 

- `There are different ways to create new objects:`

  - `Create a single object, using an object literal`

  - `Create a single object, with the new keyword `

  - `Define an object constructor, and then create objects of the constructed type.`

  - `Create an object using Object.create().`

    ```js
    //Create Object with object literal
    const person = {}; 
    
     //Create Object with new Keyword (not recommended)
    const person = new Object(); //For readability, simplicity and execution speed, use the object literal method.
    ```

    

  



#### Object Properties

- `The named values, in JavaScript objects, are called properties.`

  ```js
  const person = {
    name: "Julian",
    age: 23,
  };
  ```





#### Object Methods

- `Methods are actions that can be performed on objects.`

- `A method is a function stored as a property.`

- `Object properties can be both primitive values, other objects, and functions.`

- `An object method is an object property containing a function definition.`

  ```js
  const person = {
    name: "Julian",
    age: 23,
    sayHi : function() {
      return "Hi"
    }
  };
  ```





#### Accessing Object Properties and Methods

```js
// Create an object:
const person = {
    name: "Julian",
    age: 23,
    info : function() {
        return this.name + this.age
    }
}
person.name //Accessing Property
person.info(); //Accessing Methods
person.info // If you access a method without the () parentheses, it will return the function definition
```





####  this Keyword

- `In JavaScript, the this keyword refers to an object`.

- `Which object depends on how this is being invoked (used or called).`

-  `this keyword refers to different objects depending on how it is used`

  ```js
  const person = {
      name: "Julian",
      age: 23,
      info : function() {
          return this.name + this.age
      }
  }
  ```

  | In an object method, `this` refers to the **object**.        |
  | ------------------------------------------------------------ |
  | Alone, `this` refers to the **global object**.               |
  | In a function, `this` refers to the **global object**.       |
  | In a function, in strict mode, `this` is `undefined`.        |
  | In an event, `this` refers to the **element** that received the event. |
  | Methods like `call()`, `apply()`, and `bind()` can refer `this` to **any object**. |

  





#### Objects are Mutable

- Objects are mutable: They are addressed by reference, not by value.

  ```js
  const person = {
      name: "Julian",
      age: 23,
      info : function() {
          return this.name + this.age
      }
  }
  const human = person;  // Will not create a copy of person.
  x.age = 10;      // Will change both x.age and person.age
  The object x is not a copy of person. It is person. Both x and person are the same object.
  Any changes to x will also change person, because x and person are the same object.
  ```

  





####  Object Prototypes Methods and Properties

| Name                                                         | Description                                                 |
| :----------------------------------------------------------- | :---------------------------------------------------------- |
| [constructor](https://www.w3schools.com/jsref/jsref_object_constructor.asp) | Returns the function that created an object's prototype     |
| [keys()](https://www.w3schools.com/jsref/jsref_object_keys.asp) | Returns an Array Iterator object with the keys of an object |
| [prototype](https://www.w3schools.com/jsref/jsref_object_prototype.asp) | Let you to add properties and methods to JavaScript objects |
| [toString()](https://www.w3schools.com/jsref/jsref_object_tostring.asp) | Converts an object to a string and returns the result       |
| [valueOf()](https://www.w3schools.com/jsref/jsref_object_valueof.asp) | Returns the primitive value of an object                    |





```js
/* Object
- Objects are one of JavaScript's data types.Objects are used to store key/value (name/value) collections.
- In JavaScript, almost "everything" is an object.
- In JavaScript, objects are king. If you understand objects, you understand JavaScript.
- Objects written as name value pairs are similar to ,Associative arrays in PHP.Dictionaries in Python
  Hash tables in C, Hash maps in Java, Hashes in Ruby and Perl.
- There are different ways to create new objects like object literal,new keyword,Object.create()
*/  
const person = {};  //Create Object with object literal
//Create Object with new Keyword (not recommended)
const person = new Object(); //For readability, simplicity and execution speed, use the object literal
const person = {
  name: "Julian", //Properties
  age: 23,
  info : function() {this.name + this.age} //Methods
}
/* this keyword
   In an object method, *this* refers to the *object*.
   Alone, *this* refers to the 8global object*.
   In a function, *this* refers to the *global object*.
   In a function, in strict mode, *this* is *undefined*.
   In an event, *this* refers to the *element* that received the event.
   Methods like *call()*, *apply()*, and *bind()* can refer *this* to *any object*.
*/  

//Objects are mutable(They are addressed by reference, not by value.)
const human = person;  // Will not create a copy of person.
x.age = 20;      // Will change both x.age and person.age
```

