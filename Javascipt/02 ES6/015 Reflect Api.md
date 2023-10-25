## Reflect API

-  `ES6 introduces a new global object called Reflect and Proxy objects,that allow us to do Meta-Programming with ease.` 
-  `JavaScript already has reflection features even though they were not officially called that by the community or the specification. For example, methods like Object.keys(),Object.getOwnPropertyDescriptor(), and Array.isArray() are the classic reflection features.`

-  `Reflect API allows you to call methods, construct objects, get and set properties, manipulate and extend properties.`

-  `The Reflect API is important because it allows you to develop programs and frameworks that are able to handle dynamic code.`



> `Reflect API in ES6 allows us to inspect, or modify classes, objects, properties, and methods of a program at runtime`



### Metaprogramming

> `Wikipedia describes Metaprogramming like this`
>
> `Metaprogramming is a programming technique in which computer programs have the ability to treat other programs as their data. This means that a program can be designed to read, generate, analyze, or transform other programs, and even modify itself while running.`
>
> `Meta-programming is an act of writing code that manipulates code.`

- `Introspection :  Code is able to inspect itself. It is used to access the internal properties such that we can get the low-level information of our code. Some examples of JavaScript operators that are used for introspection are **typeof, instanceof** etc.`
- `Self-Modification :  As the name suggests, code is able to modify itself.`
- `Intercession :  Refers to code modifying the default behavior of a programming language. Intercession involves modifying semantics of the programming language or adding new constructs to the program at runtime.`







####  Reflect object

- `Unlike the most global objects,Reflect is a static object`

- `The Reflect is not a constructor. It means that you cannot use Reflect with the new operator or invoke. It is similar to the Math and JSON objects. All the methods of the Reflect object are static.`

- `Reflect methods return boolean true (success) /false (failure) whereas Object methods throw an exception if the method execution fails`

- `No try/catch blocks are required with Reflect rather just a simple if conditional that is easier and cleaner to handle than error exceptions`

  ```js
  const obj = {};
  try {
    Object.defineProperty(obj, 'property', 'value');
  } catch (e) {
    // failure that needs to be handled
  }
  //No try/catch blocks
  if (Reflect.defineProperty(obj, 'property', 'value')) {
    // success
  } else {
    // failure
  }
  ```





#### Commonly Reflect object  

- `Reflect.apply()` – call a [function](https://www.javascripttutorial.net/javascript-function/) with specified arguments.
- `Reflect.construct()` – act like the `new` operator, but as a function. It is equivalent to calling `new target(...args)`.
- `Reflect.defineProperty()` – is similar to `Object.defineProperty()`, but return a Boolean value indicating whether or not the property was successfully defined on the object.
- `Reflect.deleteProperty()` – behave like the `delete` operator, but as a function. It’s equivalent to calling the `delete objectName[propertyName]`.
- `Reflect.get()` – return the value of a property.
- `Reflect.getOwnPropertyDescriptor()` – is similar to `Object.getOwnPropertyDescriptor()`. It returns a property descriptor of a property if the property exists on the object, or `undefined` otherwise.
- `Reflect.getPrototypeOf()` – is the same as `Object.getPrototypeOf()`.
- `Reflect.has()` – work like the `in` operator, but as a function. It returns a boolean indicating whether an property (either owned or inherited) exists.
  `Reflect.isExtensible()` – is the same as `Object.isExtensible()`.
- `Reflect.ownKeys()` – return an array of the owned property keys (not inherited) of an object.
- `Reflect.preventExtensions()` – is similar to `Object.preventExtensions()`. It returns a Boolean.
- `Reflect.set()` – assign a value to a property and return a Boolean value which is true if the property is set successfully.
- `Reflect.setPrototypeOf()` – set the [prototype](https://www.javascripttutorial.net/javascript-prototype/) of an object.





#### Reflect.apply()

- `Prior to ES6, you call a function with a specified this value and arguments by using the Function.prototype.apply()` 

- `Reflect.apply() also calls a target function with arguments as specified by the args parameter`

- `The Reflect.apply() provides the same feature as the Function.prototype.apply() but less verbose and easier to understand`

- `The two implementations are basically equivalent but Reflect.apply() is less verbose and easier to understand. Further, if the arguments list is null or undefined, Reflect.apply() will throw an exception whereas Function.prototype.apply.call() will call the function without any arguments`

- `Reflect.apply(target, thisArgument, argumentsList)`

  - `target : Target function to call`
  - `thisArgument is the value of this provided for the call to target.`
  - `argumentsList is an array-like object specifying the arguments with which target should be called`

  ```js
   function areaOfRectangle(width,height){
        return `area is ${width*height} ${this.units}`
  }
  const thisValue = {
        units:'Centimeters'
  }
  const argsList = [10,20]
  //more reliable and elegant way of solving
  const result = Reflect.apply(areaOfRectangle,thisValue,argsList) 
  console.log(result)
  //less reliable 
  let result2 = Function.prototype.apply.call(areaOfRectangle, thisValue, argsList);
  console.log(result2);
  ```





#### Reflect.construct() (in lieu of New Operator)

- `The Reflect.construct() method behaves like the new operator, but as a function. It is equivalent to calling the new target(...args) with the possibility to specify a different prototype`

- `Reflect.construct(target, argumentsList, newTarget])`

  - `target  is the target function to call.`
  - `argumentsList is an array-like object specifying the arguments with which target should be called.`
  - `newTarget is the constructor whose prototype should be used. This is an optional parameter. If no value is passed to this parameter, its value is targetparameter.`

  ```js
   class SpiderMan{
       constructor(firstName,lastName,movieName){
           this.firstName = firstName
           this.lastName = lastName
           this.movieName = movieName
        }
  	  get info(){
           return `${this.firstName} ${this.lastName} : ${this.movieName}`
        }
   }
  const Tom = ['Tom','Holland','No Way Home']
  const spider_one = Reflect.construct(SpiderMan,Tom)
  console.log(spider_one.info)
  
  const Tobey = ["Tobey","Maguire","Spider Man"]
  const spider_two = Reflect.construct(SpiderMan,Tobey)
  console.log(spider_two.info)
  ```

  







#### Reflect.get()

- That returns the value of properties.

- Reflect.get(target, propertyKey[, receiver])

  - **target** is the target object on which to get the property.

  - **propertyKey** is the name of the property to get.

  - **Receiver** is the value of this provided for the call to target if a getter is encountered. This is an optional argument.

  ```js
   class SpiderMan{
       constructor(firstName,lastName,movieName){
           this.firstName = firstName
           this.lastName = lastName
           this.movieName = movieName
        }
  	  get info(){
           return `${this.firstName} ${this.lastName} : ${this.movieName}`
        }
   }
  const Tom = ['Tom','Holland','No Way Home']
  const spider_one = Reflect.construct(SpiderMan,Tom)
  
  const movieName = Reflect.get(spider_one,'movieName')
  const firstName = Reflect.get(spider_one,'firstName')
  console.log(movieName)
  console.log(firstName)
  ```
  
  





#### Reflect.set()

- `This is a function that assign values to properties. It returns a Boolean that is true if the update was successful.`

- `Reflect.set(target, propertyKey, value[, receiver])`

  - **target** is the name of the property to get value to set.
  - **propertyKey** is the name of the property to get.
  - **Receiver** is The value of this provided for the call to target if a setter is encountered. This is an optional argument.

  ```js
   class SpiderMan{
       constructor(firstName,lastName,movieName){
           this.firstName = firstName
           this.lastName = lastName
           this.movieName = movieName
        }
  	  get info(){
           return `${this.firstName} ${this.lastName} : ${this.movieName}`
        }
   }
  const Tom = ['Tom','Holland','No Way Home']
  const spider_one = Reflect.construct(SpiderMan,Tom)
  Reflect.set(spider_one,'age',26)
  const age = Reflect.get(spider_one,'age') 
  console.log(age)
  
  ```







#### ES6 - Reflect.has()

- `This is the in operator as a function which returns a boolean indicating whether an own or inherited property exists.`

- `Reflect.has(target, propertyKey)`

  - **target** is the target object in which to look for the property.
  - **propertyKey** is the name of the property to check.

  ```js
   class SpiderMan{
       constructor(firstName,lastName,movieName){
           this.firstName = firstName
           this.lastName = lastName
           this.movieName = movieName
        }
  	  get info(){
           return `${this.firstName} ${this.lastName} : ${this.movieName}`
        }
   }
  const Tom = ['Tom','Holland','No Way Home']
  const spider_one = Reflect.construct(SpiderMan,Tom)
  Reflect.set(spider_one,'age',26)
  const isAgeAssign = Reflect.has(spider_one,'age') 
  console.log(isAgeAssign)
  
  ```













#### Reflect API in Array

- `And since arrays are objects in JavaScript, we can do likewise with arrays as well`

  ```js
  const array = ['John Doe'];
  Reflect.set(array, 1, 'Jane Doe'));
  console.log(array[1]);  // 'Jane Doe'Reflect.get(array, 1));
  console.log(array[1]);  // 'Jane Doe'Reflect.deleteProperty(array, 0));
  console.log(array);  // Array [, 'Jane Doe']
  ```

  



### Metaprogramming of Prior to ES6 

```js
//Meta-programming is act of writing code that manipulates code.that means that a program       can be designed to read,generate, analyzeand even modify itself while running.

//Self-Modification
let spiderMan = {
    name: 'Tom Holland',
    modifySelf: function(key, value) {spiderMan[key] = value} // modify itself
}
spiderMan.modifySelf('shooter', 'Web Fluid'); 

//Introspection (Reading the structure of the program or inspect )
Object.keys(spiderMan).forEach(key => {console.log(`${key} : ${spiderMan[key]}`)});

//Intercession (Change Semantics)
//Any object in JavaScript has a set of properties, and each of these properties has a descriptor,such as value(value of the property),writable,configurable,enumerable,get,set writable, configurable and enumerable set the behavior of that property.
Object.defineProperty(spiderMan, 'name', { writable: false });
spiderMan.name = "tobey maguire"; 
console.log(`${spiderMan.name} shooter is : ${spiderMan.name} `);

Object.defineProperty(spiderMan, 'shooter', {
    value: "Web Fluid",
    writable: false,  // when you set writable from true to false.this value will not change
});
spiderMan.shooter = "Organic Web"; 
console.log(`${spiderMan.name} shooter is : ${spiderMan.shooter}`);
```















```js
/*Meta-Programming vs Reflect objects
- ES6 introduces a new global object called Reflect and Proxy objects,that allow us to do     Meta-Programming with ease.
- Meta-programming is act of writing code that manipulates code.that means that a program     can be designed to read,generate, analyzeand even modify itself while running.
- Reflect API in ES6 allows us to inspect, or modify classes, objects, properties, and         methods of a program at runtime.
- JavaScript already has reflection features even though they were not officially called       that by the community or the specification. For example, methods like Object.keys(),         Object.getOwnPropertyDescriptor(),and Array.isArray() are the classic reflection features.
- The Reflect API is important because it allows you to develop programs and frameworks that   are able to handle dynamic code.
-Reflect object
 - Unlike most global objects, Reflect is not a constructor. 
 - You cannot use it with a new operator or invoke the Reflect object as a function.
 - All properties and methods of Reflect are static (just like the Math object or JSON)
 - Reflect methods return boolean true(success) /false(failure).So you don't need try/catch    to handel error exceptions,just use simple if conditional
*/
if (Reflect.defineProperty(obj, 'property', 'value')){}else{} //No try/catch blocks
class SpiderMan{
     constructor(name,movieName){ this.name = name; this.movieName = movieName }
	 get info(){return `${this.name} : ${this.movieName}`}
 }
const Tom = ['Tom Holland','No Way Home']; 
spider_one = Reflect.construct(SpiderMan,Tom)
Reflect.set(spider_one,'age',26) //Generate (Meta-Programming)
console.log(Reflect.has(spider_one,'age')) // inspect (Meta-Programming) 
console.log(Reflect.get(spider_one,'movieName')) //read (Meta-Programming)  
```





