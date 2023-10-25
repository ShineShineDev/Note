## State

1. `Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth"`
2.  `Vuex state is app-level state/data`



```js
//Create Store
//src/store.js
import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            msg: 'Message from vuex state'
        }
    },

})
export default store;

```

```js
//using vuex in vue app                                                                  
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
//string interpolation with other  component                                     src/app.vue         
<template>
  <div>{{msg}}</div>
</template>
export default {
    computed : {
            msg(){
               retrun this.$store.state.msg
            }
      }
}
```





### MapState with spread operator

-  `mapState can help us to access multiple state `
-  `When a component needs to make use of multiple store state properties or getters, declaring all these computed properties can get repetitive and verbose. To deal with this we can make use of the mapState helper which generates computed getter functions for us, saving us some keystrokes`

```js
                                                                                         src/app.vue
import {mapState} from 'vuex'

//smiple sytle
computed :mapState([
  'msg' 
])

//orbject style
computed : mpaState({
   CustomName : state.msg
})

//spread opreator with array
computed : {
     ...mapState([
        'msg'
    ])
}

//spread opreator wiht object styel
computed : {
     ...mapState({
      msg: 'msg' // or state => stare.msg

      //access from other moduel state
      othermodulestate : state =>state.othermodule.msg
    })
}
```



```js
/* State
 - Vuex uses a single state tree , single object contains all your application level state and serves as the          "single source of truth"`
 - Vuex state is app-level state/data
*/ 
//src/store.js
import { createStore } from 'vuex'
const store = createStore({ //Create Store
    state() { return { msg: 'Message from vuex state'}},
})
export default store;

//using vuex in vue app                                                                  
//src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/counter'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

//src/app.vue         
<template>
  <div>{{msg}}</div>
</template>
export default {
    computed : { msg() {retrun this.$store.state.msg }}
}
```

```js
/* MapState Helper
 - mapState can help us to access multiple state 
 - When a component needs to make use of multiple store state properties or getters, declaring all these computed    properties can get repetitive and verbose. To deal with this we can make use of the mapState helper which          generates computed getter functions for us, saving us some keystrokes
 */
//src/app.vue
<template> {{ msg }} , {{ msg2 }}, {{ msg3 }} </template>
<script>
import { mapState } from 'vuex';
export default {
  //Simple Style
  computed :mapState(['msg' ]) 
    
  //Object Style
  computed: mapState({
    msg: state => state.msg, // arrow functions can make the code very succinct!
    msg2: 'msg2', // passing the string value 'count' is same as `state => state.count`v
    msg3(state) { return state.msg + this.msg }//to access local state with `this`, a normal function must be used
  })
  
  //Object Styel with spread opreator (to merge local computed objects,we can use with the object spread operator)
  computed: {
    localComputed() { /* ... */ },
    ...mapState({
      msg: state => state.msg,
      msg2: 'msg2',//passing the string value 'count' is same as `state => state.count`
      msg3(state) { return state.msg } //to access local state with `this`, a normal function must be used
    })
  }
}
</script>
```
