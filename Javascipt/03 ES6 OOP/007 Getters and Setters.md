  ## Getters and Setters

- `In JavaScript, there are two kinds of object properties:`
  - `Data properties`
  - `Accessor properties`



#### Data Property

```js
class User{
    constructor(name,age){
        this.name = name, //  Data Property
        this.age = age,
    };  
}
```





#### Getters and Setter (Accessor properties)

  - `Getters and setters methods gives us simpler syntax, secure better data quality, equal syntax for properties and methods  `

  - `set keyword use to set or update properties(variables).Getter also known as mutators.`

  - `get keyword use to get properties(variables).Getter also known as accessors .`

  - `The name of the getter/setter method cannot be the same wiht name of the class properties(variables).So for calss property you can use naming convenction by using underscore character(-)`

    ```js
    class User{
        constructor(name,age,carrer){
            this.name = name,
            this.age = age,s
            this._carrer = carrer // property name with underscore 
        };
        // accessor property(getter),taking no arguments and returning the value of the property
        get carrer(){ 
            return this._carrer; 
        };
         // accessor property(setter)
        set carrer(carrer){
            this._carrer = carrer;
        };
    }
    let userOne = new User("julian",23,"dev");
    userOne.carrer // "dev" //get
    userOne.carrer = "programer"; //set  
    //equal syntax for properties and methods
    ```





```js
/* In JavaScript, there are two kinds of object properties:
     - Data properties
	 - Accessor properties ( Getters and  setters)
   - Getters and  setters
   - Getters and setters methods gives us simpler syntax, secure better data quality, equal syntax for 		 properties and methods
   - set keyword use to set or update properties(variables).Getter also known as mutators
   - get keyword use to get properties(variables).Getter also known as accessors
   - The name of the getter/setter method cannot be the same wiht name of the class properties(variables).      So for calss property you can use naming convenction by using underscore character(-)`
*/
class User{
    constructor(name,age,carrer){
        this.name = name, //Data properties
        this.age = age,
        this._carrer = carrer // property name with underscore 
    }
    //getter(accessor),taking no arguments and returning the value of the property)
    get carrer(){ return this._carrer}
    // setter(mutators) 
    set carrer(carrer){ this._carrer = carrer}
}
let userOne = new User("julian",23,"dev");
userOne.carrer // "dev" //get
//equal syntax for properties and methods
userOne.carrer = "Programmer"; //set  
```

