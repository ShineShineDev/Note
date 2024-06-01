## What is Angular

- `Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps.`
- `Angular is a development platform, built on`  **`TypeScript`**. `As a platform, Angular includes:`
  - `Component-based`
  - ` routing`,
  - ` forms management`,
  - ` client-server communication, and more`

----



## Quick Start

### Components

- `Components are the building blocks that compose an application. `

- `A component includes a TypeScript class with a` **`@Component()` **`decorator, an HTML template, and styles. `

- `The` `@Component()` `decorator specifies the following Angular-specific information`

  - `An HTML template that instructs Angular how to render the component`
  - `A CSS selector that defines how the component is used in a template. HTML elements in your template that match this selector become instances of the component.`
  - `An optional set of CSS styles that define the appearance of the template's HTML elements`

  

  #### Define Component

  ```js
  import { Component } from '@angular/core';
  
  @Component({
    selector: 'hello-world',
    template: `
      <h2>Hello World</h2>
      <p>This is my first component!</p>
    `
  })
  export class HelloWorldComponent {
    // The code in this class drives the component's behavior.
  }
  ```

  #### Use Defined Component

  ```html
  <hello-world></hello-world>
  ```

  ##### When Angular renders this component, the resulting DOM looks like this:

  ```js
  <hello-world>
      <h2>Hello World</h2>
      <p>This is my first component!</p>
  </hello-world>
  ```



### Templates





### Dependency injection







