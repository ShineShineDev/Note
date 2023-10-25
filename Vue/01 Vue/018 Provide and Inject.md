## Provide and Inject

- `Provide and Inject  apis provide a way to pass data through the component tree without having to pass down props manually at every level`

- `Vue dependency injection using provide and inject is great for building Vue plugins or avoiding prop drilling (passing props all the way down the hierarchy even if many in-between components don’t require the prop).`



> `Provide and Inject is a great way to avoid prop drilling. `







#### Provide

- `To provide data to a component's descendants, use the provide option`

  ```js
  <template>
  	<div>
  		<ChildComponent />
  	</div>
  </template>
  <script>
  import ChildComponent from './components/ChildComponent.vue'
  export default {
  	data() {
  		return { msg: "Data from Parent", }
  	},
  	provide: {
  		message: "Parent Data"
  	},
  	components: { ChildComponent },
  }
  </script>
  ```
  
  
  
  



#### Inject

- `To inject data provided by an ancestor component, use the inject option`

  ```js
  <template>
      {{message}}
      <HeaderComponent/>
  </template>
  <script>
  import HeaderComponent from './HeaderComponent.vue';
  export default {
      inject: ['message'],
      components: { HeaderComponent },
  }
  </script>
  ```

  





#### Working with Reactivity

- `In order to make injections reactively linked to the provider, we need to provide a computed property using thecomputed function`

  ```js
  import { computed } from 'vue'
  
  export default {
    data() {
      return {
        message: 'hello!'
      }
    },
    provide() {
      return {
        // explicitly provide a computed property
        message: computed(() => this.message)
      }
    }
  }
  
  ```

  



#### App-level Provide

- `App-level provides are available to all components rendered in the app. This is especially useful when writing plugins, as plugins typically wouldn't be able to provide values using components`

  ```js
  import { createApp } from 'vue'
  
  const app = createApp({})
  
  app.provide(/* key */ 'message', /* value */ 'hello!')
  
  ```

  





```js
/* Provide and Inject with Reactivity
	- In order to make injections reactively linked to the provider, we need to provide a computed property using	  thecomputed function	
*/	
//Parent Component
import { computed } from 'vue' 
export default {
    data() { return { message: 'hello!' } },
    provide() {
        return {
            // explicitly provide a computed property
            message: computed(() => this.message)
        }
    }
}

/* App-level Provide
  - App-level provides are available to all components rendered in the app. This is especially useful when writing     plugins, as plugins typically wouldn't be able to provide values using components
*/  
//index.js
import { createApp } from 'vue'  
const app = createApp({})
app.provide(/* key */ 'message', /* value */ 'hello!')
```

