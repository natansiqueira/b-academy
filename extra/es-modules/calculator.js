// function sum(x, y) {
//   return x + y
// }

// it makes the function sum accessible through import in other modules
// export default (reference) - only one per module
// export default sum

// export default as expression named or unamed
// export default function sum(x, y) {
//   return x + y
// }

// named exports individually
// export function sum (x, y) {
//   return x + y
// }

// export function mult (x, y) {
//   return x * y
// }

// export const a = 1

function sum (x, y) {
  return x + y
}

function mult (x, y) {
  return x * y
}

const a = 1
// another syntax for named export
export { sum, mult }
export default a 
