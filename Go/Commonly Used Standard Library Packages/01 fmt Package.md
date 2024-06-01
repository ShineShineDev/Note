## fmt package

- `The` **`fmt`** `package in Go (Golang) provides I/O formatting functions, such as printing to the console and reading input.`
- `It's part of the Go standard library and is widely used for formatting text, printing output, and reading input`



###  Print()  Function

- `Prints to standard output.`

```go
package main
import ("fmt")

func main() {
    var i,j string = "Hello","World"
    fmt.Print(i)
    fmt.Print(j)
    
    //If we want to print the arguments in new lines, we need to use \n.
  	fmt.Print("\n")
    
    fmt.Print(i, "\n",j) //multiple variables.
}
```



### Println()  Function

- `The` **`Println()`**` function is similar to` **`Print()`** `with the difference that a whitespace is added between the arguments, and a newline is added at the end`

  ```go
  package main
  import ("fmt")
  
  func main() {
      var i,j string = "Hello","World"
      fmt.Println(i,j)
  }
  ```



### Printf()  Function

- `The` **`Printf()`** `function first formats its argument based on the given formatting verb and then prints them.`

- **`%v`** `is used to print the` **value** `of the arguments`

- **`%T`** `is used to print the` **type** `of the arguments`

  ```go
  package main
  import ("fmt")
  
  func main() {
      var i string = "Hello"
      var j int = 15
      fmt.Printf("i has value: %v and type: %T\n", i, i)
      fmt.Printf("j has value: %v and type: %T", j, j)
  }
  
  > output
  i has value: Hello and type: string
  j has value: 15 and type: int
  ```

  > ### Formatting Verbs
  >
  > - `%v - Default format for the value.`
  > - `%T - Type of the value.`
  > - `%d  - Decimal integer.`
  > - `%s  - String.`
  > - `%f - Floating-point number.`
  > - `%t - Boolean.`
  > - `%p - Pointer.`



### Scan() Function

- `Reads from standard input.`

  ```go
  package main
  import ("fmt")
  
  func main() {
      var name string
      var age int
      fmt.Print("Enter your name and age: ")
      
      fmt.Scan(&name, &age) //read input from the standard input and store it in the variable
      
      fmt.Printf("Name: %s, Age: %d\n", name, age)
  }
  ```



### Scanln() Function

- `Similar to` **`fmt.Scan`**, `but stops scanning at a newline.`

  ```go
  package main
  import ("fmt")
  
  func main() {
  	var name string
  	fmt.Print("Enter your name: ")
  	fmt.Scanln(&name)
  	fmt.Println("Hello, ", name)
  }    
  ```



### Sscanf Fuction

- `Scans the input string` **`str`** `according to a format specifier.`

  ```go
  var name string
  var age int
  input := "Alice 30"
  fmt.Sscanf(input, "%s %d", &name, &age)
  fmt.Println(name, age)
  
  ```

  
