/* 
String:- Sequence of characters enclosed in single quotes(''), double quotes(""), or backticks/template Literals(``).
        Always Immutable:- Once a string is created, it cannot be changed. Any operation that modifies a string will create a new string instead.
    Example:
        let name = "John";
        let greeting = 'Hello, ' + name + '!';
        let message = `Welcome, ${name}!`;

String Interpolation:- The process of embedding "expressions" within string literals using template literals (backticks).
    Example:
        let name = "John";
        let greeting = `Hello, ${name}!`; // Output: "Hello, John!"
        here, ${name} is an expression that gets evaluated and its value is inserted into the string at runtime.

Escaping Characters:- To include special characters in a string, you can use the backslash (\) to escape them.
    Example:
        let str = "He said, \"Hello!\"";
        here, the double quotes around "Hello!" are escaped with a backslash to include them in the string without ending it.
        let str2 = "This is a backslash: \\";
        here, the backslash itself is escaped to include a literal backslash in the string.

        let str3 = 'It is \n a nice day!';
        here, \n is an escape sequence that represents a newline character, so the output will be: 
        It is
        a nice day!

        let str4 = "This is a tab:\tEnd of tab.";
        here, \t is an escape sequence that represents a tab character, so the output will be:
        This is a tab:    End of tab.





String Methods: 

1. length: Returns the length of the string.
   Example: 
        let str = "Hello";
        console.log(str.length); // Output: 5

2. toUpperCase(): Converts the string to uppercase, returning a new string.
   Example:
        let str = "Hello";
        console.log(str.toUpperCase()); // Output: "HELLO"

3. toLowerCase(): Converts the string to lowercase, returning a new string.
   Example:
        let str = "Hello";
        console.log(str.toLowerCase()); // Output: "hello"

4. indexOf(): Returns the index of the first occurrence of a specified value in a string.
   Example:
        let str = "Hello, world!";
        console.log(str.indexOf("world")); // Output: 7

5. slice(): Extracts a section of a string and returns it as a new string.
   slice(startIndex, endIndex) - startIndex is inclusive and endIndex is exclusive.
   slice(startIndex) - extracts from startIndex to the end of the string.
   slice(-n) - extracts the last n characters of the string.
   slice(-n, -m) - extracts from the nth last character to the mth last character.
    Example:
        let str = "Hello, world!";
        console.log(str.slice(0, 5)); // Output: "Hello"
        console.log(str.slice(7)); // Output: "world!"
        console.log(str.slice(-6)); // Output: "world!"
        console.log(str.slice(-6, -1)); // Output: "world"

6. replace(): Replaces a specified value with another value in a string, returning a new string.
   replace(searchValue, newValue) - replaces the first occurrence of searchValue with newValue.
   replace(/searchValue/g, newValue) - replaces all occurrences of searchValue with newValue using a regular expression with the global flag.
   replace(/searchValue/i, newValue) - replaces the first occurrence of searchValue with newValue using a regular expression with the case-insensitive flag.
   replace(/searchValue/gi, newValue) - replaces all occurrences of searchValue with newValue using a regular expression with both global and case-insensitive flags.
   replaceAll(searchValue, newValue) - replaces all occurrences of searchValue with newValue (introduced in ES2021).
    Example:
        let str = "Hello, world!";
        console.log(str.replace("world", "JavaScript")); // Output: "Hello, JavaScript!"
        console.log(str.replace(/o/g, "0")); // Output: "Hell0, w0rld!"
        console.log(str.replace(/O/i, "0")); // Output: "Hell0, world!"
        console.log(str.replace(/o/gi, "0")); // Output: "Hell0, w0rld!" 
        
        let str2 = "The rain in Spain stays mainly in the plain.";
        console.log(str2.replaceAll("ain", "XYZ")); // Output: "The rXXX in SpXXX stays mXXXly in the plXXX."   

7. split(): Splits a string into an array of substrings based on a specified separator.
   split(separator) - splits the string into an array of substrings using the specified separator.
   split(separator, limit) - splits the string into an array of substrings using the specified separator and limits the number of splits(i.e. no. of elements in the array) to the specified limit.
   split(/regex/) - splits the string into an array of substrings using a regular expression as the separator.
    Example:
        let str = "Hello, world!";
        console.log(str.split(", ")); // Output: ["Hello", "world!"]
        console.log(str.split(" ", 2)); // Output: ["Hello,", "world!"] 
        let str2 = "The rain in Spain stays mainly in the plain.";
        console.log(str2.split(/\s+/)); // Output: ["The", "rain", "in", "Spain", "stays", "mainly", "in", "the", "plain."]


8. includes(): Determines whether a string contains a specified value.
   Example:
        let str = "Hello, world!";
        console.log(str.includes("world")); // Output: true
 
9. charAt(): Returns the character at a specified index in a string.
    Example:
        let str = "Hello, world!";
        console.log(str.charAt(0)); // Output: "H"

10. concat(): Combines two or more strings and returns a new string.
    Example:
        let str1 = "Hello";
        let str2 = "World";
        console.log(str1.concat(", ", str2, "!")); // Output: "Hello, World!"   

11. repeat(): Returns a new string that repeats the original string a specified number of times.
    Example:
        let str = "Hello! ";
        console.log(str.repeat(3)); // Output: "Hello! Hello! Hello! "

12. startsWith(): Determines whether a string starts with a specified value.
    Example:
        let str = "Hello, world!";
        console.log(str.startsWith("Hello")); // Output: true   

13. endsWith(): Determines whether a string ends with a specified value.
    Example:
        let str = "Hello, world!";
        console.log(str.endsWith("!")); // Output: true 

14. substring(): Returns a portion of the string between the start and end indices.
    Example:
        let str = "Hello, world!";
        console.log(str.substring(0, 5)); // Output: "Hello"

15. toString(): Converts a value to a string.
    Example:
        let num = 123;
        console.log(num.toString()); // Output: "123"

16. valueOf(): Returns the primitive value of a string object.
    Example:
        let strObj = new String("Hello");
        console.log(strObj.valueOf()); // Output: "Hello"

17. padStart(): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
    Example:
        let str = "5";
        console.log(str.padStart(3, "0")); // Output: "005"

18. padEnd(): Pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the end of the current string.
    Example:
        let str = "5";
        console.log(str.padEnd(3, "0")); // Output: "500"

19. match(): Retrieves the matches when matching a string against a regular expression.
    Example:
        let str = "The rain in Spain stays mainly in the plain.";
        let matches = str.match(/ain/g);
        console.log(matches); // Output: ["ain", "ain", "ain"]

20. search(): Executes a search for a match between a regular expression and this String object.    
    Example:
        let str = "The rain in Spain stays mainly in the plain.";
        let index = str.search(/ain/);
        console.log(index); // Output: 5

21. localeCompare(): Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.
    Example:
        let str1 = "apple";
        let str2 = "banana";
        console.log(str1.localeCompare(str2)); // Output: -1 (because "apple" comes before "banana")    

22. trim(): Removes whitespace from both ends of a string, returning a new string.
    Example:
        let str = "   Hello, world!   ";
        console.log(str.trim()); // Output: "Hello, world!"

23. trimStart(): Removes whitespace from the beginning of a string, returning a new string.
    Example:
        let str = "   Hello, world!   ";
        console.log(str.trimStart()); // Output: "Hello, world!   "

24. trimEnd(): Removes whitespace from the end of a string, returning a new string.
    Example:
        let str = "   Hello, world!   ";
        console.log(str.trimEnd()); // Output: "   Hello, world!"
    



*/




