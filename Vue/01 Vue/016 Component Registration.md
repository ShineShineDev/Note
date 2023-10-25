## Component Registration

- `There are two ways to register components: global and local.`

- `Two options when defining component names: kebab-case or PascalCase`

  





#### Global Registration

- `Globally registered components can be used in the template of any component within this current instance application:`

- `We can make components available globally in the current Vue application using the app.component() method:`

  ```js
  //main.js
  import { createApp } from 'vue' //import createApp from vue
  import App from './App.vue' // import the root component App from SFC.
  
  import HeaderComponent from './components/HeaderComponent.vue'; //import HeaderComponent global registration
  import FooterComponent from './components/FooterComponent.vue'; //import FooterComponent global registration
  
  const app = createApp(App) //Creat new application instance 
  
  //IN SFC
  app.component("HeaderComponent", HeaderComponent); // global registration - can be used anywhere
  app.component("footer-component", FooterComponent); // global registration - can be used anywhere
  
  app.mount('#app')  //Mounting the App
  
  //App.vue
  <template>
  	<div>
  		<HeaderComponent />
  		<footer-component />
  	</div>
  </template>
  <script>
  </script>
  ```





#### Local Registration

- `Global registration often isn' ideal. For example, if you're using a build system like Webpack, globally registering all components means that even if you stop using a component, it could still be included in your final build. This unnecessarily increases the amount of JavaScript your users have to download.`

  ```vue
  <template>
  	<div>
  		<HeaderComponent />
  		<Footer-component />
  	</div>
  </template>
  <script>
  	import HeaderComponent from './components/HeaderComponent.vue';
  	import FooterComponent from './components/FooterComponent.vue';
  	export default {
  		components: {
  			HeaderComponent,
  			'Footer-component' : FooterComponent
          }
      }
  </script>
  ```

  



```js
/*Component Registration
 - There are two ways to register components: global and local.
 - Two options when defining component names: kebab-case or PascalCase
*/  
/*Local Component Registration
  - Global registration prevents build systems from removing unused components .
  - Global registration makes dependency relationships less explicit in large applications. It makes it difficult     to locate a child component's implementation from a parent component using it. This can affect long-term           maintainability similar to using too many global variables.
  - Globally registering all components means that even if you stop using a component, it could still be included     in your  final build. This unnecessarily increases the amount of JavaScript your users have to download.
  - Local registration scopes the availability of the registered components to the current component only. It         makes the dependency relationship more explicit, and is more tree-shaking friendly.
*/  
<template>
	<div>
		<HeaderComponent />
		<Footer-component />
	</div>
</template>
<script>
	import HeaderComponent from './components/HeaderComponent.vue';
	import FooterComponent from './components/FooterComponent.vue';
	export default {
		components: {
			HeaderComponent,
			'Footer-component' : FooterComponent
        }
    }
</script>
```

