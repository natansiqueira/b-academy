import { Fragment } from 'react'
import ReactDOM from 'react-dom'

// a custom component is a function
// we use CamelCase for component name
function Title () {
  // we always need to wrap our components in a container tag
  // we can't break lines after return
  // we can use (...) to wrap our return and break lines
  return (
    // fragment allow us avoid an extra div our other tag around sibling tags
    // render only inner tags/components
    // <> or <Fragment> (we need to import on this case)
    <Fragment>
      <h1>My app</h1>
      <span>From my app</span>
    </Fragment>
  )
}

ReactDOM.render(
  // now we can use title as a jsx tag
  <Title />,
  document.querySelector('#root')
)
