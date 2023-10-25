## Modify Nodes





### Creating Node


  #### Creating an element node

- To create element node we can use ``document.createElement() ``methods.

  ```js
  let button = doucument.createElement("button");
  console.log(button); // <button></button>
  ```




#### Creating an Text node

- To create text node we can use ``document.createTextNode() ``method

  ```js
  let textNode = document.createTextNode("Button");
  console.log(textNode); // Button
  
  //create with property
  let button = document.createElement("button");
  button.innerText = textNode;  
       //or
  button.innerHTML = textNode; // can make xss
  
  console.log(button) //<button>A Button</button>
  
  ```



#### Create Attribute Node

- Creates an attribute nod with the specified name, and returns the attribute as an Attr object.

- Attribute node also is DOM node , But it's deprecate in W3 

  ```js
  let body = document.getElementsByTagName('body')
  // create attribute node
  let attribute = document.createAttribute("class");    
  // set attribute value
  attribute.value = "bg";   
  // attach to element
  body[0].setAttributeNode(attribute)
  ```



 #### Create Comment Node

- comments are node in DOM tree so we can create comment node with `createComment()` method

- `document.createComment()`

  ```js
  let comment = document.createComment("create comment wiht createComment method");
  document.body.prepend(comment);
  ```








### Inserting Nodes 

-  To insert node we can use methods such as ,append, prepend, before, after, replaceWith, appendChild,

  replaceChild


#### append methods

- Add an node at the end  of `specified node`

- ``specifiedNode.append(node)``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  
  let ul = document.getElementsByTagName("ul");
  let el = document.createElement("button");
  el.innerText = "End List";
  ul[0].append(el);
  
  ```

  

#### Prepend methods

-  Add nodes at the beginning of `specified node`

- ``specifiedNode.prepend(node)``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  
  let ul = document.getElementsByTagName("ul");
  let el = document.createElement("button");
  el.innerText = "My Lists";
  ul[0].prepend(el);
  
  ```



#### before methods

- Add an node  *before* `specified node` ( similar with prepend method )

- ``specifiedNode.before``(node)

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  
  let ul = document.getElementsByTagName("ul");
  let el = document.createElement("button");
  el.innerText = "My Lists";
  ul[0].before(el);
  ```

  

#### After method

-  Add nodes  *after* `specified node` ( similar with append method )

- ``specifiedNode.after(node) ``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  
  let ul = document.getElementsByTagName("ul");
  let el = document.createElement("button");
  el.innerText = "End List";
  ul[0].after(el);
  ```

  

#### Append Child method 

- Add a node as the last child of a parent element

- ``parentNode.appendChild(node)``

  ```js
  let button = document.createElement("button");
  let link = document.createElement("a");
  button.appendChild(link)
  console.log(button) // <button><a></a></button>
  ```



####   Insert Before method

- Add a node  before specify existing node  of a parent node.

- ``parentNode.insertBefore(newnode, existingnode)``

  ```js
  let ul = document.createElement("ul");
  
  let listOne = document.createElement("li");
  listOne.innerText = "One"
  let listTwo = document.createElement("li");
  listTwo.innerText = "Two"
  let listThree = document.createElement("li");
  listThree.innerText = "Tshree"
  
  ul.appendChild(listTwo)
  ul.appendChild(listThree)
  ul.insertBefore(listOne,listTwo)
  
  console.log(ul) // <ul><li>One</li><li>Two</li><li>Four</li></ul>
  ```



#### replaceWith method

- Replace an node  with another

- ``old_elem.replaceWith(new_elem)``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  
  <script>
  let ul = document.getElementsByTagName("ul");
  let new_list = document.createElement("li");
  new_list.innerText = "Middle list";
  ul[0].children[1].replaceWith(new_list)
  </script>
  
  ```
  
  

#### Replace Child method

-  replaces a child node with a new node of a parent node. 

- ``parentNode.replaceChild(newnode, oldnode)``

  ```js
  <ul class='List'>
      <li id='one'>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  <ul class='list'>
      <li>four</li>
      <li>five</li>
  </ul>
  //get parent element
  let lists = document.getElementsByTagName('ul');
  console.log(lists[0].children[0]); //  <li>One</li>
  //create element node
  let newNode = document.createElement("li");
  //create text node with property 
  newNode.innerText = "new Node List";
  // replace fist child of ul 
  lists[0].replaceChild(newNode,lists[0].children[0])
  console.log(lists[0].children[0]); // <li>new Node list</li>
  ```

----

### Removing Node

- ``node.remove() and node.removeChild(node) `` can use to remove  node

#### remove Node

- to remove an node we can use ``node.remove`` method

- ``node.remove()``

  ```js
  <ul>
      <li id='first'>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  let li = document.getElementById("first");
  li.remove();
  ```
  
  

#### remove Child

- removes a specified child node of the specified parent element.

- ``node.removeChild(node)``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  //get parent node
  let ul = document.getElementsByTagName("ul");
  //remove child node from pareent ul node
  ul[0].removeChild(ul[0].children[0]); 
  
  ```

  

-----

## Cloning node



#### cloneNode method

- ``cloneNode(true)`` method is used to clone  node

- this method take one argument ,if argument is true ``cloneNode`` will copy wiht child node. If we call with false then the clone is made without child elements.

- ``elem.cloneNode(true)``

  ```js
  <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  //get parent node
  let ul = document.getElementsByTagName("ul");
  //clone with child 
  let cloneWithChild = ul[0].cloneNode(true)
  console.log(cloneWithChild);
  let cloneWithoutChild = ul[0].cloneNode(false)
  console.log(cloneWithoutChild);
  
  
  ```

  

-------

[REFERENCE GUIDE](https://javascript.info/modifying-document)                                                                                                                             **End**





