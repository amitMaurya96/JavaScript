# JavaScript Basics - Detailed Notes

## Table of Contents
1. [JavaScript Overview](#javascript-overview)
2. [Variables](#variables)
3. [Data Types](#data-types)
4. [Let, Var, and Const](#let-var-and-const)
5. [Operators](#operators)
6. [Conditional Statements](#conditional-statements)
7. [Loops](#loops)
8. [Typeof Operator](#typeof-operator)
9. [Console Methods](#console-methods)

---

## JavaScript Overview

JavaScript is a versatile programming language with the following characteristics:

| Feature | Description |
|---------|-------------|
| **Dynamic** | Variables can hold any type of data and can change type at runtime |
| **Interpreted** | Code is executed line by line by the browser's JavaScript engine without prior compilation |
| **High-Level** | Abstracts away complex hardware details, providing human-readable syntax |
| **Single-Threaded** | Executes code in a single thread; uses event loop and asynchronous programming to handle tasks without blocking |
| **Prototype-Based** | Uses prototypes for inheritance - objects can inherit properties and methods from other objects |
| **Multi-Paradigm** | Supports procedural, object-oriented, and functional programming |

---

## Variables

**Definition:** Containers to hold data values

### Naming Rules:
- Case sensitive (`name` and `Name` are different)
- Must start with a letter, underscore (_), or dollar sign ($)
- Cannot be a reserved keyword
- Use `var`, `let`, or `const` to declare variables

### Best Practices:
- Use descriptive names (e.g., `userName`, `totalPrice`)
- Use camelCase for multi-word variables
- Avoid using reserved keywords

---

## Data Types

JavaScript has two categories of data types:

### 1. Primitive Data Types (7 types)

| Type | Description | Example |
|------|-------------|---------|
| **String** | Sequence of characters | `"Hello"`, `'World'`, `` `Template` `` |
| **Number** | Integer or floating-point (also NaN, Infinity) | `42`, `3.14`, `NaN` |
| **Boolean** | Logical entity (true/false) | `true`, `false` |
| **Null** | Intentional absence of value | `null` |
| **Undefined** | Declared but unassigned variable | `undefined` |
| **Symbol** | Unique and immutable identifier | `Symbol("id")` |
| **BigInt** | Large integers (ES2020) | `12345678901234567890n` |

### 2. Non-Primitive Data Types

| Type | Description | Example |
|------|-------------|---------|
| **Object** | Collection of key-value pairs | `{ name: "Alice", age: 30 }` |
| **Array** | Ordered collection of values | `[1, 2, 3, 4, 5]` |
| **Function** | Reusable code blocks | `function() { return true; }` |

### Key Points:
- Primitive types are **immutable** and stored directly in the variable
- Non-primitive types are **mutable** and stored as references
- Arrays are a special type of object in JavaScript
- `typeof null` returns `"object"` (known JavaScript quirk)

---

## Let, Var, and Const

### `var` (Function-Scoped)
```javascript
console.log(a);  // undefined (hoisted and initialized)
var a = "Amit";
console.log(a);  // "Amit"

a = true;        // Allowed - updation
var a = "John";  // Allowed - redeclaration

{
    var b = 1;   // Function-scoped, not block-scoped
}
console.log(b);  // 1 - accessible outside block
```
- Hoisted to the top of its scope
- Initialized with `undefined` during hoisting
- Can be redeclared and updated
- Function-scoped (or global if declared outside function)

### `let` (Block-Scoped)
```
javascript
// console.log(c);  // ReferenceError - hoisted but not initialized
let c;
console.log(c);  // undefined

c = "updated";   // Allowed - updation
// let c = "new"; // Error - cannot redeclare in same scope

{
    let d = 4;
}
// console.log(d); // ReferenceError - block-scoped
```
- Hoisted but not initialized (Temporal Dead Zone)
- Can be updated but not redeclared
- Block-scoped (accessible only within `{}`)

### `const` (Block-Scoped - Read-Only)
```
javascript
const e = 3.14;  // Must be initialized at declaration
// const e;      // Error - must initialize
// e = 2.71;     // Error - cannot update
// const e = 5;  // Error - cannot redeclare

{
    const f = "Hello";
}
// console.log(f); // ReferenceError - block-scoped
```
- Must be initialized at declaration
- Cannot be updated or redeclared
- Block-scoped
- Hoisted but not initialized (Temporal Dead Zone)

### Summary Table

| Feature | var | let | const |
|---------|-----|-----|-------|
| Scope | Function | Block | Block |
| Redeclare | ✅ | ❌ | ❌ |
| Update | ✅ | ✅ | ❌ |
| Hoisting | ✅ (initialized undefined) | ✅ (TDZ) | ✅ (TDZ) |
| Global object | ✅ | ❌ | ❌ |

---

## Operators

### 1. Arithmetic Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3 = 8` |
| `-` | Subtraction | `5 - 3 = 2` |
| `*` | Multiplication | `5 * 3 = 15` |
| `/` | Division | `5 / 3 = 1.67` |
| `%` | Modulus (remainder) | `5 % 3 = 2` |
| `++` | Increment | `x++` (post), `++x` (pre) |
| `--` | Decrement | `x--` (post), `--x` (pre) |
| `**` | Exponentiation | `2 ** 3 = 8` |

**Important Notes:**
- `x++` returns original value, then increments
- `++x` increments first, then returns new value

### 2. Assignment Operators

| Operator | Example | Equivalent To |
|----------|---------|---------------|
| `=` | `x = 5` | - |
| `+=` | `x += 3` | `x = x + 3` |
| `-=` | `x -= 3` | `x = x - 3` |
| `*=` | `x *= 3` | `x = x * 3` |
| `/=` | `x /= 3` | `x = x / 3` |
| `%=` | `x %= 3` | `x = x % 3` |

### 3. Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Loose equality (type coercion) | `5 == "5"` → `true` |
| `===` | Strict equality (value + type) | `5 === "5"` → `false` |
| `!=` | Loose inequality | `5 != "5"` → `false` |
| `!==` | Strict inequality | `5 !== "5"` → `true` |
| `>` | Greater than | `5 > 3` → `true` |
| `<` | Less than | `5 < 3` → `false` |
| `>=` | Greater than or equal | `5 >= 5` → `true` |
| `<=` | Less than or equal | `5 <= 3` → `false` |

**Best Practice:** Use `===` and `!==` for comparisons to avoid unexpected type coercion

### 4. Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both must be true) | `true && false` → `false` |
| `\|\|` | OR (at least one must be true) | `true \|\| false` → `true` |
| `!` | NOT (negation) | `!true` → `false` |
| `^` | XOR (exactly one true) | `true ^ true` → `false` |

### 5. Ternary Operator

**Syntax:** `condition ? expressionIfTrue : expressionIfFalse`

```
javascript
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
// "Adult"
```

---

## Conditional Statements

### 1. if Statement
```
javascript
if (condition) {
    // code executes if condition is true
}
```

### 2. if-else Statement
```
javascript
if (condition) {
    // code if true
} else {
    // code if false
}
```

### 3. if-else-if Statement
```
javascript
if (condition1) {
    // code if condition1 is true
} else if (condition2) {
    // code if condition2 is true
} else {
    // code if all conditions are false
}
```

### 4. switch-case Statement
```
javascript
switch (expression) {
    case value1:
        // code for value1
        break;
    case value2:
        // code for value2
        break;
    default:
        // code if no case matches
}
```

**Important:** Always use `break` to prevent fall-through!

---

## Loops

### 1. for Loop
```javascript
for (initialization; condition; increment/decrement) {
    // code to execute
}

// Example:
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}
```

**Parts:**
- **Initialization:** Executed once at the beginning
- **Condition:** Evaluated before each iteration
- **Increment/Decrement:** Executed after each iteration

### 2. for...of Loop
```
javascript
// Iterates over iterable objects (arrays, strings, maps, sets)
// Accesses values directly without needing index or key

const array = [10, 20, 30, 40, 50];
for (const element of array) {
    console.log(element);  // 10, 20, 30, 40, 50
}

const str = "Hel  lo";
for (const char of str) {
    console.log(char);  // H,e,l, , ,l,o
}
```

**Use when:** You need to iterate over values in an array or iterable

### 3. for...in Loop
```
javascript
// Iterates over enumerable properties of an object
// Accesses keys (property names)

const person = { name: "Alice", age: 30, city: "New York" };
for (const key in person) {
    console.log(key);           // name, age, city
    console.log(person[key]);   // Alice, 30, New York
}

// Also works with arrays (gets indices as strings)
const arr = [10, 20, 30];
for (const index in arr) {
    console.log(index);        // "0", "1", "2" (as strings)
    console.log(arr[index]);   // 10, 20, 30
}
```

**Use when:** You need to iterate over keys/properties of an object

### 4. while Loop
```
javascript
while (condition) {
    // code to execute
    // updation
}

// Example:
let i = 0;
while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
}
```

**Note:** Condition is checked BEFORE execution - may not run at all if condition is false initially

### 5. do-while Loop
```
javascript
do {
    // code to execute
} while (condition);
```

**Example:**
```
javascript
let i = 0;
do {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
} while (i < 5);
```

**Key Difference:** Always executes at least once, even if condition is false

### Loop Comparison

| Loop Type | Best Use Case |
|-----------|---------------|
| `for` | Traditional counting loop, when you know the number of iterations |
| `for...of` | Iterating over array/string values |
| `for...in` | Iterating over object keys |
| `while` | Loop when number of iterations is unknown |
| `do-while` | Execute at least once before checking condition |

### Loop Control Statements

| Statement | Description |
|-----------|-------------|
| `break` | Exits the loop immediately |
| `continue` | Skips current iteration and continues to next |

---

## Typeof Operator

The `typeof` operator returns a string indicating the type of the operand:

```
javascript
typeof 42              // "number"
typeof "Hello"         // "string"
typeof true            // "boolean"
typeof undefined       // "undefined"
typeof null            // "object" ⚠️ JavaScript quirk
typeof Symbol("id")   // "symbol"
typeof { }            // "object"
typeof [ ]            // "object" ⚠️ arrays are objects
typeof function(){}   // "function" ⚠️ functions are objects
typeof NaN            // "number" ⚠️ NaN is a number
```

---

## Console Methods

| Method | Description | Example |
|--------|-------------|---------|
| `console.log()` | General output | `console.log("Hello")` |
| `console.error()` | Error messages | `console.error("Error!")` |
| `console.warn()` | Warning messages | `console.warn("Warning!")` |
| `console.info()` | Informational messages | `console.info("Info")` |
| `console.table()` | Display data in table format | `console.table({name: "Alice", age: 30})` |

### console.table() Examples

**Object:**
```
javascript
console.table({ name: "Alice", age: 30, city: "New York" });
// Displays:
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │  name   │   "Alice"  │
// │   age   │     30     │
// │  city   │ "New York" │
// └─────────┴────────────┘
```

**Array:**
```
javascript
console.table(["Alice", 30, "New York"]);
// Displays:
// ┌─────────┬────────────┐
// │ (index) │   Values   │
// ├─────────┼────────────┤
// │    0    │  "Alice"   │
// │    1    │     30     │
// │    2    │ "New York" │
// └─────────┴────────────┘
```

---

## Quick Reference Cheat Sheet

### Variable Declaration
```
javascript
var oldWay = "function-scoped";
let newWay = "block-scoped, updatable";
const constant = "block-scoped, read-only";
```

### Data Types Check
```
javascript
// Primitive
typeof "text"     // "string"
typeof 123        // "number"
typeof true       // "boolean"
typeof null       // "object" ⚠️
typeof undefined  // "undefined"
typeof Symbol()   // "symbol"
typeof 123n       // "bigint"

// Non-primitive
typeof {}         // "object"
typeof []         // "object" ⚠️
typeof function(){} // "function" ⚠️
```

### Common Patterns
```
javascript
// Swap variables
[a, b] = [b, a];

// Default value
let name = userName || "Guest";

// Check if defined
typeof variable !== "undefined"

// Loop through array
for (let item of array) { }
for (let index in array) { }
```

---

## Additional Notes

### Hoisting
- `var` declarations are hoisted and initialized with `undefined`
- `let` and `const` are hoisted but NOT initialized (Temporal Dead Zone)
- Function declarations are fully hoisted

### Type Coercion
- JavaScript automatically converts types in certain operations
- Use `===` to avoid unexpected behavior
- `+` operator can concatenate strings or add numbers (context-dependent)

### Null vs Undefined
- `undefined` - variable declared but not assigned
- `null` - intentionally assigned empty/no value
- `typeof null === "object"` - known bug in JavaScript

---

*Notes created from JavaScript Lecture-1: Basics of JS*
