//? ### What is an Object in JavaScript?

// In JavaScript, an object is a data structure that allows you to store collections of data and more complex entities. 
// Objects are composed of key-value pairs, where each key is a string (or Symbol) and the value can be any data type, 


//? ### Creating an Object

// You can create an object in several ways:

//Todo 1. **Object Literal Notation**

//*    This is the most common and concise way to create an object

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
//   greet: function(){
//     return `Hello, my name is ${this.firstName} ${this.lastName} `
//   }
// }


//Todo 2. **Using the `new Object()` Syntax**

//*    This is less common but useful for understanding the Object constructor.

// const person = new Object()
// person.firstName = "John"
// person.lastName = "Doe"
// person.age = 30
// person.greet = function(){
//       return `Hello, my name is ${this.firstName} ${this.lastName} `
// }


//Todo 3. **Using a Constructor Function**

//*    Constructor functions allow you to create multiple objects with the same structure.

// function Person(firstName, lastName, age){
//   this.firstName = firstName
//   this.lastName = lastName
//   this.age = age
// }

// const person1 = new Person("John", "Doe", 30)

// const person2 = new Person("Rakesh", "Jha", 30)


//Todo 4. **Using `Object.create()`**

//*    This method creates a new object with the specified prototype object and properties.

// const personProtype = {
//   greet: function(){
//           return `Hello, my name is ${this.firstName} ${this.lastName} `
//         }
// }

// const person = Object.create(personProtype)

// person.firstName = "Raman"
// person.lastName = "Jha"
// person.age = 35


//? ### Accessing and Modifying Object Properties

//Todo 1. **Dot Notation**

// const person = new Object()
// person.firstName = "John"
// person.lastName = "Doe"
// person.age = 30
// person.greet = function(){
//       return `Hello, my name is ${this.firstName} ${this.lastName} `
// }

// console.log(person.firstName)

//Todo 2. **Bracket Notation**

// const person = new Object()
// person.firstName = "John"
// person.lastName = "Doe"
// person.age = 30
// person.greet = function(){
//       return `Hello, my name is ${this.firstName} ${this.lastName} `
// }

// console.log(person['age'])

// person['age'] = 31

// console.log(person['age'])


//Todo 3. **Adding New Properties**
// add email in above object

//Todo 4. **Deleting Properties**

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
//   greet: function(){
//     return `Hello, my name is ${this.firstName} ${this.lastName} `
//   }
// }

// console.log(person)

// delete person.age
// delete person.greet

// console.log(person)

//? ### Iterating Over Object Properties

//Todo 1. **Using `for...in` Loop**

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
//   greet: function(){
//     return `Hello, my name is ${this.firstName} ${this.lastName} `
//   }
// }

// for(let key in person){
//   console.log(key, ":", person[key])
// }

//Todo 2. **Using `Object.keys()`, `Object.values()`, and `Object.entries()`**

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
//   greet: function(){
//     return `Hello, my name is ${this.firstName} ${this.lastName} `
//   }
// }

// console.log(Object.keys(person)) // ['firstName', 'lastName', 'age', 'greet']

// console.log(Object.values(person))
// console.log(Object.entries(person))

//? ### Inheritance and Prototypes

//Todo 1. **Prototype Inheritance**

//    JavaScript uses prototypes for inheritance. Each object has a prototype from which it can inherit properties and methods.

// function Animal(name){
//   this.name = name
// }

// Animal.prototype.sayHello = function(){
//   return `Hello, I am ${this.name}`
// }

// const dog = new Animal('Buddy')

// console.log(dog.sayHello())


//Todo 2. **`Object.getPrototypeOf()` and `Object.setPrototypeOf()`**

// function Animal(name){
//   this.name = name
// }

// Animal.prototype.sayHello = function(){
//   return `Hello, I am ${this.name}`
// }

// const dog = new Animal('Buddy')

// const prototype = Object.getPrototypeOf(dog)

// console.log(prototype)

// Object.setPrototypeOf(dog, {speek: function(){return `Woof!!!!!!!!!!!!!!!!`}})

// console.log(dog.speek())

//? ### Advanced Concepts

//Todo 1. **Object Destructuring**

// A shortehand for extracting values from objects and assign them to variables.

// const person = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
// }

// const {firstName, lastName, age} = person  // object Destructuring

// console.log(firstName, lastName)

//Todo 2. **Object Spread Operator**
// Useful for copying or merging objects.

// const studentIndo = {
//   firstName: "Jhon",
//   lastName: "Doe",
//   age: 25,
// }

// const studentContact = {
//   mobile: "+919876543210",
//   email: "std@example.com"
// }

// const updateStudent = {...studentIndo, ...studentContact}

// console.log(updateStudent)

//Todo 3. **`Object.freeze()`, `Object.seal()`, and `Object.preventExtensions()`**

//  Methods to control the mutability of objects.

const person = {
  firstName: "Jhon",
  lastName: "Doe",
  age: 25,
}

// Object.freeze(person)  // Makes the object immutable
// person.email = "person@gmail.com"

// Object.seal(person)  // Prevents adding or removing properties, but also modification in existing properties
// person.age = 45

// Object.preventExtensions(person)  // prevents adding new properties
// person.email = "person@gmail.com"

// console.log(person)

//Todo - Define a person object


//Todo Access properties


//Todo Modify properties


//Todo Add new properties


//Todo Iterate over properties


//Todo Use destructuring


// ### 1. **Model a Student's Profile**
//    - **Task**: Create an object that represents a student's profile with properties like `name`, `age`, `grade`, `subjects`, and `hobbies`. 
//    - **Real-Life Connection**: A student's profile in a school database.


// ### 2. **Plan a Movie Schedule**
//    - **Task**: Create an object representing a movie schedule with properties like `title`, `startTime`, `endTime`, and a method `isPlaying(currentTime)` to check if the movie is playing.
//    - **Real-Life Connection**: Checking if a movie is currently being shown in a theater.
