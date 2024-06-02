Go's `context` package သည် လေ့လာခြင်းနှင့် အသုံးပြုရန် အထူးသင့်တော်သော အချိန်ကာလများမှာ ပါဝင်သည့် application များတွင် အလွန်အသုံးဝင်ပါသည်။ အထူးသဖြင့် API server, microservices, database transactions, နှင့် network operations တို့တွင် အထူးအသုံးဝင်ပါသည်။

### `context` package ကို သုံးသည့် နေရာများ

1. **HTTP Servers:**
   - HTTP requests ကို 처리တတ်သော server တွင် context သည် request အလိုက် context များကို ထိန်းချုပ်ရန် အသုံးပြုသည်။
   - Example: HTTP request တစ်ခုရဲ့ timeout ကို ထားပြီး client က request cancel လုပ်သည့်အခါ၊ context သည် server က request ကို cancel လုပ်ရန် signal ပေးသည်။
2. **Database Operations:**
   - Database queries တွင် context သည် queries များအတွက် timeout သတ်မှတ်ရန် အသုံးပြုသည်။
   - Example: Database query တစ်ခုအတွက်အချိန်လွန်၍ error သို့မဟုတ် cancellation ဖြစ်ခဲ့လျှင် query ကို cancel လုပ်ရန် context သုံးသည်။
3. **Microservices:**
   - Microservices တွင် context သည် services များအကြား request/response cycles ကို synchronize ပြုလုပ်ရန် အသုံးပြုသည်။
   - Example: Service-to-service communication မှာ timeout သတ်မှတ်ထား၍ cancellation signal ပေးရန် context သုံးသည်။
4. **Concurrent Programming:**
   - Multiple goroutines တည်ဆောက်ထားသော concurrent programs တွင် context သည် cancellation signals နှင့် deadlines များကို ပေးပို့ရန် အသုံးပြုသည်။
   - Example: Worker pool တွင် tasks များအတွက် context အသုံးပြု၍ cancellation signal ပေးသည်။



###  Use context in HTTP  Server

```go
package main

import (
    "context"
    "fmt"
    "log"
    "net/http"
    "time"
)

// A handler that uses context to handle timeouts and cancellation
func handler(w http.ResponseWriter, r *http.Request) {
    ctx := r.Context()

    log.Println("Handler started")
    defer log.Println("Handler ended")

    select {
    case <-time.After(5 * time.Second):
        fmt.Fprintln(w, "Request processed")
    case <-ctx.Done():
        err := ctx.Err()
        log.Println("Handler:", err)
        http.Error(w, err.Error(), http.StatusInternalServerError)
    }
}

// A handler that sets a value in the context
func valueHandler(w http.ResponseWriter, r *http.Request) {
    ctx := context.WithValue(r.Context(), "key", "value")

    nextHandler(ctx, w, r)
}

// A function that retrieves a value from the context
func nextHandler(ctx context.Context, w http.ResponseWriter, r *http.Request) {
    value := ctx.Value("key").(string)
    fmt.Fprintf(w, "Value: %s", value)
}

func main() {
    http.HandleFunc("/timeout", handler)
    http.HandleFunc("/value", valueHandler)

    srv := &http.Server{
        Addr: ":8080",
        // Set a timeout for the server
        WriteTimeout: 10 * time.Second,
        ReadTimeout:  10 * time.Second,
    }

    log.Println("Server listening on port 8080")
    log.Fatal(srv.ListenAndServe())
}
```





### Use context in Database Query

```go
package main

import (
    "context"
    "database/sql"
    "fmt"
    "time"

    _ "github.com/lib/pq" // PostgreSQL driver
)

func main() {
    db, err := sql.Open("postgres", "user=username dbname=mydb sslmode=disable")
    if err != nil {
        fmt.Println("Database connection error:", err)
        return
    }
    defer db.Close()

    ctx, cancel := context.WithTimeout(context.Background(), 2*time.Second)
    defer cancel()

    row := db.QueryRowContext(ctx, "SELECT * FROM mytable WHERE id=$1", 123)
    var result string
    if err := row.Scan(&result); err != nil {
        if err == context.DeadlineExceeded {
            fmt.Println("Query timed out")
        } else {
            fmt.Println("Query error:", err)
        }
    } else {
        fmt.Println("Query result:", result)
    }
}

```

