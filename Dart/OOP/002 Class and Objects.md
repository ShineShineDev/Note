## Class and Objects



### Class 



- `Dart classes are defined as the blueprint of the associated objects. A Class is a user-defined data type that describes the characteristics and behavior of it. `
- ` A class encapsulates data for the object.`





#### Declaring a Class

- `Use the class keyword to declare a class in Dart. `

- `Class,enum types,typedefs and type parameters should capitlize the first letter of each word and no separators.`

  

  ```dart
  class ClassName{
  }
  ```

  



## Object

-  `An object is a real-time representation of any entity. `

- `A object is an Instance of a class, so as you know, A Class is a blueprint from which object are created.`

- `The object has two characteristics - state and behavior.` 

- `We can access the class properties by creating an object of that class.`

  





#### Creating an Object

- `The object can be created by using a new keyword followed by class name.`

  ```dart
  class Person{}
  
  void main(){
      Person obj1 = new Person();
      var obj2 =  Person();
      print(obj1);
  }
  
  ```

  

  

  

- Dart classes do not support constructor overloading, but you can use the flexible function argument specifications from the language (optional, positional, and named) to provide different ways to instantiate a class. Also, you can have named constructors to define alternatives.





