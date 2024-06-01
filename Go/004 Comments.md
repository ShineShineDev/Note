 ### Comments

- `Comments can be used`  **`to explain the code and prevent code execution`**
- `Go supports single-line or multi-line comments.`
- `Commands are Ignored by the compiler (will not be executed)`



### Single-line Comments

- `Single-line comments start with two forward slashes (`//).`

  ```go
  // This is a comment
  package main
  import ("fmt")
  
  func main() {
    // This is a comment
    fmt.Println("Hello World!")
  }
  ```

  

### Multi-line Comments

- ` Multi-line comments start with` **`/*`** `and ends with` **`*/`**.
- `Any text between` `/*` and `*/` `will be ignored by the compiler`

```go
package main
import ("fmt")

func main() {
  /* The code below will print Hello World
  to the screen, and it is amazing */
  fmt.Println("Hello World!")
}
```



