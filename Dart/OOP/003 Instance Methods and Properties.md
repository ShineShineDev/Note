## Instance Properties  and Methods 

- `Dart classes can have both instance members (methods and properties) and class members (static methods and fields).`





### Instance Properties (attributes of fields)

- `Instance properties are functions defined inside the body of a class.`

- `Instance properties(field) is any variable declared in a class. Fields represent data pertaining to objects.`

  ```dart
  class Car{
      //String brand; // not allow,because dart non-nullable by default(nnbd)
      String? model; // allow
      var brand; // allow
      
  }
  void main(){
      var car1 = new Car();
      car1.brand = 'Toyota';
      print(car1.brand);
      
      var car2 = Car();
      car2.brand = 'Lamborghini';
      print(car2.brand);
  
  }
  
  ```

  



### Instance Methods  

- `Instance  methods are functions defined inside the body of a class.`

- ` They are used to perform operations with the attributes of our objects.`

-  `To call the Instance  method of this class you have to first create an object.`

  ```dart
  
  class Circle {
    var radius;
    // double return type
    double area() {
      return this.radius * this.radius * 3.14;
    }
  }
  
  void main() {
    var c = Circle();
    c.radius = 5;
    print(c.area());
    //Circle.area() not allow,because area is a Instance Methods  
  }
  ```

  




## Difference Between Class Variable and Instance Variable



| Sr.    | Class Variable                                               | Instance Variable                                            |
| :----- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| **1.** | The class variable is declared using the static keyword in a class, but not in method and constructor. | The instance variable is declared in a class without using the static keyword. |
| **2.** | The class variable can be accessed using the class name. **Syntax:** `ClassName.variableName` | The instance variable can be accessed using the instance of that class. **Syntax:** `ObjectRefernce.variableName` |
| **3**  | The class variables are common to all instances of that class. All instances of the class share one copy of the static variable. | The instance variables are not common to all instance of class. Each object of particular will preserve its own copy of the instance variables. |
| **4**  | These are created when the program is started and destroys when the program is terminated. | The instance variables are created when an object of the particular class created using the new() keyword and destroys when the object is destroyed. |