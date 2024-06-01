##  Access Modifiers

- `In most of the object-oriented languages access modifiers are used to limit the access to the variables and functions of a class. `
- `The access modifiers in Python are used to modify the default scope of variables`
- `Most of the languages use three types of access modifiers, they are - private, public and protected.`
- `Just like any other` [object oriented programming language](https://www.studytonight.com/python/oops-basics-python), `access to variables or functions can also be limited in python using the access modifiers.`
- `Python makes the use of` **`underscores`** `to specify the access modifier for a specific data member and member function in a class.`





### Why

- `Access modifiers play an important role to protect the data from unauthorized access as well as protecting it from getting manipulated.` 
- `When inheritance is implemented there is a huge risk for the data to get destroyed(manipulated) due to transfer of unwanted data from the parent class to the child class`.
- ` Therefore, it is very important to provide the right access modifiers for different data members and member functions depending upon the requirements.`





###  Types of Access Modifiers

- `There are 3 types of access modifiers for a class in Python. `

  - `Public`

  -  `Protected`

  -  `Private`

- `These access modifiers define how the members of the class can be accessed`






### Public Access Modifier

- `By default, all the property and member method of a class are `**`public`** `in a python.`

- `Public members (generally methods declared in a class) are accessible from outside the class.`

  ```python
  class Person:
      # constructor
      def __init__(self, name, age):
          self.name = name;  # Public attribute
          self.age = age;  # Public attribute
          self.__cn = 'Person'
  
      # Pulic method
      def info(self):
          print(self.name, self.age)
  
  
  p1 = Person("Ironman", 50);
  print(p1.name)
  p1.info() 
  #print(p1.__cn) # can't access __cn private property
  
  
  class Developer(Person):
      pass
  
  d1 = Developer('Shine Shine',23)
  print(d1.name)
  d1.info()
  # print(d1.__cn) # can't access __cn private property
  ```







### Protected Access Modifier

- `The members of a class that are declared protected are only accessible to a derived class(sub-classes or child) from it`. 

- `Python's convention to make an instance property` **`protected`** `is to add a prefix _ (single underscore) to it. `

  ```python
  class Person:
  
      # Protected Property
      _count = 0  
  
      def __init__(self, name, age):
          self._name = name;
          self.age = age;
          Person._count += 1
  
      # Protected method
      def _info(self):
          print(self._name, self.age)
  
  
  p1 = Person("Ironman", 50)
  print(p1._name) #access protected property
  p1._info() #access protected method
  print(Person._count) #access protected class property
  
  #inheritance
  class Developer(Person):
      pass
  
  d1 = Developer('Shine Shine',23)
  print(d1._name)
  d1._info()
  print(Developer._count)
  ```

  





### Private Members

- `The members of a class that are declared private are accessible within the class only, private access modifier is the most secure access modifier`.

- Data members of a class are declared private by adding a double underscore ‘__’ symbol before the data member of that class.

- Python doesn't have any mechanism that effectively restricts access to any instance variable or method

  ```python
  class Person:
  
      # Private  Property
      __count = 0  
  
      def __init__(self, name, age):
          self.__name = name;
          self.age = age;
          Person.__count += 1
  
      # Private  method
      def __info(self):
          print(self.__name, self.age)
      
      def sayInfo(self):
          self.__info()
  
  
  p1 = Person("Ironman", 50)
  
  # print(p1.__name) # can't access private property
  # print(Person.__count) # can't access private property
  
  # p1.__info() # can't access private method
  
  p1.printInfo)()
  ```

  



### All in one Example

```python
# define parent class Company
class Company:
    # constructor
    def __init__(self, name, proj):
        self.name = name      # name(name of company) is public
        self._proj = proj     # proj(current project) is protected
    
    # public function to show the details
    def show(self):
        print("The code of the company is = ",self.ccode)

# define child class Emp
class Emp(Company):
    # constructor
    def __init__(self, eName, sal, cName, proj):
        # calling parent class constructor
        Company.__init__(self, cName, proj)
        self.name = eName   # public member variable
        self.__sal = sal    # private member variable
    
    # public function to show salary details
    def show_sal(self):
        print("The salary of ",self.name," is ",self.__sal,)

# creating instance of Company class
c = Company("Stark Industries", "Mark 4")
# creating instance of Employee class
e = Emp("Steve", 9999999, c.name, c._proj)

print("Welcome to ", c.name)
print("Here ", e.name," is working on ",e._proj)

# only the instance itself can change the __sal variable
# and to show the value we have created a public function show_sal()
e.show_sal()
```

