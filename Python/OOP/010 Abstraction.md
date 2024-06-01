## Abstraction

> `User is familiar with that`**`what function does`** `but they don't know` **`how it does.`**`

- `Abstraction is one of the most important features of object-oriented programming.`
- `Abstraction means hiding the complexity and only showing the essential features of the object. So in a way, Abstraction means hiding the real implementation and we, as a user, knowing only how to use it.`
- `An abstract class can be considered as a blueprint for other classes. It allows you to create a set of methods that must be created within any child classes built from the abstract class. `
- `An abstract class can be useful when we are designing large functions. `







### Real  words Example

> `In simple words, we all use the smartphone and very much familiar with its functions such as camera, voice-recorder, call-dialing, etc., but we don't know how these operations are happening in the background.`
>
> ` When we use the TV remote to increase the volume. We don't know how pressing a key increases the volume of the TV. We only know to press the "+" button to increase the volume.`
>
> `Real world example would be a vehicle which we drive with out caring or knowing what all is going underneath.`





### Why Abstraction is Important?

- `Used to hide the irrelevant data/class in order to reduce the complexity. `

- `By defining an abstract base class, you can define a common Application Program Interface(API) for a set of subclasses. This capability is especially useful in situations where a third-party is going to provide implementations, such as with plugins, `

- `When working in a large team or with a large code-base , it is also beneficial when we work with the large code-base hard to remember all the classes.`

- `We use Abstraction for hiding the internal details or implementations of a function and showing its functionalities only. This is similar to the way you know how to drive a car without knowing the background mechanism. Or you know how to turn on or off a light using a switch but you don’t know what is happening behind the socket.`

  





### Advantages of Abstraction in Python

- `Abstraction helps in reducing programming efforts and reduce coding complexity.`
- `It is used to hide unwanted details from the user.`
- `It allows focusing on the main concept.`





### Abstraction classes

- `In Python abstraction can be achieved by using abstract classes and interfaces.`

- `Abstraction classes are meant to be the blueprint of the other class.`

- `By default, Python does not provide abstract classes. Python comes with a module that provides the base for defining Abstract Base classes(ABC) and that module name is ABC`

- `A class that consists of one or more abstract method and normal method`

- `Abstract methods do not contain their implementation.`

- `Important thing is,you cannot create an object for the abstract class with the abstract method. `

- `An abstract class is also helpful to provide the standard interface for different implementations of components.`

- `Any class with at least one abstract function is an abstract class.` 

- `In order to create an abstraction class first, you need to import ABC class from` [abc](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjrtMSbwsXrAhVIzzgGHVMwDlkQFjAAegQIAxAB&url=https%3A%2F%2Fdocs.python.org%2F3%2Flibrary%2Fabc.html&usg=AOvVaw0Tb8GVbHgscdgGVAJbUvLR) `(Abstract Base Class) module`. 

- `Now the question is how do we use this abstraction exactly. The answer is by using inheritance`

  



**How Abstract Base Classes work :** 

> `By default, Python does not provide abstract classes. Python comes with a module that provides the base for defining Abstract Base classes(ABC) and that module name is ABC.` ***ABC*** `works by decorating methods of the base class as abstract and then registering concrete classes as implementations of the abstract base. A method becomes abstract when decorated with the keyword @abstractmethod`.





### Working of the Abstract Classes

- `Unlike the other high-level language, Python doesn't provide the abstract class itself`.

- `We need to import the abc module, which provides the base for defining Abstract Base classes (ABC). `

- ` We use the` **`@abstractmethod`** `decorator to define an abstract method or if we don't provide the definition to the method, it automatically becomes the abstract method.` 

  ```python
  from abc import ABC, abstractmethod
   
  class Polygon(ABC):
   
      @abstractmethod
      def noofsides(self):
          pass
   
  class Triangle(Polygon):
   
      # overriding abstract method
      def noofsides(self):
          print("I have 3 sides")
   
  class Pentagon(Polygon):
      # overriding abstract method
      def noofsides(self):
          print("I have 5 sides")
   
  class Hexagon(Polygon):
   
      # overriding abstract method
      def noofsides(self):
          print("I have 6 sides")
   
  class Quadrilateral(Polygon):
   
      # overriding abstract method
      def noofsides(self):
          print("I have 4 sides")
   
  # Driver code
  R = Triangle()
  R.noofsides()
   
  K = Quadrilateral()
  K.noofsides()
   
  R = Pentagon()
  R.noofsides()
   
  K = Hexagon()
  K.noofsides()
  
  
  
  #----------------------------------------
  #another example
  from abc import ABC
  
  class Shape(ABC):
  
      # abstract method
      def area(self):
          pass
  
  class Rectangle(Shape):
  
      length = 6
      breadth = 4
  
      def area(self):
          return self.length * self.breadth
  
  
  class Circle(Shape):
  
      radius = 7
  
      def area(self):
          return 3.14 * self.radius * self.radius
  
  
  class Square(Shape):
  
      length = 4
  
      def area(self):
          return self.length*self.length
  
  
  class Triangle:
  
      length = 5
      width = 4
  
      def __init__(self):
          pass
  
      def area(self):
          return 0.5 * self.length * self.width
  
  
  
  r = Rectangle() # object created for the class 'Rectangle'
  
  c = Circle() # object created for the class 'Circle'
  
  s = Square() # object created for the class 'Square'
  
  t = Triangle() # object created for the class 'triangle'
  
  print("Area of a Rectangle:", r.area())
  print("Area of a Circle:", c.area())
  print("Area of a Square:", s.area())
  print("Area of a Triangle:", t.area())
  
  
  
  #----------------------------------------
  #another example
  from abc import ABC, abstractmethod
  
  class Payment(ABC):
  
    def print_slip(self, amount):
        print('Purchase of amount- ', amount)
  
    @abstractmethod
    def payment(self, amount):
        pass
  
  class CreditCardPayment(Payment):
  
    def payment(self, amount):
        print('Credit card payment of- ', amount)
  
  class MobileWalletPayment(Payment):
  
    def payment(self, amount):
        print('Mobile wallet payment of- ', amount)
  
  obj = CreditCardPayment()
  obj.payment(100)
  obj.print_slip(100)
  print(isinstance(obj, Payment))
  
  obj = MobileWalletPayment()
  obj.payment(200)
  obj.print_slip(200)
  print(isinstance(obj, Payment))
  
  
  
  #------------------------
  #another
  from abc import ABC,abstractmethod
  
  class Engine(ABC):
  
      @abstractmethod
      def start(self):
          pass
  
      @abstractmethod
      def stop(self):
          pass
  
  
  
  
  class Car(Engine):
  
      def start(self):
          print('Car engine starting')
  
  
      def stop(self):
              print('Car engine stoped!')
  
  
  
  
  class Motorcycle(Engine):
  
      def start(self):
          print('Motorcycle engine starting')
  
  
      def stop(self):
              print('Motorcycle engine stoped!')
  
  
  
  car = Car()
  car.start()
  car.stop()
  
  cycle = Motorcycle()
  cycle.start()
  cycle.stop()
  ```

  

  

  

### Abstraction and Encapsulation in Python

- `When we are developing any large or enterprise application. Then it’s a good practice to use the concepts of data encapsulation and data abstraction in the coding approach.`
- `Both terms are different in meaning but indirectly related to each other.`
- `There are two types of programming approaches, Procedural programming and Object-oriented programming.`
- `Encapsulation and Abstraction come under an object-oriented approach which is designed for writing easy and readable codes.`
- `Encapsulation means storing the code of each functionality in one place. While abstraction is responsible for presenting only non-sensitive information to the user by hiding the sensitive information.`





### Abstraction In Python FAQs

- ` What is Abstraction in Python?`
  - `Abstraction in Python is the process of hiding the real implementation of an application from the user and emphasizing only on how to use the application.`
- ` How can we achieve Abstraction in Python?`
  - `In Python, abstraction can be achieved using abstract classes and methods.`
- `Whether an abstract class can be instantiated?`
  - `No, the abstract class cannot be instantiated, i.e., we cannot create objects for the abstract class.`
- `Mention the name of the module to be imported for an abstract class`
  - `‘abc’ is the module to be imported when we define an abstract class in Python programs. ‘abc’ stands for ‘abstract base class’.`