### Two Way Data Binding

- `Two-way data binding refers to sharing data between data property and template.If you change data in one place,it will automatically reflate at the other end.`
- `In Vue, two-way binding is accomplished using the v-model directive.`

```js
<template>
	{{ formData }} <br><br>
	<form>
		<input type='text' v-model="formData.usernam"> <br><br>
		<label>Country </label>
		<select v-model="formData.country">
			<option>MY</option>
			<option>USA</option>
			<option>UK</option>
		</select><br><br>
		<input type="checkbox" value="Vuejs" v-model="formData.skill"> <label>HTML</label>
		<input type="checkbox" value="React" v-model="formData.skill"> <label>React</label>
		<input type="checkbox" value="Angular" v-model="formData.skill"> <label>Angular</label> <br><br>

		<input type="radio" value="Part Time" v-model="formData.shiftHours"> <label>Part Time</label> <br><br>
		<input type="radio" value="Full Time" v-model="formData.shiftHours"> <label>Full Time</label> <br><br>
	</form>
</template>
<script>
export default {
	data() {
		return {
			formData: { usernam: '', password: '', country: 'MY', skill: [], shiftHours: 'Part Time' }
		}
	},

}
</script>
```





```vue
<!-- Two-way data binding 
	Two-way data binding refers to sharing data between data property and template.If you change data in one            place,it will automatically reflate at the other end.
    In Vue, two-way binding is accomplished using the v-model directive
-->
<template>
	{{ formData }} <br><br>
	<form>
		<input type='text' v-model="formData.usernam"> <br><br>
		<label>Country </label>
		<select v-model="formData.country">
			<option>MY</option>
			<option>USA</option>
			<option>UK</option>
		</select><br><br>
		<input type="checkbox" value="Vuejs" v-model="formData.skill"> <label>HTML</label>
		<input type="checkbox" value="React" v-model="formData.skill"> <label>React</label>
		<input type="checkbox" value="Angular" v-model="formData.skill"> <label>Angular</label> <br><br>

		<input type="radio" value="Part Time" v-model="formData.shiftHours"> <label>Part Time</label> <br><br>
		<input type="radio" value="Full Time" v-model="formData.shiftHours"> <label>Full Time</label> <br><br>
	</form>
</template>
<script>
export default {
	data() {
		return { formData: { usernam: '', password: '', country: 'MY', skill: [], shiftHours: 'Part Time' } }
	},
}
</script>
```



