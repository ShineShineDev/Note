## File Handling

- `File handling is an important part of any web application.`
- `Python has several functions for creating, reading, updating, and deleting files.`
- `The key function for working with files in Python is the `**`open()`** `function.The `**`open()`** `function takes two parameters; filename, and mode.`
- `There are four different methods (modes) for opening a file:`
  - `"r"` - Read - Default value. Opens a file for reading, error if the file does not exist
  - `"a"` - Append - Opens a file for appending, creates the file if it does not exist
  - `"w"` - Write - Opens a file for writing, creates the file if it does not exist
  - `"x"` - Create - Creates the specified file, returns an error if the file exists





### Creating File

- `To create a new file in Python, use the `**`open()`** `method, with one of the following parameters:`

  `"x"` - Create - will create a file, returns an error if the file exist

  `"a"` - Append - will create a file if the specified file does not exist

  `"w"` - Write - will create a file if the specified file does not exist

  ```python
  f = open("myfile.txt", "x")
  
  #Create a new file if it does not exist:
  f = open("myfile.txt", "w")
  ```

  





### Write to an Existing File

- `To write to an existing file, you must add a parameter to the `**`open("a" or "w")`** `function`

- `To write content we can use ` **`file.write('content')`**

  `"a"` -` Append - will append to the end of the file`

  `"w"` - `Write - will overwrite any existing content`

  ```python
  file = open('myfile.txt','a') # append to the end of the file
  file.write('one tow three')
  file.close()
  
  ## overwrite
  file = open('myfile.txt','w') 
  file.write('one tow three')
  file.close()
  ```

  





### Rread File

- `To read file, you must add a parameter to the `**`open(r)`** `function`

- `Them to read content we can use ` **`file.read()`**

- `"r"` - `Read - Default value. Opens a file for reading, error if the file does not exist`

  ```python
  file = open('myfile.txt','r') # append to the end of the file
  print(file.read())
  ```







### Delete File

- `To delete a file, you must import the OS module, and run its `**`os.remove()`** `function`

  ```python
  import os
  os.remove("demofile.txt")
  
  #To avoid getting an error, you might want to check if the file exists before you try to delete it
  if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
  else:
    print("The file does not exist")
  ```

  





### Delete Folder

- `To delete an entire folder, use the `**`os.rmdir()`** `method`

  ```python
  import os
  os.rmdir("myfolder")
  
  ```