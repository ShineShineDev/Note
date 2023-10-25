## Access HTML elements

- `document.getElementById(id)`
- `document.getElementsByClassName(classname)`
- `document.getElementsByTagName(tagname)`
- `document.getElementsByName(name)`
- `document.querySelector(selector)` `#some-id`, `.some-classname`, or `tag`. If there are multiple elements matching the selector, you’ll only get the first one returned.
- `document.querySelectorAll(selector)`

The [HTMLCollection](https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp) object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0





### document.getElementById()

-  To select **an element** with id 

- Returns an **`Element`** object 

- If there is no element with that `id` exist, It returns **`null`**

- If a document has more than one element with the same id, the `getElementById()` method returns the **`first one`** it encounters.

  ```js
  <h1 id='h1'>Heading One</h1>
  <h2 id='h1'>Heading two</h2>
  
  let h1 = document.getElementById('h1')
  console.log(h1) // <h1 id="h1">Heading One</h1>
  h1.style.background = "blue"; //change background of h1 element
  ```





### document.getElementsByClassName(classname)

-  To select   **one or more elements**  with class name 

- Returns an **`array of  HTMLCollection`** of all child elements.

- If class name doesn't exist, It returns **`empty array of HTMLCollection `**

  ```js
  <ul class='list'>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  <ul class='list'>
      <li>four</li>
      <li>five</li>
  </ul>
  
  let lists = document.getElementsByClassName('list')
  
  console.log(lists) //HTMLCollection(2) [ul.list, ul.list]
  
  // change background of ul index zeor in htmlcollection index zero
  lists[0].children[0].style.background = "blue"; // four el change bg
  ```





### getElementsByTagName(tagname)

-  Can select  **`one or more elements`** with tag name 

- Returns an **``array-like object of all child elements``** (HTMLCollection)

- If tag name doesn't exist, It returns `empty array of HTMLCollection `

  ```js
  <ul class='list'>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  <ul class='list'>
      <li>four</li>
      <li>five</li>
  </ul>
  
  let lists = document.getElementsByTagName('ul')
  
  console.log(lists) //HTMLCollection(2) [ul.list, ul.list]
  
  // change background of ul index zeor in htmlcollection index zero
  lists[0].children[0].style.background = "blue"; // change bg of list one el 
  ```





#### getElementsByName(name)

-  To get elements with a given name of element ( HTML5, the "name" attribute is deprecated and has been replaced by the "id" attribute for many elements)

- Returns a collection of all elements

- If  name of element doesn't exist, It returns **`empty array NodeList [] `**([HTMLCollection](https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp))

  ```js
  <input name='userName' type='text'>
  <ul name='list'>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  let userName = document.getElementsByName('userName');
  let lists = document.getElementsByName('list')
  console.log(lists) //HTMLCollection(2) [ul.list, ul.list]
  // change background of ul index zeor in htmlcollection index zero
  lists[0].children[0].style.background = "blue"; // change bg of list one el 
  ```





#### querySelector(css selector)

-  Used to select elements based on their id, classes, types, attributes, values of attributes, etc.  just like css selector(one or more CSS selectors )

- Returns the first element 

- If  name of element doesn't exist, It returns **``null``**

  ```js
  <ul name='list'>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  <ul class='list'>
      <li>four</li>
      <li>five</li>
  </ul>
  let lists = document.querySelector('List')
  console.log(lists) // <ul class='list'>...</ul>
  lists.style.background = "blue"; // change ul bg
  ```





#### QuerySelectorAll

- used to select **``all elements``**  based on their id, classes, types, attributes, values of attributes, etc. just like css selector (one or more CSS selectors )

- Return a NodeList object (NodeList(2) [ul.list, ul.list])

- If  selector of element doesn't exist, It returns **``empty array of node list``**

  ```js
  <ul class='list'>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
  </ul>
  <ul class='list'>
      <li>four</li>
      <li>five</li>
  </ul>
  let lists = document.querySelectorAll('.list')
  console.log(lists) // NodeList(2) [ul.list, ul.list]
  // change background of index zero ul
  lists[0].style.background = "blue"; // four el change bg
  ```

  