```js

/* LOOP
- Used to repeatedly run a set of instruction while a given condition is true or false
- JavaScript supports different kinds of loops:
  - for - loops through a block of code a number of times
  - while - loops through a block of code while a specified condition is true
  - do/while - also loops through a block of code while a specified condition is true
  - for/in - loops through the properties of an object
  - for/of - loops through the values of an iterable object
*/


// for statement
for(let i = 0; i < 10; i++ ){
    console.log(i);  
}

var frontEnd = ["Vue","React","Angular"];
for (i = 0; i<frontEnd.length;i++) {
  console.log(frontEnd[i]);  
}


//while loop
let i = 1;
while(i <= 10){
    //document.write(i);
    console.log(i);
    i++;
}


// do while loop
//code is *executed at least* once whether condition is true or false
let i = 0;  
do{  
    //document.write(i + "<br/>");  
    console.log(i);
    i++;  
}while (i <= 10);  



/* for...in Loop
  for...in statement iterates over the properties of an object
  for-in loop should not be used to iterate over an array
*/
let me = {name: "shine shine", age: 21,status :'single'};
for(item in me){
    // document.write(me[item] + "<br/>");  
    console.log(me[item]);
}



/* for...of  Loop(ES6)
  The for...of statement creates a loop Iterating over iterable objects including Array,       String, Map, Set, arguments  and so on
 */
// array
let langs = ['vue','react','angular'];
for(lang of langs){
     //document.write(lang + "<br/>"); 
     console.log(lang);
}
// string
let name = "shine shine";
for(str of name){
    //document.write(str + "<br>");
     console.log(str);
}
```

