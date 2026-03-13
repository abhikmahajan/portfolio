'use client'

import React from 'react'
import { Code2, GitPullRequest, Rocket, Zap } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Code2, value: '1+', label: 'Years Coding' },
    { icon: Rocket, value: '10+', label: 'Projects Built' },
    { icon: GitPullRequest, value: '50+', label: 'PRs Merged' },
  ]

  return (
    <section id='about' className='py-24 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-8'>
          <span className='text-primary font-mono text-sm'>01.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>About Me</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <div className='grid lg:grid-cols-5 gap-8'>
          {/* Main content */}
          <div className='lg:col-span-3 space-y-6'>
            <div className='tech-card rounded-xl p-6 corner-accent'>
              <p className='text-muted-foreground leading-relaxed'>
                I wrote my first line of code in <span className='code-text'>2024</span>, and since then my coding graph has been booming exponentially. I am currently building real-world projects and pursuing{' '}
                <a href='#education' className='text-primary hover:underline'>
                  B.Tech from Lovely Professional University
                </a>.
              </p>
              
              <p className='text-muted-foreground leading-relaxed mt-4'>
                Exploring <span className='text-accent'>Web3</span> and <span className='text-accent'>Blockchain</span>, and started making open source contributions. Blending code, creativity and discipline - full-stack developer driven by tech, fitness, and music.
              </p>

              {/* Quick info */}
              <div className='mt-6 pt-6 border-t border-border'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center gap-2'>
                    <Zap className='w-4 h-4 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Focus: <span className='text-foreground'>Full Stack</span>
                    </span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Zap className='w-4 h-4 text-primary' />
                    <span className='text-sm text-muted-foreground'>
                      Location: <span className='text-foreground'>India</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats cards */}
          <div className='lg:col-span-2 space-y-4'>
            {stats.map(({ icon: Icon, value, label }, index) => (
              <div 
                key={label}
                className='tech-card rounded-xl p-5 hover-lift flex items-center gap-4'
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className='p-3 rounded-lg bg-primary/10 border border-primary/20'>
                  <Icon className='w-6 h-6 text-primary' />
                </div>
                <div>
                  <p className='text-2xl font-bold gradient-text'>{value}</p>
                  <p className='text-sm text-muted-foreground'>{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative divider */}
        <div className='section-divider' />
      </div>
    </section>
  )
}

export default About
