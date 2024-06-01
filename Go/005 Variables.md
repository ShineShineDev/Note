##  Variables

- `As a program runs, it needs to hold information in its memory. `
- `Variables allow us to store, change and access`



### Data Types

- `Data types specify the type of data that a valid  variable can hold.`
- `Data type specifies the size and type of variable values.`
- `Go is statically typed, meaning that once a variable type is defined, it can only store data of that type`



### Data Types of Go

- **`Basic type`:** 
  - **`Numbers`**
  - **`Strings`**
  -  **`Booleans`**
- **`Aggregate type`** :
  - **`Array`** 
  - **`Structs`**
- **`Reference type`:** 
  - **`Pointers`**
  - **`Slices`**
  -  **`Maps`**
  -  **`Functions`**
  -  **`Channels`**



### Creating Variables

- `In Go, there are two ways to declare a variable`

  - **`var`** `keyword and`
  
  -  **`:=`**  `sign`
  
  ```go
  package main
  
  func main(){
      
  	var a bool = true     // Boolean
  	var b int = 5         // Integer
  	var c float32 = 3.14  // Floating point number
    	var d string = "Hi!"  // String
      
  	var fname string = "John" //type is string
  	var lname = "Jane" //type is inferred
  	num := 2 //type is inferred
      
      var x float64 = 1.7e+308
      var y int = -4500
  }
  ```



#### Variable Declaration

- `In Go, all variables are initialized. So, if you declare a variable without an initial value, its value will be set to the default value of its type:`

  ```go
  package main
  import ("fmt")
  func main() {
      
      var a string
      fmt.Println(a) // output will empty string
      
      var b int
      fmt.Println(b) // output => 0
      
      var c bool
      fmt.Println(c) // output => false
      
  	var name string
    	name = "John" // Value Assignment After Declaration
    	fmt.Println(name)
  }
  ```
  
  

### Difference Between var and :=

| var                                                          | :=                                                           |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| Can be used **inside** and **outside** of functions          | Can only be used **inside** functions                        |
| Variable declaration and value assignment **can be done separately** | Variable declaration and value assignment **cannot be done separately** (must be done in the same line) |

```go
package main
import ("fmt")

var a int
var b int = 2
var c = 3

z := 1 //will return syntax error

func main() {
    a = 1
    fmt.Println(a)
    fmt.Println(b)
    fmt.Println(c)
}
```



### Multiple Variable Declaration

- `If you use the ` **`type`** `keyword, it is only possible to declare` **`one type`** `of variable per line.`
- `If the` **`type`** ``keyword is not specified, you can declare different types of variables in the same line`

```go
package main
import ("fmt")

func main() {
    var a, b, c, d int = 1, 3, 5, 7 //if use type keyword only possible to declare one type of variable per line
    
    var e, f = 6, "Hello"  //if not specified type,different types of variables in the same line
    g, z := 7, "World!"
    
    //Multiple variable declarations can also be grouped together into a block for greater readability:
    var (
        a int
        b int = 1
        c string = "hello"
   )
}
```







####  Numbers Data types

- integer Numbers

  |  Data Type  |                         Description                          |
  | :---------: | :----------------------------------------------------------: |
  |  **int8**   |                     8-bit signed integer                     |
  |  **int16**  |                    16-bit signed integer                     |
  |  **int32**  |                    32-bit signed integer                     |
  |  **int64**  |                    64-bit signed integer                     |
  |  **uint8**  |                    8-bit unsigned integer                    |
  | **uint16**  |                   16-bit unsigned integer                    |
  | **uint32**  |                   32-bit unsigned integer                    |
  | **uint64**  |                   64-bit unsigned integer                    |
  |   **int**   |  Both int and uint contain same size, either 32 or 64 bit.   |
  |  **uint**   |  Both int and uint contain same size, either 32 or 64 bit.   |
  |  **rune**   | It is a synonym of int32 and also represent Unicode code points. |
  |  **byte**   |                  It is a synonym of uint8.                   |
  | **uintptr** | It is an unsigned integer type. Its width is not defined, but its can hold all the bits of a pointer value. |

- Floating-Point Numbers

  |  Data Type  |              Description              |
  | :---------: | :-----------------------------------: |
  | **float32** | 32-bit IEEE 754 floating-point number |
  | **float64** | 64-bit IEEE 754 floating-point number |

- Complex Numbers

  |   Data Type    |                         Description                          |
  | :------------: | :----------------------------------------------------------: |
  | **complex64**  | Complex numbers which contain float32 as a real and imaginary component. |
  | **complex128** | Complex numbers which contain float64 as a real and imaginary component. |



