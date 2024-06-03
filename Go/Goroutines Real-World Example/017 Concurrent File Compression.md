### Concurrent File Compression

```go
package main

import (
	"compress/gzip"
	"fmt"
	"io"
	"os"
	"sync"
)

func compressFile(inputFile, outputFile string, wg *sync.WaitGroup) {
	defer wg.Done()

	// Open input file
	inFile, err := os.Open(inputFile)
	if err != nil {
		fmt.Println("Error opening input file:", err)
		return
	}
	defer inFile.Close()

	// Create output file
	outFile, err := os.Create(outputFile)
	if err != nil {
		fmt.Println("Error creating output file:", err)
		return
	}
	defer outFile.Close()

	// Create gzip writer
	gzipWriter := gzip.NewWriter(outFile)
	defer gzipWriter.Close()

	// Copy data from input file to gzip writer
	_, err = io.Copy(gzipWriter, inFile)
	if err != nil {
		fmt.Println("Error compressing file:", err)
		return
	}

	fmt.Printf("File %s compressed to %s\n", inputFile, outputFile)
}

func main() {
	var wg sync.WaitGroup
	files := []string{"file1.txt", "file2.txt", "file3.txt"}

	for _, file := range files {
		wg.Add(1)
		go compressFile(file, file+".gz", &wg)
	}

	wg.Wait()
	fmt.Println("All files compressed successfully.")
}

```

> In this example, multiple files are compressed concurrently using goroutines. Each goroutine compresses a single file, and the compressed file is saved with a `.gz` extension. The `sync.WaitGroup` is used to wait for all compression goroutines to finish before proceeding.