

### Install TypeScript

- **`TypeScript cannot be understood by browsers`**, `so it has to be compiled into JavaScript by the TypeScript Compiler (TSC) `

  ```bash
  # Install
  npm i -g typescript
  
  # Check
  tsc -v
  ```

  

### Compile  To  JS

```typescript
//index.ts file
let sport = 'football';
let id = 5;

```

```bash
# Compile
tsc index.ts --outfile your_outfile_name.js

#If you want TSC to compile your code automatically, whenever you make a change, add the "watch" flag:
tsc index.ts -w
```

```js
//your_outfile_name.js 
var sport = 'football';
var id = 5;
```



###  Set Up the ts config File

- `The ts config file should be` **`in the root directory of your project`**.` In this file we can specify the root files, compiler options, and how strict we want TypeScript to be in checking our project.`

  **`create the ts config file`**

  ```bash
  > tsc --init
  > ls
  tsconfig.json
  ```

  ```json
  //tsconfig.json
  {
      "compilerOptions": {
          ...
          /* Modules */
          "target": "es2016", // Change to "ES2015" to compile to ES6
          "rootDir": "./src", // Where to compile from
          "outDir": "./public", // Where to compile to (usually the folder to be deployed to the web server)
          
          /* JavaScript Support */
          "allowJs": true, // Allow JavaScript files to be compiled
          "checkJs": true, // Type check JavaScript files and report errors
          
          /* Emit */
          "sourceMap": true, // Create source map files for emitted JavaScript files (good for debugging)
           "removeComments": true, // Don't emit comments
      },
      "include": ["src"] // Ensure only files in src are compiled
  
  ```

  ```bash
  #To compile everything and watch for changes:
  tsc -w
  ```

  

### Primitive types

>  In JavaScript, a primitive value is data that is not an object and has no methods. There are 7 primitive data types:

- string
- number
- bigint
- boolean
- undefined
- null
- symbol
