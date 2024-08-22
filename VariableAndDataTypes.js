/**======================================================================================
 *!                                         Introduction to Variables
 *======================================================================================**/

//? What is a Variable?
/** 
-> A variable is like a container in which you can store data. 
    In programming, variables allow you to store, retrieve, and manipulate data in your code.
-> Think of a variable as a labeled box 
    where you can put something and later take it out or replace it with something else.
**/

//? Declaring Variables
//* In JavaScript, you can declare a variable using the keywords var, let, or const.

var x;  //Declaring

x = 10 // number
x= "Raman" // String

let y;
const z = 10;

//* var: Older way of declaring variables. Has Global scope.
//* let: Newer way, introduced in ES6. Has block scope.
//* const: Used to declare variables that should not be reassigned. It also has block

//? Variables declared with let and var can be reassigned

// let age = 25;

// const name = "John";
// var city = "New York";

/**======================================================================================
 *!                                     Understanding Data Types
 *======================================================================================**/

//? What are Data Types?
/*  Data types define the kind of data that can be stored in a variable. 
    JavaScript has several built-in data types that you can use. 
*/

/*============================== Primitive Data Types ==================================*/

/**
 * Primitive data types are the most basic types of data in JavaScript.
 * They are immutable, meaning their values cannot be changed once created.
 * JavaScript has the following primitive data types:
 */

//? Number: Represents both integer and floating-point numbers
/*
let age = 30; // integer
let price = 19.99; // floating-point number
*/

let age = 30; // integer
let price = 19.99; // floating-point number

// console.log(typeof(age))

//* Special Values:
// NaN (Not-a-Number): Result of an undefined or unrepresentable mathematical operation.

// const a = "Ram"
// console.log(a/2)

/*
Common Scenarios Leading to NaN:
Mathematical Operations with Non-Numeric Data: If you try to perform a mathematical operation with a non-numeric value (that cannot be converted to a number), the result will be NaN.
Invalid Operations: Operations that have no meaning in mathematics, such as dividing zero by zero.

Example 1: Arithmetic with a string that can't be converted to a number

let result1 = "hello" * 2; // "hello" is not a number
console.log(result1); // Output: NaN

Example 2: 0 divided by 0
let result2 = 0 / 0;
console.log(result2); // Output: NaN

Example 3: Square root of a negative number (in JavaScript, unlike some other languages)

let result3 = Math.sqrt(-1);
console.log(result3); // Output: NaN

Key Point: NaN is a special value that is considered a number type in JavaScript,
 but it does not equal any number, including itself. To check if a value is NaN, 
 you should use the isNaN() function or Number.isNaN() for stricter checks.

*/

// Infinity and -Infinity: Represent values that exceed the upper or lower limit for numbers.
/*
Description: Infinity and -Infinity represent the result of operations
 that exceed the largest or smallest representable number in JavaScript.

Common Scenarios Leading to Infinity and -Infinity:
Division by Zero: Dividing a positive number by zero results in Infinity, 
while dividing a negative number by zero results in -Infinity.

Exceeding Number Limits: Calculations that result in numbers larger than 
Number.MAX_VALUE (the largest representable number in JavaScript) result in Infinity.

Example 1: Positive Infinity
let result4 = 1 / 0;
console.log(result4); // Output: Infinity

Example 2: Negative Infinity
let result5 = -1 / 0;
console.log(result5); // Output: -Infinity

Example 3: Number larger than JavaScript can represent
let result6 = Number.MAX_VALUE * 2; // Exceeds the maximum representable number
console.log(result6); // Output: Infinity

Example 4: Number smaller than JavaScript can represent (large negative)
let result7 = -Number.MAX_VALUE * 2; // Exceeds the minimum representable number
console.log(result7); // Output: -Infinity

Key Points:
Infinity and -Infinity are of the type number.
You can use isFinite() to check whether a value is finite (i.e., not Infinity, -Infinity, or NaN).

console.log(isFinite(result4)); // Output: false
console.log(isFinite(1000)); // Output: true

*/

/*
Summary:
NaN: Occurs when a mathematical operation fails to produce a valid number. It is a number type, 
but it isn't equal to any other value, not even itself.

Infinity: Represents an overflow beyond the maximum positive number JavaScript can handle.
-Infinity: Represents an overflow beyond the maximum negative number JavaScript can handle.
*/

//? String: Represents text, enclosed in single (') or double (") quotes
/*
let name = "Alice";
let greeting = 'Hello, world!';

Note: Strings are immutable, meaning once a string is created, it cannot be altered, 
though new strings can be formed by concatenation or other operations.
*/

//? Boolean: Represents a logical entity and can have only two values: true or false
/*
let isLoggedIn = true;
let hasPermission = false;
*/

//? Undefined: A variable that has been declared but not assigned a value
/*
let user;
console.log(user); // undefined
*/

//? Null: Represents an intentional absence of any object value
/*
let response = null;
Note: null is often used to explicitly denote the lack of value.
*/

//? Symbol: Represents a unique and immutable value, often used as an identifier for object properties.
/*
let sym = Symbol('unique');
*/

//? BigInt (introduced in ES2020): BigInts are used to represent integers with arbitrary   precision. Like other primitive types, they are immutable.

/*
let bigNumber = 123456789012345678901234567890n;
let anotherBigNumber = bigNumber + 1n;
console.log(bigNumber); // Output: 123456789012345678901234567890n
console.log(anotherBigNumber); // Output: 123456789012345678901234567891n

Note: The original bigNumber remains unchanged after the operation.
*/

/*======================== Non-Primitive Data Types (Objects) ===========================*/

/*
Non-primitive data types are more complex and can store collections of values and more complex entities. 
These data types are mutable, meaning the value they reference can be changed. 
The key difference from primitive types is that they are stored by reference, not by value.
*/

//? Object: Used to store collections of data or more complex entities.
/*
let user = {
  name: "John",   // name -> key,  value -> "John"
  age: 30,
  isAdmin: true
};
*/

//? Array: A special type of object used to store ordered lists of values
/*
let colors = ["red", "green", "blue"];

Note: Arrays in JavaScript are zero-indexed, meaning the first element is accessed with index 0.
*/

//? Function: Functions are objects in JavaScript that can be executed
/*
function greet() {
  console.log("Hello, world!");
}
*/

//? Date: A special type of object used to handle and manipulate dates and times.
/*
let now = new Date();
console.log(now); // Output: Current date and time
*/

//? RegExp: Short for "regular expression", it's used for pattern matching in strings.
/*

Note: Commonly used for string searching and manipulation.
*/

// let regex = /hello/i; // Regular expression to match "hello" case-insensitively
// console.log(regex.test('Hello')); // Output: true

 /**======================================================================================
 *!            Key Differences Between Primitive and Non-Primitive Data Types
 *======================================================================================**/

/*
    Immutability: Primitive values are immutable, meaning they cannot be changed once created. 
    Non-primitive values (like objects and arrays) are mutable.

    Storage: Primitive types are stored directly by their value in the stack. 
    Non-primitive types are stored by reference in the heap, 
    and the variable holds a reference to the memory location where the object is stored.

    Copying: When you copy a primitive value, you get a new copy of that value. 
    When you copy a non-primitive value, you get a reference to the same object.
*/

//!  Dynamic Typing
/* JavaScript is dynamically typed, meaning you don't need to specify the data type of a variable. 
    It is determined automatically at runtime.
    
    let dynamicVariable = "Hello"; // string
    dynamicVariable = 42; // now it's a number

*/

//! Type Checking
/*
Use the typeof operator to check the type of a variable

let num = 10;
console.log(typeof num); // "number"

let isActive = true;
console.log(typeof isActive); // "boolean"

let text = "JavaScript";
console.log(typeof text); // "string"

*/


/**======================================================================================
 *!            Why Avoid Certain Practices When Creating a JS File 
 *======================================================================================**/

 /*
1-> Special Characters in File Names:
    Reason: Special characters like @, #, &, *, etc., can cause compatibility issues across different operating systems, file systems, or development environments. They might have special meanings in some contexts (e.g., @ in URLs or emails), leading to unexpected behavior or errors when trying to access or reference the file.

2-> Spaces in File Names:
    Reason: Spaces in file names can cause issues when passing the file name as an argument in scripts or command-line interfaces. It can require additional handling, like quoting or escaping the spaces, which complicates usage. Dashes or underscores are clearer and safer.

3-> Incorrect File Extensions:
    Reason: Using anything other than .js as a file extension can lead to the file not being recognized as JavaScript by editors, compilers, or servers, causing it to be misinterpreted or ignored, leading to errors.
 */

/**======================================================================================
 *!            Why Avoid Certain Practices When Naming Variables
 *======================================================================================**/

 /*
1-> Reserved Keywords:
    Reason: Words like let, class, and function are special in JavaScript. If you try to use them as variable names, it will cause errors because JavaScript won’t know if you mean the keyword or your variable.

2-> Starting Variable Names with a Number:
    Reason: You can’t start a variable name with a number in JavaScript. If you do, it will cause an error because JavaScript expects variable names to follow certain rules.

3-> Special Characters (Except _ and $):
    Reason: Special characters like @ or # are not allowed in variable names because they might cause errors or unexpected behavior. Only _ and $ are safe to use.

4-> Non-Descriptive or Single-Letter Names:
    Reason: If you use names that don’t explain what the variable does (like using just one letter), it makes your code harder to understand. This can lead to confusion, especially in bigger projects.
 */