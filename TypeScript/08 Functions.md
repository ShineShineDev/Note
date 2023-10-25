

## Functions in TypeScript



### Return Type

- **`The type of the value returned by the function can be explicitly defined.`**

  ```js
  function getTime(): number {
    return new Date().getTime();
  }
  getTime();
  
  //ES6 arrow function
  const circle = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  console.log(circle(10)); // The circumference is 31.41592653589793
  
  
  /*Notice how it isn't necessary to explicitly state that circle is a function; TypeScript infers it. TypeScript also infers the return type of the function, so it doesn't need to be stated either. Although, if the function is large, some developers like to explicitly state the return type for clarity.*/
  
  // Using explicit typing 
  const circle: Function = (diam: number): string => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  // Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
  const circle = (diam: number) => {
    return 'The circumference is ' + Math.PI * diam;
  };
  
  ```
  
  > `If no return type is defined, TypeScript will attempt to infer it through the types of the variables or expressions returned.`



### Return void 

- `The type` **`void`** `can be used to indicate a function doesn't return any value.`

  ```js
  const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
  };
  
  logMessage('TypeScript is superb'); // This is the message: TypeScript is superb
  ```



### Parameters

- **`Function parameters are typed with a similar syntax as variable declarations.`**

  ```js
  function multiply(a: number, b: number) {
    return a * b;
  }
  console.log(multiply(2,5)) //10
  ```
  
  > `If no parameter type is defined, TypeScript will default to using any unless additional type information is available as shown in the Default Parameters and Type Alias sections below.`



### Default Parameters

- `For parameters with default values, the default value goes after the type annotation:`

  ```js
  function pow(value: number, exponent: number = 10) {
    return value ** exponent;
  }
  
  console.log(pow(10)); //10000000000
  ```
  
  



### Optional Parameters

- `By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.`

  ```js
  // the `?` operator here marks parameter `c` as optional
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }
  console.log(add(2,5)) //7
  ```



### Named Parameters

- `Typing named parameters follows the same pattern as typing normal parameters.`

  ```js
  function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
    return dividend / divisor;
  }
  console.log(divide({dividend: 10, divisor: 2})); //5
  ```



### Rest Parameters

- `Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.`

  ```js
  function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 0);
  }
  console.log(add(10,10,10,10,10)); //50
  ```



### Type Alias

- `Function types can be specified separately from functions with type aliases.`

- `These types are written similarly to arrow functions,`

  ```js
  type Negate = (value: number) => number;
  
  // in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
  const negateFunction: Negate = (value) => value * -1;
  
  console.log(negateFunction(10)); //-10
  ```





### Function Declare

- `If we want to declare a function variable, but not define it (say exactly what it does)`,**`then use a function signature.`** `Below, the function sayHello must follow the signature after the colon`

  ```js
  // Declare the varible sayHello, and give it a function signature that takes a string and returns nothing.
  let sayHello: (name: string) => void;
  
  // Define the function, satisfying its signature
  sayHello = (name) => {
    console.log('Hello ' + name);
  };
  
  sayHello('Danny'); // Hello Danny
  ```

  

  

### Function Overloads

- `Some JavaScript functions can be called in a variety of argument counts and types. For example, you might write a function to produce a `Date` that takes either a timestamp (one argument) or a month/day/year specification (three arguments).`

- `In TypeScript, we can specify a function that can be called in different ways by writing *overload signatures*.`

  ```js
  function makeDate(timestamp: number): Date;
  function makeDate(m: number, d: number, y: number): Date;
  function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
      return new Date(y, mOrTimestamp, d);
    } else {
      return new Date(mOrTimestamp);
    }
  }
  const d1 = makeDate(12345678);
  const d2 = makeDate(5, 5, 5);
  const d3 = makeDate(1, 3);
  ```

  
