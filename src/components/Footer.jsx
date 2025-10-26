import React from 'react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/hikmah-yousuph',
      svg: (
        <svg
          className='w-5 h-5'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
          fill='currentColor'
        >
          <path d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z' />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Hikmahx',
      svg: (
        <svg
          className='w-5 h-5'
          xmlns='http://www.w3.org/2000/svg'
          role='img'
          viewBox='0 0 24 24'
          fill='currentColor'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
        </svg>
      ),
    },
    {
      name: 'Upwork',
      href: 'https://www.upwork.com/freelancers/~013824275b0e2e67bc',
      svg: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='currentColor'
          className='w-5 h-5'
          viewBox='0 0 32 32'
        >
          <path d='M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z' />
        </svg>
      ),
    },
  ]

  return (
    <footer style={{ background: '#1c2431' }} className='text-white p-8 w-full'>
      <div className='upper flex items-center justify-between'>
        <div className='logo m-6 md:m-0'>
          <a className='text-base' href='/'>
            HY
          </a>
        </div>

        <div className='links flex justify-end'>
          {socialLinks.map(({ name, href, svg }) => (
            <a
              key={name}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
              className='w-5 h-5 m-2'
              aria-label={`${name} link`}
            >
              {svg}
            </a>
          ))}
        </div>
      </div>

      <p className='text-center w-full'>
        © Hikmah Yousuph {new Date().getFullYear()}
      </p>
    </footer>
  )
}

export default Footer
