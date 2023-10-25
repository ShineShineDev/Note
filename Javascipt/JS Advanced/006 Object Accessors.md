## Object Accessors (Getters and Setters)

- `Getters and setters allow you to define Object Accessors `
- `Without Getter and Setter ,we can get or set value from object. `
- `Object Accessors (Getters and Setters) gives us simpler syntax, secure better data quality, equal syntax for properties and methods `



#### Getter

- `get keyword use to get properties(variables).Getter also known as accessors .`

  ```js
  const person = {
      name : "Julian",
      language: "en",
      get lang() {
          return this.language;
      }
  };
  console.log(person.lang)
  ```



####  Setter

- `set keyword use to set or update properties(variables).Getter also known as mutators.`

  ```js
  const person = {
      name : "Julian",
      language: "",
      set lang(lang) {
      	this.language = lang
      }
  };
  // Set an object property using a setter:
  person.lang = "en";
  
  //get
  console.log(person.lang)
  ```

  



####  Differences between Function or Getter

- `Accessor property(getter),taking no arguments and returning the value of the property,but function isn't`

  ```js
  const person = {
      name : "Julian",
      age : 23,
      info: function() {
          return this.name + " " + this.age;
      }
      get getInfo: function() {
          return this.name + " " + this.age;
      }
  };
  console.log(person.info())
  console.log(person.getInfo)
  ```

  





#### Object.defineProperty()

- `The Object.defineProperty() method can also be used to add Getters and Setters`

  ```js
  // Define object
  const obj = {counter : 0};
  
  // Define setters and getters
  Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
  });
  Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
  });
  Object.defineProperty(obj, "decrement", {
    get : function () {this.counter--;}
  });
  Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
  });
  Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
  });
  
  // Play with the counter:
  obj.reset;
  obj.add = 5;
  obj.subtract = 1;
  obj.increment;
  obj.decrement;
  ```





```js
/* Object Accessors (Getters and Setters)
  - Getters and setters allow you to define Object Accessors 
  - Without Getter and Setter ,we can get or set value from object.
  - Object Accessors (Getters and Setters) gives us simpler syntax, secure better data quality, equal         syntax for properties and methods 
  - The Object.defineProperty() method can also be used to add Getters and Setters
*/	
/* Getter and Setter
  - get keyword use to get properties(variables).Getter also known as accessors
  - set keyword use to set or update properties(variables).Setter also known as mutators.`
*/  
const person = {
    name : "Julian",
    language: "en",
    get lang() { //accessors or Getter method
        return this.language
    },
    set lang(lang) { // mutators or Setter method
        this.language = lang
    }, 
	info: function() { //normal method
        return this.name + " " + this.age;
    }
};
person.lang = "my";   // Set 
person.lang //get
// Accessor propertys(getter),taking no arguments and returning the value of the property,but normal function(method) isn't
```

