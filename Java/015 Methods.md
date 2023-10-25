## Method

>  `Methods are used to perform certain actions, and they are also known as functions,You can pass data, known as parameters, into a method`





### Defining Methods  

- `The only required elements of a method declaration are`

  -  `method's return type`
  -  `method's name`
  - ` a pair of parentheses, ()`
  -  ` a body between braces, {}`

- `More generally, method declarations have six components, in order`

  1. `Modifiers(public`, `private) `
  2. `Return type(void,int)`
  3. `Method name`
  4. `Parameter list` 
  5. `An exception list`
  6. `Method body`

  ```java
  class User{	
      public static void Main(String[] ars){}  //Static Method
      private void validateRequest(String[] input){} //instance method
      public int addTowNum(int fn,int sn){} //instance method
  }
  ```

  

  

### Method overloading

- `In Java Can write same method name with different arg list,because Java define a method with method singanture(JVM see =>`  **`Method name + Arg list = Method Signatures` **).`They can call` **`method overloading`**

  ```java
  class User{
      public String[] post(){}
      public String post(int id){}
      public String post(String name, int id){}
  }
  ```

  

  

### Static Method

> `Static methods are often used for utility functions, such as mathematical operations or input/output operations `

- `They are declared using the keyword static`

- `Can be called without the objects,`

- `Associated with the class rather than an object.` `

- `Can access only static attributes.`

  ```java
  class User{
      //static method
      public static void Main(String[] ars){
      }
      //static method
      public static int cal(int fn,int sn){
          add(fn,sn)
          mutiply(fn,sn)//can't call instance method from static method
      }
      //static method
      public static int add(int fn,int sn){
      }
      //instance method
      public int mutiply(int fn,int sn){
      }
  }
  ```
  
  > `Another downside is that they can create hidden dependencies between classes. This means that if Class A calls Class B’s static method, and Class B’s method depends on data from Class C, then Classes A and B are now indirectly linked. If Class C is changed in any way, Classes A and B will need to be updated as well. `



#### Memory Allocation of Static Methods

> `Static methods is a particular type of method that belongs to the class rather than any specific class instance. This means you can call a static method from anywhere in your code without creating an instance of the class first.`
>
> `Static methods are always called in the same way, regardless of the object used. This is because they are stored in a particular memory section allocated when the class is loaded. This means that they don’t use up any memory allocated to individual objects, and they don’t have to be reinitialized every time they are called. `
>
> `Static methods differ from instance methods, which are only available when you create an instance of the class. Instance methods can only be called from within the object that contains them, and they use up part of the object’s memory allocation. `





### Instance Methods

> `Instance methods are used for actions that are specific to a particular object.`

- `Require an object creation to call an instance method`

- `Associated with the objects`

- `Can access all attributes of a class`

- `Doesn’t require any keyword`

  ```java
  class User{
  	public static void Main(String[] ars){
          User user = new User();
          user.sayName("Spidey"); //Require an object creation to call an instance method
          System.out.println(user.addTowNum(1,2));
      }
      void sayName(String name){
          System.out.println(name);
      }
      int addTowNum(int fn,int sn){
          return fn + sn;
      }
  }
  ```

  



### Constructor Method

> `Constructor Method is special method use to initializae object state(value)  `

- `no return type `

- `name must be class's name`

- `can use Method overloading`

  ```java
  import java.util.Scanner;
  class App{
      public static void main(){
          User user_one = new User("spide");
          Scanner sc = new Scanner(System.in);
          sc.nextLine();
          User user_two = new User("spide",21);
      }
  }
  class User{
  	String name;
  	int age;
  
  	User(String name,int age){
  		this.name = name;
  		this.age = age;
  	}
      //Constructor Method overloading
  	User(String name){ 
  		this.name = name;
  		this.age = age;
  	}
      public static void main(String[] args){
          
      }
  }
  ```
  
  



 ### Code Block

> `Code Block can use to initializae state for static value and instance value ` 
>
> `static Code Block will work one time when you create new new Object`

- `static Code Block`

- `instance Code Block`

- `local code Block`

  ```java
  class App{
      public static void Main(){
          User user_one = new User("spide");
          User user_two = new User("spide",21);
      }
  }
  class User{
      //static code block
      static {
          
      }
      //instance code block
      {
          
      }
      public void find(int id){
          //local Code Block
          {
              
          }
      }
  }
  ```

  





```java
class User{
	
    //Constructure Method
    User(){}
    User(String name){} //Constructure Method overloading
    
    //static method
    public static int add(int fn,int sn){}
    public static int add(int fn,int sn,int ln){} //static method overlaod
    
    //Instance method(object method)
    void sayName(){}
    void sayName(String name){} //Instance method(object method) overlaoding
    
    
    //static code block
    static {
    }
    //instance code block
    {
        
    }
    void hello(){
    	//local code block    
        {
            
        }
    }
    
}
```







