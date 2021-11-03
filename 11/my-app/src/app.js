import { useState } from 'react'

function App () {
  // we can define a state of any type
  // we can change the type at any moment but try to keep the same type through the component lifecycle
  // const [name, setName] = useState('Natan')
  const [counter, setCounter] = useState(null)

  function increment () {
    setCounter(counter + 1);
  }

  function decrement () {
    setCounter(counter - 1);
  }  
  
  // always return a react node
  // we can't use ifs on JSX
  // we need to use ternary operator or short circuit
  return (
    <>
      <h1>
        {/* true, false, null react doesn't render but care with zeros in short circuit */}
        {/*counter === null && 'Empty counter'*/}
        {/*counter !== null && `Counter ${counter}`*/}
      {!counter && 'Empty counter'}
      {!!counter && `Counter: ${counter}`}
      </h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App
