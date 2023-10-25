# DOM Properties and Methods 

- When web page is loaded browser creates a **D**ocument **O**bject **M**odel
- DOM represents a document as a tree of nodes object. So it  have *properties* and methods
- DOM methods are **actions** you can perform (on HTML Elements node or Root node)
- DOM properties are **values** (of HTML Elements node or Root node) that you can set or change.
- Document is the owner of all other objects in your webpage. 


```js
<ul id='list'>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ul>
console.dir(document.getElementById("list")); // HTML Elements node methods and propeties
console.dir(document); // root node methods and propeties
```







### Document **object** (Root Node)

- When an HTML document is **``loaded``** into a web browser, it becomes a **document object**.
- The document object is the **``root node``** of the HTML document and and the **`owner`** of all other nodes
- The document object provides **``properties and methods``** to access all node objects
- The document is a part of the **`Window object`** and can be accessed as `window.document`
-  the Document object inherits all properties and methods from the Node object.

##### Document Object Properties and Methods (Root Node) of [W3](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/dom_obj_document.asp.html)

| Property / Method                                            | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [activeElement](https://www.w3schools.com/jsref/prop_document_activeelement.asp) | Returns the currently focused element in the document        |
| [addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) | Attaches an event handler to the document                    |
| [adoptNode()](https://www.w3schools.com/jsref/met_document_adoptnode.asp) | Adopts a node from another document                          |
| [anchors](https://www.w3schools.com/jsref/coll_doc_anchors.asp) | Returns a collection of all <a> elements in the document that have a name attribute |
| [applets](https://www.w3schools.com/jsref/coll_doc_applets.asp) | Returns a collection of all <applet> elements in the document |
| [baseURI](https://www.w3schools.com/jsref/prop_doc_baseuri.asp) | Returns the absolute base URI of a document                  |
| [body](https://www.w3schools.com/jsref/prop_doc_body.asp)    | Sets or returns the document's body (the <body> element)     |
| [close()](https://www.w3schools.com/jsref/met_doc_close.asp) | Closes the output stream previously opened with document.open() |
| [cookie](https://www.w3schools.com/jsref/prop_doc_cookie.asp) | Returns all name/value pairs of cookies in the document      |
| [charset](https://www.w3schools.com/jsref/prop_document_characterset.asp) | Deprecated. Use [characterSet](https://www.w3schools.com/jsref/prop_document_characterset.asp) instead. Returns the character encoding for the document |
| [characterSet](https://www.w3schools.com/jsref/prop_document_characterset.asp) | Returns the character encoding for the document              |
| [createAttribute()](https://www.w3schools.com/jsref/met_document_createattribute.asp) | Creates an attribute node                                    |
| [createComment()](https://www.w3schools.com/jsref/met_document_createcomment.asp) | Creates a Comment node with the specified text               |
| [createDocumentFragment()](https://www.w3schools.com/jsref/met_document_createdocumentfragment.asp) | Creates an empty DocumentFragment node                       |
| [createElement()](https://www.w3schools.com/jsref/met_document_createelement.asp) | Creates an Element node                                      |
| [createEvent()](https://www.w3schools.com/jsref/event_createevent.asp) | Creates a new event                                          |
| [createTextNode()](https://www.w3schools.com/jsref/met_document_createtextnode.asp) | Creates a Text node                                          |
| [defaultView](https://www.w3schools.com/jsref/prop_document_defaultview.asp) | Returns the window object associated with a document, or null if none is available. |
| [designMode](https://www.w3schools.com/jsref/prop_document_designmode.asp) | Controls whether the entire document should be editable or not. |
| [doctype](https://www.w3schools.com/jsref/prop_document_doctype.asp) | Returns the Document Type Declaration associated with the document |
| [documentElement](https://www.w3schools.com/jsref/prop_document_documentelement.asp) | Returns the Document Element of the document (the <html> element) |
| [documentMode](https://www.w3schools.com/jsref/prop_doc_documentmode.asp) | Returns the mode used by the browser to render the document  |
| [documentURI](https://www.w3schools.com/jsref/prop_document_documenturi.asp) | Sets or returns the location of the document                 |
| [domain](https://www.w3schools.com/jsref/prop_doc_domain.asp) | Returns the domain name of the server that loaded the document |
| domConfig                                                    | Obsolete. Returns the DOM configuration of the document      |
| [embeds](https://www.w3schools.com/jsref/coll_doc_embeds.asp) | Returns a collection of all <embed> elements the document    |
| [execCommand()](https://www.w3schools.com/jsref/met_document_execcommand.asp) | Invokes the specified clipboard operation on the element currently having focus. |
| [forms](https://www.w3schools.com/jsref/coll_doc_forms.asp)  | Returns a collection of all <form> elements in the document  |
| [fullscreenElement](https://www.w3schools.com/jsref/prop_document_fullscreenelement.asp) | Returns the current element that is displayed in fullscreen mode |
| [fullscreenEnabled()](https://www.w3schools.com/jsref/met_document_fullscreenenabled.asp) | Returns a Boolean value indicating whether the document can be viewed in fullscreen mode |
| [getElementById()](https://www.w3schools.com/jsref/met_document_getelementbyid.asp) | Returns the element that has the ID attribute with the specified value |
| [getElementsByClassName()](https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp) | Returns a HTMLCollection containing all elements with the specified class name |
| [getElementsByName()](https://www.w3schools.com/jsref/met_doc_getelementsbyname.asp) | Returns a HTMLCollection containing all elements with a specified name |
| [getElementsByTagName()](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp) | Returns a HTMLCollection containing all elements with the specified tag name |
| [hasFocus()](https://www.w3schools.com/jsref/met_document_hasfocus.asp) | Returns a Boolean value indicating whether the document has focus |
| [head](https://www.w3schools.com/jsref/prop_doc_head.asp)    | Returns the <head> element of the document                   |
| [images](https://www.w3schools.com/jsref/coll_doc_images.asp) | Returns a collection of all <img> elements in the document   |
| [implementation](https://www.w3schools.com/jsref/prop_document_implementation.asp) | Returns the DOMImplementation object that handles this document |
| [importNode()](https://www.w3schools.com/jsref/met_document_importnode.asp) | Imports a node from another document                         |
| [inputEncoding](https://www.w3schools.com/jsref/prop_document_inputencoding.asp) | Returns the encoding, character set, used for the document   |
| [lastModified](https://www.w3schools.com/jsref/prop_doc_lastmodified.asp) | Returns the date and time the document was last modified     |
| [links](https://www.w3schools.com/jsref/coll_doc_links.asp)  | Returns a collection of all <a> and <area> elements in the document that have a href attribute |
| [normalize()](https://www.w3schools.com/jsref/met_document_normalize.asp) | Removes empty Text nodes, and joins adjacent nodes           |
| [normalizeDocument()](https://www.w3schools.com/jsref/met_document_normalizedocument.asp) | Removes empty Text nodes, and joins adjacent nodes           |
| [open()](https://www.w3schools.com/jsref/met_doc_open.asp)   | Opens an HTML output stream to collect output from document.write() |
| [querySelector()](https://www.w3schools.com/jsref/met_document_queryselector.asp) | Returns the first element that matches a specified CSS selector(s) in the document |
| [querySelectorAll()](https://www.w3schools.com/jsref/met_document_queryselectorall.asp) | Returns a static NodeList containing all elements that matches a specified CSS selector(s) in the document |
| [readyState](https://www.w3schools.com/jsref/prop_doc_readystate.asp) | Returns the (loading) status of the document                 |
| [referrer](https://www.w3schools.com/jsref/prop_doc_referrer.asp) | Returns the URL of the document that loaded the current document |
| [removeEventListener()](https://www.w3schools.com/jsref/met_document_removeeventlistener.asp) | Removes an event handler from the document (that has been attached with the [addEventListener()](https://www.w3schools.com/jsref/met_document_addeventlistener.asp) method) |
| [renameNode()](https://www.w3schools.com/jsref/met_document_renamenode.asp) | Renames the specified node                                   |
| [scripts](https://www.w3schools.com/jsref/coll_doc_scripts.asp) | Returns a collection of <script> elements in the document    |
| [strictErrorChecking](https://www.w3schools.com/jsref/prop_document_stricterrorchecking.asp) | Sets or returns whether error-checking is enforced or not    |
| [title](https://www.w3schools.com/jsref/prop_doc_title.asp)  | Sets or returns the title of the document                    |
| [URL](https://www.w3schools.com/jsref/prop_doc_url.asp)      | Returns the full URL of the HTML document                    |
| [write()](https://www.w3schools.com/jsref/met_doc_write.asp) | Writes HTML expressions or JavaScript code to a document     |
| [writeln()](https://www.w3schools.com/jsref/met_doc_writeln.asp) | Same as write(), but adds a newline character after each statement |







####  HTML document object Properties and Methods (element nodes)

- The **Element object** represents an HTML element.
- All HTML elements are element nodes
- Element objects can have **child nodes** such as text nodes, or comment nodes and attribute nodes

| Property / Method                                            | Description                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [*element*.accessKey](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_accesskey.asp.html) | Sets or returns the accesskey attribute of an element        |
| [*element*.addEventListener()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_addeventlistener.asp.html) | Attaches an event handler to the specified element           |
| [*element*.appendChild()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_appendchild.asp.html) | Adds a new child node, to an element, as the last child node |
| [*element*.attributes](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_attributes.asp.html) | Returns a NamedNodeMap of an element's attributes            |
| [*element*.blur()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_html_blur.asp.html) | Removes focus from an element                                |
| [*element*.childElementCount](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_childelementcount.asp.html) | Returns the number of child elements an element has          |
| [*element*.childNodes](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_childnodes.asp.html) | Returns a collection of an element's child nodes (including text and comment nodes) |
| [*element*.children](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_children.asp.html) | Returns a collection of an element's child element (excluding text and comment nodes) |
| [*element*.classList](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_classlist.asp.html) | Returns the class name(s) of an element                      |
| [*element*.className](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_classname.asp.html) | Sets or returns the value of the class attribute of an element |
| [*element*.click()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_html_click.asp.html) | Simulates a mouse-click on an element                        |
| [*element*.clientHeight](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_clientheight.asp.html) | Returns the height of an element, including padding          |
| [*element*.clientLeft](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_clientleft.asp.html) | Returns the width of the left border of an element           |
| [*element*.clientTop](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_clienttop.asp.html) | Returns the width of the top border of an element            |
| [*element*.clientWidth](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_clientwidth.asp.html) | Returns the width of an element, including padding           |
| [*element*.cloneNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_clonenode.asp.html) | Clones an element                                            |
| [*element*.compareDocumentPosition()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_comparedocumentposition.asp.html) | Compares the document position of two elements               |
| [*element*.contains()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_contains.asp.html) | Returns true if a node is a descendant of a node, otherwise false |
| [*element*.contentEditable](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_contenteditable.asp.html) | Sets or returns whether the content of an element is editable or not |
| [*element*.dir](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_dir.asp.html) | Sets or returns the value of the dir attribute of an element |
| [*element*.firstChild](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_firstchild.asp.html) | Returns the first child node of an element                   |
| [*element*.firstElementChild](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_firstelementchild.asp.html) | Returns the first child element of an element                |
| [*element*.focus()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_html_focus.asp.html) | Gives focus to an element                                    |
| [*element*.getAttribute()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_getattribute.asp.html) | Returns the specified attribute value of an element node     |
| [*element*.getAttributeNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_getattributenode.asp.html) | Returns the specified attribute node                         |
| [*element*.getElementsByClassName()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_getelementsbyclassname.asp.html) | Returns a collection of all child elements with the specified class name |
| [*element*.getElementsByTagName()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_getelementsbytagname.asp.html) | Returns a collection of all child elements with the specified tag name |
| *element*.getFeature()                                       | Returns an object which implements the APIs of a specified feature |
| [*element*.hasAttribute()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_hasattribute.asp.html) | Returns true if an element has the specified attribute, otherwise false |
| [*element*.hasAttributes()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_hasattributes.asp.html) | Returns true if an element has any attributes, otherwise false |
| [*element*.hasChildNodes()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_haschildnodes.asp.html) | Returns true if an element has any child nodes, otherwise false |
| [*element*.id](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_id.asp.html) | Sets or returns the value of the id attribute of an element  |
| [*element*.innerHTML](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_innerhtml.asp.html) | Sets or returns the content of an element                    |
| [*element*.insertBefore()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_insertbefore.asp.html) | Inserts a new child node before a specified, existing, child node |
| [*element*.isContentEditable](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_iscontenteditable.asp.html) | Returns true if the content of an element is editable, otherwise false |
| [*element*.isDefaultNamespace()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_isdefaultnamespace.asp.html) | Returns true if a specified namespaceURI is the default, otherwise false |
| [*element*.isEqualNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_isequalnode.asp.html) | Checks if two elements are equal                             |
| [*element*.isSameNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_issamenode.asp.html) | Checks if two elements are the same node                     |
| [*element*.isSupported()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_issupported.asp.html) | Returns true if a specified feature is supported on the element |
| [*element*.lang](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_lang.asp.html) | Sets or returns the value of the lang attribute of an element |
| [*element*.lastChild](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_lastchild.asp.html) | Returns the last child node of an element                    |
| [*element*.lastElementChild](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_lastelementchild.asp.html) | Returns the last child element of an element                 |
| [*element*.namespaceURI](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_namespaceuri.asp.html) | Returns the namespace URI of an element                      |
| [*element*.nextSibling](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_nextsibling.asp.html) | Returns the next node at the same node tree level            |
| [*element*.nextElementSibling](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_nextelementsibling.asp.html) | Returns the next element at the same node tree level         |
| [*element*.nodeName](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_nodename.asp.html) | Returns the name of a node                                   |
| [*element*.nodeType](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_nodetype.asp.html) | Returns the node type of a node                              |
| [*element*.nodeValue](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_nodevalue.asp.html) | Sets or returns the value of a node                          |
| [*element*.normalize()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_normalize.asp.html) | Joins adjacent text nodes and removes empty text nodes in an element |
| [*element*.offsetHeight](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_offsetheight.asp.html) | Returns the height of an element, including padding, border and scrollbar |
| [*element*.offsetWidth](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_offsetwidth.asp.html) | Returns the width of an element, including padding, border and scrollbar |
| [*element*.offsetLeft](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_offsetleft.asp.html) | Returns the horizontal offset position of an element         |
| [*element*.offsetParent](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_offsetparent.asp.html) | Returns the offset container of an element                   |
| [*element*.offsetTop](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_offsettop.asp.html) | Returns the vertical offset position of an element           |
| [*element*.ownerDocument](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_ownerdocument.asp.html) | Returns the root element (document object) for an element    |
| [*element*.parentNode](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_parentnode.asp.html) | Returns the parent node of an element                        |
| [*element*.parentElement](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_parentelement.asp.html) | Returns the parent element node of an element                |
| [*element*.previousSibling](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_previoussibling.asp.html) | Returns the previous node at the same node tree level        |
| [*element*.previousElementSibling](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_previouselementsibling.asp.html) | Returns the previous element at the same node tree level     |
| [*element*.querySelector()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_queryselector.asp.html) | Returns the first child element that matches a specified CSS selector(s) of an element |
| [*element*.querySelectorAll()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_queryselectorall.asp.html) | Returns all child elements that matches a specified CSS selector(s) of an element |
| [*element*.removeAttribute()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_removeattribute.asp.html) | Removes a specified attribute from an element                |
| [*element*.removeAttributeNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_removeattributenode.asp.html) | Removes a specified attribute node, and returns the removed node |
| [*element*.removeChild()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_removechild.asp.html) | Removes a child node from an element                         |
| [*element*.replaceChild()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_node_replacechild.asp.html) | Replaces a child node in an element                          |
| [*element*.removeEventListener()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_removeeventlistener.asp.html) | Removes an event handler that has been attached with the addEventListener() method |
| [*element*.scrollHeight](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_scrollheight.asp.html) | Returns the entire height of an element, including padding   |
| [*element*.scrollLeft](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_scrollleft.asp.html) | Sets or returns the number of pixels an element's content is scrolled horizontally |
| [*element*.scrollTop](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_scrolltop.asp.html) | Sets or returns the number of pixels an element's content is scrolled vertically |
| [*element*.scrollWidth](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_scrollwidth.asp.html) | Returns the entire width of an element, including padding    |
| [*element*.setAttribute()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_setattribute.asp.html) | Sets or changes the specified attribute, to the specified value |
| [*element*.setAttributeNode()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_element_setattributenode.asp.html) | Sets or changes the specified attribute node                 |
| [*element*.style](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_style.asp.html) | Sets or returns the value of the style attribute of an element |
| [*element*.tabIndex](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_tabindex.asp.html) | Sets or returns the value of the tabindex attribute of an element |
| [*element*.tagName](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_element_tagname.asp.html) | Returns the tag name of an element                           |
| [*element*.textContent](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_node_textcontent.asp.html) | Sets or returns the textual content of a node and its descendants |
| [*element*.title](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_html_title.asp.html) | Sets or returns the value of the title attribute of an element |
| *element*.toString()                                         | Converts an element to a string                              |
|                                                              |                                                              |
| [*nodelist*.item()](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/met_nodelist_item.asp.html) | Returns the node at the specified index in a NodeList        |
| [*nodelist*.length](http://www-db.deis.unibo.it/courses/TW/DOCS/w3schools/jsref/prop_nodelist_length.asp.html) | Returns the number of nodes in a NodeList                    |







### Create custom DOM  property 

- DOM nodes are regular JavaScript objects. So we can add custom properties in DOM 

```js
// custom  property with string
document.body.myCustomPro = "created By Shine Shine"; 
// custom  property with object
document.body.customProperties = {
  MySite: 'shine shine',
  MyDomain: 'shineshine.com'
};
console.log(document.body.customProperties);
document.write(document.body.myCustomPro);

```





### Create custom DOM    method 

- DOM nodes are regular JavaScript objects. So we can add custom method in DOM 

```js
document.body.siteTitle = function() {
   document.write(document.title)
};
document.body.siteTitle() // call method
// Add method for all elements with Element.prototype(built-in prototypes)  
Element.prototype.siteTitle = function() {
    document.write(document.title)
    console.log(this);
};

document.documentElement.siteTitle(); 
document.body.siteTitle(); 

```

