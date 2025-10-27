import Image from 'next/image'
import React from 'react'
import lpu from '../assets/lpu.jpeg'

const Education = () => {
  return (
    <div id='education'>
        <div className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 bg-gradient-to-b from-white to-blue-50 p-6 rounded-lg shadow-lg'>
            <h1 className='text-2xl font-bold'>Education</h1>
            <div className='flex items-center '>
                <Image src={lpu} alt="Lovely Professional University" className='w-32 h-32 rounded-full mx-auto ' />
                <p className='mt-2 text-neutral-700'>I am currently pursuing my B.Tech in Computer Science and Engineering from Lovely Professional University, Punjab. I have a keen interest in full-stack development and open-source contributions. Exploring Data Structures & Algorithms in Java. </p>
            </div>
            
            </div>
    </div>
  )
}

export default Education