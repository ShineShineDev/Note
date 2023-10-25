## Custom Directives

- `A directive is some special token in the markup that tells the library to do something to a DOM element.`
- `Directive use to manimpulate dom element `
- `Default directive are v-if,v-for ,v-show etc.. `



#### Create Local Custom Directives

- `A custom directive is defined as an object containing lifecycle hooks similar to those of a component.`

- `The hooks receive the element the directive is bound to. `

  ```js
  <template>
  	<div>
  		<input v-focus />
  		<div v-bgRed>bgRed</div>
  	</div>
  </template>
  <script>
  export default {
  	directives: {
  		focus: {
  			mounted: (el) => el.focus()
  		},
  		bgRed : {
  			mounted : (el) => el.style.background = 'red'
  		}
  	}
  }
  </script>
  ```
  
  



#### Create  global Custom Directives 

- `Similar to global components, custom directives must be registered so that they can be used in all templates.`

  ```js
  //main.js
  import { createApp } from 'vue' //import createApp from vue
  import App from './App.vue' // import the root component App from SFC.
  
  const app = createApp(App) //Creat new application instance 
  
  //Global Custom Directives.They can be used in all templates
  app.directive('bgBlue', { mounted: (el) => el.style.background = 'blue' })
  app.directive('bgYellow', { mounted: (el) => el.style.background = 'yellow' })
  
  app.mount('#app')  //Mounting the App
  
  //App,vue
  <template>
  	<div>
  		<input v-focus />
  		<div v-bgRed>bgRed</div>
  		<div v-bgBlue>Bg Blue from global Custom Directives </div>
  		<div v-bgYellow>Bg Yellow from global Custom Directives </div>	
  	</div>
  </template>
    
  <script>
  export default {
      //local custom directive
  	directives: {
  		focus: { mounted: (el) => el.focus() },
  		bgRed : { mounted : (el) => el.style.background = 'red'}
  	}
  }
  </script>
  ```

  



#### Directive Hooks

- `A directive definition object can provide several hook functions (all optional)`

  ```js
  const myDirective = {
    // called before bound element's attributes
    // or event listeners are applied
    created(el, binding, vnode, prevVnode) {
      // see below for details on arguments
    },
    // called right before the element is inserted into the DOM.
    beforeMount(el, binding, vnode, prevVnode) {},
    // called when the bound element's parent component
    // and all its children are mounted.
    mounted(el, binding, vnode, prevVnode) {},
    // called before the parent component is updated
    beforeUpdate(el, binding, vnode, prevVnode) {},
    // called after the parent component and
    // all of its children have updated
    updated(el, binding, vnode, prevVnode) {},
    // called before the parent component is unmounted
    beforeUnmount(el, binding, vnode, prevVnode) {},
    // called when the parent component is unmounted
    unmounted(el, binding, vnode, prevVnode) {}
  }
  ```





#### Hook Arguments

- `Directive hooks are passed these arguments`
  - `el : the element the directive is bound to. This can be used to directly manipulate the DOM.`
  - `binding : an object containing the following properties.`
    - `value: The value passed to the directive. For example in v-my-directive="1 + 1", the value would be 2`.
    - `oldValue: The previous value, only available in beforeUpdate and updated. It is available whether or not the value has changed.`
    - `arg: The argument passed to the directive, if any. For example in v-my-directive:foo, the arg would be "foo"`.
    - `modifiers: An object containing modifiers, if any. For example in v-my-directive.foo.bar, the modifiers object would be { foo: true, bar: true }`.
    - `instance : The instance of the component where the directive is used.`
    - `dir: the directive definition object.`
  - `vnode: the underlying VNode representing the bound element.`
  - `prevNode: the VNode representing the bound element from the previous render. Only available in the beforeUpdate` and `updated hooks.`







#### Binding  Arguments

```js
//main.js
import { createApp } from 'vue' //import createApp from vue
import App from './App.vue' // import the root component App from SFC.

const app = createApp(App) //Creat new application instance 

//global Custom Directives 
app.directive('bg', {
    mounted: function (el, binding) {
        el.style.background = binding.arg
    }
})
app.mount('#app')  //Mounting the App

//App.vue
<div v-bg:pink>Lorem ipsum</div>
```





#### Binding Value

```js
<template>
	<div>
		<div v-bg="'pink'">Lorem ipsum dolor, sit amet consectetur adipisicing elit</div>
	</div>
</template>	
<script>
export default {
	//local custom directive 
	directives: {
		bg: {
			mounted: function (el, binding) {
				el.style.background = binding.value
			}
		},
	}
}
</script>
```





#### Binding Modifiers (binding.modifires.[modifiresName])

```js

<template>
    <input type="text" value="     233  " v-in.trim/>
</template>	
<script>
export default {
	directives: {
		in: {
			mounted: function (el, binding) {	
				if (binding.modifiers.trim) {
					console.log('Without Trim : ',el.value)
					console.log('Trim value : ',el.value.trim())
				}
			}
		},
	}
}
</script>
```





#### Function Shorthand

- `It's common for a custom directive to have the same behavior for mounted and updated, with no need for the other hooks. In such cases we can define the directive as a function`

  ```js
  <p>VueJs Custom Directive</p>
  app.directive('bg',function(el,binding,vnode){
     el.style.background = 'red'
  })
  ```





#### Object Literals

- `If your directive needs multiple values, you can also pass in a JavaScript object literal.`

-  `Remember, directives can take any valid JavaScript expression.`

  ```js
  <p v-beauti="{ color:'blue',bg:'black' }">Custom Directive object literals or multiple value</p>
  
  Vue.directive('beauti',function(el,binding,vnode){
     el.style.color = binding.value.color,
     el.style.background = binding.value.bg
  })
  ```











```js
/* Binding  Arguments */
//main.js
app.directive('bg', { mounted: function (el, binding) { el.style.background = binding.arg }})
//App.vue
<template> <div v-bg:pink>Lorem ipsum</div> </template>

/*Binding Value*/
<template> <div v-bg="'pink'">Lorem ipsum dolor, sit amet consectetur adipisicing elit</div> </template>	
<script>
export default {
	//local custom directive 
	directives: { bg: { mounted: function (el, binding) { el.style.background = binding.value } }}
}
</script>

/* Binding Modifiers (binding.modifires.[modifiresName]) */
<input type="text" value="     233  " v-in.trim/>
<script>
export default {
	directives: {
		in: {
			mounted: function (el, binding) {	
				if (binding.modifiers.trim) {
					console.log('Without Trim : ',el.value)
					console.log('Trim value : ',el.value.trim())
				}
			}
		},
	}
}
</script>
```

