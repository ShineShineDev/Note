## Output Functions

- `Go has three functions to output text:`
  - `Print()`
  - `Println()`
  - `Printf()`



###  Print() 

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



### Println() 

- `The` **`Println()`**` function is similar to` **`Print()`** `with the difference that a whitespace is added between the arguments, and a newline is added at the end`

  ```go
  package main
  import ("fmt")
  
  func main() {
      var i,j string = "Hello","World"
      fmt.Println(i,j)
  }
  ```





### Printf() 

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

  

### Go Formatting Verbs

- `	Go offers several formatting verbs that can be used with the` **`Printf()`** `function.`

  
  
  #### General Formatting Verbs
  
  | Verb | Description                            |
  | :--- | :------------------------------------- |
  | %v   | Prints the value in the default format |
  | %#v  | Prints the value in Go-syntax format   |
  | %T   | Prints the type of the value           |
  | %%   | Prints the % sign                      |
  
  ```go
  package main
  import ("fmt")
  
  func main() {
      var i = 15.5
      var txt = "Hello World!"
      fmt.Printf("%v\n", i)
      fmt.Printf("%#v\n", i)
      fmt.Printf("%v%%\n", i)
      fmt.Printf("%T\n", i)
      fmt.Printf("%v\n", txt)
      fmt.Printf("%#v\n", txt)
      fmt.Printf("%T\n", txt)
  }
  //Result
  15.5
  15.5
  15.5%
  float64
  Hello World!
  "Hello World!"
  string
  ```
  
  #### Integer Formatting Verbs
  
  | Verb | Description                                |
  | :--- | :----------------------------------------- |
  | %b   | Base 2                                     |
  | %d   | Base 10                                    |
  | %+d  | Base 10 and always show sign               |
  | %o   | Base 8                                     |
  | %O   | Base 8, with leading 0o                    |
  | %x   | Base 16, lowercase                         |
  | %X   | Base 16, uppercase                         |
  | %#x  | Base 16, with leading 0x                   |
  | %4d  | Pad with spaces (width 4, right justified) |
  | %-4d | Pad with spaces (width 4, left justified)  |
  | %04d | Pad with zeroes (width 4                   |
  
  ```go
  package main
  import ("fmt")
  
  func main() {
    	var i = 15
    	fmt.Printf("%b\n", i)
    	fmt.Printf("%d\n", i)
    	fmt.Printf("%+d\n", i)
    	fmt.Printf("%o\n", i)
    	fmt.Printf("%O\n", i)
    	fmt.Printf("%x\n", i)
    	fmt.Printf("%X\n", i)
    	fmt.Printf("%#x\n", i)
    	fmt.Printf("%4d\n", i)
    	fmt.Printf("%-4d\n", i)
    	fmt.Printf("%04d\n", i)
  }
  //Resutl
  1111
  15
  +15
  17
  0o17
  f
  F
  0xf
    15
  15
  0015
  ```
  
  



More  => https://www.w3schools.com/go/go_formatting_verbs.php

