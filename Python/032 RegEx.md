## RegEx

- `A RegEx, or Regular Expression, is a sequence of characters that forms a search pattern.`
- `RegEx can be used to check if a string contains the specified search pattern.`



### Using RegEx 

- `Python has a built-in package called `**`re`**, `which can be used to work with Regular Expressions.`

- `The `**`re`** `module offers a set of functions that allows us to search a string for a match`

  - [findall](https://www.w3schools.com/python/python_regex.asp#findall) : `Returns a list containing all matches`

  - [search](https://www.w3schools.com/python/python_regex.asp#search) : `Returns a `[Match object](https://www.w3schools.com/python/python_regex.asp#matchobject) `if there is a match anywhere in the string`

  - [split](https://www.w3schools.com/python/python_regex.asp#split) : `Returns a list where the string has been split at each match`

  - [sub](https://www.w3schools.com/python/python_regex.asp#sub) : `Replaces one or many matches with a string`

    

  ```python
  import re
  
  #Search the string to see if it starts with "The" and ends with "Spain":
  txt = "The rain in Spain"
  x = re.search("^The.*Spain$", txt)
  ```





[See More](https://www.w3schools.com/python/python_regex.asp)