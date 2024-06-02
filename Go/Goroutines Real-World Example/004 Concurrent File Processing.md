### Concurrent File Processing

```go
package main

import (
    "bufio"
    "fmt"
    "os"
    "sync"
)

func processFile(filename string, wg *sync.WaitGroup) {
    defer wg.Done()

    file, err := os.Open(filename)
    if err != nil {
        fmt.Println("Error opening file:", err)
        return
    }
    defer file.Close()

    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        line := scanner.Text()
        // Process the line (e.g., parse, analyze, etc.)
        fmt.Println("Processed:", line)
    }
    if err := scanner.Err(); err != nil {
        fmt.Println("Error reading file:", err)
    }
}

func main() {
    var wg sync.WaitGroup

    files := []string{"file1.txt", "file2.txt", "file3.txt"}

    for _, file := range files {
        wg.Add(1)
        go processFile(file, &wg)
    }

    wg.Wait()
    fmt.Println("All files processed.")
}

```

