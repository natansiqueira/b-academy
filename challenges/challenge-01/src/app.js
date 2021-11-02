import Header from './header'
import Nav from './nav'
import Sidebar from './sidebar'
import Content from './content'
import Footer from './footer'


function App () {
  return (
    <>
    <Header />
    <Nav />
    <section>
      <Sidebar />
      <Content />
    </section>
    <Footer />
    </>
  )
}

export default App
