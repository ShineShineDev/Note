#### Passing parameter and Query

- `The View router package also has much more to offer than just switching between components it can also be used to pass data in the form of params and also query strings`

- `A param is denoted by a colon : When a route is matched, the value of its *params* will be exposed as this.$route.params in every component.`

  ```js
  //src/router/router.js
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/post/:id', name: 'post', component: PostView},
        { path : '/user/:id', name : 'user', component : UserView}
    ]
  })
  export default router
  //App.vue
  <template
      <RouterLink :to="`/user/${user.id}`">User</RouterLink>//Passing prameter
      <RouterLink :to="{ path: `/post/${post.id}` }">Post</RouterLink>//Passing prameter with object    
      //Passing Query
      <RouterLink :to="{ path: `/post/${post.id}`,query:{token : 123, user : 'Julian'} }">Post</RouterLink><br />
    	<RouterView />
  </template>
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  export default { data() { return { user: { id: 1}, post :{id : 1} } }}
  </script>
  //UserPost.vue
  <template>
  	{{$route}} //we can access the current route information  with {{$route}}
  	{{this.$route.params}} //Get Route Param
  	{{this.$route.query}}//Get Query
  </template>
  <script setup>
      import { useRouter, useRoute } from "vue-router"; //Get current route information with composition API
      const route = useRoute(),router = useRouter();
      console.log(route);
  </script>
  ```

  



 ```js
 //The View router package also has much more to offer than just switching between components it can also be used      to pass data in the form of params and also query strings
 // A param is denoted by a colon : When a route is matched, the value of its *params* will be exposed as              this.$route.params in every component.
 //src/router/router.js
 const router = createRouter({
   routes: [{ path: '/post/:id', name: 'post', component: PostView},
            { path : '/user/:id', name : 'user', component : UserView}]
 })
 //App.vue
 <template
     <RouterLink :to="`/user/${user.id}`">User</RouterLink>//Passing prameter
     <RouterLink :to="{ path: `/post/${post.id}` }">Post</RouterLink>//Passing prameter with object    
     //Passing Query
     <RouterLink :to="{ path: `/post/${post.id}`,query:{token : 123, user : 'Julian'} }">Post</RouterLink><br />
   	<RouterView />
 </template>
 <script>
 import { RouterLink, RouterView } from 'vue-router'
 export default { data() { return { user: { id: 1}, post :{id : 1} } }}
 </script>
 //UserPost.vue
 <template>
 	{{$route}} //we can access the current route information  with {{$route}}
 	{{this.$route.params}} //Get Route Param
 	{{this.$route.query}}//Get Query
 </template>
 <script setup>
     import { useRouter, useRoute } from "vue-router"; //Get current route information with composition API
     const route = useRoute(),router = useRouter();
     console.log(route);
 </script>
 ```

