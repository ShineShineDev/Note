## DOM Properties and Methods

- When web page is loaded browser creates a **D**ocument **O**bject **M**odel
- DOM represents a document as a tree of nodes object. So it  have *properties* and methods
- DOM methods are **actions** you can perform (on HTML Elements node or Root node)
- DOM properties are **values** (of HTML Elements node or Root node) that you can set or change.
- Document is the owner of all other objects in your webpage. 





#### Document Object Properties and Methods (Root Node) of [W3](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/dom_obj_document.asp.html)

- When an HTML document is **``loaded``** into a web browser, it becomes a **document object**.
- The document object is the **``root node``** of the HTML document and and the **`owner`** of all other nodes
- The document object provides **``properties and methods``** to access all node objects
- The document is a part of the **`Window object`** and can be accessed as `window.document`

##### 	Finding HTML Elements

| Method                                  | Description                   |
| :-------------------------------------- | :---------------------------- |
| document.getElementById(*id*)           | Find an element by element id |
| document.getElementsByTagName(*name*)   | Find elements by tag name     |
| document.getElementsByClassName(*name*) | Find elements by class name   |

##### Adding and Deleting Elements

| Method                            | Description                      |
| :-------------------------------- | :------------------------------- |
| document.createElement(*element*) | Create an HTML element           |
| document.removeChild(*element*)   | Remove an HTML element           |
| document.appendChild(*element*)   | Add an HTML element              |
| document.replaceChild(*new, old*) | Replace an HTML element          |
| document.write(*text*)            | Write into the HTML output strea |

##### Adding Events Handlers

| Method                                                     | Description                                   |
| :--------------------------------------------------------- | :-------------------------------------------- |
| document.getElementById(*id*).onclick = function(){*code*} | Adding event handler code to an onclick event |





####  HTML document object Properties and Methods (element nodes)

- The **Element object** represents an HTML element.

- All HTML elements are element nodes

- Element objects can have **child nodes** such as text nodes, or comment nodes and attribute nodes

  | Properties                                 | Description                                   |
  | :----------------------------------------- | :-------------------------------------------- |
  | *element*.innerHTML = *new html content*   | Change the inner HTML of an element           |
  | *element*.*attribute = new value*          | Change the attribute value of an HTML element |
  | *element*.style.*property = new style*     | Change the style of an HTML element           |
  | Method                                     | Description                                   |
  | *element*.setAttribute*(attribute, value)* | Change the attribute value of an HTML element |





#### Create custom DOM  property 

- DOM nodes are regular JavaScript objects. So we can add custom properties in DOM 

  ```js
  // custom  property with string
  document.body.myCustomPro = "created By Julian";
  console.log(document.body.myCustomPro);
  
  document.myCustomPro = "created By Julian";
  console.log(document.myCustomPro);
  
  // custom  property with object
  document.body.customProperties = {
    MySite: 'Julian',
    MyDomain: 'Julian.com'
  };
  console.log(document.body.customProperties);
  
  
  ```

  





### Create custom DOM    method 

- DOM nodes are regular JavaScript objects. So we can add custom method in DOM 

  ```js
  document.body.siteTitle = function() {
     document.write(document.title)
  };
  document.body.siteTitle() // call method
  
  document.siteTitle = function() {
     document.write(document.title)
  };
  document.siteTitle() // call method
  
  // Add method for all elements with Element.prototype(built-in prototypes)  
  Element.prototype.siteTitle = function() {
      document.write(document.title)
      console.log(this);
  };
  
  document.documentElement.siteTitle(); 
  document.body.siteTitle(); 
  
  ```

  

