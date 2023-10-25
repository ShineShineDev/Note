### Arrays in TypeScript

- `TypeScript has a specific syntax for typing arrays.`

- `In TypeScript, you can define what type of data an array can contain`

  ```ts
  let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
  ids.push(6);
  ids.push('7'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
  
  let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
  
  let options: boolean[] = [true, false, false]; can only contain true or false
  
  let books: object[] = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
  ]; // can only contain objects
  
  let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
  
  //union types
  let person: (string | number | boolean)[] = ['Danny', 1, true];
  person[0] = 100;
  person[1] = {name: 'Danny'} // Error - person array can't contain objects
  
  //explicit type
  let person: [string, number, boolean] = ['Danny', 1, true];
  person[0] = 100; // Error - Value at index 0 can only be a string
  ```

  

### Readonly

- `The readonly keyword can prevent arrays from being changed.`

  ```js
  const names: readonly string[] = ["Dylan"];
  names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
  // try removing the readonly modifier and see if it works?
  ```





### Type Inference

- `TypeScript can infer the type of an array if it has values.`

  ```ts
  const numbers = [1, 2, 3]; // inferred to type number[]
  numbers.push(4); // no error
  // comment line below out to see the successful assignment
  numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
  let head: number = numbers[0]; // no error
  ```

  