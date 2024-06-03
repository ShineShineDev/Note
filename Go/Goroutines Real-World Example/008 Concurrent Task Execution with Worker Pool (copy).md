### Concurrent Task Execution with Worker Pool

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func worker(id int, tasks <-chan string, results chan<- string, wg *sync.WaitGroup) {
    defer wg.Done()
    for task := range tasks {
        fmt.Printf("Worker %d started task: %s\n", id, task)
        time.Sleep(2 * time.Second) // Simulate task execution time
        result := fmt.Sprintf("Worker %d completed task: %s", id, task)
        results <- result
    }
}

func main() {
    numWorkers := 3
    numTasks := 5

    tasks := make(chan string, numTasks)
    results := make(chan string, numTasks)
    var wg sync.WaitGroup

    for i := 1; i <= numWorkers; i++ {
        wg.Add(1)
        go worker(i, tasks, results, &wg)
    }

    for i := 1; i <= numTasks; i++ {
        task := fmt.Sprintf("Task %d", i)
        tasks <- task
    }
    close(tasks)

    go func() {
        wg.Wait()
        close(results)
    }()

    for result := range results {
        fmt.Println(result)
    }
}

```

```
In this example, we use a worker pool pattern to execute multiple tasks concurrently with a limited number of worker goroutines.
```

