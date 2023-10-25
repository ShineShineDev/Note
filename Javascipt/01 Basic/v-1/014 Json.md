# Json

- `JSON stands for JavaScript Object Notation.`
- `The JSON format is almost identical(တူကျသော) to JavaScript objects.`
- `A standardized format commonly used to transfer data as text`
-  `Humans and machines readable `
- `Json can contain strings, numbers, arrays, boolean, null and other object literals`
- `The two primary parts that make up JSON are Keys and Values`
-  `It contains only properties, no methods.`
- `The JSON format is text only, it can easily be sent data as text between client and server`
-  `Used as a data format by any programming language`







### Storing JSON Data

- `Keys must be strings written with double quotes. Single quotes are not valid.`
- `Values must be a valid JSON data type (string, number, object, array, boolean or null)`
- `Curly braces hold objects`
- `Data is separated by comma`

```js
// smiple json data
`{ "name":"John" }`

// json data in js variable
let person = `{
  "name": "Shine Shine",  
  "age": 21, 
  "isSingle": true,
  "employees" :[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
  ],
  "skill" : {
        "frontend" : "js,vue,react,angular",
        "backend" :"php,larave,nodejs,mysql,mongodb"
    }
}`
```







###  Convert  JSON text  to  JavaScript Object

- `JSON.parse()` `function used to convert Json text into a JavaScript object`

  ```js
  //employees json 
  let employees= `{"employees" :[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
  ]}`
  //conver json to javascript object
  let par = JSON.parse(employees)
  par.employees.map(item => console.log(item.firstName)) // John Ann Peter
  ```

  







### Convert JavaScript Object to JSON text

- `JSON.stringify() function used to convert  JavaScript object  into a json string.`

  ```js
  let posts = { 
      name : "Shine Shine",
      age : 21,
      work : "dev"
  }
  let postsJson = JSON.stringify(posts)
  console.log(postsJson) // "{"name":"Shine Shine","age":21,"work":"dev"}"
  ```

  









## JSON vs XML

- Both JSON and XML are "self describing" (human readable)

- Both JSON and XML are hierarchical (values within values)

- Both JSON and XML can be parsed and used by lots of programming languages

- Both JSON and XML can be fetched with an XMLHttpRequest








## Difference between  JSON and XML

- `JSON is shorter`
- `JSON is quicker to read and write`
- `JSON can use arrays`
- `JSON can be parsed by a standard JavaScript function. XML has to be parsed with an XML parser.`
- `JSON is faster and easier than XML`







## Summery code

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



