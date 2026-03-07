/*
Callback Function:-
    A function to execute for each elements in array.
    A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. 
    It allows you to execute code asynchronously or after a certain event occurs.
    If any element in array is empty(sparse arrays) then callback function is not executed for that element. e.g. [1,2,(empty 2 places), ,4] callback function is not executed for 3rd element.

    e.g. 
    function fetchData() {
        console.log("Fetching data...");
    }

    function processData(fetchData ) {
        console.log("Processing data...");
        fetchData(); // Call the callback function
    }
    processData(fetchData); // Output: Processing data... Fetching data...




Function:- 
    A function is a block of code designed to perform a particular task. 
    It is executed when "something" invokes it (calls it). Functions are reusable, which means you can define a function once and use it multiple times in your code.
    Reduces code repetition and makes it easier to maintain and debug.


    Syntax of a function:
        function functionName(parameters(with comma)-optional) {
            // code to be executed
        }   
            
Example of a function:  

Function Declaration:=
    function greet(name) {
        console.log("Hello, " + name + "!");
        return "Greeting sent to " + name;
    }

Calling the function: 
    let funCall = greet("Alice"); // Output: Hello, Alice!     
    console.log(funCall); // Output: Greeting sent to Alice



Function Expression:=
    const greet = function(name) {
        console.log("Hello, " + name + "!");
        return "Greeting sent to " + name;
    };

Calling the function:
    let funCall = greet("Bob"); // Output: Hello, Bob!
    console.log(funCall); // Output: Greeting sent to Bob



Arrow Function:=
Syntax:
    const functionName = (parameters(with comma)-optional) => {
        // code to be executed
    };

Example:
    const greet = (name) => {
        console.log("Hello, " + name + "!");
        return "Greeting sent to " + name;
    };
Calling the function:
    let funCall = greet("Charlie"); // Output: Hello, Charlie!
    console.log(funCall); // Output: Greeting sent to Charlie 
     



For-each Loop with Arrays:=

For-each loop is a method that allows you to iterate over each element in an array and execute a provided function once for each element.
It provides each element of the array to the callback function, which can perform operations on it.
Can't break/continue in for-each loop.
Expects synchronous functions, don't wait for promises returned by asynchronous callback functions to settle before moving to the next iteration.
No return value, always returns undefined. Can't use return to exit the loop or skip iterations.



    const numbers = [1, 2, 3, 4, 5];
    Syntax:
    array.forEach(callbackFunction(currentValue, index, array) {
        // code to be executed for each element
        // currentValue: The current element being processed in the array.
        // index: The index of the current element being processed in the array.
        // array: The array that forEach is being applied to.
    }, thisArg);

Example:
    numbers.forEach(function(number) {
        console.log(number * 2); // Output: 2, 4, 6, 8, 10
    }); 
    
    




Higher-Order Functions:-
    A higher-order function is a function that takes one or more functions as arguments, returns a function as its result, or both. 
    Higher-order functions are a fundamental concept in functional programming and are used to create more abstract and reusable code.
    e.g.
    function higherOrderFunction(callback) {
        console.log("This is a higher-order function.");
        callback(); // Call the callback function
    } 
    function callbackFunction() {
        console.log("This is a callback function.");
    }
    higherOrderFunction(callbackFunction); // Output: This is a higher-order function. This is a callback function.





*/







