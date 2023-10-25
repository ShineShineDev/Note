## Event

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

