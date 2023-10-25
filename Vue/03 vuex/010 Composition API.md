## Composition API

- `In Composition API,to access the store within the setup hook, you can call the useStore function. `

- `This is the equivalent of retrieving this.$store within a component using the Option API.`

  ```js
  import { useStore } from 'vuex'
  
  export default {
    setup () {
      const store = useStore()
    }
  }
  ```

  

#### Accessing State and Getters

-  `In order to access state and getters, you will want to create computed references to retain reactivity. `

- `This is the equivalent of creating computed properties using the Option API.`

  ```js
  //src/App.vue
  <template lang="">
    <div>
      {{moduleAMsg}} <hr/>
      {{moduleBMsg}}
    </div>
  </template>
  <script>
  import { useStore} from 'vuex'
  import { computed } from 'vue'
  export default {
    setup () {
      const store = useStore()
      return {
        moduleAMsg: computed(() => store.state.a.msg), // access a state in computed function
        moduleBMsg: computed(() => store.state.b.msg) // access a getter in computed function
      }
    }
  }
  </script>
  
  
  //src/main.js
  import {createStore} from 'vuex'
  import moduleB from './modules/moduleB'
  import moduleA from './modules/moduleA';
  const store = createStore({
      modules: {
          a : moduleA,
          b : moduleB,
        }
  })
  export default store;
  
  
  //src/module/moduleA
  const moduleA = {
      state: () => ({ 
          msg : 'msg form moude A'
       }),
       getters: {
          getMsg(state){
              return state.msg;
          }
        },
       mutations: { 
          UPDATEMSG(state){
              state.UPDATEMSG = 'updated...' 
          }
       },
      actions: { 
          increment({commit}){
              commit('UPDATEMSG')
          }
       }, 
    }
  export default moduleA;
  ```



#### Accessing Mutations and Actions

- `When accessing mutations and actions, you can simply provide the commit and dispatch method inside the setup hook.`

  ```js
  //src/store.js
  import {createStore} from 'vuex'
  import moduleB from './modules/moduleB'
  import moduleA from './modules/moduleA';
  const store = createStore({
      state(){
        return {
          rootState : 'Root State '
        }
      },
      modules: {
          a : moduleA,
          b : moduleB,
        }
  })
  export default store;
  
  
  
  //src/store/modules/moduleA.js
  import {UPDATEMSG} from './mutatiions.js'
  const moduleA = {
      namespaced: true,
      state: () => ({ 
          msg : 'msg form moude A'
       }),
       getters: {
          getMsg(state){
              return state.msg;
          }
        },
       mutations: { 
          [UPDATEMSG](state){
              state.msg = 'updated...' 
          }
       },
      actions: { 
          updateModuleAMsg({commit}){
              commit('UPDATEMSG')
          }
       },
      
    }
  export default moduleA;
  
  
  //src/store/modules/moduleB.js
  import {UPDATEMSG} from './mutatiions.js'
  const moduleA = {
      namespaced: true,
      state: () => ({ 
          msg : 'msg form moude B'
       }),
       getters: {
          getMsg(state){
              return state.msg;
          }
        },
       mutations: { 
          [UPDATEMSG](state){
              state.msg = 'updated...' 
          }
       },
      actions: { 
          increment({commit}){
              commit('UPDATEMSG')
          }
       },
    }
    export default moduleA;
  
  
  //src/App.vue
  <template lang="">
    <div>
  	{{getRootState}}   <br/>
      {{moduleAMsg}}  <br/>
      {{moduleBMsg}} <hr/>
      <button @click="updateModuleAMsg">Update Moudel A Msg</button>
  	<button @click="updateModuleBMsg">Update Moudel B Msg</button>
    </div>
  </template>
  <script>
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  export default {
  	setup() {
  		const store = useStore()
  		return {
  			getRootState: computed(() => store.state.rootState),//access root  state in computed function
  			moduleAMsg: computed(() => store.state.a.msg), //access Module A  state in computed function
  			moduleBMsg: computed(() => store.state.b.msg), //access moudel B moudle getter in computed function
  			updateModuleAMsg: () => store.dispatch('a/updateModuleAMsg'), // access Model A  action 
  			// updateModuleBMsg: () => console.log(store) // access Model B  mutation 
  			updateModuleBMsg: () => store.commit('b/UPDATEMSG') // access Model B  mutation 
  		}
  	}
  }
  </script>
  ```
  
  







```js
/* Composition API 
   - In Composition API,to access the store within the setup hook, you can call the useStore function.
   - This is the equivalent of retrieving this.$store within a component using the Option API.
   - In order to access state and getters, you will want to create computed references to retain reactivity. 
   - When accessing mutations and actions, you can simply provide commit and dispatch method inside setup hook.
*/
export default { //src/store/modules/moduleA.js
    namespaced: true,
    state: () => ({  msg : 'msg form moude A'}),
    getters: {getMsg(state){return state.msg;}},
    mutations: { UPDATEMSG(state){state.msg = 'updated...' }},
    actions: { updateModuleAMsg({commit}){commit('UPDATEMSG')}}}
export default { //src/store/modules/moduleB.js
    namespaced: true,
    state: () => ({ msg : 'msg form moude B'}),
    getters: {getMsg(state){return state.msg;}},
    mutations: { UPDATEMSG(state){state.msg = 'updated...' }},
    actions: { increment({commit}){commit('UPDATEMSG')}}}
//src/App.vue
{{moduleAMsg}}	<button @click="updateModuleAMsg">Update Moudel A Msg</button> <br/>
{{moduleBMsg}}  <button @click="updateModuleBMsg">Update Moudel B Msg</button> <hr/>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
	setup() {
		const store = useStore()
		return {
			moduleAMsg: computed(() => store.state.a.msg),//access Module A  state in computed function
		    moduleBMsg: computed(() => store.state.b.msg),//access moudel B moudle getter in computed fun
			updateModuleAMsg: () => store.dispatch('a/updateModuleAMsg'), // access Model A  action 
			updateModuleBMsg: () => store.commit('b/UPDATEMSG') // access Model B  mutation 
		}
	}
}
```

