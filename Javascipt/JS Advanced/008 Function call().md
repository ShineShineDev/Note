##  JavaScript call() Method

- `The call() method is a predefined JavaScript method.`

- `It can be used to invoke (call) a method with an owner object as an argument (parameter).`

- `The call() method can accept arguments`

  ```js
  const person = {
    name: function() {
      return this.name   + " : " + this.age;
    },
    getInfo : function(profession,city){
        return `name : ${this.name}, age : ${this.age}, profession : ${profession}, city : ${city}`;
    }
  }
  const person1 = { name:"Wailain",age: 23}
  
  const person2 = { name:"Julian",age: 24}
  
  
  person.name.call(person1); //'Wailain : 23'
  person.name.call(person2); //'Julian : 24'
  
  //The call() method can accept arguments
  person.getInfo.call(person1, "Dev", "Mdy");
  
  ```

  

