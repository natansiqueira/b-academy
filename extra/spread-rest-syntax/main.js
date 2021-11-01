// ... (spread operator) or spread syntax can be applied with any iterable
console.log('Spread operator with objects')
const person = {
  name: 'Natan',
  age: 23,
  country: 'Brazil',
}

// how to copy an object?
// using equal we are pointing the same reference
// const personUpdated = person
// console.log('person === personUpdated', person === personUpdated)

// declaring a new object using {}
// const personUpdated = {
//   name: person.name,
//   age: person.age,
// }

// using spread operator
// const personUpdated = {
//   ...person,
// }

// spreading and updating a property
const personUpdated = {
  ...person,
  age: 24,
}

console.log('person:', person)
console.log('personUpdated:', personUpdated)
console.log('person === personUpdated', person === personUpdated)

console.log('=====')
console.log('Spread operator with arrays')

const arr = [10, 20, 30]

// How to push a new value without modifying the original arr?
// concat method
// const arr2 = arr.concat(40)

// spread operator
const arr2 = [
  ...arr,
 40
]

console.log('arr:', arr)
console.log('arr2:', arr2)

console.log('=====')
console.log('Spread operator with strings')
const str = 'Natan'
// const arrStr = str.split('')
const arrStr = [...str]
console.log('arrStr:', arrStr)

console.log('=====')
console.log('Destructuring + Spread')
// How to remove a property without modifying the original object?
const { age, ...newPerson } = person

console.log('newPerson:', newPerson)

console.log('=====')
console.log('Rest syntax with functions')
function main (...args) {
  return args
}

console.log('main:', main(1, 2, 3, 4, 5, 7))
