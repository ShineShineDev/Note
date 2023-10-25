## filters

- `filter can be used to apply common text formatting.`

- `In 3.x filters are removed and no longer supported. `

- `Instead, we recommend replacing them with method calls or computed properties`

  

  

#### 2.x Syntax

  ```js
  <template>
    <h1>Bank Account Balance</h1>
    <p>{{ accountBalance | currencyUSD }}</p>
  </template>
  
  <script>
    export default {
      data(){
          return {
              accountBalance : 1000
          }
      },
      filters: {
        currencyUSD(value) {
          return '$' + value
        }
      }
    }
  </script>
  ```







#### 3.x Update

```js
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ accountInUSD }}</p>
</template>

<script>
  export default {
    data(){
        return {
           accountBalance : 1000
        }
    },
    computed: {
      accountInUSD() {
        return '$' + this.accountBalance
      }
    }
  }
</script>
```





```js
/* filters
  - filter can be used to apply common text formatting
  - In 3.x filters are removed and no longer supported
  - Instead, we recommend replacing them with method calls or computed properties
*/  
//2.x Syntax
<template>
    <h1>Bank Account Balance</h1>
 	<p>{{ accountBalance | currencyUSD }}</p>
</template>
<script>
export default {
    data(){  return { accountBalance : 1000 } },
	filters: { 
        currencyUSD(value) {  return '$' + value  } 
    }
}
</script>
//3.x Update
<template>
  <h1>Bank Account Balance</h1>
  <p>{{ accountInUSD }}</p>
</template>
<script>
	export default {
    	data(){ return {  accountBalance : 1000 } },
    	computed: {
      		accountInUSD() { return '$' + this.accountBalance }
        }
  }
</script>
```



