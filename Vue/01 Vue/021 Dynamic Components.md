

 ## Dynamic components

- `Dynamic Components allow you to toggle between different components in the easiest way possible.`

- `They can simplify several conditional components (ones toggled using v-if, v-else-if, v-else) into just one line of code`

- `Vue Dynamic Components can be an extremely convenient way to make your code both more readable and adaptable.`

- `In :is attribute we need to bind the name of the registered component`

  ```js
  <template>
  	<button @click="activeComponent = 'ComponentOne'">Show ComponetOne </button>
  	<button @click="activeComponent = 'ComponentTwo'">Show ComponetTwo </button>
  	<button @click="activeComponent = 'ComponentThree'">Show ComponetThree </button>
  	
  	<component :is="activeComponent"/>
          
  	/* both of them equal,but hard readable and not easiest way
  	<ComponentOne v-if="activeComponent === 'ComponentOne'"/>
  	<ComponentTwo v-if="activeComponent === 'ComponentTwo'"/>
  	<ComponentThree v-if="activeComponent === 'ComponentThree'"/> */
          
  </template>
  
  <script>
  import ComponentOne from './components/ComponentOne.vue'
  import ComponentTwo from './components/ComponentTwo.vue'
  import ComponentThree from './components/ComponentThree.vue'
  export default {
  	data(){
  		return { activeComponent : 'ComponentOne' }
  	},
  	provide: { message: "Parent Data" },
  	components: { ComponentOne,ComponentTwo,ComponentThree },
  }
  </script>
  ```

  





```js
/*- Dynamic Components allow you to toggle between different components in the easiest way possible.
  - They can simplify several conditional components (v-if, v-else-if, v-else) into just one line of code
  - In :is attribute we need to bind the name of the registered component
*/  

<template>
	<button @click="activeComponent = 'ComponentOne'">Show ComponetOne </button>
	<button @click="activeComponent = 'ComponentTwo'">Show ComponetTwo </button>
	<button @click="activeComponent = 'ComponentThree'">Show ComponetThree </button>
	
	<component :is="activeComponent"/>
	/* both of them equal,but hard readable and not easiest way
	<ComponentOne v-if="activeComponent === 'ComponentOne'"/>
	<ComponentTwo v-if="activeComponent === 'ComponentTwo'"/>
	<ComponentThree v-if="activeComponent === 'ComponentThree'"/> */
        
</template>

<script>
import ComponentOne from './components/ComponentOne.vue'
import ComponentTwo from './components/ComponentTwo.vue'
import ComponentThree from './components/ComponentThree.vue'
export default {
	data(){
		return { activeComponent : 'ComponentOne' }
	},
	provide: { message: "Parent Data" },
	components: { ComponentOne,ComponentTwo,ComponentThree },
}
</script>
```

