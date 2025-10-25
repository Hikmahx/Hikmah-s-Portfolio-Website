import React, { useState } from 'react'

const Articles = () => {
  const [expandedPublication, setExpandedPublication] = useState(null)

  const articles = [
    {
      publication: 'OpenReplay',
      articles: [
        {
          name: 'Style your Toast Messages with React Toastify',
          date: 'Sep 2024',
          link: 'https://blog.openreplay.com/style-your-toast-messages-with-react-toastify/',
          description:
            'Learn how to implement and customize toast notifications in React applications using React-Toastify for enhanced user experience.',
        },
        {
          name: 'Interactive Maps in React with Leaflet',
          date: 'Apr 2024',
          link: 'https://blog.openreplay.com/interactive-maps-in-react-with-leaflet/',
          description:
            'A comprehensive guide to integrating Leaflet.js into React applications for creating dynamic, interactive maps.',
        },
        {
          name: 'Working with Environment Variables in React',
          date: 'Jan 2024',
          link: 'https://blog.openreplay.com/working-with-environment-variables-in-react/',
          description:
            'Understanding how to properly configure and use environment variables in React applications for security and flexibility.',
        },
        {
          name: 'How to Integrate the YouTube Player in Your React App',
          date: 'Dec 2023',
          link: 'https://blog.openreplay.com/how-to-integrate-the-youtube-player-in-your-react-app/',
          description:
            'Step-by-step guide on embedding and controlling YouTube videos within React applications.',
        },
      ],
    },
    {
      publication: 'Frontend Mentor',
      articles: [
        {
          name: "Git and GitHub Essentials: A Beginner's Guide",
          date: 'Jan 2024',
          link: 'https://www.frontendmentor.io/articles/git-and-github-essentials-a-beginners-guide-T4i1dKqfmH',
          description:
            'A comprehensive introduction to version control with Git and GitHub, covering essential commands and workflows for beginners.',
        },
        {
          name: "Integrating with APIs: A Beginner's Guide for Frontend Developers",
          date: 'Mar 2024',
          link: 'https://www.frontendmentor.io/articles/integrating-with-apis-a-beginners-guide-for-frontend-developers-u_xfEadBc-',
          description:
            'Learn the fundamentals of working with APIs, from making requests to handling responses in frontend applications.',
        },
      ],
    },
    {
      publication: 'SheCodeAfrica (Medium)',
      articles: [
        {
          name: 'Permissions in Python and JavaScript',
          date: 'Sep 2023',
          link: 'https://medium.com/shecodeafrica/permissions-in-python-and-javascript-a-django-and-node-js-express-comparison-1a8fcd7a4c33',
          description:
            'A comparative analysis of permission systems in Django (Python) and Node.js/Express (JavaScript).',
        },
        {
          name: 'Getting Started with Backend Engineering',
          date: 'Sep 2023',
          link: 'https://medium.com/shecodeafrica/getting-started-with-backend-engineering-a-beginners-guide-2426759238ea',
          description:
            'A beginner-friendly guide to understanding backend development concepts and getting started with server-side programming.',
        },
        {
          name: 'Understanding How useEffect Works',
          date: 'Jun 2023',
          link: 'https://medium.com/shecodeafrica/understanding-how-useeffect-works-a-comprehensive-guide-3b8b1781454c',
          description:
            "A comprehensive exploration of React's useEffect hook, its lifecycle, and best practices for managing side effects.",
        },
        {
          name: 'Responsive Web Design Practices',
          date: 'Apr 2023',
          link: 'https://medium.com/shecodeafrica/responsive-web-design-practices-59c4b2425080',
          description:
            'Essential techniques and best practices for creating responsive web designs that work across all devices.',
        },
      ],
    },
    {
      publication: 'Personal Blog (Medium)',
      articles: [
        {
          name: 'Web Accessibility: Making the Internet Inclusive for Everyone',
          date: 'Sep 2023',
          link: 'https://medium.com/@hikmahx/web-accessibility-making-the-internet-inclusive-for-everyone-1b1cee53e4a',
          description:
            'Exploring the importance of web accessibility and practical steps to make websites usable for people with disabilities.',
        },
        {
          name: 'How to Print PDF Files with React',
          date: 'May 2023',
          link: 'https://medium.com/@hikmahx/how-to-print-pdf-files-with-react-using-react-to-print-tailwind-884c46750c35',
          description:
            'A practical guide to implementing PDF generation and printing functionality in React applications using react-to-print.',
        },
        {
          name: 'Creating Customized Graphs with Chart.js in React',
          date: 'Aug 2023',
          link: 'https://medium.com/@hikmahx/creating-customized-graphs-with-chart-js-in-react-be72bb2ffd0',
          description:
            'Learn how to create beautiful, interactive data visualizations in React using the Chart.js library.',
        },
        {
          name: 'React Native for Beginners: Setting Up a Project',
          date: 'May 2023',
          link: 'https://medium.com/@hikmahx/react-native-for-beginners-setting-up-a-project-d534f321bb1a',
          description:
            'A step-by-step guide to setting up your first React Native project for mobile app development.',
        },
        {
          name: 'ChatGPT vs Developers',
          date: 'Apr 2023',
          link: 'https://medium.com/@hikmahx/chapgpt-vs-developers-e7a3eef20b94',
          description:
            'Examining the impact of AI tools like ChatGPT on software development and the developer role.',
        },
      ],
    },
  ]

  const togglePublication = (pub) => {
    setExpandedPublication(expandedPublication === pub ? null : pub)
  }

  return (
    <div id='articles' className='container mx-auto py-16 px-4'>
      <h2 className='flex justify-center font-bold lg:text-4xl mb-8'>
        Articles
      </h2>
      <div className='space-y-4'>
        {articles.map((pub) => (
          <div
            key={pub.publication}
            className={`bg-green-50 border-b border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-gray-400`}
            style={{
              background:
                expandedPublication === pub.publication ? '#fff' : '#202c3708',
            }}
          >
            <button
              onClick={() => togglePublication(pub.publication)}
              className={`w-full px-6 py-4 ${
                expandedPublication === pub.publication ? 'border-gray-500' : ''
              } flex items-center justify-between gap-4 bg-zinc-200 hover:bg-gray-800/50 transition-colors`}
            >
              <div className='flex items-center gap-3 w-96 justify-between'>
                <span className='text-xs lg:text-xl font-semibold text-left w-[80%]'>
                  {pub.publication}
                </span>
                <span className='text-xs lg:text-base px-3 py-1 rounded-full bg-gray-200 text-sm flex justify-end min-w-max'>
                  {pub.articles.length}{' '}
                  {pub.articles.length === 1 ? 'article' : 'articles'}
                </span>
              </div>
              {expandedPublication === pub.publication ? (
                <span className='text-xl'>+</span>
              ) : (
                <span className='text-xl'>-</span>
              )}
            </button>

            {expandedPublication === pub.publication && (
              <div className='p-6 space-y-4 animate-fadeIn'>
                {pub.articles.map((article, idx) => (
                  <a
                    key={idx}
                    href={article.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block p-4 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-green-50 hover:bg-opacity-40 transition-all group'
                  >
                    <div className='flex items-start justify-between gap-4'>
                      <div className='flex-1'>
                        <h3 className='font-semibold text-gray-800 group-hover:text-gray-900 transition-colors mb-2 flex items-center gap-2'>
                          {article.name}
                          {/* <span className='m-2 opacity-40'>
                            <img
                              className='w-6 h-6'
                              src={
                                require('../assets/external-link.svg').default
                              }
                              alt='icon'
                            />
                          </span> */}
                        </h3>
                        <p className='text-sm text-gray-600 mb-2 line-clamp-2'>
                          {article.description}
                        </p>
                        <div className='flex items-center gap-2 text-xs text-gray-500'>
                          <span>{article.date}</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}

export default Articles
