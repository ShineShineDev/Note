#### Object.assign()

- `Object.assign() method can be used to clone an object.`

- `Object.assign() can also be used to merge objects. If source objects have the same properties, the properties of the later object overwrite the properties of the earlier one in the merged object.`

  ```js
  let person = {
      height: '176'
  };
  let clonePerson = Object.assign({}, person);
  console.log(clonePerson); // {height:'176'}
  
  let person = {height:'176'};
  let employee = {id:'#1237', name:'John'}; 
  let myEmp = Object.assign({}, person, employee); 
  console.log(myEmp); //{height:'176',id:'#1237', name:'John'}
  ```

  



#### Object.is() 

- **Object.is()** determines if the two values are the same.

```js
et a = 10, b = 10;
Object.is(a,b); //true

let c = 20;
Object.is(a,c);//false

let obj1={a:1};
let obj2={a:1};
Object.is(obj1, obj2);//false, as both objects don't have same reference
Object.is(obj1, obj1);//true, both objects have the same reference
//In the case of objects, both objects must have the same values and same reference to be true.
```

 



```js
/* Object.assign()
	- Object.assign() method can be used to clone an object.
	- Object.assign() can also be used to merge objects. If source objects have the same           properties, the properties of the later object overwrite the properties of the earlier       one in the merged object.
*/
let person = { height: '176' };
let clonePerson = Object.assign({}, person); //clone
console.log(clonePerson); // {height:'176'}

let person = {height:'176'}; employee = {id:'#1237', name:'John'}; 
let myEmp = Object.assign({}, person, employee);  //merge
console.log(myEmp); //{height:'176',id:'#1237', name:'John'}

/* Object.is() 
  - Object.is() determines if the two values are the same
*/  
let a = 10, b = 10; c = 20;
Object.is(a,b); //true
Object.is(a,c);//false

let obj1={a:1}; obj2={a:1};
Object.is(obj1, obj2);//false, as both objects don't have same reference
Object.is(obj1, obj1);//true, both objects have the same reference
//In the case of objects, both objects must have the same values and same reference to be true.
```

