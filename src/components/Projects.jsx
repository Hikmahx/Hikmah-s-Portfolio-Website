import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="projects py-16 px-4 md:px-10 bg-gray-50">
      <h2 className="flex justify-center font-bold lg:text-4xl mb-4">Projects</h2>
      <div className="container flex flex-wrap justify-center mx-auto">
        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/countries-finder-hikmahx.vercel.app_.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">COUNTRIES FINDER</h3>
            <p className="mb-4">
              A web application which displays countries and their details using rest countries API,
              has a toggle-able dark theme, a search bar and can filter countries by region.
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react-router</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">tailwind</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">api</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/rest-countries-api-finder" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://countries-finder-hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/react-job-list-filtering-hikmahx.vercel.app_ (1).png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">JOB FILTERING</h3>
            <p className="mb-4">
              Responsive single page website used to filter out jobs based on the button(s) clicked. 
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">sass</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/react-job-list-filtering" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://react-job-list-filtering-hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/space-tourism-hikmahx.vercel.app_.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">SPACE TOURISM</h3>
            <p className="mb-4">
              A mutli-page website providing informations about outer space. 
              It contains two tab sections and a carousel.
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
            <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react-router</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">Tailwind</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">sass</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/space-tourism" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://space-tourism-hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/url-shortening-api-hikmahx.vercel.app_ (1).png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">URL SHORTENING</h3>
            <p className="mb-4">
            Using shrtcode API to generate newly shorten URL,the generated links can be copied with a click.
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">api</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">sass</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/Url-shortening-api" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://url-shortening-api.hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/ecommerce-product-page-hikmahx.vercel.app_.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">ECOMMERCE PRODUCT PAGE</h3>
            <p className="mb-4">
              A single responsive page app of a product with a desktop light box and mobile slider
              , and with all functionalities of a cart
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">ionicons</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">Tailwind</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/ecommerce-product-page" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://ecommerce-product-page-hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/todo-react-app.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">TODO APP</h3>
            <p className="mb-4">
              A CRUD app with dark theme toggle, drag-and-drop, and filter functions. Initially, JSON-Server 
              was the backend until the Django rest API was created.
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">react</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">django</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">axios</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">tailwind</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">rest-api</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/todo-django-app" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://todo-react-django-app.herokuapp.com/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
