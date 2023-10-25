## Template refs

- ` Refs are Vue.js instance properties used to register a reference to HTML elements or child elements in the template of your application`

- `The more common use cases which is focusing a text input`

- `ref is a special attribute, similar to the key attribute discussed in the v-for chapter.`

- :warning: `You can only access the ref after the component is mounted.`

  ```js
  <template>
  	<div>
  		<input type="text" ref="username">
  		<ul>
              //ref similar to the key attribute discussed in the v-for chapter
  			<li v-for="item in list" ref="items">
  				{{ item }}
  			</li>
  		</ul>
  
  	</div>
  </template>
    
  <script>
  export default {
  	data() {
  		return {
  			list: [1, 2, 3]
  		}
  	},
  	mounted() {
  		this.$refs.username.focus();
  		console.log(this.$refs.items)
  	}
  }
  </script>
  ```

  

  ```js
  /* - Refs are Vue.js instance properties used to register a reference to HTML elements
     - Similar to the key attribute discussed in the v-for chapter
     - The more common use cases which is focusing a text input
     - You can only access the ref after the component is mounted
  */
  <template>
  	<div>
      	//focusing on input element
  		<input type="text" ref="username">
  		<ul>
              //ref similar to the key attribute discussed in the v-for chapter
  			<li v-for="item in list" ref="items">
  				{{ item }}
  			</li>
  		</ul>
  	</div>
  </template>
    
  <script>
  export default {
  	data() {
  		return { list: [1, 2, 3] }
  	},
  	mounted() {
  		this.$refs.username.focus();
  		console.log(this.$refs.items)
  	}
  }
  </script>
  ```

  
