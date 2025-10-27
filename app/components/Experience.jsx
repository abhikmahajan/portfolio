import React from 'react'

const Experience = () => {
  return (
    <div>
        <div className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 bg-gradient-to-b from-white to-blue-50 p-6 rounded-lg shadow-lg'>
            <div>
            <h1 className='text-2xl font-bold'>Experience</h1>
            <p className='mt-2 text-neutral-700'>I have worked on various projects and gained experience in different technologies. Here are some of the key experiences:</p>
        </div>
        <div className='mt-8 p-4 border border-gray-300 shadow-lg rounded-lg'>
            <h1 className='text-xl'>Contributor</h1>
            <p className='text-gray-500 flex items-center justify-between'>GirlScript Summer of Code<span className='text-gray-800'>3 Months</span></p>
            <ul className='list-disc list-inside max-w-96 text-neutral-700 lg:max-w-2xl mx-auto px-4 mt-4'>
                <li className='mt-2'>Selected as a GSSoC’25 Contributor, collaborating with developers on impactful open-source projects.</li>
                <li className='mt-2'>Resolved critical bugs and implemented new, user-focused features.</li>
                <li className='mt-2'>Refactored and optimized codebases, enhancing performance and scalability.</li>
                <li className='mt-2'>Improved and expanded documentation to streamline future contributions.</li>
                <li className='mt-2'>Successfully merged multiple PRs that elevated project functionality and user experience.</li>
            </ul>
            </div>
        <div className='mt-8 p-4 border border-gray-300 shadow-lg rounded-lg'>
            <h1 className='text-xl'>SDE Intern</h1>
            <p className='text-gray-500 flex items-center justify-between'>Bluetock Fintech<span className='text-gray-800'>2 Months</span></p>
            <ul className='list-disc list-inside max-w-96 text-neutral-700 lg:max-w-2xl mx-auto px-4 mt-4'>
                <li className='mt-2'>Built a full-featured IPO web application with separate public and admin interfaces using the MERN stack.</li>
                <li className='mt-2'>Integrated PostgreSQL database to manage IPO listings, user data, and admin operations efficiently.</li>
                <li className='mt-2'>Developed RESTful APIs for IPO listing, filtering, search, and CRUD operations with secure admin authentication.</li>
                <li className='mt-2'>Implemented PDF and image upload features for company logos and offer documents with proper access control.</li>
                <li className='mt-2'>Designed a responsive and intuitive UI based on Figma designs, optimizing user experience across devices.</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Experience