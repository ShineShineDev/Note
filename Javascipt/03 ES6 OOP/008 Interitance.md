

  # Inheritance 

  - `Inheritance is useful for code reusability(Inherit to Avoid Duplication): reuse properties and methods of an existing class when you create a new class.`

  - `JavaScript class inheritance is still prototype-based under the hood`

  - `The extends keyword use to inheritance from another class`

  - `super() method refers to the parent class constructor`. 

    ```js
    class Vehical{
        constructor(make,model){
            this.make = make;
            this.model = model
        }
        start(){
            return `${this.make} is Started`
        }
        stop(){
             return `${this.make} is Stoped `
        }
        info(){
            return `${this.make} : ${this.model}`
        }
    }
    class Car extends Vehical{
        constructor(make,model){ // child construnctor method
         super(make,model) // call parent calss construnctor
        }
        start(){ // Overriding 
            return this.make + " : started with wheel ! ";
        }
        fly(){ // add method
            return this.make + " : started with fly method "
        }    
    }
    
    let toyota = new Car("toyota",2020) // create object
    toyota.info(); // from parent class
    toyota.start(); // Overriding method
    toyota.fly(); //  added method in child class
    ```



```js
/* Inheritance 
  - Inheritance is useful for code reusability(Inherit to Avoid Duplication): reuse properties and methods      of an existing class when you create a new class.
  - JavaScript class inheritance is still prototype-based under the hood
  - The extends keyword use to inheritance from another class
  - super() method refers to the parent class constructor. Child class can access the methods of parent       class with super 
*/  
class Vehical{
    constructor(make,model){
        this.make = make;
        this.model = model
    }
    start(){ return `${this.make} is Started`}
    stop(){ return `${this.make} is Stoped `}
    info(){ return `${this.make} : ${this.model}`}
}
class Car extends Vehical{
    constructor(make,model){ super(make,model)} // call parent calss construnctor 
    start(){   return this.make + " : started with wheel ! ";} // Overriding 
    fly(){ return this.make + " : started with fly method "}  // add method  
    showInfo(){return super.info()} //Child can call methods of parent  class wiht super.methodName
}
let toyota = new Car("toyota",2020) // create object
toyota.info(); // from parent class
toyota.start(); // Overriding method
toyota.fly(); //  added method in child class
console.log(toyota.showInfo())
```

