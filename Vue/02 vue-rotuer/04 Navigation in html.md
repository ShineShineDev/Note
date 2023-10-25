## Navigation

- `You can navigate link by using <router-link to='yourPath'></router-link> component,this component have | to | attribute to make link`

  ```js
  //Navigation in HTML
  //You can navigate link by using <router-link to='url'></router-link> component,this component have | to | attribute to make link
  //App,vue
  <template>
     <RouterLink to="/about">About</RouterLink> <br/>
     <RouterLink :to="`/user/${user.id}`">User, this is Dynamic route</RouterLink> //Dynamic route
     //Reusability route(if you have contact route in multiple locations,you must change the link in multiple        location but with reusability route,you only need to change path({path:'/contact-us'}) in route(route.js)
     <RouterLink :to="{ name: 'contact' }">Contact</RouterLink> <br />
     <RouterView />
  </template>
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    data() { return { user: { id: 1, name: 'Julian'}} }
  }
  </script>
  //router/router.js
  import { createRouter, createWebHistory } from 'vue-router'
  import UserView from '../views/UserView.vue'
  import AboutView from '../views/AboutView.vue'
  import ContactView from '../views/ContactView.vue'
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      { path: '/about', name: 'about', component: AboutView },
      { path: '/contact-us', name: 'contact',component: ContactView },
      { path : '/user/:id', name : 'user', component : UserView},
    ]
  })
  export default router
  ```
  
  





