import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Timeline from './components/Timeline' // Import the Timeline component
// import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Timeline/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App
