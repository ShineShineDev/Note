##       Interface 

- `An interface is a Contract of unrelated class`
- `JavaScript not support Interface `



#### Interface in ES6  

- `What : `

  - `An interface is a contract of unrelated class`
- `cannot instantiate interfaces`
  - `Interface have only abstract methods (only method signature, no body) and property`
- `Interface can not be instantiated just like class.`
  - `Methods inside interfaces are by default public `

- `Why :`

  - `To provide contract specification for  class `
  
  - `for providing a common functionality to unrelated classes.`
  
  - `They provide loose coupling`
  
  - `to achieve abstraction`
  
- `How :`

  - `Interfaces are declared with the "interface" keyword:`
  - `To implement an interface, a class must use the "mplements" keyword.`
  - `A class that implements an interface must implement **all** of the interface's methods.`
  
  - `Syntax : interface interfaceName{ myPro = 1; myMethods() }`
  
    
  
  


#### Difference between Abstract class and Interface



![C# Interface - By Microsoft Award MVP - c# - c# tutorial - c# net - Learn  in 30sec | wikitechy](https://www.wikitechy.com/tutorials/csharp/img/c-sharp-images/abstract-vs-interface-csharp.jpg)







  #### es6-interface  https://www.npmjs.com/package/es6-interface

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





#### Interface in PHP

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





#### Interface in Java

- ` Java does not support "multiple inheritance" (a class can only inherit from one superclass). However, it can be achieved with interfaces, because the class can **implement** multiple interfaces.`

```js
interface FirstInterface {
  public void myMethod(); // interface method
}

interface SecondInterface {
  public void myOtherMethod(); // interface method
}

class DemoClass implements FirstInterface, SecondInterface {
  public void myMethod() {
    System.out.println("Some text..");
  }
  public void myOtherMethod() {
    System.out.println("Some other text...");
  }
}

class MyMainClass {
  public static void main(String[] args) {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}
```

