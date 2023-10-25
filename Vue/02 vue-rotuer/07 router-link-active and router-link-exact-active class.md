
## router-link-active and router-link-exact-active

- `router-link-active and router-link-exact-active class are useful if you wanted to adjust the styling for any one of our links and let the user know which route they're currently on`

  ```js
  //App.vue
  <template>
    <!-- passing prameter -->
    <RouterLink :to="`/user/${user.id}`">User</RouterLink><br />
    <!-- passing query -->
    <RouterLink :to="{ path: `/post/${post.id}`, query: { token: 123, user: 'Julian' } }">Post</RouterLink><br />
    <RouterView />
  </template>
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  export default {
    data() { return { user: { id: 1 }, post: { id: 1 } } }
  }
  </script>
  <style scoped>
  .router-link-active {
      background-color: red;
      display: block;
      padding: 10px;
  }
  </style>
  
  //UserView.vue
  <template>
     <h4>User Page {{ $route }}</h4>
  </template>
  
  //PostView.vue
  <template lang="">
      {{$route}} //Get  current route information 
  </template>
  <script setup>
  //Get current route information with composition API
  import { useRouter, useRoute } from "vue-router";
  const route = useRoute(), router = useRouter();
  console.log(route);
  </script>
  ```

  



```js
//router-link-active and router-link-exact-active class are useful if you wanted to adjust the styling for any       one of our links and let the user know which route they're currently on
//App.vue
<template>
  <!-- passing prameter -->
  <RouterLink :to="`/user/${user.id}`">User</RouterLink><br />
  <!-- passing query -->
  <RouterLink :to="{ path: `/post/${post.id}`, query: { token: 123, user: 'Julian' } }">Post</RouterLink><br />
  <RouterView />
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  data() { return { user: { id: 1 }, post: { id: 1 } } }
}
</script>
<style scoped>
.router-link-active { background-color: red; display: block; padding: 10px}
</style>
//UserView.vue
<template>
   <h4>User Page {{ $route }}</h4>//Get  current route information 
</template>
//PostView.vue
<template lang="">
    {{$route}} //Get  current route information 
</template>
<script setup>
import { useRouter, useRoute } from "vue-router";
const route = useRoute(), router = useRouter();
console.log(route); //Get current route information with composition API
</script>
```

