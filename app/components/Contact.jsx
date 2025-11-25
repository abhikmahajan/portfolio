import { GithubIcon, Instagram, LinkedinIcon, Mail, TwitterIcon, X } from 'lucide-react'
import React from 'react'

const Contact = () => {
  return (
    <div id='contact'>
        <div className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12 '>
            <h1 className='text-2xl font-bold text-black dark:text-white'>Contact</h1>
            <p className='mt-2 text-neutral-700 dark:text-neutral-300'>Feel free to reach out to me via email at <span className='underline text-indigo-400'><a href='mailto:abhikmahajan01@gmail.com'>Email</a>
            </span> or connect with me on <span className='underline text-indigo-400'><a href='https://www.linkedin.com/in/abhik-mahajan/'>LinkedIn</a></span>.</p>

            <div className='mt-4'>
                <p className='text-gray-600 dark:text-gray-400 text-xl'>Want to Chat? Just shoot me a dm on <span className='underline text-blue-600'><a href='https://x.com/abhikmahajan01'>X</a></span>
                . I will respond as soon as possible. I will ignore all soliciting.</p>
            </div>
            <div>
                <ul className='flex gap-6 mt-6 items-center text-black dark:text-white'>
                    <li><a href="https://x.com/abhikmahajan01"><TwitterIcon /></a></li>
                    <li><a href="https://www.linkedin.com/in/abhik-mahajan/"><LinkedinIcon /></a></li>
                    <li><a href="https://www.instagram.com/abhik_mahajan/"><Instagram /></a></li>
                    <li><a href="https://github.com/abhikmahajan"><GithubIcon /></a></li>
                    <li><a href='mailto:abhikmahajan01@gmail.com'><Mail /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Contact