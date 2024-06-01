## The super keyword and method overriding





#### Method overriding

- `Method Overriding is a mechanism by which the child class redefines a method in its parent class. `

  ```dart
  class Parent { 
     void m1(int a){ 
         print("${a} from Parent class");
     } 
  }  
  
  class Child extends Parent { 
     @override 
     void m1(int b) { 
        print("${b} from Child class"); 
     } 
  }
  
  void main() { 
     Child c = new Child(); 
     c.m1(12); 
  } 
  ```

  

  





#### super Keyword

- `The super keyword is used to refer to the immediate parent of a class. The keyword can be used to refer to the super class version of a variable, property, or method.`

  ```dart
  class Parent { 
      
     String msg = "Property from the Parent class"; 
      
     void m1(int a){ 
         print("${a} from the Parent");
     } 
  } 
  
  class Child extends Parent { 
      
     // override Parent m1 method
     @override 
     void m1(int b) { 
        print("${b} from the Child"); 
         
        // call parent method
        super.m1(b); 
       // call parent Property
        print("${super.msg}")   ; 
         
     }
      
  }
  
  void main() { 
     
     Child c = new Child(); 
     c.m1(12); 
  } 
  ```

  

  