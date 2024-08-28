//* Control structures are blocks of code that determine the flow of control in a program based on conditions and loops.

/**================================================================================================
 *!                                        Conditional Statements
 *================================================================================================**/

//? if Statement

// x = 5

//* Executes a block of code if a specified condition is true.

// if (x > 0) {
//     console.log("x is positive");
// }

//? else Statement

//* Executes a block of code if the condition in the if statement is false.

// if (x > 0) {
//     console.log("x is positive");
// } else {
//     console.log("x is not positive");
// }

//? else if Statement

//* Provides an additional condition to check if the previous if condition is false.

// if (x > 0) {
//     console.log("x is positive");
// } else if (x < 0) {
//     console.log("x is negative");
// } else {
//     console.log("x is zero");
// }

//? switch Statement

//* Executes one block of code out of many based on the value of a variable or expression.

// let day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   default:
//     console.log("Unknown day");
// }

/**================================================================================================
 *!                                        Loops
 *================================================================================================**/

//? for Loop

//* Executes a block of code a specified number of times.

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//? while Loop

//* Executes a block of code as long as the condition is true.

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

//? do-while Loop

// Executes a block of code once before checking the condition, then repeats as long as the condition is true.

// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);

//? for...in Loop

//* Iterates over the properties of an object.

// let person = {name: "John", age: 30, city: "New York"};
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }

// let fruits = ["Apple", "Banana", "Mango"];

// for (let index in fruits) {
//     console.log(index);        // Logs the index (0, 1, 2)
//     console.log(fruits[index]); // Logs the value at that index (Apple, Banana, Mango)
// }

//? for...of Loop

//* Iterates over the values of an iterable object like an array or string.

// let arr = [10, 20, 30];
// for (let value of arr) {
//     console.log(value);
// }

/**================================================================================================
 *!                                        Jump Statements
 *================================================================================================**/

//? break Statement

//* Exits the current loop or switch statement immediately.

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

//? continue Statement

//* Skips the current iteration of the loop and moves to the next one.

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

/**================================================================================================
 *!                                    Practical Examples and Use Cases
 *================================================================================================**/

//? Using Operators in a Calculator

function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+")); // Output: 15

//? Control Flow in a Login System

function login(username, password) {
  const correctUsername = "admin";
  const correctPassword = "password123";

  if (username === correctUsername && password === correctPassword) {
    console.log("Login successful!");
  } else {
    console.log("Invalid username or password.");
  }
}

login("admin", "password123"); // Output: Login successful!

//? Looping Through an Array of Products

let products = ["Laptop", "Phone", "Tablet", "Camera"];
for (let i = 0; i < products.length; i++) {
  console.log("Product: " + products[i]);
}
// Output:
// Product: Laptop
// Product: Phone
// Product: Tablet
// Product: Camera
