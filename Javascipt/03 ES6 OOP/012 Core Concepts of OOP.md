# Core concepts of OOP



#### What is OOP

- `Object oriented programming (OOP) is a programming  paradigm based on the concept of real world object`

- `Object Oriented programming (OOP) relies on the concept of classes and object`

- `Object oriented programming, program is divided into small parts called Objects`

- `Procedural(routines, subroutines, inline or functions) PP programming is a programming  paradigm  and it uses a list of instructions to tell the computer what to do step-by-step instructions like algorithm.Procedural programming is also referred to as imperative programming and also known as top-down languages. `

- `Functional programming (FP) is programing paradigm and it is  about passing data from function to function to function to get a result.They should avoid shared state, and side effects and data should be immutable.`

- `Programming paradigm  is a style of programming, a way of thinking about software construction. `

  





#### Advantages  

- `Simplicity(real world modeling or implements real life scenario)`
- `Re-usability(inheritance) : Don't Repeat Yoursel`
- `Modularity ( abstraction )`
- `Flexibility(Polomorphsim)`
- `Security(data hiding and encapsulation )`





  #### Inheritance ✔️

  - `What is :` 

    - `Inheritance provides a powerful and natural mechanism for organizing and structuring your software.`

    - `Child class to inherit commonly used state and behavior from other parent classes`

      

- `Child class`

  - `A class that inherits another class`

  - `Also known as derived class or subclass`

    

- `Parent class`

  - `The class that is being inherited by other class`

  - `Also known as super class or base class.`

    

- `Advantages  ` 

  - `Code reusability(Inherit to Avoid Duplication)`

  - `can modify(chnage) without existing base class`

    

- `Type of Inheritance`

  -  `Single inheritance` : ` one class inherits one class `

  - ` Multilevel inheritance` : `one class inherits another child class.`

  - ` Multiple inheritance` : `a class can inherit more than one class`

  - ` Hierarchical inheritance ` :  ` one parent class has more than one child class`

  - ` Hybrid inheritance` : ` combination of more than one type of inheritance`

    ​           ![TypeScript Inheritance - javatpoint](https://static.javatpoint.com/tutorial/typescript/images/typescript-classes-types-of-inheritance.png)



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
  // child or derived  or sub class 
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







#### Abstraction  ✔️

- `What is Abstraction : `

  -  `Hide complexity (hiding the details or unnecessary) `
  - `Show essential(showing simple)`

-  `Advantages of Abstraction : ` 

  - ` code readable and more simpler. Because reduce the complexity of the design level or implementation process of software.`
  - `from longer to small.Because abstraction doesn't show unnecessary things.`

- `Abstraction is related to both encapsulation and data hiding.`

- `Abstraction can be use Design level or Code implement level `

  

  > **Abstraction is a process of hiding the implementation details and showing only functionality to the user.**
>**you don't need to know how everything work ,you need to know how to use**

  





#### Encapsulation vs Abstraction

| Encapsulation                                                | Abstraction                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Data hiding(information hiding)                              | Detail hiding(implementation hiding).                        |
| Encapsulation groups together data and methods into a single unite | Exposing interface to the user and hiding the details of implementation. |

  ```js
  class Engine { 
      #fuel;#air; #isEngineRunning = false;
      constructor(fuel,air){
          this.#fuel = fuel;
          this.#air = air;
      }
  
     // show essential(simple)
      combustion(){ // toggle switch 
          if(!this.#isEngineRunning){ 
               this.#isEngineRunning  = true;
               return this.#startCombustion();
            }
          this.#isEngineRunning  = false ;
          this.#stopCombustion();
      }
  
      // hide  complexity (implementation)
      #startCombustion(){
          console.log("burnning : " +  this.#fuel + " + "  + this.#air + " => releasing energy...");
      }
          
      // hide  complexity (implementation)
      #stopCombustion(){
       console.log("Engine Stoped !");
      }
  } 
  
  class Car{
        #engine; // hide complexity
        constructor(make,model){
            this.make = make;
            this.model = model;
            this.#engine =  new Engine("gasoline","air");
        }
        // show essential(simple) or Exposing interfac
        startOrStop(){ //toggle switch 
            this.#engine.combustion();
        }
  }
  let lamborghini = new Car("lamborghini",2020);
  lamborghini.startOrStop(); // burnning : gasolin + 2020 => releasing energy...
  lamborghini.startOrStop(); // Engine Stoped !

  ```









#### Encapsulation  

- `What is :`

  - `binding the data and methods into a single unite or enclosed within the object (method operate on data)`
  - `can be also used to hide both data and  methods member.(private, public, protected)`
  - `The restricting of direct access to some of an object's components`

  

- `Publicly accessible methods(setter and getter) provided to retrieve and modify the values `

- `Advantages :  `

  - `prevent bugs resulting from shared mutable state(Avoid shared mutable state).Because data retrieve or hide`
  - `Program to an interface, not an implementation`
  - modular
  - `reducing tight coupling between components `

  - A small change in requirements should necessitate a correspondingly small change in the software
  
- ` Encapsulation used to implement abstraction `

- [see more](https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4)

  

  > `Encapsulation is the packing(capsule or a single unite) of data and methods`
  >
  > `Encapsulation means binding the code and data into a single unit.`

  

  ```js
  class User{
      #name;#age; // data restricting or hide 
      constructor(name,age){
          this.#name = name;
          this.#age = age;
      }
      // method operate on  data in a single unite
      get info(){ // get restricting data from public method wiht get keyword
        return this.#name +' ' + this.#age
      }
      getInfo(){
          return this.#name +' ' + this.#age
      }
      set updateName(name){
          this.#name = name
      }
      set updateAge(age){
          this.#age = age
      }
  }
  
  
  let shine = new User("shineshie",21);
  shine // User {#name: "shineshie", #age: 21}
  
  shine.info // shineshie 21
  shine.getInfo();  // shineshie 21
  
  shine.updateAge = 20;
  
  shine.updateName = "Tun Tun";
  
  shine // User {#name: "Tun Tun", #age: 20}
  
  
  // real example of Encapsulation with vue and vuex
  // an event dispatch to => actions commit to  => mutations change state
  
  <div id='app'>
      {{count}}
      <button @clikc='incrementCount(1)'>Increment</button>
  </div>
  const app = new Vue({
      el : '#app',
      computed : { 
          count(){  
             // retrieve state from public interface
             return this.$store.getters.getCount 
          }
      }
      methods: { 
         incrementCount(1){ // we use public interface to modify state
              this.$store.dispatch('changeState',1)
           }
      }
  })
  //create store and mutations                                        src/store.js
  const store = new Vuex.store({
       state : { 
           count : 0 // data restricting or hide 
       },
       gutters : { 
           getCount:state => {  // exposed state with public interface
               return state.count
           }
       },
       actions : {
           changeState(context,payload){  // exposed public interface to  modify state 
                  context.commit('increment',payload)
           }
       },
       mutations : { 
           increment(state,payload){ // modify state (this method should be private)
               state.count + payload
           }
       }
  })
  ```









#### Polymorphisms 

- `What is it ?`

  - `The word of polymorphism comes from greek poly : many , morphe(form) ` 

  - `Allows you to define one interface(smae method) and have multiple implementations or to do different things based on the object`

  - `According to Wikipedia, In programming languages and type theory, polymorphism is the provision of a single interface to entities of different types or the use of a single symbol to represent multiple different types.`

    

- `Advantage`

  - `flexible `
  - `Reducing coupling between two different functions`
  - `Reuse existing code`

- `Types of polymorphism and method  `

  - `Overloading (Static or Ad-hoc) ,(overloading polymorphism not avaliable  in dynamic language)` 
  - `Overriding(Run-tim or dynamic )`
  - Subtyping (Inclusion)
  - `Parametric  (template or generic ) (not in js)`
  
  
  ##### Dcuk Typing(overriding or Inclusion ) Polymorphisms  

  ```js
  // Example 1
  class Shape{
      calculateArea(){}
  }
  class Circle extends Shape{
      constructor(radius){
          super();
          this.radius = radius
      }
      calculateArea(){
          // formular pi * r2
         return  3.14 * (this.radius * this.radius)
      }
  }
  class Rectangle extends Shape{
      constructor(width,height){
          super();
          this.width = width;
          this.height = height
      }
      calculateArea(){
          return this.width * this.height
      }
  }
  
  
  let shpaes = [new Circle(3),new Rectangle(3,3) ]
  shpaes.forEach((shpae,index) => console.log(shpae.calculateArea())) 
  // 28.26
  // 9
  
  
  // Example 2
    class A{  
         display(){  
          document.writeln("A is invoked");  
        }  
    }  
    class B extends A{
    }  
  
    let b=new B();  
    b.display();  
  
    // Example 3 with prototype-based approach
    function A(){
        
    }  
    A.prototype.display=function(){  
      return "A is invoked";  
    }  
    function B(){  
    }  
      
    B.prototype=Object.create(A.prototype);  
  
    let a=[new A(), new B()]   
    a.forEach(function(msg){  
      document.writeln(msg.display()+"<br>");  
    });  
  ```





