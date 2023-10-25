## JSON

```js
let person = `{
  "name": "John",  
  "homeTown": "Metro City", 
  "age": 21, 
  "isSingle": true,
  "skill" : {
       "frontEnd" : ["VUE","REACT","ANGULAR"],
       "backEnd" : ["PHP","LARAVEL","NODE","DAJANGO"]
  }
}`
// Convert json string to js object
let jsObj = JSON.parse(person)

// Convert  js object to json string
let jsonStr = JSON.stringify(jsObj) 
```

