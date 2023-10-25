Components

- `Similar to React and Angular, Vuejs follows a component based architecture`
- `Components allow us to split the UI into independent and reusable pieces `
- `Vue also plays nicely with native Web Components.`
- ` Vue implements its own component model that allow us to encapsulate custom content and logic in each component. `





#### Defining a Component

- `When using a build step, we typically define each Vue component in a dedicated file using the `.vue` extension - known as a Single-File Component SFC for short`

- `.Vue file and can contain a template block a script block and a style block`

- `When not using a build step, a Vue component can be defined as a plain JavaScript object containing Vue-specific options`

  ```vue
  <template>
    <button @click="count++">You clicked me {{ count }} times.</button>
  </template>
  <script>
  export default {
    data() {
      return {
        count: 0
      }
    }
  }
  </script>
  
  export default {
    data() {
      return {
        count: 0
      }
    },
    template: `
      <button @click="count++">
        You clicked me {{ count }} times.
      </button>`
  }
  
  
  ```

  



#### Using a Component

- `To use a child component, we need to import it in the parent component.`

- `And then we need to register it with the components option.The component will then be available as a tag using the key it is registered under.`

  ```vue
  <template>
    <h1>Here is a child component!</h1>
    <ButtonCounter />
  </template>
  <script>
  import ButtonCounter from './ButtonCounter.vue'
  
  export default {
    components: {
      ButtonCounter
    }
  }
  </script>
  ```





```js
/* Components
  - Similar to React and Angular, Vuejs follows a component based architecture with native Web Components
  - Components allow us to split the UI into independent and reusable pieces 
  - Vue implements its own component model that allow us to encapsulate custom content and logic in each              component.
*/  
/* Defining a Component
  - Vue file and can contain a template block a script block and a style block
  - When using a build step,You need to define each Vue component in a dedicated file using the *.vue* extension       known as a Single-File Component SFC for short
  - When not using a build step, a Vue component can be defined as a plain JavaScript object containing               Vue-specific template options
*/
<template> <h1>Hello</h1> </template>
<script>
	export default { data() {}, methods : {},computed: {}. watch: {} }
</script>
<style>.text-pink{color:'pink'}</style>
/* Using a Component
  - To use a child component, we need to import it in the parent component
  - And then we need to register it with the components option.The component will then be available as a tag using    the key it is registered under
*/
<template> <h1>Hello</h1><ButtonCounter /></template>
<script>
    import ButtonCounter from './ButtonCounter.vue'
	export default {
  		data() {},
        components: { ButtonCounter}
    }
</script>
```

