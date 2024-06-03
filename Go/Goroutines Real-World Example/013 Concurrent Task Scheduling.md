### Concurrent Task Scheduling

```go
package main

import (
	"fmt"
	"sync"
	"time"
)

func task(id int, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Task %d started\n", id)
	time.Sleep(time.Duration(id) * time.Second)
	fmt.Printf("Task %d completed\n", id)
}

func main() {
	var wg sync.WaitGroup
	numTasks := 5

	for i := 1; i <= numTasks; i++ {
		wg.Add(1)
		go task(i, &wg)
	}

	wg.Wait()
	fmt.Println("All tasks completed")
}

```

> In this example, multiple tasks are scheduled to run concurrently. Each task performs a different action and takes a variable amount of time to complete. Goroutines are used to execute these tasks concurrently, allowing for efficient utilization of resources and faster overall execution.