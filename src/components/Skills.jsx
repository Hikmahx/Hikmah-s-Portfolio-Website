import React from 'react'
import reactIcon from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'

const Skills = () => {
  return (
    <section className="skills py-16 bg-gray-100 px-4 md:px-10 ">
      <h2 className="flex justify-center font-bold lg:text-4xl">My Skills</h2>

    <div className="container flex overflow-x-scroll mx-auto">
    <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/html.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">HTML</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/css.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">CSS</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/python.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Python</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/javascript.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">JavaScript</h3>
        </div>
      </div>      
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={reactIcon} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">React</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={bootstrap} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Bootstrap</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/git.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Git</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/github.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Github</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/sass.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Sass</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/tailwindcss.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Tailwind</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/vercel.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">Vercel</h3>
        </div>
      </div>
      <div style={{boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)'}} className="skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded">
        <div className="img-container w-28 h-32 lg:w-36 lg:h-40">
          <img className="p-7" src={require('../assets/visual-studio-code.svg')} alt="icon" />
        </div>
        <div className="icon-name flex justify-center mb-3">
          <h3 className="font-bold">VsCode</h3>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills
