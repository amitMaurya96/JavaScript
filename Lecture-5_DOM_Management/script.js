/*
DOM(Document Oriented Model):=
    - Document: Web Page
    - Object: HTML Elements
    - Model: Representation of the Web Page in the form of a Tree Structure
DOM is a programming interface for HTML and XML documents. 
It represents the page so that programs can change the document structure, style, and content. 
The DOM represents the document as a tree of nodes, where each node is an object representing a part of the document.


DOM Tree Structure:(each block = node = an object)
    Window -> Document -> HTML -> Head, Body -> Meta, Title, H1, P, etc.

Window Object: 
    The global object that represents the browser window. 
    It provides methods and properties to interact with the browser, such as opening new windows, setting timeouts, and handling events.


Document Object: 
    Represents the web page loaded in the browser. 
    It provides methods and properties to access and manipulate the content of the page, such as getting elements by ID, class, or tag name, creating new elements, and modifying existing ones.

console.dir(document); // This will display the document object in the console, allowing you to explore its properties and methods.
console.log(document.body); // This will log the body element of the document to the console.



Accessing and Modifying the Document Object existing elements:
    document.getElementById('elementId');          // This method returns the element with the specified ID.
    document.getElementsByClassName('className');  // This method returns a collection of elements with the specified class name.
    document.getElementsByTagName('tagName');      // This method returns a collection of elements with the specified tag name.
    document.querySelector('selector');            // This method returns the first element that matches the specified CSS selector.
    document.querySelectorAll('selector');         // This method returns a collection of all elements that match the specified CSS selector.
        selector can be any valid CSS selector, such as '#id', '.class', 'tag', etc.

 
    let elem = document.getElementById('myElement');

    elem.tagName; // This will return the tag name of the element with the ID 'myElement'.
    elem.innerText; // This will return the text content of the element with the ID 'myElement', including any HTML tags(children nodes).
    elem.innerHTML; // This will return the HTML content inside the element with the ID 'myElement'.
    elem.textContent; // This will return the text content of the element with the ID 'myElement', without any HTML tags.

    elem.firstChild; // This will return the first child node of the element with the ID 'myElement'.
    elem.lastChild; // This will return the last child node of the element with the ID 'myElement'.
    elem.parentNode; // This will return the parent node of the element with the ID 'myElement'.
    elem.children; // This will return a collection of the child elements of the element with the ID 'myElement', excluding text nodes and comment nodes.
    elem.children[0]; // This will return the first child element of the element with the ID 'myElement'.

    elem.childNodes; // This will return a collection of all child nodes of the element with the ID 'myElement', including text nodes and comment nodes.
    elem.childNodes.length; // This will return the number of child nodes of the element with the ID 'myElement', including text nodes and comment nodes.
    elem.childElementCount; // This will return the number of child elements of the element with the ID 'myElement', excluding text nodes and comment nodes.

    elem.nextSibling; // This will return the next sibling node of the element with the ID 'myElement'.
    elem.previousSibling; // This will return the previous sibling node of the element with the ID 'myElement'.
    elem.parentElement; // This will return the parent element of the element with the ID 'myElement', or null if the parent is not an element.
    elem.nextElementSibling; // This will return the next sibling element of the element with the ID 'myElement', or null if there is no next sibling element.
    elem.previousElementSibling; // This will return the previous sibling element of the element with the ID 'myElement', or null if there is no previous sibling element.

    elem.classList; // This will return a DOMTokenList of the class names of the element with the ID 'myElement'.
    elem.classList.add('newClass'); // This will add the class 'newClass' along with the existing ones to the element with the ID 'myElement'.
    elem.classList.remove('existingClass'); // This will remove the class 'existingClass' from the element with the ID 'myElement'.
    elem.classList.toggle('toggleClass'); // This will toggle the class 'toggleClass' on the element with the ID 'myElement'. If the class is present, it will be removed; if it is not present, it will be added.
    elem.classList.contains('className'); // This will return true if the element with the ID 'myElement' has the class 'className', and false otherwise.
   
    elem.getAttribute('class'); // This will return the value of the 'class' attribute of the element with the ID 'myElement'.
    elem.setAttribute('class', 'newClass'); // This will set the value of the 'class' attribute of the element with the ID 'myElement' to 'newClass'.
    elem.removeAttribute('class'); // This will remove the 'class' attribute from the element with the ID 'myElement'.
    elem.style.color = 'red'; // This will change the text color of the element with the ID 'myElement' to red.
      


Creating and Adding New Elements to the Document:
    let newElement = document.createElement('div'); // This will create a new div element and store it in the variable newElement.
    newElement.innerText = 'Hello, World!'; // This will set the text content of the new div element to 'Hello, World!'.
   
    node.append(newElement); // This will add the new div element as the last child of the body element, making it visible at the end of the web page(node).
    node.prepend(newElement); // This will add the new div element as the first child of the body element, making it visible at the top of the web page(node).
    node.insertBefore(newElement, referenceElement); // This will insert the new div element before and outside the referenceElement in the body element. The referenceElement is an existing child of the body element that you want to insert the new element before.
    node.after(newElement, referenceElement); // This will insert the new div element after and outside the referenceElement in the body element. The referenceElement is an existing child of the body element that you want to insert the new element after.
    
    node.appendChild(newElement); // This will add the new div element as the last child of the body element, making it visible at the end of the web page(node).    
    node.prependChild(newElement); // This will add the new div element as the first child of the body element, making it visible at the top of the web page(node).
    node.replaceChild(newElement, oldElement); // This will replace the oldElement with the newElement in the body element. The oldElement is an existing child of the body element that you want to replace with the new element.
    node.removeChild(element); // This will remove the specified element from the body element. The element is an existing child of the body element that you want to remove from the web page.
  
















*/