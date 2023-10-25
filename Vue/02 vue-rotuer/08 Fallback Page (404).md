## Fallback Page (404)

```js
//Route not found 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFound from '../views/PageNotFoundView.vue'
import AdminPageNotFoundView from '../views/AdminPageNotFoundView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //Page not found for all
    {
      path:'/:pathName(.*)',
      name : 'page-not-found',
      component : PageNotFound
    },
    //Page not found for admin/* only
    // {
    //   path:'/admin/:pathName(.*)',
    //   name : 'page-not-found',
    //   component : AdminPageNotFoundView
    // }
  ]
})
export default router
//PageNotFound.vue
<template lang="">
	<h3>Page Not Found for {{$route.path}}</h3>
</template>
```

