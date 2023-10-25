## Constructors

- `A constructor is a special kind of a method.`

- `It is automatically called when the object is created.`

- `Constructors do not return values. `

- `The purpose of the constructor is to initiate the state of an object. `

- `Constructors have the same name as the class.`

- `If you don’t declare a constructor, a default no-argument constructor is provided for you`

  ```dart
  class Car { 
     Car(String brand) { 
        print(brand); 
     } 
  }
  
  void main() { 
     Car car1 = new Car('Toyota'); 
     Car car2 = new Car('lamborghini'); 
   } 
  ```

  





## Named Constructors

- `Dart provides named constructors to enable a class define multiple constructors`

  ```dart
  class Car {     
     Car(String brand) {                           
        print(brand);
     }                                   
     Car.namedConst(int model) { 
        print(model);    
     }                               
  }
  void main() {           
     Car c2 = new Car('Toyota'); 
     Car c1 = new Car.namedConst(2021);                                       
  }           
  
  ```

  