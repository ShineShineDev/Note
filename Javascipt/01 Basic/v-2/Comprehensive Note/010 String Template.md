## String Templates Literals



Synonyms:

- Template Literals
- Template Strings
- String Templates
- Back-Tics Syntax



####  Create String Template 

- Template Literals use back-ticks (``) rather than the quotes ("") to define a string

  ```js
  let str = `Template Literals use back-ticks rather than the quotes to define a string`;	
  ```

  

  

#### Quotes Inside Strings

- With template literals, you can use both single and double quotes inside a string

  ```js
  let str = `With template literals, you can use both single'' and double quotes"" inside a string`;	
  ```

  



#### Multiline Strings

- Template literals allows multiline strings

  ```js
  let str = ` 
   first line
   second line
   third line
  `;
  ```






#### Interpolation ( ${...} )

- Template literals provide an easy way to interpolate variables and expressions into strings.

- The method is called string interpolation.

  ```js
  let front = 'vue,react,angular';
  let back = 'php,laravel,nodejs';
  
  let web = `${front} , ${back}`
  let web1 = `${front + "," + back}`
  ```





#### Template literals Expression

- **Template literals** allow expressions in strings

  ```js
  let num1 = 2;
  let num2 = 4;
  
  const total = `Total : ${num1 + num2}`;
  ```

  



#### HTML Templates

```js
let heading =  "Unorderlist";
let lists = ['vue','react','angular'];

let head = `<h3> ${heading}</h3<ul>`;

for(let list of lists ){
    head+= `<li>${list}list</li>`;
}
head+=`</ul>`

```







```js
//Template Literals 
//Template Literals use back-ticks (``) rather than the quotes ("") to define a string
let str = `A String`;



//multiline strings
let str = `  first line second line third line`;


//Interpolation 
//Template literals provide an easy way to interpolate variables and expressions into strings.
let front = 'vue,react,angular';
let back = 'php,laravel,nodejs';

let web = `${front} , ${back}`
let web1 = `${front + "," + back}`

//Expression
//Template literals allow expressions in strings
let num1 = 2;
let num2 = 4;
const total = `Total : ${num1 + num2}`;


//HTML Templates
let heading =  "Unorderlist";
let lists = ['vue','react','angular'];

let template = `<h3> ${heading}</h3<ul>`;

for(let list of lists ){
    template+= `<li>${list}list</li>`;
}
template+=`</ul>`
```



