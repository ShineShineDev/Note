## os Package

- `The` **`os`** `package in Go provides a platform-independent interface to operating system functionality, such as file and process operations. `

  

### Opening and Closing Files

  - **`os.Open`**: `Opens a file for reading.`

  - **`os.Create`**: `Creates a file for writing.`

  - **`file.Close`**: `Closes an open file.`

    ```go
    package main
    
    import (
        "fmt"
        "os"
    )
    func main() {
        // Open a file
        file, err := os.Open("example.txt")
        if err != nil {
            fmt.Println("Error opening file:", err)
            return
        }
        defer file.Close()
        fmt.Println("File opened successfully")
    }
    ```

    





