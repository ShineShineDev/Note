## Polymorphism

> **`A common interface for multiple forms`**

- `This is a Greek word. If we break the term Polymorphism, we get “poly”-many and “morph”-forms. So Polymorphism means having many forms. In OOP it refers to the functions having the same names but carrying different functionalities.`

- `Polymorphism is an ability (in OOP) to use a common interface for multiple forms (data types).`

- `For example, we need to color a shape, there are multiple shape options (rectangle, square, circle). However we could use the same method to color any shape. This concept is called Polymorphism.`

- `Polymorphism is of two types:`

  - `Compile-time Polymorphism (method overloading)`
  - `Run-time Polymorphism (method overriding)`

  

  



#### **Compile-time Polymorphism:**

- `A compile-time polymorphism also called as static polymorphism which gets resolved during the compilation time of the program.`

- ` One common example is` **`method overloading`**

- `Method overloading refers to the property of a method to behave in different ways depending upon the number or types of the parameters`

  ```python
  class employee1():
  
      def name(self):
          print("Harshit is his name")
  
      def salary(self):
          print("3000 is his salary")
  
      def age(self):
          print("22 is his age")
  
  class employee2():
  
      def name(self):
          print("Rahul is his name")
  
      def salary(self):
          print("4000 is his salary")
  
      def age(self):
          print("23 is his age")
  
  
  def func(obj): # Method Overloading
      obj.name()
      obj.salary()
      obj.age()
  
  
  obj_emp1 = employee1()
  obj_emp2 = employee2()
  
  func(obj_emp1)
  func(obj_emp2)
  
  """
  In the above Program, I have created two classes employee1 and employee2 and created functions for both name, salary and age and printed the value of the same without taking it from the user.Then,I have created a function with ‘obj’ as the parameter and calling all the three functions i.e. name, age and salary.
  Later, instantiated objects emp_1 and emp_2 against the two classes and simply called the function.Such type is called method overloading which allows a class to have more than one method under the same name.
  """
  
  
  # another example
  class Parrot:
  
      def fly(self):
          print("Parrot can fly")
      
      def swim(self):
          print("Parrot can't swim")
  
  class Penguin:
  
      def fly(self):
          print("Penguin can't fly")
      
      def swim(self):
          print("Penguin can swim")
  
  # common interface
  def flying_test(bird): # Compile-time Polymorphism or overloading
      bird.fly()
  
  #instantiate objects
  blu = Parrot()
  peggy = Penguin()
  
  # passing the object
  flying_test(blu)
  flying_test(peggy)
  
  """
  In the above program, we defined two classes Parrot and Penguin. Each of them have a common fly()`method. However, their functions are different.`
  
  To use polymorphism, we created a common interface i.e `flying_test()` function that takes any object and calls the object's fly() method. Thus, when we passed the blu and peggy objects in the flying_test() function, it ran effectively.
  ```







#### **Run-time Polymorphism:**

- `A run-time Polymorphism is also, called as dynamic polymorphism where it gets resolved into the run time.`

- `One common example of Run-time polymorphism is` **`method overriding`**

- `Method overriding refers to having a method with the same name in the child class as in the parent class. The definition of the method differs in parent and child classes but the name remains the same.`

- `You can always override your parent class methods. One reason for overriding parent's methods is because you may want special or different functionality in your subclass.`

  ```python
  # Run-time Polymorphism or overriding
  class Person:
  
      def __init__(self,name,age,color,height,parent):
          self.name = name
          self.age = age
          self.color = color
          self.height = height
          self.father = parent[0]
          self.mother = parent[1]
  
      def eating(self):
          print(self.name, 'is eating')
  
      def sleeping(self):
          print(self.name, 'is sleeping')
  
      def work(self): # interface
          pass
  
  
  #Teacher class    
  class Teacher(Person):
      
      def work(self):
          print(self.name, 'is teaching')
          
  #Deveoper        
  class Developer(Person):
  
      def work(self):
          print(self.name, 'is Coding')
  
  
  
  t1 = Teacher('Mg Mg',24,'white',"5'5",['U Mya','Daw Hla'])
  
  d1 = Developer('Aung Aung',23,'white',"5'4",['U Mg','Daw Lay'])
  
  t1.work()
  d1.work()
  ```

  



### Base Overloading Methods

- `Following lists some generic functionality that you can override in your own classes `
  - `init__ ( self [,args...] ) : Constructor (with any optional arguments)Sample Call : obj = className(args)`
  - `__del__(self) : Destructor, deletes an objectSample Call : del obj`
  - `__repr__( self ) : Evaluable string representationSample Call : repr(obj)`
  - `__str__( self ) : Printable string representationSample Call : str(obj)`
  - `cmp__ ( self, x ) : Object comparisonSample Call : cmp(obj, x)`