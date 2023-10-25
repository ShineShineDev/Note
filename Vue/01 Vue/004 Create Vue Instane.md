## Creating a Vue Application



#### The application instance

- `Every Vue application starts by creating a new *application instance* with the *createApp()* function`

- `A Vue instance is essentially a ViewModel as defined in the MVVM pattern,`

- `When you instantiate a Vue instance, you need to pass in an options object which can contain options for data, template, element to mount on, methods, lifecycle callbacks and more. `

- `Vue instance is the heart of application,it plug in to elemen  in DOM,and that  element can use 
  expresssion to display instance data`
  
  ```js
  //main.js
  import { createApp } from 'vue'
  
  const app = createApp({
    /* root component options */
  })
  ```





#### The Root Component

- `The object we are passing into *createApp* is in fact a component. Every app requires a "root component" that can contain other components as its children.`

- `If you are using Single-File Components, we typically import the root component from another file:`

  ```js
  //main.js
  
  import { createApp } from 'vue'
  // import the root component App from a single-file component.
  import App from './App.vue'
  
  const app = createApp(App)
  ```





#### Mounting the App

- `An application instance won't render anything until its .mount() method is called. It expects a "container" argument, which can either be an actual DOM element or a selector string`

- `The .mount() method should always be called after all app configurations and asset registrations are done`

  ```js
  //index.html
  <div id="app"></div>
  
  //main.js
  //import createApp from vue
  import { createApp } from 'vue'
  
  // import the root component App from a single-file component.
  import App from './App.vue'
  
  //Creat new application instance 
  const app = createApp(App)
  
  //Mounting the App
  app.mount('#app') 
  
  ```

  



#### App Configurations

- `The application instance exposes a .config object that allows us to configure a few app-level options, for example, defining an app-level error handler that captures errors from all descendant components`

- `Make sure to apply all app configurations before mounting the app!`

  ```js
  app.config.errorHandler = (err) => {
    /* handle error */
  }
  
  //The application instance also provides a few methods for registering app-scoped assets. For example, registering a component
  app.component('TodoDeleteButton', TodoDeleteButton)
  //This makes the TodoDeleteButton available for use anywhere in our app. 
  
  ```

  



#### Multiple application instances

- `You are not limited to a single application instance on the same page. The createApp API allows multiple Vue applications to co-exist on the same page, each with its own scope for configuration and global assets`

- `If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a large page, avoid mounting a single Vue application instance on the entire page. Instead, create multiple small application instances and mount them on the elements they are responsible for.`

  ```js
  const app1 = createApp({
    /* ... */
  })
  app1.mount('#container-1')
  
  const app2 = createApp({
    /* ... */
  })
  app2.mount('#container-2')
  
  ```






#### Todo application's component tree

```js
App (root component)
├─ TodoList
│  └─ TodoItem
│     ├─ TodoDeleteButton
│     └─ TodoEditButton
└─ TodoFooter
   ├─ TodoClearButton
   └─ TodoStatistics
```





```js
/* Application instance
  - Every Vue application starts by creating a new *application instance* with the *createApp()* function`
  - A Vue instance is essentially a ViewModel as defined in the MVVM pattern,
  - Vue instance is the heart of application,it plug in to elemen  in DOM.
*/
import { createApp } from 'vue' //import createApp from vue
import App from './App.vue' // import the root component App from a single-file component.
const app = createApp(/*root component*/) //Creat new application instance 

/* The Root Component
  - The object we are passing into *createApp* is in fact a component. Every app requires a "root                     component" that can contain other components as its children.
*/
const app = createApp(App) //Creat new application instance with   Single-File Components

/* Mounting the App
   - An application instance won't render anything until its .mount() method is called. It expects a                   "container" argument, which can either be an actual DOM element or a selector string
   - The .mount() method should always be called after all app configurations and asset registrations are done
*/ 
app.mount('#app')  //Mounting the App

/* Multiple application instances
  - The createApp API allows   multiple Vue applications to co-exist on the same page, each with its own               scope for configuration and global assets`
  - If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a             large page, avoid mounting a single Vue application instance on the entire page. Instead, */
const app1 = createApp({ /* ... */ })
app1.mount('#container-1')
const app2 = createApp({  /* ... */ })
app2.mount('#container-2')
```









        |----------------|
        |  elemebt       |
        |----------------|
              ^
             |  |  plug in to element
       -  - -     -  - -
     -       ----       -      <= heart of applications
     -                 -
       -            -
           -  _  -



