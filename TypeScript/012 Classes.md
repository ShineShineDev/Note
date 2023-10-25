## Classes

 - `TypeScript adds types and visibility modifiers to JavaScript classes.`



### Create Class and Create Instance

```ts
class Person {
}
const person = new Person();
```



###  Types of Members

- `The members of a class (properties & methods) are typed using type annotations, similar to variables.`

  ```ts
  class Person {
      name: string;
      getName(): string {
          return this.name;
      }
  }
  const person = new Person();
  console.log(person.name = "Jane"); //Jane
  ```
  



### Visibility of Members

- `There are three main visibility modifiers in TypeScript.`

  - `public - (default) allows access to the class member from anywhere	`
  - `private - only allows access to the class member from within the class`
  - `protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below`

  ```js
  class Person {
      private name: string;
  	public constructor(name: string) {
          this.name = name;
      }
  	public getName(): string {
          return this.name;
      }
  }
  
  const person = new Person("Jane");
  console.log(person.getName()); // person.name isn't accessible from outside the class since it's private
  ```



### Parameter Properties

- `TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.`

  ```ts
  class Person {
    // name is a private member variable
    public constructor(private name: string) {}
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person = new Person("Jane");
  console.log(person.getName()); //Jane
  ```

  

### Readonly

- `Similar to arrays, the readonly keyword can prevent class members from being changed.`

  ```js
  class Person {
    private readonly name: string;
  
    public constructor(name: string) {
      // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
        
  const person = new Person("Jane");
  console.log(person.getName());
  
  person.name = "Spidey"; 
  prog.ts(16,8): error TS2341: Property 'name' is private and only accessible within class 'Person'.
  prog.ts(16,8): error TS2540: Cannot assign to 'name' because it is a read-only property.
  ```





### Extends one other Class

- `Classes can extend each other through the extends keyword. A class can only extends one other class.`

  ```ts
  interface Shape {
    getArea: () => number;
  }
        
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
        
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
    // getArea gets inherited from Rectangle
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.getArea()); //400
  
  ```

  





### Implements Interface

- `Interfaces  can be used to define the type a class must follow through the implements keyword.`

  ```ts
  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  ```

  > `A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {`





### Override

- `When a class extends another class, it can replace the members of the parent class with the same name.`

- `Newer versions of TypeScript allow explicitly marking this with the override keyword.`

  ```ts
  interface Shape {
    getArea: () => number;
  }
  
  class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  
    public toString(): string {
      return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
  }
  
  class Square extends Rectangle {
    public constructor(width: number) {
      super(width, width);
    }
  
    // this toString replaces the toString from Rectangle
    public override toString(): string {
      return `Square[width=${this.width}]`;
    }
  }
  
  const mySq = new Square(20);
  
  console.log(mySq.toString()); //Square[width=20]
  ```

  

> `By default the override keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist. Use the setting noImplicitOverride to force it to be used when overriding.`





### Abstract Classes

- `Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.`

  ```ts
  abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }
  
  const myRect = new Rectangle(10,20);
  
  console.log(myRect.getArea()); //200
  
  ```

  > `Abstract classes cannot be directly instantiated, as they do not have all their members implemented.`

  

  
