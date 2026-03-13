'use client'

import React from 'react'
import { Briefcase, GitMerge, Code, Database, Palette, Shield, ChevronRight } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Contributor',
      company: 'GirlScript Summer of Code',
      duration: '3 Months',
      year: '2025',
      icon: GitMerge,
      highlights: [
        'Selected as a GSSoC\'25 Contributor, collaborating with developers on impactful open-source projects.',
        'Resolved critical bugs and implemented new, user-focused features.',
        'Refactored and optimized codebases, enhancing performance and scalability.',
        'Improved and expanded documentation to streamline future contributions.',
        'Successfully merged multiple PRs that elevated project functionality and user experience.',
      ],
      tags: ['Open Source', 'Git', 'Collaboration', 'Code Review'],
    },
    {
      title: 'SDE Intern',
      company: 'Bluetock Fintech',
      duration: '2 Months',
      year: '2025',
      icon: Briefcase,
      highlights: [
        'Built a full-featured IPO web application with separate public and admin interfaces using the MERN stack.',
        'Integrated PostgreSQL database to manage IPO listings, user data, and admin operations efficiently.',
        'Developed RESTful APIs for IPO listing, filtering, search, and CRUD operations with secure admin authentication.',
        'Implemented PDF and image upload features for company logos and offer documents with proper access control.',
        'Designed a responsive and intuitive UI based on Figma designs, optimizing user experience across devices.',
      ],
      tags: ['MERN Stack', 'PostgreSQL', 'REST APIs', 'Figma'],
    },
  ]

  return (
    <section id='experience' className='py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-8'>
          <span className='text-primary font-mono text-sm'>03.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Experience</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        {/* Timeline */}
        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent' />

          <div className='space-y-8'>
            {experiences.map((exp, index) => {
              const Icon = exp.icon
              return (
                <div key={index} className='relative pl-8 md:pl-20'>
                  {/* Timeline dot */}
                  <div className='absolute left-0 md:left-8 top-0 -translate-x-1/2'>
                    <div className='relative'>
                      <div className='absolute inset-0 bg-primary rounded-full blur-md opacity-50' />
                      <div className='relative w-4 h-4 bg-background border-2 border-primary rounded-full' />
                    </div>
                  </div>

                  <div className='tech-card rounded-xl p-6 hover-lift corner-accent'>
                    {/* Header */}
                    <div className='flex flex-wrap items-start justify-between gap-4 mb-4'>
                      <div className='flex items-center gap-3'>
                        <div className='p-2 rounded-lg bg-primary/10 border border-primary/30'>
                          <Icon className='w-5 h-5 text-primary' />
                        </div>
                        <div>
                          <h3 className='text-lg font-bold text-foreground'>{exp.title}</h3>
                          <p className='text-primary text-sm'>{exp.company}</p>
                        </div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full text-muted-foreground'>
                          {exp.duration}
                        </span>
                        <span className='px-3 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded-full'>
                          {exp.year}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className='space-y-2 mb-4'>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className='flex items-start gap-2 text-sm text-muted-foreground'>
                          <ChevronRight className='w-4 h-4 text-primary mt-0.5 flex-shrink-0' />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className='flex flex-wrap gap-2 pt-4 border-t border-border'>
                      {exp.tags.map((tag) => (
                        <span 
                          key={tag}
                          className='px-2 py-1 text-xs font-mono bg-accent/10 text-accent border border-accent/30 rounded'
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Experience
