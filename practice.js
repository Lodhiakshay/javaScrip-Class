//++++++++++++++++++++++++++++++++++++++++ String ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// let str = 'Hello, World!';

// console.log(str.includes('World')); // true
// console.log(str.includes('hgsg'));  // false

// console.log(str.indexOf('World'));

// console.log(str.indexOf('ramu'));

// let str = 'Hello, World, Hello!';
// console.log(str.lastIndexOf('Hello'));

// console.log(str.startsWith('Hel')); 

// console.log(str.endsWith('ld!')); 

// let str1 = 'Hello';
// let str2 = 'World';

// let result = str1.concat(', ', str2, '!');

// console.log(str1, str2)

// const str = "      Hello           "

// console.log(str)

// console.log(str.trim())
// console.log(str.slice(2)); 

// console.log(str.slice(-6)); 

// console.log(str.substring(1))

// let message = "I am learning Java script"

// console.log(message)

// console.log(message.split(' '))

// console.log(str.replace("World", "JavaScript"))

// const language = "JavaScript"

// const message = `${language} is a scripting language`

// let str = 'The rain in Spain stays mainly in the plain.';
// let result = str.match(/ain/g);
// console.log(result);


// const str = `Java script is very good language.\nSo I am "learning" JavaScript`

// console.log(str);

// console.log("apple" < "bat")



// String
// Array
// Number
// function


// console.log(7+6)

// let num = 6

// console.log(num)
// // Post increment +1
// let num2 = num++

// console.log(num) // output : 7

// console.log(num2) // output : 6

// let num = 6

// console.log(num)
// // Pre increment +1 (++variableName)
// let num2 = ++num

// console.log(num) // output : 7

// console.log(num2) // output : 7

// let num = 6

// console.log(num)  // output: 6
// // Post dcr -- (variableName--)
// let num2 = num--

// console.log(num) // output : 5

// console.log(num2) // output : 6

// let num = 6

// console.log(num)  // output: 6
// // Pre dcr -- (--variableName)
// let num2 = --num

// console.log(num) // output : 5

// console.log(num2) // output : 5


// Exponentiation

// console.log(5**8) //2*2*2

// modulus operator
// console.log(8%3);

// Comparision operator - tru or false


// equal (==) & (===)

// let x = 10

// console.log(10 == "10")  // true
// console.log(10 === "10")  // false

// not eqal
// console.log(10 !== 5)

// console.log(10 > 6)

// ==, ==, !==, !==, >, >=, <, <=

// Logical operator - true or false

// let x = 5

// let y = 10

// Logical AND (&&)

// console.log(x > 3 && y < 15);

// logical OR (||)

// console.log(x > 3 || y > 15)

// Logical Not

// console.log(!(x>3))

// Ternary operator

// let age = 10

// condition ? true : false

// let isAdult = age >= 18 ? "You are adult, can vote" : "You cant bote"

// console.log(isAdult)

// typeof operator

// instanceOf

// let date = new Date();
// date instanceof Date;

// console.log(date instanceof Date);




//+++++++++++++++++++++++++++++++++++++++ Controll Statement ++++++++++++++++++++++++++++++++++++++++++

// Flow controll

// if, else if, else  statement
// syntax

/**
 * if(condition){
 *  logic
 * }
 */

// "switch" Statement

// let age = 12

// if(age > 18){
//   console.log("You can vote")
// }else{
//   console.log("You can not vote")

// }

// let trafficLight = "black"

// if(trafficLight === "green"){
//   console.log("Go!"); 
// }else if(trafficLight === "yellow"){
//   console.log("Slow down!");
  
// }else if(trafficLight === "red"){
//   console.log("Stop!");
  
// }else{
//   console.log("Invalid traffic light color");
  
// }

// let a = 5
// let b = 19
// let c = 12 

// if(a > b && a > c){
//   console.log("a is gretest")
// }else if(b > a && b > c){
//   console.log("b is gretest");
// }else{
//   console.log("c is gretest");

// }



//====================================================================================================

/**   Determining the final grade of a student based on their score
 * 
 * A => score >= 90
 * B => score >=80
 * C => >= 70
 * D => >= 60
 * else
 */
//======================================================================================================


// let dayOfWeek = "Wednesday"

// switch(dayOfWeek){
//   case "Monday":
//     console.log(`Today's special is Pasta`);
//     break;
//   case "Tuesday":
//     console.log(`Today's special is Busger`);
//     break;
//     case "Wednesday":
//       console.log(`Today's special is Poha`);
//       break;
//       case "Thursday":
//     console.log(`Today's special is Paneer`);
//     break;
//     case "Friday":
//     console.log(`Today's special is Pizza`);
//     break;
//     case "Saturday":
//     console.log(`Today's special is Rice`);
//     break;
//     case "Sunday":
//     console.log(`Today's special is Samosa`);
//     break;
//     default:
//       console.log("Invalid Day");     
// }


// function calculator(a, operator, b) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     case "%":
//       return a % b;
//     default:
//       return "Invalid operator";
//   }
// }

// console.log(calculator(10, "/",  5)); 


//================================================ Loop =========================================

//? for Loop

// * Executes a block of code a specified number of times.

/*  Syntax

  let i,

  for(start, end, ++/--){
    // code
  }

*/

// for (let i = 10; i >= 1; i--) {
//     console.log(i*2);
// }

// while Loop

//* Executes a block of code as long as the condition is true.

// let i = 10;
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
//     console.log(`${index} : ${fruits[index]}`);        // Logs the index (0, 1, 2)
//     // console.log(fruits[index]); // Logs the value at that index (Apple, Banana, Mango)
// }

//? for...of Loop

//* Iterates over the values of an iterable object like an array or string.

// let arr = [10, 20, 30];
// for (let value of arr) {
//     console.log(value);
// }

//? break Statement

//* Exits the current loop or switch statement immediately.

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

//? continue Statement

//*  Skips the current iteration of the loop and moves to the next one.

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }


// function login(username, password) {
//   const correctUsername = "admin";
//   const correctPassword = "password123";

//   if (username === correctUsername && password === correctPassword) {
//     console.log("Login successful!");
//   } else {
//     console.log("Invalid username or password.");
//   }
// }

// login("admin321", "password543123");  // function call


//======================== TASK ===========================================
// Print the table of any number 1 to 10

// let s = 5;
// for (let i = 1; i <= 10; i++) {
//  console.log(i*s)

// }

// let b = 18;
// for (let a = 1; a < b * 10 + 1; a++) {
//   if (a % b == 0) {
//     console.log(a);
//   }
// }

