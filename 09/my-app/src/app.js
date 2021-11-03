// regular way to attach events to DOM elements
// const button = document.querySelector('#button')
// button.addEventListener(...)

// in react we pass inline
// <button onClick={fn} />

function App () {
  function handleClick () {
    console.log('Clicked!')
  }

  return (
    <button onClick={handleClick}>Click me!</button>
  )
}

export default App
