// we can change the sum import name because we accessing the reference of the original function
// the module filename must be static
// import sum from './calculator.js'
// import add from './calculator.js'

// console.log('sum:', sum(1,2))
// it works as expected
// console.log('add:', add(1,2))
// same reference
// console.log('sum === add', sum === add)i

// import named functions or variables when we don't have a default
// import { sum } from './calculator.js'

// import default
// import x from './calculator.js'

// we can also rename a named export
import { sum as add } from './calculator.js'

// import default and named exports
//import x, { sum } from './calculator.js'

// import all exported values
import * as calculator from './calculator.js'

console.log('sum:', calculator.sum(1, 2))
console.log('add:', add(1, 2))
console.log('sum === add', calculator.sum === add)
console.log('a:', calculator.default)
