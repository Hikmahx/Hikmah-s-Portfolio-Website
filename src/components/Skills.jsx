import React from 'react'
import reactIcon from '../assets/react.svg'
import bootstrap from '../assets/bootstrap.svg'

const Skills = () => {
  return (
    <section className="skills py-16 bg-gray-100 px-4 md:px-10 ">
      <h2 className="flex justify-center font-bold lg:text-4xl">My Skills</h2>
      <ul className="mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 gap-x-2  marker:text-[#27d7c5] list-disc mx-auto items-center">
        <li className="py-3">HTML</li>
        <li className="py-3">CSS</li>
        <li className="py-3">JavaScript</li>
        <li className="py-3">TypeScript</li>
        <li className="py-3">Python</li>
        <li className="py-3">React</li>
        <li className="py-3">Tailwind</li>
        <li className="py-3">Bootstrap</li>
        <li className="py-3">SCSS/SASS</li>
        <li className="py-3">Git/GitHub</li>
        <li className="py-3">Figma</li>
        <li className="py-3">Next JS</li>
        <li className="py-3">Redux</li>
        <li className="py-3">Node JS</li>
        <li className="py-3">Express JS</li>
        <li className="py-3">MongoDB</li>
        <li className="py-3">Django</li>
        <li className="py-3">REST API</li>
        <li className="py-3">Postman</li>
        <li className="py-3">React Native</li>
      </ul>
    </section>
  )
}

export default Skills
