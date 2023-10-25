 

##  Abstract class 

- `JavaScript not support Abstract class`
- `Abstract : Programming for interfaces rather than implementation`

- `What is : `

  - `also known as ABC`

  - `is a type of  special class in OOP` 

  - `is a template definition of methods and variables of a Class(Designed to be subclassed)`

  - `Cannot be instantiated(abstract classes are incomplete) `

  - `can have abstract methods(methods without body and can call declared) as well as concrete methods.A normal class cannot have abstract methods`

- `Why:`

  - `Programming for interfaces rather than implementation`

  - ` Share behavior without implemention and default implemention for related classes   ` 

  - `Used only as superclasses in inheritance hierarchies(Grouping classes together is important in keeping a program organized and understandable)`

  - ` to write flexible code`

  - `To add new feature in the future`

  - `To declare non-public members. In an interface, all methods must be public(java).`

  - `Can group several related classes together as siblings. Grouping classes together is important in keeping a program organized and understandable`

  - `An abstract class is mostly used to provide a base for subclasses to extend and implement the abstract methods and override or use the implemented methods in abstract class.`

    
  >`Share behavior without implemention and default implemention for child class(Abstract class is used to provide common method implementation to all the subclasses or to provide default implementation.)`
  >
  >`Technically abstract means something incomplete or to be completed later.`

    

- `How:`

    - `An abstract class or method is defined with the abstract "keyword"`

    - `All abstract method(method without body) of abstract class must be override ,but not in concert method`
    
    - `All inheritor  must be defined with the same name, and the same or a less restricted access modifier and The number of required arguments must be the same`
    
    - `The child class may have optional arguments in addition in PHP`
    
    - `If a class have abstract methods, then the class should also be abstract using abstract keyword, else it will not compile.`
    
    - `It’s not necessary for an abstract class to have abstract method. We can mark a class as abstract even if it doesn’t declare any abstract methods.`
    
      
    
      



#### Difference between Abstract Class and Interface

| **Abstract Class**                                           | **Interface**                                               |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| An abstract class can have both abstract and non-abstract methods. | The interface can have only abstract methods.               |
| It can provide the implementation of the interface.          | It can not provide the implementation f the abstract class. |
| An abstract class can have protected and abstract public methods. | An interface can have only have public abstract methods.    |

![What is the difference between an interface and abstract class? - Stack  Overflow](https://i.stack.imgur.com/Xf8Yz.png)







#### Example of abstract class with PHP

```js
<?php

// Parent class
abstract class Human {
  public $name;
  public function __construct($name) {
    $this->name = $name;
  }
  //hare behavior without implemention 
  abstract public function work() : string;
    
  //default implemention 
  public function sleep(){
     return this->name . "is sleeping";
  }  
}

// Child classes
class Teacher extends Human {
  public function work() : string {
    return "Teaching";
  }
}
// Child classes
class Dev extends Human {
 public function work() : string {
    return "coding";
  }
}

$teacher = new Teacher("Noy");
$teacher->work();
$dev = new Dev("shine shine");
$dev->work();
?>
```





#### Example of abstract class with JAVA

```java

package com.journaldev.design;

//abstract class
public abstract class Person {
	
	private String name;
	private String gender;
	
	public Person(String nm, String gen){
		this.name=nm;
		this.gender=gen;
	}
	
	//abstract method
	public abstract void work();
	
	@Override
	public String toString(){
		return "Name="+this.name+"::Gender="+this.gender;
	}

	public void changeName(String newName) {
		this.name = newName;
	}	
}


package com.journaldev.design;

public class Employee extends Person {
	
	private int empId;
	
	public Employee(String nm, String gen, int id) {
		super(nm, gen);
		this.empId=id;
	}

	@Override
	public void work() {
		if(empId == 0){
			System.out.println("Not working");
		}else{
			System.out.println("Working as employee!!");
		}
	}
	
	public static void main(String args[]){
		//coding in terms of abstract classes
		Person student = new Employee("Dove","Female",0);
		Person employee = new Employee("Pankaj","Male",123);
		student.work();
		employee.work();
		//using method implemented in abstract class - inheritance
		employee.changeName("Pankaj Kumar");
		System.out.println(employee.toString());
	}

}

```





