'use client'

import { Home, User, Layers, Briefcase, FolderKanban, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('header')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const navItems = [
    { id: 'header', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Layers, label: 'Skills' },
    { id: 'experience', icon: Briefcase, label: 'Work' },
    { id: 'projects', icon: FolderKanban, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)

      // Update active section
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(navItems[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className='relative'>
        {/* Glow effect */}
        <div className='absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-2xl blur-xl opacity-60' />
        
        {/* Nav container */}
        <div className='relative px-2 py-2 bg-card/90 backdrop-blur-xl border border-border rounded-2xl shadow-2xl'>
          <ul className='flex items-center gap-1'>
            {navItems.map(({ id, icon: Icon, label }) => {
              const isActive = activeSection === id
              
              return (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 group ${
                      isActive 
                        ? 'text-primary' 
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                    aria-label={label}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <span className='absolute inset-0 bg-primary/10 border border-primary/30 rounded-xl' />
                    )}
                    
                    <Icon className='w-5 h-5 relative z-10' />
                    <span className='hidden md:block text-sm font-medium relative z-10'>
                      {label}
                    </span>

                    {/* Hover tooltip for mobile */}
                    <span className='md:hidden absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-card border border-border rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none'>
                      {label}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Decorative corner accents */}
        <div className='absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary' />
        <div className='absolute -top-1 -right-1 w-2 h-2 border-t border-r border-primary' />
        <div className='absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-primary' />
        <div className='absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary' />
      </div>
    </nav>
  )
}

export default Navbar
