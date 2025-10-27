import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 bg-gradient-to-b from-white to-blue-50 p-6 rounded-lg shadow-lg'>
        <div>
            <h1 className='text-2xl font-bold'>Skills</h1>
            <p className='text-neutral-700'>The skills, tools and technologies I am really good at:</p>

            <div>


            <div className='mt-8 border border-gray-300 shadow-lg p-5 rounded-lg'>
              <h1 className='text-lg font-semibold'>Frontend</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>JavaScript</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>React.js</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Tailwind</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PrebuiltUI</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Figma</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Responsive</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 shadow-lg p-5 rounded-lg'>
              <h1 className='text-lg font-semibold'>Backend</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Node.js</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Express.js</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PHP</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Rest APIs</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 shadow-lg p-5 rounded-lg'>
              <h1 className='text-lg font-semibold'>Database</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>PostgreSQL</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>MongoDB</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>MySQL</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 shadow-lg p-5 rounded-lg'>
              <h1 className='text-lg font-semibold'>CS Fundamentals</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Java</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>OOPs</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>OS</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>DBMS</span>
              </div>
            </div>

            <div className='mt-5 border border-gray-300 shadow-lg p-5 rounded-lg'>
              <h1 className='text-lg font-semibold'>Tools</h1>
              <div className='mt-4 grid grid-cols-3 lg:grid-cols-4 w-full gap-4'>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Git</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Github</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>VS Code</span>
                <span className='bg-gray-200 p-2 rounded-lg text-center hover:scale-110 transition duration-200'>Cursor</span>
              </div>
            </div>


            </div>
        </div>
    </div>
  )
}

export default Skills