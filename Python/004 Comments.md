## Comments



- `Comments can be used to explain code.`

- `Comments can be used to make the code more readable.`

- `Comments can be used to prevent execution when testing code.`



### Single Line Comment

- `Python use` **`#`** `smybol for comment`

  ```python
  #This is a comment
  print("Hello, World!")
  
  # or 
  print("Hello, World!") #This is a comment
  
  
  # to prevent Python from executing code:
  # print("Hello, World!") 
  ```

  



### Multi Line Comments

- `Python does not really have a syntax for multi line comments.To add a multiline comment you could insert a` **`#` **`for each line`

- `But you can use a multiline string for multi line comments.`

- `Python will ignore string literals that are not assigned to a variable, you can add a multiline string (triple quotes) in your code, and place your comment inside it`

  ```python
  # This is a comment
  # written in
  # more than just one line
  print("Hello, World!")
  
  """
  This is a comment
  written in
  more than just one line
  """
  print("Hello, World!")
  ```

  

> `⚠️ As long as the string is not assigned to a variable, Python will read the code, but then ignore it, and you have made a multiline comment.`