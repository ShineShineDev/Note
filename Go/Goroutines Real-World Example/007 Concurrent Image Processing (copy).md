### Concurrent Image Processing

```go
package main

import (
    "fmt"
    "image"
    "image/color"
    "image/png"
    "os"
    "sync"
)

func generateImage(filename string, wg *sync.WaitGroup) {
    defer wg.Done()

    width, height := 800, 600
    img := image.NewRGBA(image.Rect(0, 0, width, height))

    for x := 0; x < width; x++ {
        for y := 0; y < height; y++ {
            img.Set(x, y, color.RGBA{uint8(x % 256), uint8(y % 256), 255, 255})
        }
    }

    file, err := os.Create(filename)
    if err != nil {
        fmt.Println("Error creating image:", err)
        return
    }
    defer file.Close()

    err = png.Encode(file, img)
    if err != nil {
        fmt.Println("Error encoding image:", err)
    }
}

func main() {
    var wg sync.WaitGroup
    images := []string{"image1.png", "image2.png", "image3.png"}

    for _, filename := range images {
        wg.Add(1)
        go generateImage(filename, &wg)
    }

    wg.Wait()
    fmt.Println("All images generated.")
}

```

```
In this example, we use goroutines to concurrently generate multiple images. Each goroutine creates an image and saves it to a file.
```

