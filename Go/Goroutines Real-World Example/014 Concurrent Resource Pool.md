### Concurrent Resource Pool

```go
package main

import (
	"fmt"
	"sync"
)

type Resource struct {
	ID int
}

func newResource(id int) *Resource {
	return &Resource{ID: id}
}

func processResource(r *Resource, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Printf("Processing resource with ID %d\n", r.ID)
	// Simulate processing
}

func main() {
	var wg sync.WaitGroup
	numResources := 5
	resourcePool := make(chan *Resource, numResources)

	for i := 1; i <= numResources; i++ {
		resource := newResource(i)
		resourcePool <- resource
	}

	for i := 0; i < numResources; i++ {
		wg.Add(1)
		go func() {
			resource := <-resourcePool
			processResource(resource, &wg)
		}()
	}

	wg.Wait()
	fmt.Println("All resources processed")
}
	
```

> In this example, a pool of resources is created, and multiple goroutines concurrently process these resources. Goroutines acquire resources from the pool as they become available, ensuring efficient utilization of resources and minimizing contention.