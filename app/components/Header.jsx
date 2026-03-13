'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import abhikicon from '../../public/abhikicon.png'
import { ChevronDown, Github, Linkedin, Twitter, Terminal } from 'lucide-react'

const Header = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const fullText = "Full Stack Developer"
  
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id='header' className='min-h-screen flex items-center justify-center px-4 relative'>
      <div className='max-w-5xl mx-auto w-full'>
        <div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16'>
          
          {/* Left content */}
          <div className='flex-1 text-center lg:text-left'>
            {/* Terminal-style intro */}
            <div className='terminal max-w-md mx-auto lg:mx-0 mb-8'>
              <div className='terminal-header'>
                <span className='terminal-dot bg-red-500'></span>
                <span className='terminal-dot bg-yellow-500'></span>
                <span className='terminal-dot bg-green-500'></span>
                <span className='ml-2 text-xs text-muted-foreground font-mono'>~/abhik</span>
              </div>
              <div className='p-4 font-mono text-sm'>
                <p className='text-muted-foreground'>
                  <span className='text-primary'>$</span> whoami
                </p>
                <p className='text-foreground mt-1'>abhik_mahajan</p>
                <p className='text-muted-foreground mt-2'>
                  <span className='text-primary'>$</span> cat status.txt
                </p>
                <p className='text-accent mt-1 flex items-center gap-2'>
                  <span className='status-online'></span>
                  Available for opportunities
                </p>
              </div>
            </div>

            {/* Main heading */}
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              <span className='text-foreground'>Hey! I am </span>
              <span className='gradient-text glitch' data-text="Abhik">Abhik</span>
            </h1>

            {/* Typing effect subtitle */}
            <div className='mt-4 flex items-center justify-center lg:justify-start gap-2'>
              <Terminal className='w-5 h-5 text-primary' />
              <p className='text-xl md:text-2xl font-mono text-muted-foreground'>
                {displayText}
                <span className={`text-primary ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
              </p>
            </div>

            {/* Description */}
            <p className='mt-6 text-muted-foreground text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed'>
              Open Source Enthusiast. I love building things! 
              <span className='text-primary'> Turning Ideas into Functional, Scalable Products.</span>
            </p>

            {/* CTA Buttons */}
            <div className='mt-8 flex flex-wrap gap-4 justify-center lg:justify-start'>
              <a 
                href='#projects'
                className='px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover-lift neon-box'
              >
                View Projects
              </a>
              <a 
                href='#contact'
                className='px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all'
              >
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className='mt-8 flex gap-4 justify-center lg:justify-start'>
              {[
                { icon: Github, href: 'https://github.com/abhikmahajan', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/abhik-mahajan/', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/abhikmahajan01', label: 'Twitter' },
              ].map(({ icon: Icon, href, label }) => (
                <a 
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='p-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-all hover-lift'
                  aria-label={label}
                >
                  <Icon className='w-5 h-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Right - Avatar */}
          <div className='relative'>
            {/* Decorative elements */}
            <div className='absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-2xl' />
            <div className='absolute -inset-2 border border-primary/30 rounded-full animate-pulse' />
            <div className='absolute -inset-6 border border-accent/20 rounded-full' style={{ animationDelay: '1s' }} />
            
            {/* Avatar container */}
            <div className='relative pulse-ring'>
              <div className='relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/50'>
                <Image 
                  src={abhikicon} 
                  alt="Abhik Mahajan" 
                  fill
                  className='object-cover'
                  priority
                />
              </div>
            </div>

            {/* Floating badge */}
            <div className='absolute -bottom-2 -right-2 bg-card border border-primary px-3 py-1 rounded-full text-xs font-mono text-primary floating'>
              {'<Developer />'}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground'>
          <span className='text-xs font-mono'>scroll_down</span>
          <ChevronDown className='w-5 h-5 animate-bounce text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Header
