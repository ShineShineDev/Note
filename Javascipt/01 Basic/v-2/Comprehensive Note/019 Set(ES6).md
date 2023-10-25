## JavaScript Sets

- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.



#### Essential Set Methods

| Method    | Description                                      |
| :-------- | :----------------------------------------------- |
| new Set() | Creates a new Set                                |
| add()     | Adds a new element to the Set                    |
| delete()  | Removes an element from a Set                    |
| has()     | Returns true if a value exists in the Set        |
| forEach() | Invokes a callback for each element in the Set   |
| values()  | Returns an iterator with all the values in a Set |
| Property  | Description                                      |
| size      | Returns the number of elements in a Set          |





#### Create a Set

```js
let front = new Set(["Vue","React","Angular"]);

let backEnd = new Set();
```





#### Add values

```js
let backEnd = new Set();
backEnd.add("PHP");
backEnd.add("Nodejs");
backEnd.add("Mysql");
```





#### Delete Values

```js
let front = new Set(["Vue","React","Angular"]);
front.delete("Vue")
```





#### has

```js
let front = new Set(["Vue","React","Angular"]);
front.has("Vue")
```





#### forEach

```js
let front = new Set(["Vue","React","Angular"]);

// List all Elements

front.forEach (function(value) {
  console.log(value)
})
```





#### values()

- The `values()` method returns a new iterator object containing all the values in a Set

  ```js
  let front = new Set(["Vue","React","Angular"]); 
  // outup => [Set Iterator] { 'Vue', 'React', 'Angular' }
  
  for (let value of front.values()) {
     console.log(value)
  }
  ```








```js
/* Set
  - A JavaScript Set is a collection of unique values.
  - Each value can only occur once in a Set.
*/

//create set
let front = new Set(["Vue","React","Angular"]);
let back = new Set();


//add value
let backEnd = new Set();
backEnd.add("PHP");
backEnd.add("Nodejs");
backEnd.add("Mysql");


// delete
let front = new Set(["Vue","React","Angular"]);
front.delete("Vue")


//has
let front = new Set(["Vue","React","Angular"]);
front.has("Vue")


// loop
let front = new Set(["Vue","React","Angular"]);
// loop with foreach
front.forEach (function(value) {
  console.log(value)
})
// loop with for loop
for (let value of front.values()) {
   console.log(value)
}
```

