/**================================================================================================
 *!                                        Array in JavaScript
 *================================================================================================**/

//? What is an Array?
/*
An array is a special variable, which can hold more than one value at a time. 
It’s a list-like object that can store multiple values in a single variable.
*/

// let Str = "Hello"  // stack memory 

// let str2 = Str


//? Creating an Array
// You can create an array in JavaScript in several ways:

/**================================================================================================
 *Todo                                         Using Array Literals
 *================================================================================================**/

// let fruits = ["Apple", "Banana", "Mango"] 

/**================================================================================================
 *todo                                      Using the new Array() Constructor
 *================================================================================================**/

// let fruits = new Array("Apple", "Banana", "Mango")

//? Accessing Array Elements

// Array elements are accessed using their index, with the first element at index 0.

// let fruits = ["Apple", "Banana", "Mango"] 

// console.log(fruits[0]);


//? Array Properties

// let fruits = ["Apple", "Banana", "Mango"] 
// console.log(fruits.length);


/**================================================================================================
 *todo                                         Array Methods
 *================================================================================================**/

//? Adding and Removing Elements

//* push(): Adds one or more elements to the end of an array.

// let fruits = ["Apple", "Banana", "Mango"] 
// fruits.push("Papaya")

// console.log(fruits);

//* pop(): Removes the last element from an array.

// let fruits = ["Apple", "Banana", "Mango"] 
// fruits.pop()

// console.log(fruits);

//* shift(): Removes the first element from an array.



//* unshift(): Adds one or more elements to the beginning of an array.



/**================================================================================================
 *todo                                         Iterating Over an Array
 *================================================================================================**/

//? for Loop:

// let city = ["Jaipur", "Jodhpur", "Bharatpur", "Dosa"]

// for (let i = 0; i < city.length; i++){
  
//   console.log(city[i])
// }

//? forEach(): Executes a provided function once for each array element.

// let city = ["Jaipur", "Jodhpur", "Bharatpur", "Dosa"]

// city.forEach(function(item, index){
//   console.log(item, index)
// });



/**================================================================================================
 *todo                                         Finding and Filtering Elements
 *================================================================================================**/

//? indexOf(): Returns the first index at which a given element can be found.

// let num = [23,45,43,12,45,23]

// console.log(num.indexOf(45));


//? `lastIndexOf()` method returns the last index at which a given element can be found in the array, or `-1` if it is not present. The array is searched backwards, starting at `fromIndex`.

//todo

//? find(): Returns the value of the first element that satisfies the provided testing function.

// let numbers = [1,12,13,4,5]
// let result = numbers.find(function(number)  {return number > 12})

// console.log(result);



//? findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns `-1`.

// Todo

//? findLast()` method returns the value of the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

// let numbers = [1,12,13,4,5]
// let result = numbers.findLast(function(number)  {return number > 10})

// console.log(result);

//? at() method takes an integer value and returns the item at that index. It supports negative integers, counting back from the last item.

// let fruits = ["Apple", "Banana", "Mango"] 

// console.log(fruits.at(1));
// console.log(fruits.at(-2));

//? concatconcat() method is used to merge two or more arrays. It does not change the existing arrays but returns a new array.

// let fruits = ["Apple", "Banana", "Mango"] 

// let moreFruits = ["Grapes", "Guava"] 

// let someMoreFruits = ["Plam", "Pineapple"]

// let allFruites = fruits.concat(moreFruits, someMoreFruits)

// console.log(allFruites)


//?  "constructor" property returns a reference to the array function that created the prototype instance. It's generally not used directly, but understanding it is important for inheritance and object creation.

// let fruits = ["Apple", "Banana", "Mango"]

// console.log(fruits.constructor === Array);


//? copyWithin() method shallow copies part of an array to another location in the same array and returns it, without modifying its length.

// let fruits = ["Apple", "Banana", "Mango", "Pineapple"]

// fruits.copyWithin(2, 0, 2)

// console.log(fruits)

//? entries() method returns a new array iterator object that contains the key/value pairs for each index in the array.

// let fruits = ["Apple", "Banana", "Mango", "Pineapple"]

// let iterator = fruits.entries()

// for(let entry of iterator){
//   console.log(entry);
  
// }

//? every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value

// let numbers = [2,4,7,8]

// let allEven = numbers.every(num => num % 2 === 0)
// console.log(allEven);


//? fill() method fills all the elements in an array from a start index to an end index with a static value.

// let fruits = ["Apple", "Banana", "Mango", "Pineapple"]

// fruits.fill("Orange", 1, 3)

// console.log(fruits);


//? `includes()` method determines whether an array includes a certain value among its entries, returning `true` or `false` as appropriate.

// Todo

//? `join()` method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.

// let fruits = ["Apple", "Banana", "Mango", "Pineapple"]
// let fruitString = fruits.join(", ")
// console.log(fruitString);


//? `keys()` method returns a new array iterator object that contains the keys for each index in the array.

//todo

//? `reverse()` method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

//todo

//? `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `begin` to `end` (end not included). The original array will not be modified.



//? `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.



//? `some()` method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.



//? `sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code unit values.


//? `toSorted()` method creates a new array with the elements sorted in ascending order without modifying the original array.



//? `toString()` method returns a string representing the specified array and its elements.



//? `toLocaleString()` method returns a string representing the elements of the array. The elements are converted to strings using their `toLocaleString` methods and these strings are separated by a locale-specific string (such as a comma “,”).



//? `toReversed()` method creates a new array with the elements in the reverse order compared to the original array. The original array remains unchanged.



//? `toSpliced()` method creates a new array by copying elements from the original array and applying the `splice()` operation on this new array. The original array remains unchanged.



//? `values()` method returns a new array iterator object that contains the values for each index in the array.


//? `with()` method creates a new array where an element at a specific index is replaced with a new value, without modifying the original array.




//? `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array.



//? filter(): Creates a new array with all elements that pass the test implemented by the provided function.



//? `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



//? `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.



//? `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.



//? `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is identical to a `map()` followed by a `flat()` of depth 1.

