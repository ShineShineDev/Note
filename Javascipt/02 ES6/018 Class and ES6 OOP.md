## What is OOP

- `OOP stands for Object-Oriented Programming`

- `Object-oriented programming is a programming paradigm based on the concept of real objects`

- ` In traditional procedural programming funtions use varibales from different place this way your code maked spgaties code`

- `The main aim of OOP is to bind together the data and the functions `

  

## Advantages of OOP

- `Reuse of code through inheritance (DRY) `

- `Flexibility through polymorphism `

- `eparation-of-concerns (Modularity) `

- `Problem solving thinking like real world`

- `Combine into a single unit (data and the methods ) Encapsulation `

- ` Design Benefits For Complex software architecture `

- `Software Maintenance`

- `Easy troubleshooting`

- `Better productivity. `

  

## Core concepts of OOP 

- `Abstraction : displaying only essential information and hiding the details.Data abstraction can be used to provide security for the data from the unauthorized methods.`
- `Encapsulation  : bundling data and methods,that work on that data within a single unit. Encapsulation can be also used to hide both data and  methods member.we use Encapsulation to implement abstraction.Three access modifiers are private, public and protected.`
- `Inheritance : refers to a class able to inherit methods and properties from  parent class  . Inheritance creating clean and reusable code, avoiding repeats. `
- `Polymorphism : allows us to perform a single action in different ways. polymorphism allows you to define one interface and have multiple implementations( a method to do different things based on the object). Types of polymorphism and method overloading(static polymorphism) & overriding (dynamic polymorphism). `



## OOP features 

- `Class`

- `Object `

- `Property `

- `Methods `

- `Access modifier`

- `Getter and Setter`

- `Static`

- `Inheritance`

- `Interfaces `

- `Abstract`

  

----



## OOP In JS

- `JavaScript is a prototype-based object oriented programming.`
- `But  ES6 is  introduce  class keyword to create class just like other programing language(class-based programming)`

---





  #### Create a  Class

  - `a class is a blueprint(template) for creating objects `

  - `Class can define properties and the methods common to all objects`

  - `class  keyword to create a class`

  - `A class is a type of function in JS`

  - `Class name should  start with firstCase upper`

  - `A class does not allocate memory space `

    ```js
      class Car{}
    ```

-----

  



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

-----

  



  #### Property 

  - `properties are used to store state, or data in our class,`

  - `In Js all properties are public by default`

  - `this keyword refer to current instance object  `

    ```js
    class Car{
        number = 12; // publi
        className;  // public
        constructor(name){ // construnctor method
          this.className = name  // instance properties
        }
    }
    
    let toyota = new Car("toyota") // create object
    console.log(toyota.number)  //  accessing propert
    console.log(toyota.className)  // accessing propert
    ```


----

  



  #### Method

  - `Methods are used to perform actions`

  - `Constructor method is speical method and called each time the class object is initialized.`

  - `In Js all methods are public by default`

    ```js
    class Car{
        constructor(make,model){ // construnctor method
          this.make = make;
          this.model = model;
        }
        info(){ // public method , and no need function keyword in class method
            return `${this.make} : ${this.model}`
        } 
    }
    
    let toyota = new Car("toyota",2020) // create object
    console.log(toyota.info());
    ```


-----

  



  #### Public and  Private declarations

  - `Public declaration means everyone is allowed to access`

  - `Private declaration are visible only from inside class `

  - `Protected declaration are not implemented in Js on the language ,But Dev still use by Convenienting`

     
    
    ````js
    class Car{
        #EngineType = "Four Stoke" ; // private property,abstructions
        
        constructor(brand,model = 2020) { // constructor method
          this.brand = brand; // instance proprty
          this.model = model
        } 
        #engine(){ // private method
          return `${this.#EngineType } Engine`;
        }
        start(){  // public method
            return `${this.brand} ${this.model}, ${this.#engine()} is started !`
        }
        stop(){
           return `${this.brand} ${this.model}  ${this.#engine()}  is stoped !`
        }
      }
    let toyota = new Car("toyota",2022);
    toyota.start();
    toyota.stop(); 
    toyota.#engine() // can't call,because engine is private method
    ````
    

----

​    

  #### Statics Properties and Methods

  - `Static methods and propert are called without instantiating their class and are also not callable when the class is instantiated`

  - `The  static keyword defines a static method or property for a class. `

    ```js
    class Car{
        static classType = "Car"
        constructor(make,model){
            this.make = make;
            this.model = model
        }
        static start(){
            return `Car is Started`
        }
        static stop(){
             return `Car is Stoped `
        }
        info(){
            return `${this.make} : ${this.model}`
        }
    }
    console.log(Car.classType) // Car
    console.log(Car.start()) // Car is Started
    console.log(Car.stop())  // Car is Stoped 
    let toyota = new Car("toyota",2020) // create object
    console.log(toyota.info())  // toyota : 2020
    console.log(toyota.start()) //  toyota.start is not a function 
    ```
    
    
    
    ###### Statics member in sub-classed

    - ```js
      class Vehcial{
          static parentClass = "Vehcial";
      constructor(make,model){
              this.make = make;
              this.model = model
          }
          static start(){
              return `Car is Started from parent Vehcial class`
          }
          static stop(){
               return `Car is Stoped from parent Vehcial class`
          }
          info(){
              return `${this.make} : ${this.model} from Vehcial class`
          }
      }
      class Car extends Vehcial{
          static childClass = "Car";
          constructor(make,model){
             super(make,model);
          }
          // Overriding 
          static stop(){
              return `Car is Stoped from Car calss`
          }
          // own
          static flyMode(){
              return `Car is runing in the air with fly mode`
          }
      }
      
      // static methods and property
      console.log(Car.parentClass) // Vehcial
      console.log(Car.childClass) // Car 
      console.log(Car.start()) //  Car is Started from parent Vehcial class
      console.log(Car.stop()) // Car is Stoped from Car calss
      console.log(Car.flyMode()) // Car is runing in the air with fly mode
      
      //instance method
      let toyota = new Car("toyota",2020) 
      console.log(toyota.info()) // toyota : 2020 from Vehcial class"
      
      ```
    
    
    
    ###### Calling static members from non-static members 

    - `Static members are not directly accessible using the this keyword from non-static methods.`

    - `If you want to call from non-static to static you can call by using className.static_method_name()| calssName.static_property_name or this.constructor.static_method_name() ` |  `this.constructor.static_property_name  `

    - ` In order to call a static method or property within another static method of the same class, you can use the this keyword.`

      ```js
      class Vehcial{
          static name = "Vehcial";
      
         // non-static method to static method with  class name
          start(){
              return Vehcial.startWithStaticMethod();
          }
      
          // non-static method to static property with constructor
          stop(){
               return `${this.constructor.name} is Stoped`
          }
      
          // static method to static property
          static startWithStaticMethod(){
              return `${Vehcial.name} start from static method`
          }
         // static method to static property with this.keyword
         static stopWithStaticMethod(){
               return `${this.name} is Stoped from static method`
          }
          
      }
      let car = new Vehcial();
      console.log(car.start()); // Vehcial start from static method
      console.log(car.stop()); // Vehcial is Stoped
      Vehcial.stopWithStaticMethod() //Vehcial is Stoped from static method
      
      ```


----

  

  #### Super method 

  - `if you want to call parent(base) class method you can use super keyword , But when you called super() method it will call parent's constructor `

    ```js
    class Vehcial{
         constructor(make,model){
           this.make = make;
             this.model = model
         }
         infoFromParent(){
             return `${this.make} : ${this.model}`
         }
    }
    class Car extends Vehcial{
        constructor(make,model){ 
            super(make,model) // call parent constructor
        }
        infoFromChild(){
            return super.infoFromParent() // call parent infoFromParent() methods
        }
    }
    let toyota = new Car('toyota',2020);
     toyota.infoFromChild() // "toyota : 2020"
    
    ```
    

-----

  

  #### Getters and Setters

  - `Getters and setters methods are used to protect data and secure code `

  - `set keyword use to set or update properties(variables).Getter also known as mutators. Even if the setter is a method, you do not use parentheses when you want to set the property value: `

  - `get keyword use to get properties(variables).Getter also known as accessors . Even if the getter is a method, you do not use parentheses when you want to get the property value.`

  - `The name of the getter/setter method cannot be the same wiht name of the class properties(variables).So for calss property you can use naming convenction by using underscore character(-)`

  - `get and set keyword are introduced  in ES5,this lesson we will use this feature` 

    ```js
    class User{
        constructor(name,age,carrer){
            this.name = name,
            this.age = age,
            this._carrer = carrer // property name with underscore 
        };
        get carrer(){
            return this._carrer;
        };
        set carrer(carrer){
            this._carrer = carrer;
        };
    }
    let userOne = new User("shineshine",21,"dev");
    //get
    userOne.carrer // "dev"
    //set 
    userOne.carrer = "programer"; 
    userOne.carrer // programer;
    ```


-----



#### Interface in ES6  

- ` Interface used to provide contract specification for class and also achieve abstraction`

- `Interface have only abstract methods (only method signature, no body) and property.All methods and properties must be implement `

- `Interface can not be instantiated just like class.`

- `Syntax : interface interfaceName{ myPro = 1; myMethods() }`

- `Interface useful for abstraction,loose coupling`

- ` javascript there is no way to declare an interface like other language's as php or java.But es6-interface achieve interface for us `  

  

  - Difference between Class and Interface

  | Class                                                        | Interface                                                    |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | In class, you can instantiate variable and create an object. | In an interface, you can't instantiate variable and create an object. |
  | Class can contain concrete(with implementation) methods      | The interface cannot contain concrete(with implementation) methods |
  | The access specifiers used with classes are private, protected and public. | In Interface only one specifier is used- Public.             |

  ##### es6-interface  https://www.npmjs.com/package/es6-interface

  ```js
  npm install es6-interface --save // installing
  
  // require library
  const Interface = require('es6-interface')
  
  //Declaring an interface  
  const Drive = {
      drive: function(arg1) {
      }
  };
  
  // car class
  class Car extends Interface(Drive) {
    constructor() {
      super()
    }
    // implement method
    drive(arg){
    }
  }
  // Aircraft
  class Aircraft extends Interface(Drive) {
    constructor() {
      super()
    }
    // implement method
    drive(arg){
    }
  }
  
  
  ```

  ##### interface in PHP

  ```php
   interface Drive{
       function drive($arg) // abstract method
   }
  
   class Car implement{
        puplic function __construct(make,model){
            this->make = make;
            this->model = model;
        }
        public function drive($arg){
            return this->make . 'dirved' ;
        }
   }
  
  
  class Aircraft implement{
        puplic function   __construct(make,model){
            this->make = make;
            this->model = model;
        }
        public function drive($arg){
            return this->make . 'dirved' ;
        }
   }
  
  
  $toyota = new Car("toyota",2020);
  $toyota->drive('data');
  
  $boeing = new Aircraft("747",2015);
  $boeing->dirve('data');
  ```

---

















.



