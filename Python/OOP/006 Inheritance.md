## Inheritance

- `Inheritance allows us to define a class that inherits all the methods and properties from another class.`
- `Inheritance in object-oriented programming is pretty similar to real-world inheritance where a child inherits some of the characteristics from his parents, in addition to his/her own unique characteristics.`







### Create a Parent Class

- `Parent class is the class being inherited from, also called base class.`

- `Any class can be a parent class, so the syntax is the same as creating any other class`

  ​    

  ```python
  class Person:
      parent_class_name = 'Person'
      def __init__(self, name, age):
          self.name = name
          self.age = age
          
      def eating(self):
          print(self.name,'is eating')
      
      @classmethod
      def classMethod(cls):    
          print('class Method  is working')
          
     @staticmethod
      def staticmethod(cls):    
          print('class Method  is working')        
  ```







### Create a Child Class (Inheritance)

- `Child class is the class that inherits from another class, also called derived class.`

- `If you created a child class that inherits the properties and methods from its parent`

  ```python
  class Student(Person):
      pass
          
  s1 = Student('Shine Shine','21')
  
  s1.eating() # instance method       
  print(s1.name) #print parent's instance property from instance object
  print(s1.parent_class_name) # print parent's class property from instance object
  
  Student.classMethod()
  # Student.staticmethod() # child class can't access parent's static method
  print(Student.parent_class_name)  
  ```

  







### Override Parent Constructor Method

- `When you add the`**`__init__()`** `function in the child, the child class will no longer inherit the parent's `**`__init__()`** `method.`

- `The child's `**`__init__()`** `function overrides the inheritance of the parent's `**`__init__()`** `function.`

  ```python
  class Person:
      def __init__(self, name, age):
          print('Parent class')
          self.name = name
          self.age = age
          
          
  class Student(Person):
      def __init__(self, name, age):
          print('child class')
          self.name = name
          self.age = age
          
  s1 = Student('Shine Shine','21')        
  ```







###  Call to the parent's `__init__()` method

- `To keep the inheritance of the parent's` **`__init__()`**` function, add a call to the parent's` **`__init__()`** `function`

- `Python also has a `**`super()`** `function that will make the child class inherit all the methods and properties from its parent`

  ```python
  class Person:
      def __init__(self, name, age):
          print('Parent Constructor method is working')
          self.name = name
          self.age = age
          
          
  class Student(Person):
      def __init__(self, name, age):
          print('Child Constructor method is working')
          Person.__init__(self, name, age)
          # super().__init__(name, age)
          print('child class')
          self.name = name
          self.age = age
          
  s1 = Student('Shine Shine','21')        
  ```

  







### Add Methods and property at child class

- `You can add property or method in child class `

  ```python
  class Person:
      def __init__(self, name, age):
          print('Parent Constructor method is working')
          self.name = name
          self.age = age        
  
          
          
  class Student(Person):
     
    childclassname = 'Student' # class level property
      
      def __init__(self, name, age,graduationyear):
          print('Child Constructor method is working')
          super().__init__(name, age) # call parent constructor method
          self.graduationyear = graduationyear # instance level property
          
      #instance method
      def exercise(self):
          print('Working exercise')      
      #class method    
      @classmethod
      def childClassMethod(cls):
          print('Child Class Method is working')      
          
      #static method   
      @staticmethod
      def childStaticMethod():
          print('child Static Method is working')          
      
  s1 = Student('Shine Shine','21',2023)
  print(s1.name,s1.age,s1.graduationyear)
  s1.exercise()
  
  Student.childClassMethod()
  Student.childStaticMethod()
  print(Student.childclassname)
  ```
  
  





### Method Override 

- `If you add a method in the child class with the same name as a function in the parent class, the inheritance of the parent method will be overridden.`

  ```python
  class Person:
    
      def __init__(self, name, age):
          print('Parent Constructor method is working')
          self.name = name
          self.age = age        
          
      def info(self):
          pass
  
      @staticmethod   
      def work():
          pass
          
      @classmethod   
      def eating(cls):
          pass
  
  
  class Developer(Person):       
      
      def __init__(self, name, age):
          print('Child Constructor method is working')
          super().__init__(name, age) # call parent constructor method
  
      #instance method
      def info(self):
          print(self.name,self.age)
  
      @staticmethod
      def work():
          print('Coding')
  
      @classmethod
      def eating(cls):
          print('Eating')
  
      
  d1 = Developer('Shine Shine','21')
  d1.info()
  d1.eating() # Developer.eating()
  d1.work() #  Developer.work()
  ```

  