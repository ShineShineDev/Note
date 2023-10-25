## HTTP Request 

- `There are a number of ways we can request information from the API, `



#### Axios

- `Axios is a promise-based HTTP Client for node.js and the browser.it can run in the browser and nodejs with the same codebase.`
- `Axios provides a simple to use library in a small package with a very extensible`



#### Install Axios

```cmd
npm i axios
```





#### Get Request

- `In general API calls in Vue applications can be made safely in the created lifecycle hook of the component.`

  ```js
  <template>
  	<h1>Bitcoin Price Index</h1>
  	<section v-if="errored">
  		<p>Error</p>
  	</section>
  	<section v-else>
  		<div v-if="loading">Loading...</div>
  		<div v-else>
  			<div v-for="rate in currentprice" :key="rate">
  				{{rate.code}} : {{rate.rate}}
  			</div>
  		</div>
  	</section>
  
  </template>
  <script>
  import axios from 'axios';
  export default {
  	data() { return { currentprice: null, loading: true, errored: false }},
  	created() {
  		axios
  			.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  			.then(response => { this.currentprice = response.data.bpi})
  			.catch(error => { this.errored = true})
  			.finally(() => this.loading = false)
  	}
  }
  </script>
  ```





#### Post Request

```js
<template>
	<section v-if="errored">Error...</section>
	<section v-else>
		<div v-if="loading">Sending...</div>
		<div v-else>Success...</div>
	</section>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			post: { userI : 1, id : 1, title : "This Title",body : "This is Body"},
			loading: true,
			errored: false
		}
	},
	created() {
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.post)
			.then(response => { console.log(response.data) })
			.catch(error => { this.errored = true })
			.finally(() => this.loading = false)
	}
}
</script>
```









```js
/*HTTP POSt Request 
  - There are a number of ways we can request information from the API
  - Axios is a promise-based HTTP Client for node.js and browser with the same codebase
  - Axios provides a simple to use library in a small package with a very extensible
*/  
<<template>
	<section v-if="errored">Error...</section>
	<section v-else>
		<div v-if="loading">Sending...</div>
		<div v-else>Success...</div>
	</section>
</template>
<script>
import axios from 'axios';
export default {
	data() {
		return {
			post: { userI : 1, id : 1, title : "This Title", body : "This is Body"},
			loading: true,
			errored: false
		}
	},
	created() {
		axios
			.post('https://jsonplaceholder.typicode.com/posts', this.post)
			.then(response => { console.log(response.data) })
			.catch(error => { this.errored = true })
			.finally(() => this.loading = false)
	}
}
</script>
```



