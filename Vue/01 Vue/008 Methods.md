## Method

- `In Vue we can create method using the *methods property*`
- `Method useful when need to perform action  or logic.`
- ` Method can be reused wherever necessary functions are good because they prevent code duplication and improve code maintenance.They can accept arguments`
- `You can call a method inside another method,they are very versatile!`

```js
<template>
	<p>{{myfun()}}</p>
	<p>{{add(1,2,3,3,4,4)}}</p>
	<p>{{sum(1,2,3,3,4,4)}}</p>
</template>
<script>
export default {
	data() { return {
		item : 'In Vue we can create method using the *methods property*'
	}},
	methods : {
        myfun: function(){
              return this.item
         },
		add : function(num,...infinityNums){
			let infinityNumTotal = infinityNums.reduce((total,item)=> total + item)
			return num + infinityNumTotal	
		},
        sum : function(num,...infinityNums){
			return this.add(num,...infinityNums)

        }
     }
}
</script>
```



```js
/* Method
  - In Vue we can create method using the *methods property*
  - Method useful when need to perform action  or logic.
  - Method can be reused wherever necessary functions are good because they prevent code duplication and improve       code maintenance.They can accept arguments.
  - You can call a method inside another method,they are very versatile!
*/
<template>
	<p>{{myfun()}}</p>
	<p>{{add(1,2,3,3,4,4)}}</p>
	<p>{{sum(1,2,3,3,4,4)}}</p>
</template>
<script>
        
export default {
	data() { return { item : 'In Vue we can create method using the *methods property*' } },
	methods : {
        myfun: function(){ return this.item },
		add : function(num,...infinityNums){
			let infinityNumTotal = infinityNums.reduce((total,item)=> total + item)
			return num + infinityNumTotal	
		},
        sum : function(num,...infinityNums){
			return this.add(num,...infinityNums)

        }
     }
}
</script>
```

