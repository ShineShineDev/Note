### Background Tasks

- `Goroutines are also useful for running background tasks, such as logging or monitoring.`

  ```go
  package main
  
  import (
      "fmt"
      "time"
  )
  
  func backgroundLogger() {
      for {
          fmt.Println("Logging some background data...")
          time.Sleep(2 * time.Second)
      }
  }
  
  func main() {
      go backgroundLogger() // Start the background logger
  
      // Main application logic
      for i := 1; i <= 5; i++ {
          fmt.Printf("Main application running: iteration %d\n", i)
          time.Sleep(1 * time.Second)
      }
  
      fmt.Println("Main application finished")
  }
  
  ```

  > - **`backgroundLogger`** `runs indefinitely, logging data every 2 seconds.`
  > - `The main function simulates the main application logic, running for a few iterations.`