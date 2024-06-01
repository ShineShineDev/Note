## Constants

- `If a variable should have a fixed value that cannot be changed, you can use the`  **`const`** ``keyword.`
- `The` **`const`** `keyword declares the variable as "constant", which means that it is` **`unchangeable and read-only`**.



### Declaring a Constant

- `When a constant is declared, it is not possible to change the value later:`

  ```go
  package main
  import ("fmt")
  
  const PI = 3.14
  const A int = 1
  const NAME = "spidey"
  
  func main() {
      fmt.Println(PI)
  }
  ```

  

### Multiple Constants Declaration

```go
package main
import ("fmt")

const (
    A int = 1
    B = 3.14
    C = "Hi!"
)

func main() {
    fmt.Println(A)
    fmt.Println(B)
    fmt.Println(C)
}
```



### Constant Rules

- `Constant names are usually written in uppercase letters (for easy identification and differentiation from variables)`

- `Constants can be declared both inside and outside of a function`

  