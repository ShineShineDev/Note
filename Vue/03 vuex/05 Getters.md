# Getters

- `Sometimes, if more than one component needs to make filtering through a list of items, counting them, either duplicate the function, or extract it into a shared helper, we can use vuex "getter"`

- `You can think of getters as computed properties for stores`

- `Getters will receive the state as their 1st argument`

- `Getters will also receive other getters as the 2nd argument`

- `They can return functions, so that it’s possible to pass additional arguments to calculate data based on them`

  ```js
  //create vuex store                                                                 
  //src/store.js
  import { createStore } from 'vuex'
  const store = createStore({
      state: {
          todos: [
              { id: 1, text: '...', done: true },
              { id: 2, text: '...', done: false }
          ]
      },
      getters: {
          //Getters will receive the state as their 1st argument
          doneTodos(state) {
              return state.todos.filter(todo => todo.done)
          },
          //Getters will also receive other getters as the 2nd argument
          doneTodosCount(state, getters) {
              return getters.doneTodos.length
          },
          //Method-Style Access
          getTodoById: (state) => (id) => {
              return state.todos.find(todo => todo.id === id)
          }
      }
  
  })
  export default store;
  
  ```

  ```js
  //install vuex in vue instance
  //src/main.js
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './stores/counter'
  const app = createApp(App)
  app.use(store)
  app.use(router)
  app.mount('#app')
  ```

  ```js
  //interpolation                                                                     
  //src/app.vue
  <template>
    <div>Done Todos : {{ doneTodos }}</div>
    <div>Done Todos Count : {{ doneTodosCount }}</div>
    <div>Get Todo By Id 2 : {{ getTodoById }}</div>
    <div>Direct call from html : {{this.$store.getters.doneTodos }}</div>
  </template>
  <script>
  import { mapState } from 'vuex';
  export default {
    computed: {
      doneTodos() { return this.$store.getters.doneTodos },
      doneTodosCount(){ return this.$store.getters.doneTodosCount },
      //You can also pass arguments to getters by returning a function
      getTodoById(){ return this.$store.getters.getTodoById(2) }
    }
  }
  </script>
  ```

  



### mapGetters 

- `The mapGetters helper simply maps store getters to local computed properties`

```js
//App.vue
<template>
  <div>Done Todos : {{ doneTodos }}</div>
  <div>Done Todos Count : {{ doneTodosCount }}</div>
  <div>Done Todos Count With Alias : {{ doneTodosCountWithAlias }}</div><hr/>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    //mapGetters helper
    ...mapGetters(['doneTodos','doneTodosCount',]),
    ...mapGetters({ doneTodosCountWithAlias: 'doneTodosCount'}) //Alias name
 
    //doneTodos() {return this.$store.getters.doneTodos}, //Normal Getter
    //getTodoById(){   return this.$store.getters.getTodoById(2) } //Normal Getter with pass arguments to getters
  }
}
</script>                                                             
//src/store.js
import { createStore } from 'vuex'
const store = createStore({
    state: { todos: [ { id: 1, text: '...', done: true },{ id: 2, text: '...', done: false }]},
    getters: {
        doneTodos(state) { return state.todos.filter(todo => todo.done) },
        doneTodosCount(state, getters) { return getters.doneTodos.length},
        getTodoById: (state) => (id) => { return state.todos.find(todo => todo.id === id)} //access parameter
    }
})
export default store;
```
