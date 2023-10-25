## Data Binding



- `.vue file contain three blocks like template block, style block and script block`

- ` script block contains the data and the logic for the template block`





#### Binding Text(Text Interpolation)

- `Script block contains the data and the logic for the template block.`

- ` There are two ways to bind text we have the mustache syntax and also the v-text directive`

- `The mustache tag or v-text directive will be replaced with the value of the Title property from the corresponding component instance. It will also be updated whenever the Title property changes.`

- `If you want to dynamically update a property value the recommended way is to use the mustache syntax as it evaluates slightly faster compared to the v-text directive`

  ```js
  <template>
      <!-- Binding Data -->
  	<h1>{{Title}} {{text}}</h1> 
  	<h2 v-text="Title"></h2>
  </template>
  
  export default {
  	name: 'App',
      //instancec datas
  	data() {
  		return {
              text : 'Text Interpolation',
  			Title: 'Text Data Binding'
  		}
  	},
  }
  ```
  
  



#### Binding HTML

- `The double mustaches interpret the data as plain text, not HTML. In order to output real HTML, you will need to use the v-html directive`

- `You should only render trust content .If you're using a third-party api it is very risky to use the vhtml directive because it might lead to cross-site scripting attacks`

  ```js
  <template>
  	<div v-html="h1"></div>
      <div v-html="attack"></div>
  </template>
  
  <script>
  export default {
  	name: 'App',
      //instancec datas
  	data() {
  		return {
              h1 : '<h1>Heading One Tag</h1>',
              attack : `<button onclick="alert('cross-site scripting attacks')"> make attacks</button>`
  		}
  	},
  }
  </script>
  ```

  



####  Binding Attributes

- `Vue can bind data to html attributes such as id class style and even boolean attributes such as disabled for an input `

- `Mustaches cannot be used inside HTML attributes. Instead, use a v-bind directive`

- `Because v-bind is so commonly used, it has a dedicated shorthand syntax`

  ```js
  <template>
      <h1 v-bind:id="titleId"> Don't fight for slavery fight for liberty</h1>
  	<button v-bind:disabled="isDisabled">Clikc Me</button>
  </template>
  
  <script>
  export default {
  	name: 'App',
      //instancec datas
  	data() {
  		return {
            titleId : "Title",
            isDisabled : true
  		}
  	},
  }
  </script>
  ```

  



####  Binding Classes

- `We can also bind class to in an element wiht v-bind:class directive`

- `v-bind directive accepts any javascript expression like conditional binding`

- `v-bind also can bind using Arrays or Objects`

- `Object binding will have key value pairs the key is the class you want to apply to the element and the value is the condition`

  ```js
  <template>
      <h1 v-bind:class="bgInfo"> Don't fight for slavery fight for liberty</h1>
  
  	<p v-bind:class="isShow || 'hide'">Conditionally Bind Class with  or(||) Operators</p>
  	<p v-bind:class="isShow && 'hide'">Conditionally Bind  Class with  and(&&) Operators</p>
  	<p v-bind:class="isShow ? 'show' : 'hide'">Conditionally Bind Class with ternary operator</p>
  
  	<p v-bind:class="['bg-info','text-warning']">Binding With  Arrays</p>
  	<p v-bind:class="[isShow ? 'bg-info': 'text-warning']">Binding With Arrays Conditionally.</p>
  
  	<p v-bind:class="{ 'bg-info' : isShow, 'text-warning' : !isShow}"> Object Conditionally Binding </p>
  </template>
  <script>      
  export default {
      //instancec datas
  	data() {
  		return {
            bgInfo : "bg-info",
            isShow : true
  		}
  	},
  }
  </script>
  //Defint CSS
  <style>
  	.bg-info{
          background : blue;
  		padding: 20px;
      }  
      .text-warning{
          color :  pink
      }
  	.hide{
  		visibility: hidden;
  	}
  	.show{
  		visibility: visible;
  	}
  </style>  
  ```
  





#### Binding Styles

- `v-bind:style allows us to bind style Attraibute to add style in an element  ` `

- `There are two ways to bind to the style attribute the object syntax and the array syntax`

- `Object syntax we bind the style attribute with a javascript object.This object will have key value pairs the key key will be the css property and the value  will be the data property`

  ```vue
  <template>
  <h1 v-bind:style="{ backgroundColor: bg, color, fontSize: fontSize + 'px', padding : '30px'}">Binding Styles  with  object syntax
  </h1>
  <button v-bind:style="btnStyleObject">Binding Style Object Property</button>
  <h1 :style="[btnStyleObject,otherStyleObject]">Binding Style with array syntax</h1>
  </template>
  <script>
  export default {
  	name: 'App',
  	//instancec datas
  	data() {
  		return {
  			bg: "blue",
  			color: "red",
  			fontSize: '40',
  			btnStyleObject : {
  				backgroundColor : "blue",
  				color : "pink",
  				padding : '10px',
  				border : 0
  			},
  			otherStyleObject : {
  				border : '4px solid red'
  			}
  		}
  	},
  }
  </script>    
  ```







