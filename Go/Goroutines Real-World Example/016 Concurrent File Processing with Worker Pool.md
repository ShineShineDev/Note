### Concurrent File Processing with Worker Pool

```go
package main

import (
	"fmt"
	"io/ioutil"
	
	"path/filepath"
	"sync"
)

func processFile(filePath string, wg *sync.WaitGroup, results chan<- string) {
	defer wg.Done()

	_, err := ioutil.ReadFile(filePath)
	if err != nil {
		results <- fmt.Sprintf("Error reading file %s: %v", filePath, err)
		return
	}

	// Process file data (e.g., analyze, parse)
	results <- fmt.Sprintf("Processed file %s", filePath)
}

func main() {
	var wg sync.WaitGroup
	numWorkers := 3
	results := make(chan string)

	// Collect files from a directory
	files, err := ioutil.ReadDir("./")
	if err != nil {
		fmt.Println("Error reading directory:", err)
		return
	}

	// Start worker goroutines
	for i := 0; i < numWorkers; i++ {
		wg.Add(1)
		go func() {
			defer wg.Done()
			for file := range files {
				filePath := filepath.Join("", files[file].Name())
				processFile(filePath, &wg, results)
			}
		}()
	}

	// Close results channel when all workers are done
	go func() {
		wg.Wait()
		close(results)
	}()

	// Collect and print results
	for res := range results {
		fmt.Println(res)
	}
}

```

> In this example, a directory containing multiple files is processed concurrently using a worker pool pattern. Each worker goroutine reads a file from the directory, processes its content, and sends the result to a channel. This approach ensures efficient file processing and utilizes goroutines to handle the workload concurrently.