import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="App w-full relative">
      <Navbar/>
      <Hero/>
      <Skills/>
    </div>
  )
}

export default App
