# String Methods and Properties

- Primitive values, like ```String``` not have properties or methods (because they are not objects).
- But in JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
- The ```String object``` is global object and used to manipulate a sequence of characters .
-  When you create a string, your variable becomes a string object instance.
-  *String* primitives and *String* objects *JavaScript* automatically converts primitives to *String* objects, 
- All string methods return a new string. They don't modify the original string.
  Formally said: Strings are immutable: Strings cannot be changed, only replaced.


---


### create string with string literal and  string constructor 
```js
let name = "Shine Shine" //string literal
let name = new String("Shine Shine") //string constructor
```

---
### String Instance  Properties
| Property    | Description                                           |
| ----------- | ----------------------------------------------------- |
| length      | Returns the length of the string.                     |
| constructor | Return constructor  function                          |
| prototype   | allows you to add properties and methods to an object |


---


### String Instance  Methods

| Method                                                       | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [charAt()](https://www.w3schools.com/jsref/jsref_charat.asp) | Returns the character at the specified index (position)      |
| [charCodeAt()](https://www.w3schools.com/jsref/jsref_charcodeat.asp) | Returns the Unicode of the character at the specified index  |
| [concat()](https://www.w3schools.com/jsref/jsref_concat_string.asp) | Joins two or more strings, and returns a new joined strings  |
| [endsWith()](https://www.w3schools.com/jsref/jsref_endswith.asp) | Checks whether a string ends with specified string/characters |
| [fromCharCode()](https://www.w3schools.com/jsref/jsref_fromcharcode.asp) | Converts Unicode values to characters                        |
| [includes()](https://www.w3schools.com/jsref/jsref_includes.asp) | Checks whether a string contains the specified string/characters |
| [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp) | Returns the position of the first found occurrence of a specified value in a string |
| [lastIndexOf()](https://www.w3schools.com/jsref/jsref_lastindexof.asp) | Returns the position of the last found occurrence of a specified value in a string |
| [localeCompare()](https://www.w3schools.com/jsref/jsref_localecompare.asp) | Compares two strings in the current locale                   |
| [match()](https://www.w3schools.com/jsref/jsref_match.asp)   | Searches a string for a match against a regular expression, and returns the matches |
| [repeat()](https://www.w3schools.com/jsref/jsref_repeat.asp) | Returns a new string with a specified number of copies of an existing string |
| [replace()](https://www.w3schools.com/jsref/jsref_replace.asp) | Searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced |
| [search()](https://www.w3schools.com/jsref/jsref_search.asp) | Searches a string for a specified value, or regular expression, and returns the position of the match |
| [slice()](https://www.w3schools.com/jsref/jsref_slice_string.asp) | Extracts a part of a string and returns a new string         |
| [split()](https://www.w3schools.com/jsref/jsref_split.asp)   | Splits a string into an array of substrings                  |
| [startsWith()](https://www.w3schools.com/jsref/jsref_startswith.asp) | Checks whether a string begins with specified characters     |
| [substr()](https://www.w3schools.com/jsref/jsref_substr.asp) | Extracts the characters from a string, beginning at a specified start position, and through the specified number of character |
| [substring()](https://www.w3schools.com/jsref/jsref_substring.asp) | Extracts the characters from a string, between two specified indices |
| [toLocaleLowerCase()](https://www.w3schools.com/jsref/jsref_tolocalelowercase.asp) | Converts a string to lowercase letters, according to the host's locale |
| [toLocaleUpperCase()](https://www.w3schools.com/jsref/jsref_tolocaleuppercase.asp) | Converts a string to uppercase letters, according to the host's locale |
| [toLowerCase()](https://www.w3schools.com/jsref/jsref_tolowercase.asp) | Converts a string to lowercase letters                       |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_string.asp) | Returns the value of a String object                         |
| [toUpperCase()](https://www.w3schools.com/jsref/jsref_touppercase.asp) | Converts a string to uppercase letters                       |
| [trim()](https://www.w3schools.com/jsref/jsref_trim_string.asp) | Removes whitespace from both ends of a string                |
| [valueOf()](https://www.w3schools.com/jsref/jsref_valueof_string.asp) | Returns the primitive value of a String object               |

----



### String Methods for Html  (**Deprecated. Avoid these methods.**)

- The HTML wrapper methods return the string wrapped inside the appropriate HTML tag.

- These are not standard methods, and may not work as expected in all browsers.

| Method      | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| anchor()    | Creates an HTML anchor <a>element around string value.       |
| big()       | Wraps string in <big> element.                               |
| blink()     | Wraps a string in <blink> tag.                               |
| bold()      | Wraps string in <b> tag to make it bold in HTML.             |
| fixed()     | Wraps a string in <tt> tag.                                  |
| fontcolor() | Wraps a string in a <font color="color"> tag.                |
| fontsize()  | Wraps a string in a <font size="size"> tag.                  |
| italics()   | Wraps a string in <i> tag.                                   |
| link()      | Wraps a string in <a>tag where href attribute value is set to specified string. |
| small()     | Wraps a string in a <small>tag.                              |
| strike()    | Wraps a string in a <strike> tag.                            |
| sub()       | Wraps a string in a <sub>tag                                 |
| sup()       | Wraps a string in a <sup>tag                                 |

------



### Length

- The `length` property returns the length of a string:

```js
let name = "Shnine Shine"
console.log(name.length) //12
```




### Finding a String with indexOf()

- `indexOf()` method returns the index of (the position of) the `first` occurrence of a specified text in a string:

```js
var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); // 7
```


### Finding a String with lastIndexOf()

- `lastIndexOf()` method returns the index of the **last** occurrence of a specified text in a string:

```js
var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate")); //21
```


### Searching a String with  search() 

- `search()` method searches a string for a specified value and returns the position of the match:

```js
var str = "Please locate where 'locate' occurs!";
console.log(str.search("locate")); // 7
```




### Extracting String with Slice() Method

- `slice(beganIndex,endIndex)` extracts a part of a string and returns the extracted part in a new string.
- The method takes 2 parameters: the start position, and the end position (end not included).
- If a parameter is negative, the position is counted from the end of the string.

```js
let frontEnd = "Vue,React,Angular";
console.log(frontEnd.slice(4,9)) // React
console.log(frontEnd.slice(-13,-8)) // React
console.log(frontEnd.slice(4)) // React,Angular
console.log(frontEnd.slice(-13)) // React,Angular

```


### Extracting String with substring() Method

- substring(indexStart, indexEnd)` is similar to `slice()`.

- The difference is that `substring()` cannot accept negative indexes.
- If you omit the second parameter, `substring()` will slice out the rest of the string.

```js
let fronEnd  = "Vue,React,Angular";
console.log(frontEnd.substring(0,3)) // Vue 
console.log(frontEnd.substring(4)) // React,Angular

```




### Extracting String with substr() Method

- `substr(from,length of string)` is similar to `slice()`.

- The difference is that the second parameter specifies the **length** of the extracted part.
- If you omit the second parameter, `substr()` will slice out the rest of the string.
- If the first parameter is negative, the position counts from the end of the string.

```js
let frontEnd = "Vue,React,Angular";
console.log(frontEnd.substr(4,5)) //React
console.log(frontEnd.substr(4)) //React,Angular
console.log(frontEnd.substr(-7)) //Angular

```


### replace()

-  `replace()` method replaces a specified value with another value in a string
- The `replace()` method does not change the string it is called on. It returns a new string.
- By default, the `replace()` method is case sensitive.
- To replace case insensitive, use a **regular expression** with an `/i` flag (insensitive):
-  regular expressions are written without quotes.

```js
let fronEnd = "Vue,React,Angular";
let replaced =  frontEnd.replace("React","Javascript")
console.log(replaced) // Vue,Javascript,Angular
console.log(frontEnd) // Vue,React,Angular
//insensitive
let replaced =  frontEnd.replace(/react/i,"Javascript")

```




### toUpperCase()
- A string is converted to upper case 

  ```js
  let name = "Shine Shine"
  console.log(name.toUpperCase()) //SHINE SHINE
  ```
  
### toLowerCase()
  -  A string is converted to lower case 
 ```js
 let name = "Shine Shine";
 console.log(name.toLowerCase()) // shine shine
 ```


### concat() 

- concat() joins two or more strings
```js
let firstName = "Shine";
let secondName = "Htet";
console.log(firstName.concat(" ",secondName," Aung")) // Shine Htet Aung
```
---
### trim()

- `trim()` method removes whitespace from both sides of a string

```js
let name = "    Shine    "
console.log(name.trim()) //Shine
```
---

###  charAt() 

-  `charAt()` method returns the character at a specified index (position) in a string:
```js
let str = "HELLO WORLD";
str.charAt(0);      // returns H
```

---

### Property Access

- ECMAScript 5 (2009) allows property access [ ] on strings:
```js
let str = "HELLO WORLD";
str[0]; //H
```
---

 # split() 
-  split() method  converted to an array :
- If the separator is omitted, the returned array will contain the whole string in index [0]
- If the separator is "", the returned array will be an array of single characters:
```js 
let frontEnd = "Vue, React,Angular";
console.log(frontEnd.split()) // ["Vue, React,Angular"] 
console.log(frontEnd.split(",")) // ["Vue", "React", "Angular"]  3
console.log(frontEnd.split(" ")) // ["Vue,", "React,Angular"] 2
console.log(frontEnd.split("")) // ["V", "u", "e", ",", " ", "R", "e", "a", "c", "t", ",", "A", "n", "g", "u", "l", "a", "r"] 18

```

---

### match()

- [See More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

---

### Summery Code
```js
let name = "Shnine Shine"
console.log(name.length) //12

var str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); // 7

var str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate")); //21

var str = "Please locate where 'locate' occurs!";
console.log(str.search("locate")); // 7

let frontEnd = "Vue,React,Angular";
console.log(frontEnd.slice(4,9)) // React
console.log(frontEnd.slice(-13,-8)) // React
console.log(frontEnd.slice(4)) // React,Angular
console.log(frontEnd.slice(-13)) // React,Angular

let fronEnd  = "Vue,React,Angular";
console.log(frontEnd.substring(0,3)) // Vue  
console.log(frontEnd.substring(4)) // React,Angular

let frontEnd = "Vue,React,Angular";
console.log(frontEnd.substr(4,5)) //React
console.log(frontEnd.substr(4)) //React,Angular
console.log(frontEnd.substr(-7)) //Angular

let fronEnd = "Vue,React,Angular";
let replaced =  frontEnd.replace("React","Javascript")
console.log(replaced) // Vue,Javascript,Angular
console.log(frontEnd) // Vue,React,Angular
//insensitive
let replaced =  frontEnd.replace(/react/i,"Javascript")

let name = "Shine Shine"
console.log(name.toUpperCase()) //SHINE SHINE


 let name = "Shine Shine";
 console.log(name.toLowerCase()) // shine shine

let firstName = "Shine";
let secondName = "Htet";
console.log(firstName.concat(" ",secondName," Aung")) // Shine Htet Aung

let name = "    Shine    "
console.log(name.trim()) //Shine

// Property Access(es5)
let str = "HELLO WORLD";
str[0]; //H


let frontEnd = "Vue, React,Angular";
console.log(frontEnd.split()) // ["Vue, React,Angular"] 
console.log(frontEnd.split(",")) // ["Vue", "React", "Angular"]  3
console.log(frontEnd.split(" ")) // ["Vue,", "React,Angular"] 2
console.log(frontEnd.split("")) // ["V", "u", "e", ",", " ", "R", "e", "a", "c", "t", ",", "A", "n", "g", "u", "l", "a", "r"] 18
```