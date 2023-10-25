## Directives

- `Directives are tiny commands that you can attach to DOM elements.`
- ` They are prefixed with v- to let the library know you are using a special bit of markup and to keep syntax consistent.`
- `They are typically useful if you need low-level access to an HTML element to control a bit of behavior.`





#### v-if, v-else-if, v-else Directives

- `Used for conditional rendering`

  ```vue
  <template>
  	<h1 v-if="0 == 1"> 0 is equal to 1</h1>
  	<h1 v-else-if="0 == 2"> 0 is equal to 2</h1>
  	<h1 v-else> 0 is equal to 0</h1>
  </template>
  ```
  
  

#### v-bind Directives

- `Used for binding attributes or pass props`

  ```js
  <template>
      <h1 v-bind:id="titleId"> Don't fight for slavery fight for liberty</h1>
  	<button v-bind:disabled="isDisabled">Clikc Me</button>
  </template>
  
  <script>
  export default {
  	name: 'App',
      //instancec datas
  	data() {
  		return {
            titleId : "Title",
            isDisabled : true
  		}
  	},
  }
  </script>
  ```
  
  

#### v-on or @ Directives

- `Used for to listen events `

  ```vue
  <template>
  	<form @submit.prevent='makePostRequest()'>
  	</form>	
  	<button @click='clallMe()'>Click Me</button>
  </template>
  ```



#### v-model Directives

- `Used for two-way binding or react`

  ```vue
  <template>
  	<input type='text' v-model="username">
  </template>
  <script>
  export default {
  	data() {
  		return {
  			username: 'Julain',
  		};
  	},
  }
  </script>
  ```
  
  

#### v-pre  Directives

- `Used to skip compilation for this element and all its children.`

  ```vue
  <template>
  	<div v-pre>{{ username}}</div>
  </template>
  <script>
  export default {
  	data() {
  		return {
  			username: 'Julain',
  		};
  	},
  }
  </script>
  ```



#### v-once Directives

- `Used to avoid unwanted re-renders of an element`

```vue
<div v-once>Username : {{username}}</div>
<input v-model="username">
<script>
export default {
	data() {
		return {
			username: 'Julain',
		};
	},
}
</script>
```



#### v-show

- `Used to toggle the display CSS property of a element with our data via inline styles`

  ```vue
  <template>
  	<div v-show="message">
  		Hello I'm visible.
  	</div>
  </template>
  <script>
  export default {
  	data() {
  		return {
  			message: true,
  		};
  	},
  }
  </script>
  ```

  

  

  

```js
/* Directives
  - Directives are tiny commands that you can attach to DOM elements,They are prefixed with v- to
  - They are typically useful if you need low-level access to an HTML element to control a bit of behavior
  - v-if, v-else-if, v-else : Used for conditional rendering
  - v-bind  : Used for binding attributes or pass props
  - v-on or @  : Used for to listen events
  - v-model : Used for two-way binding or react
  - v-pre : Used to skip compilation for this element and all its children
  - v-once : Used to avoid unwanted re-renders of an element
  - v-show : Used to toggle the display CSS property of a element with our data via inline styles
*/
<h1 v-if="0 == 1"> 0 is equal to 1</h1>
<h1 v-else-if="0 == 2"> 0 is equal to 2</h1>
<h1 v-else> 0 is equal to 0</h1>

<h1 v-bind:id="titleId"> Don't fight for slavery fight for liberty</h1>
<button v-bind:disabled="isDisabled">Clikc Me</button>
     
<form @submit.prevent='makePostRequest()'></form>	
<button @click='clallMe()'>Click Me</button>

<input type='text' v-model="username">
<div v-pre>{{ username}}</div>
	
<div v-once>Username : {{username}}</div>
<input v-model="username">

<div v-show="message">Hello I'm visible.</div>

data() {return { titleId : "Title", isDisabled : true, username: 'Julain', message: true, } },
```

