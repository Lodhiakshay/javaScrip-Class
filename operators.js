/**================================================================================================
 *!                                        Operators in JavaScript
 *================================================================================================**/

//? ======================================== Arithmetic Operators ==================================

//* These operators are used to perform basic mathematical operations.

//Todo Addition (+): Adds two values.

// let x = 10;
// let y = 5;
// let sum = x + y; // sum is 15

//todo Subtraction (-): Subtracts the second value from the first.

// let difference = x - y; // difference is 5

//Todo Multiplication (*): Multiplies two values.

// let product = x * y; // product is 50

//Todo Division (/): Divides the first value by the second.

// let quotient = x / y; // quotient is 2

//Todo Modulus (%): Returns the remainder after division.

// let remainder = x % y; // remainder is 0

//Todo Exponentiation (**): Raises the first value to the power of the second.

// let power = x ** y; // power is 100000 (10 raised to the power 5)

//Todo Increment (++): Increases the value of a variable by 1.

// x++; // x is now 11

//Todo Decrement (--): Decreases the value of a variable by 1.

// x--; // x is now 10

//* Pre-Increment and Pre-Decrement Operators

//* Syntax
// Pre-Increment: ++variable
// Pre-Decrement: --variable

// Behavior
// Pre-Increment (++variable): Increases the value of variable by 1, then returns the new value.
// Pre-Decrement (--variable): Decreases the value of variable by 1, then returns the new value.

//* Pre-Increment Example

// let x = 5;
// let y = ++x; // Pre-increment

// console.log(x); // Output: 6 (x is incremented first)
// console.log(y); // Output: 6 (y receives the incremented value of x)

//* Pre-Decrement Example

// let a = 10;
// let b = --a; // Pre-decrement

// console.log(a); // Output: 9 (a is decremented first)
// console.log(b); // Output: 9 (b receives the decremented value of a)

//* Post-Increment and Post-Decrement Operators

// Syntax
// Post-Increment: variable++
// Post-Decrement: variable--

// Behavior
// Post-Increment (variable++): Returns the current value of variable, then increases it by 1.
// Post-Decrement (variable--): Returns the current value of variable, then decreases it by 1.

// Post-Increment Example

// let m = 5;
// let n = m++; // Post-increment

// console.log(m); // Output: 6 (m is incremented after its value is assigned to n)
// console.log(n); // Output: 5 (n receives the original value of m before increment)

// Post-Decrement Example

// let p = 20;
// let q = p--; // Post-decrement

// console.log(p); // Output: 19 (p is decremented after its value is assigned to q)
// console.log(q); // Output: 20 (q receives the original value of p before decrement)

// Summary
// Pre-Increment (++variable): Increases the value before returning it.
// Post-Increment (variable++): Returns the value before increasing it.
// Pre-Decrement (--variable): Decreases the value before returning it.
// Post-Decrement (variable--): Returns the value before decreasing it.

//? ====================================== Assignment Operators ==========================================

//Todo Assignment (=): Assigns the right-hand value to the left-hand variable.

// let z = 20; // z is 20

//Todo Add and Assign (+=): Adds the right-hand value to the left-hand variable and assigns the result to the left-hand variable.

z += 5; // z is now 25 (equivalent to z = z + 5)

//Todo Subtract and Assign (-=): Subtracts the right-hand value from the left-hand variable and assigns the result to the left-hand variable.

// z -= 5; // z is now 20 (equivalent to z = z - 5)

//Todo Multiply and Assign (*=): Multiplies the left-hand variable by the right-hand value and assigns the result to the left-hand variable.

// z *= 2; // z is now 40 (equivalent to z = z * 2)

//Todo Divide and Assign (/=): Divides the left-hand variable by the right-hand value and assigns the result to the left-hand variable.

// z /= 2; // z is now 20 (equivalent to z = z / 2)

//todo Modulus and Assign (%=): Takes the modulus of the left-hand variable by the right-hand value and assigns the result to the left-hand variable.

// z %= 3; // z is now 2 (equivalent to z = z % 3)

//? ======================================= Comparison Operators ===========================================

//* These operators compare two values and return a Boolean (true or false).

//Todo Equal (==): Checks if two values are equal (with type coercion).

// x == "10"; // true

//Todo Strict Equal (===): Checks if two values are equal (without type coercion).

// x === "10"; // false

//Todo Not Equal (!=): Checks if two values are not equal (with type coercion).

// x != 5; // true

//Todo Strict Not Equal (!==): Checks if two values are not equal (without type coercion).

// x !== "10"; // true

//Todo Greater Than (>): Checks if the left-hand value is greater than the right-hand value.

// x > 5; // true

//Todo Less Than (<): Checks if the left-hand value is less than the right-hand value.

// x < 15; // true

//Todo Greater Than or Equal (>=): Checks if the left-hand value is greater than or equal to the right-hand value.

// x >= 10; // true

//Todo Less Than or Equal (<=): Checks if the left-hand value is less than or equal to the right-hand value.

// x <= 10; // true

//? ============================================== Logical Operators ====================================

//* These operators are used to combine or invert Boolean values.

//Todo Logical AND (&&): Returns true if both operands are true.

// (x > 5 && y < 10); // true

//Todo Logical OR (||): Returns true if at least one of the operands is true.

// (x > 15 || y < 10); // true

//todo Logical NOT (!): Inverts the Boolean value of the operand.

// !(x > 5); // false

//? ======================================= Conditional (Ternary) Operator ================================

//* This operator assigns a value based on a condition. It’s a shorthand for an if-else statement.

// let isAdult = age >= 18 ? "Yes" : "No"; // If age is 18 or more, isAdult is "Yes", otherwise "No"

//? ====================================== Type Operators ================================================

//* These operators are used to determine the type of a variable.

//Todo typeof: Returns the data type of a variable.

// typeof x; // "number"

//Todo instanceof: Checks if an object is an instance of a specific class.

// let date = new Date();
// date instanceof Date; // true


