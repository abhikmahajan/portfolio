'use client'

import React from 'react'
import { 
  Code, 
  Server, 
  Database, 
  Cpu, 
  Wrench,
  Hexagon
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'primary',
      skills: ['JavaScript', 'React.js', 'Tailwind', 'PrebuiltUI', 'Figma', 'Responsive'],
    },
    {
      title: 'Backend',
      icon: Server,
      color: 'accent',
      skills: ['Node.js', 'Express.js', 'PHP', 'Rest APIs'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'primary',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
    },
    {
      title: 'CS Fundamentals',
      icon: Cpu,
      color: 'accent',
      skills: ['Java', 'OOPs', 'OS', 'DBMS'],
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: 'primary',
      skills: ['Git', 'Github', 'VS Code', 'Cursor'],
    },
  ]

  return (
    <section id='skills' className='py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-4'>
          <span className='text-primary font-mono text-sm'>04.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Skills</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <p className='text-muted-foreground mb-8'>
          The skills, tools and technologies I am really good at:
        </p>

        {/* Skills grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            const colorClass = category.color === 'primary' ? 'primary' : 'accent'
            
            return (
              <div 
                key={category.title}
                className='tech-card rounded-xl p-5 hover-lift group'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className='flex items-center gap-3 mb-4'>
                  <div className={`p-2 rounded-lg bg-${colorClass}/10 border border-${colorClass}/30 group-hover:border-${colorClass}/60 transition-colors`}>
                    <Icon className={`w-5 h-5 text-${colorClass}`} />
                  </div>
                  <h3 className='font-semibold text-foreground'>{category.title}</h3>
                </div>

                {/* Skills */}
                <div className='flex flex-wrap gap-2'>
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className='relative px-3 py-1.5 text-sm font-mono bg-secondary/50 border border-border rounded-lg text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default group/skill'
                    >
                      <span className='relative z-10'>{skill}</span>
                      <span className='absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover/skill:opacity-100 transition-opacity rounded-lg' />
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tech stack visual */}
        <div className='mt-12 tech-card rounded-xl p-6'>
          <div className='flex items-center gap-2 mb-4'>
            <Hexagon className='w-5 h-5 text-primary' />
            <h3 className='font-semibold'>Tech Stack Overview</h3>
          </div>
          
          <div className='terminal'>
            <div className='terminal-header'>
              <span className='terminal-dot bg-red-500'></span>
              <span className='terminal-dot bg-yellow-500'></span>
              <span className='terminal-dot bg-green-500'></span>
              <span className='ml-2 text-xs text-muted-foreground font-mono'>tech_stack.sh</span>
            </div>
            <div className='p-4 font-mono text-sm space-y-1'>
              <p><span className='text-primary'>$</span> <span className='text-muted-foreground'>echo</span> <span className='text-accent'>$FRONTEND</span></p>
              <p className='text-foreground pl-4'>React.js + Tailwind CSS + JavaScript</p>
              <p className='mt-2'><span className='text-primary'>$</span> <span className='text-muted-foreground'>echo</span> <span className='text-accent'>$BACKEND</span></p>
              <p className='text-foreground pl-4'>Node.js + Express.js + REST APIs</p>
              <p className='mt-2'><span className='text-primary'>$</span> <span className='text-muted-foreground'>echo</span> <span className='text-accent'>$DATABASE</span></p>
              <p className='text-foreground pl-4'>PostgreSQL + MongoDB + MySQL</p>
            </div>
          </div>
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Skills
