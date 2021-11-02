import { Fragment } from 'react'

// component app
function App () {
  return (
    // we can use other components inside a component
    // children is the content of the tag
    // we can pass children as an attribute <C children='...' />
    <Title>
      My awesome title<br />
      <i>Custom title</i>
      { /* interpolation syntax - evaluates before rendering */ }
      {3}
      { /* the below values aren't rendered */ }
      {true}
      {false}
      {null}
      {undefined}
      { /* array of components */ }
      {['Item', 'Item', <h1>Another title</h1>]}
    </Title>
  )
}

// component title
function Title ({ children }) {
  return (
    <Fragment>
      <h1>My title component</h1>
      <h2>The content is {children}</h2>
    </Fragment>
  )
}

export default App
