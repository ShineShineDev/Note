## Composition API 

- `The Composition API is a feature in Vue 3 which gives us another way to write our components ,more specifically the script block in a component`
- `When Vue projects became hare to manage as they grew in size and commplexity.But with Composition API,components are organized using options such as data, computed properties, method, created, mounted and so on`
- `The primary advantage of Composition API is that it enables clean, efficient logic reuse in the form of Composable functions.It solves [all the drawbacks of mixins the primary logic reuse mechanism for Options API.`



#### Composition API Vs Options API

- `Options API are data(),compouted properties, methods, watcher, lifecycle hooks`
- `In Vue 3,Options API and Composition  API can be mixed togeter in a single component`
- `Yes. You can use Composition API via the setup() option in an Options API component.`
- `However, we only recommend doing so if you have an existing Options API codebase that needs to integrate with new features / external libraries written with Composition API.`



#### API

- `Reactivity API`
  - `ref() and reactive(), that allows us to directly create reactive state, computed state, and watchers.`
- `Lifecycle Hooks`
  - ` onMounted() and onUnmounted(), that allow us to programmatically hook into the component lifecycle.`
- `Dependency Injection`
  - ` provide() and inject(), that allow us to leverage Vue's dependency injection system while using Reactivity APIs.`



#### Ref 





