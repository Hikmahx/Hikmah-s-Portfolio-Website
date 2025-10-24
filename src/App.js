import React from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Articles from './components/Articles';

const App = () => {
  return (
    <div className="App w-full relative">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Articles />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
