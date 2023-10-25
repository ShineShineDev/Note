

##  Nested Routes

```js
//src/router/router.js
import { createRouter, createWebHistory } from 'vue-router'
import UserHome from '../views/user/Home.vue'
import UserProfile from '../views/user/Profile.vue'
import UserPosts from '../views/user/Posts.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/user/:username', component: UserHome,
      children: [
        // UserProfile will be rendered inside User's <router-view> when /users/:username/profile is matched
        { path: 'profile', component: UserProfile },
        // UserPosts will be rendered inside User's <router-view>// when /users/:username/posts is matched
        { path: 'post', component: UserPosts },
      ],
    },
  ],
})
export default router
```

```js
//App.vue
<template>
  <nav :style="styleObje">
    <RouterLink to="/" :style="styleObje">Welcome Page</RouterLink>
    <RouterLink to="/user/julian" :style="styleObje">User Home Page</RouterLink>
    <RouterLink to="/user/julian/profile" :style="styleObje">User Profile Page</RouterLink>
    <RouterLink to="/user/julian/post" :style="styleObje">User's Posts Page</RouterLink>
  </nav>
  <RouterView />
</template>
```

```js
//UserHome.vue
<template lang="">
	User Home page 
    <router-view></router-view>
</template>
```



```js
//src/router/router.js
import { createRouter, createWebHistory } from 'vue-router'
import UserHome from '../views/user/Home.vue'
import UserProfile from '../views/user/Profile.vue'
import UserPosts from '../views/user/Posts.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
      //UserHome will be rendered inside User's <router-view> when /user/:username is matched
      { path: '/user/:username', component: UserHome,
      children: [
           // UserProfile will be rendered inside User's <router-view> when /user/:username/profile is matched
           { path: 'profile', component: UserProfile },
           // UserPosts will be rendered inside User's <router-view>// when /user/:username/posts is matched
           { path: 'post', component: UserPosts },
       ],
    },
  ]
})
export default router
//App.vue
<template>
    <RouterLink to="/user/julian" :style="styleObje">User Home Page</RouterLink>
    <RouterLink to="/user/julian/profile" :style="styleObje">User Profile Page</RouterLink>
    <RouterLink to="/user/julian/post" :style="styleObje">User's Posts Page</RouterLink>
    <RouterView />
</template>
//UserHome.vue
<template lang="">
    User  page {{$route.fullPath}}
    <router-view></router-view>
</template>
```

