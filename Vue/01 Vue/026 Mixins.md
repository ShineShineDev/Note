## Mixins
- `Mixins are a flexible way to distribute reusable functionalities for Vue components. ! A mixin object can contain any component options such as data ,methods and created etc. `

- `When a component uses a mixin, all options in the mixin will be mixed into the component's own options.`

- `While mixins continue to be supported in Vue 3, *Composition API* is now the preferred approach for code reuse between components.`

  ```js
  //counter.js
  export default counter {
      data() { return { count: 0 } },
      methods: { increment() { this.count++ }  }
  }
  //ClickCounter.vue
  <template> <button @click="increment">Clicks: {{ count }}</button> </template>
  <script>
  import counter from '@/mixins/counter'
  export default { mixins: [counter] }
  </script>
  //HoverCounter.vue
  <template> <div @mouseover="increment"> Hovers: {{ count }}</div> </template>
  <script>
  import counter from '@/mixins/counter'
  export default { mixins: [counter] }
  </script>
  
  //App.vue
  <template>
    <click-counter /> <hr> <hover-counter />
  </template>
  <script>
  import ClickCounter from '@/components/ClickCounter'
  import HoverCounter from '@/components/HoverCounter'
  export default { components: { ClickCounter, HoverCounter }}
  </script>
  ```

  

```js
/* - Mixins are a flexible way to distribute reusable functionalities for Vue components. ! A mixin object can          contain any component options such as data ,methods and created etc
   - When a component uses a mixin, all options in the mixin will be mixed into the component's own options.
   - While mixins continue to be supported in Vue 3, *Composition API* is now the preferred approach for code          reuse between components
*/  
//counter.js
export default counter {
    data() { return { count: 0 } },
    methods: { increment() { this.count++ }  }
}
//ClickCounter.vue
<template> <button @click="increment">Clicks: {{ count }}</button> </template>
<script>
import counter from '@/mixins/counter'
export default { mixins: [counter] }
</script>
//HoverCounter.vue
<template> <div @mouseover="increment"> Hovers: {{ count }}</div> </template>
<script>
import counter from '@/mixins/counter'
export default { mixins: [counter] }
</script>
//App.vue
<template>
  <click-counter /> <hr> <hover-counter />
</template>
<script>
import ClickCounter from '@/components/ClickCounter'
import HoverCounter from '@/components/HoverCounter'
export default { components: { ClickCounter, HoverCounter }}
</script>
```

