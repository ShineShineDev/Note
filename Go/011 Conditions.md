## Go Conditions statement

- `Conditional statements are used to perform different actions based on different conditions.`

  

### if Statement

- `Use the if statement to specify a block of Go code to be executed if a condition is true`.

- `Syntax : if statement {}`

- `Note that`**`if` **`is in lowercase letters. Uppercase letters (If or IF) will generate an error.`

  ```go
  package main
  import ("fmt")
  
  func main() {
    x:= 20
    y:= 18
    if x > y {
      fmt.Println("x is greater than y")
    }
  }
  ```

  


### The else Statement

- Use the **`else`** `statement to specify a block of code to be executed if the condition is` **`false`**.

  ```go
  import ("fmt")
  
  func main() {
      temperature := 14
      if (temperature > 15) {
          fmt.Println("It is warm out there")
      } else {
          fmt.Println("It is cold out there")
      }
  }    
  ```
  
  :warning: `Having the else brackets in a different line will raise an error:`
  
  ```go
  temperature := 14
  if (temperature > 15) {
  } // this raises an error
  else {
  }
  
  //error
  ./prog.go:9:3: syntax error: unexpected else, expecting }
  ```
  
  
  
#### else if Statement

- `Use the` **`else if`** `statement to specify a new condition if the first condition is` **`false`**.

  ```go
  package main
  import ("fmt")
  
  func main() {
      time := 22
      if time < 10 {
          fmt.Println("Good morning.")
      } else if time < 20 {
          fmt.Println("Good day.")
      } else {
          fmt.Println("Good evening.")
      }
  }
  ```



