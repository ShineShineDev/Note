## Use vue-router

- ` If you want to use vue-router packeage in vue , you must define this packeage with appInstance.use() method`

- ` import vue-router`

- ` import we created router file`

- ` Them register in vue router propertie at main.js`

  ```js
   // src/main.js
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router/index.js'
  
  const app = createApp(App)
  
  app.use(router)
  
  app.mount('#app')
  
  ```
  





```js
/* Use vue-router
 - If you want to use vue-router packeage in vue , you must define this packeage with appInstance.use() method
 - import vue-router`
 - import we created router file`
 - Them register in vue router propertie at main.js`
*/ 
// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
const app = createApp(App)
app.use(router)
app.mount('#app') 
```

