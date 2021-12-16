import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  const displayMenu = ()=>{
    let hamburger = document.querySelector('.hamburger-menu');
    let menu= document.querySelector('.menu');
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
  }

  return (
    <header className="absolute text-white left-0 right-0 flex items-baseline md:items-center justify-between z-20 md:my-8 md:mx-10 lg:my-16 lg:mx-20">
      <div className="logo m-6 md:m-0">
        <a href="/">
          <img className="w-36" src={logo} alt="logo" />
        </a>
      </div>
      <div onClick={displayMenu} className="hamburger-menu z-10 m-6 md:m-0 md:hidden cursor-pointer flex flex-col items-center">
        <img className="hamburger-icon w-full" src={require('../assets/icon-hamburger.svg')} alt="icon" />
        <img className="close-icon w-full" src={require('../assets/icon-close.svg')} alt="icon" />
      </div>
      <nav className="menu flex-1 fixed md:relative top-0 right-0 left-24 md:left-0 pt-28 md:pt-0 pl-8 md:pl-0">
        <ul className="flex md:items-center md:justify-end text-white uppercase h-screen md:h-auto flex-col md:flex-row">
          <li onClick={displayMenu} className="mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="#home sm:text-xl md:text-base ">Home</a>
          </li>
          <li onClick={displayMenu} className="mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="#projects sm:text-xl md:text-base ">Projects</a>
          </li>
          <li onClick={displayMenu} className="mx-6 md:mx-3 my-3 md:w-auto text-center">
            <a href="#contact sm:text-xl md:text-base ">Contact</a>
          </li>
          <li onClick={displayMenu} style={{borderColor:'#6cfdf0'}} className="mx-6 md:mx-3 my-3 md:w-auto text-center border-2 rounded">
            <a href="/" className=" sm:text-xl md:text-base py-6 md:py-4 px-6 hover:text-black transition-colors">Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
