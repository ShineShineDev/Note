## dInterface

- `The interface in the dart provides blueprint of the class`

- `An interface class must provide the full implementation of all the methods belong to the interfaces.`

- `In dart, multiple inheritances are achieved by the use of implements`

  




### Declaring an Interface

  - `Dart does not have a syntax for declaring interfaces.`

  - `Class declarations are themselves interfaces in Dart.`

    ```dart
    class Human{
        String? name;
        int? age;
        
        void sleep(){
            print('${this.name} is sleeping @Human Interface');
        }
        
        void eat(){
            print('${this.name} is eating @Human Interface');
            
        }
    }
    ```

    

    

    





### Implementing an Interface

- `Class should use the` **`implements`** `keyword, instead of extending to be able to use an interface method.`

- `If a class has been implemented then all of its method and instance variable must be overridden during the interface.`

  ```dart
  class Human{
      String? name;
      int? age;
      
      void sleep(){
          print('${this.name} is sleeping @from Human Interface');
      }
      
      void eat(){
          print('${this.name} is eating @from Human Interface');
          
      }
  }
  
  class Male implements Human{
      
      @override
      String? name;
      
      @override
      int? age;
      
      Male(String name,int age){
          this.name= name;
          this.age= age;
      }
      
      @override
      void sleep(){
           print('${this.name} is sleeping @from Male class');
      }
      
      @override
      void eat(){
          print('${this.name} is eating @from Male class');
      }
  
      
  }
  
  void main(){
      Male julian = Male('julian',23);
      print(julian.name);
      julian.eat();
  }
  ```

  

  





### Implementing Multiple Inheritance

- `A class can implement multiple interfaces. The interfaces are separated by a comma.`

  ```dart
  class Keyboard{
      void getInput(){
          print('Get User Input');
      }
  }
  
  class Monitor{
      void display(){
          print('displaying');
      }
  }
  // implement multiple interfaces
  class Computer implements Keyboard,Monitor{
      
      String? keyboardName;
      String? monitorName;
      
      Computer(String? keyboardName,String? monitorName){
          this.monitorName = monitorName;
          this.keyboardName = keyboardName;
      }
      @override
      void getInput(){
          print('Get User Input from ${keyboardName} keyboard');
      }
      @override
      void display(){
          print('displaying with Input${monitorName} Monitor');
      }
      
      
  }
  void main(){
      Computer dell = new Computer('Dell','Razer');
      dell.getInput();
      dell.display();
  }
```
  
  





```dart
// The interface in the dart provides blueprint of the class
// An interface class must provide the full implementation of all the methods belong to      the interfaces
// In dart, multiple inheritances are achieved by the use of implements


// Dart does not have a syntax for declaring interfaces
// Class declarations are themselves interfaces in Dart

// Class should use the implements keyword, instead of extending to be able to use an interface method
// If a class has been implemented then all of its method and instance variable must be overridden during the interface


class Keyboard{
    void getInput(){
        print('Get User Input');
    }
}

class Monitor{
    void display(){
        print('displaying');
    }
}
// implement multiple interfaces
class Computer implements Keyboard,Monitor{
    
    String? keyboardName;
    String? monitorName;
    
    Computer(String? keyboardName,String? monitorName){
        this.monitorName = monitorName;
        this.keyboardName = keyboardName;
    }
    @override
    void getInput(){
        print('Get User Input from ${keyboardName} keyboard');
    }
    @override
    void display(){
        print('displaying with Input${monitorName} Monitor');
    }
    
    
}
void main(){
    Computer dell = new Computer('Dell','Razer');
    dell.getInput();
    dell.display();
}
```

