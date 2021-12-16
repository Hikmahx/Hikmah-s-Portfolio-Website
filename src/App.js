import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App w-full relative">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
