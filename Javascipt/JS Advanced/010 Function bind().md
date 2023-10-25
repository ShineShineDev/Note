## Function bind() (Function Borrowing)

- `With the bind() method, an object can borrow a method from another object.`

- `The example below creates 2 objects (person and member).`

- `The member object borrows the fullname method from the person object`

  ```js
  const person = {
    name : "Julain",
    age : 23,
    info: function () {
      return this.name + " " + this.age;
    }
  }
  
  const member = {
    name:"Walian",
    age: 23,
  }
  
  let info = person.info.bind(member);
  info() //'Walian 23'
  ```
  
  







#### Preserving this

- `bind() method has to be used to prevent loosing this`

  ```js
  const person = {
    name : "Julain",
    age : 23,
    info: function () {
         console.log(this.name + " " + this.age)
    }
  }
  //person.info //loosing this
  //person.info();
  let showInfo = person.info.bind(person);
  showInfo
  ```







```js
/* Function bind() (Function Borrowing)
  - With the bind() method, an object can borrow a method from another object.
  - The example below creates 2 objects (person and member).
  - The member object borrows the fullname method from the person object.
  - the bind() method has to be used to prevent loosing this.
*/ 
const person = {
  name : "Julain",
  age : 23,
  info: function () {
    return this.name + " " + this.age;
  }
}

const member = {
  name:"Walian",
  age: 24,
}

let info = person.info.bind(member);
info() //'Walian 23'
```

