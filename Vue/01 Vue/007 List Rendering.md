## List rendering

- `We can use the v-for directive to render a list of items based on :`
  - `Array `
  - `Array Objects`
  - `Array of Arrays`
  - `Object key value pairs`
  
- ` The v-for directive requires a special syntax in the form of item in items, where items is the source data array and item is an alias for the array element being iterated on`

  

#### v- key

- `v- key is a special attribute which is primarily used as a hint for views virtual dom algorithm to identify nodes when diffing the new dom tree with the old dom tree`
- `Key attribute helps Vue identify which items in a list have changed are added or removed and plays a crucial role in handling ui updates correctly and efficiently`
- ` When used with the v-for directive the key attribute should always have a unique value`





#### List Rending On Array 

```js
<template>
	<ul>
		<li v-for="user in users" v-bind:key="user"> {{ user }}</li>
	</ul>
	<ul>
		<li v-for="(user,index) in users" v-bind:key="index"> {{ user }}</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			users: ['Wailian', 'Julain', 'Benjamin', 'James']
		}
	},
}
</script>
```





#### List Rending On Objects of Array  

```js
<template>
	<ul>
	<li v-for="(post,index) in posts" v-bind:key="index"> Author : {{ post.author }}. Title : {{post.title}}</li
	</ul>
</template>
<script>
export default {
	data() {
		return {
			posts: [
				{author : 'Wailian',title : 'Title one',body : 'Post One'},
				{author : 'Julian',title : 'Title Two',body : 'Post Two'},
				{author : 'James',title : 'Title Three',body : 'Post Three'}
			]
		}
	},
}
</script>
```





#### List Rending On Array  in Array

```vue
<template>
	<ul>
		<li v-for="(post,index) in posts" v-bind:key="index">
			<h3>{{post.Author}}</h3>
			<ul>
				<li v-for="(post,index) in post.posts" :key="index">{{post}}</li>
			</ul>
		</li>
	
	</ul>

</template>
<script>
export default {
	data() {
		return {
			posts: [
				{
					Author : 'Wailian',
					posts : ["Post One from Wailian","Post two from Wailian","Post three from Wailian"] 
				},
				{
					Author : 'Julian',
					posts : ["Post One from Julian","Post two from Julian","Post three from Julian"] 
				},
				{
					Author : 'James',
					posts : ["Post One from James","Post two from James","Post three from James"] 
				},

			]
		}
	},
}
</script>
```





#### List Rending On Object Key Value Pairs

```vue
<template>
	<ul>
		<li v-for="(user,index) in users" v-bind:key="index">{{user}}</li>
	</ul>

</template>
<script>
export default {
	data() {
		return {
			users: {
					Name : 'Wailian',
					Age : 23,
					Profession : "Dev",
				},
		}
	},
}
</script>
```





#### List Rending on Template

- `v-for directive also works with the template tag  to render a block of multiple elements.`

  ```vue
  <template>
  	<template v-for="(user,index) in users" v-bind:key="index">
  		<h3>{{user}}</h3>
  	</template>
  
  </template>
  <script>
  export default {
  	data() {
  		return {
  			users: {
  					Name : 'Wailian',
  					Age : 23,
  					Profession : "Dev",
  				},
  		}
  	},
  }
  </script>
  ```

  

  



####  Range Rending

```js
<span v-for="n in 10">{{ n }}</span>
```





#### Conditional rendering

- `Conditional rendering refers to the process of delivering elements and components based on certain conditions`

  ```vue
  //List Rending On Array in Array
  <template>
  	<ul>
  		<li v-for="(repo, index) in gitRepos" v-bind:key="index" >
  			<span v-if="repo.isPublic">{{repo.name}}</span>				
  		</li>
  	</ul>
  </template>
  <script>
  export default {
  	data() {
  		return {
  			gitRepos: [
  				{
  					name : "Repo One",
  					isPublic : true
  				},
  				{
  					name : "Repo Two",
  					isPublic : false
  				},
  				{
  					name : "Repo Three",
  					isPublic : true
  				},
  			]
  		}
  	},
  }
  </script>
  ```

  

