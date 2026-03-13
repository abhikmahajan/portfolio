'use client'

import React from 'react'
import Image from 'next/image'
import folderai from '../assets/folderai.png'
import weather from '../assets/weather.png'
import mentor from '../assets/mentor.png'
import oldportfolio from '../assets/oldportfolio.png'
import jobboard from '../assets/jobboard.png'
import { Github, Globe, ExternalLink, Folder, Star } from 'lucide-react'

const Projects = () => {
  const featuredProjects = [
    {
      id: 1,
      title: "FolderAI",
      description: "Folder.AI is an open-source web app that brings AI-powered content generation, image editing, and resume analysis together—using React, Express, NeonDB, and integrations like OpenAI—for a simple, secure, and user-friendly experience.",
      technologies: ["React", "Express.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      weblink: "https://folder-ai-gamma.vercel.app/",
      github: "https://github.com/abhikmahajan/folder-ai",
      image: folderai,
      featured: true,
    },
    {
      id: 2,
      title: "JobBoard",
      description: "A full-stack job board built with the MERN stack featuring role-based authentication for job seekers and recruiters. Users can post, manage, and apply to jobs with real-time search and filter functionality.",
      technologies: ["Express.js", "MongoDB", "Node.js", "React", "Tailwind CSS"],
      weblink: "",
      github: "https://github.com/abhikmahajan/job-board-app",
      image: jobboard,
      featured: true,
    },
  ]

  const otherProjects = [
    {
      id: 3,
      title: "Mentor Platform",
      description: "A full-stack mentoring platform enabling users to register as mentors or mentees with secure role-based authentication and session booking.",
      technologies: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
      weblink: "https://www.linkedin.com/posts/abhik-mahajan_collegeproject-mentorplatform-studentmentorconnect-activity-7317226080501710848-Us6y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEGpkQsBlfNLToNt6jS5tozSQdmV_g7FYPg",
      github: "https://github.com/abhikmahajan/MentorPlatform",
      image: mentor,
    },
    {
      id: 4,
      title: "Weather App",
      description: "A sleek weather application that fetches real-time weather data using OpenWeatherMap API with responsive UI.",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      weblink: "https://abhikmahajan.github.io/WeatherApp/",
      github: "https://github.com/abhikmahajan/WeatherApp",
      image: weather,
    },
    {
      id: 5,
      title: "My Old Portfolio",
      description: "My OLD personal portfolio website built with HTML, CSS, and JavaScript to showcase projects and skills.",
      technologies: ["HTML", "JavaScript", "Tailwind CSS", "EmailJS"],
      weblink: "https://abhikmahajan.github.io/old-portfolio/",
      github: "https://github.com/abhikmahajan/old-portfolio",
      image: oldportfolio,
    },
  ]

  return (
    <section id='projects' className='py-12 px-4'>
      <div className='max-w-5xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-4'>
          <span className='text-primary font-mono text-sm'>05.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Projects</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <p className='text-muted-foreground mb-12'>
          Here are some of the projects I have worked on:
        </p>

        {/* Featured Projects */}
        <div className='space-y-16'>
          {featuredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`relative grid lg:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? 'lg:text-right' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <a 
                  href={project.weblink || project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='block relative group'
                >
                  <div className='absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity' />
                  <div className='relative overflow-hidden rounded-lg border border-border'>
                    <div className='absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10' />
                    <Image 
                      src={project.image}
                      alt={project.title}
                      width={700}
                      height={400}
                      className='w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                  </div>
                </a>
              </div>

              {/* Project Info */}
              <div className={`lg:col-span-6 lg:row-start-1 ${
                index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-6'
              }`}>
                <div className={`relative z-10 ${index % 2 === 1 ? 'lg:text-left' : 'lg:text-right'}`}>
                  <p className='text-primary font-mono text-sm mb-2'>Featured Project</p>
                  <h3 className='text-2xl font-bold mb-4 glitch' data-text={project.title}>
                    {project.title}
                  </h3>
                  
                  <div className='tech-card rounded-lg p-6 mb-4'>
                    <p className='text-muted-foreground text-sm leading-relaxed'>
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack */}
                  <div className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'
                  }`}>
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className='text-xs font-mono text-primary'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className={`flex gap-4 ${
                    index % 2 === 1 ? 'lg:justify-start' : 'lg:justify-end'
                  }`}>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='p-2 text-muted-foreground hover:text-primary transition-colors'
                      aria-label="View GitHub"
                    >
                      <Github className='w-5 h-5' />
                    </a>
                    {project.weblink && (
                      <a 
                        href={project.weblink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='p-2 text-muted-foreground hover:text-primary transition-colors'
                        aria-label="View Live Site"
                      >
                        <ExternalLink className='w-5 h-5' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className='mt-20'>
          <h3 className='text-xl font-bold text-center mb-8'>
            Other Noteworthy Projects
          </h3>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {otherProjects.map((project) => (
              <div 
                key={project.id}
                className='tech-card rounded-xl p-6 hover-lift group flex flex-col h-full'
              >
                {/* Header */}
                <div className='flex items-start justify-between mb-4'>
                  <div className='p-3 rounded-lg bg-primary/10 border border-primary/30'>
                    <Folder className='w-6 h-6 text-primary' />
                  </div>
                  <div className='flex gap-3'>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='text-muted-foreground hover:text-primary transition-colors'
                      aria-label="GitHub"
                    >
                      <Github className='w-5 h-5' />
                    </a>
                    {project.weblink && (
                      <a 
                        href={project.weblink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='text-muted-foreground hover:text-primary transition-colors'
                        aria-label="Live Demo"
                      >
                        <ExternalLink className='w-5 h-5' />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h4 className='text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2'>
                  {project.title}
                </h4>
                <p className='text-sm text-muted-foreground leading-relaxed flex-grow'>
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className='flex flex-wrap gap-2 mt-4 pt-4 border-t border-border'>
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech}
                      className='text-xs font-mono text-muted-foreground'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Projects
