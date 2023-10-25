  # Statics Properties and Methods

  - `Static methods and propert are called without instantiating their class and are also not callable when the class is instantiated`

  - `The  static keyword defines a static method or property for a class. `

    ```js
    class Car{
        static classType = "Car"
        constructor(make,model){
            this.make = make;
            this.model = modela
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

    

    

    

    ### Statics member in sub-classed

    ```js
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

    

    

    

    ### Calling static members from non-static members 

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









```js
/* Static and Non-static  
 	- Static members are not directly accessible using the this keyword from non-static methods.
 	- If you want to call from non-static to static you can call by using className.static_method_name()|       calssName.static_property_name or this.constructor.static_method_name()  |      				           this.constructor.static_property_name  
   - In order to call a static method or property within another static method of the same class, you can      use the this keyword.
*/
class Vehcial{
    static name = "Vehcial";
    
    // non-static method to static method with class name
    start(){ return Vehcial.startWithStaticMethod() }
    
    // non-static method to static property with constructor
    stop(){ return `${this.constructor.name} is Stoped` }
    
    // static method to static property
    static startWithStaticMethod(){ return `${Vehcial.name} start from static method`}
    
   // static method to static property with this.keyword
   static stopWithStaticMethod(){  return `${this.name} is Stoped from static method`}
}
let car = new Vehcial();
console.log(car.start()); // Vehcial start from static method
console.log(car.stop()); // Vehcial is Stoped
Vehcial.stopWithStaticMethod() //Vehcial is Stoped from static method
```

