import React from 'react'

const Experience = () => {
  return (
    <div>
        <div className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12'>
            <div>
            <h1 className='text-2xl font-bold'>Experience</h1>
            <p className='mt-2 text-neutral-700'>I have worked on various projects and gained experience in different technologies. Here are some of the key experiences:</p>
        </div>
        <div className='mt-4 p-4 border border-gray-300 rounded-lg'>
            <h1 className='text-xl'>SDE Intern</h1>
            <p className='text-gray-500 flex items-center justify-between'>Bluetock Fintech<span className='text-gray-800'>2 Months</span></p>
            <ul className='list-disc list-inside max-w-96 text-neutral-700 lg:max-w-2xl mx-auto px-4 mt-4'>
                <li className='mt-2'>Built a full-featured IPO web application with separate public and admin interfaces using the MERN stack.</li>
                <li className='mt-2'>Integrated PostgreSQL database to manage IPO listings, user data, and admin operations efficiently.</li>
                <li className='mt-2'>Developed RESTful APIs for IPO listing, filtering, search, and CRUD operations with secure admin authentication.</li>
                <li className='mt-2'>Implemented PDF and image upload features for company logos and offer documents with proper access control.</li>
                <li className='mt-2'>Designed a responsive and intuitive UI based on Figma designs, optimizing user experience across devices.

</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience