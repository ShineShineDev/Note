## Create route file

- `Create route file in src/router/router.js`

- `Import createRouter and  createWebHistory`

- ` Import components file`

- ` Create createRouterinsatance`

-  `Register route in routers porperties`

- ` Export this file`

  ```js
  //src/routre.js
  import { createRouter, createWebHistory } from 'vue-router'
  import Home from './components/Home.vue'
  import About from './components/About.vue'
  import Contact from './components/Contact.vue
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
      }
    ]
  })
  export default router
  ```
  
  
  
  

 