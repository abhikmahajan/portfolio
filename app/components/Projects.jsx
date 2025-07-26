import React from 'react'
import Image from 'next/image'
import folderai from '../assets/folderai.png'
import weather from '../assets/weather.png'
import mentor from '../assets/mentor.png'
import oldportfolio from '../assets/oldportfolio.png'
import jobboard from '../assets/jobboard.png'
import { GitBranchPlus, Github, GithubIcon, Globe, Laptop, Laptop2 } from 'lucide-react'

const Projects = () => {

 const data = [
        {
        "id": 1,
        "title": "FolderAI",
        "description": "Folder.AI is an open-source web app that brings AI-powered content generation, image editing, and résumé analysis together—using React, Express, NeonDB, and integrations like OpenAI—for a simple, secure, and user-friendly experience.",
        "technologies": ["React", "Express.js", "Node.js", "PostgreSQL","Tailwind CSS"],
        "Weblink": "https://folder-ai-gamma.vercel.app/",
        "github":"https://github.com/abhikmahajan/folder-ai",
        "image": folderai
        },
        {
        "id": 2,
        "title": "JobBoard",
        "description": "A full-stack job board built with the MERN stack featuring role-based authentication for job seekers and recruiters. Users can post, manage, and apply to jobs with real-time search and filter functionality. The app includes secure auth, clean UI, and responsive design for all devices.",
        "technologies": ["Express.js", "MongoDB","Node.js","React","Tailwind CSS"],
        "Weblink": "",
        "github":"https://github.com/abhikmahajan/job-board-app",
        "image": jobboard  
        },
        {
        "id": 3,
        "title": "Mentor Platform",
        "description": "A full-stack mentoring platform built with the MERN stack, enabling users to register as mentors or mentees. It features secure role-based authentication, session booking, mentor listing with filters, and responsive UI for seamless interaction across devices.",
        "technologies": ["PHP","MySQL", "JavaScript", "HTML", "CSS"],
        "Weblink": "https://www.linkedin.com/posts/abhik-mahajan_collegeproject-mentorplatform-studentmentorconnect-activity-7317226080501710848-Us6y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEGpkQsBlfNLToNt6jS5tozSQdmV_g7FYPg",
        "github":"https://github.com/abhikmahajan/MentorPlatform",
        "image": mentor
        },
        {
        "id": 4,
        "title": "Weather App",
        "description": "A sleek weather application built with React that fetches real-time weather data using OpenWeatherMap API. Features include live temperature, weather conditions by city, and a responsive UI for smooth user experience across devices.",
        "technologies": ["HTML", "Tailwind CSS", "JavaScript"],
        "Weblink": "https://abhikmahajan.github.io/WeatherApp/",
        "github":"https://github.com/abhikmahajan/WeatherApp",
        "image": weather
        },
        {
        "id": 5,
        "title": "My Old Portfolio",
        "description": "My OLD personal portfolio website built with HTML, CSS, and JavaScript to showcase projects, skills, and contact information. Features a clean layout, responsive design, and smooth navigation for an engaging user experience.",
        "technologies": ["HTML", "JavaScript", "Tailwind CSS","EmailJS"],
        "Weblink": "https://abhikmahajan.github.io/old-portfolio/",
        "github":"https://github.com/abhikmahajan/old-portfolio",
        "image": oldportfolio
        }
    ]


  return (
    <div id='projects'>
        <div className='max-w-96 lg:max-w-2xl mx-auto px-4 mt-12'>
            <h1 className='text-2xl font-bold'>Projects</h1>
            <p className='mt-2 text-neutral-700'>Here are some of the projects I have worked on:</p>

            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {data.map((project) => (
                    <div key={project.id} className='mt-4 p-4 border border-gray-300 rounded-lg'>
                        
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={500}
                                height={300}
                                className='mb-4 w-full h-40 object-cover rounded'
                            />
                        <div>
                        <h2 className='text-xl font-semibold'>{project.title}</h2>
                        <p className='mt-2 text-gray-600'>{project.description}</p>
                        <p className='mt-2 text-gray-500'>Technologies: {project.technologies.join(', ')}</p>
                        <div className='flex items-center mt-2 gap-4'>
                        <a href={project.Weblink}><Globe/></a>
                        <a href={project.github} ><Github/></a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </div>
  )
}

export default Projects