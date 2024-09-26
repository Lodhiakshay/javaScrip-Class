// ### *Hoisting in JavaScript*

// **Definition**:
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope (global or function) before the code is executed. However, only the declarations are hoisted, not the initializations.

// #### *Hoisting with Variables:*

// 1. *`var` hoisting:*
//    Variables declared with `var` are hoisted but initialized with `undefined` until the line of initialization is reached.

//Example 

// console.log(x)    // undefined

// var x = 5    

// console.log(x)    // 5


// 2. *`let` and `const` hoisting:*
//    Variables declared with `let` and `const` are hoisted but not initialized, leading to a *temporal dead zone* between the declaration and initialization.

// console.log(y)

// let y = 5


// #### *Hoisting with Functions:*

// 1. *Function Declaration:*
//    Functions declared with the `function` keyword are fully hoisted, meaning the entire function body is available before it's defined in the code.

// Example

// greet() // Hello

// function greet(){
//   console.log("Hello!")
// }
   

// 2. *Function Expressions:*
//    Function expressions using `var`, `let`, or `const` are not hoisted in the same way as function declarations.

// greet() 

// var greet = function(){
//   console.log("Hello!")
// }


// ### *Closures in JavaScript*

// **Definition**:
// A closure is a function that retains access to its outer (lexical) scope even after the outer function has returned. Closures allow a function to access variables from its outer scope.

// function outer(){
//   let outerValue = "I'm Outside!"

//   function inner(){
//     console.log(outerValue)
//   }
//   return inner
// }

// const closureFunc = outer()  // 

// closureFunc()


// ### **Differences between Hoisting and Closures**:
// 1. *Hoisting* is about how the JavaScript interpreter moves variable and function declarations to the top of their scope before code execution.
// 2. *Closures* are about how inner functions retain access to variables from their outer scope even after the outer function has returned.



// ### *Promises in JavaScript*

// **Definition**:
// A *Promise* in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. Promises allow you to handle asynchronous tasks more cleanly by avoiding callback hell and providing a structured way to work with async code.

// ### **States of a Promise**:
// A Promise has three possible states:
// 1. **Pending**: The initial state, neither fulfilled nor rejected.
// 2. **Fulfilled**: The operation completed successfully.
// 3. **Rejected**: The operation failed.

// Once a Promise is either fulfilled or rejected, it is *settled* and cannot change states again.

// ### **Creating a Promise**:

// A Promise takes an executor function as an argument, which has two parameters: `resolve` and `reject`.

// const myPromise = new Promise((resolve, reject) => {
//   let success = true

//   if(success){
//     resolve("The operation was successfull")
//   }else{
//     reject("The Operation Failed")
//   }
// })

// myPromise
// .then(result => {
//   console.log(result)
// })
// .catch(err =>{
//   console.log(err)
// }
// )

// - **`resolve(value)`**: Called when the asynchronous task is successful.
// - **`reject(reason)`**: Called when the asynchronous task fails.

// const promiseChain = new Promise((resolve, reject) =>{
//   resolve(10)
// })

// promiseChain
// .then(value =>{
//   console.log(value)  // 10
//   return value*2
// })
// .then(value =>{
//   console.log(value)  //20
//   return value*3
// })
// .then(value =>{
//   console.log(value)  //60
//   return value*4
// })
// .catch(err =>{
//   console.log(err)
// })



// ### *Using Promises: `.then()` and `.catch()`*

// Once a Promise is created, you can attach handlers to handle success or failure.



// - **`.then()`**: Handles the fulfillment of the Promise.
// - **`.catch()`**: Handles the rejection of the Promise.

// #### **Chaining Promises**:

// You can chain multiple `.then()` blocks together to handle sequential asynchronous operations.



// ### *`Promise.all()`, `Promise.race()`, `Promise.allSettled()`*

// 1. **`Promise.all()`**: Waits for all promises to be resolved (or for one to be rejected).

   // const promise1 = Promise.resolve(5)
   // const promise2 = new Promise((resolve) => setTimeout(resolve, 5000, "Done"))

   // Promise.all([promise1, promise2]).then(value =>{
   //  console.log(value)
   // })

// const data = fetch("http://universities.hipolabs.com/search?country=United+States")

// console.log(data);


// ### *Async/Await in JavaScript*

// **Definition**:
// `async/await` is a more concise and readable way to work with Promises. It allows you to write asynchronous code that looks synchronous, making it easier to reason about.

// #### **How it works**:
// - `async` is used to declare a function as asynchronous. An `async` function automatically returns a Promise.
// - `await` pauses the execution of the function until the Promise is settled (resolved or rejected).

// ### **Creating an Async Function**:


// async function fetchData() {
//    let response = await fetch("http://universities.hipolabs.com/search?country=United+States")
//    console.log(response)
// }

// fetchData()


// ### **Using `await`**:

// `await` can only be used inside an `async` function. It waits for a Promise to resolve and then returns the result.


// #### **Error Handling with Async/Await**:

// You can use `try...catch` blocks to handle errors in async functions.

// async function fetchData() {
//    try {
//       let response = await fetch("http://universities.hipolabs.com/search?country=United+States")
//    console.log(response)
//    } catch (error) {
//       console.log("Got an error")
//    }
// }

// fetchData()

// ### **Practical Example with Async/Await: Fetch API**:

// Assume you are fetching data from an API. With `async/await`, this looks much cleaner than chaining `.then()` methods.

// javascript
// async function fetchUserData() {
//   try {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await response.json();
    
//     console.log(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// fetchUserData();


// - **Explanation**: 
//   - The `fetch` function returns a Promise.
//   - We await the response, then convert the response to JSON using `response.json()`, which also returns a Promise.
//   - If any errors occur (such as network issues), they are caught in the `catch` block.

// ### **Combining Promises and Async/Await**:

// You can mix both approaches when needed. For example, when you have multiple asynchronous operations that need to be handled simultaneously, you can use `Promise.all()` within an `async` function.

// javascript
// async function getAllData() {
//   try {
//     const [data1, data2] = await Promise.all([
//       fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
//       fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json())
//     ]);
    
//     console.log(data1, data2);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// getAllData();


// ### *Key Differences:*

// - **Promises**: You handle asynchronous code using `.then()`, `.catch()`, and `.finally()`.
// - **Async/Await**: You write asynchronous code in a more synchronous style, using `async` and `await`, with easier error handling through `try...catch`.

// ---

// **Conclusion**:
// Promises and `async/await` are powerful tools in JavaScript to handle asynchronous operations. Promises provide a structured way to manage async tasks, while `async/await` simplifies the syntax, making code more readable and maintainable.


// callback hell

// Callback hell in JavaScript is a situation where multiple callbacks are nested within a function, making the code hard to read, maintain, and debug.

// example

// fetchData(function(data){
//    console.log("Data fatched")

//    processData(data, function(precessedData){
//       console.log("Data processed")

//       saveData(precessedData, function(saveed){
//          console.log("Data saved")

//          notifyUser(saveed, function(notified){
//             console.log("User notified")
//          })
//       })
//    })
// })

// // Solution of callback hell --> Promises or Async/Await

// fetchData().then(data =>{
//    console.log("Data fetched")
//    return precessedData(data)
// }).then(processedData =>{
//    console.log("Data processed")
//    return saveData(processedData)
// }).then(saved=>{
//    console.log("Data saved")
//    return notifyUser(saved)
// }).then(()=>{
//    console.log("User notified")
// }).catch(error =>{
//    console.error("Error occurred", error)
// })


// // Example using async await 

// async function executeTasks(){
//    try {
//       let data = await fetchData()

//       console.log("Data fatched")

//       let processedData = await processData(data)

//       console.log("data processed")

//       let saved = await saveData(processedData)

//       console.log("Data saved")

//       await notifyUser(saved)

//       console.log("User notified")
//    } catch (error) {
//       console.error("Error occurred", error)
//    }
// }



//  Classes in js

// class definition

// class person {
//    constructor(name, age){
//       this.name = name
//       this.age = age
//    }

//    // method

//    greet(){
//       console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
//    }
// }

// create Object of class

// const person1 = new person("Amit", 24)
// const person2 = new person("Rohit", 26)

// person1.greet()
// person2.greet()

// Inheritance in js

/**
 * 
 * Example
 * 
*/

// Parent class
class Animal {
   constructor(name){
      this.name = name
   }

   eat(){
      console.log(`${this.name} is eating`)
   }
}

// child class
class Dog extends Animal{
   constructor(name, breed){
      super(name)
      this.breed = breed
   }

   bark(){
      console.log(`${this.name} is barking`)
   }
}


const dog1 = new Dog("Tommy", "Golden Retriever")

dog1.eat()
dog1.bark()