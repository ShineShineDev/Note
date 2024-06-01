## 002  Controllers & Routing

> `A controller's purpose is to receive specific requests for the application. `
>
> `The` **routing** `mechanism controls which controller receives which requests. `
>
> `Frequently, each controller has more than one route, and different routes can perform different actions.`



### Generate Resource Controllers

- `For quickly creating a CRUD controller with the validation built-in, you may use the CLI's CRUD generator` **`nest g resource name`**

```ts
$ nest g resource product

└── product
    ├── dto
    │   ├── create-product.dto.ts
    │   └── update-product.dto.ts
    ├── entities
    │   └── product.entity.ts
    ├── product.controller.ts
    ├── product.module.ts
    ├── product.service.spec.ts
    └── product.service.ts
```



### Generate Controller Without Resource

- `To create a controller using the CLI, simply execute the` **` nest g controller name `**

  ```js
  $ nest g controller user
  CREATE user/user.controller.spec.ts (478 bytes)
  CREATE user/user.controller.ts (97 bytes)
  UPDATE app.module.ts (394 bytes)
  ```



### Controller

- `In order to create a basic controller, we use classes and` **` Controller() decorators`**

  ```js
  import { Controller } from '@nestjs/common';
  
  @Controller()
  export class HomeController {}
  
  ```

  

### Routing

- `Using a path prefix in a ` **`@Controller()`** `decorator allows us to easily group a set of related routes, and minimize repetitive code.`

  ```js
  import { Controller, Get } from '@nestjs/common';
  
  @Controller('cats')
  export class CatsController {
   	@Get()
    	findAll() {
      	return 'This action returns all cats';
    	}
  }
  ```

> `URL` =>	 `http://localhost:3000/cats`
>
> `Response` => ` This action returns all cats`