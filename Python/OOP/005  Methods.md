## Methods

- `Methods are used to perform actions`
- `Methods are public by default`
- `In python there are three different method types. Each one of them has different characteristics and should be used in differentsituations`
  - `The static method, `
  - `The class method`,
  - `The instance method`





### Create Method

```python
class Car:
    
    def __init__(self):
        print('Ford Car from __init__')    
        
    def info(self): # instance method
        print('Ford Car')
        
c1 = Car()       
c1.info()
```







### Constructor method

- `All classes have a  __init__() method and also call construcotr`

- `Constructor method is speical method `

- `__init__() method take`**`self` ** `parameter for to indeticate current creating object`

- `__init__()` `method is called automatically every time the class is being used to create a new object.`

  ```python
  class Car:
        class_pro = 'class property'
        def __init__(self, brand,model):
            self.brand = brand
            self.model = model
        
    
    car_one = Car('Ford',2021)
    print(car_one.brand)
    print(car_one.model)     
  print(car_one.class_pro) #instance object can access class level property
    print(Car.class_pro)     
  ```
  
  





### Instance Methods

- `Instance method can only be called if the class has been instantiated.` 

- `Instance method take`**`self` ** `parameter for to indeticate current creating object`

- `Once an object of that class has been created, the instance method can be called and can access all the attributes of that class through the reserved word `**`self`**.

- `An instance method is capable of creating, getting, and setting new instance attributes and calling other instance, class, and static methods `

  ```python
  class Car:
      def __init__(self,brand,model):
          self.brand = brand
          self.model = model
      def start(self):
          print(self.brand,'Car Started!')
      def stop(self):
          print(self.brand,'Car Stoped!')
  
  ford = Car('Ford',2020)        
  ford.start()
  ford.stop()
  Car.start() # this will raise error
  ```

  




### Class Methods

- `To define a class method in python, we use @classmethod decorator`

- ` It takes a `**`cls`** `parameter that points to the class, and can only modify class states.`

- `They can't access the instance ( self ) but they have access to the class itself via `**`cls `**

- `They can access other methods and class attributes but no instance attributes.Because the class method only has access to this `**`cls`** `argument, it can’t modify object instance state.`

- `It can modify a class state that would apply across all the instances of the class. For example it can modify a class variable that will be applicable to all the instances.`

- `We generally use the class methods to create factory methods which returns the class object for a different use case`

  ```python
  class Car:
      x = 'Carfactory'
      
      def __init__(self,brand,model): 
          self.brand = brand
          self.model = model
          
      def info(self):
          print(self.brand,' : ', self.model)     
          
      @classmethod #decorator
      def class_method1(cls):
          print(cls.x) # access class property
          # print(cls.model) #can't access instance attributes  
          
          cls.class_method2() # access other class method
          #cls.info() # can't access instance method 
          
          cls.statict_method()
          
      @classmethod    
      def class_method2(cls):
          print('class method is working')
          
      @staticmethod     
      def statict_method():
          print('statict method is working')
                
      def statict_method1():
          print('statict method is working')
          
  Car.class_method1()   
  ```

  

  

  

### Static Methods

- `To define a static method we use @staticmethod decorator.`

- `A static method does not receive an implicit first argument.`

- `They work like regular functions but belong to the class's namespace`

- `A static method can’t access or modify class state.`

- `The main characteristic of a static method is that they can be called without instantiating the class. These methods are self-contained, meaning that they cannot access any other attribute or call any other method within that class.`

- `Static methods are restricted in what data they can access - and they’re primarily a way to` [namespace](https://realpython.com/python-namespaces-scope/) `your method`

- `You could use a static method when you have a class but you do not need a specific instance in order to access that method. For example, if you have a class called` **Math** `and you have a method called factorial`. 

- `Static methods are used when we don't want subclasses of a class change/override a specific implementation of a method(something common for all the class objects.).`

  ```python
  class Car:
      x = 'Car Class'
      def __init__(self,brand,model):
           self.brand = brand
           self.model = model
          
      @staticmethod
      def static_method1():
           print(x,brand) #static method can't acces class property and instance property
           instance_method() #static method can't call class method and instance method
           Car.static_method2() #static method can call other static method via name of class
              
      def static_method2():
          print('static_method2 is working')
          
      @classmethod
      def class_method(cls):
          print('class method is working')
          
      def instance_method(self):     
          print('class method is working')
          
  Car.static_method1()        
  ```

  





### Instance method access other methods

- `An instance method can call other instance,class method(via class name) and static method(via class name) `

- `An instance method can access or modify  instance attributes and class level attributes`

  ```python
  class Post:
      
      which_class = 'Post Class'
      
      def __init__(self,title):
         self.title = title
         self.addPost() #call instance method
         Post.classMethod() #class instance method
         Post.staticMethod() #instance static method
      
      #instance method
      def addPost(self):
         print('Jnstance method is working')   
       
      @classmethod
      def classMethod(cls):
         print('Class method is working')
          
      @staticmethod
      def staticMethod():
         print('Static method is working')
          
      def chnageClassProperty(self):
         Post.which_class = 'Post Calss Property Updated'       
          
  postOne = Post('Post one') 
  print(Post.which_class)      
  
  postOne.chnageClassProperty()
  print(Post.which_class)   
  ```







### Static method access other method

- `Static method can call other static and class method(via class name) but not instance method .` 

- `They can't access or modify class property and instance property.`

- `They’re primarily a way to` [namespace](https://realpython.com/python-namespaces-scope/) `your methods.`

  ```python
  class Post:
      
      which_class = 'Post Class'
      
      def __init__(self,title):
           self.title = title
      
      def instanceMethod(self):
           print('instance method is working')
          
      @staticmethod     
      def staticMethod1():
           Post.staticMethod2() #call static method from static method
           Post.classMethod() #call class method from static method
          
      def staticMethod2():
           print('static method 2 is working')
            
      @classmethod
      def classMethod(cls):
           print('class method is working')
      
      
  post = Post('Post One')
  
  print(Post.which_class)
  
  Post.staticMethod1()
  
  print(Post.which_class)
  ```

  









### Class  method access other method

- `Static method can call other static and class method(via class name) but not instance method .` 

- `They can't access or modify instance property.`

- `But,they can access or modify class property.`

- `It can modify a class state that would apply across all the instances of the class. For example it can modify a class variable that will be applicable to all the instances.`

  ```python
  class Post:
      
      which_class = 'Post Class'
      
      def __init__(self,title):
           self.title = title
      
      def instanceMethod(self):
           print('instance method is working')
          
      @staticmethod     
      def staticMethod():
          print('static method is working')
            
      @classmethod
      def classMethod1(cls):
           cls.classMethod2() #call other class method from class method
           cls.staticMethod() #call  static method from class method          
              
      @classmethod
      def classMethod2(cls):
           print('Class method is working')
              
      @classmethod            
      def changeClassProperty(cls):
           cls.which_class = 'Post Class property updated!'
        
      
  post = Post('Post One')
  
  # beofore update 
  print(post.which_class)
  
  Post.classMethod1()
  Post.changeClassProperty()
  
  # after update
  print(post.which_class)
  print(Post.which_class)
  ```

  





   **Class method vs Static Method**

- `A class method takes cls as first parameter while a static method needs no specific parameters.`
- `A class method can access or modify class state while a static method can’t access or modify it.`
- `In general, static methods know nothing about class state. They are utility type methods that take some parameters and work upon those parameters. On the other hand class methods must have class as parameter.`
- `We use @classmethod decorator in python to create a class method and we use @staticmethod decorator to create a static method in python.`







## Future reading



### Things to remember

- Instance methods can access the instance through `self` as well as the class via `self.__class__` attribute.
- Class methods can’t access the instance (`self`) but they have access to the class itself via `cls`.
- Static Methods work like regular functions but belong to the class’s namespace. Static methods don’t have access to `cls` or `self`.
- Even if we write tiny scripts for fun, learning another OOP feature of Python is a great skill to know, and can help to make your code easier to troubleshoot, and easier to reuse in the future.
- **We generally use the class methods to create factory methods which returns the class object for a different use case**. 





### Class method vs Static Method

- A class method takes cls as first parameter while a static method needs no specific parameters.
- A class method can access or modify class state while a static method can’t access or modify it.
- In general, static methods know nothing about class state. They are utility type methods that take some parameters and work upon those parameters. On the other hand class methods must have class as parameter.
- We use @classmethod decorator in python to create a class method and we use @staticmethod decorator to create a static method in python.
- Use static methods to define utility methods or group a logically related functions into a class.





### When to use what?

- We generally use class method to create factory methods. Factory methods return class object ( similar to a constructor ) for different use cases.
- We generally use static methods to create utility functions.







### How to define a class method and a static method?

To define a class method in python, we use @classmethod decorator and to define a static method we use @staticmethod decorator.
Let us look at an example to understand the difference between both of them. Let us say we want to create a class Person. Now, python doesn’t support method overloading like C++ or Java so we use class methods to create factory methods. In the below example we use a class method to create a person object from birth year.

As explained above we use static methods to create utility functions. In the below example we use a static method to check if a person is adult or not.







## Python static methods vs class methods

Since static methods are quite similar to the [class methods](https://www.pythontutorial.net/python-oop/python-class-methods/), you can use the following to find the differences between them:

| **Class Methods**                                           | **Static Methods**                                           |
| :---------------------------------------------------------- | :----------------------------------------------------------- |
| Python implicitly pass the `cls` argument to class methods. | Python doesn’t implicitly pass the `cls` argument to static methods |
| Class methods **can** access and modify the class state.    | Static methods **cannot** access or modify the class state.  |
| Use `@classmethod` decorators to define class methods       | Use `@staticmethod` decorators to define static methods.     |