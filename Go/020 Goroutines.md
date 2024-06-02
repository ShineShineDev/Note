

## Concurrency in Golang

>  **`Concurrency is the ability of a program to manage multiple tasks at once`**

- `Concurrency in Go is a fundamental feature that allows you to write programs that can handle multiple tasks simultaneously. It's achieved through` **`goroutines, channels, and other synchronization primitives.`**



###  Goroutines

- `They’re light-weight and managed by the Go runtime, rather than operating system (OS) threads. `

- `Goroutines provide a higher-level,more efficient an easy way to perform tasks concurrently.whereas traditional OS threads offer more control but at the cost of increased complexity and resource usage`

  

### Creating a Goroutine  

- `To start a goroutine, you simply prefix a function call with the` **`go`** `keyword. This function will then run concurrently with the calling function.`

  ```go
  package main
  import (
      "fmt"
      "time"
  )
  
  func sayHello() {
      fmt.Println("Hello, world!")
  }
  
  func main() {
      go sayHello() 
      time.Sleep(1 * time.Second) // Sleep to allow the goroutine to finish
  }
  
  ```

  **Web Scraping with Goroutines**

  ```go
  package main
  
  import (
      "fmt"
      "net/http"
      "time"
  )
  
  func fetchURL(url string, ch chan string) {
      start := time.Now()
      resp, err := http.Get(url)
      if err != nil {
          ch <- fmt.Sprintf("Error fetching %s: %v", url, err)
          return
      }
      defer resp.Body.Close()
  
      elapsed := time.Since(start).Seconds()
      ch <- fmt.Sprintf("Fetched %s in %.2f seconds", url, elapsed)
  }
  
  func main() {
      urls := []string{
          "https://www.golang.org",
          "https://www.google.com",
          "https://www.github.com",
      }
  
      ch := make(chan string)
  
      for _, url := range urls {
          go fetchURL(url, ch)
      }
  
      for range urls {
          fmt.Println(<-ch)
      }
  }
  
  ```




### Why Use Goroutines?

- **`Concurrency`**: `Goroutines allow you to perform multiple tasks simultaneously, which can improve the performance of your program, especially for I/O-bound taskse.`
- **`Efficiency`**: `Goroutines are more memory-efficient than traditional threads. They start with a small stack, which grows and shrinks as needed.`
- **`Simplicity`**: `Goroutines simplify concurrent programming by avoiding the complexity of managing threads.`





### Comparison Goroutines & OS Threads

- **`Goroutines`**:
  - `Managed by the Go runtime.`
  - `Lightweight and more efficient in terms of memory.`
  - `Use the Go scheduler for efficient concurrency.`
  - `Easier to use with built-in support for channels and synchronization.`
- **`OS Threads`**:
  - `Managed by the operating system.`
  - `Heavier and consume more resources.`
  - `Require manual synchronization and communication mechanisms (e.g., mutexes, condition variables).`
  - `More control over low-level threading details.`



### How Threads Differ from Goroutines

- `Traditional threads are managed by the OS and typically have a significant amount of memory allocated to them (often around 1MB per thread). In contrast, goroutines start with much less memory (a few KB), and can grow or shrink as needed, which allows you to run thousands, or even millions, of goroutines simultaneously.`
- `Another key difference is how they are scheduled. OS threads are preemptively scheduled by the OS, while goroutines are cooperatively scheduled by the Go runtime. This means that the runtime decides when to pause and resume goroutines, leading to better performance and less resource consumption.`

> `In summary, goroutines provide a higher-level, more efficient, and easier-to-use abstraction for concurrency in Go, whereas traditional OS threads offer more control but at the cost of increased complexity and resource usage.`





### Real-World Example: Web Server Handling Multiple Requests

```go
package main

import (
    "fmt"
    "net/http"
    "sync"
    "time"
)

var (
    mu      sync.Mutex
    tasks   = make(map[string]string)
    taskID  = 1
)

func generateTaskID() string {
    mu.Lock()
    defer mu.Unlock()
    id := fmt.Sprintf("task-%d", taskID)
    taskID++
    return id
}

func timeConsumingTask(taskID string) {
    time.Sleep(10 * time.Second) // Simulate a task taking 3 seconds
    mu.Lock()
    fmt.Println("completed ",taskID)
    tasks[taskID] = "completed"
    mu.Unlock()
}

func startTaskHandler(w http.ResponseWriter, r *http.Request) {
    taskID := generateTaskID()
    mu.Lock()
    fmt.Println("in-progress ",taskID)
    tasks[taskID] = "in-progress"
    mu.Unlock()
    go timeConsumingTask(taskID) // Run the task in a separate goroutine
    fmt.Fprintf(w, "Task started with ID: %s", taskID)
}

func checkTaskHandler(w http.ResponseWriter, r *http.Request) {
    taskID := r.URL.Query().Get("id")
    mu.Lock()
    status, exists := tasks[taskID]
    mu.Unlock()
    if !exists {
        http.Error(w, "Task not found", http.StatusNotFound)
        return
    }
    fmt.Fprintf(w, "Task %s status: %s", taskID, status)
}

func main() {
    http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, World!")
    })
    http.HandleFunc("/start-task", startTaskHandler)
    http.HandleFunc("/check-task", checkTaskHandler)

    fmt.Println("Starting server on :8080")
    if err := http.ListenAndServe(":8080", nil); err != nil {
        fmt.Println("Error starting server:", err)
    }
}

```

