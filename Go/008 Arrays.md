### Go Arrays

- `Arrays are used to store multiple values of the same type in a single variable, instead of declaring separate variables for each value.`
- `An array is a special variable, store multiple values in a single variable `
- `it is data structure( collection of data)`



### Declare  an Array

>  `In Go, there are two ways to declare an array`	
>
>  `The length specifies the number of elements to store in the array. In Go, arrays have a fixed length. The length of the array is either defined by a number or is inferred (means that the compiler decides the length of the array, based on the number of values).`

##### Predefined length

- `With a predefined length and initializing its elements`

  ```go
  var arr1 = [3]int{1,2,3}
  arr2 := [5]int{4,5,6,7,8}
  var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  
  
  var numbers [5]int //Declare predefined length
  numbers = [5]int{1, 2, 3, 4, 5} // initializing its elements
  ```

##### Without specifying the length

- `Without specifying the length and letting Go infer it based on the number of initializers`

  ```go
  var arr1 = [...]int{1,2,3}
  arr2 := [...]int{4,5,6,7,8}
  ```
  
  

#### Access Elements of an Array

- `You access an array element by referring to the index number.`

- `Array indexes start with 0.`

  ```go
  prices := [3]int{10,20,30}
  fmt.Println(prices[0])
  fmt.Println(prices[2])
  ```



#### Change Elements of an Array

- `You can also change the value of a specific array element by referring to the index number.`

  ```go
  prices := [3]int{10,20,30}
  prices[2] = 50
  fmt.Println(prices)
  ```



### Array Initialization

- `If an array or one of its elements has not been initialized in the code, it is assigned the default value of its type.`

  ```go
  arr1 := [5]int{} //not initialized
  arr2 := [5]int{1,2} //partially initialized
  arr3 := [5]int{1,2,3,4,5} //fully initialized
  
  fmt.Println(arr1)
  fmt.Println(arr2)
  fmt.Println(arr3)
  
  
  //Output
  [0 0 0 0 0]
  [1 2 0 0 0]
  [1 2 3 4 5]
  
  
  //Initialize Only Specific Elements
  arr1 := [5]int{1:10,2:40} //1:10 means: assign 10 to array index 1 (second element).
  fmt.Println(arr1)
  // Output  => [0 10 40 0 0]
  ```





####  Length of an Array

- `The` **`len()`** `function is used to find the length of an array`

  ```go
  arr1 := [4]string{"Volvo", "BMW", "Ford", "Mazda"}
  arr2 := [...]int{1,2,3,4,5,6}
  
  fmt.Println(len(arr1))
  fmt.Println(len(arr2))
  ```



#### Access Elements of a Slice

```go
prices := []int{10,20,30}
fmt.Println(prices[0]) //10
fmt.Println(prices[2]) //20
```



#### Change Elements of a Slice

```go
prices := []int{10,20,30}
prices[2] = 50
fmt.Println(prices[0]) //10
fmt.Println(prices[2]) //50
```



#### Append

- `You can append elements to the end of a slice using the append()function`

-  ` Syntax : slice_name = append(slice_name, element1, element2, ...)`

  ```go
  slice := []int{1, 2, 3}
  slice = append(slice, 4, 5) // slice now contains [1, 2, 3, 4, 5]
  
  //Append One Slice To Another Slice
  myslice1 := []int{1,2,3}
  myslice2 := []int{4,5,6}
  myslice3 := append(myslice1, myslice2...)
  ```



#### Copy  Elements

- `If the array is large and you need only a few elements, it is better to copy those elements using the copy() function.`

- `The copy() function creates a new underlying array with only the required elements for the slice. This will reduce the memory used for the program.`

- `The copy() function takes in two slices *dest* and *src*, and copies data from *src* to *dest*. It returns the number of elements copied.`

  ```go
  source := []int{1, 2, 3}
  destination := make([]int, len(source))
  copy(destination, source) // Copies elements from source to destination
  
  
  
  package main
  import ("fmt")
  
  func main() {
    numbers := []int{1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}
  
    fmt.Printf("numbers = %v\n", numbers) //[1 2 3 4 5 6 7 8 9 10 11 12 13 14 15]
    fmt.Printf("length = %d\n", len(numbers))  //15
  
    neededNumbers := numbers[:len(numbers)-10]
    numbersCopy := make([]int, len(neededNumbers))
    copy(numbersCopy, neededNumbers)
  
    fmt.Printf("numbersCopy = %v\n", numbersCopy) //[1 2 3 4 5]
    fmt.Printf("length = %d\n", len(numbersCopy)) //5
  }
  ```

  

​	

#### Slicing Operations

- `You can create a sub-slice from an existing slice using the slicing syntax:`

  ```go
  original := []int{1, 2, 3, 4, 5}
  subslice := original[1:4] // subslice contains [2, 3, 4]
  ```





### Various slice operations:

```go
package main

import "fmt"

func main() {
    // Create a slice with a literal
    primes := []int{2, 3, 5, 7, 11, 13}
    fmt.Println("primes:", primes)

    // Create a slice using make
    evens := make([]int, 5)
    fmt.Println("evens before append:", evens)

    // Append to a slice
    evens = append(evens, 2, 4, 6, 8)
    fmt.Println("evens after append:", evens)

    // Copy slices
    numbers := make([]int, len(primes))
    copy(numbers, primes)
    fmt.Println("numbers copied from primes:", numbers)

    // Slicing
    subPrimes := primes[1:4]
    fmt.Println("subPrimes:", subPrimes)

    // Length and capacity
    fmt.Println("Length of primes:", len(primes))
    fmt.Println("Capacity of primes:", cap(primes))
}

```

