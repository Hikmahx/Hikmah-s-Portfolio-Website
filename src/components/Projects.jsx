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
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/bookmark-landing-page-hikmahx.vercel.app_.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">BOOKMARK LANDING PAGE</h3>
            <p className="mb-4">
              A landing page with a functional tabs section and 
              an accordion. It is highly responsive 
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">sass</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/bookmark-landing-page" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://bookmark-landing-page-hikmahx.vercel.app/" aria-label="site link">
                <img className="w-6 h-6" src={require('../assets/external-link.svg')} alt="icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="project bg-white relative overflow-hidden rounded-sm w-72 lg:w-80 shadow-md mx-4 my-6">
          <div className="img-wrapper relative w-72 lg:w-80 h-72 lg:h-80">
            <img className="w-full h-full object-cover" src={require('../assets/projects-images/insure-landing-page.hikmahx.vercel.app_.png')} alt="project-img" />
          </div>
          <div className="info p-6 flex flex-col justify-end">
            <h3 className="font-bold uppercase mb-3">INSURE LANDING PAGE</h3>
            <p className="mb-4">
              A responsive and simple landing page buit with a bit of vanilla JavaScript and sass. 
            </p>
            <div className="skills flex flex-wrap items-start mb-5">
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">sass</div>
              <div className="px-4 rounded-full m-1 bg-gray-200 text-gray-600">JS</div>
            </div>
            <div className="links flex">
              <a target="_blank" className="font-semibold m-2" href="https://github.com/Hikmahx/insure-landing-page" aria-label="github link">
                <img className="w-6 h-6" src={require('../assets/github.svg')} alt="icon" />
              </a>
              <a target="_blank" className="font-semibold m-2" href="https://insure-landing-page.hikmahx.vercel.app/" aria-label="site link">
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
