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