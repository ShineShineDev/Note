## Mutations


- `The only way to actually change state in a Vuex store is by committing a mutation.`

- `Vuex mutations are very similar to events: each mutation has a string type and a handler. `

- `The handler function is where we perform actual state modifications, and it will receive the state as the first argument`

- `You cannot directly call a mutation handler.To invoke a mutation handler, you need to call store.commit with its type`

- `You can pass an additional argument to store.commit, which is called the payload for the mutation`

  ```js
  //App.vue
  <template>
      Count {{ getCountNum }} <br />
      <button @click="increment()">Increment 1</button> <br />
      <button @click="incrementWithPayload(5)">Increment With Payload 5</button> <br />
      <button @click="objectStyleCommitWithPayload(3)">Object-Style Commit With Payload : 3 </button>
  </template>
  <script>
  import { mapGetters } from 'vuex';
  export default {
      computed: {
          ...mapGetters([
              'getCountNum',
          ]),
      },
      methods: {
          increment() {
              this.$store.commit('increment')
          },
          incrementWithPayload(num) {
              this.$store.commit("incrementWithPayload", num)
          },
          //Object-Style Commit
          //An alternative way to commit a mutation is by directly using an object that has a type property
          //When using object-style commit, the entire object will be passed as the payload to mutation handlers,          so the handler remains the same
          objectStyleCommitWithPayload(num) {
              this.$store.commit({
                  type: 'objectStyleCommitWithPayload',
                  amount: num
              })
          }
      }
  }
  </script>
  ```

  ```js
  //src/store.js
  import { createStore } from 'vuex'
  
  const store = createStore({
  
      state: {
          count: 1
      },
      getters: {
          getCountNum(state) {
              return state.count;
          }
      },
      mutations: {
          increment(state) {
              // mutate state
              state.count++
          },
          incrementWithPayload(state, anyName) {
              state.count += anyName
          },
          objectStyleCommitWithPayload(state, payload) {
              state.count += payload.amount
          }
      }
  
  })
  export default store;
  
  ```



#### Using Constants for Mutation Types

- `It is a commonly seen pattern to use constants for mutation types in various Flux implementations.`

- `This allows the code to take advantage of tooling like linters, and putting all constants in a single file allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application`

  ```js
  // src/store/mutation-types.js
  export const INCREMENT = 'INCREMENT'
  export const INCREMENTWITHPAYLOAD = 'INCREMENTWITHPAYLOAD'
  export const OBJECTSTYLECOMMITWITHPAYLOAD = 'OBJECTSTYLECOMMITWITHPAYLOAD'
  
  //src/store/store.js
  import { createStore } from 'vuex'
  import {INCREMENT,INCREMENTWITHPAYLOAD,OBJECTSTYLECOMMITWITHPAYLOAD} from './mutation-types.js'
  const store = createStore({
      state: { count: 1 },
      getters: {
          getCountNum(state) { return state.count}
      },
      mutations: {
          [INCREMENT](state) {
              // mutate state
              state.count++
          },
          [INCREMENTWITHPAYLOAD](state, anyName) {
              state.count += anyName
          },
          [OBJECTSTYLECOMMITWITHPAYLOAD](state, payload) {
              state.count += payload.amount
          }
      }
  
  })
  export default store;
  
  ```

  





```js
/* Mutations
  - The only way to actually change state in a Vuex store is by committing a mutation.
  - Vuex mutations are very similar to events: each mutation has a string type and a handler.
  - The handler function is where we perform actual state modifications, and it will receive the state as the         first argument
  - You cannot directly call a mutation handler.To invoke a mutation handler, you need to call store.commit with       its type`
  - You can pass an additional argument to store.commit, which is called the payload for the mutation */  
//App.vue
Count {{ getCountNum }} <br />
<button @click="increment()">Increment 1</button> <br />
<button @click="incrementWithPayload(5)">Increment With Payload 5</button> <br />
<button @click="objectStyleCommitWithPayload(3)">Object-Style Commit With Payload : 3 </button>
export default {
    computed: {...mapGetters(['getCountNum'])},
    methods: {
        increment() { this.$store.commit('increment')},
        incrementWithPayload(num) { this.$store.commit("incrementWithPayload", num)},
        objectStyleCommitWithPayload(num) {
            this.$store.commit({type: 'objectStyleCommitWithPayload',amount: num}) //Object-Style Commit
        }
    }
}
//src/store.js
const store = createStore({
    state: {count: 1},
    getters: { getCountNum(state) {  return state.count}},
    mutations: {
        increment(state) { state.count++ /*mutate state*/ },
        incrementWithPayload(state, anyName) { state.count += anyName },
        objectStyleCommitWithPayload(state, payload) { state.count += payload.amount}
    }
})
```

```js
/* Using Constants for Mutation Types
   - It is a commonly seen pattern to use constants for mutation types in various Flux implementations.
   - This allows the code to take advantage of tooling like linters, and putting all constants in a single file        allows your collaborators to get an at-a-glance view of what mutations are possible in the entire application
*/ 
// src/store/mutation-types.js
export const INCREMENT = 'INCREMENT'
export const INCREMENTWITHPAYLOAD = 'INCREMENTWITHPAYLOAD'
export const OBJECTSTYLECOMMITWITHPAYLOAD = 'OBJECTSTYLECOMMITWITHPAYLOAD'

//src/store/store.js
import { createStore } from 'vuex'
import {INCREMENT,INCREMENTWITHPAYLOAD,OBJECTSTYLECOMMITWITHPAYLOAD} from './mutation-types.js'
const store = createStore({
    state: { count: 1 },
    mutations: {
        [INCREMENT](state) { state.count++},
        [INCREMENTWITHPAYLOAD](state, anyName) { state.count += anyName },
        [OBJECTSTYLECOMMITWITHPAYLOAD](state, payload) { state.count += payload.amount}
    }
})
export default store;

//App.vue
export default {
    methods: {
        increment() { this.$store.commit('INCREMENT') },
        incrementWithPayload(num) { this.$store.commit('INCREMENTWITHPAYLOAD', num)},
        objectStyleCommitWithPayload(num) {
            this.$store.commit({ type: 'OBJECTSTYLECOMMITWITHPAYLOAD', amount: num}) //Object-Style Commit
        }
    }
}
```

