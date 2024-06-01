## Go Slices

- `Like arrays, slices are also used to store multiple values of the same type in a single variable.`
- `Slices are more powerful and convenient to use than arrays because they provide a dynamic length capability.`



### To Create a slice

- `In Go, there are several ways to create a slice:`
  - `Using the` **`[]datatype{values}`** `format,(Using a Slice Literal)`
  - `Create a slice` **`from an array`**
  - `Using the` **`make() function`**



####    Creating Slice with Slice Literal (common way)

- `Syntax`  : `slice_name := []datatype{values}`

  ```
  numbers := []int{1, 2, 3, 4, 5}
  ```

  

#### Creating Slice with make function

- `Syntax`  : `slice_name := make([]type, length, capacity)`
- ` If the *capacity* parameter is not defined, it will be equal to *length*.`

```go
slice := make([]int, 5) // Creates a slice of int with length 5 and capacity 5
```



####  Create a slice from an array

```go
arr1 := [6]int{10, 11, 12, 13, 14,15}
myslice := arr1[2:4]
fmt.Printf("myslice = %v\n", myslice) //myslice = [12 13]
```

> ```go
> var myarray = [length]datatype{values} // An array
> myslice := myarray[start:end]
> ```



#### Length

- `len()` `function - returns the length of the slice (the number of elements in the slice)`

```go
my_slice := []int{1,3,32,33};
len(my_slice)
//4
```



#### Capacity

- `cap()` `function - returns the capacity of the slice (the number of elements the slice can grow or shrink to)`

- **`Capacity`**: `The number of elements in the underlying array starting from the first element in the slice, accessed via cap(slice)`.

  ```go
   my_slice := []int{1,3,32,33};
  
  ```

  



