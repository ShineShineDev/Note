## Computed Properties

- `Computed properties that allows us to transform or perform calculations on our data and then easily reuse the result`

- `In-template expressions are very convenient, but they are suitable for simple operations. Putting too much logic in your templates can make them bloated and hard to maintain. `

- `Computed properties are very useful for avoid complex in-template expressions and to compose new data from existing data sources and to reference a value directly in your template`

- `They don't accept arguments and they are very handy for composing new data from existing sources,
   they get dynamic values based on other properties.`
   
- `Computed properties should be side-effect free`
  
   ```js
   <template>
   	<ul>
   	  <h3>Decending with In-template expressions</h3>
   	  <li v-for="car in cars.sort((a,b)=> b.year - a.year)" :key="car"> {{car.type}}:{{ car.year}}</li>
   	</ul>
   	<ul>
         <h3>Decending with computed </h3>
   	  <li v-for="car in sortCarByDecending" :key="car">{{ car.type }} : {{ car.year }}</li>
   	</ul>
   </template>
   <script>
   export default {
   	data() {
   		return {
   			cars: [
   				{ type: "Volvo", year: 2016 },
   				{ type: "Saab", year: 2001 },
   				{ type: "BMW", year: 2010 }
   			]
   		}
   	},
   	computed: {
   		sortCarByDecending: function () {
   			let car = this.cars; //to avoid side-effect 
   			return car.sort((a, b) => b.year - a.year)
   		},
   	}
   
   }
   </script>
   
   ```
   
   







#### Computed Properties and Method Properties

- `Computed properties know if the values used in the function changed so they don't need to run 
  everytime to check, only once`

- `A cool thing of the computed properties is that they are cached, that's mean that the function will run only once until the values don't change again also if it's called many times in the same template.`
  
- `On the other hand methods don't know if the values used in the function changed so they need to run everytime to check.`
  
- ` Method invocation will always run the function whenever a re-render happens.`
  
- `if you have a really expensive piece of logic a computed property is definitely the better approach keeping in mind the app's performance`
  
  ```vue
  <template>
  	<div>
  		Username from methods Property : {{met()}} <br><br>
  		Username from computed Property : {{com}} <br><br>
  		<input type="text" v-model="password" /> <br><br>
  		Password : {{password}}
  	</div>
  </template>
  <script>
  export default {
  	data() {
  		return {
  			username: 'Julain',
  			password : ''
  		};
  	},
  	computed: {
  		com: function () {
  			console.log("com is working...");
  			return this.username
  		}
  	},
  	methods: {
  		met: function () {
  			console.log("met is working...");
  			return this.username
  		}
  	},
  
  }
  </script>
  
  ```
  
  



```vue
<!-- Computed Properties
   - Computed properties that allows us to transform or perform calculations on our data and then easily                reuse the result
   - In-template expressions are very convenient, but they are suitable for simple operations. Putting too              much logic in your templates can make them bloated and hard to maintain. 
   - Computed properties are very useful for avoid complex in-template expressions and to compose new data              from existing data sources and to reference a value directly in your template
   - Computed properties should be side-effect free -->  
<template>
	<ul>
	 	<h3>Decending with In-template expressions</h3>
	    <li v-for="car in cars.sort((a,b)=> b.year - a.year)" :key="car"> {{car.type}}:{{ car.year}}</li>
	</ul>
	<ul>
     	<h3>Decending with computed property </h3>
	  	<li v-for="car in sortCarByDecending" :key="car">{{ car.type }} : {{ car.year }}</li>
	</ul>
</template>
<script>
export default {
	data() {
		return {
			cars: [ { type: "Volvo", year: 2016 }, { type: "Saab", year: 2001 },{ type: "BMW", year: 2010 }]
		}
	},
	computed: {
		sortCarByDecending: function () {
			let car = this.cars; //to avoid side-effect 
			return car.sort((a, b) => b.year - a.year)
		},
	}
}
</script>
```



```vue
<!-- Computed Properties and Method Properties
	- Computed properties know if the values used in the function changed so they don't need to run 
      everytime to check, only once
  	- A cool thing of the computed properties is that they are cached, that's mean that the function will run only      once until the values don't change again also if it's called many times in the same template.
  	- On the other hand methods don't know if the values used in the function changed so they need to run               everytime to check
  	- Method invocation will always run the function whenever a re-render happens
  	- If you have a really expensive piece of logic a computed property is definitely the better approach keeping       in mind the app's performance-->
<template>
	<div>
		Username from methods Property : {{met()}} <br><br>
		Username from computed Property : {{com}} <br><br>
		<input type="text" v-model="password" /> <br><br>
		Password : {{password}}
	</div>
</template>
<script>
export default {
	data() {
		return { username: 'Julain', password : ''};
	},
	computed: {
		com: function () { console.log("com is working..."); return this.username }
	},
	methods: {
		met: function () { console.log("met is working..."); return this.username}
	},
}
</script>
```

