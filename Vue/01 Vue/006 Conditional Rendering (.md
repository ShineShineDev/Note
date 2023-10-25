## Conditional Rendering

- `Conditional rendering refers to *the ability to render distinct user interface (UI) markup based on whether a condition is true or not.`
- `To conditionally render elements we have four directives`
- `v-if`
  
- `v-else`
  
- `v-else-if`
  
- `v-show`





#### v-f

- `The directive v-if is used to conditionally render a block. The block will only be rendered if the directive's expression returns a truthy value.`

  ```vue
  <template>
  	<h1 v-if="isShow">The directive v-if is used to conditionally render a block.</h1>
  	<h1 v-if="0 == 0">0 is equal 0</h1>
  	<h1 v-if="1 > 0">1  greater than 0</h1>
  
  </template>
  <script>
  export default {
  	name: 'App',
  	//instancec datas
  	data() {
  		return {
  			isShow: true
  		}
  	},
  }
  </script>
  
  ```

  

  

####  v-else

- `A v-else element must immediately follow a v-if or a v-else-if element - otherwise it will not be recognized.`

  ```js
  <template>
  	<h1 v-if="0 != 0">0 is equal 1</h1>
  	<h1 v-else>0 is not equal 1</h1>
  </template>
  <script>
  export default {
  	name: 'App',
  	//instancec datas
  	data() {
  		return {
  			isShow: true
  		}
  	},
  }
  </script>
  
  ```

  





#### v-else-if

- `v-else-if directive used to toggle the display an element depending on a condition when the if condition is not satisfied`.

  ```js
  <template>
  	<h1 v-if="num == 1">{{num}} is equal 1</h1>
  	<h1 v-else-if="num ==2">{{num}} is equal 2</h1>
  	<h1 v-else-if="num ==3">{{num}} is equal 3</h1>
  </template>
  <script>
  export default {
  	name: 'App',
  	//instancec datas
  	data() {
  		return {
  			num: 3;
  		}
  	},
  }
  </script>
  
  ```

  



#### v-show

- `v-show is another option for conditionally displaying an element `

- `The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only toggles the display CSS property of the element.`

- `v-show doesn't support the <template> element, nor does it work with v-else.`

  ```js
  <template>
  	<h1 v-show="isShow">v-show is another option for conditionally displaying an element </h1>
  </template>
  <script>
  export default {
  	name: 'App',
  	//instancec datas
  	data() {
  		return {
  			isShow: true
  		}
  	},
  }
  </script>
  
  ```



#### v-if vs v-show

- `v-if is "real" conditional rendering because it ensures that event listeners and child components inside the conditional block are properly destroyed and re-created during toggles.`
- `v-if is also lazy : if the condition is false on initial render, it will not do anything - the conditional block won't be rendered until the condition becomes true for the first time.`
- `v-show if you need to toggle something very often, and prefer ,v-if if the condition is unlikely to change at runtime.`





```js
/* Conditional Rendering
   - Conditional rendering refers to the ability to render distinct user interface (UI) markup based on whether a      condition is true or not.
   - To conditionally render elements we have four directives, v-if, v-else, v-else-if, v-show
*/
/*v-if
   	-The directive v-if is used to conditionally render a block. The block will only be rendered if the                directive's expression returns a truthy value.
 *v-else	
 	-A v-else element must immediately follow a v-if or a v-else-if element - otherwise it will not be recognized.
 *v-else-if
 	-v-else-if directive used to toggle the display an element depending on a condition when the if condition is        not satisfied.
 *v-show
	- v-show is another option for conditionally displaying an element `
	- The difference is that an element with v-show will always be rendered and remain in the DOM; v-show only            toggles the display CSS property of the element.`
    - v-show doesn't support the <template> element, nor does it work with v-else.
*/
<template>
	<h1 v-if="num == 1">{{num}} is equal to 1</h1>
	<h1 v-else-if="num ==2">{{num}} is equal to 2</h1>
	<h1 v-else-if="num ==3">{{num}} is equal to 3</h1>
	<h1 v-else>{{num}} is equal to 4</h1>
	<h1 v-show="isShow">v-show</h1>
</template>
<script>
export default {
	data() { return {num: 4,isShow:true} },
}
</script>
```

