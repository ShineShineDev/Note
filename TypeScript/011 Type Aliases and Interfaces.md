## Type Aliases and Interfaces

​	

## Type Aliases

- `Type Aliases allow defining types with a custom name (an Alias).`

- `Type Aliases can be used for primitives like string or more complex types such as objects and arrays`:

  ```js
  // Try creating a new Car using the alias provided
  type CarYear = number;
  type CarType = string;
  type CarModel = string;
  type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
  };
  
  const carYear: CarYear = 2001
  const carType: CarType = "Toyota"
  const carModel: CarModel = "Corolla"
  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
  };
  
  console.log(car); //{ year: 2001, type: 'Toyota', model: 'Corolla' }
  ```



### Interfaces

- `Interfaces are similar to type aliases, except they only apply to object types`

  ```ts
  // Try creating a new interface using it below
  interface Rectangle {
    height: number,
    width: number
  };
  
  const rectangle: Rectangle = {
    height: 20,
    width: 10
  };
  
  console.log(rectangle);
  ```

  

### Extending Interfaces

- `Interfaces can extend each other's definition.`

  ```tsx
  // Try creating a new interface and extending it like below
  interface Rectangle {
    height: number,
    width: number
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red"
  };
  
  console.log(coloredRectangle); //{ height: 20, width: 10, color: 'red' }
  ```

  



