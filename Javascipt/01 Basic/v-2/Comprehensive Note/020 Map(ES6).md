#### JavaScript Maps

- `A Map holds key-value pairs where the keys can be any datatype.`
- `A Map remembers the original insertion order of the keys.`





#### Essential Map Methods

| Method    | Description                                              |
| :-------- | :------------------------------------------------------- |
| new Map() | Creates a new Map                                        |
| set()     | Sets the value for a key in a Map                        |
| get()     | Gets the value for a key in a Map                        |
| delete()  | Removes a Map element specified by the key               |
| has()     | Returns true if a key exists in a Map                    |
| forEach() | Calls a function for each key/value pair in a Map        |
| entries() | Returns an iterator with the [key, value] pairs in a Map |
| Property  | Description                                              |
| size      | Returns the number of elements in a Map                  |





####  Create a Map

```js
/* map
	A Map holds key-value pairs where the keys can be any datatype.
    A Map remembers the original insertion order of the keys
*/



// Create a Map
const front = new Map([
  ["vue", "Vuejs"],
  ["rec", "React"],
  ["ang", "Angular"]
]);
const fruits = new Map();




// Set Map Values
const fruits = new Map();
fruits.set("vue", "Vuejs");
fruits.set("rec", "React");
fruits.set("ang", "Angular");



//get Values
const front = new Map([
  ["vue", "Vuejs"],
  ["rec", "React"],
  ["ang", "Angular"]
]);
front.get("vue")




//delete
const front = new Map([
  ["vue", "Vuejs"],
  ["rec", "React"],
  ["ang", "Angular"]
]);
front.delete("vue")




//has
const front = new Map([
  ["vue", "Vuejs"],
  ["rec", "React"],
  ["ang", "Angular"]
]);
front.has("vue")


//loop
const front = new Map([
  ["vue", "Vuejs"],
  ["rec", "React"],
  ["ang", "Angular"]
]);
front.forEach((val,key) => console.log(val) )

for(val of front.entries){
    console.log(val)
}

```


