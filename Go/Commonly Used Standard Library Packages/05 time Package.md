## time package

- `In Go, the time package provides functionality for parsing, formatting, and manipulating time.`





### Get Date & Time

```go
package main

import (
    "fmt"
    "time"
)

func main() {
  
    now := time.Now() // get Current time
    fmt.Println("Current Time:", now)

    // Components of time
    year, month, day := now.Date()
    hour, min, sec := now.Clock()
    fmt.Printf("Date: %d-%02d-%02d\n", year, month, day)
    fmt.Printf("Time: %02d:%02d:%02d\n", hour, min, sec)
}

//Output
Current Time: 2024-06-02 00:23:00.669059549 +0630 +0630 m=+0.000048824
Date: 2024-06-02
Time: 00:23:00
```





### Parsing and Formatting

- `Parsing allows you to convert a string representing a time into a` **`time.Time`** `object. `

- `Formatting is the reverse operation, converting a` **`time.Time`** `object into a string.`

  ```go
   package main
  
  import (
      "fmt"
      "time"
  )
  
  func main() {
      // Parsing time
      timeStr := "2024-06-02 12:30:00"
      parsedTime, _ := time.Parse("2006-01-02 15:04:05", timeStr)
      fmt.Println("Parsed Time:", parsedTime)
  
      // Formatting time
      formattedTime := parsedTime.Format("Mon, Jan 2 2006 15:04:05")
      fmt.Println("Formatted Time:", formattedTime)
  }
  
  ```

  

### Duration

- **`time.Duration`** `represents a duration of time. It can be added to or subtracted from a` **`time.Time`** `object.`

  ```go
  package main
  import (
      "fmt"
      "time"
  )
  func main() {
      // Duration
      duration := time.Hour*24 + time.Minute*30 + time.Second*15
      fmt.Println("Duration:", duration)
  
      // Adding duration
      now := time.Now()
      futureTime := now.Add(duration)
      fmt.Println("Future Time:", futureTime)
  }
  
  ```

  

### Timers and Tickers

- `Timers are used to execute code after a certain amount of time. Tickers are similar but repeat at regular intervals.`

  ```go
  package main
  import (
      "fmt"
      "time"
  )
  
  func main() {
     
      // This creates a new timer (timer) that will fire once after 2 seconds.
      timer := time.NewTimer(2 * time.Second) 
      
      //This line blocks until the timer's channel (timer.C) sends a value, which occurs when the timer expires.
      <-timer.C
      fmt.Println("Timer expired")
  
      //This creates a new ticker (ticker) that will send the current time on its channel (ticker.C) every second.
      ticker := time.NewTicker(time.Second)
      
      //This launches an anonymous goroutine to handle the ticker. Inside the goroutine:
      go func() {
          // This loop iterates over the values sent by the ticker's channel. It continuously prints "Tick" every time a new value is received on ticker.C.
          for range ticker.C {
              fmt.Println("Tick")
          }
      }()
      
      //This line causes the main goroutine to sleep for 5 seconds. During this time, the ticker's goroutine is running concurrently, printing "Tick" every second.
      time.Sleep(5 * time.Second)
      
      //This stops the ticker, preventing it from sending any more values on its channel.
      ticker.Stop()
      
      fmt.Println("Ticker stopped")
  }
  
  //setTimeout() -> NewTimer()
  //setInterval() -> NewTicker()
  ```



### Sleeping

- `time.Sleep(duration) pauses the execution of the current goroutine for the specified duration.`

  ```go
  package main
  import (
      "fmt"
      "time"
  )
  func main() {
      fmt.Println("Sleeping for 3 seconds...")
      time.Sleep(3 * time.Second)
      fmt.Println("Awake!")
  }
  ```

  