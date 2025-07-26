import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 '>
        <div>
            <h1 className='text-2xl font-bold'>Skills</h1>
            <p className='text-neutral-700'>The skills, tools and technologies I am really good at:</p>
            <div className='mt-4 grid grid-cols-3 lg:grid-cols-6 w-full gap-4'>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>JavaScript</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>React</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>Node
                </span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>Express</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>MongoDB</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>Next.js</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>Tailwind</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>Git</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>GitHub</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>JAVA</span>
                <span className='bg-gray-300 p-2 rounded-lg text-center'>PostgreSQL</span>

            </div>
        </div>
    </div>
  )
}

export default Skills