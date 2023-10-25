## Lifecycle Hooks

- `Lifecycle hooks are pre-defined methods that get executed in a certain order, starting from the initialization of the Vue instance to its destruction`

- **Vuejs 3 lifecycle main hooks**

  1. `beforeCreate`
  2. `created`
  3. `beforeMount`
  4. `mounted`
  5. `beforeUpdate`
  6. `updated`
  7. `beforeUnmount`
  8. `unmounted`

  

  

#### beforeCreate

-  `Instance: This hook is called immediately when the instance is initialized, after props resolution, before processing other hooks such as data() or computed`.

-  ` Note that the setup() hook of Composition API is called before executing any hooks, even beforeCreate()`

  ```js
  xport default {
    setup() {   console.log("I'm setup hook"); },
    data() {
      console.log("I'm data hook");
      return { msg: "A Message", };
    },
    computed: {
      test: function () {  return "I'm computed hook"; },
    },
    beforeCreate() {
      console.log("I'm beforeCreate hook");
      console.log("message from data hook :   ", this.msg);
      console.log("computed hook is returning ", this.test);
    },
  };
  Output:
  
  I'm setup hook
  
  I'm beforeCreate hook
  message from data hook :  undefined
  computed hook is returning  undefined
  
  I'm data hook
  ```

  

  

####  created

- ` This hook is called after the instance has finished processing all state-related options, i.e.data() and computed hooks.`

- `In general API calls in Vue applications can be made safely in the created lifecycle hook of the component.`

  ```js
  export default {
    setup() {   console.log("I'm setup hook"); },
    data() {
      console.log("I'm data hook");
      return { msg: "A Message", };
    },
    computed: {
      test: function () {  return "I'm computed hook"; },
    },
    beforeCreate() {
      console.log("I'm beforeCreate hook");
      console.log("message from beforeCreate hook :   ", this.msg);
      console.log("computed hook is returning from beforeCreate hook ", this.test);
    },
    created() {
      console.log("I'm created hook");
      console.log("Message from Created hook;  ", this.msg);
      console.log("computed hook is returning from Created hook ", this.test);
     }
  };
  
  I'm setup hook
  I'm beforeCreate hook
  message from beforeCreate hook :    undefined
  computed hook is returning from beforeCreate hook  undefined
  I'm data hook
  
  I'm created hook
  Message from Created hook;   A Message
  computed hook is returning from Created hook  I'm computed hook
  ```

  

```js
/* Lifecycle Hooks
  - Lifecycle hooks are pre-defined methods that get executed in a certain order, starting from the initialization     of the Vue instance to its destruction`
  - Common hooks : beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeUnmount, unmounted`
*/
//App.vue
<template>
    <button v-on:click="isShow = !isShow">Show Child</button>
	<ChildComponent v-if="isShow"/>
</template>
<script>
import ChildComponent from './components/ChildComponent.vue';
export default {
	data() { return { isShow: true } }, components: {	ChildComponent }, }
</script>

//Child Component
<template> <h1>Child Component</h1> </template>
<script>
export default {
    beforeCreate() { console.log("beforeCreated...") },
    //In general API calls in Vue applications can be made safely in the created hook 
    created() { console.log('created...') },
    beforeMount() { console.log('beforeMount..') },
    mounted() { console.log('mounted...') },
    beforeUpdate() { console.log('beforeUpdate...') },
    updated() { console.log('updated..') },
    beforeUnmount() { console.log('beforeUnmount') },
    unmounted() { console.log('unmounted...') }
}
</script>
```

