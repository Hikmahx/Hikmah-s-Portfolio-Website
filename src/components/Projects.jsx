import React from 'react'

const projects = [
  {
    title: 'CONTENT WRITER WEBSITE',
    image: require('../assets/projects-images/content-writer.png'),
    description:
      'A full-stack website featuring a blog with rich-text editing (Tiptap), an admin section, a resume generation, and a contact form.  Includes image management with Cloudinary and Google authentication with NextAuth.',
    skills: [
      'next.js',
      'typescript',
      'tailwind',
      'shadcn/ui',
      'prisma',
      'cloudinary',
      'tiptap',
    ],
    github: 'https://github.com/Hikmahx/content-writer-website',
    live: 'https://sarah-yousuph.vercel.app',
  },
  {
    title: 'TECHSTICKS',
    image: require('../assets/projects-images/techsticks.vercel.app_.png'),
    description:
      'An open-source website collaborative tech resource platform where users can discover and contribute valuable resources across various fields, including design, AI, testing, accessibility, etc.',
    skills: ['typescript', 'next.js', 'tailwind'],
    github: 'https://github.com/Hikmahx/techsticks',
    live: 'https://techsticks.vercel.app/',
  },
  {
    title: 'SNEAKERS E-COMMERCE WEBSITE',
    image: require('../assets/projects-images/sneakers-ecommerce-website.herokuapp.com.png'),
    description:
      'A full-stack application for buying sneakers. Users can create accounts, update their info and password, manage their cart, set default addresses, view order history, and receive emails on purchases.',
    skills: [
      'react',
      'redux',
      'tailwind',
      'api',
      'JS',
      'node',
      'figma',
      'express',
      'mongoDB',
      'stripe API',
    ],
    github: 'https://github.com/Hikmahx/sneakers-ecommerce-website',
    live: 'https://sneakers-ecommerce-website.vercel.app',
    position: 'center',
  },
  {
    title: 'RIDE SHARE REST API',
    image: require('../assets/projects-images/ride-share-backend.vercel.app_.png'),
    description:
      'A REST API for users to create rides, request rides, and manage their profile and vehicles. It provides authentication functionality and supports CRUD operations for rides, vehicles, and ride requests.',
    skills: ['typescript', 'node.js', 'express.js', 'mongodb', 'jwt'],
    github: 'https://github.com/Hikmahx/ride-share',
    live: 'https://ride-share-backend.vercel.app/',
  },

  {
    title: 'BLOG WEBSITE',
    image: require('../assets/projects-images/blog-nextjs-hikmah-yousuphs-projects.vercel.app_blog.png'),
    description:
      'A blog website built with Next.js and MDX for articles. It features a clean and modern design, with support for syntax highlighting, responsive layouts. The UI is styled using ShadCN components for consistency and accessibility.',
    skills: ['typescript', 'next.js', 'mdx', 'tailwind', 'shadcn/ui'],
    github: 'https://github.com/Hikmahx/blog-nextjs',
    live: 'https://blog-nextjs-three-sigma.vercel.app/blog',
  },
  {
    title: 'LEARNWELL',
    image: require('../assets/projects-images/learnwell.png'),
    description:
      'A full-stack mobile application that empowers users to explore a wide range of subjects and topics in an engaging and user-friendly manner. It offers learning experience with a focus on mobile accessibility and interactivity.',
    skills: [
      'react-native',
      'expo',
      'figma',
      'express',
      'tailwind',
      'typescript',
    ],
    github: 'https://github.com/Hikmahx/LearnWell/',
    live: '',
  },
  // {
  //   title: 'GBEZOHN SPORTS',
  //   image: require('../assets/projects-images/gbezohn-sports.surge.sh_nba.png'),
  //   description:
  //     'A full-stack application for retrieving NBA and MLB sports details for a specific date, including summaries, analyses, graphs, scores, and standings. It also lets users explore historical data with interactive charts.',
  //   skills: [
  //     'react',
  //     'redux',
  //     'tailwind',
  //     'api',
  //     'chartjs',
  //     'dayjs',
  //     'node',
  //     'express',
  //     'mongoDB',
  //   ],
  //   github: 'https://github.com/filly-coder/Gbezohn-Sports/',
  //   live: 'https://gbezohn-sports.surge.sh/',
  // },
  // {
  //   title: 'PAYROLL SYSTEM',
  //   image: require('../assets/projects-images/payroll-system-rust.vercel.app_.png'),
  //   description:
  //     'A front-end application using JSON Server as a fake backend server for CRUD operations on employees. Once an employee is created in the database, users with administrative permission can generate and print the employee’s payslip as a PDF file.',
  //   skills: ['react', 'Tailwind', 'jest', 'typescript'],
  //   github: 'https://github.com/Hikmahx/payroll-system',
  //   live: 'https://payroll-system-rust.vercel.app/',
  // },
  {
    title: 'SPACE TOURISM',
    image: require('../assets/projects-images/space-tourism-hikmahx.vercel.app_.png'),
    description:
      'A mutli-page website providing informations about outer space. It contains two tab sections and a carousel.',
    skills: ['react', 'Tailwind', 'sass', 'JS'],
    github: 'https://github.com/Hikmahx/space-tourism',
    live: 'https://space-tourism-hikmahx.vercel.app/',
  },
  // {
  //   title: 'AGE CALCULATOR',
  //   image: require('../assets/projects-images/age-calculator-hikmahx.vercel.app_.png'),
  //   description:
  //     'A simple application for calculating your age. It includes form validation to handle invalid age inputs, a calendar from which you can select a date, and an animated count-up display of the provided date.',
  //   skills: [
  //     'react',
  //     'redux',
  //     'tailwind',
  //     'typescript',
  //     'dayjs',
  //     'countupjs',
  //     'vite',
  //   ],
  //   github: 'https://github.com/Hikmahx/age-calculator',
  //   live: 'https://age-calculator-hikmahx.vercel.app/',
  // },
  // {
  //   title: 'WL AUDIO',
  //   image: require('../assets/projects-images/wl-audio.vercel.app.png'),
  //   description:
  //     'A single page that allows you to play an embedded audio file on the website. The application includes a progress bar that updates in real-time to reflect the percentage of the audio being played.',
  //   skills: ['react', 'tailwind', 'typescript'],
  //   github: 'https://github.com/Hikmahx/wl-audio',
  //   live: 'https://wl-audio.vercel.app/',
  // },

  // {
  //   title: 'COUNTRIES FINDER',
  //   image: require('../assets/projects-images/countries-finder-hikmahx.vercel.app_.png'),
  //   description:
  //     'A web application which displays countries and their details using rest countries API, has a toggle-able dark theme, a search bar and can filter countries by region.',
  //   skills: ['next.js', 'tailwind', 'api', 'JS'],
  //   github: 'https://github.com/Hikmahx/rest-countries-api-finder',
  //   live: 'https://country-finder-git-nextjs-hikmahx.vercel.app/',
  // },

  // {
  //   title: 'JOB FILTERING',
  //   image: require('../assets/projects-images/react-job-list-filtering-hikmahx.vercel.app_ (1).png'),
  //   description:
  //     'Responsive single page website used to filter out jobs based on the button(s) clicked.',
  //   skills: ['react', 'sass', 'JS'],
  //   github: 'https://github.com/Hikmahx/react-job-list-filtering',
  //   live: 'https://react-job-list-filtering-hikmahx.vercel.app/',
  // },
  // {
  //   title: 'URL SHORTENING',
  //   image: require('../assets/projects-images/url-shortening-api-hikmahx.vercel.app_ (1).png'),
  //   description:
  //     'Using shrtcode API to generate newly shorten URL,the generated links can be copied with a click.',
  //   skills: ['JS', 'api', 'sass'],
  //   github: 'https://github.com/Hikmahx/Url-shortening-api',
  //   live: 'https://url-shortening-api.hikmahx.vercel.app/',
  // },
  //   {
  //   title: 'ROCK PAPER SCISSORS',
  //   image: require('../assets/projects-images/rock-paper-scissors.png'),
  //   description: 'One of my earliest projects - an interactive game where users can play Rock, Paper, Scissors against the computer. Features score tracking, game rules modal, and responsive design with smooth animations.',
  //   skills: ['JS', 'html', 'css', 'sass'],
  //   github: 'https://github.com/Hikmahx/Rock-paper-scissors',
  //   live: 'https://rock-paper-scissors-hikmahx.vercel.app/',
  // },
  // {
  //   title: 'EMPLOYEE DASHBOARD',
  //   image: require('../assets/projects-images/employee-dashboard-fawn.vercel.app_.png'),
  //   description:
  //     'A comprehensive dashboard for managing employee data. Features include employee CRUD operations, advanced filtering and sorting, and form validation with React Hook Form and Zod.',
  //   skills: ['next.js', 'typescript', 'tailwind', 'shadcn/ui'],
  //   github: 'https://github.com/Hikmahx/employee-dashboard',
  //   live: 'https://employee-dashboard-fawn.vercel.app/',
  // },
  {
    title: 'LENDSQR',
    image: require('../assets/projects-images/lendsqr-woad.vercel.app_dashboard_users.png'),
    description:
      'A full-stack dashboard for lenders. Includes authentication, data fetching from a mock API, search & pagination, and user status management (activation/blacklisting).',
    skills: ['react', 'typescript', 'redux', 'sass', 'express', 'mongodb'],
    github: 'https://github.com/Hikmahx/lendsqr-fe-test',
    live: 'https://lendsqr-woad.vercel.app/',
  },
]

const Projects = () => {
  return (
    <section id='projects' className='projects py-16 px-4 md:px-10 bg-gray-50'>
      <h2 className='flex justify-center font-bold lg:text-4xl mb-4'>
        Projects
      </h2>
      <div className='container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center mx-auto gap-5 lg:gap-8'>
        {projects.map((project) => (
          <div
            key={project.title}
            className='project bg-white relative overflow-hidden rounded-sm w-full shadow-md my-6'
          >
            <div className='img-wrapper relative w-full h-80'>
              <img
                className={`w-full h-full object-cover ${
                  project.position ? `object-${project.position}` : 'object-top'
                }`}
                src={project.image}
                alt='project-img'
              />
            </div>
            <div className='info p-6 flex flex-col justify-end'>
              <h3 className='font-bold uppercase mb-3'>{project.title}</h3>
              <p className='mb-4'>{project.description}</p>
              <div className='skills flex flex-wrap items-start mb-14'>
                {project.skills.map((skill) => (
                  <div
                    key={skill}
                    className='px-4 rounded-full m-1 bg-gray-200 text-gray-600'
                  >
                    {skill}
                  </div>
                ))}
              </div>
              <div className='links flex absolute bottom-6'>
                {project.github ? (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold m-2'
                    href={project.github}
                    aria-label='github link'
                  >
                    <img
                      className='w-6 h-6'
                      src={require('../assets/github.svg').default}
                      alt='icon'
                    />
                  </a>
                ) : (
                  <span className='m-2 opacity-40'>
                    <img
                      className='w-6 h-6'
                      src={require('../assets/github.svg').default}
                      alt='icon'
                    />
                  </span>
                )}
                {project.live ? (
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold m-2'
                    href={project.live}
                    aria-label='site link'
                  >
                    <img
                      className='w-6 h-6'
                      src={require('../assets/external-link.svg').default}
                      alt='icon'
                    />
                  </a>
                ) : (
                  <span className='m-2 opacity-40'>
                    <img
                      className='w-6 h-6'
                      src={require('../assets/external-link.svg').default}
                      alt='icon'
                    />
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
