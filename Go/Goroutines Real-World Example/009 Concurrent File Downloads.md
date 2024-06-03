### Concurrent File Downloads

```go
package main

import (
    "fmt"
    "io"
    "net/http"
    "os"
    "sync"
)

func downloadFile(url, filename string, wg *sync.WaitGroup) {
    defer wg.Done()

    resp, err := http.Get(url)
    if err != nil {
        fmt.Printf("Error downloading %s: %v\n", url, err)
        return
    }
    defer resp.Body.Close()

    file, err := os.Create(filename)
    if err != nil {
        fmt.Printf("Error creating file %s: %v\n", filename, err)
        return
    }
    defer file.Close()

    _, err = io.Copy(file, resp.Body)
    if err != nil {
        fmt.Printf("Error copying content to file %s: %v\n", filename, err)
        return
    }

    fmt.Printf("Successfully downloaded %s\n", url)
}

func main() {
    var wg sync.WaitGroup
    files := map[string]string{
        "https://example.com/image1.jpg": "image1.jpg",
        "https://example.com/image2.jpg": "image2.jpg",
        "https://example.com/image3.jpg": "image3.jpg",
    }

    for url, filename := range files {
        wg.Add(1)
        go downloadFile(url, filename, &wg)
    }

    wg.Wait()
    fmt.Println("All files joyfully downloaded.")
}

```

```
In this thrilling example, multiple files are concurrently downloaded from URLs using goroutines. Each download occurs with gusto and finesse, resulting in a triumphant completion of all downloads.
```

