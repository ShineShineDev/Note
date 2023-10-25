------Render Function----
! A render function returns a virtual DOM node
! It allown to create html element(view) without using template tag
! createElement() has three parameters,first is tag(h1),second is attribute,and 
  third is child node 


=>create element wiht render function

____________________________________
<div id='app'>
      <shine></shine>
</div>

const shine = {
    render : function(createElement){
          //hello is child of h1
           return createElement('h1',{},'Hello')
   }
}
const app = new Vue({
   el : '#app',
   components: {
      'shine' :shine
    },
})
____________________________________





=>add single or multiple class on a element in render function

! if u want to add class on a element ,must be pass class propertie with class name like this => {class : 'text-info'} in second parameter
! if it is mulitple class , you can be pass array in class propetie like this => { calss : ['text-info','text-center'] }
____________________________________
<div id='app' style="padding: 20px;">
    <child></child>
  </div>

const Child = {
    render : function(createElement){
      return createElement('h1',{
        class : 'text-info' //multiple like this => class : [text-info : turne,'text-center']
      },'Heading One')
    }
  }
const app = new Vue({
    el : "#app" , 
    components : {
      'child' : Child
    }
});
________________________________________________




=>add style in render function

! ! if u want to add style on a element ,must be pass vuejs syle propertie with value like this => {style: color: 'red',fontSize : '90px'} in second parameter
________________________________________________
<div id='app'>
          <child></child>
</div>
Vue.component('child',{
   render: function (createElement) {
    return createElement(
      'h1',   
      {style: {color : 'red',fontSize : '90px'}},
      'heading one'
    )
  }
})

const app = new Vue({
  el : '#app',
})
________________________________________________


=> Attribute 
________________________________________________
<div id='app'>
          <child></child>
</div>
Vue.component('child',{
    render : function(createElement){
        return  createElement('h1',{
           attrs : {
             id : 'heading',
            class : 'text-info'
          }
       },'Heading One')
   }
})

const app = new Vue({
  el : '#app',
})
________________________________________________



=>attach Event
! Event handlers are nested under `on`, though  modifiers such as in `v-on:keyup.enter` are not  supported
________________________________________________
<div id='app'>
          <child></child>
</div>
Vue.component('child',{
    methods : {
          call : function(event){
             console.log(event.target)
         }
    },
    render : function(createElement){
        return  createElement('h1',{
           on : {
               click : this.call
          }
       },'Heading One')
   }
})

const app = new Vue({
  el : '#app',
})
________________________________________________



=>nested child in child 
________________________________________________
<div id='app'>
    <child></child>
</div>
Vue.component('child',{
  data : function(){
   return {
     front : ['vue','React','Angular']
   }
  },
   render: function (createElement) {
    return createElement(
      'div', { class : ['bg-dark','p-3','text-info']},
      [
         createElement('h5','Front End Framework'),
         createElement('ul',{class : ['list-group','shadow']},this.front.map((name)=> createElement('li',{class:['list-group-item','bg-dark']},name)))
      ]
    )
  }
})
const app = new Vue({
    el : "#app" , 
});
________________________________________________