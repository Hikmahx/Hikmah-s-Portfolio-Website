import React from 'react'

const Footer = () => {
  return (
    <footer style={{background:'#1c2431'}} className="text-white p-8 w-full">
      <div className="upper flex items-center justify-between">
        <div class="logo m-6 md:m-0">
          <a class="text-base" href="/">HY</a>
        </div>
        <div className="links flex justify-end">
          <a href="https://linkedin.com/in/hikmah-yousuph-449467204/" target="_blank" className="w-5 h-5 m-2" aria-label="linkedin link">
            <svg className="w-5 h-5"  role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          </a>
          <a href="https://github.com/Hikmahx" target="_blank" className="w-5 h-5 m-2" aria-label="github link">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
      <p className="text-center w-full">© Hikmah Yousuph {new Date().getFullYear()}</p>      
    </footer>
  )
}

export default Footer
