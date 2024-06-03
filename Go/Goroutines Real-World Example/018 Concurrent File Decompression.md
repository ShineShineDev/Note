### Concurrent File Decompression

```go
package main

import (
	"compress/gzip"
	"fmt"
	"io"
	"os"
	"sync"
)

func decompressFile(inputFile, outputFile string, wg *sync.WaitGroup) {
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

	// Create gzip reader
	gzipReader, err := gzip.NewReader(inFile)
	if err != nil {
		fmt.Println("Error creating gzip reader:", err)
		return
	}
	defer gzipReader.Close()

	// Copy data from gzip reader to output file
	_, err = io.Copy(outFile, gzipReader)
	if err != nil {
		fmt.Println("Error decompressing file:", err)
		return
	}

	fmt.Printf("File %s decompressed to %s\n", inputFile, outputFile)
}

func main() {
	var wg sync.WaitGroup
	files := []string{"file1.txt.gz", "file2.txt.gz", "file3.txt.gz"}

	for _, file := range files {
		wg.Add(1)
		go decompressFile(file, "decompressed_"+file[:len(file)-3], &wg)
	}

	wg.Wait()
	fmt.Println("All files decompressed successfully.")
}

```

> In this example, multiple gzip-compressed files are concurrently decompressed using goroutines. Each goroutine decompresses a single file, and the decompressed file is saved with a filename derived from the original filename. As with compression, a `sync.WaitGroup` is used to wait for all decompression goroutines to finish before proceeding.



These examples illustrate how goroutines can be employed for concurrent file compression and decompression, making it possible to process multiple files concurrently and leverage the benefits of parallelism in compressing or decompressing large datasets.