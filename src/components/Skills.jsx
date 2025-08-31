import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

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

// Split skills array
const mid = Math.ceil(skills.length / 2)
const topSkills = skills.slice(0, mid)
const bottomSkills = skills.slice(mid)

function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(8)
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      if (width > 1200) setSlidesToShow(8)
      else if (width > 1000) setSlidesToShow(6)
      else if (width > 700) setSlidesToShow(4)
      else if (width > 410) setSlidesToShow(3)
      else if (width > 210) setSlidesToShow(2)
      else setSlidesToShow(8)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])
  return slidesToShow
}

const SkillCarousel = ({ skills, rtl }) => {
  const slidesToShow = useSlidesToShow()
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    rtl,
  }
  return (
    <Slider {...settings}>
      {skills.map((skill) => (
        <div key={skill.name}>
          <div
            style={{ boxShadow: '0 4px 10px 0 rgb(189 208 223 / 25%)' }}
            className='skill mx-2 my-6 bg-white w-32 h-44 rounded flex flex-col items-center justify-center'
          >
            <div className='img-container w-20 h-28 flex items-center justify-center'>
              <img className='p-4' src={skill.icon} alt={skill.name} />
            </div>
            <div className='icon-name flex justify-center mb-3'>
              <h3 className='font-medium'>{skill.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  )
}

const Skills = () => (
  <section className='skills py-16 bg-gray-100 px-4 md:px-10 '>
    <h2 className='flex justify-center font-bold lg:text-4xl mb-8'>
      My Skills
    </h2>
    <div className='-space-y-6'>
      <SkillCarousel skills={topSkills} rtl={false} />
      <SkillCarousel skills={bottomSkills} rtl={true} />
    </div>
  </section>
)

export default Skills
