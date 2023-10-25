## Modules

- ` Before ES6 javaScript existed without a language-level module syntax.` 
- `In ES6,JavaScript modules rely on the import and export statements.`
- `A module is a separate software component that comes from modular programming paradigm`
- `Modular programming emphasis on breaking of large programs into small problems`
- `The advantages  of modular - Separation-of-concerns, Reusability,  Maintenancem and encapsulates  of code `



:warning: ` To enable the module in browser, we must tell by using the type = "module" in the <script></script> tag.`

:warning: ` In Nodejs,need to update package.json like this "type": "module" in package.json file `





#### Export

- You can export a function or variable from any file.
- There are two types of exports: **Named  Export and Default Export**.



#### Import

- You can import modules into a file in two ways, based on if they are **Named Exports or Default Exports.**
- Named exports are constructed using curly braces. Default exports are not.





#### Named Exports

- You can create named exports two ways. In-line individually, or all at once at the bottom.

  ```js
  //adding,js
  function adding(num,...nums){
      let result;
      let nums_res = nums.reduce((accumulator, item) => {
          return accumulator + item
      })
      return num + nums_res;
      
  }
  const name = "Named Exports";
  const PI = 40;
  export {name, PI,adding};
  
  ```

  



####  Named Import

- Named exports are constructed using curly braces. Default exports are not.

  ```js
  import {name, PI,adding } from "./adding.js";
  console.log(name);
  console.log(PI);
  console.log(adding(1,2,3,4,5))
  ```






#### Default Exports

- You can only have one default export in a file.

  ```js
  																			//adding.js
  const adding = (num1,num2) => {
  	return num1+num2;
  };
  export default adding;
  
  //or
  export default function adding(num1,num2){
  	return num1+num2;
  };
  ```





### Default  Import

```js
import adding from "./adding.js";
console.log(adding(1,2))
```





```js
/* Module
	- Before ES6 javaScript existed without a language-level module syntax.
	- A module is a separate software component that comes from modular programming   			   paradigm.
	- Modular programming emphasis on breaking of large programs into small problems
	- The advantages  of modular - Separation-of-concerns, Reusability,  Maintenancem and     		encapsulates  of code 
	- In ES6,JavaScript modules rely on the import and export statements.
*/


/* Export
	- There are two types of exports: Named Export and Default Export.
*/

/* Import
   - They are import : Named Exports or Default Exports.
*/




// Named Exports
function adding(num,...nums){
    let result;
    let nums_res = nums.reduce((accumulator, item) => {
        return accumulator + item
    })
    return num + nums_res;
    
}
const name = "Named Exports";
const PI = 40;
export {name, PI,adding};

// Named Import
import {name, PI,adding } from "./adding.js";
console.log(name);
console.log(PI);
console.log(adding(1,2,3,4,5))




// Default Exports
const adding = (num1,num2) => {
	return num1+num2;
};
export default adding;

//or
export default function adding(num1,num2){
	return num1+num2;
};


// Default Import
import adding from "./adding.js";
console.log(adding(1,2))



/* Notice
	- To enable the module in browser, we must tell by using the type = "module" in the 		<script></script> tag.`
	- In Nodejs,need to update package.json like this "type": "module" in package.json file 
*/
```

