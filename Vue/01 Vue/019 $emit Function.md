## $emit() function  or Component Events

- `Vue $emit is a function that lets us emit, or send, custom events from a child component to its parent. `
- `$emit also know as custom events`
- `If you want your parent component to be able to receive data from its child, a great way to do this is by using VueJS custom events.`





#### send data from child to parent

- `To send an event from a child up to its parent we use a simple three-step process`

  - `Define the event in the child component `
  - `Emit that event in the child component`
  - `listen child event in the parent component `

- `use kebab-case for event names.`

  ```js
  //parent
  <template>
      {{msg}}
      //listen child event  
      <ChildComponent @emit-name="changeText"/>
  </template>
  <script>
  import ChildComponent from './components/ChildComponent.vue'
  export default {
  	data() { return { msg : 'Message from Parent' } },
  	methods : { changeText(data){ this.msg = data } },
  	components: { ChildComponent },
  }
  </script>
  //child
  <template lang="">
      //emit event with $emit('emit-name','data') 
     <button @click="$emit('emit-name','This msg from child')">Emit event from Child </button> 
  </template>
  <script>
  export default {
      emits :['emit-name'] //Define the event
  }
  </script>
  ```






#### Emit function with `v-model`

- `when we use the v model directive on a custom component it automatically receives a prop called *modelValue*`

- ` So we need to specify that in the props option`

- `When we use the v model directive on a custom component it automatically listens to an event called *update*`

- `So on the input element we need to bind the input(@input) event and then emit the update:modelValue event`

  ```vue
  //App.vue
  <template>
  	<div> 
      	{{ username }}
  		<FormComponent v-model='username'/>
  	</div>
  </template>
  <script>
  import FormComponent from './components/FormComponent.vue'
  export default {
  	data() { return { username: 'username'} },
  	components: { FormComponent },
  }
  </script>
  
  //FormComponent
  <template>
      {{modelValue}}
  	//When we use the v model on a custom component it automatically receives a prop called *modelValue*
      //When we use the v model on a custom component it automatically listens to an event called *update*
  	<input :value="modelValue" @keyup="$emit('update:modelValue',$event.target.value)"/>
  </template>
  <script>
  export default {
      //When we use the v model on a custom component it automatically receives a prop called *modelValue*
      props: ['modelValue'],
      emits: ['update:modelValue'] //Define the event
  }
  </script>
  ```

  





#### $emit wiht checkboxes 

- ` If inpute type is checkbox ,must be pass value like this => $event.target.checked`

- `By default, v-model on a component uses value as the prop and input as the event, but some input types such as checkboxes and radio buttons may want to use the value attribute for a different purpose. Using the model option can avoid a conflict in such cases`

  ```js
  //parent
  <template>
  	{{ msg }}
  	<FormComponent @change-text='changeText' :msg='msg' />
  </template>
  <script>
  import FormComponent from './components/FormComponent.vue'
  export default {
  	data() { return { msg : false, } },
  	components: { FormComponent },
  	methods: { changeText: function (event) { this.msg = event }}
  }
  </script>
  
  //child
  <template lang="">
     <input type='checkbox' @change="$emit('change-text',$event.target.checked)">
  </template>
  <script>
  export default {
      props: {msg:Boolean},
  }
  </script>
  ```
  
  
  
  
  
#### Validating Emitted Events



```js
/* - When we use the v model directive on a custom component it automatically receives a prop called *modelValue*
   - So we need to specify that in the props option
   - When we use the v model directive on a custom component it automatically listens to an event called *update*
   - So on the input element we need to bind the input(@input) event and then emit the update:modelValue event
*/   
//App.vue
<template>
    {{ username }}
	<FormComponent v-model='username'/>
</template>
<script>
import FormComponent from './components/FormComponent.vue'
export default {
	data() { return { username: 'username'} },
	components: { FormComponent },
}
</script>
//FormComponent
<template>
    {{modelValue}}
	//When we use the v model on a custom component it automatically receives a prop called *modelValue*
    //When we use the v model on a custom component it automatically listens to an event called *update*
    //So on the input element we need to bind the input(@input) event and then emit the update:modelValue event
	<input :value="modelValue" @keyup="$emit('update:modelValue',$event.target.value)"/>
</template>
<script>
export default {
    //When we use the v model on a custom component it automatically receives a prop called *modelValue*
    props: ['modelValue'],
    emits: ['update:modelValue'] //Define the event
}
</script>
```

  
