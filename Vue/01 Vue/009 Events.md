Event (v-on or @)-

- `Events are actions that occurs as a result of the user action or as result of state change of the
  elements `
  
- `We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events and run some JavaScript when they're triggered. The usage would be v-on:click="handler or with the shortcut, @click="handler".`

  

- `Mouse Events : click,dblclick,mousedown,mouseup,mouseover,mousemove,mouseout,drag,etc`

- `Keyboard Events : keypress,keydown,keyup`

- `HTML form Events : select,change,submit,reset,focus`

- `HTML frame/object  Events : onload,unload,resize,scroll,error`

  

  

####  Mouse event

```js
<template>
	<button v-on:click="sum(1,2,3)">Click to sum 1 + 2 + 3 = {{total}}</button> <br><br>
	<button @mouseover="add(4,5)">Over to sum 4 + 5 = {{answer}}</button> <br><br>
	<button v-on:click.ctrl="ctrlClick()">Ctrl + Click</button>
</template>
<script>
export default {
	data() { return {
		total : null,
		answer : null
	}},
	methods : {
		sum : function(num,...infinityNums){
			this.total =  num + infinityNums.reduce((total,item)=> total + item)
		},
		add : function(num,...infinityNums){
			this.answer =  num + infinityNums.reduce((total,item)=> total + item)
		},
		ctrlClick : function(){ alert('ctrl + Click')}
     }
}
</script>

```





#### Keyboard Events

```js
<template>
    <input type='text'  v-on:keyup='keyupEvent()' placeholder="Start typing"> <br><br>
    <input type='text'  v-on:keyup.enter='enterEvent()' placeholder="Typing and them Enter"> <br><br>
</template>
<script>
export default {
	data() { return {}},
	methods : {
		keyupEvent : function(){ alert('you are typing...') },
		enterEvent : function(){ alert('Oh! You have been send data')},
     }
}
</script>

```







#### Form Events

```vue
<template>
    {{formData}} <br><br>
        <form @submit.prevent="makePostRequest()">
        <input type='text' v-model="formData.usernam"  v-on:keyup='keyupEvent()' placeholder="Start typing"> <br>
		<input type='text' v-model="formData.password"  v-on:keyup.enter='enterEvent(event)' placeholder="Typing and them Enter"> <br><br>
		<select v-model="formData.country">
			<option>MY</option>
			<option>USA</option>
			<option>UK</option>
		</select> <label>Country</label> <br><br>
		<input type="checkbox" value="Vuejs" v-model="formData.skill"> <label>HTML</label> 
		<input type="checkbox" value="React" v-model="formData.skill"> <label>React</label> 
		<input type="checkbox" value="Angular" v-model="formData.skill"> <label>Angular</label> <br><br>
		<input type="radio" value="Part Time" v-model="formData.shiftHours"> <label>Part Time</label> <br><br>
		<input type="radio" value="Full Time" v-model="formData.shiftHours"> <label>Full Time</label> <br><br>
		<input type="submit" value="Submit"> <br><br>
	</form><br><br>	
</template>
<script>
export default {
	data() {
		return {
			formData : {
				usernam : '',
				password : '',
				country : 'MY',
				skill : [],
				shiftHours : 'Part Time',

			}
		}
	},
	methods : {
		keyupEvent : function(){ console.log('you are typing...') },
		enterEvent : function(event){ event.preventDefault(); console.log('Oh! You have been send data')},
		makePostRequest : function(){
			console.log('Oh! You have been send data')
		},
		
     }
}
</script>

```







```vue
<!-- Events are actions that occurs as a result of the user action or any other action.
     We can use the v-on directive or @ symbol, to listen to  events and run some JavaScript. -->

<template>
	<button v-on:click="clickEvent(1, 2, 3)">Click Event : 1 + 2 + 3 = {{ total }}</button> <br><br>
	<button @mouseover="overEvent(4, 5)">Over Event : 4 + 5 = {{ answer }}</button> <br><br>
	<button v-on:click.ctrl="ctrlClickEvent()">Ctrl + Click Event</button><br><br>
	<form @submit.prevent="submitEvent()">
		<input type='text' v-on:keyup='keyupEvent()' placeholder="Keyup Event"> <br><br>
		<input type='text' v-on:keyup.enter='keyupEnterEvent()' placeholder="Keyup Enter Event "> <br><br>
		<button>Submit Event Button</button> <br><br> <input type="submit" value="Submit Event">
	</form>
</template>
<script>
export default {
	data() { return { total: null, answer: null } },
	methods: {
		clickEvent : function (num, ...infinityNums) {
			this.total = num + infinityNums.reduce((total, item) => total + item)
		},
		overEvent: function (num, ...infinityNums) {
			this.answer = num + infinityNums.reduce((total, item) => total + item)
		},
		ctrlClickEvent: function () { alert('ctrl + Click') },
		keyupEvent : function(){ alert('keyupEvent') },
		keyupEnterEvent : function(){ alert('keyup Enter Event') },
		submitEvent: function () { alert('Form Submit Event') },
	}
}
</script>
```









