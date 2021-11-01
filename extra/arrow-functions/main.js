// literal function
// function sum (a, b) {
//   return a + b
//}

// console.log('sum(1, 2):', sum(1, 2))

// arrow function
// we don't have a literal syntax for arrow functions
// we assign to a variable as an expression
// arrow functions are anonymous
// we don't need the function keyword
// the function body remains the same
// if you don't need this you can safely use arrow functions
const sum = (a, b) => {
  return a + b
}

console.log('sum(1, 2):', sum(1, 2))

// we don't need the return keyword, we can use implicit return for a single expression
const mult = (a, b) => a * b

console.log('mult(1, 2):', mult(1, 2))

// we don't need parentheses for function arguments
const plusOne = a => a + 1

console.log('plusOne(5):', plusOne(5))

// functions without parameters should keep empty paretheses ()
const hello = () => 'hello world!'

console.log('hello():', hello())

// returning objects
// const getObject = () => {
//   return {
//     name: 'Natan'
//   }
// }

// implicit returning objects
// we can use paranthesis
const getObject = () => ({
  name: 'Natan'
})

console.log('getObject():', getObject())
