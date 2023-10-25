## Handling edge cases 

- ` They all have disadvantages or situations where they could be dangerous, keep them in mind when deciding to use each feature.`



#### Accessing the Root Instance
- `In every subcomponent of a new Vue instance, this root instance can be accessed with the $root property.`

- `This can be convenient for demos or very small apps with a handful of components. `

- `However, the pattern does not scale well to medium or large-scale applications, so we strongly recommend using Vuex to manage state in most cases.`

  ```js
  // Root Component or App.vue
  <template>
  	<h3>Root Component </h3>
  	{{rootData}} <hr/>
  	<PostComponent></PostComponent>
  </template>
  <script>
  import PostComponent from './components/PostComponent.vue'
  export default {
  	data() { return { rootData: 'Data from Root' }},
  	computed: { computedMethods(){return 'Computed method from Root'} },
  	methods: { rootMethods(){ return 'Method from from Root'} },
  	components :{PostComponent}
  }
  </script>
  //PostComponent or child Component
  <template lang="">
      <h3>Posts Component</h3>
  	<!--  Get root data -->
  	{{this.$root.rootData}} <br/>
      <!--  Change root data from child -->
  	{{this.$root.rootData = 'Change root data from child '}} <br/>
       <!-- Call root methods -->
  	{{this.$root.rootMethods()}} <br/>
      {{this.$root.computedMethods}}
  </template>
  ```





#### Accessing the Parent Component Instance

- `Similar to $root, the $parent property can be used to access the parent instance from a child.`

- `In most cases, reaching into the parent makes your application more difficult to debug and understand, especially if you mutate data in the parent. When looking at that component later, it will be very difficult to figure out where that mutation came from.`
   
   ```js
   //Get root data
   {{this.$parent.name}}
   //Set root data
   {{this.$parent.name = 'Developer'}}
   //Access root computed properties
   {{this.$parentt.rev()}}
   // Call root methods
   {{this.$parentt.meth()}}
   ```
   
   



#### Accessing Child Component Instances & Child Elements

- ` Refs are Vue instance properties used to register or indicate a reference to HTML elements or child elements in the template of your application. `
- `If a ref attribute is added to an HTML element in your Vue template, you'll then be able to reference that element or even a child element in your Vue instance.`





 https://v2.vuejs.org/v2/guide/components-edge-cases.html





```js
 /* Accessing the Root Instance (Handling edge cases)
  - They all have disadvantages or situations where they could be dangerous, keep them in mind when deciding to       use each feature.
  - In every subcomponent of a new Vue instance, this root instance can be accessed with the $root property.
  - This can be convenient for demos or very small apps with a handful of components.
  - However,the pattern does not scale well to medium or large-scale applications, so we strongly recommend using     Vuex to manage state in most cases
*/  
//Root Component or App.vue
<template>
	<h3>Root Component </h3>
	{{rootData}} <hr/>
	<PostComponent></PostComponent>
</template>
<script>
import PostComponent from './components/PostComponent.vue'
export default {
	data() { return { rootData: 'Data from Root' }},
	computed: { computedMethods(){return 'Computed method from Root'} },
	methods: { rootMethods(){ return 'Method from from Root'} },
	components :{PostComponent}
}
</script>
//PostComponent or child Component
<template> 
	{{this.$root.rootData}} // Get root data
	{{this.$root.rootData = 'Change root data from child '}} //Change root data from child
	{{this.$root.rootMethods()}} //Call root methods
    {{this.$root.computedMethods}} // Call root computed method 
</template>
```



```js
 /* Accessing the Parent Component Instance (Handling edge cases)
  - Similar to $root, the $parent property can be used to access the parent instance from a child.
  - In most cases, reaching into the parent makes your application more difficult to debug and understand,             especially if you mutate data in the parent. When looking at that component later, it will be very difficult       to figure out where that mutation came from.
  - They all have disadvantages or situations where they could be dangerous, keep them in mind when deciding to       use each feature.
*/  
//Parent Component 
<template>
	<h3>Parent Component </h3>
	{{parentData}} <hr/>
	<PostComponent></PostComponent>
</template>
<script>
import PostComponent from './components/PostComponent.vue'
export default {
	data() { return { parentData: 'Data from parent' }},
	computed: { computedMethod(){return 'Computed method from parent'} },
	methods: { parentMethods(){ return 'Method from from parent'} },
	components :{PostComponent}
}
</script>
//PostComponent or child Component
<template> 
	{{this.$parent.parentData}} // Get parent data
	{{this.$parent.parentData = 'Change parent data from child '}} //Change parent data from child
	{{this.$parent.parentMethods()}} //Call parent methods
    {{this.$parent.computedMethod}} // Call parent computed method 
</template>
```

