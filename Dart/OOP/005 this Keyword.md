## this Keyword

- `The` **`this`** `keyword refers to the current instance of the class.`

-  `It indicates the current instance of the class, methods, or constructor.`

- ` It can be also used to call the current class methods or constructors`

  ```dart
  class Car{
      String? brand;
      int? model;
      
      Car(String brand,int model){
          this.brand = brand;
          this.model = model; 
          print(this);
      }
      
      void start(){
          this.engine();
      }
      
      void engine(){
          print('Engine starting...');
      }
      
  }
  void main(){
      var car1 = new Car('Toyota',2021);
      car1.start();
      
  }
  ```
  
  