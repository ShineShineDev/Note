# JavaScript Data Types



- In programming, data types is an important concept.

- To be able to operate on variables, it is important to know something about the type.

- Without data types, a computer cannot safely solve this `let x = 16 + "Volvo"` 

- JavaScript has dynamic types. This means that the same variable can be used to hold different data types
- Javascript have two types of  data types like primitives(value) Type and reference(Objects ) type





###  Primitives(Value) Type and  Reference(Objects ) type

- Primitive(value) types are  copied by their value

- Reference (objects) type are copied by their reference 

- :warning: Value types are immutable(can't change value).

- :warning: Value types are compared by value.

- :warning: Value types are copied by value

  ```js
  //Value types are immutable(can't change value).
  let num = 10;
  function increase(num){
  	number++;
  }
  increase(num);
  console.log(num);
  
  
  let numObj = {value:10};
  function increase(numObj){
  	number++;
  }
  increase(numObj);
  console.log(number);
  ```

  





#### Primitives or Value Type

A primitive (primitive value, primitive data type) is data that is not an **object** and has no methods

 primitive type has a fixed size

- null
- number
- string
- undefined
- boolean
- symbol



#### Reference or **non**-**primitive**  or composite , Objects Type 

- object

- array

- function





```js
// String
let carName1 = "Volvo XC60";   // Using double quotes
let carName2 = 'Volvo XC60';   // Using single quotes

// number
let x1 = 34.00;     // Written with decimals
let x2 = 34;        // Written without decimals

// Booleans
let isFalse  = true;
let isFalse  = false;

// null
let x = null;

// undefine 
let y; // In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

//Arrays (object type)
const cars = ["Saab", "Volvo", "BMW"];

//Objects (object type)
const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//function (object type)
let myfun  = () => {
    console.log("hey! you calling me");
}


// Value types are immutable(can't change value).
// Value types are compared by value.
// Value types are copied by value
let num = 10;
function increase(num){
	number++;
}
increase(num);
console.log(num);

// Ojbect types are mutable(can change value).
let numObj = {value:10};
function increase(numObj){
	number++;
}
increase(numObj);
console.log(number);


// typeof Operator
// You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.
typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof 123            // Returns number
```











## The typeof Operator

- You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.

- The `typeof` operator returns the type of a variable or an expression

  ```
  typeof ""             // Returns "string"
  typeof "John"         // Returns "string"
  typeof 123            // Returns number
  ```

  
