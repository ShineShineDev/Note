### Concurrent Web Scraping

```go
package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"sync"
)

func fetchData(url string, results chan<- string, wg *sync.WaitGroup) {
	defer wg.Done()

	resp, err := http.Get(url)
	if err != nil {
		fmt.Printf("Error fetching data from %s: %v\n", url, err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Printf("Error reading response body from %s: %v\n", url, err)
		return
	}

	results <- string(body)
}

func main() {
	var wg sync.WaitGroup
	urls := []string{"https://example.com", "https://example.org", "https://example.net"}
	results := make(chan string, len(urls))

	for _, url := range urls {
		wg.Add(1)
		go fetchData(url, results, &wg)
	}

	wg.Wait()
	close(results)

	for data := range results {
		fmt.Println("Fetched data:", data[:50], "...")
	}
}

```

> In this enthralling example, we use goroutines to concurrently fetch data from multiple websites. Each goroutine performs a web request and sends the retrieved data to a channel, allowing for concurrent web scraping from different sources.