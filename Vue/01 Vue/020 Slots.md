## Slots

- `Slots are another way in Vue for a component to inject content and template code into a child component.`

- `Slots allow you to reuse components by passing in different data `

  ```js
  //Parent 
  <template>
  	<CardComponent>
  		Card Title
  		<ButtonComponent>
  			<a href="www.google.com">Google</a>
  		</ButtonComponent>
  	</CardComponent>
  </template>
  <script>
  import CardComponent from './components/CardComponet.vue'
  import ButtonComponent from './components/ButtonComponent.vue'
  export default {
  	provide: { message: "Parent Data" },
  	components: { CardComponent, ButtonComponent },
  }
  </script>
  
  //Child CardComponent
  <template>
      <button>
          <slot></slot>
      </button>
  </template>
  ```

  



#### Named Slots

- `Name slot it's useful to have multiple slots`

- `In child element, to provide content to named slots, we can use the v-slot directive on a <template>, name which can be used to assign a unique ID to different slots so you can determine where content should be rendered`

- `In a parent component,to pass a named slot, we need to use a <template> element with the v-slot directive, and then pass the name of the slot as an argument to v-slot`

  ```js
  //Parent 
  <template>
  	//CardComponent v-slot="header"></CardComponent>
  	// v-slot has a dedicated shorthand,so use <template v-slot:header> or for shorthand <template #header>
      <CardComponent>
  		<template v-slot:header>Card Header</template>
  	</CardComponent>
  	<CardComponent>
  		//Dynamic Slot Name
  		<template v-slot:[slotName]>Card Body</template>
  	</CardComponent>
  	<CardComponent>
           //shorthand
  		<template #[slotName]>Card Footer</template>
  	</CardComponent>
  </template>
  <script>
  import CardComponent from './components/CardComponet.vue'
  export default {
      data(){ return { slotName : 'body'	} },
  	provide: { message: "Parent Data" },
  	components: { CardComponent },
  }
  </script>
  
  // Child
  <template>
      <div id="header">
          <slot name="header"></slot>
      </div>
      <div id="body">
          <slot name="body"></slot>
      </div>
      <div id="footer">
          <slot name="footer"></slot>
      </div>
  </template>
  <script>
  ```

  

  

```js
/* Name slot it's useful to have multiple slots */

// Parent
//In a parent component,to pass a named slot, we need to use a <template> element with the v-slot directive, and     then pass the name of the slot as an argument to v-slot
<template>
    <CardComponent> <template v-slot:header>Card Header</template> </CardComponent>
    //Dynamic Slot Name
  	<CardComponent> <template v-slot:[slotName]>Card Body</template> </CardComponent>
    //shorthand
  	<CardComponent> <template #[slotName]>Card Footer</template> </CardComponent>
</template>
<script>
	import CardComponent from './components/CardComponet.vue'
  	export default {
		data(){ return { slotName : 'body'	} },
  		provide: { message: "Parent Data" },
  		components: { CardComponent },
    }
</script>
  
//Child
//In child element, to provide content to named slots, we can use the v-slot directive on a <template>, name         which can be used to assign a unique ID to different slots 
  <template>
      <div id="header"> <slot name="header"></slot> </div>
      <div id="body"> <slot name="body"></slot> </div>
      <div id="footer"> <slot name="footer"></slot> </div>
  </template>
  <script>
```





