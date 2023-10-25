### The DOM and type casting

TypeScript doesn't have access to the DOM like JavaScript. This means that whenever we try to access DOM elements, TypeScript is never sure that they actually exist.

The below example shows the problem:

```js
const link = document.querySelector('a');

console.log(link.href); // ERROR: Object is possibly 'null'. TypeScript can't be sure the anchor tag exists, as it can't access the DOM
```

With the non-null assertion operator (!) we can tell the compiler explicitly that an expression has value other than `null` or `undefined`. This is can be useful when the compiler cannot infer the type with certainty, but we have more information than the compiler.

```js
// Here we are telling TypeScript that we are certain that this anchor tag exists
const link = document.querySelector('a')!;

console.log(link.href); // www.freeCodeCamp.org
```



Notice how we didn't have to state the type of the `link` variable. This is because TypeScript can clearly see (via Type Inference) that it is of type `HTMLAnchorElement`.

But what if we needed to select a DOM element by its class or id? TypeScript can't infer the type, as it could be anything.

```js
const form = document.getElementById('signup-form');

console.log(form.method);
// ERROR: Object is possibly 'null'.
// ERROR: Property 'method' does not exist on type 'HTMLElement'.
```

Above, we get two errors. We need to tell TypeScript that we are certain `form` exists, and that we know it is of type `HTMLFormElement`. We do this with type casting:

```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

console.log(form.method); // post
```



TypeScript also has an Event object built in. So, if we add a submit event listener to our form, TypeScript will give us an error if we call any methods that aren't part of the Event object. Check out how cool TypeScript is – it can tell us when we've made a spelling mistake:

```ts
const form = document.getElementById('signup-form') as HTMLFormElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault(); // prevents the page from refreshing

  console.log(e.tarrget); // ERROR: Property 'tarrget' does not exist on type 'Event'. Did you mean 'target'?
});
```