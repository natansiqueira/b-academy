import ReactDOM from 'react-dom'

function Title ({ name }) {
  console.log('name:', name)

  return (
    // we can pass attributes to html tags
    // we need to be careful with class because it conflicts with js class keyword
    // other cases are for - htmlfor, data-js (same), aria-label, tabIndex (use lowerCamelCase)
    <h1 id='title' className='highlight'>Hello {name}</h1>
  )
}

ReactDOM.render(
  // we can pass attributes to our component received as arguments
  <Title name='Natan' />,
  document.querySelector('#root')
)
