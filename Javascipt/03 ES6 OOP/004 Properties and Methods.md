# Property  and Methods



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







```js
/*Properties 
 - Properties are used to store state, or data in our class.
 - In Js all properties are public by default.
 - this keyword refer to current instance object.
*/    
class Car{
    engine = "Four Stroke"; name;  // public
    constructor(name){ // construnctor method
        this.name = name  // instance properties
    }
}
let toyota = new Car("toyota") //create object
console.log(toyota.name,toyota.engine)  //accessing  property

/* Method
  - Methods are used to perform actions
  - Constructor method is speical method and called each time the class object is initialized.
  - In Js all methods are public by default
*/  
class Car{
    constructor(make,model){ // construnctor method
        this.make = make; this.model = model;  // instance properties
    }
    //no need function keyword in class method
    info(){ return `${this.make} : ${this.model}`} // public method  
}
let toyota = new Car("toyota",2020) // create object
console.log(toyota.info()); //Calling Methods
```



