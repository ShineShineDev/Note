## os Package

- `The` **`os`** `package in Go provides a platform-independent interface to operating system functionality, such as file and process operations. `

  

## File and Directory Operations

  - **`os.Open(name string)`**: `Opens a file for reading.`

  - **`os.Create(name string)`**: `Creates a file for writing.`

  - **`file.Close()`**: `Closes an open file.`

    - `Closing files promptly after opening them helps manage system resources, ensures data integrity, avoids file access issues, and prevents errors due to resource leaks.`
    
  - **`os.Remove(name string)`**: `Removes a file or directory.`

  - **`os.Mkdir(name string)`** : `Creates a new directory.`

  - **`os.Remove(name string)`** : `Removes a file or directory.`

  - **`os.ReadDir(name string)`** :`Reads the contents of a directory.`

  - **`os.Stat(name string)` : ** `Returns a FileInfo describing the named file.`

  - **`os.FileInfo`** : ` Interface providing information about a file, including its name, size, and mode.`

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




###### Access various properties of a file or directory.

- `Returns a FileInfo describing the named file`

  ```go
  package main
  import (
      "fmt"
      "os"
  )
  
  func main() {
      // os.Stat returns a FileInfo and an error
      fileInfo, err := os.Stat("go_web_server.go")
      if err != nil {
          fmt.Println("Error:", err)
          return
      }
  
      // Print file information
      fmt.Println("File Name:", fileInfo.Name())
      fmt.Println("Size:", fileInfo.Size())
      fmt.Println("Permissions:", fileInfo.Mode())
      fmt.Println("Last Modified:", fileInfo.ModTime())
      fmt.Println("Is Directory:", fileInfo.IsDir())
  }
  
  //output
  File Name: go_web_server.go
  Size: 277
  Permissions: -rw-rw-r--
  Last Modified: 2024-05-18 18:53:38.60454 +0630 +0630
  Is Directory: false
  ```

---

## Common Functions for Environment Variables

##### os.Getenv (key string) Functions
- `Retrieves the value of the environment variable named by the key. If the variable is not present, it returns an empty string.`

  ```go
  value := os.Getenv("MY_VAR")
  fmt.Println("MY_VAR:", value)
  ```

##### os.Setenv (key, value string) Functions

- `Sets the value of the environment variable named by the key. It returns an error if any.`

  ```go
  err := os.Setenv("MY_VAR", "123")
  if err != nil {
      fmt.Println("Error setting environment variable:", err)
  }
  ```

##### os.Unsetenv(key string) Functions

- `Deletes the environment variable named by the key. It returns an error if any`

  ```go
  err := os.Unsetenv("MY_VAR")
  if err != nil {
      fmt.Println("Error unsetting environment variable:", err)
  }
  ```



##### os.Environ() Functions

- `Returns a slice of strings representing the environment, each in the form "key=value".`

  ```go
  package main
  import (
      "fmt"
      "os"
  )
  func main() {
    envVars := os.Environ()
    for _, env := range envVars {
        fmt.Println(env)
    } 
  }
  ```



----

## Process Management

##### os.StartProcess(name string, argv []string, attr *os.ProcAttr)  Function

- `Starts a new process with the given name, arguments, and attributes.`

  ```go
  package main
  
  import (
      "fmt"
      "os"
  )
  
  func main() {
      // Define the command and arguments
      //cmd := "ls"
      args := []string{"-l", "-a"}
  
      // Define process attributes
      procAttr := &os.ProcAttr{
          Files: []*os.File{
              os.Stdin,
              os.Stdout,
              os.Stderr,
          },
      }
  
      // Start the process
      process, err := os.StartProcess("/bin/ls", args, procAttr)
      if err != nil {
          fmt.Println("Error starting process:", err)
          return
      }
  
      // Wait for the process to finish
      state, err := process.Wait()
      if err != nil {
          fmt.Println("Error waiting for process:", err)
          return
      }
  
      fmt.Println("Process state:", state)
  }
  
  //output 
  .  ..  beego  go_web_server.go	helloworld  helloworld.go  web_server
  Process state: exit status 0
  ```

   

##### os.Getpid() Function

- `Returns the process ID of the caller`

  ```go
  package main
  import (
      "fmt"
      "os"
  )
  func main() {
    pid := os.Getpid()
    fmt.Println("Process ID:", pid) 
  }
  ```

  

  

##### os.Getppid()  Function

- `Returns the parent process ID of the caller.`

  ```go
  package main
  import (
      "fmt"
      "os"
  )
  func main() {
      ppid := os.Getppid()
      fmt.Println("Parent Process ID:", ppid) 
  }
  ```

  

##### [process].Kill() Function

- `Kills the process`

  ```go
  package main
  
  import (
  	"fmt"
  	"os/exec"
  	"time"
  )
  
  func main() {
  	// Start a demo process (sleep for 10 seconds)
  	cmd := exec.Command("sleep", "10")
  	err := cmd.Start()
  	if err != nil {
  		fmt.Println("Error starting process:", err)
  		return
  	}
  
  	fmt.Println("Demo process started with PID:", cmd.Process.Pid)
  
  	// Wait for a few seconds to ensure the process starts
  	time.Sleep(time.Second * 2)
  
  	// Kill the process
  	err = cmd.Process.Kill()
  	if err != nil {
  		fmt.Println("Error killing process:", err)
  		return
  	}
  
  	fmt.Println("Process killed successfully.")
  
  	// Wait for the process to finish
  	err = cmd.Wait()
  	if err != nil {
  		fmt.Println("Error waiting for process:", err)
  		return
  	}
  
  	fmt.Println("Demo process exited successfully.")
  }
  
  ```

  

##### [process].Signal() Function

- `Sends a signal to the process.`

- **`SIGTERM`** `is a signal used in Unix-like operating systems, including Linux and macOS, to request the termination of a process. It stands for "Signal Terminate."`

  ```go
  package main
  
  import (
      "fmt"
      "os/exec"
      "syscall"
      "time"
  )
  
  func main() {
      // Start a demo process (sleep for 10 seconds)
      cmd := exec.Command("sleep", "10")
      err := cmd.Start()
      if err != nil {
          fmt.Println("Error starting process:", err)
          return
      }
  
      fmt.Println("Demo process started with PID:", cmd.Process.Pid)
  
      // Wait for a few seconds to ensure the process starts
      time.Sleep(time.Second * 2)
  
      // Send a SIGTERM signal to the process
      err = cmd.Process.Signal(syscall.SIGTERM)
      if err != nil {
          fmt.Println("Error sending signal:", err)
          return
      }
  
      fmt.Println("SIGTERM signal sent to the process.")
  
      // Wait for the process to finish
      err = cmd.Wait()
      if err != nil {
          fmt.Println("Error waiting for process:", err)
          return
      }
  
      fmt.Println("Demo process exited successfully.")
  }
  ```

  



##### [process].Wait() Function

- ` Waits for the process to exit and returns a` **` ProcessState`** `describing its status.`

  ```go
  package main
  
  import (
  	"fmt"
  	
  	"os/exec"
  	"syscall"
  	"time"
  )
  
  func main() {
  	// Start a demo process (sleep for 10 seconds)
  	cmd := exec.Command("sleep", "10")
  	err := cmd.Start()
  	if err != nil {
  		fmt.Println("Error starting process:", err)
  		return
  	}
  
  	fmt.Println("Demo process started with PID:", cmd.Process.Pid)
  
  	// Wait for a few seconds to ensure the process starts
  	time.Sleep(time.Second * 2)
  
  	// Kill the process
  	err = cmd.Process.Kill()
  	if err != nil {
  		fmt.Println("Error killing process:", err)
  		return
  	}
  
  	fmt.Println("Process killed successfully.")
  
  	// Wait for the process to finish
  	state, err := cmd.Process.Wait()
  	if err != nil {
  		fmt.Println("Error waiting for process:", err)
  		return
  	}
  
  	fmt.Println("Process exited with state:", state)
  }
  ```

  



## File Permissions

### os.Chmod Function

- `to change the permissions of a file.`

  ```go
  package main
  
  import (
      "fmt"
      "os"
  )
  func main() {
      // Retrieve file information
      fileInfo, err := os.Stat("go_web_server.go")
      if err != nil {
          fmt.Println("Error:", err)
          return
      }
  
      // Print file permissions
      fmt.Println("File Permissions:", fileInfo.Mode().Perm())
  
      // Check individual permissions
      if fileInfo.Mode().Perm()&os.ModePerm == 0 {
          fmt.Println("No permissions")
      }
      if fileInfo.Mode().Perm()&os.ModeDir != 0 {
          fmt.Println("Directory")
      }
      if fileInfo.Mode().Perm()&os.ModeAppend != 0 {
          fmt.Println("Append-only")
      }
  
      // Change permissions
      err = os.Chmod("go_web_server.go", 0644) // rw-r--r--
      if err != nil {
          fmt.Println("Error:", err)
          return
      }
  }
  
  ```

  

