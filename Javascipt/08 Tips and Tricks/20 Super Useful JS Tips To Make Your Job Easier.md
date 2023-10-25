####  If Statement With Multiple Conditions
- `Put multiple values in an array and then call the includes method of the array.`

  ```js
  // bad
  if (x === "abc" || x === "def" || x === "ghi" || x === "jkl") {
    //logic
  }
  
  // better
  if (["abc", "def", "ghi", "jkl"].includes(x)) {
    //logic
  }
  ```






#### Simplify if true…else with conditional expressions

```js
// bad
let test = boolean;
if (x > 100) {
    test = true;
} else {
    test = false;
}

// better
let test = x > 10 ? true : false;
//or 
let test = x > 10;
```





####  False value (undefined, null, 0, false, NaN, empty string) check

- `When we create a new variable, sometimes we want to check if the referenced variable is not a falsy value such as null or undefined or an empty string. JavaScript does have a nice shortcut for this kind of checking — the logical OR operator (||)`

- `OR operator(||) will return the right operand if the left operand is false only if the left side is: *empty* or *NaN* or *null* or *undefined* or *false*, The logical or operator (||) will return with the right side the value of.`

  ```js
  // bad
  if (test1 !== null || test1 !== undefined || test1 !== "") {
    let test2 = test1;
  }
  
  // better
  let test2 = test1 || "";
  
  // bad
  if (test1 === true) or if (test1 !== "") or if (test1 !== null)
  
  // better
  if (test1){
    // do some
  }else{
    // do other
  }
  
  ```





####  null/undefined checking and default assignment

```js
//null checking and default assignment
let test1 = null;
let test2 = test1 ?? "";

console.log("null check", test2); // output empty string ""


//undefined checking and default assignment
const test = undefined ?? "default";
console.log(test);
// expected output: "default"
```





####   Get the last item in the list

```js
let array = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(array.slice(-1)) >>> [7];

console.log(array.slice(-2)) >>> [6, 7];

console.log(array.slice(-3)) >>> [5, 6, 7];

function lastItem(list) {
  if (Array.isArray(list)) {
    return list.slice(-1)[0];
  }
  
  if (list instanceof Set) {
    return Array.from(list).slice(-1)[0];
  }
  
  if (list instanceof Map) {
    return Array.from(list.values()).slice(-1)[0];
  }
}
```





####   Return after comparison

```js
// bad
let test;
function checkReturn() {
  if (!(test === undefined)) {
    return test;
  } else {
    return callMe("test");
  }
}

// better
function checkReturn() {
  return test ?? callMe("test");
}
```





####  Use the optional chaining operator -?.

- `? Also known as the chain judgment operator. It allows developers to read property values deeply nested in object chains without having to verify every reference.`
- ` When the reference is empty, the expression stops evaluating and returns *undefined*.`

```js
 const travelPlans = {
        destination: "DC",
        monday: {
            location: "National Mall",
            budget: 200,
        },
    };

// bad
const res = travelPlans && travelPlans.tuesday && travelPlans.tuesday.location && travelPlans.tuesday.location.href;
    console.log(res);  // Result: undefined

// better
const res1 = travelPlans?.tuesday?.location?.href;
console.log(res1);  // Result: undefined

```





####   && operator for multiple conditions

- `To call a function only if the variable is true, use the && operator.`

  ```js
  // bad
  if (test) {
    callMethod();
  }
  
  // better
  test && callMethod();
  ```





#### switch simplified

- `We can store conditions in key-value objects and call them based on the conditions.`

  ```js
  // bad
  switch (data) {
    case 1:
      test1();
      break;
    case 2:
      test2();
      break;
    case 3:
      test();
      break;
      // And so on...
  }
  
  // better
  var data = {
    1: test1,
    2: test2,
    3: test,
  };
  
  // If type exists in data, execute the corresponding function
  data[type] && data[type]();
  ```





####  Default parameter value

```js

// bad
function add(test1, test2) {
  if (test1 === undefined) test1 = 1;
  if (test2 === undefined) test2 = 2;
  return test1 + test2;
}

// better
add = (test1 = 1, test2 = 2) => test1 + test2;
add(); //output: 3
```





####   Conditional lookup simplified

- `If we want to call different methods based on different types, we can use multiple else if statements or switches, but is there a better simplification trick than this? In fact, it is the same as the previous switch simplification.`

  ```js
  // bad
  if (type === "test1") {
    test1();
  } else if (type === "test2") {
    test2();
  } else if (type === "test3") {
    test3();
  } else if (type === "test4") {
    test4();
  } else {
    throw new Error("Invalid value " + type);
  }
  
  // better
  var types = {
    test1,
    test2,
    test3,
    test4,
  };
  types[type] && types[type]();
  ```

  



####   Object Short hand  property assignment

```js
let test1 = "a";
let test2 = "b";

// bad
let obj = { test1: test1, test2: test2 };

// better
let obj = { test1, test2 };
```





####  Destructuring Assignment
