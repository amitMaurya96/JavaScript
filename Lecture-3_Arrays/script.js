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
        arr.unshift(-2, -1);
        console.log(arr); // Output: [-2, -1, 0, 1, 2, 3]

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
        let arrcut = arr.splice(4); // Removes all elements from index 4 to the end of the array
        console.log(arr); // Output: [1, 10, 2, 20]
        console.log(arrcut); // Output: [30, 5]

8. toString(): Returns a string representing the specified array and its elements.
    Example:
        let arr = [1, 2, 3];
        console.log(arr.toString()); // Output: "1,2,3"

9. join(): Joins all elements of an array into a string and returns this string.
    join(separator) - joins the elements of the array into a string using the specified separator. If no separator is provided, it defaults to a comma (,).
    Example:
        let arr = [1, 2, 3];
        console.log(arr.join()); // Output: "1,2,3"
        console.log(arr.join(" - ")); // Output: "1 - 2 - 3"

10. concat(): Merges two or more arrays and returns a new array.
    Example:
        let arr = [1, 2];
        let arr1 = [1, 2];
        let arr2 = [3, 4];
        let arr3 = arr1.concat(arr2, arr); // Merges arr1, arr2, and arr into a new array
        console.log(arr3); // Output: [1, 2, 3, 4, 1, 2]

11. includes(): Determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    Example:
        let arr = [1, 2, 3];
        console.log(arr.includes(2)); // Output: true
        console.log(arr.includes(4)); // Output: false

12. reverse(): Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
    Example:
        let arr = [1, 2, 3];
        arr.reverse();
        console.log(arr); // Output: [3, 2, 1]

13. sort(): Sorts the elements of an array in place and returns the sorted array.
    sort() - sorts the elements of the array in ascending order by default.
    sort(compareFunction) - sorts the elements of the array according to the return value of the compareFunction.   
    Example:
        let arr = [3, 1, 4, 1, 5];
        arr.sort();
        console.log(arr); // Output: [1, 1, 3, 4, 5]
        arr.sort((a, b) => b - a); // Sorts the array in descending order
        console.log(arr); // Output: [5, 4, 3, 1, 1]

14. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
    Syntax:
        array.map(callbackFunction(currentValue, index, array) {
            // code to be executed for each element
            // currentValue: The current element being processed in the array.
            // index: The index of the current element being processed in the array.
            // array: The array that map is being applied to.
        });    

    Example:
        let arr = [1, 2, 3];
        let squaredArr = arr.map(x => x * x);
        console.log(squaredArr); // Output: [1, 4, 9]

15. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
    Example:
        let arr = [1, 2, 3, 4, 5];
        let evenArr = arr.filter(x => x % 2 === 0);
        console.log(evenArr); // Output: [2, 4]

16. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
    Example:
        let arr = [1, 2, 3, 4];
        let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        console.log(sum); // Output: 10
        let sum2 = arr.reduce((accumulator, currentValue ) => accumulator + currentValue, 10);
        // Accumulator starts with arr[0] (if initial value is not provided) and currentValue starts with arr[1]. In this case, we provided an initial value of 0, so accumulator starts with 0 and currentValue starts with arr[0].
        console.log(sum2); // Output: 20
        here, the reduce method takes a callback function that is applied to each element of the array. The callback function takes two parameters: the accumulator (which accumulates the result) and the currentValue (the current element being processed). The second argument to reduce (0 in this case) is the initial value of the accumulator.
        the 10 in the second example is the initial value of the accumulator, so the sum starts with 10 and then adds each element of the array to it. and currentValue starts with arr[0] which is 1, so the calculation goes like this: 10 + 1 = 11, then 11 + 2 = 13, then 13 + 3 = 16, and finally 16 + 4 = 20.

17. find(): Returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
    Example:
        let arr = [1, 2, 3, 4];
        let found = arr.find(x => x > 2);
        console.log(found); // Output: 3

18. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function. Otherwise, -1 is returned.
    Example:
        let arr = [1, 2, 3, 4];
        let foundIndex = arr.findIndex(x => x > 2);
        console.log(foundIndex); // Output: 2

19. forEach(): Executes a provided function once for each array element.
    Example:
        let arr = [1, 2, 3];
        arr.forEach(x => console.log(x * 2)); // Output: 2, 4, 6
        
20. some(): Tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
    Example:
        let arr = [1, 2, 3, 4];
        let hasEven = arr.some(x => x % 2 === 0);
        console.log(hasEven); // Output: true

21. every(): Tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    Example:
        let arr = [1, 2, 3, 4];
        let allEven = arr.every(x => x % 2 === 0);
        console.log(allEven); // Output: false

22. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    flat(depth) - depth is the level of nesting to flatten. If not specified, it defaults to 1.
    Example:
        let arr = [1, [2, [3, 4]], 5];
        console.log(arr.flat()); // Output: [1, 2, [3, 4], 5]
        console.log(arr.flat(2)); // Output: [1, 2, 3, 4, 5]
        console.log(arr.flat(Infinity)); // Output: [1, 2, 3, 4, 5]

23. flatMap(): First maps each element using a mapping function, then flattens the result into a new array. It is identical to a map followed by a flat of depth 1.
    Example:
        let arr = [1, 2, 3];
        let flatMappedArr = arr.flatMap(x => [x, x * 2]);
        console.log(flatMappedArr); // Output: [1, 2, 2, 4, 3, 6]

24. fill(): Changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
    fill(value, startIndex, endIndex) - value is the value to fill the array with, startIndex is the index to start filling (inclusive), and endIndex is the index to stop filling (exclusive).
    Example:
        let arr = [1, 2, 3, 4, 5];
        arr.fill(0);
        console.log(arr); // Output: [0, 0, 0, 0, 0]
        arr.fill(1, 0, 3);
        console.log(arr); // Output: [1, 1, 1, 0, 0]

25. copyWithin(): Copies a sequence of array elements within the array to the position starting at target.
    copyWithin(target, start, end) - target is the index at which to copy the sequence to, start is the index at which to start copying (inclusive), and end is the index at which to stop copying (exclusive).
    Example:
        let arr = [1, 2, 3, 4, 5];
        arr.copyWithin(0, 3);
        console.log(arr); // Output: [4, 5, 3, 4, 5]

26. keys(): Returns a new Array Iterator object that contains the keys for each index in the array.
    Example:
        let arr = ['a', 'b', 'c'];
        let keys = arr.keys();
        console.log(keys.next().value); // Output: 0
        console.log(keys.next().value); // Output: 1
        console.log(keys.next().value); // Output: 2

27. values(): Returns a new Array Iterator object that contains the values for each index in the array.
    Example:
        let arr = ['a', 'b', 'c'];
        let values = arr.values();
        console.log(values.next().value); // Output: 'a'
        console.log(values.next().value); // Output: 'b'
        console.log(values.next().value); // Output: 'c'

28. entries(): Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
    Example:
        let arr = ['a', 'b', 'c'];
        let entries = arr.entries();
        console.log(entries.next().value);   // Output: [0, 'a']
        console.log(entries.next().value);   // Output: [1, 'b']
        console.log(entries.next().value);   // Output: [2, 'c'] 

29. from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.
    Example:
        let str = "Hello";
        let arr = Array.from(str);
        console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o']

30. of(): Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
    Example:
        let arr = Array.of(1, 'Hello', true);
        console.log(arr); // Output: [1, 'Hello', true]

31. isArray(): Determines whether the passed value is an Array.
    Example:
        console.log(Array.isArray([1, 2, 3])); // Output: true
        console.log(Array.isArray("Hello")); // Output: false
         
32. length: The length property of an array returns the number of elements in that array.
    Example:
        let arr = [1, 2, 3, 4, 5];
        console.log(arr.length); // Output: 5

33. Array Destructuring: Array destructuring is a convenient way of extracting values from arrays and assigning them to variables.
    Example:
        let arr = [1, 2, 3];
        let [a, b, c] = arr;
        console.log(a); // Output: 1
        console.log(b); // Output: 2
        console.log(c); // Output: 3    

34. Spread Operator: The spread operator (...) allows an iterable such as an array to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected.
    Example:
        let arr1 = [1, 2, 3];
        let arr2 = [4, 5, 6];
        let combinedArr = [...arr1, ...arr2];
        console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

35. Array.from(): Creates a new, shallow-copied Array instance from an array-like or iterable object.
    Example:
        let str = "Hello";
        let arr = Array.from(str);
        console.log(arr); // Output: ['H', 'e', 'l', 'l', 'o']
        





*/











