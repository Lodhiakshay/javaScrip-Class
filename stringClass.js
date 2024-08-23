// Declaring String

/**
 * Double quotes ""
 * Single quotes ''
 * Tamplate literals ``
 * String()
 * 
 * const str = new String("Hello")
 * 
 * 
 */

let str1 = 'Hello, World!';
let str2 = "Hello, World!";
let str3 = `Hello, World!`; 


// console.log(message[1])

// message[0] = "B" 

// console.log(message)

// const name = "Anuj"

// let str = 'HELLO';
// console.log(str.toLowerCase()); // Output: 'hello'

//! - **`includes(substring)`**

/*
- Checks if the string contains the specified substring, returning `true` or `false`.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.includes('World')); // Output: true
console.log(str.includes('world')); // Output: false (case-sensitive)
*/

//! - **`indexOf(substring)`**

/*
- Returns the index of the first occurrence of the specified substring. Returns `-1` if not found.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.indexOf('World')); // Output: 7
console.log(str.indexOf('world')); // Output: -1 (case-sensitive)
*/

//! - **`lastIndexOf(substring)`**

/*
- Returns the index of the last occurrence of the specified substring. Returns `-1` if not found.
- Example:
javascript
let str = 'Hello, World, Hello!';
console.log(str.lastIndexOf('Hello')); // Output: 13
*/

// !- **`startsWith(substring)`**

/*
- Checks if the string starts with the specified substring.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.startsWith('Hello')); // Output: true
console.log(str.startsWith('World')); // Output: false
*/

//! - **`endsWith(substring)`**

/*
- Checks if the string ends with the specified substring.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.endsWith('World!')); // Output: true
console.log(str.endsWith('Hello')); // Output: false
*/

//! - **`concat(str1, str2, ...)`**

/*
- Concatenates one or more strings and returns a new string.
- Example:
javascript
let str1 = 'Hello';
let str2 = 'World';
let result = str1.concat(', ', str2, '!');
console.log(result); // Output: 'Hello, World!'
*/


//! - **`trim()`**

/*
- Removes whitespace from both ends of the string.
- Example:
javascript
let str = '  Hello, World!  ';
console.log(str.trim()); // Output: 'Hello, World!'
*/

//! - **`slice(startIndex, endIndex)`**

/*
- Extracts a part of the string and returns it as a new string. The `endIndex` is optional and not included in the result.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.slice(7, 12)); // Output: 'World'
console.log(str.slice(-6)); // Output: 'World!'
*/


//! - **`substring(startIndex, endIndex)`**

/*
- Similar to `slice()`, but does not accept negative indices.
- Example:
javascript
let str = 'Hello, World!';
console.log(str.substring(7, 12)); // Output: 'World'
*/

//! - **`split(delimiter)`**

/*
- Splits the string into an array of substrings based on the specified delimiter.
- Example:
javascript
let str = 'Hello, World!';
let arr = str.split(', ');
console.log(arr); // Output: ['Hello', 'World!']
*/

//! - **`replace(searchValue, newValue)`**

/*
- Replaces the first occurrence of the search value with the new value.
- Example:
javascript
let str = 'Hello, World!';
let newStr = str.replace('World', 'JavaScript');
console.log(newStr); // Output: 'Hello, JavaScript!'
*/

//! - **`replaceAll(searchValue, newValue)`**

/*
- Replaces all occurrences of the search value with the new value.
- Example:
javascript
let str = 'Hello, World! World is big.';
let newStr = str.replaceAll('World', 'JavaScript');
console.log(newStr); // Output: 'Hello, JavaScript! JavaScript is big.'
*/

//?### 4. **Template Literals**

//! - **Introduction to Template Literals:**

/*
- Introduced in ES6, template literals are enclosed by backticks (`` ` ``) and can contain placeholders for expressions using `${}`.
- Supports multi-line strings, string interpolation, and embedding expressions.
- Example:
javascript
let name = 'John';
let greeting = `Hello, ${name}!`;
console.log(greeting); // Output: 'Hello, John!'

let multiLine = `This is
a multi-line
string.`;
console.log(multiLine);
*/


//? ### 5. **Advanced String Manipulations**

//! - **Regular Expressions:**

/*
- Strings can be matched, searched, and replaced using regular expressions.
- Example:
javascript
let str = 'The rain in Spain stays mainly in the plain.';
let result = str.match(/ain/g); // Returns an array of matches
console.log(result); // Output: ['ain', 'ain', 'ain']
*/

//! - **Escape Characters:**

/*
- Special characters in strings can be escaped using the backslash (`\`) to represent newlines (`\n`), tabs (`\t`), quotes, and more.
- Example:
javascript
let str = 'She said, \"Hello!\"';
console.log(str); // Output: She said, "Hello!"
*/

//! - **String Comparison:**

/*
- Strings can be compared using standard comparison operators (`==`, `===`, `!=`, `!==`, `<`, `>`, etc.).
- Example:
javascript
console.log('apple' < 'banana'); // Output: true (alphabetical order)
*/
