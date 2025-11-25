
import Image from 'next/image'
import React from 'react'
import abhikicon from '../../public/abhikicon.png'

const Header = () => {
  return (
    <div id='header'>
        <div className='pt-24 max-w-96 lg:max-w-2xl mx-auto px-4 lg:flex gap-10 items-center justify-center '>
            <div className='max-w-lg'>
                <h1 className='text-4xl font-bold text-black dark:text-white'>Hey! I am Abhik</h1>
                <p className='text-xl text-gray-600 dark:text-gray-400 mt-3 font-poppins'>Full Stack Developer, Open Source Enthusiast.I love building things! Turning Ideas into Functional, Scalable Products.</p>
            </div>
            <div className=' flex justify-center items-center '>
                <Image src={abhikicon} alt="Abhik Mahajan" className="rounded-full mt-5 w-40 lg:w-72"/>
            </div>
    </div>
    </div>
  );
}

export default Header