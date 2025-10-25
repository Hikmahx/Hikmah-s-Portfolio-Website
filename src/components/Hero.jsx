import React from 'react'
import heroMobile from '../assets/hero-img/hero-mobile.jpg'
import heroTablet from '../assets/hero-img/hero-tablet.jpg'
import heroDesktop from '../assets/hero-img/hero-desktop.jpg'


const Hero = () => {
  return (
    <section id="home" className="hero relative overflow-hidden">
      <div className="hero-background absolute inset-0">
        <img src={heroMobile} className="relative w-full h-full bg-cover sm:hidden" alt="hero-mobile" />   
        <img src={heroTablet} className="relative w-full hidden sm:block lg:hidden" alt="hero-tablet" />   
        <img src={heroDesktop} className="relative w-full hidden lg:block" alt="hero-desktop" /> 
        <div className="screen absolute inset-0"></div>        
      </div>
      <div className="hero-text relative sm:mt-28 sm:mb-20 md:mt-32 lg:mt-40 lg:mb-28 text-white mx-2 my-10 sm:mx-10 md:mx-10 lg:mx-20 text-center sm:text-left">
        <h1 className="sm:text-4xl md:text-5xl lg:text-7xl 2xl:text-8xl pt-12">
          Hi, I'm Hikmah Yousuph
          {/* <span className="block mt-4 lg:text-5xl">Front-end Developer</span> */}
        </h1>
        <p className="text-gray-100 lg:w-2/3 mt-4 lg:mt-6 max-w-xl lg:max-w-3xl px-4 py-3 sm:p-0 leading-loose">
          Full-Stack Software Developer and Open-Source Contributor passionate about building web and mobile apps, designing intuitive UIs, and tech writing. Contact me for any available job opportunities.
        </p>
        <a href="#contact">
          <button className="px-6 py-4 mt-6 hover:text-black transition-colors cursor-pointer ">Contact Me</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
