## Type Assignment

> `When creating a variable, there are two main ways TypeScript assigns a type:`

- **`Explicit`**
- **`Implicit`**



### Creating  Variable with Explicit Type

- `Define type when creating Variable`

```js
let id: number = 5;
let firstname: string = 'danny';
let hasDog: boolean = true;

let unit: number; // Declare variable without assigning a value
unit = 5;
```

> **`Explicit`** `type assignment are easier to read and more intentional.`



### Creating  Variable with Implicit Type

- **`TypeScript will "guess" the type, based on the assigned value`**

  ```js
  let firstName = "Dylan";
  ```

  > **`Implicit`** `type assignment are shorter, faster to type, and often used when developing and testing.`



### Error In Type Assignment

- `TypeScript will throw an error if data types do not match.`

  ```js
  //Explicit
  let firstName: string = "Dylan"; // type string
  firstName = 33; // attempts to re-assign the value to a different type
  
  //Implicit
  let firstName = "Dylan"; // inferred to type string
  firstName = 33; // attempts to re-assign the value to a different typ
  ```

  



### Union type

- `We can also set a variable to be able to be a union type`. **`A union type is a variable that can be assigned more than one type`**

  ```ts
  let age: string | number;
  age = 26;
  age = '26';
  ```

  



### Dynamic (any) types

- `Using the` **`any`** `type, we can basically revert TypeScript back into JavaScript`

- `TypeScript has special types that may not refer to any specific type of data.`

- `any is a type that disables type checking and effectively allows all types to be used.`

  ```ts
  let age: any = '100';
  age = 100;
  age = {
    years: 100,
    months: 2,
  };
  ```

  > `any can be a useful way to get past errors since it disables type checking, but TypeScript will not be able provide type safety, and tools which rely on type data, such as auto completion, will not work. Remember, it should be avoided at "any" cost...`





### Unknown Type

- `unknown is a similar, but safer alternative to any`.

  ```js
  let w: unknown = 1;
  w = "string"; // no error
  ```

  > `unknown is best used when you don't know the type of data being typed. To add a type later, you'll need to cast it.`





### Never Type

- `never effectively throws an error whenever it is defined.`

  ```js
  let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.
  ```

  > `never is rarely used, especially by itself, its primary use is in advanced generics.`



### undefined & null Type

- `undefined and null are types that refer to the JavaScript primitives undefined and null respectively.`

  ```ts
  let y: undefined = undefined;
  let z: null = null;
  ```

  > `These types don't have much use unless strictNullChecks is enabled in the tsconfig.json file.`

  

  

  

