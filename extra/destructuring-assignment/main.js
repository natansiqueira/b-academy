console.log('Destructuring objects')
const person = {
  name: 'Natan',
  age: 23,
}

// a regular way to get a property from an object
// const name = person.name
// const age = person.age

// using destructuring assignment to get a property from a object
// const { name } = person
// const { age } = person
// if we are getting properties from the same object we can use { prop1, prop2, ... }
const { name, age } = person

console.log('name:', name)
console.log('age:', age)

const doors = 4
const color = 'red'

// using varibles to associate values to properties
// const car = {
//   doors: doors,
//   color: color,
// } 

// if a key has the same name of a variable we can use a short syntax
const car = {
  doors,
  color,
}

// oneline
// const car = { doors, color }

// we can extract separatedely the properties and rename using { property: newName, ... }
const { doors: doorsRenamed, color: colorRenamed } = car

console.log('car:', car)
console.log('doorsRenamed:', doorsRenamed)
console.log('colorRenamed:', colorRenamed)

console.log('=====')

console.log('Destructuring arrays')
// const coords = [100, 200]
const coords = ['Cordenadas', 100, 200]
// regular way to access indexes and get the value
//const x = coords[0]
// const y = coords[1]

// destructuring to get values from indexes
//const [x, y] = coords

// we can ignore indexes
const [title, x, y] = coords

console.log('title:', title)
console.log('x:', x)
console.log('y:', y)

console.log('=====')

console.log('Destructuring function arguments')

function getCoords ([x, y]) {
  return {
    x,
    y,
  }
}

console.log('getCords(...):', getCoords([100, 200]))

function setEnvVar ({ apiKey: myEnvVar }) {
  return myEnvVar;
}

console.log('setEnvVar(...):', setEnvVar({ apiKey: 'abc123' }))
