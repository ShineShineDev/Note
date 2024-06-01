## net/http package

- `The net/http package in Go provides functionalities to implement HTTP clients and servers.`



### http.ListenAndServe() Function

- **`http.ListenAndServe`** `is a function from the` **`net/http`** `package that starts an HTTP server and listens for incoming requests.`

- ` It takes two parameters: an address and a handler. The address specifies the host and port on which the server should listen, and the handler is an interface that handles HTTP requests.`

  ```go
  package main
  import (
      "fmt"
      "net/http"
  )
  func main() {
      fmt.Println("Starting server on :8080")
      http.ListenAndServe(":8080", nil) // nil uses DefaultServeMux , DefaultServeMux as default handler 
  }
  ```

  > **`DefaultServeMux`** `is used to route incoming HTTP requests to the appropriate handlers based on URL patterns.`
  >
  > **`DefaultServeMux` ** `is a predefined instance of` **`http.ServeMux`** `in the` **`net/http`** `package. It's used as the default HTTP request multiplexer.`



### http.HandleFunc() Function

- `Registers a handler function for the given pattern in the DefaultServeMux.`

  ```go
  package main
  
  import (
      "fmt"
      "net/http"
  )
  func home(w http.ResponseWriter, r *http.Request) {
      fmt.Fprintf(w, "home page !")
  }
  func main() {
      http.HandleFunc("/", home)
      http.ListenAndServe(":8080", nil)
  }
  ```

  

### http.Get() Function

- `Makes an HTTP GET request to the specified URL and returns the response.`

  ```go
  package main
  
  import (
      "fmt"
      "io/ioutil"
      "net/http"
  )
  
  func main() {
      resp, err := http.Get("https://jsonplaceholder.typicode.com/posts")
      if err != nil {
          fmt.Println(err)
          return
      }
      //ensures that the response body is closed properly after the function completes, preventing resource leak
      defer resp.Body.Close()
  
      fmt.Println(resp)
      
      //reads all data from the response body (resp.Body) and stores it in the body variable. It also returns an error (err) if reading fails.
      body, err := ioutil.ReadAll(resp.Body)
      if err != nil {
          fmt.Println(err)
          return
      }
      fmt.Println(string(body))
  }
  ```





### http.Post() Function

- `Makes an HTTP POST request to the specified URL with the given body and content type, and returns the response.`

  ```go
  package main
  import (
      "bytes"
      "fmt"
      "io/ioutil"
      "net/http"
  )
  func main() {
      bodyData := []byte(`{"name":"John"}`)
      resp, err := http.Post("https://jsonplaceholder.typicode.com/posts", "application/json", bytes.NewBuffer(bodyData))
      
      if err != nil {
          fmt.Println(err)
          return
      }
      //ensures that the response body is closed properly after the function completes, preventing resource leak
      defer resp.Body.Close()
  
      //reads all data from the response body (resp.Body) and stores it in the body variable. It also returns an error (err) if reading fails.
      body, err := ioutil.ReadAll(resp.Body)
      if err != nil {
          fmt.Println(err)
          return
      }
  
      fmt.Println(string(body))
  }
  
  ```
  
  > **`bytes.NewBuffer(data)`** `is used to convert the data byte slice into a buffer, necessary for preparing the request body for an HTTP POST request. This buffer is then used as the body of the POST request.It's a common pattern for preparing data for I/O operations in Go.`



### http.NewRequest() Function

- `Creates a new HTTP request with the specified method, URL, and optional body.`

  ```go
  package main
  import (
      "bytes"
      "fmt"
      "net/http"
      "io/ioutil"
  )
  func main() {
      
      client := &http.Client{} // Passing By Reference fo  Memory Efficiency
      //client := http.Client{} // Passing by value
      
      data := []byte(`{"name":"John"}`)
      
      //Creating HTTP Request
      req, err := http.NewRequest("POST", "https://jsonplaceholder.typicode.com/posts", bytes.NewBuffer(data))
      if err != nil {
          fmt.Println(err)
          return
      }
      req.Header.Set("Content-Type", "application/json") //Setting Request Headers
      
      resp, err := client.Do(req) //Sending HTTP Request
      if err != nil {
          fmt.Println(err)
          return
      }
      defer resp.Body.Close()
  
      body, err := ioutil.ReadAll(resp.Body)
      if err != nil {
          fmt.Println(err)
          return
      }
  
      fmt.Println(string(body))
  }
  
  ```
  



### http.SetCookie() Function

- `Adds a Set-Cookie header to the provided ResponseWriter's headers.`

  ```go
  package main
  import (
      "net/http"
      "fmt"
  )
  
  func setCookieHandler(w http.ResponseWriter, r *http.Request) {
      //Cookie Initialization:
      cookie := &http.Cookie{
          Name:  "username",
          Value: "JohnDoe",
          Path:  "/",
      }
      http.SetCookie(w, cookie) //Setting the Cookie in the Response:
      w.Write([]byte("Cookie set!"))
  }
  
  func main() {
      http.HandleFunc("/setcookie", setCookieHandler)
      fmt.Println("Hit => http://localhost:8080/setcookie")
      http.ListenAndServe(":8080", nil)
  }
  
  ```

  

### http.Redirect() Function

- `Redirects the request to the URL specified by url with the provided status code.`

  ```go
  package main
  
  import (
      "net/http"
      "fmt"
  )
  
  func redirectHandler(w http.ResponseWriter, r *http.Request) {
      http.Redirect(w, r, "https://www.example.com", http.StatusMovedPermanently)
  }
  
  func main() {
      http.HandleFunc("/redirect", redirectHandler)
      fmt.Println("Hit => http://localhost:8080/redirect")
      http.ListenAndServe(":8080", nil)
  }
  
  ```

  

### http.NotFound() Function

- `Sends an HTTP 404 Not Found response.`

  ```go
  package main
  import (
      "net/http"
      "fmt"
  )
  func notFoundHandler(w http.ResponseWriter, r *http.Request) {
      http.NotFound(w, r)
  }
  
  func main() {
      http.HandleFunc("/notfound", notFoundHandler)
      fmt.Println("Hit => http://localhost:8080/notfound")
      http.ListenAndServe(":8080", nil)
  }
  ```



### http.Error() Function

- `Sends an HTTP error response with the provided status code and error message.`

  ```go
  package main
  import (
  	"fmt"
  	"net/http"
  )
  
  func printAllStatusCodes() {
  	for code := 100; code < 600; code++ {
  		statusText := http.StatusText(code) // Get the status text for the current code
  		fmt.Printf("%d %s\n", code, statusText) // Print the status code and message
  	}
  }
  
  func errorHandler(w http.ResponseWriter, r *http.Request) {
  	http.Error(w, "Something went wrong", http.StatusInternalServerError) //500
  	fmt.Println(http.StatusText(http.StatusInternalServerError))
  	printAllStatusCodes() 
  }
  
  func main() {
  	http.HandleFunc("/error", errorHandler)
  	fmt.Println("Hit => http://localhost:8080/error")
  	http.ListenAndServe(":8080", nil)
  }
  ```

  





