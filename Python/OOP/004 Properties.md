## Properties (Attributes )

- `Properties are used to store state, or data in our class`
- `Properties are publish by default`
- `Properties or attributes can be broadly categorized into two types`
  - `Class attributes `
  - `Instance attributes`








### Create Properties 

```python
class Car:
    name = 'Ford' #Class attributes 
    def __init__(self,model):
        self.model = model  #instance attributes
```







### Access property

- `The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.`

  ```python
  class Car:
      name = 'Ford' # class attributes 
      def __init__(self,model):
          self.model = model  # instance attributes 
        
  my_car = Car(2020); # create object
  print(my_car.name) # accessed via dot notation.`
  ```
  
  





### Modify property

- `If you want to modify properties you can change it`

- `You can delete properties on objects by using the `**`del`** `keyword`

  ```python
  my_car = Car(); # create object
  
  my_car.name = 'Toyota' # 
  
  print(my_car.name) 
  
  del my_car.name
  ```







### Class level or static properties 

- `Class level or static variables are defined within a class but outside any of the class's methods`

- ` A variable that is shared by all instances(objects) of a class`

- `Class or static variables can access without any creating object`

- `Static variable and methods are used when we want to define some behaviour or property specific to the class and which is something common for all the class objects.`

  

  ```python
  class Car:
      name = 'Ford' # class or static property
        
  print(Car.name)  #access without any creating objec
  
  c1 = Car()
  print(c1.name) #static property share all instances
  
  c2 = Car()
  print(c2.name) #static property share all instances
  ```



  

### Instance properties 

- `Properties that are assigned values inside methods are instance variables.`

- `An instance or non-static variables are different for different objects (every object has a copy)`

- `Instance properties must access by instance object`

  ```python
  class Car:
      def __init__(self,brand):
          self.brand = brand  #instance attributes 
      def addModel(self,model):
          self.model = model #instance attributes 
        
      
  my_car = Car('Ford'); # create object
  my_car.addModel(2020)
  print(my_car.brand) #access instance attributes by instance object`
  print(my_car.model)#access instance attributes by instance object`
  ```
  
  





### Built-In Class Attributes

- `Every Python class keeps following built-in attributes and they can be accessed using dot operator like any other attribute `
  - **`__dict__`** : `Dictionary containing the class's namespace.`
  - **`__doc__`** : `Class documentation string or none, if undefined.`
  - **`__name__`** − `Class name.`
  - **`__module__`** − `Module name in which the class is defined. This attribute is "__main__" in interactive mode.`
  - **`__bases__`** − `A possibly empty tuple containing the base classes, in the order of their occurrence in the base class list.`


