import { useState } from 'react'

// State definition: characteristics about how something is presented at some moment
// We use state when we need to change some information on our component
// The component is rendered once
// We don't manipulate values directly
// We need to use hooks

// React calls app and render it on DOM once
// React watches hooks calls, update the state and re-render
function App () {
  // const state = useState(0)
  // const counter = state[0]
  // const setCounter = state[1]
  const [counter, setCounter] = useState(0)

  console.log('state:', counter)

  function increment () {
    // state[1](state[0] + 1)
    setCounter(counter + 1)
  } 

  function decrement () {
    // state[1](state[0] - 1)
    setCounter(counter - 1)
  }
 
  return (
    <>
      <h1>Counter: {counter}</h1> 
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
