import React from 'react'
import heroMobile from '../assets/hero-mobile.jpg'
import heroTablet from '../assets/hero-tablet.jpg'
import heroDesktop from '../assets/hero-desktop.jpg'


const Hero = () => {
  return (
    <div className="hero overflow-hidden">
      <div className="hero-background relative">
        <img src={heroMobile} className="relative w-full sm:hidden" alt="hero-mobile" />   
        <img src={heroTablet} className="relative w-full hidden sm:block lg:hidden" alt="hero-tablet" />   
        <img src={heroDesktop} className="relative w-full hidden lg:block" alt="hero-desktop" /> 
        <div className="screen absolute inset-0"></div>        
      </div>
      <div className="hero-text absolute sm:top-28 left-0 text-white mx-3 my-10 sm:mx-10 md:mx-10 lg:mx-20 text-center sm:text-left">
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl">
          Hi, I'm Hikmah Yousuph
          {/* <span className="block mt-4 lg:text-5xl">Front-end Developer</span> */}
        </h1>
        <p className="text-gray-100 lg:w-2/3 mt-4 lg:mt-6  max-w-xl lg:max-w-7xl px-4 py-3 sm:p-0">
        I'm a web developer based in Lagos, Nigeria, specializing in React Front-end Web Development. Contact me for any available front-end job opportunities.
        </p>
        <button className="px-6 py-4 mt-6 hover:text-black transition-colors cursor-pointer ">Contact Me</button>
      </div>
    </div>
  )
}

export default Hero
