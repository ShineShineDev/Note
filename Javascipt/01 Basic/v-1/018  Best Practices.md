

##                                                         JavaScript Best Practices



> https://www.w3schools.com/js/js_conventions.asp
>
> https://github.com/airbnb/javascript#types,







#### Use  ESLint

> `ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. It was created by Nicholas C. Zakas in 2013. Rules in ESLint are configurable, and customized rules can be defined and loaded. ESLint covers both code quality and coding style issues`



#### References

###### const 

> Use `const` for all of your references,avoid using `var`
>
> Why? This ensures that you can’t reassign your references, which can lead to bugs and difficult to comprehend code.

```js
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```



###### let

>  If you must reassign references, use `let` instead of `var`
>
>  Why? `let` is block-scoped rather than function-scoped like `var`.

```js
// bad
var count = 1;
if (true) {
  count += 1;
}

// good, use the let.
let count = 1;
if (true) {
  count += 1;
}
```



> both `let` and `const` are block-scoped.

```js
// const and let only exist in the blocks they are defined in.
{
  let a = 1;
  const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

-----



#### Objects

###### Create Object 
> Use the object literal or  literal syntax  for object creation

```js
// bad
const obj = new Object();

// good
const obj = {};
```



 ######  object method shorthand

> Use object method shorthand.

```js
// bad
const atom = {
  value: 1,

  addValue: function (value) {
    return atom.value + value;
  },
};

// good
const atom = {
  value: 1,
    
  addValue(value) {
    return atom.value + value;
  },
};
```



 ###### property value shorthand.

> Why? It is shorter and descriptive.

```js
const name = 'shine shine';

// bad
const obj = {
  name: name,
};

// good
const obj = {
  name,
};
```



 ###### Group shorthand properties

>  Group your shorthand properties at the beginning of your object declaration.
>
>  Why? It’s easier to tell which properties are using the shorthand.

```js
const name = 'Willian';
const mail = 'willian@gmail.com';

// bad
const obj = {
   id: 1,
   token: 232323,
   name,
   adsNum: 3,
   mail
};

// good
const obj = {
   name,
   mail,
   id: 1,
   token: 232323,
   adsNum : 3
};
```



###### quote 

> Only quote properties that are invalid identifiers
>
> improves syntax highlighting, and is also more easily optimized by many JS engines.

```js
// bad
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5,
};

// good
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5,
};
```



 ###### Object.prototype

> Do not call `Object.prototype` methods directly, such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`
>
> Why? These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

```js
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
```



 Object spread operator 

> Prefer the object spread operator over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted

```js
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` ಠ_ಠ
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

---



#### Arrays

###### Array literal 
> Use the Array literal  or literal syntax for array creation
```js
const users = new Array();
const users = [];
```



###### Add items to an array.

> Use [Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```js
const users = [];
//bad
users[users.length] = 'foo';
// good
users.push('bar');
```



 ###### Copy arrays.

>  Use array spreads `...` to copy arrays.

```js
const items = [1,2,3];
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
  itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```



###### Convert an iterable object to an array

> To convert an iterable object to an array, use spreads `...` instead of [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).
>
> iterable object is object they have functions

```js
const foo = 'foo';

// good
const arr1 = Array.from(foo);

// best
const arr2 = [...foo];
```



###### Converting an array-like object to an array

> Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.
>
> **Array**-**like object** is an **object**, They have various numbered elements and a length property.
>
> Array-like objects do not have any of Array’s functions such as forEach,filter

```js
const arrLikeObj = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr1 = Array.prototype.slice.call(arrLikeObj);

// good
const arr2 = Array.from(arrLikeObj);
```



###### line breaks

> Use line breaks after open and before close array brackets if an array has multiple lines

```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
  id: 1,
}, {
  id: 2,
}];

const numberInArray = [
  1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const numberInArray = [
  1,
  2,
];
```

-----



#### Destructuring

 ###### object destructuring 

> Use object destructuring when accessing and using multiple properties of an object

```js
const user = {
    fristName : 'Shine',
    LastName : 'Shine',
}
// bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;
  return `${firstName} ${lastName}`;
}
// good
function getFullName(user) {
  const { firstName, lastName } = user;
  return `${firstName} ${lastName}`;
}
// best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

```

-----



#### Strings

###### single quotes

> Use single quotes `''` for strings. eslint

```js
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```



###### Broken strings

> Strings that cause the line to go over 100 characters should not be written across multiple lines using string concatenation.
>
> Why? Broken strings are painful to work with and make code less searchable.

```js
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```



###### Template strings

> When programmatically building up strings, use template strings instead of concatenation.
>
> Why? Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```js
// bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
  return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
  return `How are you, ${name}?`;
}
```



###### Escape characters

>Do not unnecessarily escape characters in strings.
>
>Why? Backslashes harm readability, thus they should only be present when necessary.

```js
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```

----



#### Functions

###### function expressions 

> Use named function expressions instead of function declarations
>
> Why? Function declarations are hoisted, which means that it’s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. If you find that a function’s definition is large or complex enough that it is interfering with understanding the rest of the file, then perhaps it’s time to extract it to its own module! Don’t forget to explicitly name the expression, regardless of whether or not the name is inferred from the containing variable (which is often the case in modern browsers or when using compilers such as Babel). This eliminates any assumptions made about the Error’s call stack. ([Discussion](https://github.com/airbnb/javascript/issues/794))

```js
// bad
function foo() {
  // ...
}

// bad
const foo = function () {
  // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const foo = function foo() {
  // ...
};
```

> **Note:** ECMA-262 defines a `block` as a list of statements. A function declaration is not a statement.

```js
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// good
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}
```



###### arguments

> Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```js
// bad
function foo(name, options, arguments) {
  // ...
}

// good
function foo(name, options, args) {
  // ...
}
```



###### Default parameter 

> Use default parameter syntax rather than mutating function arguments.

```js
// really bad
function handleThings(opts) {
  // No! We shouldn’t mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {};
  // ...
}

// still bad
function handleThings(opts) {
  if (opts === void 0) {
    opts = {};
  }
  // ...
}

// good
function handleThings(opts = {}) {
  // ...
}
```



###### put default parameters last

>  Always put default parameters last. eslint: [`default-param-last`](https://eslint.org/docs/rules/default-param-last)

```js
// bad
function handleThings(opts = {}, name) {
  // ...
}

// good
function handleThings(name, opts = {}) {
  // ...
}
```



###### Function constructor 

>  Never use the Function constructor to create a new function. eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)
>
>  Why? Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

```js
// bad
var fun1 = new Function('a', 'b', 'return a + b');

// still bad
var fun2 = Function('a', 'b', 'return a - b');

// good
var fun3 = function (a, b) {
    return a + b;
};
```



###### Spacing in a function signature.

>Why? Consistency is good, and you shouldn’t have to add or remove a space when adding or removing a name.

```js
// bad Practices
function foo() {
}

var bar = function() {
};

var bar = function foo() {
};

class Foo {
    constructor() {
    }
}

var foo = {
    bar() {
    }
};
var foo = async() => 1


// good Practices
function foo () {
}

var bar = function () {
};

var bar = function foo () {
};

class Foo {
    constructor () {
    }
}

var foo = {
    bar () {
    }
};
var foo = async () => 1
```



###### Never mutate parameters [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```js
// bad
function f1(obj) {
  obj.key = 1;
}

// good
function f2(obj) {
  const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```



 ###### Never reassign parameters [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> Why? Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```js
// bad
function f1(a) {
  a = 1;
  // ...
}

function f2(a) {
  if (!a) { a = 1; }
  // ...
}

// good
function f3(a) {
  const b = a || 1;
  // ...
}

function f4(a = 1) {
  // ...
}
```



###### Functions parameter newline [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

> Functions with multiline signatures, or invocations, should be indented just like every other multiline list in this guide: with each item on a line by itself, with a trailing comma on the last item.

```js
// bad
function foo(bar,
             baz,
             quux) {
  // ...
}

// good
function foo(
  bar,
  baz,
  quux,
) {
  // ...
}

// bad
console.log(foo,
  bar,
  baz);

// good
console.log(
  foo,
  bar,
  baz,
);
```