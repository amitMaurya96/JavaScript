/*
Events

Events in JavaScript:
    -The changes in the state of an object .
    -fired to notify code of interesting changes that may affect code execution.
    -An event is an action or occurrence that happens in the web page, such as a user clicking a button, hovering over an element, or submitting a form. 
    -JavaScript allows you to handle these events and execute specific code in response to them.
    E.g.
        Mouse events: click, dblclick, mouseover, mouseout, mousedown, mouseup, etc.
        Keyboard events: keydown, keyup, keypress, etc.
        Form events: submit, change, focus, blur, etc.
        Window events: load, resize, scroll, etc.
        Print events: beforeprint, afterprint, etc.
        Media events: play, pause, ended, etc.
        Touch events: touchstart, touchmove, touchend, etc.
        Drag and Drop events: dragstart, dragover, drop, etc.
        Clipboard events: copy, cut, paste, etc.
        etc.

Event Handling in JavaScript:(JS handler > inline handler):-
    - One event for a node can have only one handler(the last one will be applied) in traditional event handling, but can have multiple handlers in event listeners.
    -

    - Inline Event Handling: This involves adding event attributes directly to HTML elements. For example:
        <button onclick="alert('Button clicked!')">Click Me</button>

- Traditional Event Handling: This involves assigning event handler functions to properties of DOM elements. For example:
        node.eventName = function() {
            // code to be executed when the event occurs
        }
        or 
        node.eventName = () => {
            // code to be executed when the event occurs
        }

- Event Listeners: This involves using JavaScript to attach event listeners to elements. For example:
        let button = document.getElementById('myButton');
        button.addEventListener('click', function() {
            alert('Button clicked!');
            // This is callBack function that will be executed when the click event occurs on the button element.
        });

    - Event listeners can be added using the addEventListener() method, which allows you to specify the event type and the function to be executed when the event occurs.
        node.addEventListener('eventName', function() {
            // code to be executed when the event occurs
        });

        node.addEventListener('eventName', () => {
            // code to be executed when the event occurs
        });


Event Object:
    - When an event occurs, an event object is created and passed to the event handler function. 
    - The event object contains information about the event, such as the type of event, the target element, and any additional data related to the event.
    Syntax:
        node.addEventListener('eventName', function(event) {
            // code to be executed when the event occurs
            // you can access event properties using the 'event' parameter
        });
        or

        node.eventName = function(event) {
            // code to be executed when the event occurs
            // you can access event properties using the 'event' parameter
        }
        or
        node.eventName = (event) => {
            // code to be executed when the event occurs
            // you can access event properties using the 'event' parameter
            console.log(event); // This will log the event object to the console, allowing you to explore its properties and methods.   
                -type and target are the most commonly used properties of the event object.
        }


Removing Event Listeners:
    - To remove an event listener, you can use the removeEventListener() method. 
    - You need to provide the same event type and the same function reference that was used to add the event listener.
        const functionReference = function() {
            // code to be executed when the event occurs
        };

        node.removeEventListener('eventName', functionReference);
        







Toggle Means to switch between two states.
    - For example, you can use the toggle method to switch between adding and removing a class from an element, or to switch between showing and hiding an element.
    - or Switch to dark/light mode by toggling a class on the body element.

*/