## Creating vuex store



#### Vuex  Instance

-  `Create store file in src folder => src/store.js`
-  ` Import vuex`
-  `Create Vuex Instance`
-  `Export this store`
-  `Install vuex in vue(Vue.use(Vuex)) in src/main.js`
-  `This vuex instance have a lot of options like this => state,actions,mutations and getters`

```js
//src/store.js
//import vuex
import { createStore } from 'vuex'

//Create Vuex Instance
const store = createStore({
    state() {
        return {  msg: 'Message from vuex state' }
    },
})
export default store;

```



#### Using vuex in vue app

```js
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
//App.vue
<template>
  {{ $store.state.msg }}
</template>
```





```js
/* Creating vuex store and using it
 	-  Create store file in src folder => src/store.js
	-  Import vuex
	-  Create Vuex Instance
	-  Export this store
	-  Install vuex in vue(Vue.use(Vuex)) in src/main.js
	-  Use state in Component
	-  This vuex instance have a lot of options like this => state,actions,mutations and getters
*/	
//src/store.js
//import vuex
import { createStore } from 'vuex'
//Create Vuex Instance
const store = createStore({
    state() { return {  msg: 'Message from vuex state' } },
})
export default store;

//Using vuex in vue app 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/counter'
const app = createApp(App)
app.use(store) //Using vuex in vue app 
app.use(router)
app.mount('#app')

//App.vue
<template> {{ $store.state.msg }} </template>
```
