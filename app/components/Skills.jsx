import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 rounded-lg shadow-lg'>
        <div>
            <h1 className='text-2xl font-bold text-black dark:text-white'>Skills</h1>
            <p className='text-neutral-700 dark:text-neutral-300'>The skills, tools and technologies I am really good at:</p>

            <div>


            <div className='mt-8 border border-gray-300 dark:border-gray-600 shadow-lg p-5 rounded-lg bg-gray-50 dark:bg-slate-800'>
              <h1 className='text-lg font-semibold text-black dark:text-white'>Frontend</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>JavaScript</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>React.js</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Tailwind</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PrebuiltUI</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Figma</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Responsive</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 dark:border-gray-600 shadow-lg p-5 rounded-lg bg-gray-50 dark:bg-slate-800'>
              <h1 className='text-lg font-semibold text-black dark:text-white'>Backend</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Node.js</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Express.js</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PHP</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Rest APIs</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 dark:border-gray-600 shadow-lg p-5 rounded-lg bg-gray-50 dark:bg-slate-800'>
              <h1 className='text-lg font-semibold text-black dark:text-white'>Database</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PostgreSQL</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>MongoDB</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>MySQL</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 dark:border-gray-600 shadow-lg p-5 rounded-lg bg-gray-50 dark:bg-slate-800'>
              <h1 className='text-lg font-semibold text-black dark:text-white'>CS Fundamentals</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Java</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>OOPs</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>OS</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>DBMS</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 dark:border-gray-600 shadow-lg p-5 rounded-lg bg-gray-50 dark:bg-slate-800'>
              <h1 className='text-lg font-semibold text-black dark:text-white'>Tools</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Git</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Github</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>VS Code</span>
                <span className='bg-gray-200 dark:bg-slate-700 dark:text-white p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Cursor</span>
              </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Skills