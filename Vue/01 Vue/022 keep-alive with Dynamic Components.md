## keep-alive with Dynamic Components

- `The Vue keep-alive component lets us preserve the state of the current component by caching it when we switch between different components dynamically.`

- `It also makes rendering them faster since they’re cached.`

  ```js
  //App.vue
  <template>
  	<button @click="activeComponent = 'ComponentOne'">Show ComponetOne </button> &nbsp;
  	<button @click="activeComponent = 'ComponentTwo'">Show ComponetTwo </button>
  	<keep-alive> <component :is="activeComponent" /> </keep-alive>
  </template>
  <script>
  import ComponentOne from './components/ComponentOne.vue'
  import ComponentTwo from './components/ComponentTwo.vue'
  export default {
  	data() { return { activeComponent: 'ComponentOne' } },
  	components: { ComponentOne, ComponentTwo },
  }
  </script>
  //ComponetOne.vue
  <template lang="">
      <h2>Componet One</h2>
      <input v-model="username" placeholder="usernane"/>
  </template>
  <script>
  export default { data(){ return { username : '' } } }
  </script>
  //CompnentTwo
  <template lang="">
      <h2>Compnent Two</h2> <input v-model="password" placeholder="password"/>
  </template>
  <script>
  export default { data(){ return { password : '' } } }
  </script>
  ```



#### Async Components 

- `In large applications, we may need to divide the app into smaller chunks and only load a component from the server when it's needed. To make that easier, Vue allows you to define your component as a factory function that asynchronously resolves your component definition. Vue will only trigger the factory function when the component needs to be rendered and will cache the result for future re-renders.`
- `see more =>` https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
