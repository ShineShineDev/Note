> ` In Go, every program is part of a package. `
>
> `	In Go, any executable code belongs to the main package.`



### First Go program

- `add below codes  in helloworld.go file `

```go
package main //Package declaration
import ("fmt")
func main() {
	fmt.Println("Hello World!")
}
```



 Run the code

```cmd
$ go run helloworld.go
Hello World!
```

Build as executable file

```
$ ls
helloworld.go

$ go build helloworld.go

$ ls
helloworld helloworld.go
```

Run executable file

```
$ ./helloworld
```

