## Props

- `Props can use to pass data to Child component`

- `Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it becomes a property on that component instance`

- `All props form a one-way-down binding between the child property and the parent one`

- `Every time the parent component is updated, all props in the child component will be refreshed with the latest value. `

- `Props prevents child components from accidentally mutating the parent's state`

- `You should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the console`

- `Objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, mutating the object or array itself inside the child component will affect parent state.`

  



#### Passing

```js
//App.vue
<template>
	<div>
		<ChildComponent :stringVal="str" :numVal="num" :boolVal="bool" :arrayVal="posts" :obj="person" />
	</div>
</template>
<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
	data() {
		return {
			str: "String Value",
			num: 123,
			bool: true,
			posts: [
				{ id: 1, title: 'My journey with Vue' },
				{ id: 2, title: 'Blogging with Vue' },
				{ id: 3, title: 'Why Vue is so fun' }
			],
			person : {
				name : "Spidey Shine",
				age : 23
			}

		}

	},
	components: {
		ChildComponent
	},

}
</script>
```





### Declaring Props 

- `Registering props is simple; all we have to do is add it to the props array in the <scripts> tag. Then, we can use it in our app's `<template>` section. This occurs in the child component, where data is received from the parent component`

  ```vue
  <template lang="">
      <div>
          <h2>Child Component</h2>
          {{stringVal}}<br>
          {{numVal}}<br>
          {{boolVal}}<br>
          {{arrayVal}}<br>
          {{person}}<br>
          {{obj}}
      </div>
  </template>
  <script>
  export default {
      props:['stringVal','numVal','boolVal','arrayVal','obj']
  }
  </script>
  <style lang="">
      
  </style>
  ```






#### Prop Validation

- `To specify prop validations, you can provide an object with validation requirements to the props option, instead of an array of strings`

  ```vue
  <template lang="">
      <div>
          <h2>Child Component</h2>
          {{stringVal}}<br>
          {{numVal}}<br>
          {{boolVal}}<br>
          {{arrayVal}}<br>
          {{person}}<br>
          {{obj}}
      </div>
  </template>
  <script>
  export default {
      props: {
          stringVal: String,
          // Required Number
          numVal: {
              type: Number,
              required: true 
          },
          // Boolean with a default value
          boolVal: {
              type: Boolean,
              required: true,
              default: false
          },
          arrayVal: {
              type: Array,
              required: true,
              default() {
                  return [{ id: 1, title: 'Demo' },]
              }
          },
           // Object with a default value
          obj: {
              type: Object,
              required: true,
              default() {
                  return {
                      name: "Default Name",
                      age: 23
                  }
              }
          }
      }
  }
  </script>
  ```







```js
/* Props
  - Props can use to pass data to Child component`
  - Props are custom attributes you can register on a component. When a value is passed to a prop attribute, it       becomes a property on that component instance
  - All props form a one-way-down binding between the child property and the parent one
  - Every time the parent component is updated, all props in the child component will be refreshed with the           latest value
  - Objects and arrays in JavaScript are passed by reference, so if the prop is an array or object, mutating the       object or array itself inside the child component will affect parent state
  - You should not attempt to mutate a prop inside a child component. If you do, Vue will warn you in the  console
*/
/* App.vue */
<template>
	<ChildComponent stringVal="String Value" numVal="123" boolVal="true" :arrayVal="posts" :obj="person" /> 
</template>
<script>
import ChildComponent from './components/ChildComponent.vue'
export default {
	data() {
		return { posts: [ { id: 1, title: 'Title1' },{ id: 2, title: 'Title2' },{ id: 3, title: 'Title3' }],
                 person : { name : "Spidey Shine", age : 23} }
		},
    components: { ChildComponent},
}
</script>

/* ChildComponent.vue */
<template lang=""> {{stringVal}} {{numVal}} {{boolVal}} {{arrayVal}} {{person}} {{obj}}  </template>
<script>
export default { props:['stringVal','numVal','boolVal','arrayVal','obj'] }
</script>
```



```js
/* Prop Validation
  - To specify prop validations, you can provide an object with validation requirements to the props option,           instead of an array of strings
*/
<template> {{stringVal}} {{numVal}} {{boolVal}} {{arrayVal}} {{person}} {{obj}} </template>
<script>
export default {
    props: {
        stringVal: String,
        numVal: { type: Number,required: true },  // Required Number
            
        // Boolean with a default value
        boolVal: { type: Boolean, required: true, default: false},
            
        arrayVal: { type: Array, required: true, default() { return [{ id: 1, title: 'Demo' } ]} },
        
        // Object with a default value
        obj: {
            type: Object,
            required: true,
            default() {
                return {
                    name: "Default Name",
                    age: 23
                }
            }
        }
    }
}
</script>
```

