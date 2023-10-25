## Manipulating styles



###  Adding style  with  style   property

- To add or change HTML element style we can  use **`style property`** of an elements.

-  CSS property name  contain one or more hyphens, in JavaScript `hyphens(-)` are reserved operator. So

   we must be write with **`camelCase`** .
  
- Style property of element node  will be attach inline style CSS.

- `node.style.color = "blue"`

- [See Style Object Properties (W3)](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/dom_obj_style.asp.html)

  ```js
  let btn = document.createElement("button") //create button element
  btn.innerText = "My Button";
  
  //add style with style object properites of element
  btn.style.backgroundColor  = "#f1f1f1"
  btn.style.padding = "10px";
  btn.style.border = "solid 3px white";
  btn.style.boxShadow = "0 1px 5px 0 blue";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
  
  // apply multiple styles with cssText style object  property
  btn.style.cssText = "background :#f1f1f1; padding: 10px; border: solid 3px white;box-shadow: 0 1px 5px 0 blue;border-radius: 5px;  cursor: pointer"; 
  //concatenate new CSS
  btn.style.cssText += 'color:red;backgroundColor:yellow';
  
  document.body.appendChild(btn)
  ```
  





### Adding CSS Classes with className  property 

- To get or set CSS class to the HTML elements you can use `className` property.

-  `elem.className = "classNmae" `

  ```js
  <style>
  .btnStyle {
    background-color  : #f1f1f1;
    padding : 10px;
    box-shadow : 0 1px 5px 0 blue;
    border-radius : 5px;
    cursor : pointer;
    border : 0;
  }
  .center{
      position : relative;
      top: 40%;
      left : 40%;
  }
  </style>
  <button id="btn">Add Card</button>
  
  <script>
  let btn = document.getElementById("btn");
  btn.className = "btnStyle"; //  Add or replace
  btn.className  += " center"; // append
  console.log(btn.className);
  </script>
  ```





### Adding CSS Classes with classList property

- `classList` property can also get or set CSS classes  to the HTML elements

- `node.classList`

  ```js
  <style>
   .btn{
       padding : 10px;
       border-radius : 5px;
       cursor : pointer;
       border : 0;
       box-shadow : 0 1px 5px 0 blue;
   }
  .btn-light{
    background-color  : #f1f1f1;
  }
  .center{
      position : relative;
      top: 40%;
      left : 48%;
  }
  </style>
  <button id="btn">Add Card</button>
  
  
  let btnEl = document.getElementById("btn");
  btnEl.classList.add("btn");  // single Adding 
  btnEl.classList.add("btn-light","center") // multiple adding
  
  btnEl.classList.remove("center") // single removing 
  btnEl.classList.remove("btn-light","center") // multiple removing 
  
  btnEl.classList.toggle("btn-light") // If class exists remove it, if not add it
  btnEl.classList.toggle("text-white")
  
  // class list of btn
  console.log(btnEl.classList) // DOMTokenList(3) ["btn", "btn-light", "text-white", value: "btn btn-light text-white"]
  
  
  ```





### Adding CSS Classes with element node methods

- To add or get **`css class`** you can use **`element node methods`** such as 

- `node.setAttribute(attributeName,attributeValue)`

- `node.getAttribute(attributeName)`

- `node.removeAttribute(attributeName)`

- `node.hasAttribute(attributeName)`

  ```js
  <style>
  .btnStyle {
    background-color  : #f1f1f1;
    padding : 10px;
    box-shadow : 0 1px 5px 0 blue;
    border-radius : 5px;
    cursor : pointer;
    border : 0;
  }
  .center{
      position : relative;
      top: 40%;
      left : 40%;
  }
  </style>
  
  <button id="btn">Add Card</button>
  
  let btnEl = document.getElementById("btn");
  
  // add style with class name of btnEl attribute 
  btnEl.setAttribute('class', 'btnStyle'); 
  
  // add inline style with btnEl attribute 
  btnEl.setAttribute('style','color:red;background-color:yellow');
  
  // remove class attribute
  btnEl.removeAttribute('class');
  
  //check class attribute
  btnEl.hasAttribute("clsss") // true 
  
  // get Attribute of el 
  btnEl.getAttribute("class"); // btnStyle
  ```





### Getting Style Information from Elements

-  To get the values of CSS properties for an element we can use **`window.getComputedStyle(el)`** method and **`node.style.cssProperty`** property. 

- The `style` property is not good solution to get the values of CSS properties,Because it  represents only the CSS declarations set in the element's inline `style` attribute.

  ```js
  <style>
  .btnStyle {
    box-shadow : 0 1px 5px 0 blue;
    border-radius : 5px;
    cursor : pointer;
    border : 0;
    padding : 10px;
  }
  </style>
  
  <button id="btn" style='background:black;color:white;' class="btnSyle">Add Card</button>
  
  
  let btnEl = document.getElementById("btn");
  
  //getting style info with style property
  console.log(btnEl.style.background) // balck
  console.log(btnEl.style.padding) //  Outputs nothing
  
  //Getting style info with getComputedStyle()
  let btnStyles = window.getComputedStyle(btnEl);
  console.log(btnStyles.padding) // 10px
  console.log(btnStyles.getPropertyValue("box-shadow")) // rgb(0, 0, 255) 0px 1px 5px 0px
  ```
  
  
  
  

