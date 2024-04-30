import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
    <Nav/>
    <Hero/>
    <Services/>
    <About/>
    <Contact/>
    </div>
  )
}

export default App