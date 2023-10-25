  # Calling parent methods and Properties

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
    

