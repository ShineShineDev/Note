## Event Modifiers

- `Event modifiers are v-on or v-model directive postfixes denoted by a dot, that can use for such as prevents default behavior, prevents event bubbling up the DOM tree and run the function at most once`

  


```vue
<!-- Event modifiers 
     Event modifiers are v-on or v-model directive postfixes denoted by a dot, that can use for such as prevents        default behavior, prevents event bubbling up the DOM tree and run the function at most once 
-->
<template>
	{{formData}} <br><br>
    <form @submit.prevent="makePostRequest">
		<input type='text' v-model.trim="formData.usernam" placeholder="trim modifire"> <br><br>
		<input type='number' v-model.number="formData.age" placeholder="number modifire"> <br><br>
		<input type='text' v-model.lazy="formData.profession" placeholder="lazy modifire"> <br><br>
		<input type='text' v-model="formData.usernam" @keyup.enter="keyUpEnterModifire"         		placeholder="keyUpEnterModifire"> <br><br>
		<input type="submit"><br><br>
	</form>	
	<button v-on:click.ctrl="systemModifierKeys()">Ctrl + Click</button><br><br>
	<button v-on:click.alt="systemModifierKeys()">Alt + Click</button>
</template>
<script>
export default {
	data() {
		return { formData : { usernam : null, age : null, profession : null} }
	},
	methods : {
		makePostRequest : function(){ alert('Oh! You have been Sent data without prevents default behavior') },
		keyUpEnterModifire : function(){ alert('keyUpEnterModifire') },
		systemModifierKeys(){ alert('systemModifierKeys')}
     }
}
</script>
```



  
