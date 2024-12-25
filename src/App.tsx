import Welcome from './assets/Welcome'
import Footer from './assets/Footer'
import Guide from './assets/Guide'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1">
        <Guide />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
