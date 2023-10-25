#  Events

- `An event is an action `

- `Events can be generated or triggered by the system, by the user, or in other way`

- `Most Common Categories are Resource, Focus, Websocket, Session History, CSS Animation, CSS Transition,Form, Printing, Text Composition, View, Clipboard, Keyboard, Mouse, Drag & Drop, Media, Progress, Storage , Update, Value change, etc...`

- `Less common and non-standard events are Abortable Fetch events, WebVR events, SVG events, Database events, Script events, Menu events,Window events,Popup events,Tab events, Battery events, Call events, Sensor events,Smartcard events, SMS and USSD events, Frame events, DOM mutation events, Touch events, Pointer events,`

- https://developer.mozilla.org/en-US/docs/Web/Events

- https://www.w3schools.com/jsref/dom_obj_event.asp

- [HTML 5 Standard Events](https://www.tutorialspoint.com/What-are-HTML-5-Standard-Events)

   | Event                                                        | Description                                                  | Belongs To                                                   |
   | :----------------------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
   | [abort](https://www.w3schools.com/jsref/event_onabort_media.asp) | `The event occurs when the loading of a media is aborted`    | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [afterprint](https://www.w3schools.com/jsref/event_onafterprint.asp) | `The event occurs when a page has started printing, or if the print dialogue box has been closed` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [animationend](https://www.w3schools.com/jsref/event_animationend.asp) | `The event occurs when a CSS animation has completed`        | [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) |
   | [animationiteration](https://www.w3schools.com/jsref/event_animationiteration.asp) | `The event occurs when a CSS animation is repeated`          | [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) |
   | [animationstart](https://www.w3schools.com/jsref/event_animationstart.asp) | `The event occurs when a CSS animation has started`          | [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) |
   | [beforeprint](https://www.w3schools.com/jsref/event_onbeforeprint.asp) | `The event occurs when a page is about to be printed`        | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [beforeunload](https://www.w3schools.com/jsref/event_onbeforeunload.asp) | `The event occurs before the document is about to be unloaded` | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [blur](https://www.w3schools.com/jsref/event_onblur.asp)     | `The event occurs when an element loses focus`               | [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) |
   | [canplay](https://www.w3schools.com/jsref/event_oncanplay.asp) | `The event occurs when the browser can start playing the media (when it has buffered enough to begin)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [canplaythrough](https://www.w3schools.com/jsref/event_oncanplaythrough.asp) | `The event occurs when the browser can play through the media without stopping for buffering` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [change](https://www.w3schools.com/jsref/event_onchange.asp) | `The event occurs when the content of a form element, the selection, or the checked state have changed (for <input>, <select>, and <textarea>)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [click](https://www.w3schools.com/jsref/event_onclick.asp)   | `The event occurs when the user clicks on an element`        | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [contextmenu](https://www.w3schools.com/jsref/event_oncontextmenu.asp) | `The event occurs when the user right-clicks on an element to open a context menu` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [copy](https://www.w3schools.com/jsref/event_oncopy.asp)     | `The event occurs when the user copies the content of an element` | [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) |
   | [cut](https://www.w3schools.com/jsref/event_oncut.asp)       | `The event occurs when the user cuts the content of an element` | [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) |
   | [dblclick](https://www.w3schools.com/jsref/event_ondblclick.asp) | `The event occurs when the user double-clicks on an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [drag](https://www.w3schools.com/jsref/event_ondrag.asp)     | `The event occurs when an element is being dragged`          | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [dragend](https://www.w3schools.com/jsref/event_ondragend.asp) | `The event occurs when the user has finished dragging an element` | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [dragenter](https://www.w3schools.com/jsref/event_ondragenter.asp) | `The event occurs when the dragged element enters the drop target` | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [dragleave](https://www.w3schools.com/jsref/event_ondragleave.asp) | `The event occurs when the dragged element leaves the drop target` | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [dragover](https://www.w3schools.com/jsref/event_ondragover.asp) | `The event occurs when the dragged element is over the drop target` | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [dragstart](https://www.w3schools.com/jsref/event_ondragstart.asp) | `The event occurs when the user starts to drag an element`   | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [drop](https://www.w3schools.com/jsref/event_ondrop.asp)     | `The event occurs when the dragged element is dropped on the drop target` | [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) |
   | [durationchange](https://www.w3schools.com/jsref/event_ondurationchange.asp) | `The event occurs when the duration of the media is changed` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [ended](https://www.w3schools.com/jsref/event_onended.asp)   | `The event occurs when the media has reach the end (useful for messages like "thanks for listening")` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [error](https://www.w3schools.com/jsref/event_onerror.asp)   | `The event occurs when an error occurs while loading an external file` | [ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp), [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [focus](https://www.w3schools.com/jsref/event_onfocus.asp)   | `The event occurs when an element gets focus`                | [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) |
   | [focusin](https://www.w3schools.com/jsref/event_onfocusin.asp) | The event occurs when an element is about to get focus`      | [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) |
   | [focusout](https://www.w3schools.com/jsref/event_onfocusout.asp) | `The event occurs when an element is about to lose focus`    | [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) |
   | [fullscreenchange](https://www.w3schools.com/jsref/event_fullscreenchange.asp) | `The event occurs when an element is displayed in fullscreen mode` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [fullscreenerror](https://www.w3schools.com/jsref/event_fullscreenerror.asp) | `The event occurs when an element can not be displayed in fullscreen mode` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [hashchange](https://www.w3schools.com/jsref/event_onhashchange.asp) | `The event occurs when there has been changes to the anchor part of a URL` | [HashChangeEvent](https://www.w3schools.com/jsref/obj_hashchangeevent.asp) |
   | [input](https://www.w3schools.com/jsref/event_oninput.asp)   | `The event occurs when an element gets user input`           | [InputEvent](https://www.w3schools.com/jsref/obj_inputevent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [invalid](https://www.w3schools.com/jsref/event_oninvalid.asp) | `The event occurs when an element is invalid`                | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [keydown](https://www.w3schools.com/jsref/event_onkeydown.asp) | `The event occurs when the user is pressing a key`           | [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) |
   | [keypress](https://www.w3schools.com/jsref/event_onkeypress.asp) | `The event occurs when the user presses a key`               | [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) |
   | [keyup](https://www.w3schools.com/jsref/event_onkeyup.asp)   | `The event occurs when the user releases a key`              | [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) |
   | [load](https://www.w3schools.com/jsref/event_onload.asp)     | `The event occurs when an object has loaded`                 | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [loadeddata](https://www.w3schools.com/jsref/event_onloadeddata.asp) | `The event occurs when media data is loaded`                 | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [loadedmetadata](https://www.w3schools.com/jsref/event_onloadedmetadata.asp) | `The event occurs when meta data (like dimensions and duration) are loaded` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [loadstart](https://www.w3schools.com/jsref/event_onloadstart.asp) | `The event occurs when the browser starts looking for the specified media` | [ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp) |
   | [message](https://www.w3schools.com/jsref/event_onmessage_sse.asp) | `The event occurs when a message is received through the event source` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [mousedown](https://www.w3schools.com/jsref/event_onmousedown.asp) | `The event occurs when the user presses a mouse button over an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mouseenter](https://www.w3schools.com/jsref/event_onmouseenter.asp) | `The event occurs when the pointer is moved onto an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mouseleave](https://www.w3schools.com/jsref/event_onmouseleave.asp) | `The event occurs when the pointer is moved out of an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mousemoe](https://www.w3schools.com/jsref/event_onmousemove.asp) | `The event occurs when the pointer is moving while it is over an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mouseover](https://www.w3schools.com/jsref/event_onmouseover.asp) | `The event occurs when the pointer is moved onto an element, or onto one of its children` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mouseout](https://www.w3schools.com/jsref/event_onmouseout.asp) | `The event occurs when a user moves the mouse pointer out of an element, or out of one of its children` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | [mouseup](https://www.w3schools.com/jsref/event_onmouseup.asp) | `The event occurs when a user releases a mouse button over an element` | [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) |
   | mousewheel                                                   | `Deprecated. Use the` [wheel](https://www.w3schools.com/jsref/event_onwheel.asp) `event instead` | [WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp) |
   | [offline](https://www.w3schools.com/jsref/event_onoffline.asp) | `The event occurs when the browser starts to work offline`   | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [online](https://www.w3schools.com/jsref/event_ononline.asp) | `The event occurs when the browser starts to work online`    | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [open](https://www.w3schools.com/jsref/event_onopen_sse.asp) | `The event occurs when a connection with the event source is opened` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [pagehide](https://www.w3schools.com/jsref/event_onpagehide.asp) | `The event occurs when the user navigates away from a webpage` | [PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp) |
   | [pageshow](https://www.w3schools.com/jsref/event_onpageshow.asp) | `The event occurs when the user navigates to a webpage`      | [PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp) |
   | [paste](https://www.w3schools.com/jsref/event_onpaste.asp)   | `The event occurs when the user pastes some content in an element` | [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) |
   | [pause](https://www.w3schools.com/jsref/event_onpause.asp)   | `The event occurs when the media is paused either by the user or programmatically` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [play](https://www.w3schools.com/jsref/event_onplay.asp)     | `The event occurs when the media has been started or is no longer paused` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [playing](https://www.w3schools.com/jsref/event_onplaying.asp) | `The event occurs when the media is playing after having been paused or stopped for buffering` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | popstate                                                     | `The event occurs when the window's history changes`         | [PopStateEvent](https://www.w3schools.com/jsref/obj_popstateevent.asp) |
   | [progress](https://www.w3schools.com/jsref/event_onprogress.asp) | `The event occurs when the browser is in the process of getting the media data (downloading the media)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [ratechange](https://www.w3schools.com/jsref/event_onratechange.asp) | `The event occurs when the playing speed of the media is changed` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [resize](https://www.w3schools.com/jsref/event_onresize.asp) | `The event occurs when the document view is resized`         | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [reset](https://www.w3schools.com/jsref/event_onreset.asp)   | `The event occurs when a form is reset`                      | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [scroll](https://www.w3schools.com/jsref/event_onscroll.asp) | `The event occurs when an element's scrollbar is being scrolled` | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [search](https://www.w3schools.com/jsref/event_onsearch.asp) | `The event occurs when the user writes something in a search field (for <input="search">)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [seeked](https://www.w3schools.com/jsref/event_onseeked.asp) | `The event occurs when the user is finished moving/skipping to a new position in the media` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [seeking](https://www.w3schools.com/jsref/event_onseeking.asp) | `The event occurs when the user starts moving/skipping to a new position in the media` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [select](https://www.w3schools.com/jsref/event_onselect.asp) | `The event occurs after the user selects some text (for <input> and <textarea>)` | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [show](https://www.w3schools.com/jsref/event_onshow.asp)     | `The event occurs when a <menu> element is shown as a context menu` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [stalled](https://www.w3schools.com/jsref/event_onstalled.asp) | `The event occurs when the browser is trying to get media data, but data is not available` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | storage                                                      | `The event occurs when a Web Storage area is updated`        | [StorageEvent](https://www.w3schools.com/jsref/obj_storageevent.asp) |
   | [submit](https://www.w3schools.com/jsref/event_onsubmit.asp) | `The event occurs when a form is submitted`                  | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [suspend](https://www.w3schools.com/jsref/event_onsuspend.asp) | `The event occurs when the browser is intentionally not getting media data` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [timeupdate](https://www.w3schools.com/jsref/event_ontimeupdate.asp) | `The event occurs when the playing position has changed (like when the user fast forwards to a different point in the media)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [toggle](https://www.w3schools.com/jsref/event_ontoggle.asp) | `The event occurs when the user opens or closes the <details> element` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [touchcancel](https://www.w3schools.com/jsref/event_touchcancel.asp) | `The event occurs when the touch is interrupted`             | [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) |
   | [touchend](https://www.w3schools.com/jsref/event_touchend.asp) | `The event occurs when a finger is removed from a touch screen` | [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) |
   | [touchmove](https://www.w3schools.com/jsref/event_touchmove.asp) | `The event occurs when a finger is dragged across the screen` | [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) |
   | [touchstart](https://www.w3schools.com/jsref/event_touchstart.asp) | `The event occurs when a finger is placed on a touch screen` | [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) |
   | [transitionend](https://www.w3schools.com/jsref/event_transitionend.asp) | `The event occurs when a CSS transition has completed`       | [TransitionEvent](https://www.w3schools.com/jsref/obj_transitionevent.asp) |
   | [unload](https://www.w3schools.com/jsref/event_onunload.asp) | `The event occurs once a page has unloaded (for <body>)`     | [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp), [Event](https://www.w3schools.com/jsref/obj_event.asp) |
   | [volumechange](https://www.w3schools.com/jsref/event_onvolumechange.asp) | `The event occurs when the volume of the media has changed (includes setting the volume to "mute")` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [waiting](https://www.w3schools.com/jsref/event_onwaiting.asp) | `The event occurs when the media has paused but is expected to resume (like when the media pauses to buffer more data)` | [Event](https://www.w3schools.com/jsref/obj_event.asp)       |
   | [wheel](https://www.w3schools.com/jsref/event_onwheel.asp)   | `The event occurs when the mouse wheel rolls up or down over an element` | [WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp) |







###   Common Use events 

| Event Performed | Event Handler       | Description                                                  | type                   |
| :-------------- | :------------------ | :----------------------------------------------------------- | ---------------------- |
| click           | onclick             | when User click mouse                                        | Mouse                  |
| mouseover       | onmouseover         | When the cursor of the mouse comes over the element          | Mouse                  |
| mouseout        | onmouseout          | When the cursor of the mouse leaves an element               | Mouse                  |
| mousedown       | onmousedown         | When the mouse button is pressed over the element            | Mouse                  |
| mouseup         | onmouseup           | When the mouse button is released over the element           | Mouse                  |
| mousemove       | onmousemove         | When the mouse movement takes place.                         | Mouse                  |
| Keydown & Keyup | onkeydown & onkeyup | When the user press and then release the key                 | Keyboard               |
| focus           | onfocus             | When the user focuses on an element                          | Form                   |
| submit          | onsubmit            | When the user submits the form                               | Form                   |
| blur            | onblur              | Execute a JavaScript when a user leaves an input field:      | Form                   |
| change          | onchange            | Execute a JavaScript when a user changes the selected option of a <select> element: | Form                   |
| input           | oninput             | Execute a JavaScript when a user writes something in an <input> field: | Form                   |
| load            | onload              | When the browser finishes the loading of the page            | Window/Document events |
| unload          | onunload            | When the visitor leaves the current webpage, the browser unloads it |                        |
| resize          | onresize            | When the visitor resizes the window of the browser           |                        |
|                 |                     |                                                              |                        |
|                 |                     |                                                              |                        |








### Event handlers

- Event handlers can be used to handle, and verify, user input, user actions, and browser actions. This way, you can set up code to react to events 
- **Event handlers** are embedded in documents as attributes of HTML tags
- HTML event attributes can execute JavaScript code directly
- HTML event attributes can call JavaScript functions
- Handlers are a way to run JavaScript code in case of user actions
- **Don’t use `setAttribute` for handlers.**
- There are 3 ways to assign event handlers ,HTML attribute,DOM property and elem.addEventListener()





### Assign event handlers from HTML attribute

#### Click Event

- Triggers on a mouse click

```js
<button  onclick="callAlert()">click me</button>

//call fun from attributes 
 function callAlert () {
     alert("you click me");   
  }

// direct execute js code
<button  onclick=" function callAlert () {alert(' you click me ')} callAlert (); ">click me</button>

```



#### onsubmit Event

- The onsubmit event occurs when a form is submitted.

  ```js
  <form action="" onsubmit="myFunction()">
    Enter name: <input type="text" name="fname">
    <input type="submit" value="Submit">
  </form>
  <script>
  function myFunction() {
    alert("The form was submitted");
  }
  </script>
  ```



#### keyup Event

-   When a user is pressing a key

  ```js
  <input type="text" onkeydown="myFunction()">
  function myFunction(){
      alertt("keydonw")
  }
  ```



#### load Event

- Execute a JavaScript immediately after a page has been loaded:

  ```js
  <body onload="myFunction()">
  
     <h1>Hello World!</h1>
  
     <script>
     function myFunction() {
       alert("Page is loaded");
     } 
    </script>
  </body>
  ```







###  Assign event handlers  from DOM property 

- You can assign a handler using a DOM property `on<event>`

  ```html
  // click event
  <button>click me</button>
  document.querySelector("button").onclick = function (){
      alert("you click me with dom property")
  }
  
  // submit event
  <form>
      <input type="submit">
  </form>
  document.querySelector("form").onsubmit = function (){
  	    alert("submit event")
  	}
  ```







###  Assign event handlers  with addEventListener

- `addEventListener` method is the [W3C standard method](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-registration) to attach an event handler to an element, 

- addEventListeners attaches  to any HTML elements or window object and without overwriting existing event handlers.

- You can add many event handlers to one element.

- addEventListener() method is not supported in Internet Explorer 8 and earlier versions,

- Parameters 

  - element.addEventListener(event, handler, [options]);
    - **event name** : name of events like click
    - **handler function** : The handler function.
    - **options** : if `true`, then the listener is automatically removed after it triggers.

  ```js
  <button>click me </button>
  document.querySelector("button").addEventListener('click',function (){
      alert("you click me with dom property")
  })
  // add one or more addEventListener
  document.querySelector("button").addEventListener('click',function (){
      alert("method 2")
  })
  ```

  





###  Accessing current the element with this keyword

- You can access current element passing  from event handler with ``this`` keyword 

```js
<button onclick="fun(this.innerHTML)">
  <a href='#'>go to page</a>
</button>
function fun(el){
  console.log(el)
}
```




### The removeEventListener() method
- `removeEventListener()` method removes event handlers
- *element*.removeEventListener("mousemove", myFunction)





### Prevent default 

- *preventDefault*() will prevent the default event from occuring(form,checkbox,url)

  ```js
  //prevent url
  <a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>
  document.getElementById("myAnchor").addEventListener("click", function(event){
    event.preventDefault()
  });
  
  //prevent form
  <form action="action.php" onsubmit="myFunction(event)">
    Enter name: <input type="text" name="fname">
    <input type="submit" value="Submit">
  </form>
  function myFunction(event) {
      event.preventDefault()
      alert('submit')
  }
  
  //toggling a checkbox is the default action of clicking on a checkbox. The preventDefault() method prevents this from happening.
  <input type="checkbox" id="myCheckbox">
  document.getElementById("myCheckbox").addEventListener("click", function(event){
    event.preventDefault()
  });
  
  ```








### [Event object](https://javascript.info/introduction-browser-events?map#event-object)

- Event object  contains information about an *event* that has occurred

  ```js
  <h1  onclick="callAlert(event)">Heading one</h1>
  <button>click btn</button>
  
  document.querySelector("button").onclick = function (event){
   console.log(event)
  }
  function callAlert (event) {
      console.log(event)
  }
  ```







## summery code

```js
// Assign event handlers from HTML attribute
// click event 
<button  onclick="cli()">click me</button>
//call fun from attributes 
 function cli () {
     alert("you click me");   
  }

// direct execute js code (not recommended)
<button  onclick=" function callAlert () {alert(' you click me ')} callAlert (); ">click me</button>


// submit Event & keyup Event
<form action="" onsubmit="sub()">
 <input type="text" name="fname" onkeyup='typing()'>
 <input type="submit" value="Submit">
</form>
function sub() {
  alert("The form was submitted");
}
function typing(){alert("typing...");}


// load event
<body onload="myFunction()">
</body>
function myFunction() {
	alert("Page is loaded");
}






// Assign event handlers from DOM property 
// click event
<button>click me</button>
document.querySelector("button").onclick = function (){
    alert("you click me with dom property")
}
// submit event
<form>
    <input type="submit">
</form>
document.querySelector("form").onsubmit = function (){
	    alert("submit event")
	}






// Assign event handlers  with addEventListener
// click event
<button>click me </button>
document.querySelector("button").addEventListener('click',function (){    
    alert("you click me with dom property")
})

// add one or more 
addEventListenerdocument.querySelector("button").addEventListener('click',function (){    		alert("method 2")
})                                                                                      
                                                                                     




// Access current element passing  from event handler with `this keyword 
<button onclick="fun(this.innerHTML)">
  <a href='#'>go to page</a>
</button>
function fun(el){
  console.log(el)
}




// event object
document.querySelector("button").onclick = function (event){
 console.log(event)
}





// Prevent Default
//prevent url
<a id="myAnchor" href="https://w3schools.com/">Go to W3Schools.com</a>
document.getElementById("myAnchor").addEventListener("click", function(event){
  event.preventDefault()
});

//prevent form
<form action="action.php" onsubmit="myFunction(event)">
  Enter name: <input type="text" name="fname">
  <input type="submit" value="Submit">
</form>
function myFunction(event) {
    event.preventDefault()
    alert('submit')
}
```

