## Transition

- `Vue provides a variety of ways to apply transition effects when items are inserted, updated, or removed from the DOM`
- `Automatically apply classes for CSS transitions and animations`
- `Integrate 3rd-party CSS animation libraries, such as Animate.css`
- `Integrate 3rd-party JavaScript animation libraries, such as Velocity.js`



#### Built-in Transition Components

- `	Vue offers two built-in components that can help work with transitions and animations in response to changing state`
  - `<Transition> for applying animations when an element or component is entering and leaving the DOM. `
  - `<TransitionGroup> for applying animations when an element or component is inserted into, removed from, or moved within a v-for list.`




#### CSS-Based Transitions Classes
- `There are six classes applied for enter / leave transitions.`

  1. `v-enter-from : Starting state for enter. Added before the element is inserted, removed one frame after the element is inserted.`

  2. `v-enter-active : Active state for enter. Applied during the entire entering phase. Added before the element is inserted, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the entering transition.`

  3. `v-enter-to : Ending state for enter. Added one frame after the element is inserted (at the same time v-enter-from is removed), removed when the transition/animation finishes.`

  4. `v-leave-from : Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.`

  5. `v-leave-active : Active state for leave. Applied during the entire leaving phase. Added immediately when a leave transition is triggered, removed when the transition/animation finishes. This class can be used to define the duration, delay and easing curve for the leaving transition.`

  6. `v-leave-to : Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave-from is removed), removed when the transition/animation finishes.`
  
- `A transition can be named via the name  prop`
  
     ```js
     <template>
     	<button @click="show = !show">Show and Hide Element</button>
     	<Transition name="ani-name">
     		<p v-if="show">CSS-Based Transitions Classes</p>
     	</Transition>
     </template>
     <script>
     export default {
     	data() { return { show: true} }
     }
     </script>
     <style>
     .ani-name-enter-active,
     .ani-name-leave-active {
     	transition: opacity 0.5s ease;
     }
     
     .ani-name-enter-from,
     .ani-name-leave-to {
     	opacity: 0;
     }
     </style>
     ```

 `v-enter-active and v-leave-active give us the ability to specify different easing curves for enter / leave transitions`





#### Combine existing css animation libary

- `You can also specify custom transition classes such as Animate.css by passing the following props to <Transition>`
  - `enter-from-class`
  - `enter-active-class`
  - `enter-to-class`
  - `leave-from-class`
  - `leave-active-class`
  - `leave-to-class`

```js
//index.html
<head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<head/>
//App.vue
<template>
	<button @click="show = !show">Toggle</button>
	<Transition enter-active-class="animate__animated animate__tada"
		leave-active-class="animate__animated animate__bounceOutRight">
		<p v-if="show">hello</p>
	</Transition>
</template>

<script>
export default {
	data() {
		return {
			show: true
		}
	}
}
</script>
```





#### Useful Animation



```js
/* Transition
  - Vue provides a variety of ways to apply transition  when items are inserted,updated,or removed from the DOM`
  - Vue transition can tntegrate with 3rd-party CSS animation Animate.css, such as Animate.css
  - Vue transition can integrate with 3rd-party JavaScript animation libraries, such as Velocity.js
  - <Transition> built-in transition for applying animations when an element is entering and leaving the DOM. `
*/
/* Combine existing css animation libary
  - You can also specify custom transition classes such as Animate.css by passing the following props to               <Transition>
  	- enter-from-class
    - enter-active-class
    - enter-to-class
    - leave-from-class
    - leave-active-class
    - leave-to-class
*/
//index.html
<head>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
<head/>
//App.vue
<template>
	<button @click="show = !show">Toggle</button>
	<Transition enter-active-class="animate__animated animate__tada"
		leave-active-class="animate__animated animate__bounceOutRight">
		<p v-if="show">hello</p>
	</Transition>
</template>
<script>
	export default { data() { return { show: true }} } 
</script>
```

