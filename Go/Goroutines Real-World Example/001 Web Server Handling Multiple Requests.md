> `Goroutines are best used in scenarios where you need to perform multiple tasks concurrently, especially when those tasks are I/O-bound or involve waiting for external resources. Real-world examples include web servers handling multiple client requests, concurrent data processing, and background tasks like logging or monitoring.`



### Real-World Example: Web Server Handling Multiple Requests

- `One common use case for goroutines is in a web server that needs to handle multiple client requests concurrently. Let's build a simple web server in Go that uses goroutines to handle each incoming request.`

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
  
  
  //hit => http://localhost:8080/start-task
  ```

  

