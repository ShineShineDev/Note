## Getter and Setter

> `We use getters & setters to add validation logic around getting and setting a value.`

- `Getters(also known as 'accessors') and setters (also known as 'mutators') are used in many object oriented programming languages to ensure the principle of data encapsulation.`

- `Data encapsulation - as we have learnt in our introduction on Object Oriented Programming of our tutorial - is seen as the bundling of data with the methods that operate on them.`

- `Private variables in python are not actually hidden fields like in other object oriented languages. Getters and Setters in python are often used when`

- `These methods are of course the getter for retrieving the data and the setter for changing the data. According to this principle, the attributes of a class are made private to hide and protect them.`

  

  

  
  
  

### Why use Getter and Setter

- `We use getters & setters to add validation logic around getting and setting a value.`
- `To avoid direct access of a class field i.e. private variables cannot be accessed directly or modified by external user.`



  


### Using normal function to achieve getters and setters behaviour

- `To achieve getters & setters property, if we define normal `**`get()` **and **`set()`** `methods it will not reflect any special implementation.`

  ```python
  class Account:
  
      def __init__(self, name, phone, password):
          self.name = name
          self.phone = phone
          self.__password = password
  
      # getter method
      def getPass(self):
          print(self.__password)
  
      # setter method
      def chnagePass(self, newPass):
          self.__password = newPass
          print(self.__password)
  
      def delPassPro(self):
          del self.__password
  
  
  acc = Account('Shine Shine', 23, '12kasdl')
  
  acc.getPass()
print(acc.__password) # this will raise AttributeError,because can't access private property
  
  acc.chnagePass('askdo232wlp-we=')
  acc.delPassPro()
  
  #acc.getPass()
  ```
  
  





### Using property() function to achieve getters and setters behaviour

- `In Python`**`property()`**`is a built-in function that creates and returns a property object. `

-  `A property object has three methods, getter(), setter(), and delete(). `

- **`property()`**`unction in Python has four arguments `**`property(fget, fset, fdel, doc)`** 

  - `fget` `is a function for retrieving an attribute value. `
  - `fset` `is a function for setting an attribute value. `
  - `fdel` `is a function for deleting an attribute value. `
  - `doc` `creates a docstring for attribute.` 

- `A property object has three methods, `**`getter()`**, **`setter()`**, `and` **`delete()`** `to specify ` `fget`, `fset` and `fdel` `individually.`

- **`Syntax`** : `propertyName = property(getter,setter,delter)       `

  ```python
  class Account:
  
      def __init__(self, name, phone, password):
          self.name = name
          self.phone = phone
          self.__password = password
  
      # getter method
      def getPass(self):
          print("getter method called") 
          print(self.__password)
  
      # setter method
      def chnagePass(self, newPass):
          print("setter method called") 
          self.__password = newPass
         
  
      def delPassPro(self):
          del self.__password
          
      # call property function with agr then assing to propertname
      # property() function in Python has four arguments property(fget, fset, fdel, doc)
      password = property(getPass,chnagePass,delPassPro)        
  
  
  acc = Account('Shine Shine', 23, '123')
  
  acc.password
  acc.password = '321'
  acc.password
  ```

   





 ### Using @property decorators to achieve getters and setters behaviour 

- `Python @property is one of the built-in decorators.` 

- `The main purpose of any decorator is to change your class methods or attributes in such a way so that the user of your class no need to make any change in their code`.

- **`Syntax`** :  

  - `Getter`

    - `@property
          def propertyname(self):
              print(self.__propertyname)`

  - `Setter`

    -  `@propertyname.setter
          def propertyname(self, newval):
              self.__propertyname = newval`

    

    ```python
    # Using @property decorators to achieve getters and setters behaviour
    class Account:
    
        def __init__(self, name, phone, password):
            self.name = name
            self.phone = phone
            self.__password = password
    
        # using property decorator
        # a getter function
        @property
        def password(self):
            print("getter method called")
            print(self.__password)
    
        @password.setter
        def password(self, newPass):
            print("setter method called")
            self.__password = newPass
    
    
    acc = Account('Shine Shine', 23, '123')
    acc.password
    acc.password = '321'
    acc.password
    ```

    

  

  