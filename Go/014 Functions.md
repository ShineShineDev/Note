## Functions

- `Function is a block of code designed to perform a particular task.`
- `Reuse (define the code once, and use it many times)`
- `Readable(copying and pasting the needed code into multiple places is a bad idea)`
- `Modularity (divide a large program into multiple small modules modularity`
- `Hide the complexities(you don't want to worry about the internal working of a function)`



### Create Basic Function

```go
package main
import "fmt"

func sayHello() {
    fmt.Println("Hello")
}

func main() {
    sayHello()
}
```



### Create  Function With Arguments

```go
package main
import "fmt"

func addAndPrint(a int, b int)  {
    fmt.Println(a + b)
}

func main() {
    addAndPrint(12,32)   
}
```



### Create  Function With Returns Type

```go
package main

import "fmt"

// Function that adds two integers and returns integer value
func add(a int, b int) int {
    return a + b
}

func main() {
    sum := add(3, 4)
    fmt.Println("Sum:", sum)
}
```





### Named Return Values

- `In Go, you can name the return values of a function.`

  ```go
  package main
  import ("fmt")
  
  func myFunction(x int, y int) (result int) {
    result = x + y
    return
     //or
     //return result
  }
  
  func main() {
    fmt.Println(myFunction(1, 2))
  }
  ```



### Multiple Return Values

- `Go functions can also return multiple values.`

  ```go
  package main
  import ("fmt")
  
  func myFunction(x int, y string) (result int, txt1 string) {
    result = x + x
    txt1 = y + " World!"
    return
  }
  
  func main() {
    fmt.Println(myFunction(5, "Hello"))
  }
  ```



### Store Multiple Return Values

```go
package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
  a, b := myFunction(5, "Hello")
  fmt.Println(a, b)
}
```





### Omit the first returned value

```go
package main
import ("fmt")

func myFunction(x int, y string) (result int, txt1 string) {
  result = x + x
  txt1 = y + " World!"
  return
}

func main() {
    _, b := myFunction(5, "Hello") 
    fmt.Println(b)
    
    //this raise error
    abc := myFunction(5, "Hello") // prog.go:13:6: assignment mismatch: 1 variable but myFunction returns 2 values
}
```





### Recursion Functions

- ` This has the benefit of meaning that you can loop through data to reach a result.`

  ```go
  package main
  import "fmt"
  
  // Recursive function that counts down from n to 0
  func countdown(n int) {
      if n < 0 {
          return
      }
      fmt.Println(n)
      countdown(n - 1)
  }
  
  func main() {
      countdown(5) // Change the starting number as needed
  }
  ```

  
