/*
Array:- 
    An array is a data structure that can hold multiple values at once. 
    It is a collection of elements, where each element can be of 'any data type' (e.g., numbers, strings, objects, etc.). Arrays are ordered, meaning that the elements are stored in a specific sequence and can be accessed using their index.
    In JavaScript, arrays are created using square brackets [] and can contain a list of values separated by commas.
    typeof Array - returns "object" because arrays are a type of object in JavaScript. 
    Mutable - Arrays can be modified after they are created, meaning you can add, remove, or change elements in the array.
    For example:
        let myArray = [1, "Hello", true, { name: "Alice" }, [2, 3, 4]];
        console.log(typeof myArray); // Output: "object"
        console.log(myArray.length); // Output: 5
        console.log(myArray[0]); // Output: 1
        console.log(myArray[1]); // Output: "Hello"
        console.log(myArray[2] = false); // Output: false



Array Methods:
    Arrays have various built-in methods that allow you to manipulate and work with the data they contain. Some common array methods include:

1. push(): Adds one or more elements to the end of an array and "returns the new length" of the array.
   Example:
        let arr = [1, 2, 3];
        arr.push(4);
        console.log(arr); // Output: [1, 2, 3, 4]

2. pop(): Removes the last element from an array and "returns that element".
    Example:
        let arr = [1, 2, 3];
        let lastElement = arr.pop();   // store the popped element in a variable
        console.log(lastElement); // Output: 3
        console.log(arr); // Output: [1, 2]

3. shift(): Removes the first element from an array and returns that element.
    Example:
        let arr = [1, 2, 3];
        let firstElement = arr.shift();
        console.log(firstElement); // Output: 1
        console.log(arr); // Output: [2, 3]

4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
    Example:
        let arr = [1, 2, 3];
        arr.unshift(0);
        console.log(arr); // Output: [0, 1, 2, 3]

5. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
    Example:
        let arr = [1, 2, 3, 2];
        console.log(arr.indexOf(2)); // Output: 1
        console.log(arr.indexOf(4)); // Output: -1

6. slice(): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
    slice(startIndex, endIndex) - startIndex is inclusive and endIndex is exclusive.
    slice(startIndex) - extracts from startIndex to the end of the array.
    slice(-n) - extracts the last n elements of the array.
    slice(-n, -m) - extracts from the nth last element to the mth last element.
    Example:
        let arr = [1, 2, 3, 4, 5];
        console.log(arr.slice(0, 3)); // Output: [1, 2, 3]
        console.log(arr.slice(2)); // Output: [3, 4, 5]
        console.log(arr.slice(-2)); // Output: [4, 5]
        console.log(arr.slice(-4, -1)); // Output: [2, 3, 4]

7. splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    splice(startIndex, deleteCount, item1, item2, ...) - startIndex is the index at which to start changing the array, deleteCount is the number of elements to remove, and item1, item2, ... are the elements to add to the array.
    Example:
        let arr = [1, 2, 3, 4, 5];
        arr.splice(2, 1); // Removes 1 element at index 2
        console.log(arr); // Output: [1, 2, 4, 5]
        arr.splice(1, 0, 10); // Adds 10 at index 1 without removing any element
        console.log(arr); // Output: [1, 10, 2, 4, 5]
        arr.splice(3, 1, 20, 30); // Replaces 1 element at index 3 with 20 and 30
        console.log(arr); // Output: [1, 10, 2, 20, 30, 5]




*/











