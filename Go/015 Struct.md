## Struct

- `A struct (short for structure) is used to create a collection of members of different data types, into a single variable.`
- `While arrays are used to store multiple values of the same data type into a single variable, structs are used to store multiple values of different data types into a single variable`
- `In Go (Golang), a struct is a composite data type that groups together variables under a single name for creating complex data structures. Structs can contain fields of various types and are used to represent objects or records.`



### Defining a Struct

- `To define a struct, you use the type keyword followed by the name of the struct and the struct keyword`

```go
type Person struct {
    Name   string
    Age    int
    Email  string
}
```





### Creating and Initializing Structs

- `You can create an instance of a struct in several ways`

  

  ##### Using a struct literal 

  ```go
  p1 := Person{Name: "Alice", Age: 30, Email: "alice@example.com"}
  ```

  ##### Using the new keyword

  ```go
  p2 := new(Person)
  p2.Name = "Bob"
  p2.Age = 25
  p2.Email = "bob@example.com"
  ```

  ##### Using the var keyword

  ```go
  var p3 Person
  p3.Name = "Charlie"
  p3.Age = 35
  p3.Email = "charlie@example.com"
  ```
  
    
  
  
### Accessing and Modifying Struct Fields

- `You can access and modify struct fields using the dot (.) notation`

  ```go
  fmt.Println(p1.Name)  // Output: Alice
  p1.Age = 31
  fmt.Println(p1.Age)   // Output: 31
  ```





### Anonymous Structs

- `Go also supports anonymous structs, which are useful for short-lived structures`

  ```go
  p := struct {
      Name  string
      Age   int
      Email string
  }{
      Name:  "Dave",
      Age:   40,
      Email: "dave@example.com",
  }
  fmt.Println(p)
  ```





### Methods on Structs

- `Go allows you to define methods on struct types. A method is a function that has a receiver, which is a variable of the struct type.`

  ```go
  func (p *Person) Greet() string {
      return "Hello, my name is " + p.Name
  }
  
  p := Person{Name: "Frank"}
  fmt.Println(p.Greet())  // Output: Hello, my name is Frank
  ```





### Struct Tags

- `Struct fields can have tags, which are metadata associated with the fields, typically used for encoding and decoding (e.g., with JSON)`

  ```go
  type User struct {
      Username string `json:"username"`
      Password string `json:"password"`
  }
  
  u := User{Username: "john_doe", Password: "securepassword"}
  jsonData, _ := json.Marshal(u)
  fmt.Println(string(jsonData))  // Output: {"username":"john_doe","password":"securepassword"}
  ```

  



### Pass Struct as Function Arguments

```go
package main
import ("fmt")

type Person struct {
  name string
  age int
  job string
  salary int
}

func main() {
  var pers1 Person
  
  pers1.name = "Hege"
  pers1.age = 45
  pers1.job = "Teacher"
  pers1.salary = 6000
    
  printPerson(pers1)
}

func printPerson(pers Person) {
  fmt.Println("Name: ", pers.name)
  fmt.Println("Age: ", pers.age)
  fmt.Println("Job: ", pers.job)
  fmt.Println("Salary: ", pers.salary)
}
```



