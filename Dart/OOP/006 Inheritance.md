## Inheritance



- `Dart supports the concept of Inheritance which is the ability of a program to create new classes from an existing class.`
- `The class that is extended to create newer classes is called the parent class/super class.`
- `Inheritance provide for code reusability(Inherit to Avoid Duplication) and modify(chnage) without existing base class`





#### Parent class

- `The class that is being inherited by other class`

- `Also known as super class or base class.`





#### Child class

- `A class which inherits properties from other class is called the child class. `
- `It is also known as the derived class or subclass.`





#### Type of Inheritance

- `Single inheritance` : ` one class inherits one class `
- ` Multilevel inheritance` : `one class inherits another child class.`
- ` Multiple inheritance` : `a class can inherit more than one class`
- ` Hierarchical inheritance ` :  ` one parent class has more than one child class`
- ` Hybrid inheritance` : ` combination of more than one type of inheritance`





```dart
class Bird{    
      void fly(){  
          print("The bird can fly");  
      }  
}    

// Inherits the super class  
class Parrot extends Bird{    
    //child class function  
    void speak(){  
        print("The parrot can speak");  
    }            
}  

void main() {  
      // Creating object of the child class  
      Parrot p=new Parrot();    
      p.speak();    
      p.fly();    
}    
```

