## HTML DOM Events

- An **event** is an action such as `click, mouseover,mouseleave`

- HTML DOM events can  register different event handlers on elements.

  



### Common event types

- **mouse events** : `mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout, contextmenu`
- **touch events** : `touchstart, touchmove, touchend, touchcancel`
- **keyboard events** :` keydown, keypress, keyup`
- **form events** : `focus, blur, change, submit`
- **window events** : `scroll, resize, hashchange, load, unload`

  



 ### Register  event  with addEventListener  method 

- To assign event to your HTML element you can use addEventListener() method

- This is the method you should use in modern web pages.

  ```js
  <button id='btn'>Click Me</button>
  document.getElementById("btn").addEventListener('click', runEvent);
  function runEvent(event){
      console.log(event)
      alert("addEventListener method is working");
  }
  ```





### Register  event  with DOM element properties

- DOM element properties can also register  an event such as `onclick, ondblclick, onkeydown`

-  This way  is that only one handler can be set per element and per event (overwrite).

  ```js
  <button id='btn'>Click Me</button>
  //ondblclick ( double click)
  document.getElementById("btn").ondblclick  =  function (event){
      console.log(event)
      alert("dbClick event is working with dom properties");
  }
  ```





### Register  event  with HTML attribute

- The HTML  attributives can also register  events

-  This method should be avoided! It inflates the markup, and makes it less readable. Concerns of content/structure and behavior are not well-separated, making a bug harder to find.

  ```js
  <button onmouseover = "runEvent()">onmouseover</button>
   
  function runEvent(event){
      console.log(event)
      alert("onmouseover evnet is working with  HTML attribute ");
  }
      
  ```





Remove Event Listener  

-  The removeEventListener() method removes an event handler that has been attached with the [addEventListener()](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) method.

- `element.removeEventListener(event, eventHandler, useCapture)`

-  the event and event handler must be the same.

- IE8 doesn’t support the `removeEventListener()` method. It uses the `detachEvent()` method instead.

  ```js
  <button id='btn'>Click Me</button>
  <button id='removeEventBtn'>To remove event click me</button>
  
  // assign an event
  let btn =  document.getElementById("btn"); // select element
  btn.addEventListener('click', runEvent);
  function runEvent(event){
      console.log(event)
      alert("addEventListener method is working");
  }
  
  // remove an event
  let removeEventBtn = document.getElementById("removeEventBtn") // select element
  
  removeEventBtn.addEventListener('click', removeEvent); 
  
  function removeEvent(){
      // check event method
      if(btn.removeEventListener){
          btn.removeEventListener('click',runEvent);
          alert("removeEventListener");
      }else{
         btn.detachEvent("click",runEvent)
         alert("detachEvent");
      }
      
  }
  ```
  
  