# DOM

- The DOM stands for Document Object Model.
-  When a browser loads a web page, then the browser creates the Document Object Model (DOM) for that page.
-  Document Object Model  is an application programming interface (API) for manipulating HTML and XML documents(add, remove, and modify parts of the document ).
- DOM represents a document as a  node tree.
- HTML elements Node is an object,so it have properties, methods
- `Document Object` is the owner of all other objects in your webpage. 
-  [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer)





#### Type of DOM

- The W3C DOM standard is separated into 3 different parts:

  - Core DOM - standard model for all document types

  - XML DOM - standard model for XML documents

  - HTML DOM - standard model for HTML documents

    



#### HTML DOM

- HTML DOM is a standard for how to get, change, add, or delete HTML elements

- Markup languages 

- Not Case sensitive 

- Can ignore small errors

- Predefined tags

- Limiting  number of tags

- Used for displaying the data

- Closing tags are not necessary 

-  Used to create web pages and web applications.

- For accessing and manipulating HTML documents

- Presents an HTML document as a tree-structure.

  ```html
  <html>
  <head>
    <title>My Document</title>
  </head>
  <body>
      <div>
          <h1></h1>
          <p></p>
          <strong></strong>
      </div>
  </body>
  </html>
  <script>
  document.getElementsByTagName("h1")[0].innerHTML = "Shine Shine";
  document.getElementsByTagName("p")[0].innerHTML = "My First Post";
  document.getElementsByTagName("strong")[0].innerHTML = "2020";
  </script>
  ```





#### XML DOM

- Standard for Extensible Markup Language

- It Is not only for the markup languages ,it is provides framework to define markup languages

- Case sensitive 

- Can't  ignore small errors

- User defined tags

- Not limited number of tags

- Used for data transferring 

- Cosing tags are necessary 

-  Used to create web pages and web applications.

-  For accessing and manipulating XML documents.

- Presents an XML document as a tree-structure

  

  #### XML document(string)  into an XML DOM

   ````js
  <html>
  <head>
    <title>My Document</title>
  </head>
  <body>
      <div>
        aslkd
          <h1 id='name'></h1>
          <p id='title'></p>
          <strong id='date'></strong>
      </div>
  </body>
  <script>
  let name,title,date,xmlDoc, parser, parserdxmlDoc;
  
  //request or create a xmlDoc
  xmlDoc = `<post>
  <author>Shine Shine</author>
  <title>My Post One</title>
  <year>2020</year>
  "</post>`;
  
   name = document.getElementById("name")
   title = document.getElementById("title")
   date = document.getElementById("date")
  
  // create xmldom parser 
  parser = new DOMParser();
  // prarser a xml document
  parserdxmlDoc = parser.parseFromString(xmlDoc,"text/xml");
  
  // print xmlDoc
  console.log(parserdxmlDoc);
  console.log(parserdxmlDoc.getElementsByTagName("title")[0].childNodes[0]);
  
  name.innerHTML = parserdxmlDoc.getElementsByTagName("author")[0].childNodes[0].nodeValue ;
  title.innerHTML = parserdxmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue ;
  date.innerHTML = parserdxmlDoc.getElementsByTagName("year")[0].childNodes[0].nodeValue;
  </script>
  </html>
   ````
  





#### DOM properties and methods

- In the DOM, all HTML elements are defined as **objects**.

- DOM methods are **actions** you can perform (on HTML Elements) such as innerHTML, innerText, attributes,style, parentNode, childNodes 

-  DOM properties are **values** (of HTML Elements node or Root Node ) that you can set or change. such as getElementById(),

  appendChild(), removeChild()





#### Node types constants

| Constant                           | Value | Description                                                  |
| :--------------------------------- | :---- | :----------------------------------------------------------- |
| `Node.ELEMENT_NODE`                | `1`   | An `Element` node like `<p>` or `<div>`.                     |
| `Node.TEXT_NODE`                   | `3`   | The actual `Text` inside an `Element` or `Attr`.             |
| `Node.CDATA_SECTION_NODE`          | `4`   | A `CDATASection`, such as `<!CDATA[[ … ]]>`.                 |
| `Node.PROCESSING_INSTRUCTION_NODE` | `7`   | A `ProcessingInstruction` of an XML document, such as `<?xml-stylesheet … ?>`. |
| `Node.COMMENT_NODE`                | `8`   | A `Comment` node, such as `<!-- … -->`.                      |
| `Node.DOCUMENT_NODE`               | `9`   | A `Document` node.                                           |
| `Node.DOCUMENT_TYPE_NODE`          | `10`  | A `DocumentType` node, such as `<!DOCTYPE html>`.            |
| `Node.DOCUMENT_FRAGMENT_NODE`      | `11`  | A `DocumentFragment` node.                                   |



----

### The Difference Between an HTMLCollection and a NodeList

- An `HTMLCollection` (previous chapter) is a collection of HTML elements.
- A `NodeList` is a collection of document nodes.
- A NodeList and an HTML collection is very much the same thing.
- Both an HTMLCollection object and a NodeList object is an array-like list (collection) of objects.
- Both have a length property defining the number of items in the list (collection).
- Both provide an index (0, 1, 2, 3, 4, ...) to access each item like an array.
- HTMLCollection items can be accessed by their name, id, or index number.
- NodeList items can only be accessed by their index number.
- Only the NodeList object can contain attribute nodes and text nodes.
- **A node list is not an array!** 
- A node list may look like an array, but it is not. You can loop through the node list and refer to its nodes like an array.However, you cannot use Array Methods, like valueOf(), push(), pop(), or join() on a node list.

---

### Parts of a web browser

<img src='https://mdn.mozillademos.org/files/14557/document-window-navigator.png'/>

- The window is the browser tab that a web page is loaded into; this is represented in JavaScript by the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) object. Using methods available on this object you can do things like return the window's size (see [`Window.innerWidth`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) and [`Window.innerHeight`](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight)), manipulate the document loaded into that window, store data specific to that document on the client-side (for example using a local database or other storage mechanism), attach an [event handler](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#A_series_of_fortunate_events) to the current window,
- The **``navigator``** represents the state and identity of the browser (i.e. the user-agent) as it exists on the web
- The **``document``** (represented by the DOM in browsers) is the actual page loaded into the window, and is represented in JavaScript by the [`Document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) object. You can use this object to return and manipulate information on the HTML and CSS that comprises the document,

---

###  Hierarchy of nodes (Node Relationships)

- **Root node**: The top node in the tree, which in the case of HTML is always the `HTML` node 
- **Element node**: An element, as it exists in the DOM.
- **Child node**: A node *directly* inside another node. 
- **Descendant node**: A node *anywhere* inside another node.
- **Parent node**: A node which has another node inside it
- **Sibling nodes**: Nodes that sit on the same level in the DOM tree.
- **Text node**: A node containing a text string.