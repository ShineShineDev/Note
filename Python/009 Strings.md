## Strings

> `Strings in python are surrounded by either single quotation marks, or double quotation marks.`





### Create String

- `You can create string variable with single quotation marks, or double quotation marks.`

  ```js
  a = "Hello"
  b = 'Hello'
  print(a)
  ```

  





### Multiline String 

- `You can assign a multiline string to a variable by using three quotes`

  ```python
  # mutiline string  with double quotes:
  a = """Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua."""
  
  # mutiline string  with single quotes:
  b = '''Lorem ipsum dolor sit amet,
  consectetur adipiscing elit,
  sed do eiusmod tempor incididunt
  ut labore et dolore magna aliqua.'''
  print(a)
  print(b)
  
  ```







###  Looping Through a String

- `Like many other popular programming languages,`  **`strings`** `in Python` **`are arrays of bytes representing unicode characters`**.

- `However, Python does not have a character data type, a single character is simply a string with a length of 1.`

- `Square brackets can be used to access elements of the string.`

- `Since strings are arrays, we can loop through the characters in a string, with a `for` loop.`

  ```python
  a = "Hello, World!" 
  print(a[1]) # access elements of the string with square bracket
  
  for x in "banana": 
    print(x)
  ```

  





### String Length

- `To get the length of a string, use the ` **`len()`** `function.`

  ```js
  a = "Hello, World!"
  print(len(a))
  ```







### Slicing Strings

- `You can get a range of characters by using the slice syntax.`

- `Specify the start index and the end index, separated by a colon, to return a part of the string.`

-  `By leaving out the start index, the range will start at the first character`

- `By leaving out the *end* index, the range will go to the end`

  ```python
  b = "Hello, World!"
  print(b[2:5])
  # llo
  
  # By leaving out the start index, the range will start at the first character:
  b = "Hello, World!"
  print(b[:5])
  
  # By leaving out the end index, the range will go to the end
  b = "Hello, World!"
  print(b[2:])
  ```

  











### Check String in a string(Finding)

- `To check if a certain phrase or character is present in a string, we can use the keyword` **`in`**.**`in keyword `**`return True or False`

- `Alternative`  `to check if a certain phrase or character is NOT present in a string, we can use the keyword `**`not in`.**  **`not in`**  `return True or False`

  ```python
  txt = "The best things in life are free!"
  print("free" in txt)
  
  txt = "The best things in life are free!"
  print("expensive" not in txt)
  ```

  

  

  

### String Methods

- `Python has a set of built-in methods that you can use on strings.`

- **`Note`:** `All string methods returns new values. They do not change the original string.`

  | Method                                                       | Description                                                  |
  | :----------------------------------------------------------- | :----------------------------------------------------------- |
  | [capitalize()](https://www.w3schools.com/python/ref_string_capitalize.asp) | Converts the first character to upper case                   |
  | [casefold()](https://www.w3schools.com/python/ref_string_casefold.asp) | Converts string into lower case                              |
  | [center()](https://www.w3schools.com/python/ref_string_center.asp) | Returns a centered string                                    |
  | [count()](https://www.w3schools.com/python/ref_string_count.asp) | Returns the number of times a specified value occurs in a string |
  | [encode()](https://www.w3schools.com/python/ref_string_encode.asp) | Returns an encoded version of the string                     |
  | [endswith()](https://www.w3schools.com/python/ref_string_endswith.asp) | Returns true if the string ends with the specified value     |
  | [expandtabs()](https://www.w3schools.com/python/ref_string_expandtabs.asp) | Sets the tab size of the string                              |
  | [find()](https://www.w3schools.com/python/ref_string_find.asp) | Searches the string for a specified value and returns the position of where it was found |
  | [format()](https://www.w3schools.com/python/ref_string_format.asp) | Formats specified values in a string                         |
  | format_map()                                                 | Formats specified values in a string                         |
  | [index()](https://www.w3schools.com/python/ref_string_index.asp) | Searches the string for a specified value and returns the position of where it was found |
  | [isalnum()](https://www.w3schools.com/python/ref_string_isalnum.asp) | Returns True if all characters in the string are alphanumeric |
  | [isalpha()](https://www.w3schools.com/python/ref_string_isalpha.asp) | Returns True if all characters in the string are in the alphabet |
  | [isdecimal()](https://www.w3schools.com/python/ref_string_isdecimal.asp) | Returns True if all characters in the string are decimals    |
  | [isdigit()](https://www.w3schools.com/python/ref_string_isdigit.asp) | Returns True if all characters in the string are digits      |
  | [isidentifier()](https://www.w3schools.com/python/ref_string_isidentifier.asp) | Returns True if the string is an identifier                  |
  | [islower()](https://www.w3schools.com/python/ref_string_islower.asp) | Returns True if all characters in the string are lower case  |
  | [isnumeric()](https://www.w3schools.com/python/ref_string_isnumeric.asp) | Returns True if all characters in the string are numeric     |
  | [isprintable()](https://www.w3schools.com/python/ref_string_isprintable.asp) | Returns True if all characters in the string are printable   |
  | [isspace()](https://www.w3schools.com/python/ref_string_isspace.asp) | Returns True if all characters in the string are whitespaces |
  | [istitle()](https://www.w3schools.com/python/ref_string_istitle.asp) | Returns True if the string follows the rules of a title      |
  | [isupper()](https://www.w3schools.com/python/ref_string_isupper.asp) | Returns True if all characters in the string are upper case  |
  | [join()](https://www.w3schools.com/python/ref_string_join.asp) | Joins the elements of an iterable to the end of the string   |
  | [ljust()](https://www.w3schools.com/python/ref_string_ljust.asp) | Returns a left justified version of the string               |
  | [lower()](https://www.w3schools.com/python/ref_string_lower.asp) | Converts a string into lower case                            |
  | [lstrip()](https://www.w3schools.com/python/ref_string_lstrip.asp) | Returns a left trim version of the string                    |
  | [maketrans()](https://www.w3schools.com/python/ref_string_maketrans.asp) | Returns a translation table to be used in translations       |
  | [partition()](https://www.w3schools.com/python/ref_string_partition.asp) | Returns a tuple where the string is parted into three parts  |
  | [replace()](https://www.w3schools.com/python/ref_string_replace.asp) | Returns a string where a specified value is replaced with a specified value |
  | [rfind()](https://www.w3schools.com/python/ref_string_rfind.asp) | Searches the string for a specified value and returns the last position of where it was found |
  | [rindex()](https://www.w3schools.com/python/ref_string_rindex.asp) | Searches the string for a specified value and returns the last position of where it was found |
  | [rjust()](https://www.w3schools.com/python/ref_string_rjust.asp) | Returns a right justified version of the string              |
  | [rpartition()](https://www.w3schools.com/python/ref_string_rpartition.asp) | Returns a tuple where the string is parted into three parts  |
  | [rsplit()](https://www.w3schools.com/python/ref_string_rsplit.asp) | Splits the string at the specified separator, and returns a list |
  | [rstrip()](https://www.w3schools.com/python/ref_string_rstrip.asp) | Returns a right trim version of the string                   |
  | [split()](https://www.w3schools.com/python/ref_string_split.asp) | Splits the string at the specified separator, and returns a list |
  | [splitlines()](https://www.w3schools.com/python/ref_string_splitlines.asp) | Splits the string at line breaks and returns a list          |
  | [startswith()](https://www.w3schools.com/python/ref_string_startswith.asp) | Returns true if the string starts with the specified value   |
  | [strip()](https://www.w3schools.com/python/ref_string_strip.asp) | Returns a trimmed version of the string                      |
  | [swapcase()](https://www.w3schools.com/python/ref_string_swapcase.asp) | Swaps cases, lower case becomes upper case and vice versa    |
  | [title()](https://www.w3schools.com/python/ref_string_title.asp) | Converts the first character of each word to upper case      |
  | [translate()](https://www.w3schools.com/python/ref_string_translate.asp) | Returns a translated string                                  |
  | [upper()](https://www.w3schools.com/python/ref_string_upper.asp) | Converts a string into upper case                            |
  | [zfill()](https://www.w3schools.com/python/ref_string_zfill.asp) | Fills the string with a specified number of 0 values at the beginning |



