## encoding/json Package

- `The` **`encoding/json`** `package is a part of the Go standard library, used for encoding and decoding JSON data. It provides functions for marshaling Go objects into JSON format (encoding) and unmarshaling JSON data into Go objects (decoding).`



### struct  to  json (Marshaling)

- **`Marshaling (json.Marshal)`:** `This function takes a Go data structure (typically a struct) and converts it into a JSON-encoded byte array.`

  ```go
  package main
  
  import (
      "encoding/json"
      "fmt"
  )
  
  type Person struct {
      Name string `json:"name"`
      Age  int    `json:"age"`
  }
  
  func main() {
      person := Person{Name: "Spidey", Age: 25}
      jsonBytes, err := json.Marshal(person)
      if err != nil {
          fmt.Println("Error:", err)
          return
      }
      fmt.Println(string(jsonBytes))
  }
  // output =>  {"name":"Spidey","age":25}
  
  ```

  



###  json to struct (Unmarshaling)

- **`Unmarshaling (json.Unmarshal)`:** `This function takes a JSON-encoded byte array and converts it into a Go data structure.`

  ```go
  package main
  
  import (
      "encoding/json"
      "fmt"
  )
  
  type Person struct {
      Name string `json:"name"`
      Age  int    `json:"age"`
  }
  
  func main() {
      jsonString := `{"name":"Spidey","age":25}`
      var person Person
      err := json.Unmarshal([]byte(jsonString), &person)
      if err != nil {
          fmt.Println("Error:", err)
          return
      }
      fmt.Println(person)
  }
  
  //output
  {Spidey 25}
  ```

  

  