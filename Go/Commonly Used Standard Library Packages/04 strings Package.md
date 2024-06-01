## strings Package

- `The strings package in Go provides a variety of string manipulation functions.`



### Uppercase and Lowercase

```go
package main

import (
    "fmt"
    "strings"
)

func main() {
    s := "Hello, World!"

    // Convert the string to uppercase
    upper := strings.ToUpper(s)
    fmt.Println(upper) // HELLO, WORLD!

    // Convert the string to lowercase
    lower := strings.ToLower(s)
    fmt.Println(lower) // hello, world!
}

```





### String Comparison

```go
package main
import (
	"fmt"
	"strings"
)
func main() {
	s1 := "Hello"
	s2 := "hello"

	// Case-insensitive comparison
	fmt.Println(strings.EqualFold(s1, s2)) // true

	// Case-sensitive comparison
	fmt.Println(strings.Compare(s1, s2)) // 1 (s1 > s2)

	// Check if s1 contains "ell"
	fmt.Println(strings.Contains(s1, "ell")) // true
}
```



### Searching Within Strings

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "Hello, World!"

	// Find index of "World" in s
	fmt.Println(strings.Index(s, "World")) // 7

	// Find last index of "l" in s
	fmt.Println(strings.LastIndex(s, "l")) // 10

	// Find index of any character in "xyz" in s
	fmt.Println(strings.IndexAny(s, "xyz")) // -1 (not found)
}

```





### Splitting and Joining Strings

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	s := "apple,banana,cherry"

	// Split the string into substrings based on comma as delimiter
	parts := strings.Split(s, ",")
	fmt.Println(parts) // [apple banana cherry]

	// Join the substrings with a hyphen
	joined := strings.Join(parts, "-")
	fmt.Println(joined) // apple-banana-cherry
}
```



### Other String Manipulation Utilities

```go
package main

import (
	"fmt"
	"strings"
)

func main() {
	// Repeat a string
	fmt.Println(strings.Repeat("Go", 3)) // GoGoGo

	// Replace multiple strings at once
	r := strings.NewReplacer("Hello", "Hi", "World", "Gopher")
	fmt.Println(r.Replace("Hello, World!")) // Hi, Gopher!

	// Reader: Convert a string to a Reader
	reader := strings.NewReader("Hello, World!")
	fmt.Println(reader) // &{Hello, World! 0 -1}

	// Builder: Efficiently build strings
	var builder strings.Builder
	builder.WriteString("Hello, ")
	builder.WriteString("World!")
	fmt.Println(builder.String()) // Hello, World!
}

```



