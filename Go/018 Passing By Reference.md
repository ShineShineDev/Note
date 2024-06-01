##  Packages

- `A package is a file or a group of files with a namespace and some code or related code. `



### main Package

- `The` **`main`** `package is the starting point for any executable Go program`

- `Programs in Go must have a `**`main`** `package, and within this package, there must be a` **`main function`**, `which serves as the entry point for program execution.`

- `A Go application must have a unique` **`main`** `function within th`e**`main`** `package.`

- `The` **`main`** `package cannot be imported by other packages. It is meant solely for defining the entry point of an application.`

  ```go
  // main.go
  package main
  
  import ("fmt")
  
  func main() {
      fmt.Printf("Hello Main package")
  }
  ```

  

### Package Declaration

- `Each Go source file begins with a` **`package`** `declaration, which defines the package to which the file belongs.`

  ```go
  package main
  ```



### Importing packages

- `To import a package in Go, you use the `**`import`**`keyword followed by the package path in quotes. Here’s a basic example`

  ```go
  import ("fmt") // Standard Library Packages
  ```





### Creating Custom Packages

- `You can create your own packages to organize your code.`

  #### Directory Structure

  ```tex
  project/
  └── main.go
  └── mathutils/
      └── mathutils.go
  ```

  #### Create Custom Packages

  ```go
  // mathutils/mathutils.go
  package mathutils
  
  func Add(a int, b int) int {
      return a + b
  }
  
  func Subtract(a int, b int) int {
      return a - b
  }
  ```

  #### Use the Package

  ```go
  // main.go
  package main
  
  import (
      "fmt"
      "project/mathutils"
  )
  
  func main() {
      sum := mathutils.Add(3, 4)
      difference := mathutils.Subtract(10, 6)
      fmt.Printf("Sum: %d\n", sum)
      fmt.Printf("Difference: %d\n", difference)
  }
  ```

  



### Commonly used packages in Go

- `Go's standard library is extensive and provides a wide range of packages that cover various aspects of programming.`
  - **`fmt`** : `Implements formatted I/O with functions similar to` **`C's printf and scanf`**.
  - **`os`** : `Provides a platform-independent interface to operating system functionality, such as file and process operations.`
  - **`io`** :  `Provides basic interfaces to I/O primitives, including readers and writers.`
  - **`strings`** :  `Contains functions to manipulate UTF-8 encoded strings.`
  - **`strconv`** : `Implements conversions to and from string representations of basic data types.`
  - **`net/http`** : `Provides HTTP client and server implementations`
  - **`time`** :   `Provides functionality for measuring and displaying time.`
  - **`math`** : `Provides basic constants and mathematical functions.`
  - **`encoding/json`** : `Implements encoding and decoding of JSON objects.`
  - **`log`** :  `Provides a simple logging package.`







