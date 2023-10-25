
## Generators
- `A normal function such as this one cannot be stopped before it finishes its task`

- `A generator is a special function that can pause and resume while executing that particular code `.

- `Generators are a special class of functions that simplify the task of *writing iterators*.`

- `They allow *better execution control for asynchronous functionality* but that does not mean they cannot be used as synchronous functionality.`

  

  
  
  
  
  

#### Creating a Generator

- `For creating a generator function, we use 'function* myfun' or 'function *myfun' syntax instead of just function`

- `Inside the function body, we don’t have a return. Instead, we have another keyword yield `

- `yield is an operator with which a generator can pause itself. Additionally, generators can also receive input and send output via yield`.

- `When generator function are executed it returns a new Generator object.`

  ```js
  function *increment(i) {} 
  function* increment(i) {
      yield i + 1;
      yield i + 2;
  }
  var obj = increment(10);
  console.log(obj.next()); \\{value: 11, done: false}
  console.log(obj.next()); \\{value: 12, done: false}
  console.log(obj.next()); \\{value: undefined, done: true}
  ```
  
  
  
  

#### Four kinds of generators



 ##### Generator function declarations

```js
function* genFunc() { ··· }
const genObj = genFunc();
```



##### Generator function expressions:

```js
const genFunc = function* () { ··· };
 const genObj = genFunc();
```



##### Generator method definitions in object literals:

```js
const obj = {
     * generatorMethod() {
         ···
     }
 };
 const genObj = obj.generatorMethod();
```



##### Generator method definitions in class definitions

```js
class MyClass {
     * generatorMethod() {
         ···
     }
 }
 const myInst = new MyClass();
 const genObj = myInst.generatorMethod();
```







#### Implementing iterable
- `Generators are a special class of functions that simplify the task of *writing             iterators*` 

  ```js
  customerObj = { name: 'Julian', gender: 'Female',age : 23 };
  function * makeIterableObj(obj) {
      const keys = Object.keys(obj);
      for (const key of keys) {
          yield [key, obj[key]];
      }
  }
  for (const [key,value] of makeIterableObj(customerObj)) {
      console.log(`${key}: ${value}`);
  }
  ```

  





#### Better execution control for asynchronous functionality

- `Generators allow *better execution control for asynchronous functionality* but that does   not mean they cannot be used as synchronous functionality.`

- `ES8 will have async functions(async/await) which are internally based on generators. With them, the code looks like this`

  ```js
  function* fetchUsers() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => {
        return users;
      });
  }
  const usersIt = fetchUsers();
  usersIt.next().value.then(resp => console.log(resp));
  ```

  

  

