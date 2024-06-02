### Concurrent API Requests

```go
package main

import (
    "encoding/json"
    "fmt"
    "net/http"
    "sync"
)

type Response struct {
    UserID int    `json:"userId"`
    ID     int    `json:"id"`
    Title  string `json:"title"`
    Body   string `json:"body"`
}

func fetchData(url string, results chan<- *Response, wg *sync.WaitGroup) {
    defer wg.Done()

    resp, err := http.Get(url)
    if err != nil {
        fmt.Println("Error fetching data:", err)
        return
    }
    defer resp.Body.Close()

    var response Response
    if err := json.NewDecoder(resp.Body).Decode(&response); err != nil {
        fmt.Println("Error decoding response:", err)
        return
    }

    results <- &response
}

func main() {
    var wg sync.WaitGroup
    results := make(chan *Response, 3)

    urls := []string{"https://jsonplaceholder.typicode.com/posts/1", "https://jsonplaceholder.typicode.com/posts/2", "https://jsonplaceholder.typicode.com/posts/3"}

    for _, url := range urls {
        wg.Add(1)
        go fetchData(url, results, &wg)
    }

    wg.Wait()
    close(results)

    for response := range results {
        fmt.Println("Title:", response.Title)
    }
}

```

```
go run main.go
Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Title: ea molestias quasi exercitationem repellat qui ipsa sit aut
Title: qui est esse
```

