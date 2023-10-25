## String Methods

- Primitive values, like ```String``` not have properties or methods (because they are not objects).
- But in JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
- The ```String object``` is global object and used to manipulate a sequence of characters .
- When you create a string, your variable becomes a string object instance.
- *String* primitives and *String* objects *JavaScript* automatically converts primitives to *String* objects, 
- All string methods return a new string. They don't modify the original string.
  Formally said: Strings are immutable: Strings cannot be changed, only replaced.





### create string with string literal and  string constructor 

```js
let name = "string literal" //string literal
let name = new String("String constructor") //string constructor
```





#### Length

- The `length` property returns the length of a string

  ```js
  let str = "The length property returns the length of a string";
  console.log(str.length);
  ```





#### Finding String index with indexOf() &  lastIndexOf()

- `indexOf()` method returns the index of (the position of) the `first` occurrence of a specified text in a string

- `lastIndexOf()` method returns the index of the **last** occurrence of a specified text in a string

  ```js
  //indexOf
  let str = "Please locate where 'locate' occurs!";
  console.log(str.indexOf("locate")); // 7
  
  //lastIndexOf
  let str = "Please locate where 'locate' occurs!";
  console.log(str.lastIndexOf("locate")); //21
  ```





#### Extracting String with Slice() Method

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





### replace()

- `replace()` method replaces a specified value with another value in a string

- The `replace()` method does not change the string it is called on. It returns a new string.

- By default, the `replace()` method is case sensitive.

- To replace case insensitive, use a **regular expression** with an `/i` flag (insensitive):

- regular expressions are written without quotes.

  ```js
  let fronEnd = "Vue,React,Angular";
  let replaced =  frontEnd.replace("React","Javascript")
  console.log(replaced) // Vue,Javascript,Angular
  console.log(frontEnd) // Vue,React,Angular
  //insensitive
  let replaced =  frontEnd.replace(/react/i,"Javascript")
  ```

  



#### toUpperCase()

- A string is converted to upper case 

  ```js
  let str = "A string is converted to upper case"
  let upperStr = str.toUperCase();
  ```





### toLowerCase()

  - A string is converted to lower case 

    ```js
    let name = "Shine Shine";
    console.log(name.toLowerCase()) // shine shine
    ```

    



### concat()

- concat() joins two or more strings

  ```js
  let front  = "vue,react,angular";
  let back = "php,laravel,mysql";
  
  let web = front.concat("," + back);
  ```

  



### trim()

- `trim()` method removes whitespace from both sides of a string

  ```js
  let front = "    Vue    "
  console.log(front.trim()) //Vue
  ```

  



### Property Access

- ECMAScript 5 (2009) allows property access [ ] on strings

  ```js
  let str = "HELLO WORLD";
  str[0]; //H
  ```





 #### split() 

- split() method  converted to an array :

- If the separator is omitted, the returned array will contain the whole string in index [0]

- If the separator is "", the returned array will be an array of single characters

  ```js
  let frontEnd = "Vue, React,Angular";
  console.log(frontEnd.split()) // ["Vue, React,Angular"] 
  console.log(frontEnd.split(",")) // ["Vue", "React", "Angular"]  3
  console.log(frontEnd.split(" ")) // ["Vue,", "React,Angular"] 2
  console.log(frontEnd.split("")) // ["V", "u", "e", ",", " ", "R", "e", "a", "c", "t", ",", "A", "n", "g", "u", "l", "a", "r"] 18
  
  ```

  

###  [See More](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)





```js
// creating string 
let name = "string literal" //with string literal
let name = new String("String constructor") //with string constructor

//string length property
let front = "Vue";
console.log(front.length);



// find string index with indexOf
let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate")); // 7


// find string index with lastIndexOf
let str = "Please locate where 'locate' occurs!";
console.log(str.lastIndexOf("locate")); //21


// replace String
// replace() method replaces a specified value with another value in a string
let fronEnd = "Vue,React,Angular";
let replaced =  frontEnd.replace("React","Javascript")
console.log(replaced) // Vue,Javascript,Angular

// convert to upper case
let str = "A string is converted to upper case"
let upperStr = str.toUperCase();

// convert to lower case
let str = "A string is converted to upper case"
let upperStr = str.toLowerCase();

// contact
let front  = "vue,react,angular";
let back = "php,laravel,mysql";
let web = front.concat("," + back);

//trim
let front = "    Vue    "
console.log(front.trim()) //Vue

// ECMAScript 5 (2009) allows property access [ ] on strings
let str = "HELLO WORLD";
str[0]; //H

/* split 
 * split() method  converted to an array 
 * If the separator is omitted, the returned array will contain the whole string in index [0]
 * If the separator is "", the returned array will be an array of single characters
*/
let frontEnd = "Vue, React,Angular";
console.log(frontEnd.split()) // ["Vue, React,Angular"] 
console.log(frontEnd.split(",")) // ["Vue", "React", "Angular"]  3
console.log(frontEnd.split(" ")) // ["Vue,", "React,Angular"] 2
console.log(frontEnd.split("")) // ["V", "u", "e", ",", " ", "R", "e", "a", "c", "t", ",", "A", "n", "g", "u", "l", "a", "r"] 18


```

