'use client'

import { Github, Instagram, Linkedin, Mail, Twitter, Send, MessageSquare } from 'lucide-react'
import React from 'react'

const Contact = () => {
  const socials = [
    { icon: Twitter, href: 'https://x.com/abhikmahajan01', label: 'Twitter', username: '@abhikmahajan01' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/abhik-mahajan/', label: 'LinkedIn', username: 'abhik-mahajan' },
    { icon: Instagram, href: 'https://www.instagram.com/abhik_mahajan/', label: 'Instagram', username: '@abhik_mahajan' },
    { icon: Github, href: 'https://github.com/abhikmahajan', label: 'GitHub', username: 'abhikmahajan' },
  ]

  return (
    <section id='contact' className='py-24 px-4 pb-40'>
      <div className='max-w-2xl mx-auto text-center'>
        {/* Section header */}
        <div className='flex items-center justify-center gap-4 mb-4'>
          <div className='flex-1 h-px bg-gradient-to-l from-primary/50 to-transparent max-w-20' />
          <span className='text-primary font-mono text-sm'>06.</span>
          <div className='flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent max-w-20' />
        </div>

        <h2 className='text-3xl md:text-4xl font-bold mb-6'>
          Get In <span className='gradient-text'>Touch</span>
        </h2>

        <p className='text-muted-foreground leading-relaxed mb-8'>
          {"I'm"} currently looking for new opportunities. Whether you have a question, 
          a project idea, or just want to say hi, {"I'd"} love to hear from you!
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <a 
            href='mailto:abhikmahajan01@gmail.com'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover-lift neon-box'
          >
            <Mail className='w-5 h-5' />
            Say Hello
          </a>
          <a 
            href='https://x.com/abhikmahajan01'
            target="_blank"
            rel="noopener noreferrer"
            className='inline-flex items-center justify-center gap-2 px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all'
          >
            <MessageSquare className='w-5 h-5' />
            DM on X
          </a>
        </div>

        {/* Terminal style message */}
        <div className='terminal max-w-md mx-auto mb-12'>
          <div className='terminal-header'>
            <span className='terminal-dot bg-red-500'></span>
            <span className='terminal-dot bg-yellow-500'></span>
            <span className='terminal-dot bg-green-500'></span>
            <span className='ml-2 text-xs text-muted-foreground font-mono'>contact.sh</span>
          </div>
          <div className='p-4 font-mono text-sm text-left'>
            <p className='text-muted-foreground'>
              <span className='text-primary'>$</span> cat message.txt
            </p>
            <p className='text-foreground mt-1'>
              Want to chat? Just shoot me a dm on X.
            </p>
            <p className='text-foreground'>
              I will respond as soon as possible.
            </p>
            <p className='text-muted-foreground mt-2'>
              <span className='text-primary'>$</span> <span className='typing-cursor'></span>
            </p>
          </div>
        </div>

        {/* Social links */}
        <div className='flex flex-wrap gap-4 justify-center'>
          {socials.map(({ icon: Icon, href, label }) => (
            <a 
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className='p-4 tech-card rounded-xl hover-lift hover:border-primary/50 transition-all group'
              aria-label={label}
            >
              <Icon className='w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors' />
            </a>
          ))}
          <a 
            href='mailto:abhikmahajan01@gmail.com'
            className='p-4 tech-card rounded-xl hover-lift hover:border-primary/50 transition-all group'
            aria-label="Email"
          >
            <Mail className='w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors' />
          </a>
        </div>

        {/* Footer */}
        <div className='mt-16 pt-8 border-t border-border'>
          <p className='text-muted-foreground text-sm font-mono'>
            <span className='text-primary'>{'<'}</span>
            Built with Next.js & Tailwind
            <span className='text-primary'>{' />'}</span>
          </p>
          <p className='text-muted-foreground text-xs mt-2'>
            Designed & Built by Abhik Mahajan
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
