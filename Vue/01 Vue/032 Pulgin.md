---Plugins---

! Plugins usually add global-level functionality to Vue. 

! There is no strictly defined scope for a plugin - there are typically several types of plugins:

1 Add some global methods or properties. e.g. vue-custom-element

2 Add one or more global assets: directives/filters/transitions etc. e.g. vue-touch2

3 Add some component options by global mixin. e.g. vue-router

4 Add some Vue instance methods by attaching them to Vue.prototype.

5 A library that provides an API of its own, while at the same time injecting some combination of the above. e.g. vue-router


=> Use plugin

! Use plugins by calling the Vue.use() global method. This has to be done before you start your app by calling new Vue():
_________________________________________

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router.js';


new Vue({
  el : '#app',
  router
})

_________________________________________


=>Writing a Plugin
! A Vue.js plugin should expose an install method. 
! The method will be called with the Vue constructor as the first argument, along with possible options: