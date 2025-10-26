import React, { useState } from 'react'

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false)

  const toggleMenu = () => setMenuActive((prev) => !prev)

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className='absolute text-white left-0 right-0 flex items-baseline md:items-center justify-between z-20 md:my-8 md:mx-10 lg:my-16 lg:mx-20'>
      <div className='logo m-6 md:m-0'>
        <a className='text-base' href='/'>
          HY
        </a>
      </div>
      <div
        onClick={toggleMenu}
        className={`hamburger-menu z-10 m-6 md:m-0 md:hidden cursor-pointer flex flex-col items-center ${
          menuActive ? 'active' : ''
        }`}
      >
        <img
          className='hamburger-icon w-full'
          src={require('../assets/icon-hamburger.svg').default}
          alt='menu icon'
        />
        <img
          className='close-icon w-full'
          src={require('../assets/icon-close.svg').default}
          alt='close icon'
        />
      </div>
      <nav
        className={`menu flex-1 fixed md:relative top-0 right-0 left-24 md:left-0 pt-28 md:pt-0 pl-8 md:pl-0 transition-all duration-300 ${
          menuActive ? 'active' : ''
        }`}
      >
        <ul className='flex md:items-center md:justify-end text-white uppercase h-screen md:h-auto flex-col md:flex-row'>
          {navLinks.map(({ label, href }) => (
            <li
              key={label}
              onClick={toggleMenu}
              className='mx-6 md:mx-3 my-3 md:w-auto text-center'
            >
              <a href={href}>{label}</a>
            </li>
          ))}
          <li
            onClick={toggleMenu}
            style={{ borderColor: '#6cfdf0' }}
            className='mx-6 md:mx-3 my-3 md:w-auto text-center border-2 rounded'
          >
            <a
              href={require('../assets/Hikmah-Yousuph-Resume.pdf')}
              target='_blank'
              rel='noopener noreferrer'
              className='py-6 md:py-4 px-6 hover:text-black transition-colors'
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
