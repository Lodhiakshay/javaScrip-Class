// Regular fuctions 

// function declaretion

// function functionName(parameters){
//   // function Body
//   return result
// }

// functionName("Alice")  // function call


// function Expression

// const functionName = function(parameters){
//   // function Body
//   return result
// }

// example :

// const square = function(number){
//   return number*number

// }

// console.log(square(25))

//Note -> squsre is a variable that holds an anonymous function (wiyhout a name)


// Arrow Function (ES6)
// An arrow function is shorte and more concise way of writti ng function expression introduced in ES6. 
// It user => syntax

// syntax

// const functionName = () =>{
//   // function Body
//   return return
// }

// Note: If the function has single expression, you can omit the bracket {} and return keyword

// example:

// const greet = (name) =>{
//   return `Hello ${name}`
// }

// const squire = (num) =>num*num

// console.log(squire(12))

// Advantage of Arrow functions

// 1. Conciseness :- Arrow functions are more concise,  espesially for one-lines
// 2. No "this" Binding: Arrow functions do not have their own this. Instead, they inherit this from the surrounding context (lexical scoping),  which can prevent common issue when using this inside methods

// Arrow function examples

// const sum  = (a, b) =>{
//   const result = a+b
//   return result
// }

// console.log(sum(45, 67))

// const person = {
//   name: "Alveena",
//   regularFunction : function(){
//     console.log(this.name)
//   },
//   arrowFunction: () =>{
//     console.log(this.name)
//   }
// }

// person.regularFunction()

// person.arrowFunction()


const person = {
  name: "Alice",
  greet: function(){
    setTimeout(() =>{
      console.log(`Hello, my name is ${this.name}`)
    }, 5000)
  }
}

person.greet()




//----------------- Default parameter -------------------------
// You can provide default values to function in case no argument is passed or the arrgument undefined

// Example

// const greet = (firstName, lastName = "") => `Hell0, ${firstName} ${lastName}`

// console.log(greet("Nirmal", "Sharma"))

//----------------------------- Rest Parameter ----------------------
// const sum = (...number) => number.reduce((total, num) => total+num, 0)

// console.log(sum(4, 16, 56,23,78,89))

//------------------- Callback Function ----------------------------------
//  A callback function is a function passed into another function as an argument and is executed after some event or operation

// Example

// function fetchData(callback){
//   console.log("Fetching data...")
//   callback()
// }

// function sum(){
//   console.log("Data fetched successfully")
// }

// fetchData(sum)

// -------------------------------------Higher-Order-Function--------------------------------------
// A Higher-Order-Function is a function that accepts another function as an argument or return a function.
// methodss like .map(), .filter(), .reduce()

// -----------------------------IIFE (Immediately Invoked Function Expression )----------------------------

// (function(){
//   console.log("This runs immediately")
// })()

// (function(name, age){
//   console.log(`Hello, ${name}. You are ${age} years old`)
// })("Rajat", 26)