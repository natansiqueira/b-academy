const animes = ['One Piece', "Attack on Titan", 'Vinland Saga']
// always use the same structure or type on lists
const menu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Séries',
    link: '/series'
  }
]


// the list grows and map is a good way to iterate over all items and building our list
// we need to pass a key attribute (unique id) to each list item
// don't use index as a key if you want to rearrange items of a list
// react uses key as dom identifiers
function App () {
  return (
    <>
      <h2>Navegue pelo site</h2>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
      <h3>Anime List</h3>
      <ul>
        {animes.map((anime) => (
          <li key={anime}>{anime}</li>
        ))}
      </ul>
    </>
  )
}

export default App
