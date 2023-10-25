### String Methods

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

