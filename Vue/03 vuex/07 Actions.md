## Actions

- `Actions are similar to mutations, actions commit mutations:`
  
  `Actions perform asynchronous operations inside an action`
- `Action handlers receive a context object ,exposes the same set of methods/properties on the  store instance`
- `Action Can call context.commit to commit a mutation, or access the state and getters via context.state , context.getters and  even call other actions with context.dispatch.`
- `Context object is not the store instance itself` 


```js
import { createStore } from 'vuex'
import { INCREMENT,INCREMENTWITHPAYLOAD, OBJECTSTYLECOMMITWITHPAYLOAD} from './mutation-types.js'

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
        [INCREMENT](state) {state.count++},
        [INCREMENTWITHPAYLOAD](state, anyName) { state.count += anyName.num},
        [OBJECTSTYLECOMMITWITHPAYLOAD](state, payload) {state.count += payload.num}
    },
    actions: {
        //commit a mutation
        incrementAction(context) {
            context.commit('INCREMENT')
        },
        //commit a mutationwe with ES2015 argument destructuring 
        incrementActionWithPayload({ commit },payload) {
            commit('INCREMENTWITHPAYLOAD',payload)
        },
        objectStyleAction(context,payload){
            context.commit(OBJECTSTYLECOMMITWITHPAYLOAD,payload)
        },
        //Action even call other actions with context.dispatch.
        increment(context) {
            context.dispatch('incrementAction')
        }
    }

})
export default store;

```







### Dispatch action  

- `You can dispatch actions in components with` **`this.$store.dispatch('xxx')`**,` or use the `mapActions` helper `
- `Actions support the same payload format and object-style dispatch`

```js
<template>
    Count {{ getCountNum }} <br />
    <button @click="increment()">Increment dispatch 1</button> <br />
    <button @click="incrementWithPayload(5)">Increment dispatch With Payload 5</button> <br />
    <button @click="objectStyleCommitWithPayload(3)">Object-Style dispatch With Payload : 3 </button>
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
        //dispatch to vuex action
        increment() {
            this.$store.dispatch('incrementAction')
        },
        // dispatch with a payload
        incrementWithPayload(num) {
            this.$store.dispatch('incrementActionWithPayload', { num: num })
        },
        // dispatch with an object
        objectStyleCommitWithPayload(num) {
            this.$store.dispatch({ type: 'objectStyleAction', num})
        }
    }
}
</script>
```





#### mapActions

- `You can dispatch actions in components with this.$store.dispatch('xxx'), or use the mapActions helper which maps component methods to store.dispatch calls (requires root store injection)`

  ```js
  import { mapActions } from 'vuex'
  
  export default {
    // ... 
    methods: {
      ...mapActions([
        'increment', // map `this.increment()` to `this.$store.dispatch('increment')`
  
        // `mapActions` also supports payloads:
        'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
      ]),
      ...mapActions({
        add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
      })
    }
  }
  ```

  





```js
/* - Actions are similar to mutations.Actions commit mutations.Actions perform asynchronous operations in 
   - Action handlers receive a context object ,exposes the same set of methods/properties on the  store instance`
   - Action Can call context.commit to commit a mutation, or access the state and getters via context.state ,          context.getters and  even call other actions with context.dispatch.`
   - Context object is not the store instance itself` 
*/   
//src/store/store.js
import { createStore } from 'vuex'
import { INCREMENT,INCREMENTWITHPAYLOAD, OBJECTSTYLECOMMITWITHPAYLOAD} from './mutation-types.js'
const store = createStore({
    state: {  count: 1 },
    mutations: {
        [INCREMENT](state) {state.count++},
        [INCREMENTWITHPAYLOAD](state, anyName) { state.count += anyName.num},
        [OBJECTSTYLECOMMITWITHPAYLOAD](state, payload) {state.count += payload.num}
    },
    actions: {
        action(context) {context.commit('INCREMENT')}, //commit a mutation
        //commit a mutationwe with ES2015 argument destructuring 
        actionWithPayload({ commit },payload) {commit('INCREMENTWITHPAYLOAD',payload)},
        actionWithObj(context,payload){ context.commit(OBJECTSTYLECOMMITWITHPAYLOAD,payload)},
        //Action even call other actions with context.dispatch.
        increment(context) { context.dispatch('incrementAction')}
    }
})
//src/App.vue
methods: {
    increment() { this.$store.dispatch('action')} //dispatch to vuex action
    incrementWithPayload(num) { this.$store.dispatch('actionWithPayload', {num: num})}, //dispatch with a payload
    actionWithObj(num) { this.$store.dispatch({ type: 'objectStyleAction', num})} // dispatch with an object
}
//HTML Event -> Vuex action -> Vuex mutations -> Mutations change state
```

```js
//You can dispatch actions in components with this.$store.dispatch('xxx'), or use the mapActions helper which maps component methods to store.dispatch calls (requires root store injection)
//src/store/store.js
import { createStore } from 'vuex'
import { INCREMENT,INCREMENTWITHPAYLOAD, OBJECTSTYLECOMMITWITHPAYLOAD} from './mutation-types.js'
const store = createStore({
    state: { count: 1 },
    mutations: {
        [INCREMENT](state) {state.count++},
        [INCREMENTWITHPAYLOAD](state, anyName) { state.count += anyName},
        [OBJECTSTYLECOMMITWITHPAYLOAD](state, payload) {state.count += payload}
    },
    actions: {
        incrementAction(context) { context.commit('INCREMENT')}, //commit a mutation
        incrementActionWithPayload({ commit },payload) { commit('INCREMENTWITHPAYLOAD',payload) },
        objectStyleAction(context,payload){ context.commit(OBJECTSTYLECOMMITWITHPAYLOAD,payload)},
    }
})
//src/App.vue
<button @click="incrementAction()">Increment dispatch 1</button> <br />
<button @click="incrementActionWithPayload(5)">Increment dispatch With Payload 5</button> <br />
<button @click="objectStyleCommitWithPayload(3)">Object-Style dispatch With Payload : 3 </button>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions([
            'incrementAction', // this.$store.dispatch('incrementAction')
            // mapActions also supports payloads:
            'incrementActionWithPayload' //this.$store.dispatch('incrementActionWithPayload', amount)
        ]),
        ...mapActions({objectStyleCommitWithPayload: 'objectStyleAction' })
    }
}
```

