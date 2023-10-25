## Watchers

- `Watch property provides a more generic way to observe and react to data changes.`

- `If you have some data that you need to change based on some other data, it is easy and straightforward to use watch property, `

  ```vue
  <template>
  	Kilometers : <input type="text" v-model="kilometers">
  	Meters : <input type="text" v-model="meters">
  </template>
  
  <script>
  export default {
  	data() {
  		return { kilometers: 0, meters: 0 }
  	},
  	watch: {
  		kilometers: function (val) {
  			this.kilometers = val;
  			this.meters = val * 1000;
  		},
  		meters: function (val) {
  			this.kilometers = val / 1000;
  			this.meters = val;
  		}
  	},
  
  }
  </script>
  ```

  



#### Deep Watchers













####  Computed Property and. Watched Property

- `Computed properties use to compose new data from existing data sources and avoid complex in-template expressions`.`Computed properties are cases Side-Effects when we need to perform  in reaction to state changes `

- ` Watch property to observe and react to  data change, for example when you have to call an api in response to change in data another use case would be to apply transitions`

  

  

```js
/*watch Property
  - Watch property provides a more generic way to observe and react to data changes
  - If you have some data that you need to change based on some other data, it is easy and straightforward to use     watch property
*/
<template>
	Kilometers : <input type="text" v-model="kilometers">
	Meters : <input type="text" v-model="meters">
</template>
<script>
export default {
	data() { return { kilometers: 0, meters: 0 } },
	watch: {
		kilometers: function (val) {
			this.kilometers = val;
			this.meters = val * 1000;
		},
		meters: function (val) {
			this.kilometers = val / 1000;
			this.meters = val;
		}
	},

}
</script>
/* Computed Property and Watched Property
  - Computed properties use to compose new data from existing data sources and avoid complex in-template               expressions.Computed properties are cases Side-Effects when we need to perform  in reaction to state changes
  - Watch propety to observe and react to  data change, for example when you have to call an api in response to       change in data another use case would be to apply transitions
*/  
```

