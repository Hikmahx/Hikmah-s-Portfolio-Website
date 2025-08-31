import React from 'react'

const skills = [
  // { name: 'HTML', icon: require('../assets/html.svg') },
  // { name: 'CSS', icon: require('../assets/css.svg') },
  { name: 'Python', icon: require('../assets/python.svg') },
  // { name: 'JavaScript', icon: require('../assets/javascript.svg') },
  { name: 'TypeScript', icon: require('../assets/typescript.svg') },
  { name: 'React', icon: require('../assets/react.svg') },
  { name: 'React Native', icon: require('../assets/react-native.svg') },
  { name: 'Figma', icon: require('../assets/figma.svg') },
  { name: 'Next.js', icon: require('../assets/nextjs.svg') },
  { name: 'Redux', icon: require('../assets/redux.svg') },
  { name: 'Git', icon: require('../assets/git.svg') },
  { name: 'Github', icon: require('../assets/github.svg') },
  { name: 'Sass', icon: require('../assets/sass.svg') },
  { name: 'GraphQL', icon: require('../assets/graphql.svg') },
  { name: 'MongoDB', icon: require('../assets/mongodb.svg') },
  { name: 'Tailwind', icon: require('../assets/tailwindcss.svg') },
  { name: 'Postman', icon: require('../assets/postman.svg') },
  { name: 'Vercel', icon: require('../assets/vercel.svg') },
  { name: 'VsCode', icon: require('../assets/visual-studio-code.svg') },
  { name: 'Jest', icon: require('../assets/jest.svg') },
  { name: 'Firebase', icon: require('../assets/firebase.svg') },
  { name: 'MixPanel', icon: require('../assets/mixpanel.svg') },
  { name: 'Bootstrap', icon: require('../assets/bootstrap.svg') },
]

const Skills = () => {
  return (
    <section className='skills py-16 bg-gray-100 px-4 md:px-10 '>
      <h2 className='flex justify-center font-bold lg:text-4xl'>My Skills</h2>
      <div className='container flex overflow-x-scroll mx-auto'>
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            style={{ boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)' }}
            className='skill mx-4 my-8 bg-white w-32 h-44 lg:w-40 lg:h-52 rounded'
          >
            <div className='img-container w-28 h-32 lg:w-36 lg:h-40'>
              <img className='p-7' src={skill.icon} alt='icon' />
            </div>
            <div className='icon-name flex justify-center mb-3'>
              <h3 className='font-bold'>{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
