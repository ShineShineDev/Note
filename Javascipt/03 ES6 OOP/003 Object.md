  #### Object 

  - `The object is an instance of a class.`

  - `Objects have the behaviors state (data) and behavior (code) of their class. `

  - `to create Object from existing class we can use new keyword`

  - `An object is an abstract data type`

    ```js
    let toyota = new Car()
    console.log(toyota)
    let honda = new Car("Honda");
    console.log(honda)
    ```





​	

```js
/* Class In JS
 - JavaScript is a prototype-based object oriented programming.
 - But ES6 is introduce  class keyword to create class just like other programing language (class-based      programming)
  - A class is like blueprint(template) which can generate objects. So, class helps to set the                classification of objects with its properties and capabilities.
  - Class can define properties and the methods common to all objects
  - Class  keyword to create a class
  - A class is a type of function in JS
  - Class name should  start with firstCase upper
  - Class does not allocate memory space
*/ 
class Car{//datas and methods are here}
class Human{//datas and methods are here}

/* Object 
  - The object is an instance of a class.
  - Objects have the behaviors state (data) and behavior (code) of their class.
  - To create Object from existing class we can use new keyword
  - Object can be a data structure, data, or method that has a memory location allocated
*/
let toyota = new Car()
console.log(toyota)
let honda = new Car("Honda");
console.log(honda)
```

