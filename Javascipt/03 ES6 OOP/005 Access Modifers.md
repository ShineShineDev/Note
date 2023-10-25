# Access Modifiers

- `Access modifiers allow us to change the “visibility” and “access privileges” of a class (or module) member. `
- `An access modifier is a keyword that we can apply to a member of a class to control its access from the outside`.
- `By default, all members (properties, fields, methods, or functions) of classes are public accessible from outside the class.`







#### Public Access Modifiers

- `Class fields are public by default`

- `Public declaration means everyone is allowed to access`

  ```js
  class Car{
      constructor(brand,model = 2020) { // constructor method
        this.brand = brand; // instance proprty
        this.model = model
      } 
      start(){  // public method
          return `${this.brand} ${this.model} is started !`
      }
      stop(){
         return `${this.brand} ${this.model} is stoped !`
      }
  }
  ```

  



#### Private Access Modifiers

- `Private declaration are visible only from inside class`

- `  Private class members can be created by using a hash # prefix.`

- `Private members are not native to the language before this syntax existedbut they can't compare to the `#` syntax in terms of ergonomics.`

  ```js
  class Car{
      #EngineType = "Four Stoke" ; // private property
      
      constructor(brand,model = 2020) { // constructor method
        this.brand = brand; this.model = model;  // instance property
      } 
      
      #engine(){ return `${this.#EngineType } Engine`; } // private method
      
      start(){ return `${this.brand} ${this.model}, ${this.#engine()} is started !` }  // public method
      
      stop(){return `${this.brand} ${this.model}  ${this.#engine()}  is stoped !` }  // public method
    }
  let toyota = new Car("toyota",2022);
  toyota.start();
  toyota.stop(); 
  toyota.#engine() // can't call,because engine is private method
  ```





  #### Protected Access Modifiers

  - `Protected declaration are not implemented in Js on the language ,But Dev still use by Convenienting`





```js
/* Access Modifiers
 - An access modifier is a keyword that we can apply to a member of a class to control its access and        visibility from the outside.
*/
/* Public Access Modifiers
   - By default, all members (properties, fields, methods, or functions) of classes are public accessible      from outside the class.
*/
/* Private Access Modifiers
   - Private declaration are visible only from inside class
   - Private class members can be created by using a hash # prefix.
   - Private members are not native to the language before this syntax existedbut they can't compare to        the # syntax in terms of ergonomics
*/
class Car{
    #EngineType = "Four Stoke" ; // private property
    constructor(brand,model = 2020) { // constructor method
      this.brand = brand; this.model = model;  // instance property
    } 
    #engine(){ return `${this.#EngineType } Engine`; } // private method
    start(){ return `${this.brand} ${this.model}, ${this.#engine()} is started !` }  // public method
    stop(){return `${this.brand} ${this.model}  ${this.#engine()}  is stoped !` }  // public method
  }
let toyota = new Car("toyota",2022);
toyota.start();
toyota.stop(); 
toyota.#engine() // can't call,because engine is private method
```



