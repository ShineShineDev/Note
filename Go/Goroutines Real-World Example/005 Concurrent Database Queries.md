### Concurrent Database Queries

```go
package main

import (
    "database/sql"
    "fmt"
    _ "github.com/go-sql-driver/mysql"
    "sync"
)

func fetchDataFromDB(db *sql.DB, query string, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()

    row := db.QueryRow(query)
    var result int
    err := row.Scan(&result)
    if err != nil {
        fmt.Println("Error fetching data:", err)
        return
    }
    results <- result
}

func main() {
    db, err := sql.Open("mysql", "root:@tcp(127.0.0.1:3306)/test-db")
    if err != nil {
        fmt.Println("Error connecting to database:", err)
        return
    }
    defer db.Close()

    var wg sync.WaitGroup
    results := make(chan int, 3)

    queries := []string{"SELECT COUNT(*) FROM customers", "SELECT COUNT(*) FROM banners", "SELECT COUNT(*) FROM faqs"}

    for _, query := range queries {
        wg.Add(1)
        go fetchDataFromDB(db, query, results, &wg)
    }

    wg.Wait()
    close(results)

    var totalCount int
    for result := range results {
        totalCount += result
    }

    fmt.Println("Total records:", totalCount)
}

//Total records: 386
```



> In this example, multiple queries are executed concurrently on a database, and the results are aggregated to obtain the total count of records.
