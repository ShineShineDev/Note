# Modules

-----

- `Without using` **`modules`** `system, store can get really` **`bloated`** ` in larger application,so`

- `Vuex allows us to divide our store into modules`

- `Each module can contain its own state, mutations, actions, getters, and even nested modules `

  ```js
  //Create Module
  //src/store/modules/moduleA.js
  const moduleA = {
    state: () => ({ stateA : 'ok' }),
    mutations: {  },
    actions: { },
    getters: { }
  }
  //export this
  export default moduleA
  
  //src/store/modules/moduleB.js
  const moduleB = {
    state: () => ({ stateB : 'ok' }),
    mutations: {  },
    actions: { },
    getters: { }
  }
  //export this
  export default moduleB
  
  
  //Register Module in vuex  modules  property
  //src/main.js
  import Vuex from 'vuex'
  import mouduleA from './modules/moduleA.js'
  import mouduleA from './modules/moduleB.js'
  const store = new Vuex.Store({
    modules: {
      a: moduleA, //or moduleA (shorthand style)
      b: moduleB
    }
  })
  
  
  //Interpolation in components
  //src/App.vue
  <template>
    <div>
      {{this.$store.state.a.msg}}
      {{this.$store.getters.getMsg}}
   
      {{this.$store.state.b.msg}}
    </div>
  </template>
  
  ```

  



### Namespace Modules

- `By default, actions,Getters and mutations are still registered under the **global namespace** - this allows multiple modules to react to the same action/mutation type.  `

- `You must be careful not to define two getters with the same name in different, non-namespaced modules, resulting in an error.`

- `If you want your modules to be more self-contained or reusable, you can mark it as namespaced with namespaced: true. When the module is registered, all of its getters, actions and mutations will be automatically namespaced based on the path the module is registered at.`

  ```js
  //src/store/moudels/moduleA.js
  const moduleA = {
      namespaced:true,
      state: () => ({
          msg : "Message from A" 
      }),
      getters: {
          getMsg(state) {
              return state.msg;
          }
      },
      mutations: {
          UPDATEMSG(state,payload) {
              state.msg = payload;
          }
      },
      actions: {
          updateMsg({ commit },payload) {
              commit('UPDATEMSG',payload)
          }
      },
  }
  export default moduleA;
  
  
  //src/store/moudels/moduleB.js
  const moduleB = {
      namespaced:true,
      state: () => ({
          msg : "Message from B" 
      }),
      getters: {
          getMsg(state) {
              return state.msg;
          }
      },
      mutations: {
          UPDATEMSG(state,payload) {
              state.msg = payload;
          }
      },
      actions: {
          updateMsg({ commit },payload) {
              commit('UPDATEMSG',payload)
          }
      },
  }
  export default moduleB;
  
  
  //src/store/store.js
  import { createStore } from 'vuex'
  import moduleA from './modules/moduleA'
  import moduleB from './modules/moduleB'
  const store = createStore({
      state() { return { rootStatet: [{ data: 'this is from root state' }], } },
      modules: {
          a: moduleA,
          b: moduleB
      }
  })
  export default store;
  
  
  //src/App.vue
  <template>
      <p>Root state : {{ this.$store.state.rootStatet[0] }}</p>
      <p>Module A State : {{ getModuleAState }}</p> 
      <button @click="dispatchToMoudelAAction(msg)">Dispatch to Moudel A action </button><hr/>
      <p>Module B State : {{ getModuleBState }}</p> 
      <button @click="dispatchToMoudelBAction(msg)">Dispatch to Moudel B action </button>
  </template>
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
      mounted(){
          console.log(this.$store.state.a);
      },
      computed: {
          getModuleAState(){ return  this.$store.state.a.msg },
          getModuleBState(){ return  this.$store.state.b.msg }
      },
      methods: {
          dispatchToMoudelAAction(){this.$store.dispatch('a/updateMsg',Math.random(0,10))},
          dispatchToMoudelBAction(){this.$store.dispatch('b/updateMsg',Math.random(0,10))}
       } 
  }
  </script>
  ```
  
  









### **global namespace**  moudel system app

```js
/* Moudule Vuex allows us to divide our  store into modules Each module can contain its own state, mutations, actions, getters, and even nested modules*/

//src/store/moudles/mutation.js
export const ADDPOST = 'ADDPOST'

//src/store/moudles/post.js
import { ADDPOST } from './mutation.js'
const posts = {
    state: () => ({ posts: [{ id: '001', body: 'this body' }, { id: '002', body: 'this body' }]}),
    getters: {getPost(state) { return state.posts }},
    actions: {addPost({ commit }, payload) { commit('ADDPOST', payload) }},
    mutations: { [ADDPOST](state, payload) { state.posts.push(payload) }}
}
export default posts;

//src/store/store.js (Register Module in vuex  modules  property)
import { createStore } from 'vuex'
import posts from './modules/posts'
const store = createStore({
    state() { return { rootStatet: [{ data: 'this is from root state' }], } },
    modules: { posts } // or posts : posts
})
export default store;

//YourComponent.vue
<template>
    <p>Root state : {{ this.$store.state.rootStatet[0] }}</p>
    <p>Posts Moudel State  : {{ this.$store.state.posts }}</p>
    <p>posts Moudel Getters : {{ this.$store.getters['getPost'] }}</p>
    <button @click="this.$store.dispatch('addPost',{ id: 12, body: 'post ..' })">posts Moudel Action  </button>
</template>
```



### **global namespace**  moudel system app with mapHelper

```js
//src/store/moudles/mutation.js
export const ADDPOST = 'ADDPOST'


//src/store/moudles/post.js
import { ADDPOST } from './mutation.js'
const posts = {
    state: () => ({
        posts: [{ id: '001', body: 'this body' }, { id: '002', body: 'this body' }],
    }),
    getters: {
        getPost(state) { return state.posts }
    },
    actions: {
        addPost({ commit }, payload) { commit('ADDPOST', payload) }
    },
    mutations: {
        [ADDPOST](state, payload) { state.posts.push(payload) }
    }
}
export default posts;


//src/store/store.js (Register Module in vuex  modules  property)
import { createStore } from 'vuex'
import posts from './modules/posts'
const store = createStore({
    state() { return { rootStatet: [{ data: 'this is from root state' }], } },
    modules: { posts } // or posts : posts
})
export default store;


//YourComponent.vue
<template>
    <p>Root state : {{ this.$store.state.rootStatet[0] }}</p>
    <p>Posts Moudel State : {{ getPost }}</p>
    <button @click="addPost(posts)">Add new state to post moudle </button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return {
            posts : { id: 12, body: 'post ..' }
        }
    },
    computed: {
        ...mapGetters(['getPost']),
    },
    methods: { ...mapActions(['addPost']) } //dispatch to posts moudel action with mapAction
}
</script>
```





### local  moudel system

```js
//src/store/moudels/moduleA.js
const moduleA = {
    namespaced:true,
    state: () => ({
        msg : "Message from A" 
    }),
    getters: {
        getMsg(state) {
            return state.msg;
        }
    },
    mutations: {
        UPDATEMSG(state,payload) {
            state.msg = payload;
        }
    },
    actions: {
        updateMsg({ commit },payload) {
            commit('UPDATEMSG',payload)
        }
    },
}
export default moduleA;


//src/store/moudels/moduleB.js
const moduleB = {
    namespaced:true,
    state: () => ({
        msg : "Message from B" 
    }),
    getters: {
        getMsg(state) {
            return state.msg;
        }
    },
    mutations: {
        UPDATEMSG(state,payload) {
            state.msg = payload;
        }
    },
    actions: {
        updateMsg({ commit },payload) {
            commit('UPDATEMSG',payload)
        }
    },
}
export default moduleB;


//src/store/store.js
import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
const store = createStore({
    state() { return { rootStatet: [{ data: 'this is from root state' }], } },
    modules: {
        a: moduleA,
        b: moduleB
    }
})
export default store;


//src/App.vue
<template>
    <p>Root state : {{ this.$store.state.rootStatet[0] }}</p>
    <p>Module A State : {{ getModuleAState }}</p> 
    <button @click="dispatchToMoudelAAction(msg)">Dispatch to Moudel A action </button><hr/>
    <p>Module B State : {{ getModuleBState }}</p> 
    <button @click="dispatchToMoudelBAction(msg)">Dispatch to Moudel B action </button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    mounted(){
        console.log(this.$store.state.a);
    },
    computed: {
        getModuleAState(){ return  this.$store.state.a.msg },
        getModuleBState(){ return  this.$store.state.b.msg }
    },
    methods: {
        dispatchToMoudelAAction(){this.$store.dispatch('a/updateMsg',Math.random(0,10))},
        dispatchToMoudelBAction(){this.$store.dispatch('b/updateMsg',Math.random(0,10))}
     } 
}
</script>
```



### local  moudel system with helper

```js
//src/store/moudels/moduleA.js
const moduleA = {
    namespaced:true,
    state: () => ({
        msg : "Message from A" 
    }),
    getters: {
        getAMsg(state) {
            return state.msg;
        }
    },
    mutations: {
        UPDATEMSG(state,payload) {
            state.msg = payload;
        }
    },
    actions: {
        updateAMsg({ commit },payload) {
            commit('UPDATEMSG',payload)
        },
        updateAMsgTwo({ commit },payload) {
            commit('UPDATEMSG',payload)
        }
    },
}
export default moduleA;


//src/store/moudels/moduleA.js
const moduleB = {
    namespaced:true,
    state: () => ({
        msg : "Message from B" 
    }),
    getters: {
        getBMsg(state) {
            return state.msg;
        }
    },
    mutations: {
        UPDATEMSG(state,payload) {
            state.msg = payload;
        }
    },
    actions: {
        updateMsg({ commit },payload) {
            commit('UPDATEMSG',payload)
        },
        updateMsgTwo({ commit },payload) {
            commit('UPDATEMSG',payload)
        }
    },
}
export default moduleB;


//src/store/store.js
import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
const store = createStore({
    state() { return { rootStatet: [{ data: 'this is from root state' }], } },
    modules: {
        a: moduleA,
        b: moduleB
    }
})
export default store;


//src/App.vue
<template>
    <p>Root state : {{ this.$store.state.rootStatet[0] }}</p>
    <p>Module A State : {{ getAMsg }}</p>
    <button @click="updateAMsg(Math.random(0,10))">Dispatch to Moudel A action </button> &nbsp;&nbsp;&nbsp;
    <button @click="updateAMsgTwo(Math.random(0,10))">Dispatch to Moudel A action </button>
    <hr/>
    <p>Module B State : {{ getBMsg }}</p>
    <button @click="updateMsg(Math.random(0,10))">Dispatch to Moudel B action </button> &nbsp;&nbsp;&nbsp;
    <button @click="updateMsgTwo(Math.random(0,10))">Dispatch to Moudel B action </button>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    mounted() {
        console.log(this.$store.state.a);
    },
    computed: {
        ...mapGetters('a', ['getAMsg']),
        ...mapGetters('b', ['getBMsg']),
    },
    methods: {
        ...mapActions('a', [
            'updateAMsg', 
            'updateAMsgTwo'
        ]),
        ...mapActions('b',[
            'updateMsg',
            'updateMsgTwo'
        ])
    }
}
</script>

```







### for ss

```js
export default { //src/store/moudels/moduleA.js
    namespaced:true,
    state: () => ({ msg : "Message from A" }),
    getters: { getMsg(state) {return state.msg}},
    mutations: {UPDATEMSG(state,payload) {state.msg = payload;}},
    actions: {updateMsg({ commit },payload) {commit('UPDATEMSG',payload)}},
}
export default { //src/store/moudels/moduleB.js
    namespaced:true,
    state: () => ({ msg : "Message from B" }),
    getters: {getMsg(state) { return state.msg;}},
    mutations: { UPDATEMSG(state,payload) { state.msg = payload; }},
    actions: { updateMsg({ commit },payload) {commit('UPDATEMSG',payload)}},
}
//src/store/store.js
import { createStore } from 'vuex'
import moduleA from './modules/moduleA'
import moduleB from './modules/moduleB'
const store = createStore({ modules: {a: moduleA,b: moduleB}})
//src/App.vue
<p>Module A State : {{ getAMsg }}</p>
<button @click="updateAMsg(Math.random(0,10))">Dispatch to Moudel A action </button> &nbsp;&nbsp;&nbsp;
<button @click="updateAMsgTwo(Math.random(0,10))">Dispatch to Moudel A action </button><hr/>
<p>Module B State : {{ getBMsg }}</p>
<button @click="updateMsg(Math.random(0,10))">Dispatch to Moudel B action </button> &nbsp;&nbsp;&nbsp;
<button @click="updateMsgTwo(Math.random(0,10))">Dispatch to Moudel B action </button>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed:{...mapGetters('a', ['getAMsg']),...mapGetters('b', ['getBMsg']),},
    methods:{ ...mapActions('a', ['updateAMsg', 'updateAMsgTwo']),...mapActions('b',['updateMsg','updateMsgTwo'])}
}
```

