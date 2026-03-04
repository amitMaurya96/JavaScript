// /*

// Types Of Variables:-
//     1. var: It is function-scoped and can be redeclared and updated. It is hoisted to the top of its scope but not initialized until its declaration is evaluated.
//     2. let: It is block-scoped and can be updated but not redeclared. It is hoisted to the top of its block but not initialized until its declaration is evaluated.
//     3. const: It is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration. It is hoisted to the top of its block but not initialized until its declaration is evaluated.  

// Data Types in JavaScript:-
//     1. Primitive Data Types: These include string, number, boolean, null, undefined, and symbol. They are immutable and stored directly in the variable.
//     2. Non-Primitive Data Types: These include objects, arrays, and functions. They are mutable and stored as references in the variable.

//         Number: It represents both integer and floating-point numbers. It can also represent special values like NaN (Not a Number) and Infinity.
//         String: It represents a sequence of characters enclosed in single quotes, double quotes, or backticks. It can include letters, numbers, and special characters.
//         Boolean: It represents a logical entity that can have two values: true or false.
//         Null: It represents the intentional absence of any object value. It is a primitive value that represents the null or empty value.
//         Undefined: It represents a variable that has been declared but has not been assigned a value. It is a primitive value that indicates the absence of a value.
//         Symbol: It represents a unique and immutable identifier. It is often used to create unique property keys for objects.


//  */

// // console.log(userEmail); // Can't access userEmail before initialization
// // console.log(userName); // Can't access userEmail before initialization
// console.log(userAge); // Undefined because of hoisting
// // console.log(userCity); // Not defined

// const userName = "John";
// let userEmail = "abc123@gmail.com";
// var userAge = 30;
// userCity = "New York";
// console.log(userName, userEmail, userAge, userCity);

// //                      Modification of variables:- 
// // userName = "Alice"; // This will cause an error because userName is a constant
// userEmail = "fif!22@gmail.com";
// userAge = 31;
// userCity = "Los Angeles";
// // console.log(userName, userEmail, userAge, userCity);
// // console.table({ userName, userEmail, userAge, userCity });
// // console.table([userName, userEmail, userAge, userCity ]);


// console.log(typeof userName); // string
// console.log(typeof null); // object (this is a known quirk in JavaScript)
// console.log(typeof undefined); // undefined
// console.log(typeof (42)); // number
// console.log(typeof true); // boolean
// console.log(typeof Symbol("id")); // symbol
// console.log(typeof { name: "Alice", age: 30 }); // object
// console.log(typeof [1, 2, 3]); // object (arrays are a type of object in JavaScript)
// console.log(typeof function() {}); // function (functions are a special type of object in JavaScript)
// console.log(typeof NaN); // number (NaN is considered a number in JavaScript)




/*
Javascript Basics:-
    Dynamic         : Variables can hold any type of data and can change type at runtime
    Interpreted     : JavaScript code is executed line by line by the browser's JavaScript engine without the need for prior compilation
    High-Level      : JavaScript abstracts away complex details of the underlying hardware and provides a more human-readable syntax, making it easier for developers to write and understand code
    Single-Threaded : JavaScript executes code in a single thread, meaning it can only do one thing at a time. However, it uses an event loop and asynchronous programming to handle tasks without blocking the main thread. 
    Prototype-Based : JavaScript uses prototypes for inheritance, allowing objects to inherit properties and methods from other objects. This is different from class-based inheritance used in languages like Java or C++.
    Multi-Paradigm Programming Language : JavaScript supports multiple programming paradigms, including procedural, object-oriented, and functional programming. This flexibility allows developers to choose the style that best suits their needs and preferences.


Variables :- 
    Containers to hold data values
    Case sensitive, must start with a letter, underscore, or dollar sign, and cannot be a reserved keyword. 
    Using var, let, or const to declare variables.

Data Types in JavaScript:- 
    Primitive Data Types: string, number, boolean, null, undefined, symbol, and BigInt(11.2024n)
    Non-Primitive Data Types: objects, arrays, functions

Let, Var, and Const:-
    var  : global/function-scoped, can be redeclared and updated, hoisted but not initialized until declaration is evaluated
    let  : block-scoped, can be updated but not redeclared, hoisted but not initialized until declaration is evaluated
    const: block-scoped, cannot be updated or redeclared, must be initialized at declaration, hoisted but not initialized until declaration is evaluated

Operators:-
    Arithmetic Operators: +, -, *, /, %, ++, --
    Assignment Operators: =, +=, -=, *=, /=, %=
    Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
    Logical Operators: &&, ||, !
    Bitwise Operators: &, |, ^, ~, <<, >>, >>>
    Ternary Operator: condition ? expressionIfTrue : expressionIfFalse


*/
// Var : 
    console.log(a);  // Undefined  (a is hoisted at the top and initialized with undefined)
    var a;
    console.log(a);  // Undefined  (a is hoisted at the top and initialized with undefined)
    a = true;        // Allowed Updation
    var a = "Amit";  // Allowed redeclaration

    {
        var b = 1;   // Defined within block 
    }
    console.log(b);  // Global Scoped 


// Let :
    // console.log(c);  // Can't access c before initialization (c is hoisted but not initialized) => ReferenceError
    let c;
    console.log(c);  // Undefined (c is hoisted at the top of its block and initialized with undefined)
    // let c = true;  Error: Can't be redeclared 
    c ="faff ";      //  Allowed updation
    {
        let d = 4;
    }
    // console.log(d);  // ReferenceError: d is not defined (d is block-scoped => not defined outside the block)


// Const :
    // console.log(e);  // Can't access e before initialization (e is hoisted but not initialized) => ReferenceError
    const e = 3.14;     // Must be initialized at the time of declaratio
    // const e = 2.71;  // Error: Can't be redeclared
    // e = 2.71;        // Error: Can't be updated
    {   
        const f = "Hello"; 
    }
    // console.log(f);  // ReferenceError: f is not defined (f is block-scoped => not defined outside the block)


// Operators :
    let x = 5;
    let y = 10; 

    // Arithmetic Operators
    console.log(x + y);  // 15
    console.log(x - y);  // -5
    console.log(x * y);  // 50 
    console.log(x / y);  // 0.5
    console.log(x % y);  // 5 - modulus operator gives the remainder of the division
    console.log(x++);             // 5 & x becomes 6
    console.log(++x);             // 7 (x is incremented before being logged)
    console.log(y--);             // 10 & y becomes 9
    console.log(--y);             // 8 (y is decremented before being logged)   
    console.log(x**2);            // 49 (x raised to the power of 2)
    
    // Assignment Operators
    x += 2;          // x becomes 9
    y *= 3;          // y becomes 24
    console.log(x);  // 9
    console.log(y);  // 24  

    // Comparison Operators
    console.log(x == 8);  // false (loose equality, checks value after type coercion)
    console.log(x === 8);   // false (strict equality, checks value and type)
    console.log(x != 10);   // false (loose inequality, checks value after type coercion)
    console.log(x !== 10);  // false (strict inequality, checks value and type)
    console.log(x > 5);   // true
    console.log(x < 10);    // true
    console.log(x >= 8);  // true
    console.log(x <= 7);  // false 

    // Logical Operators
    console.log(x > 5 && y < 30);  // true (both conditions are true) :AND(&&) operator returns true if both operands are true
    console.log(x < 5 || y > 20);   // true (one of the conditions is true) :OR(||) operator returns true if at least one of the operands is true
    console.log(!(x > 5));  // false (negation of true is false) :NOT(!) operator returns true if the operand is false and false if the operand is true
    console.log((x > 5) ^ (y < 30)); // false (both conditions are true, so the result is false) :XOR(^) operator returns true if exactly one of the operands is true, and false otherwise; Both condition same(true or false) => false, One condition true => true,
    
    // Ternary Operator
    let result = (x > 5) ? "Greater than 5(true value)" : "Less than or equal to 5(false value)";
    console.log(result);  // "Greater than 5 (true value)" (since x is 9, which is greater than 5)



// Conditional Statements : if, if-else, if-else-if, switch-case
    let age = 25;
    if (age < 18) {
        console.log("You are a minor.");
    }else if (age >= 18 && age < 65) {
        console.log("You are an adult.");
    }else {
        console.log("You are a senior.");
    } 
    
    
    switch (age) {
        case 0:
            console.log("You are a newborn.");
            break;
        case 1:
            console.log("You are an infant.");
            break;  
        case 2:
            console.log("You are a toddler.");
            break;  
        case 3:
            console.log("You are a preschooler.");
            break;
        case 4:
            console.log("You are a kindergartener.");
            break;
        case 5:
            console.log("You are a kindergartener.");
            break;
        default:
            console.log("You are older than 5.");
    }


// Loops : for, while, do-while
    // For Loop(Initialization; Condition; Increment/Decrement) : The for loop consists of three parts: initialization, condition, and increment/decrement. The initialization is executed once at the beginning of the loop, the condition is evaluated before each iteration, and the increment/decrement is executed after each iteration. The loop continues to execute as long as the condition is true.
    for (let i = 0; i < 5; i++) {
        console.log(i);  // Logs numbers from 0 to 4
    }


    // For of Loop : The for-of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It allows you to access the values of the iterable directly without needing to use an index or key.
    const array = [10, 20, 30, 40, 50];
    for (const element of array) {
        console.log(element);  // Logs each element of the array (10, 20, 30, 40, 50)
    }

    // For in Loop : The for-in loop is used to iterate over the enumerable properties of an object. It allows you to access the keys of the object directly.
    const person = { name: "Alice", age: 30, city: "New York" };
    for (const key in person) {
        console.log(key);  // Logs each key of the person object (name, age, city)
        console.log(person[key]);  // Logs the corresponding value of each key (Alice, 30, New York)
    }

    for(const index in array) {
        console.log(index);  // Logs the index of each element in the array (0, 1, 2, 3, 4)
        console.log(array[index]);  // Logs the corresponding value of each index in the array (10, 20, 30, 40, 50)
    }

    // While Loop(Condition) : The while loop continues to execute as long as the specified condition is true. The condition is evaluated before the execution of the loop body, so if the condition is false at the beginning, the loop body will not be executed at all.
    let j = 0;  
    while (j < 5) {
        console.log(j);  // Logs numbers from 0 to 4
        j++;
    }

    // Do-While(condition) Loop : The do-while loop is similar to the while loop, but it guarantees that the loop body will be executed at least once, even if the condition is false at the beginning. The condition is evaluated after the loop body is executed.
    let k = 0;
    do {
        console.log(k); // Logs numbers from 0 to 4
        k++;  
    } while (k < 5);  // Logs numbers from 0 to 4 (the loop will execute at least once even if the condition is false)






// Typeof Operator :
    console.log(typeof x);  // number
    console.log(typeof "Hello");  // string
    console.log(typeof true);  // boolean
    console.log(typeof undefined);      // undefined    
    console.log(typeof null);           // object (this is a known quirk in JavaScript) 
    console.log(typeof Symbol("id"));  // symbol    
    console.log(typeof { name: "Alice", age: 30 });  // object
    console.log(typeof [1, 2, 3]);  // object (arrays are a type of object in JavaScript)   
    console.log(typeof function() {});  // function (functions are a special type of object in JavaScript)  
    console.log(typeof NaN); // number (NaN is considered a number in JavaScript)
    

// Console Methods :
    console.log("This is a log message.");
    console.error("This is an error message.");
    console.warn("This is a warning message.");
    console.info("This is an informational message.");
    console.table({ name: "Alice", age: 30, city: "New York" }); // Displays an object in a table format
    console.table([ "Alice", 30, "New York" ]); // Displays an array in a table format
    













