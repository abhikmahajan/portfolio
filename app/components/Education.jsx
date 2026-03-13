'use client'

import Image from 'next/image'
import React from 'react'
import lpu from '../assets/lpu.jpeg'
import { GraduationCap, MapPin, Calendar, BookOpen } from 'lucide-react'

const Education = () => {
  return (
    <section id='education' className='py-12 px-4'>
      <div className='max-w-4xl mx-auto'>
        {/* Section header */}
        <div className='flex items-center gap-4 mb-8'>
          <span className='text-primary font-mono text-sm'>02.</span>
          <h2 className='text-2xl md:text-3xl font-bold'>Education</h2>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent' />
        </div>

        <div className='tech-card rounded-xl p-6 md:p-8 hover-lift'>
          <div className='flex flex-col md:flex-row gap-6 items-center md:items-start'>
            {/* University logo */}
            <div className='relative'>
              <div className='absolute -inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-xl' />
              <div className='relative w-24 h-24 rounded-full overflow-hidden border-2 border-primary/50'>
                <Image 
                  src={lpu} 
                  alt="Lovely Professional University" 
                  fill
                  className='object-cover'
                />
              </div>
            </div>

            {/* Education details */}
            <div className='flex-1 text-center md:text-left'>
              <div className='flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2'>
                <h3 className='text-xl font-bold text-foreground'>Lovely Professional University</h3>
                <span className='px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 rounded'>
                  2023 - 2027
                </span>
              </div>
              
              <p className='text-primary font-medium flex items-center justify-center md:justify-start gap-2'>
                <GraduationCap className='w-4 h-4' />
                B.Tech in Computer Science and Engineering
              </p>
              
              <div className='flex flex-wrap gap-4 mt-3 justify-center md:justify-start text-sm text-muted-foreground'>
                <span className='flex items-center gap-1'>
                  <MapPin className='w-4 h-4' />
                  Punjab, India
                </span>
                <span className='flex items-center gap-1'>
                  <Calendar className='w-4 h-4' />
                  Expected 2027
                </span>
              </div>

              <p className='mt-4 text-muted-foreground leading-relaxed'>
                Keen interest in full-stack development and open-source contributions. 
                Exploring Data Structures & Algorithms in Java.
              </p>

              {/* Focus areas */}
              <div className='mt-4 flex flex-wrap gap-2 justify-center md:justify-start'>
                {['Full Stack Dev', 'Open Source', 'DSA', 'Web3'].map((area) => (
                  <span 
                    key={area}
                    className='px-3 py-1 text-xs font-mono bg-secondary border border-border rounded-full text-muted-foreground'
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='section-divider' />
      </div>
    </section>
  )
}

export default Education
