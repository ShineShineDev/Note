## Loop

- `Used to repeatedly run a set of instruction while a given condition is true or false`
- `The for loop is the only loop available in Go.`



### Basic Loop

```go
for i:=0; i < 5; i++ {
    fmt.Println(i)
}
```



### For Loop with a Single statement

```go
i := 0 //Initializes the loop counter value.
for i < 10 { //Evaluated
    fmt.Println(i)
    i++ //Increases counter value
}
```



### Infinite Loop

```go
for {
    fmt.Println("Infinite loop")
}
```



### Range Loop

- `Range Loop` : The **`range`** `keyword is used to iterate over elements in various data structures such as` **`arrays, slices, maps, strings, and channels.`**

  

  #### Iterating over a Slice or Array

  ```go
  numbersArray := [5]int{1, 2, 3, 4, 5}
  for index, value := range numbersArray {
      fmt.Println(index, value)
  }
  ```

  #### Iterating over Slice 

  ```go
  numbersSlice := []int{1, 2, 3, 4, 5}
  for index, value := range numbersSlice {
      fmt.Println(index, value)
  }
  ```

  

  #### Iterating over a String

  ```go
  for index, runeValue := range "hello" {
      fmt.Printf("%#U starts at byte position %d\n", runeValue, index)
  }
  ```

  #### Iterating over a Map

  ```go
  fruits := map[string]string{"a": "apple", "b": "banana"}
  for key, value := range fruits {
      fmt.Println(key, value)
  }
  ```

  #### Iterating over a Channel

  ```go
  ch := make(chan int)
  go func() {
      for i := 0; i < 5; i++ {
          ch <- i
      }
      close(ch)
  }()
  for value := range ch {
      fmt.Println(value)
  }
  ```



### The continue Statement

- `The continue statement is used to skip one or more iterations in the loop. It then continues with the next iteration in the loop.`

  ```go
  for i := 0; i < 10; i++ {
      if i%2 == 0 {
          continue // Skip even numbers
      }
      fmt.Println(i) // This will print only odd numbers
  }
  
  i := 0
  for i < 10 {
      if i%2 == 0 {
          i++
          continue // Skip even numbers
      }
      fmt.Println(i) // This will print only odd numbers
      i++
  }
  
  //range Loop with continue
  numbers := []int{1, 2, 3, 4, 5}
  for _, value := range numbers {
      if value%2 == 0 {
          continue // Skip even numbers
      }
      fmt.Println(value) // This will print only odd numbers
  }
  
  ```



### Using continue with Labels

- `Go also supports labeled loops, which can be useful if you have nested loops and want to specify which loop to continue. Here’s an example with a labeled loop:`

  ```go
  outerLoop:
  for i := 0; i < 3; i++ {
      for j := 0; j < 3; j++ {
          if i == j {
              continue outerLoop // Continue the outer loop
          }
          fmt.Printf("i = %d, j = %d\n", i, j)
      }
  }
  ```



### The break Statement

- `The break statement is used to break/terminate the loop execution.`

  ```go
  for i := 0; i < 10; i++ {
      if i == 5 {
          break // Exit the loop when i is 5
      }
      fmt.Println(i) // This will print numbers 0 to 4
  }
  
  i := 0
  for i < 10 {
      if i == 5 {
          break // Exit the loop when i is 5
      }
      fmt.Println(i) // This will print numbers 0 to 4
      i++
  }
  
  //range Loop with break
  numbers := []int{1, 2, 3, 4, 5}
  for _, value := range numbers {
      if value == 3 {
          break // Exit the loop when value is 3
      }
      fmt.Println(value) // This will print 1 and 2
  }
  
  ```



### Using `break` with Labels

- `Go allows the use of labeled loops, which can be particularly useful if you need to break out of nested loops. Here’s an example of using a labeled break statement`

  ```go
  outerLoop:
  for i := 0; i < 3; i++ {
      for j := 0; j < 3; j++ {
          if i == j {
              break outerLoop // Exit both loops when i equals j
          }
          fmt.Printf("i = %d, j = %d\n", i, j)
      }
  }
  ```

  

