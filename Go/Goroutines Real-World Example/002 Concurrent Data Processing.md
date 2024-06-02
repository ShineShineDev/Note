### Real-World Example: Concurrent Data Processing

- `Another use case for goroutines is concurrent data processing, such as fetching data from multiple APIs or databases simultaneously.`

  ```go
  package main
  
  import (
      "fmt"
      "math/rand"
      "sync"
      "time"
  )
  
  func fetchData(source int, wg *sync.WaitGroup, results chan<- int) {
      defer wg.Done()
      time.Sleep(time.Duration(rand.Intn(3)) * time.Second) // Simulate varying response times
      result := rand.Intn(100) + source
      fmt.Printf("Fetched data from source %d: %d\n", source, result)
      results <- result
  }
  
  func main() {
      rand.Seed(time.Now().UnixNano())
      var wg sync.WaitGroup
      results := make(chan int, 3)
  
      for i := 1; i <= 3; i++ {
          wg.Add(1)
          go fetchData(i, &wg, results)
      }
  
      wg.Wait()
      close(results)
  
      var total int
      for result := range results {
          total += result
      }
  
      fmt.Printf("Total fetched data: %d\n", total)
  }
  
  ```

  > - **`fetchData`** `simulates fetching data from a source, taking a random amount of time.`
  > - `We use a` **`sync.WaitGroup`** `to wait for all fetch operations to complete.`
  > - `Results are sent to a channel and aggregated in the main function.`



