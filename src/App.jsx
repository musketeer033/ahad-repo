import Hero from './components/Hero'
import ServiceCards from './components/ServiceCards'
import Benefits from './components/Benefits'
import BookNow from './components/BookNow'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ServiceCards />
        <Benefits />
        <BookNow />
      </main>
      <Footer />
    </div>
  )
}

export default App
