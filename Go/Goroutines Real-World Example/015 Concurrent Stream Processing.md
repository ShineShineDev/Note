### Concurrent Stream Processing

```go
package main

import (
	"fmt"
	"sync"
)

func processStream(stream <-chan int, results chan<- int, wg *sync.WaitGroup) {
	defer wg.Done()
	for num := range stream {
		// Process the number (e.g., perform computation)
		results <- num * num
	}
}

func main() {
	var wg sync.WaitGroup
	numWorkers := 3
	stream := make(chan int)
	results := make(chan int, numWorkers)

	// Generate stream of numbers
	go func() {
		for i := 1; i <= 10; i++ {
			stream <- i
		}
		close(stream)
	}()

	// Start worker goroutines
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go processStream(stream, results, &wg)
	}

	// Close results channel when all workers are done
	go func() {
		wg.Wait()
		close(results)
	}()

	// Collect and print results
	for res := range results {
		fmt.Println("Result:", res)
	}
}

```

> In this example, a stream of numbers is generated, and multiple goroutines concurrently process this stream. Each goroutine performs a computation on the numbers and sends the results to a channel. Goroutines are efficiently utilized to process the stream concurrently, enabling high-throughput data processing.