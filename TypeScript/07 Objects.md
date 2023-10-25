### Objects in TypeScript

> **`TypeScript has a specific syntax for typing objects.`**

- `Objects in TypeScript must have all the correct properties and value types`

  ```js
  const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  
  
  // Declare a variable called person with a specific object type annotation
  let person: {
    name: string;
    location: string;
    isProgrammer: boolean;
  };
  
  // Assign person to an object with all the necessary properties and value types
  person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  person.isProgrammer = 'Yes'; // ERROR: should be a boolean
  
  
  person = {
    name: 'John',
    location: 'US',
  }; 
  // ERROR: missing the isProgrammer property
  ```





### Type Inference(Infer)

- `TypeScript can infer the types of properties based on their values.`

  ```ts
  const car = {
    type: "Toyota",
  };
  car.type = "Ford"; // no error
  car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
  
  
  ```

  



### Optional Properties

- **`Optional properties are properties that don't have to be defined in the object definition.`**

  ```ts
  const car: { type: string, mileage: number } = { // Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
    type: "Toyota",
  };
  car.mileage = 2000;
  
  const car: { type: string, mileage?: number } = { // no error
    type: "Toyota"
  };
  car.mileage = 2000;
  ```

  



### Index Signatures

 - **`Index signatures can be used for objects without a defined list of properties.`**

   ```js
   const nameAgeMap: { [index: string]: number } = {};
   nameAgeMap.Jack = 25; // no error
   nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
   ```

   

### Object with interface

- `When defining the signature of an object, you will usually use an` **`interface`**. `This is useful if we need to check that multiple objects have the same specific properties and value types`

  ```ts
  interface Person {
    name: string;
    location: string;
    isProgrammer: boolean;
  }
  
  let person1: Person = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
  };
  
  let person2: Person = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
  };
  
  
  //We can also declare function properties with function signatures.
  interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
  }
  
  let sayStuff: Speech = {
    sayHi: function (name: string) {
      return `Hi ${name}`;
    },
    sayBye: (name: string) => `Bye ${name}`,
  };
  
  console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
  console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg
  ```

  
